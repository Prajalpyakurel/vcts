<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreInformationRequest;
use App\Http\Requests\UpdateInformationRequest;
use App\Models\Information;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class InformationController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $informations = Information::query()->latest()->paginate(10);
        return Inertia::render('backend/information/index/index', [
            'informations' => $informations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('backend/information/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInformationRequest $request)
    {
        $data = $request->validated();
        try {
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('informations', 'public');
            }

            Information::query()->create([
                'slug' => Str::slug($data['title'] . '-' . Str::random(5)),
                'image' => $imagePath,
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
                'status' => $data['status'],
                'type' => $data['type'],
            ]);

            return redirect()->route('informationIndex')->with('success', 'Information created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create information section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Information creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function show(Information $information)
    {
        return Inertia::render('backend/information/show/index', [
            'information' => $information,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Information $information)
    {
        return Inertia::render('backend/information/edit/index', [
            'information' => $information,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInformationRequest $request, Information $information)
    {
        $data = $request->validated();
        try {
            if ($request->hasFile('image')) {
                if ($information->image && Storage::disk('public')->exists($information->image)) {
                    Storage::disk('public')->delete($information->image);
                }

                $imagePath = $request->file('image')->store('informations', 'public');
                $data['image'] = $imagePath;
            }

            $information->update([
                'slug' => Str::slug($data['title'] . '-' . Str::random(5)),
                'image' => $data['image'] ?? $information->image,
                'title' => $data['title'],
                'description' => $data['description'] ?? null,
                'status' => $data['status'],
                'type' => $data['type'],
            ]);
            return redirect()->route('informationIndex')->with('success', 'Information updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update information:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Information update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Information $information)
    {
        try {
            if ($information->image && Storage::disk('public')->exists($information->image)) {
                Storage::disk('public')->delete($information->image);
            }
            $information->delete();
            return redirect()->route('informationIndex')->with('success', 'Information deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete information:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Information deletion failed.');
        }
    }
}
