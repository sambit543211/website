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
                <SuchiList to="/writing2">2. ଯିଏ ଅଗ୍ନିରୁ ଜନ୍ମ ହୁଏ -- ପ୍ରତୀ ରାୟ </SuchiList>
            </SuchiP>
            <SuchiP>
                <SuchiList to="/writing3">3. ରେବତୀ -- ଫକିର ମୋହନ ସେନାପତି</SuchiList>
            </SuchiP>
            
        </SuchiContainer>
    );
};

export default Suchi;
