<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('system_information', function (Blueprint $table) {
            $table->id();
            $table->string('logo');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->longText('facebook_link');
            $table->longText('instagram_link');
            $table->longText('youtube_link');
            $table->longText('whatsapp_link');
            $table->longText('twitter_link');
            $table->longText('linkedin_link');
            $table->string('address');
            $table->longText('map_link');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('system_information');
    }
};
