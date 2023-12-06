import { Input as InputA, InputProps as InputPropsA, InputRef } from 'antd';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { PasswordProps, SearchProps, TextAreaProps } from 'antd/es/input';
import { TextAreaRef } from 'antd/es/input/TextArea';
import styled from 'styled-components';

type InputObject = {
    (props: InputPropsA & {
        variant?: 'primary' | 'email',
    }): React.ReactNode;
    TextArea: ForwardRefExoticComponent<TextAreaProps & RefAttributes<TextAreaRef>>
    Search: ForwardRefExoticComponent<SearchProps & RefAttributes<InputRef>>
    Password: ForwardRefExoticComponent<PasswordProps & RefAttributes<InputRef>>
}
const Input: InputObject = (props) => {
    return <InputStyled { ...props } variant={ props.variant }/>
}

Input.TextArea = InputA.TextArea;
Input.Search = InputA.Search;
Input.Password = InputA.Password;

const InputStyled = styled(InputA)<{
    variant: 'primary' | 'email' | undefined
}>`
  &:focus {
    box-shadow: none;
    outline: 0;
  }

  ${ ({ variant }) => variant && `
        padding: var(--input-padding);
        height: var(--input-small-height);
        border-radius: var(--input-border-radius);
        font-size: var(--input-font-size);
        transition: var(--bls-transition);

        @media screen and (min-width: 1023.98px) {
            & {
                height: var(--input-height);
            }
        }
  ` }

  ${ ({ variant }) => variant === 'primary' && `
        border: 1px solid var(--input-border-color);
        background: var(--input-bg);
        color: var(--input-color);
    
        &:focus {
            border-color: var(--heading-color);
            font-size: var(--input-font-size);
        }
  ` }

  ${ ({ variant }) => variant === 'email' && `
        --input-border-color: #333;
        --input-color: var(--color-white);
        border: 1px solid var(--input-border-color);
        background: transparent;
        color: var(--input-color);

        &:focus {
            border-color: var(--color-white);
            font-size: var(--input-font-size);
        }
        
        &::placeholder {
            color: var(--footer-text-color);
        }
  ` }
`;

export default Input;
