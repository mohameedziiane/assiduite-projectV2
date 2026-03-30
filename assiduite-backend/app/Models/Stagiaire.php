<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stagiaire extends Model
{
    protected $fillable = [
        'user_id',
        'groupe_id',
        'nom',
        'prenom',
        'date_naissance',
        'telephone',
        'photo',
        'matricule',
        'note_assiduite'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function groupe()
    {
        return $this->belongsTo(Groupe::class);
    }

    public function absences()
    {
        return $this->hasMany(Absence::class);
    }

    public function billets()
    {
        return $this->hasMany(Billet::class);
    }
}