<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'description',
        'image',
        'education_level',
        'university',
        'status'
    ];

    /**
     * @return HasMany
     */
    public function courseCurriculum(): HasMany
    {
        return $this->hasMany(Curriculum::class);
    }
}
