import moment from 'moment';
import I18n from './translate';

type CreatedAtOutput = [string, number, number, number, string];

export function createdAtCalc(date: number | Date): CreatedAtOutput {
    const end = moment(date);
    const now = moment(new Date());
    const diff = moment.duration(now.diff(end));
    const createdDays = Math.floor(diff.asDays());
    const createdHours = Math.floor(diff.asHours());
    const createdMinutes = Math.floor(diff.minutes());
    const createdAtDate = moment(new Date(Number(date))).format('DD.MM.YYYY');
    const createdAtString = `${
        createdHours ? `${createdHours} ${I18n.t('text.hours')}` : ''
    } ${createdMinutes} ${I18n.t('text.minutes')}`;

    return [createdAtString, createdDays, createdHours, createdMinutes, createdAtDate];
}
