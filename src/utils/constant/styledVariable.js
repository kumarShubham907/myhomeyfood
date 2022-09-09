export const COLORS = {
    // base colors
    primary: "#FC6D3F", // orange
    secondary: "#CDCDD2",   // gray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    searchBorder: '#e1e1e1',
    gpsColor: '#EF4F5F',
    backgroundHover: "#f3f3f3"
};

export const SIZES = {
    // font sizes
    largeTitle: "50px",
    h1: "30px",
    h2: "22px",
    h3: "20px",
    h4: "18px",
    body1: "30px",
    body2: "20px",
    body3: "16px",
    body4: "14px",
    body5: "12px",
};

export const FONTS = {
    largeTitle: SIZES.largeTitle,
    h1: SIZES.h1,
    h2: SIZES.h2,
    h3: SIZES.h3,
    h4: SIZES.h4,
    body1: SIZES.body1,
    body2: SIZES.body2,
    body3: SIZES.body3,
    body4: SIZES.body4,
    body5: SIZES.body5,
};

export const CONTAINER_PADDING = {
    MONITOR_SCREEN_L: {
        NAVBAR: "0px 450px",
        MAINSCREEN: "90px 470px"
    },

    MONITOR_SCREEN_M: {
        NAVBAR: "0px 350px",
        MAINSCREEN: "90px 370px"
    },

    MONITOR_SCREEN_S: {
        NAVBAR: "0px 250px",
        MAINSCREEN: "90px 270px"
    },

    TAB_SCREEN: {
        NAVBAR: "0px 200px",
        MAINSCREEN: "90px 220px"
    },

    MOBILE_SCREEN: {
        NAVBAR: "0px 30px",
        MAINSCREEN: "90px 50px"
    },
}

const webTheme = { COLORS, SIZES, FONTS, CONTAINER_PADDING };

export default webTheme;