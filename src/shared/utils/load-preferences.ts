// Types
import type { Preferences } from '../types/preferences';

// Utils
import {
  DEFAULT_PREFERENCES,
  PREFERENCES_STORAGE_KEY,
} from '../constants/preferences';

export function loadPreferences(): Preferences {
  try {
    const storedPreferences = localStorage.getItem(PREFERENCES_STORAGE_KEY);

    if (!storedPreferences) {
      return DEFAULT_PREFERENCES;
    }

    return { ...DEFAULT_PREFERENCES, ...JSON.parse(storedPreferences) };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}
