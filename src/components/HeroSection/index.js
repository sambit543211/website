import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';


const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const onHover = () => {
        setHover(!hover);
    };
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>ଜୟ ଜଗନ୍ନାଥ</HeroH1>
                <HeroP>
                ଆମେ ଆଶା କରୁଛୁ ଆପଣ ବହୁତ ଭଲରେ ଅଛନ୍ତି ।
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'
                    smooth={true} duration={500} spy={true} exact='true' offset = {-80}>
                        ଆମ ବିଷୟରେ {hover ? <ArrowForward />: <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
