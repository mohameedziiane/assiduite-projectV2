<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('absences', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stagiaire_id')->constrained('stagiaires')->onDelete('cascade');
            $table->foreignId('seance_id')->constrained('seances')->onDelete('cascade');
            $table->enum('statut', ['justifiee', 'non_justifiee', 'en_attente'])->default('non_justifiee');
            $table->text('commentaire')->nullable();
            $table->integer('duree_minutes')->nullable();
            $table->timestamps();

            $table->unique(['stagiaire_id', 'seance_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('absences');
    }
};