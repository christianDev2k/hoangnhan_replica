import React from 'react';
import { Collapse as CollapseA, CollapsePanelProps, CollapseProps as CollapsePropsA } from 'antd';

type CollapseObject = {
    (props: CollapsePropsA): React.ReactNode;
    Panel: React.ForwardRefExoticComponent<CollapsePanelProps & React.RefAttributes<HTMLDivElement>>;
};

const Collapse: CollapseObject = props => {
    return <CollapseA { ...props } />;
};
Collapse.Panel = CollapseA.Panel;

export default Collapse;