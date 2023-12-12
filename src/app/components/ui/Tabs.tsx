import React from 'react';
import { Tabs as TabsA, TabsProps as TabsPropsA } from 'antd';

type TabsProps = {
    (props: TabsPropsA): React.ReactNode;
};

const Tabs: TabsProps = props => {
    return <TabsA {...props} />;
};

export default Tabs;