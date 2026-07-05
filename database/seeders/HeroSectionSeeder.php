<?php

namespace Database\Seeders;

use App\Models\HeroSection;
use Illuminate\Database\Seeder;

class HeroSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HeroSection::query()->updateOrCreate(
            ['key' => 'main_hero'],
            [
                'subtitle' => 'Begin Your Journey Toward a Bright and Successful Future',
                'description' => 'At Valley College, we empower students with quality education, innovative learning, and a supportive environment designed to help you achieve your goals and shape a better tomorrow.',
                'order_no' => 0,
                'status' => 'active',
            ]
        );

        $slides = [
            [
                'key' => 'hero_training',
                'title' => 'Hands-On Technical Training',
                'subtitle' => 'Learn by Doing, Not Just by Reading',
                'description' => 'Our labs and workshops give students real, hands-on experience with the tools and technologies used across modern industry.',
                'image' => 'heroSections/hero-fg-training.jpg',
                'background_image' => 'heroSections/backgrounds/hero-bg-training.jpg',
                'order_no' => 2,
                'status' => 'active',
            ],
            [
                'key' => 'hero_innovators',
                'title' => "Building Nepal's Future Innovators",
                'subtitle' => 'Where Curiosity Meets Capability',
                'description' => 'From robotics to research, our students are encouraged to question, build, and innovate from their very first semester.',
                'image' => 'heroSections/hero-fg-innovators.jpg',
                'background_image' => 'heroSections/backgrounds/hero-bg-innovators.jpg',
                'order_no' => 3,
                'status' => 'active',
            ],
            [
                'key' => 'hero_innovation',
                'title' => 'Innovation Meets Education',
                'subtitle' => 'A Campus Built for What Comes Next',
                'description' => 'Modern facilities and an industry-aligned curriculum prepare our graduates for careers in the fastest-growing technical fields.',
                'image' => 'heroSections/hero-fg-innovation.jpg',
                'background_image' => 'heroSections/backgrounds/hero-bg-innovation.jpg',
                'order_no' => 4,
                'status' => 'active',
            ],
        ];

        foreach ($slides as $slide) {
            HeroSection::query()->updateOrCreate(['key' => $slide['key']], $slide);
        }
    }
}
