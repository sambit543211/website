import React from 'react'
import Icon1 from '../../images/manoj-das.jpg'
import Icon2 from '../../images/pratibha-ray.png'
import Icon3 from '../../images/fakir.jpg'
import { ServicesContainer,ServicesH1,ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServiceElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>କିଛି ଲେଖା</ServicesH1>
            <ServicesWrapper>
                <ServicesCard to="/writing">
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>ଅନେକ ସ୍ମିତ ହସ</ServicesH2>
                    <ServicesP> ମନୋଜ ଦାସ </ServicesP>
                </ServicesCard>
                <ServicesCard  to="/writing2">
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>ଯିଏ ଅଗ୍ନିରୁ ଜନ୍ମ ହୁଏ</ServicesH2>
                    <ServicesP> ପ୍ରତୀ ରାୟ  </ServicesP>
                </ServicesCard>
                <ServicesCard  to="/writing3">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>ରେବତୀ</ServicesH2>
                    <ServicesP>ଫକିର ମୋହନ ସେନାପତି</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
};

export default Services;
