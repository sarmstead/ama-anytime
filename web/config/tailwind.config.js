module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('./images/bg.jpg')",
        profileAside: "url('./images/bg-profile.svg')",
        search: "url('./images/bg-search.svg')",
      },
      colors: {
        punch: '#D35530', // red orange
        ulcaGold: '#FAB829', // gold
        blanc: '#DBD4C3', // beige
        onyx: '#393837', // dark gray
        pesto: '#7d7e34', // green
        fiord: '#3a5269', // dark blue
        greenSheen: '#6ea4a0', // light blue
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
