<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category', 50)->index();
            $table->string('level', 50)->default('All Levels');
            $table->string('duration', 50);
            $table->string('format', 50)->default('Physical & Online');
            $table->string('tag', 50)->nullable();
            $table->string('badge_color', 20)->default('blue');
            $table->string('icon', 50)->nullable();
            $table->text('short_description');
            $table->text('overview');
            $table->json('curriculum')->nullable();
            $table->json('outcomes')->nullable();
            $table->json('tools')->nullable();
            $table->text('prerequisites')->nullable();
            $table->json('who_is_it_for')->nullable();
            $table->boolean('is_featured')->default(false)->index();
            $table->integer('order')->default(0);
            $table->string('seo_title')->nullable();
            $table->text('seo_description')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
