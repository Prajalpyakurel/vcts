<?php

namespace Database\Seeders;

use App\Models\BoardMemberMessage;
use Illuminate\Database\Seeder;

class BoardMemberMessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $boardMemberMessages = [
            [
                'name' => 'Sameer Dhamala',
                'designation' => 'Principal',
                'message' => 'Welcome to SMC academic platform. I would like to draw your attention to SEE appeared and pass-out students toward making informed decisions for higher education. Our goal is to nurture potential through quality education, innovative teaching methods, and holistic development.',
                'order_no' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'Anita Sharma',
                'designation' => 'Vice Principal',
                'message' => 'At SMC, we believe education is a journey of discovery. Our institution emphasizes critical thinking, creativity, and ethical values to prepare students for future challenges.',
                'order_no' => 2,
                'status' => 'active',
            ],
            [
                'name' => 'Ramesh Koirala',
                'designation' => 'Academic Director',
                'message' => 'Our academic programs are designed to balance theory and practice. We encourage students to engage actively in learning and develop skills necessary for academic and professional success.',
                'order_no' => 3,
                'status' => 'active',
            ],
            [
                'name' => 'Sunita Adhikari',
                'designation' => 'Board Member',
                'message' => 'SMC is committed to providing a supportive and inclusive learning environment. We focus on continuous improvement and innovation to meet the evolving needs of students.',
                'order_no' => 4,
                'status' => 'active',
            ],
            [
                'name' => 'Kiran Bhandari',
                'designation' => 'Board Member',
                'message' => 'Education shapes the future. At SMC, we strive to empower students with knowledge, confidence, and leadership qualities to excel in their chosen paths.',
                'order_no' => 5,
                'status' => 'active',
            ],
        ];

        foreach ($boardMemberMessages as $boardMemberMessage) {
            BoardMemberMessage::query()->create($boardMemberMessage);
        }
    }
}
