<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use App\Models\Department;
use App\Models\Faculty;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class DepartmentController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $departments = Department::query()->latest()->paginate(10);
        $departments->map(function ($item) {
            $item->faculty_id = json_decode($item->faculty_id);
            $item->faculties = Faculty::query()->whereIn('id', $item->faculty_id)->get();
        });
        return Inertia::render('backend/department/index/index', [
            'departments' => $departments,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('backend/department/create/index', [
            'faculties' => Faculty::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDepartmentRequest $request)
    {
        $data = $request->validated();

        try {
            Department::query()->create([
                'name' => $data['name'],
                'faculty_id' => json_encode($data['faculty_id']),
            ]);

            return redirect()->route('departmentIndex')->with('success', 'Department created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create department section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Department creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Department $department)
    {
        $department->faculty_id = json_decode($department->faculty_id);
        return Inertia::render('backend/department/edit/index', [
            'department' => $department,
            'faculties' => Faculty::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDepartmentRequest $request, Department $department)
    {
        $data = $request->validated();
        try {
            $department->update([
                'name' => $data['name'],
                'faculty_id' => json_encode($data['faculty_id']),
            ]);
            return redirect()->route('departmentIndex')->with('success', 'Department updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update department:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Department update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Department $department)
    {
        try {
            $department->delete();
            return redirect()->route('departmentIndex')->with('success', 'Department deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete department:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Department deletion failed.');
        }
    }
}
