// Types
import type { Preferences } from '@shared';

export type PreferencesModalProps = {
  preferences: Preferences;
  onSave: (preferences: Preferences) => void;
  onClose: () => void;
};
