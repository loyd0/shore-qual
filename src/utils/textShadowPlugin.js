const plugin = require('tailwindcss/plugin');

const textShadowPlugin = plugin(function({ addUtilities }) {
    const newUtilities = {
        ".text-shadow": {
          "text-shadow": "0px 0px 1px rgb(0 0 0 / 20%), 0px 0px 1px rgb(1 0 5 / 10%)"
        },
        ".text-shadow-sm": {
          "text-shadow": "1px 1px 3px rgb(36 37 47 / 25%)"
        },
        ".text-shadow-md": {
          "text-shadow": "0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%)"
        },
        ".text-shadow-lg": {
          "text-shadow": "3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%)"
        },
        ".text-shadow-xl": {
          "text-shadow": "1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%)"
        },
        ".text-shadow-none": {
          "text-shadow": "none"
        }
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
  })


module.exports = textShadowPlugin
