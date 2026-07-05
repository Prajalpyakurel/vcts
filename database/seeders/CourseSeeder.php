<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        $courses = [
            // =======================
            // SCHOOL LEVEL (SEE)
            // =======================
            [
                'name' => 'Secondary Education Examination (SEE)',
                'slug' => 'see',
                'description' => 'SEE is the school-level education in Nepal covering Grade 9 and 10 under NEB.',
                'education_level' => 'School',
                'university' => 'NEB',
                'status' => 'active',
            ],

            // =======================
            // +2 LEVEL (NEB)
            // =======================
            [
                'name' => '+2 Management',
                'slug' => 'plus-2-management',
                'description' => '+2 Management focuses on business, economics, and basic management studies.',
                'education_level' => '+2',
                'university' => 'NEB',
                'status' => 'active',
            ],
            [
                'name' => '+2 Science',
                'slug' => 'plus-2-science',
                'description' => '+2 Science focuses on Physics, Chemistry, Biology, and Mathematics.',
                'education_level' => '+2',
                'university' => 'NEB',
                'status' => 'active',
            ],
            [
                'name' => '+2 Humanities',
                'slug' => 'plus-2-humanities',
                'description' => '+2 Humanities focuses on social sciences, arts, and language studies.',
                'education_level' => '+2',
                'university' => 'NEB',
                'status' => 'active',
            ],

            // =======================
            // BACHELOR LEVEL (TU)
            // =======================
            [
                'name' => 'Bachelor of Business Studies (BBS)',
                'slug' => 'bbs',
                'description' => 'BBS is a four-year undergraduate program offered by Tribhuvan University.',
                'education_level' => 'Bachelor',
                'university' => 'TU',
            ],
            [
                'name' => 'Bachelor of Business Administration (BBA)',
                'slug' => 'bba',
                'description' => 'BBA is a professional undergraduate degree designed to develop managerial skills.',
                'education_level' => 'Bachelor',
                'university' => 'TU',
            ],
            [
                'name' => 'Bachelor of Computer Application (BCA)',
                'slug' => 'bca',
                'description' => 'BCA focuses on computer applications and software development.',
                'education_level' => 'Bachelor',
                'university' => 'TU',
            ],
            [
                'name' => 'Bachelor of Social Work (BSW)',
                'slug' => 'bsw',
                'description' => 'BSW prepares students for professional social work practice.',
                'education_level' => 'Bachelor',
                'university' => 'TU',
            ],
        ];

        foreach ($courses as $course) {
            $courseId = DB::table('courses')->insertGetId([
                ...$course,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Seed curriculum based on level
            if ($course['education_level'] === 'School') {
                $this->seedSchoolCurricula($courseId);
            } elseif ($course['education_level'] === '+2') {
                $this->seedPlusTwoCurricula($courseId);
            } else {
                $this->seedBachelorCurricula($courseId, $course['name']);
            }
        }
    }

    // =======================
    // SCHOOL LEVEL (GRADE 9–10)
    // =======================
    private function seedSchoolCurricula(int $courseId): void
    {
        $grades = [
            ['name' => 'Grade 9', 'credit_hours' => '—', 'curricula_duration' => '1 Year'],
            ['name' => 'Grade 10', 'credit_hours' => '—', 'curricula_duration' => '1 Year'],
        ];

        foreach ($grades as $grade) {
            $curriculaId = DB::table('curricula')->insertGetId([
                ...$grade,
                'course_id' => $courseId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $subjects = [
                'English',
                'Nepali',
                'Mathematics',
                'Science',
                'Social Studies',
                'Computer Science',
            ];

            foreach ($subjects as $subject) {
                DB::table('curriculum_syllabi')->insert([
                    'name' => $subject,
                    'curricula_id' => $curriculaId,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }

    // =======================
    // +2 LEVEL (GRADE 11–12)
    // =======================
    private function seedPlusTwoCurricula(int $courseId): void
    {
        $grades = [
            ['name' => 'Grade 11', 'credit_hours' => '—', 'curricula_duration' => '1 Year'],
            ['name' => 'Grade 12', 'credit_hours' => '—', 'curricula_duration' => '1 Year'],
        ];

        foreach ($grades as $grade) {
            $curriculaId = DB::table('curricula')->insertGetId([
                ...$grade,
                'course_id' => $courseId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $subjects = [
                'English',
                'Nepali',
                'Economics',
                'Accountancy',
                'Business Studies',
                'Computer Science',
            ];

            foreach ($subjects as $subject) {
                DB::table('curriculum_syllabi')->insert([
                    'name' => $subject,
                    'curricula_id' => $curriculaId,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }

    // =======================
    // BACHELOR LEVEL (4 YEARS)
    // =======================
    private function seedBachelorCurricula(int $courseId, string $courseName): void
    {
        $years = [
            ['name' => 'First Year', 'credit_hours' => '30', 'curricula_duration' => '1 Year'],
            ['name' => 'Second Year', 'credit_hours' => '30', 'curricula_duration' => '1 Year'],
            ['name' => 'Third Year', 'credit_hours' => '30', 'curricula_duration' => '1 Year'],
            ['name' => 'Fourth Year', 'credit_hours' => '30', 'curricula_duration' => '1 Year'],
        ];

        foreach ($years as $year) {
            $curriculaId = DB::table('curricula')->insertGetId([
                ...$year,
                'course_id' => $courseId,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $subjects = [
                'Introduction to ' . $courseName,
                'Fundamentals of Management',
                'Business Economics',
                'Accounting Principles',
                'Research Methodology',
            ];

            foreach ($subjects as $subject) {
                DB::table('curriculum_syllabi')->insert([
                    'name' => $subject . ' (' . $year['name'] . ')',
                    'curricula_id' => $curriculaId,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
