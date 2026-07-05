<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Curriculum extends Model
{
    protected $fillable = [
        'course_id',
        'name',
        'credit_hours',
        'curricula_duration',
    ];

    /**
     * @return BelongsTo
     */
    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class, 'course_id');
    }

    /**
     * @return HasMany
     */
    public function curriculumSyllabus(): HasMany
    {
        return $this->hasMany(CurriculumSyllabus::class, 'curricula_id');
    }
}
