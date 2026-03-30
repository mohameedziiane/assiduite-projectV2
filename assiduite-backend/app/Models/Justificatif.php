<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Justificatif extends Model
{
    protected $fillable = [
        'absence_id',
        'fichier',
        'type_fichier',
        'statut',
        'motif_refus',
        'date_depot'
    ];

    public function absence()
    {
        return $this->belongsTo(Absence::class);
    }
}