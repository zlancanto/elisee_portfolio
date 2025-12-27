export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

export const STATUS_ERROR: Record<number, string> = {
    400: "Données invalides. Veuillez vérifier le formulaire.",
    401: "Session expirée. Veuillez vous reconnecter.",
    403: "Accès refusé.",
    404: "Service introuvable.",
    429: "Trop de messages envoyés. Réessayez plus tard.",
    500: "Erreur serveur. Nos ingénieurs sont sur le coup."
};