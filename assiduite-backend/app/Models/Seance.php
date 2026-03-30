<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seance extends Model
{
    protected $fillable = [
        'groupe_id',
        'personnel_id',
        'module',
        'date_seance',
        'heure_debut',
        'heure_fin',
        'salle'
    ];

    public function groupe()
    {
        return $this->belongsTo(Groupe::class);
    }

    public function personnel()
    {
        return $this->belongsTo(Personnel::class);
    }

    public function absences()
    {
        return $this->hasMany(Absence::class);
    }
}