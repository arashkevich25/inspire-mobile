import { StylesValue } from 'tools';
import { ThemeVariables } from 'types';

export const isLightTheme = StylesValue(ThemeVariables.Theme) === 'light';
