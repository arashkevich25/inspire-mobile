import { Activity } from '@inspire/types';

import { prepareDate } from 'screens/Activities/tools/prepareDate';
import { ListSection } from 'types';

export function prepareActivitiesDataWithSections(activities: Activity[], initData: ListSection<Activity>[] = []) {
    return activities.reduce((accumulator: any, currentValue) => {
        const createdDate = prepareDate(currentValue.createdAt);
        const section = accumulator.find((section: ListSection<Activity>) => section.title === createdDate);
        if (!section) {
            accumulator.push({
                title: createdDate,
                data: [currentValue],
            });
            return accumulator;
        }
        section.data.push(currentValue);
        return [...accumulator.filter((activity: ListSection<Activity>) => activity.title !== createdDate), section];
    }, initData);
}
