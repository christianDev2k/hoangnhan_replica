import React from 'react';
import { Popover as PopoverA, PopoverProps as PopoverPropsA } from 'antd';

type PopoverProps = {
    (props: PopoverPropsA): React.ReactNode;
};

const Popover: PopoverProps = props => {
    return <PopoverA {...props} />;
};

export default Popover;