<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CareerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $careers = [
            [
                'title' => 'Assistant Professor (Computer Science)',
                'slug' => 'assistant-professor-cs',
                'designation' => 'Assistant Professor',
                'type' => 'Full-time',
                'description' => '<p>We are looking for a dedicated Assistant Professor for the Computer Science department.</p>',
                'status' => 'active',
            ],
            [
                'title' => 'Lab Assistant',
                'slug' => 'lab-assistant',
                'designation' => 'Lab Assistant',
                'type' => 'Full-time',
                'description' => '<p>Seeking a Lab Assistant to manage the Science laboratory.</p>',
                'status' => 'active',
            ],
            [
                'title' => 'Administrative Officer',
                'slug' => 'admin-officer',
                'designation' => 'Officer',
                'type' => 'Full-time',
                'description' => '<p>Responsible for managing college administrative tasks.</p>',
                'status' => 'inactive',
            ],
            [
                'title' => 'IT Support Technician',
                'slug' => 'it-support-technician',
                'designation' => 'Support Technician',
                'type' => 'Full-time',
                'description' => '<p>Maintain campus computer labs, networking equipment, and provide technical support to staff and students.</p>',
                'status' => 'active',
            ],
            [
                'title' => 'Front Desk Coordinator',
                'slug' => 'front-desk-coordinator',
                'designation' => 'Coordinator',
                'type' => 'Part-time',
                'description' => '<p>Manage front office inquiries, visitor coordination, and general administrative support for prospective students.</p>',
                'status' => 'active',
            ],
        ];

        foreach ($careers as $career) {
            \App\Models\Career::query()->updateOrCreate(['slug' => $career['slug']], $career);
        }
    }
}
