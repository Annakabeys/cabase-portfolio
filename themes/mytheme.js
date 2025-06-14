import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    }
  }
  // extend: {
  //   '--p-surface-0': '#ffffff',
  //   '--p-surface-50': '#f8fafc',
  //   '--p-surface-100': '#f1f5f9',
  //   '--p-surface-200': '#e2e8f0',
  //   '--p-surface-300': '#cbd5e1',
  //   '--p-surface-400': '#94a3b8',
  //   '--p-surface-500': '#64748b',
  //   '--p-surface-600': '#475569',
  //   '--p-surface-700': '#334155',
  //   '--p-surface-800': '#1e293b',
  //   '--p-surface-900': '#0f172a',
  //   '--p-surface-950': '#020617',

  //   '--p-primary-50': 'var(--p-surface-50)',
  //   '--p-primary-100': 'var(--p-surface-100)',
  //   '--p-primary-200': 'var(--p-surface-200)',
  //   '--p-primary-300': 'var(--p-surface-300)',
  //   '--p-primary-400': 'var(--p-surface-400)',
  //   '--p-primary-500': 'var(--p-surface-500)',
  //   '--p-primary-600': 'var(--p-surface-600)',
  //   '--p-primary-700': 'var(--p-surface-700)',
  //   '--p-primary-800': 'var(--p-surface-800)',
  //   '--p-primary-900': 'var(--p-surface-900)',
  //   '--p-primary-950': 'var(--p-surface-950)',

  //   '--p-content-border-radius': '6px',
  //   '--font-family': 'Inter, ui-sans-serif, system-ui, sans-serif'
  // }
});

export default {
  preset: MyPreset,
  options: {
    darkModeSelector: '.p-dark'
  }
};
