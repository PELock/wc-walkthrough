/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Home.js",
    "./src/components/WalkthroughPage.js",
    "./src/components/Sidebar.js",
    "./src/components/Hamburger.js",
    "./src/components/Navbar.js",
    "./src/components/ResourceSidebar.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Code", "monospace"],
        roboto: ["Roboto"]
      },
    },
  },
  plugins: [],
};
