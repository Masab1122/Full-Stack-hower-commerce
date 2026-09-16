<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category', 50)->index();
            $table->text('short_description');
            $table->text('problem');
            $table->text('solution');
            $table->json('what_we_handle')->nullable();
            $table->json('process')->nullable();
            $table->json('deliverables')->nullable();
            $table->string('icon', 50)->nullable();
            $table->string('badge_color', 20)->default('blue');
            $table->string('seo_title')->nullable();
            $table->text('seo_description')->nullable();
            $table->timestamps();
        });

        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category', 50)->index();
            $table->string('client_type', 100);
            $table->text('challenge');
            $table->text('solution');
            $table->json('work_completed')->nullable();
            $table->json('technologies')->nullable();
            $table->string('results')->nullable();
            $table->string('screenshot_path')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();
        });

        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->string('category', 50)->default('General');
            $table->string('question');
            $table->text('answer');
            $table->foreignId('course_id')->nullable()->constrained('courses')->nullOnDelete();
            $table->integer('order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('faqs');
        Schema::dropIfExists('projects');
        Schema::dropIfExists('services');
    }
};
