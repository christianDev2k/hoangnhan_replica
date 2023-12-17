import { Select as SelectA, SelectProps as SelectPropsA } from 'antd';
import React from 'react';

type SelectProps = {
    (props: SelectPropsA): React.ReactNode;
};

const Select: SelectProps = props => {
    return <SelectA { ...props } />;
};

export default Select;