<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CurriculumSyllabus extends Model
{
    protected $fillable = [
        'name',
        'curricula_id',
    ];

    /**
     * @return BelongsTo
     */
    public function curricula(): BelongsTo
    {
        return $this->belongsTo(Curriculum::class, 'curricula_id');
    }
}
