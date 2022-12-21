/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#0FCFEC",
            secondary: "#19D3AE",
            accent: '#3A4256',
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
        {
          dark: {
            secondary: '#1f2937',
            "base-100": '#1f2937',
            neutral: '#ffffff',
            "base-200": '#1f2937',
            accent: '#1f2937'
          }
        },
      ],
    },
    theme: {
      extend:{},
    },
  plugins: [require("daisyui")],
}
