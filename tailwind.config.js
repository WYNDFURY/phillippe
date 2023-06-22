/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'primary': "url('../fonts/Raleway-regular.ttf')",
    },
    extend: {
      backgroundImage: {
        'pc': "url('../img/screen-bg.jpg')",
        'smartphone': "url('../img/smartphone-bg.jpg')",
      },
      colors: {
        'darkblue': "#090613",
        'lightpurple': "#7077B2",
  
      }
    },
    
  },
  plugins: [],
}