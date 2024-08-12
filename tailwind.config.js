/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#ff0000',
    },
    fontFamily :{
        'primary': ["Inter", 'sans-serif'],
        'secondary':["Poppins",'sans-serif'],
    },
    screens: {
      
      'mobile': '640px', //sm-[640px]
      'tablet': '768px', //md-[768px]
      'laptop': '1024px',//lg-[1024px]
    }
  },
  plugins: [],
}
}