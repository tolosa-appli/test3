
'use server';

import type { SignupFormData } from './page';

export async function signup(data: SignupFormData): Promise<{ success: boolean; error: string | null }> {
  try {
    if (!process.env.ALTCHA_API_URL || !process.env.ALTCHA_API_KEY) {
        throw new Error("La configuration de l'API Altcha est manquante côté serveur.");
    }
      
    const verificationResponse = await fetch(process.env.ALTCHA_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.ALTCHA_API_KEY,
        },
        body: JSON.stringify({ payload: data.altchaPayload }),
    });

    if (!verificationResponse.ok) {
        const errorBody = await verificationResponse.json();
        console.error('Altcha verification failed:', errorBody);
        return { success: false, error: `La vérification Captcha a échoué: ${errorBody.message || 'Erreur inconnue.'}` };
    }
    
    const verificationResult = await verificationResponse.json();

    if (!verificationResult.success) {
      return { success: false, error: 'La vérification Captcha a échoué. Veuillez réessayer.' };
    }

    // Captcha is valid, proceed with user registration logic...
    console.log('Captcha valid. User data:', data.identifier);
    // ... e.g., save user to database ...

    return { success: true, error: null };
  } catch (error) {
    console.error('Signup error:', error);
    let errorMessage = "Une erreur est survenue lors de l'inscription.";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}
