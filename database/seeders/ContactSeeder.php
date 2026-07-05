<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'name' => 'Sujata Maharjan',
                'email' => 'sujata.maharjan@example.com',
                'phone' => '9841022334',
                'subject' => 'Admission inquiry for +2 Science',
                'description' => 'I would like to know the admission requirements and fee structure for the +2 Science program starting next semester.',
                'status' => 'new',
            ],
            [
                'name' => 'Bikash Thapa',
                'email' => 'bikash.thapa@example.com',
                'phone' => '9847011223',
                'subject' => 'Scholarship eligibility question',
                'description' => 'Could you clarify the eligibility criteria for the merit-based scholarship for incoming first-year students?',
                'status' => 'in_review',
            ],
            [
                'name' => 'Anjali Gurung',
                'email' => 'anjali.gurung@example.com',
                'phone' => '9860099887',
                'subject' => 'Transcript request',
                'description' => 'I graduated last year and need an official transcript sent to a university abroad. Please advise on the process.',
                'status' => 'contracted',
            ],
            [
                'name' => 'Rajendra Shrestha',
                'email' => 'rajendra.shrestha@example.com',
                'phone' => '9813344556',
                'subject' => 'Campus tour request',
                'description' => 'My daughter is interested in your Computer Science department. Is it possible to schedule a campus visit next week?',
                'status' => 'new',
            ],
            [
                'name' => 'Test User',
                'email' => 'test.visitor@example.com',
                'phone' => '9800000000',
                'subject' => 'Inquiry about admissions',
                'description' => 'This is a test message to verify the redesigned contact form works end to end.',
                'status' => 'new',
            ],
        ];

        foreach ($items as $item) {
            Contact::query()->updateOrCreate(['email' => $item['email']], $item);
        }
    }
}
