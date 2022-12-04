// @ts-ignore
import I18n from 'i18n-js';
import { index as en } from '../i18n/en';
import { index as pl } from '../i18n/pl';

import * as RNLocalize from 'react-native-localize';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
    I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.defaultLocale = 'en';

I18n.translations = {
    en,
    pl,
};

export default I18n;
