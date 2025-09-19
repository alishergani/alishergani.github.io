import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "brand.100", // твой цвет
      },
    },
  },
  colors: {
    brand: {
      50: "#fffdf4",
      100: "#FDEB9E", // светлый
      200: "#fbe070",
      300: "#d2c155",
      400: "#9a9844",
      500: "#006A67", // акцент
      600: "#005853",
      700: "#003161", // глубокий
      800: "#001c40",
      900: "#000B58", // самый тёмный
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Text: {
      baseStyle: {
        color: "brand.500", // здесь укажи свой цвет
      },
    },
    Button: {
      variants: {
        brand: {
          bg: "brand.500",
          color: "white",
          _hover: { bg: "brand.600" },
        },
      },
    },
  },
});

export default theme;
