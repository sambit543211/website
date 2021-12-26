import React from 'react'
import Icon1 from '../../images/manoj-das.jpg'
import Icon2 from '../../images/Hrusikesh-Panda.jpg'
import Icon3 from '../../images/Gobinda_Chandra_Das.jpg'
import { ServicesContainer,ServicesH1,ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,ServicesH3, ServicesP } from './ServiceElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>କିଛି ଲେଖା</ServicesH1>
            <ServicesWrapper>
                <ServicesCard to="/writing">
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2></ServicesH2>
                    <ServicesH3>ଆମ ସୌରଜଗତର ଅଜ୍ଞାତ ପ୍ରତିବେଶୀ</ServicesH3>
                    
                    <ServicesP> ମନୋଜ ଦାସ </ServicesP>
                </ServicesCard>
                <ServicesCard  to="/writing2">
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2></ServicesH2>
                    <ServicesH2>ଏକ ଦାର୍ଶନିକ ହାତୀକଥା <br/> </ServicesH2>
                    <ServicesH2></ServicesH2>
                    <ServicesP> ହୃଷୀକେଶ ପଣ୍ଡା </ServicesP>
                    <ServicesH2></ServicesH2>
                </ServicesCard>
                <ServicesCard  to="/writing3">
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2></ServicesH2>
                    <ServicesH2>ସଂକ୍ଷେପରେ କାଉଲ୍</ServicesH2>
                    <ServicesH2></ServicesH2>
                    <ServicesP>ଗୋବିନ୍ଦ ଦାସ</ServicesP>
                    <ServicesH2></ServicesH2>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
};

export default Services;
