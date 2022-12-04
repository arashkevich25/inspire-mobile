import I18n from './translate';

export const deviceLocation: 'en' = Object.keys(I18n.translations).includes(I18n.locale.split('-')[0])
    ? I18n.locale.split('-')[0]
    : I18n.defaultLocale;
