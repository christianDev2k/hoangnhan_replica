import React from 'react';
import { Drawer as DrawerA, DrawerProps as DrawerPropsA } from 'antd';

type BadgeProps = {
    (props: DrawerPropsA): React.ReactNode;
};

const Drawer: BadgeProps = props => {
    return <DrawerA { ...props } keyboard={ true }/>;
};

export default Drawer;