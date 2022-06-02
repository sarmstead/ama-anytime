module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('./images/bg.jpg')",
        profileAside: "url('./images/bg-profile.svg')",
      },
      colors: {
        punch: '#D35530',
        ulcaGold: '#FAB829',
        blanc: '#DBD4C3',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      condensed: ['mouse_memoir', 'Arial Narrow'],
      slab: ['BioRhyme', 'serif'],
    },
  },
  plugins: [],
}
