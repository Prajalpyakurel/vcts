<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SystemInformation extends Model
{
    protected $fillable = [
        'logo',
        'name',
        'email',
        'phone',
        'facebook_link',
        'instagram_link',
        'youtube_link',
        'whatsapp_link',
        'twitter_link',
        'linkedin_link',
        'address',
        'map_link',
    ];
}
