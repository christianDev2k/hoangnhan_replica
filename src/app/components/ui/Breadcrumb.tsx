import { Breadcrumb as BreadcrumbA, BreadcrumbProps as BreadcrumbPropsA } from 'antd';
import React from 'react';

type BreadcrumbProps = {
    (props: BreadcrumbPropsA): React.ReactNode;
};

const Breadcrumb: BreadcrumbProps = props => {
    return <BreadcrumbA { ...props } />;
};

export default Breadcrumb;