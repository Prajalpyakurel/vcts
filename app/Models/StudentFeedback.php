<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudentFeedback extends Model
{
    protected $fillable = [
        'name',
        'email',
        'image',
        'student_course',
        'status',
        'feedback'
    ];

}
