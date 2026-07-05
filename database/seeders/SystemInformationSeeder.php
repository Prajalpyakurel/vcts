<?php

namespace Database\Seeders;

use App\Models\SystemInformation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SystemInformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SystemInformation::query()->firstOrCreate(
            ['name' => 'Valley College'],
            [
                'logo' => '',
                'email' => 'info@valleycollege.edu.np',
                'phone' => '+977-1-4400000',
                'facebook_link' => 'https://facebook.com',
                'instagram_link' => 'https://instagram.com',
                'youtube_link' => 'https://youtube.com',
                'whatsapp_link' => 'https://whatsapp.com',
                'twitter_link' => 'https://twitter.com',
                'linkedin_link' => 'https://linkedin.com',
                'address' => 'Kathmandu, Nepal',
                'map_link' => 'https://maps.google.com',
            ]
        );
    }
}
