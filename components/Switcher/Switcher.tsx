import React, { useState } from 'react';

import { SwitchItem } from 'types';
import { Toggle } from './components';

export function Switcher(props: any) {
    const preparedSettings = props.switchSettings.filter((item: SwitchItem) => {
        if (!item.rootIsRequired) {
            return item;
        }

        if (props.isRoot) {
            return item;
        }
    });
    const [activeTab, setActiveTab] = useState(preparedSettings[0]);
    const Component = activeTab.component;
    function setActive(item: SwitchItem) {
        setActiveTab(item);
    }

    if (!!props.defaultActiveTab && activeTab.title !== props.defaultActiveTab.title) {
        setActiveTab(props.defaultActiveTab);
    }

    return (
        <>
            {preparedSettings.length > 1 ? (
                <Toggle settingsList={preparedSettings} activeItem={activeTab} setActiveTab={setActive} />
            ) : null}
            <Component {...props} />
        </>
    );
}
