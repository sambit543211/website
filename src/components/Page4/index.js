import React from 'react'
import { ContentContainer, ContentBox, ContentH1, Img, ImgWrap, Heads, About, AboutP, ContentH2, Row } from './PageElements';



const Content = () => {
    return (
            <ContentContainer>
                <ContentBox>
                    <Heads> ରେବତୀ </Heads>
                    <ImgWrap>
                        <Img src={require('../../images/fakir.jpg').default}/>
                    </ImgWrap>
                    <About>
                    ଲେଖକଙ୍କ ବିଷୟରେ 
                    </About>
                    <AboutP>
                    ଜାନୁଆରୀ 13 ଜାନୁୟାରୀ 1843 ରେ ମାକର ସଙ୍କ୍ରାନ୍ତୀଙ୍କ ଆଗମନ ପରେ ଓଡିଶାର ବାଲେଶ୍ୱର ଅଞ୍ଚଳର ମଲ୍ଲିକାଶପୁର ସହରରେ ଫାକିର ମୋହନ ସେନାପତିଙ୍କୁ ବିଶ୍ୱକୁ ଅଣାଯାଇଥିଲା। 14 ଜୁନ୍ 1918. ସେ ସଙ୍କ୍ରାନ୍ତୀରେ ଅତିରିକ୍ତ ଭାବରେ ତିର୍କାଭା ଏବଂ ତିରୋବାବାରେ ଆରମ୍ଭ କରିଥିଲେ |
                    </AboutP>
                    <Row>
                        <ContentH1>ଏହିପରି, ଫାକିରମୋହନ ଓଡିଆ ଲେଖା ଜଗତରେ “ସଙ୍କ୍ରାନ୍ତୀ-ପୁରଶ୍” ଭାବରେ ପରିଚିତ ହୋଇଛନ୍ତି | ଏହି ସଙ୍କ୍ରାନ୍ତୀ ହେତୁ, ସମ୍ଭବତ his ତାଙ୍କ ରଚନା ହେତୁ, ଏକ ଅସାଧାରଣ ବିରକ୍ତି ଲେଖା କ୍ଷେତ୍ରରେ ଆସି ଆଉ ଏକ ସମୟ ଘୋଷଣା କଲା | ଯୁବାବସ୍ଥାରେ, ତାଙ୍କ ବାପା ଏବଂ ମା ବାଲଟିକୁ ବାଡେଇବା ପରେ ଫାକିରମୋହନଙ୍କୁ ଜଣେ ବୃଦ୍ଧ ଜେଜେବାପା ବ raised ାଇଥିଲେ | ଯୁବାବସ୍ଥାରେ ତାଙ୍କ ନାମ ବ୍ରିଜମୋହନ ଥିଲା | ଯେକଣସି ପରିସ୍ଥିତିରେ, ଏକ ନାତିର ନାତୁଣୀର ମାତାଙ୍କୁ ଏକ ଫକିରରେ ସମୃଦ୍ଧ କରି, ତାଙ୍କ ଜୀବନକୁ ଏକ ଦୁ ving ଖୀ ସାଧୁ ବାପା ସମର୍ଥନ କରିଥିଲେ | ସେହି ଅନୁଯାୟୀ, ବ୍ରଜମୋହନ |</ContentH1>
                        <ContentH2>ନିମ୍ନରେ ଆପଣ ଓଡିଆ ଭାଷାରେ ଫକିର ମୋହନ ସେନାପତି ଜିବାନୀ ପାଇବେ | ପ୍ରାରମ୍ଭରେ, ଫକିର ମୋହନ ଭଗବତ୍ ପାଇଁ ଦୁ sorry ଖିତ ଏବଂ ଏଥିସହ ଅପ୍ରତ୍ୟାଶିତ ଦକ୍ଷତା ଅଛି, ଯୁବାବସ୍ଥାରେ ଅବ leg ଧ, ପ୍ୟୁବସେନ୍ସରେ ପତି-ପତ୍ନୀ ଏବଂ ବୟସ ଶେଷ ହେବା ପର୍ଯ୍ୟନ୍ତ ପିଲା | ଟାଉନ ସ୍କୁଲରେ ଧ୍ୟାନ ଦେଇ ସେ ମୁହାଁମୁହିଁ ଅନୁସନ୍ଧାନ ଜାରି ରଖିଥିଲେ | ବାଲେଶ୍ୱର ମିଶନ ବିଦ୍ୟାଳୟରେ ପ୍ରଧାନ ଶିକ୍ଷକ ହୋଇଥିଲେ | ପର୍ଯ୍ୟାୟ କ୍ରମେ ତାଙ୍କୁ ତାଙ୍କର ସରସ୍ୱତ ସାଧନା ସ୍ୱୀକୃତି ଦେଇଥିଲେ |</ContentH2>
                    </Row>
                </ContentBox>
            </ContentContainer>
    );
};

export default Content;