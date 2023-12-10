'use client';

import { ScrollLineIcon } from '@/app/components/ui/svg';
import styled, { keyframes } from 'styled-components';
import { PageScrollingDataType } from '@/app/components/data/page-scrolling';

export default function PageScrolling({ data }: { data: PageScrollingDataType }) {
    return (
        <PageScrollingStyled>
            <div className="py-[18px] border-y border-[--heading-color]">
                <div className="flex overflow-hidden items-center scrolling-animation">
                    {
                        [...Array(6)].map((_, index) => (
                            <div key={ index } className="flex items-center">
                                {
                                    data.map(({ title }) => (
                                        <div key={ title } className="flex items-center flex-nowrap">
                                            <p className="text-[14px] font-[600] text-[--heading-color]">{ title }</p>
                                            <i className="scrolling-icon px-[50px]">{ ScrollLineIcon }</i>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </PageScrollingStyled>
    );
}

const ticker = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`

const PageScrollingStyled = styled.div`
    .scrolling-animation > * {
        animation: ${ ticker } 30s infinite linear;
        flex-shrink: 0;
    }

    .scrolling-icon svg {
        fill: var(--heading-color);
        stroke: var(--heading-color);
    }
`;