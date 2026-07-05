<?php

namespace Database\Factories;

use App\Models\Faculty;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Faculty>
 */
class FacultyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->name();
        return [
            'image' => 'faculty/default.jpg',
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->sentence,
            'designation' => $this->faker->jobTitle,
            'order_no' => $this->faker->numberBetween(1, 10),
            'phone_no' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail,
            'message' => $this->faker->sentence,
            'status' => 'active',
        ];
    }

}
