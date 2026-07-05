<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Models\Course;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class CourseController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $courses = Course::query()->latest()->paginate(10);
        return Inertia::render('backend/course/index/index', [
            'courses' => $courses,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('backend/course/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        $data = $request->validated();
        try {
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('courses', 'public');
            }

            Course::query()->create([
                'image' => $imagePath,
                'name' => $data['name'],
                'slug' => $data['course_short_name'],
                'description' => $data['description'] ?? null,
                'education_level' => $data['education_level'] ?? null,
                'university' => $data['university'] ?? null,
                'status' => $data['status'],
            ]);

            return redirect()->route('courseIndex')->with('success', 'Course created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create course section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Course creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        return Inertia::render('backend/course/edit/index', [
            'course' => $course,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        $data = $request->validated();
        try {
            if ($request->hasFile('image')) {
                if ($course->image && Storage::disk('public')->exists($course->image)) {
                    Storage::disk('public')->delete($course->image);
                }

                $imagePath = $request->file('image')->store('courses', 'public');
                $data['image'] = $imagePath;
            }

            $course->update([
                'image' => $data['image'] ?? $course->image,
                'name' => $data['name'],
                'slug' => $data['course_short_name'],
                'description' => $data['description'] ?? null,
                'education_level' => $data['education_level'] ?? null,
                'university' => $data['university'] ?? null,
                'status' => $data['status'],
            ]);
            return redirect()->route('courseIndex')->with('success', 'Course updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update course:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Course update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        try {
            if ($course->image && Storage::disk('public')->exists($course->image)) {
                Storage::disk('public')->delete($course->image);
            }
            $course->delete();
            return redirect()->route('courseIndex')->with('success', 'Course deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete course:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Course deletion failed.');
        }
    }
}
