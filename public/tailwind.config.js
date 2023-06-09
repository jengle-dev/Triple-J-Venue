/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      'white': '#f5f5f5',
      'black': '#171717',
      'cream': '#fef3c7',
      'amber': '#fffbeb',
      'maroon': '#9f1239',
      'slate': '#e4e4e7',
      'lightSlate': '#fafafa'
    },
    fontFamily: {
      sans: ['ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'],
      mono: ['ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32',
      '6': '50px',
      '7': '64px',
      '8': '80px',
      '9': '120px',
      '10': '150px',
      '12': '160px'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}
module.exports = TailwindConfig;
