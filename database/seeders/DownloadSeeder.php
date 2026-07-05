<?php

namespace Database\Seeders;

use App\Models\Download;
use Illuminate\Database\Seeder;

class DownloadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'name' => 'Academic Calendar 2026',
                'file' => 'downloads/template.pdf',
                'description' => 'Full academic calendar covering semester start/end dates, exam periods, and holidays.',
                'status' => 'active',
            ],
            [
                'name' => 'Admission Application Form',
                'file' => 'downloads/template.pdf',
                'description' => 'Application form for new student admissions across all diploma and bachelor programs.',
                'status' => 'active',
            ],
            [
                'name' => 'Scholarship Application Form',
                'file' => 'downloads/template.pdf',
                'description' => 'Form for students applying for merit-based and need-based scholarships.',
                'status' => 'active',
            ],
            [
                'name' => 'Course Curriculum Brochure',
                'file' => 'downloads/template.pdf',
                'description' => 'Overview brochure detailing course structure, credit hours, and learning outcomes.',
                'status' => 'active',
            ],
            [
                'name' => 'Student Handbook',
                'file' => 'downloads/template.pdf',
                'description' => 'Guide covering campus policies, code of conduct, and student support services.',
                'status' => 'active',
            ],
        ];

        foreach ($items as $item) {
            Download::query()->updateOrCreate(['name' => $item['name']], $item);
        }
    }
}
