import moment from 'moment';

import I18n from 'tools/translate';

export function prepareDate(date: string) {
    const activityDate = moment(new Date(Number(date)));
    const today = moment(new Date());
    if (today.isSame(activityDate, 'day')) {
        return I18n.t('activities.sections.today');
    }

    if (activityDate.isSame(moment(Date.now() - 86400000), 'day')) {
        return I18n.t('activities.sections.yesterday');
    }

    return activityDate.format('DD.MM.YYYY');
}
