import Typography from "typography";
import irvingTheme from "typography-theme-irving";

irvingTheme.overrideThemeStyles =({ rhythm }, options) => ({
  'h1': {
    fontWeight: '300',
  },
})

const typography = new Typography(irvingTheme);

// const typography = new Typography({
//   baseFontSize: "20px",
//   baseLineHeight: 1.45,
//   headerFontFamily: [
//     "Avenir Next",
//     "Helvetica Neue",
//     "Segoe UI",
//     "Helvetica",
//     "Arial",
//     "sans-serif",
//   ],
//   bodyFontFamily: ["Georgia", "serif"],
// })


export default typography;
