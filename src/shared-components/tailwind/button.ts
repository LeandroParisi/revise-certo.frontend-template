/* eslint-disable max-len */
import { tv } from 'tailwind-variants'

const className = 'hover:shadow-md hover:opacity-80 hover:disabled:opacity-30'

// eslint-disable-next-line tailwindcss/classnames-order
export const button = tv({
  base: className,
  variants: {
    color: {
      // transparent: 'text-dark_blue_2 dark:text-dark_blue_1',
      /* DISABLED DARK THEME FOR NOW */
      primary: `rounded-md border bg-brand-primary px-3 py-2 text-sm font-bold text-brand-dark_white_1 whitespace-nowrap ${className}`,
      tertiary: `bg-brand-tertiary text-brand-primary rounded-md text-sm border px-3 py-2 font-bold ${className}`,
      'primary-tertiary': `rounded-md border bg-brand-primary px-3 py-2 text-sm font-bold text-brand-tertiary whitespace-nowrap ${className}`,
      error: `rounded-md border bg-brand-error px-3 py-2 text-sm font-bold text-brand-dark_white_1 whitespace-nowrap ${className}`,
    },
  },
})
