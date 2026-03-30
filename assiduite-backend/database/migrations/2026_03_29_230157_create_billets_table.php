<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('billets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stagiaire_id')->constrained('stagiaires')->onDelete('cascade');
            $table->foreignId('absence_id')->nullable()->constrained('absences')->onDelete('set null');
            $table->foreignId('personnel_id')->constrained('personnels')->onDelete('cascade'); // gestionnaire
            $table->enum('type', ['absence', 'retard', 'entree']);
            $table->string('code_unique')->unique();
            $table->text('motif')->nullable();
            $table->dateTime('date_validite');
            $table->integer('duree_retard_minutes')->nullable();
            $table->boolean('est_actif')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('billets');
    }
};