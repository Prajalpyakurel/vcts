<?php

namespace Database\Seeders;

use App\Models\Faculty;
use App\Models\Department;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $departments = [
            'Computer Science',
            'Information Technology',
            'Business Administration',
            'Mechanical Engineering',
            'Electrical Engineering',
        ];

        $facultyIds = Faculty::query()->pluck('id')->toArray();

        foreach ($departments as $department) {
            $randomFacultyIds = collect($facultyIds)
                ->random(rand(1, 3))
                ->values()
                ->toArray();

            Department::query()->create([
                'name' => $department,
                'faculty_id' => json_encode($randomFacultyIds),
            ]);
        }
    }
}
