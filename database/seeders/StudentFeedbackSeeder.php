<?php

namespace Database\Seeders;

use App\Models\StudentFeedback;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentFeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $studentFeedbacks = [
            [
                'name' => 'Raj Manandhar',
                'feedback' => 'As an alumnus of Valley College, I hold immense pride and gratitude for the invaluable education and experiences I gained during my time there.',
                'student_course' => 'BBS',
                'image' => null,
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sita Shrestha',
                'feedback' => 'Valley College provided me with a supportive learning environment and excellent academic guidance.',
                'student_course' => 'BBA',
                'image' => null,
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Amit Karki',
                'feedback' => 'The faculty at Valley College encouraged me to think critically and grow professionally.',
                'student_course' => 'BSW',
                'image' => null,
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nisha Adhikari',
                'feedback' => 'My journey at Valley College helped shape my career and personal values.',
                'student_course' => 'BBS',
                'image' => null,
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Ramesh Poudel',
                'feedback' => 'The academic culture at Valley College is inspiring and motivating.',
                'student_course' => 'BBA',
                'image' => null,
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Anita Gurung',
                'feedback' => 'Valley College helped me build confidence and leadership skills.',
                'student_course' => 'BSW',
                'image' => null,
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Bikash Thapa',
                'feedback' => 'I am thankful to Valley College for its quality education and friendly environment.',
                'student_course' => 'BBS',
                'image' => null,
                'status' => 'active',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        foreach ($studentFeedbacks as $feedback) {
            StudentFeedback::query()->create($feedback);
        }

    }
}
