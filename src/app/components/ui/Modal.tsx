import { Modal as ModalA, ModalProps as ModalPropsA } from 'antd';

type BadgeProps = {
    (props: ModalPropsA): JSX.Element;
};

const Modal: BadgeProps = props => {
    return <ModalA { ...props } />;
};

export default Modal;