/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'views/landingpage.handlebars',
    'views/login.handlebars',
    'views/register.handlebars',
   'public/css/style.css'
  ],
  
  theme: {
    colors: {
      'white': '#f5f5f5',
      'black': '#171717',
      'cream': '#fef3c7'
    },
    fontFamily:{
      sans: ['ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'],
      mono: ['ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius:{
        'full': "full"
      },
    },
  },
  plugins: [],
}
