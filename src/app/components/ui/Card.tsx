import { Card as CardA, CardProps as CardPropsA } from 'antd';
import { CardGridProps, CardMetaProps } from 'antd/es/card';
import React from 'react';

type CardObject = {
    (props: CardPropsA): React.ReactNode,
    Meta: React.FC<CardMetaProps>
    Grid: React.FC<CardGridProps>
}

export const Card: CardObject = (props) => {
    return <CardA bordered={ false } bodyStyle={ { padding: 0 } } { ...props } />
}

Card.Meta = CardA.Meta;
Card.Grid = CardA.Grid;
