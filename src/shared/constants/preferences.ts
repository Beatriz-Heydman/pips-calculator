// Types
import type { Preferences } from '../types/preferences';

export const PREFERENCES_STORAGE_KEY = 'pips-calculator:preferences';

export const DEFAULT_PREFERENCES: Preferences = {
  useAccountPercentage: false,
  percentagePerOperation: '5',
  operationRisk: '',
  pipValue: '100',
};
