import { Theme } from 'types';

const themeBase = {
    $sizeXSmall: 10,
    $sizeSmall: 12,
    $sizeMedium: 14,
    $sizeLarge: 18,
    $sizeDoubleLarge: 22,
};

enum Colors {
    RaisinBlack = '#252525',
    DarkCharcoal = '#313131',
    BlackOlive = '#3D3D3D',
    ButtonBlue = '#259CE6',
    TropicalBlue = '#D4ECFA',
    Onyx = '#393939',
    White = '#FFFFFF',
    Black = '#000000',
    DeepCarminePink = '#EB3B3B',
    GoldMetallic = '#D4AF37',
    GoldenSand = '#F4EACA',
    QuickSilver = '#A3A3A3',
    Green = '#00FF00',
    LightSilver = '#D9D9D9',
    DavysGrey = '#595754',
    BlackCoral = '#59606B',
    LightGray = '#D2D4D6',
    AntiFlashWhite = '#E8F5FC',
    AntiFlashWhiteLight = '#EDF1F7',
    AntiFlashBlackLight = '#202022',
}

export const darkTheme: Theme = {
    $theme: 'dark',
    $backgroundColor1: Colors.RaisinBlack,
    $backgroundColor2: Colors.DarkCharcoal,
    $backgroundColor3: Colors.ButtonBlue,
    $backgroundColor4: Colors.BlackOlive,
    $highlightColor1: Colors.ButtonBlue,
    $highlightColor2: Colors.TropicalBlue,
    $borderColor1: Colors.DavysGrey,
    $borderColor2: Colors.DavysGrey,
    $white: Colors.White,
    $black: Colors.Black,
    $lightSilver: Colors.LightSilver,
    $red: Colors.DeepCarminePink,
    $gold: Colors.GoldMetallic,
    $lightGold: Colors.GoldenSand,
    $textColorBlack: Colors.Black,
    $textColorWhite: Colors.White,
    $textColorBlue: Colors.ButtonBlue,
    $textColorGray: Colors.QuickSilver,
    $textColorGreen: Colors.Green,
    $textColorRed: Colors.DeepCarminePink,
    $textColorGold: Colors.GoldMetallic,
    $textColor1: Colors.White,
    $textColor2: Colors.BlackOlive,
    $color1: Colors.White,
    $color2: Colors.BlackOlive,
    $blackAndWhite: Colors.Black,
    $whiteAndBlack: Colors.White,
    $blueAndWhite: Colors.White,
    $whiteAndBlue: Colors.ButtonBlue,
    $lightBlueAndBlack: Colors.Black,
    $lightGrayAndWhite: Colors.DarkCharcoal,
    $flashLightAndBlack: Colors.AntiFlashBlackLight,
    $flashLight: Colors.AntiFlashWhiteLight,
    ...themeBase,
};

export const lightTheme: Theme = {
    $theme: 'light',
    $backgroundColor1: Colors.White,
    $backgroundColor2: Colors.White,
    $backgroundColor3: Colors.White,
    $backgroundColor4: Colors.White,
    $highlightColor1: Colors.ButtonBlue,
    $highlightColor2: Colors.TropicalBlue,
    $lightSilver: Colors.LightSilver,
    $borderColor1: Colors.LightSilver,
    $borderColor2: Colors.DavysGrey,
    $textColorGreen: Colors.Green,
    $white: Colors.White,
    $black: Colors.Black,
    $red: Colors.DeepCarminePink,
    $gold: Colors.GoldMetallic,
    $lightGold: Colors.GoldenSand,
    $textColorBlack: Colors.Black,
    $textColorWhite: Colors.White,
    $textColorBlue: Colors.ButtonBlue,
    $textColorGray: Colors.DavysGrey,
    $textColorRed: Colors.DeepCarminePink,
    $textColorGold: Colors.GoldMetallic,
    $textColor1: Colors.Black,
    $textColor2: Colors.BlackCoral,
    $color1: Colors.BlackCoral,
    $color2: Colors.LightGray,
    $blackAndWhite: Colors.White,
    $whiteAndBlack: Colors.Black,
    $blueAndWhite: Colors.ButtonBlue,
    $whiteAndBlue: Colors.White,
    $lightBlueAndBlack: Colors.AntiFlashWhite,
    $lightGrayAndWhite: Colors.White,
    $flashLightAndBlack: Colors.AntiFlashWhiteLight,
    $flashLight: Colors.AntiFlashWhiteLight,
    ...themeBase,
};