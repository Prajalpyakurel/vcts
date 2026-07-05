<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCareerRequest;
use App\Http\Requests\UpdateCareerRequest;
use App\Models\Career;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $careers = Career::query()->latest()->paginate(10);
        return Inertia::render('backend/career/index/index', [
            'careers' => $careers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('backend/career/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCareerRequest $request)
    {
        $data = $request->validated();
        try {
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('careers', 'public');
            }

            Career::query()->create([
                'image' => $imagePath,
                'title' => $data['title'],
                'slug' => $data['course_short_name'],
                'designation' => $data['designation'] ?? null,
                'type' => $data['type'],
                'description' => $data['description'] ?? null,
                'status' => $data['status'],
            ]);

            return redirect()->route('careerIndex')->with('success', 'Career created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create career: ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Career creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Career $career)
    {
        return Inertia::render('backend/career/edit/index', [
            'career' => $career,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCareerRequest $request, Career $career)
    {
        $data = $request->validated();
        try {
            if ($request->hasFile('image')) {
                if ($career->image && Storage::disk('public')->exists($career->image)) {
                    Storage::disk('public')->delete($career->image);
                }

                $imagePath = $request->file('image')->store('careers', 'public');
                $data['image'] = $imagePath;
            }

            $career->update([
                'image' => $data['image'] ?? $career->image,
                'title' => $data['title'],
                'slug' => $data['course_short_name'],
                'designation' => $data['designation'] ?? null,
                'type' => $data['type'],
                'description' => $data['description'] ?? null,
                'status' => $data['status'],
            ]);
            return redirect()->route('careerIndex')->with('success', 'Career updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update career: ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Career update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Career $career)
    {
        try {
            if ($career->image && Storage::disk('public')->exists($career->image)) {
                Storage::disk('public')->delete($career->image);
            }
            $career->delete();
            return redirect()->route('careerIndex')->with('success', 'Career deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete career: ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Career deletion failed.');
        }
    }
}
