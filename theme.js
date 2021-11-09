import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
	xs: "320px", // For Iphone SE
	sm: "350px", // For Mobiles
	md: "768px", // For tablets
	lg: "960px", // For Laptops
	xl: "1200px", // For PC Screens
	"2xl": "1536px", // For big screens
});

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

export default theme;
