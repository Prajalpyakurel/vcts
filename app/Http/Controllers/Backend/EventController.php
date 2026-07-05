<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Models\Event;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $events = Event::query()->latest()->paginate(10);
        return Inertia::render('backend/event/index/index', [
            'events' => $events,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('backend/event/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRequest $request)
    {
        $data = $request->validated();
        try {
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('events', 'public');
            }

            Event::query()->create([
                'image' => $imagePath,
                'name' => $data['name'],
                'slug' => Str::slug($data['name'] . '-' . Str::random(5)),
                'description' => $data['description'] ?? null,
                'event_date' => $data['event_date'] ?? null,
                'event_time' => $data['event_time'] ?? null,
                'event_venue' => $data['event_venue'] ?? null,
                'status' => $data['status'],
            ]);

            return redirect()->route('eventIndex')->with('success', 'Event created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create event section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Event creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        return Inertia::render('backend/event/edit/index', [
            'event' => $event,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, Event $event)
    {
        $data = $request->validated();
        try {
            if ($request->hasFile('image')) {
                if ($event->image && Storage::disk('public')->exists($event->image)) {
                    Storage::disk('public')->delete($event->image);
                }

                $imagePath = $request->file('image')->store('events', 'public');
                $data['image'] = $imagePath;
            }

            $event->update([
                'slug' => Str::slug($data['name'] . '-' . Str::random(5)),
                'image' => $data['image'] ?? $event->image,
                'name' => $data['name'],
                'description' => $data['description'] ?? null,
                'event_date' => $data['event_date'] ?? null,
                'event_time' => $data['event_time'] ?? null,
                'event_venue' => $data['event_venue'] ?? null,
                'status' => $data['status'],
            ]);
            return redirect()->route('eventIndex')->with('success', 'Event updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update event:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Event update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        try {
            if ($event->image && Storage::disk('public')->exists($event->image)) {
                Storage::disk('public')->delete($event->image);
            }
            $event->delete();
            return redirect()->route('eventIndex')->with('success', 'Event deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete event:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Event deletion failed.');
        }
    }
}
