<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $events = [
            [
                'name' => 'Event 1',
                'event_date' => '2025-01-15',
                'event_time' => '12:00',
                'event_venue' => 'Grand Hall Conference Center',
                'description' => 'A business networking luncheon with industry professionals.',
                'status' => 'active'
            ],
            [
                'name' => 'Tech Innovators Meetup',
                'event_date' => '2025-02-03',
                'event_time' => '18:30',
                'event_venue' => 'Downtown Tech Hub',
                'description' => 'An evening meetup focused on emerging technologies and startups.',
                'status' => 'active'
            ],
            [
                'name' => 'Marketing Strategy Workshop',
                'event_date' => '2025-02-20',
                'event_time' => '10:00',
                'event_venue' => 'City Business Center',
                'description' => 'A hands-on workshop covering modern digital marketing strategies.',
                'status' => 'active'
            ],
            [
                'name' => 'Annual Charity Gala',
                'event_date' => '2025-03-08',
                'event_time' => '19:00',
                'event_venue' => 'Riverside Banquet Hall',
                'description' => 'A formal evening gala to support local community initiatives.',
                'status' => 'active'
            ],
            [
                'name' => 'Startup Pitch Night',
                'event_date' => '2025-03-22',
                'event_time' => '17:30',
                'event_venue' => 'Innovation Labs Auditorium',
                'description' => 'Startup founders pitch their ideas to investors and mentors.',
                'status' => 'active'
            ],
            [
                'name' => 'Leadership Development Seminar',
                'event_date' => '2025-04-05',
                'event_time' => '09:00',
                'event_venue' => 'Executive Training Center',
                'description' => 'A full-day seminar focused on leadership and team management skills.',
                'status' => 'active'
            ],
            [
                'name' => 'Product Launch Event',
                'event_date' => '2025-04-18',
                'event_time' => '14:00',
                'event_venue' => 'Skyline Exhibition Hall',
                'description' => 'Official launch event showcasing the company’s latest product.',
                'status' => 'active'
            ],
            [
                'name' => 'Creative Arts Festival',
                'event_date' => '2025-05-02',
                'event_time' => '11:00',
                'event_venue' => 'Central City Park',
                'description' => 'A day-long outdoor festival celebrating local artists and performers.',
                'status' => 'active'
            ]
        ];

        foreach ($events as $event) {
            $event['slug'] = Str::slug($event['name']);
            Event::query()->create($event);
        }
    }
}
