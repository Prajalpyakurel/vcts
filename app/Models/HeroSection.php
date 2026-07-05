<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSection extends Model
{
    protected $fillable = [
        'key',
        'order_no',
        'image',
        'background_image',
        'title',
        'subtitle',
        'description',
        'status'
    ];
}
