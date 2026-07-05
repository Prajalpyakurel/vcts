<?php

namespace Database\Seeders;

use App\Models\Gallery;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            [
                'name' => 'AI & Virtual Reality Lab Demo',
                'image' => 'galleries/gallery-vr-lab.jpg',
                'status' => 'active',
            ],
            [
                'name' => 'Advanced Circuit Design Workshop',
                'image' => 'galleries/gallery-circuit-workshop.jpg',
                'status' => 'active',
            ],
            [
                'name' => 'Robotics Innovation Showcase',
                'image' => 'galleries/gallery-robotics.jpg',
                'status' => 'active',
            ],
            [
                'name' => 'Global Tech Connect Seminar',
                'image' => 'galleries/gallery-tech-seminar.jpg',
                'status' => 'active',
            ],
            [
                'name' => 'Science Laboratory Research Session',
                'image' => 'galleries/gallery-science-lab.jpg',
                'status' => 'active',
            ],
        ];

        foreach ($items as $item) {
            Gallery::query()->updateOrCreate(['name' => $item['name']], $item);
        }
    }
}
