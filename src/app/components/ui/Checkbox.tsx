import React from 'react';
import { Checkbox as CheckboxA, CheckboxProps as CheckboxPropsA } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';

type CheckboxObject = {
    (props: CheckboxPropsA): React.ReactNode
    Group: React.MemoExoticComponent<React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>>
}

export const Checkbox: CheckboxObject = (props) => {
    return <CheckboxA { ...props } />
}

Checkbox.Group = CheckboxA.Group;
