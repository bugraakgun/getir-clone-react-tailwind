/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './src/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors:theme =>({
        'primary-brand-color':'#5d3ebc',
        'secondary-brand-color':'#7849f7',
        'button-color':'#ffd300',
      }),
      backgroundImage:theme =>({
        'mobile-app':'url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)'
      })
    },
  },
  plugins: [],

}
