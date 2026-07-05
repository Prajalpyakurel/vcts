<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Faculty extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'name',
        'slug',
        'description',
        'designation',
        'status',
        'order_no',
        'phone_no',
        'email',
        'message',
    ];
}
