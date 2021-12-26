import React from 'react'
import { SuchiContainer,SuchiHeading, SuchiList, SuchiP } from './SuchiElements';

const Suchi = () => {
    return (
        <SuchiContainer>
           
            <SuchiHeading>ସୂଚକାଙ୍କ</SuchiHeading>
            <SuchiP>
                <SuchiList to="/writing">1. ଆମ ସୌରଜଗତର ଅଜ୍ଞାତ ପ୍ରତିବେଶୀ -- ମନୋଜ ଦାସ  </SuchiList>
            </SuchiP>
            <SuchiP>
                <SuchiList to="/writing2">2. ଏକ ଦାର୍ଶନିକ ହାତୀକଥା -- ହୃଷୀକେଶ ପଣ୍ଡା </SuchiList>
            </SuchiP>
            <SuchiP>
                <SuchiList to="/writing3">3. ସଂକ୍ଷେପରେ କାଉଲ୍ -- ଗୋବିନ୍ଦ ଦାସ</SuchiList>
            </SuchiP>
            
        </SuchiContainer>
    );
};

export default Suchi;
