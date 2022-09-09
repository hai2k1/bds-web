/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.{js,jsx,ts,tsx}',
    "./public/**/*.html",
  ],
  theme: {
    screens:{
      xs:'375px',
      sm:'600px',
      md:'992px',
      lg:'1200px',
      xl:'1536px',
      mobile:{max: '480'},
      tablet: {max: '768px'},
      laptop: {max: '1024px'},
      desktop: {max: '1200px'},
      bigger: '1650px',
      smalllaptop:{max:"992px"}
      
      
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
      }
    },
    fontFamily:{
      sans:['Arial','sans-serif',"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      serif:['Garamond','serif'],
    },
    extend:{
      colors:{
        blue:{
          500:'#1a73e8',
        }
      },
      spacing:{
        128:'32rem'
      },
      boxShadow: {
        '3xl': '0px 200px 0px 5px rgba(0, 0, 0, 0.3)',
      }

       
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require("flowbite/plugin"),
    require('tw-elements/dist/plugin')
  ],
}
