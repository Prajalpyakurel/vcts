<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'description',
        'image',
        'event_date',
        'event_time',
        'event_venue',
        'status'
    ];
}
