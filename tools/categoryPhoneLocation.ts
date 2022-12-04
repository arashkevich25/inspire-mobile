import { Category } from '@inspire/types';
import I18n from './translate';

export const categoryPhoneLocation = (fetchedCategories: Category[]): 'en' | 'pl' =>
    Object.keys(fetchedCategories[0]).includes(I18n.locale.split('-')[0])
        ? I18n.locale.split('-')[0]
        : I18n.defaultLocale;
