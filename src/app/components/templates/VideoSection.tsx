'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Button from '@/app/components/ui/Button';

export default function VideoSection() {
    return (
        <VideoSectionStyled className="section !max-w-full">
            <div className="rounded-[--border-radius-base] overflow-hidden relative">
                {/*Video*/ }
                <div>
                    <video
                        playsInline={ true }
                        loop={ true }
                        muted={ true }
                        autoPlay={ true }
                        controls={ false }
                        preload="metadata"
                        poster="/img/video-section/poster.webp"
                        className="w-full block object-cover h-[300px] md:h-[700px]"
                    >
                        <source src="/video/video-section.mp4" type="video/mp4"/>
                        <Image src="/img/video-section/placeholder.webp" alt="video" fill/>
                    </video>
                </div>

                {/*Content*/ }
                <div className="absolute left-0 bottom-0 px-[40px] pb-[45px] xl:px-[90px] xl:pb-[60px]">
                    <h5 className="mb-2.5 text-sm font-semibold text-[--color-white]">THE NEXT NEW GENERATION</h5>
                    <h3 className="video-heading">NIKE PEGASUS PREMIUM</h3>
                    <Button variant={ 'white' }>Shop the collection</Button>
                </div>
            </div>
        </VideoSectionStyled>
    );
}

const VideoSectionStyled = styled.div`
    .video-heading {
        margin-bottom: clamp(20px, 5vw, var(--heading-spacing));
        font-size: clamp(40px, 5vw, var(--heading-font-size));
        color: var(--color-white);
    }
`;