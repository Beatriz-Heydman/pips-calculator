// Types
import type { Preferences } from '../types/preferences';

// Utils
import { PREFERENCES_STORAGE_KEY } from '../constants/preferences';

export function savePreferences(preferences: Preferences) {
  try {
    localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    // Storage indisponível (modo privado, cota cheia): as preferências valem só nesta sessão.
  }
}
