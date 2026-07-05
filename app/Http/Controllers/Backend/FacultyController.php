<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFacultyRequest;
use App\Http\Requests\UpdateFacultyRequest;
use App\Models\Faculty;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class FacultyController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $faculties = Faculty::query()->latest()->paginate(10);
        return Inertia::render('backend/faculty/index/index', [
            'faculties' => $faculties,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('backend/faculty/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFacultyRequest $request)
    {
        $data = $request->validated();
        try {
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('faculties', 'public');
            }

            Faculty::query()->create([
                'image' => $imagePath,
                'name' => $data['name'],
                'slug' => Str::slug($data['name']),
                'description' => $data['description'] ?? null,
                'designation' => $data['designation'] ?? null,
                'order_no' => $data['order_no'] ?? null,
                'phone_no' => $data['phone_no'] ?? null,
                'email' => $data['email'] ?? null,
                'message' => $data['message'] ?? null,
                'status' => $data['status'],
            ]);

            return redirect()->route('facultyIndex')->with('success', 'Faculty created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create faculty section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Faculty creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Faculty $faculty)
    {
        return Inertia::render('backend/faculty/edit/index', [
            'faculty' => $faculty,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFacultyRequest $request, Faculty $faculty)
    {
        $data = $request->validated();
        try {
            if ($request->hasFile('image')) {
                if ($faculty->image && Storage::disk('public')->exists($faculty->image)) {
                    Storage::disk('public')->delete($faculty->image);
                }

                $imagePath = $request->file('image')->store('faculties', 'public');
                $data['image'] = $imagePath;
            }

            $faculty->update([
                'image' => $data['image'] ?? $faculty->image,
                'name' => $data['name'],
                'description' => $data['description'] ?? null,
                'designation' => $data['designation'] ?? null,
                'order_no' => $data['order_no'] ?? null,
                'phone_no' => $data['phone_no'] ?? null,
                'email' => $data['email'] ?? null,
                'message' => $data['message'] ?? null,
                'status' => $data['status'],
            ]);
            return redirect()->route('facultyIndex')->with('success', 'Faculty updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update faculty:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Faculty update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Faculty $faculty)
    {
        try {
            if ($faculty->image && Storage::disk('public')->exists($faculty->image)) {
                Storage::disk('public')->delete($faculty->image);
            }
            $faculty->delete();
            return redirect()->route('facultyIndex')->with('success', 'Faculty deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete faculty:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Faculty deletion failed.');
        }
    }
}
