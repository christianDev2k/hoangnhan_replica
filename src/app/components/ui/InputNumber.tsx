import { InputNumber as InputNumberA, InputNumberProps as InputNumberPropsA } from 'antd';

type BadgeProps = {
    (props: InputNumberPropsA): JSX.Element;
};

const InputNumber: BadgeProps = props => {
    return <InputNumberA { ...props } />;
};

export default InputNumber;