import React from 'react';

export interface SwitchItem {
    title: string;
    component: React.FC<any>;
    rootIsRequired: boolean;
    testId: string;
}
