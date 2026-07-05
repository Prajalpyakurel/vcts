<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStudentFeedbackRequest;
use App\Http\Requests\UpdateStudentFeedbackRequest;
use App\Models\StudentFeedback;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class StudentFeedbackController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $studentFeedbacks = StudentFeedback::query()->paginate(10);
        return Inertia::render('backend/student-feedback/index/index', [
            'studentFeedbacks' => $studentFeedbacks,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('backend/student-feedback/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentFeedbackRequest $request)
    {
        $data = $request->validated();
        try {
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('studentFeedbacks', 'public');
            }

            StudentFeedback::query()->create([
                'image' => $imagePath,
                'name' => $data['name'],
                'email' => $data['email'] ?? null,
                'student_course' => $data['student_course'] ?? null,
                'feedback' => $data['feedback'] ?? null,
                'status' => $data['status'],
            ]);

            return redirect()->route('studentFeedbackIndex')->with('success', 'Student feedback created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create student feedback section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Student feedback creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(StudentFeedback $studentFeedback)
    {
        return Inertia::render('backend/student-feedback/edit/index', [
            'studentFeedback' => $studentFeedback,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentFeedbackRequest $request, StudentFeedback $studentFeedback)
    {
        $data = $request->validated();
        try {
            if ($request->hasFile('image')) {
                if ($studentFeedback->image && Storage::disk('public')->exists($studentFeedback->image)) {
                    Storage::disk('public')->delete($studentFeedback->image);
                }

                $imagePath = $request->file('image')->store('studentFeedbacks', 'public');
                $data['image'] = $imagePath;
            }

            $studentFeedback->update([
                'image' => $data['image'] ?? $studentFeedback->image,
                'name' => $data['name'],
                'email' => $data['email'] ?? null,
                'student_course' => $data['student_course'] ?? null,
                'feedback' => $data['feedback'] ?? null,
                'status' => $data['status'],
            ]);
            return redirect()->route('studentFeedbackIndex')->with('success', 'Student feedback updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update hero section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Student feedback update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StudentFeedback $studentFeedback)
    {
        try {
            if ($studentFeedback->image && Storage::disk('public')->exists($studentFeedback->image)) {
                Storage::disk('public')->delete($studentFeedback->image);
            }
            $studentFeedback->delete();
            return redirect()->route('studentFeedbackIndex')->with('success', 'Student feedback deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete hero section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Student feedback deletion failed.');
        }
    }
}
