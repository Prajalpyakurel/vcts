<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BoardMemberMessage extends Model
{
    protected $fillable = [
        'image',
        'name',
        'designation',
        'message',
        'order_no',
        'status'
    ];
}
