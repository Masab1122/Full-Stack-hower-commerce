<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contact_submissions', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('phone', 30)->index();
            $table->string('email', 150)->nullable()->index();
            $table->string('course_or_service', 150)->nullable();
            $table->text('message');
            $table->string('source_page')->nullable();
            $table->string('status', 20)->default('new')->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->text('admin_notes')->nullable();
            $table->timestamp('contacted_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contact_submissions');
    }
};
