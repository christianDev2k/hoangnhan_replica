import { Badge as BadgeA, BadgeProps as BadgePropsA } from 'antd';

type BadgeProps = {
    (props: BadgePropsA): JSX.Element;
};

const Badge: BadgeProps = props => {
    return <BadgeA color={'#d73f0f'} {...props} />;
};

export default Badge;