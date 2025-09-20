/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      noScrollbar: {
        "&::-webkit-scrollbar": {
          width: "0px",
          height: "8px", // Keep horizontal scrollbar height if needed
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
       fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        libertinus: ['"Libertinus Sans"', 'sans-serif'],
        corinthia: ['"Corinthia"', 'cursive'],
      },
       keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-50%)" },
      },
    },
    animation: {
      marquee: "marquee 15s linear infinite",
    },
    },
  },
};

