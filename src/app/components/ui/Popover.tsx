import React from 'react';
import { Popover as PopoverA, PopoverProps as PopoverPropsA } from 'antd';

type PopoverProps = {
    (props: PopoverPropsA): React.ReactNode;
};

const Popover: PopoverProps = props => {
    return <PopoverA color="#111" overlayInnerStyle={ { paddingBlock: 4, borderRadius: 5 } } { ...props } />;
};

export default Popover;