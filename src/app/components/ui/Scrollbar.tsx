import styled from 'styled-components';
import React from 'react';

type ScrollbarProps = {
    children: React.ReactNode,
    className?: string,
    size?: 'small' | 'medium' | 'large',
}
export default function Scrollbar({ children, className, size = 'medium' }: ScrollbarProps) {
    return (
        <ScrollbarStyled className={ `overflow-y-scroll ${ className }` } size={ size }>{ children }</ScrollbarStyled>
    );
}

const ScrollbarStyled = styled.div<{ size: string }>`
  ${ ({ size }) => size && `
      &::-webkit-scrollbar {
        width: var(--scrollbar-width);
      }
    
      &::-webkit-scrollbar-track {
        background: var(--scrollbar-track-bg);
      }
    
      &::-webkit-scrollbar-thumb {
        background: var(--scrollbar-thumb-bg);
      }
    
      &::-webkit-scrollbar-thumb:hover {
        background: var(--scrollbar-thumb-bg-hover);
      }
  ` }
`;