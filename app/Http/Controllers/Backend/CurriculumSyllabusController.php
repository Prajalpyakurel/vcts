<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCurriculumSyllabusRequest;
use App\Http\Requests\UpdateCurriculumSyllabusRequest;
use App\Models\CurriculumSyllabus;
use Exception;
use Illuminate\Support\Facades\Log;

class CurriculumSyllabusController extends Controller
{
    /**
     * Store a newly created subject under a curriculum stage.
     */
    public function store(StoreCurriculumSyllabusRequest $request)
    {
        $data = $request->validated();
        try {
            CurriculumSyllabus::query()->create([
                'curricula_id' => $data['curricula_id'],
                'name' => $data['name'],
            ]);

            return redirect()
                ->route('curriculumEdit', $data['curricula_id'])
                ->with('success', 'Subject added successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create curriculum syllabus: ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Failed to add subject.');
        }
    }

    /**
     * Update the specified subject's name.
     */
    public function update(UpdateCurriculumSyllabusRequest $request, CurriculumSyllabus $curriculumSyllabus)
    {
        try {
            $curriculumSyllabus->update([
                'name' => $request->validated('name'),
            ]);

            return redirect()
                ->route('curriculumEdit', $curriculumSyllabus->curricula_id)
                ->with('success', 'Subject updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update curriculum syllabus: ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Failed to update subject.');
        }
    }

    /**
     * Remove the specified subject.
     */
    public function destroy(CurriculumSyllabus $curriculumSyllabus)
    {
        try {
            $curriculaId = $curriculumSyllabus->curricula_id;
            $curriculumSyllabus->delete();

            return redirect()
                ->route('curriculumEdit', $curriculaId)
                ->with('success', 'Subject deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete curriculum syllabus: ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Failed to delete subject.');
        }
    }
}
