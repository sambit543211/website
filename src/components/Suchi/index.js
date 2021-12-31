import React from 'react'
import { SuchiContainer,SuchiHeading, SuchiList, SuchiP } from './SuchiElements';

const Suchi = () => {
    return (
        <SuchiContainer>
           
            <SuchiHeading>ସୂଚୀ</SuchiHeading>
            <SuchiP>
                <SuchiList to="/writing">୧. ଆମ ସୌରଜଗତର ଅଜ୍ଞାତ ପ୍ରତିବେଶୀ -- ମନୋଜ ଦାସ  </SuchiList>
            </SuchiP>
            <SuchiP>
                <SuchiList to="/writing2">୨. ଏକ ଦାର୍ଶନିକ ହାତୀକଥା -- ହୃଷୀକେଶ ପଣ୍ଡା </SuchiList>
            </SuchiP>
            <SuchiP>
                <SuchiList to="/writing3">୩. ସଂକ୍ଷେପରେ କାଉଲ୍ -- ଗୋବିନ୍ଦ ଦାସ</SuchiList>
            </SuchiP>
            
        </SuchiContainer>
    );
};

export default Suchi;
