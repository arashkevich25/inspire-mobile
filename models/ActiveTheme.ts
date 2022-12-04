import { ThemeOptions } from 'app-constants/ThemeOptions';

export class ActiveTheme {
    static theme: ThemeOptions = ThemeOptions.Light;

    static setTheme(theme: ThemeOptions): void {
        ActiveTheme.theme = theme;
    }
}
