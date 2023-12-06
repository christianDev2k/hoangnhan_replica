import { Button as ButtonA, ButtonProps as ButtonPropsA } from 'antd';
import styled from 'styled-components';

type ButtonProps = ButtonPropsA & {
    variant?: 'primary' | 'secondary' | 'white',
};

export default function Button({ ...props }: ButtonProps) {
    return <ButtonAStyled { ...props }/>;
};

const ButtonAStyled = styled(ButtonA)<ButtonProps>`
  ${ ({ variant }) => variant && `
    text-transform: var(--btn-text-transform);
    border-radius: var(--btn-border-radius);
    border-width: var(--btn-width-border);
    border-style: solid;
    padding: var(--btn-padding);
    height: var(--btn-height);
    line-height: var(--btn-line-height);
    font-weight: var(--btn-font-weight);
    font-size: var(--btn-font-size);
    background-color: var(--btn-secondary-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 786px) {
        padding: 0 20px;              
        height: var(--btn-small-height);
    }
  ` }

  ${ ({ variant }) => variant === 'primary' && `
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-color) !important;
    border-color: var(--btn-primary-bg) !important;
    
    &:disabled {
        opacity: 0.8;
        background-color: var(--btn-primary-bg) !important;
    }
  ` }

  ${ ({ variant }) => variant === 'secondary' && `
        &:hover {
            background-color: var(--btn-primary-bg);
            color: var(--btn-primary-color) !important;
            border-color: var(--btn-primary-bg) !important;
        }
  ` }

  ${ ({ variant }) => variant === 'white' && `
        border: none;
        outline: none;
        box-shadow: none;
        color: var(--btn-white-color) !important; 
  ` }
`;