import React from 'react';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Team = () => {
    return (
    <>
        <div class="team-boxed">
            <div class="container">
                <div class="intro">
                    <h1 class="text-center">ଉଦ୍ୟମ</h1>
                </div>
                <div class="row people justify-content-center align-items-center">
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box"><img class="rounded-circle" data-bs-hover-animate="pulse" alt="yo" src={require('../../images/SAMBIT.jpeg').default}/>
                            <h3 class="name">ସି. ଏସ୍. ସମ୍ବିତ୍</h3>
                            <p class="title">ବିକାଶକାରୀ</p>
                            <p class="description"><br></br>ବିଜ୍ଞାନ ଏବଂ ପ୍ରଯୁକ୍ତି ବିଦ୍ୟାରେ ଅଧ୍ୟୟନ ପରେ ଏବେ ସଫ୍ଟୱେର ଇଞ୍ଜିନିୟର ଭାବେ କାର୍ଯ୍ୟରତ। ସର୍ବଦା କିଛି ନୁଆ ଜାଣିବାରେ କିଛି ନୁଆ ଶିଖିବାରେ ଇଚ୍ଛା ରଖନ୍ତି। ବହୁତ ହାସ୍ୟରସାତ୍ମକ ଓ ମେଳାପି କହିଲେ ଅତ୍ୟୁକ୍ତି ହେବ ନାହିଁ। ପ୍ରକୃତିକୁ ଭଲ ପାଉଥିବା ଜଣେ ସୃଜନଶୀଳ ମଣିଷଟିଏ।<br></br><br></br></p>
                            <div class="social"><a href="https://www.google.co.in"><i class="fa fa-linkedin"></i></a><a href="https://www.google.co.in"><i class="fa fa-twitter"></i></a><a href="https://www.google.co.in"><i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                 
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box"><img class="rounded-circle" alt="yolo" data-bs-hover-animate="pulse" src={require('../../images/BISWAJIT.jpg').default}/>
                            <h3 class="name">ବିଶ୍ୱଜିତ୍ ସାହୁ</h3>
                            <p class="title">ବିଷୟବସ୍ତୁ ପ୍ରଦାନକାରୀ</p>
                            <p class="description"><br></br>ବିଜ୍ଞାନ ଏବଂ ପ୍ରଯୁକ୍ତି ବିଦ୍ୟାରେ ଅଧ୍ୟୟନ ପରେ ଏବେ ସଫ୍ଟୱେର ଇଞ୍ଜିନିୟର ଭାବେ କାର୍ଯ୍ୟରତ। ଓଡ଼ିଆ ଏବଂ ଇଂରାଜୀ ଭାଷା ସାହିତ୍ୟରେ ରୁଚି ରଖନ୍ତି। ଓଡ଼ିଆ ଭାଷାର ପ୍ରଚାର ପ୍ରସାର ନିମନ୍ତେ କିଛି କରିବାର ଇଚ୍ଛା ରଖନ୍ତି। ମଜାଳିଆ ଏବଂ ଜିଜ୍ଞାସୁ ମଣିଷଟିଏ ।<br></br><br></br></p>
                            <div class="social"><a href="https://www.google.co.in"><i class="fa fa-linkedin"></i></a><a href="https://www.google.co.in"><i class="fa fa-twitter"></i></a><a href="https://www.google.co.in#"><i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    );
};

export default Team;
