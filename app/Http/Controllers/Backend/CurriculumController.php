<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCurriculumRequest;
use App\Http\Requests\UpdateCurriculumRequest;
use App\Models\Course;
use App\Models\Curriculum;
use Exception;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class CurriculumController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $curriculums = Curriculum::query()->with(['course', 'curriculumSyllabus'])->latest()->paginate(10);
        return Inertia::render('backend/curriculum/index/index', [
            'curriculums' => $curriculums,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $courses = Course::query()->select('id', 'name')->get();
        return Inertia::render('backend/curriculum/create/index', [
            'courses' => $courses,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCurriculumRequest $request)
    {
        $data = $request->validated();
        try {
            Curriculum::query()->create([
                'course_id' => $data['course_id'],
                'name' => $data['name'],
                'credit_hours' => $data['credit_hours'] ?? '—',
                'curricula_duration' => $data['curricula_duration'],
            ]);

            return redirect()->route('curriculumIndex')->with('success', 'Curriculum created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create curriculum section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Curriculum creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Curriculum $curriculum)
    {
        $courses = Course::query()->select('id', 'name')->get();
        $curriculum->load('curriculumSyllabus');
        return Inertia::render('backend/curriculum/edit/index', [
            'curriculum' => $curriculum,
            'courses' => $courses,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCurriculumRequest $request, Curriculum $curriculum)
    {
        $data = $request->validated();
        try {
            $curriculum->update([
                'course_id' => $data['course_id'],
                'name' => $data['name'],
                'credit_hours' => $data['credit_hours'] ?? '—',
                'curricula_duration' => $data['curricula_duration'],
            ]);
            return redirect()->route('curriculumIndex')->with('success', 'Curriculum updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update curriculum:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Curriculum update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Curriculum $curriculum)
    {
        try {
            $curriculum->delete();
            return redirect()->route('curriculumIndex')->with('success', 'Curriculum deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete curriculum:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Curriculum deletion failed.');
        }
    }
}
