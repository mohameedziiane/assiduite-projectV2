

export const billets = [
  {
    id: "BLT-001",
    type: "Entrée",
    issuedAt: "2026-03-21 08:15",
    validUntil: "2026-03-21 10:30",
    status: "actif",
    motif: "Autorisé à entrer en cours",
    qrCode: "QR-BLT-001",
  },
  {
    id: "BLT-002",
    type: "Retard",
    issuedAt: "2026-03-25 09:00",
    validUntil: "2026-03-25 09:30",
    status: "expire",
    motif: "Retard autorisé de 30 minutes",
    qrCode: "QR-BLT-002",
  },
];

export const monthlyStats = [
  { month: "Jan", value: 2 },
  { month: "Fév", value: 4 },
  { month: "Mar", value: 6 },
  { month: "Avr", value: 3 },
  { month: "Mai", value: 5 },
  { month: "Juin", value: 2 },
];

export const alerts = [
  "Vous approchez du seuil critique d'absences.",
  "Un justificatif est encore en attente de validation.",
];