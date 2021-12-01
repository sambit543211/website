import React from 'react'
import { SuchiContainer,SuchiHeading, SuchiList, SuchiP } from './SuchiElements';

const Suchi = () => {
    return (
        <SuchiContainer>
           
            <SuchiHeading>ସୂଚକାଙ୍କ</SuchiHeading>
            <SuchiP>
                <SuchiList to="/writing">1. ଅନେକ ସ୍ମିତ ହସ -- ମନୋଜ ଦାସ  </SuchiList>
            </SuchiP>
            <SuchiP>
                <SuchiList>Link2</SuchiList>
            </SuchiP>
            <SuchiP>
                <SuchiList>Link3</SuchiList>
            </SuchiP>
            
        </SuchiContainer>
    );
};

export default Suchi;
