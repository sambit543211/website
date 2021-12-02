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
                        <div class="box"><img class="rounded-circle" data-bs-hover-animate="pulse" src={require('../../images/sam.JPG').default}/>
                            <h3 class="name">ସି ଏସ ସମ୍ବିତ</h3>
                            <p class="title">ବିକାଶକାରୀ</p>
                            <p class="description"><br></br>ଶିଖିବା ଏବଂ ଅନୁସନ୍ଧାନ କରିବାକୁ ଆଗ୍ରହୀ | ପ୍ରକୃତିକୁ ଭଲପାଉଥିବା ସୃଜନଶୀଳ ବ୍ୟକ୍ତି<br></br><br></br></p>
                            <div class="social"><a href="https://www.google.co.in"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                 
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box"><img class="rounded-circle" data-bs-hover-animate="pulse" src={require('../../images/biswa.jpg').default}/>
                            <h3 class="name">ବିଶ୍ୱଜିତ ସହୂ</h3>
                            <p class="title">ବିଷୟବସ୍ତୁ ପ୍ରଦାନକାରୀ</p>
                            <p class="description"><br></br>ମଜା ଏବଂ ବନ୍ଧୁତ୍ୱପୂର୍ଣ୍ଣ | କଠିନ ପରିଶ୍ରମ କରିବାକୁ ଭଲ ପାଆନ୍ତି |<br></br><br></br></p>
                            <div class="social"><a href="#"><i class="fa fa-linkedin"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    );
};

export default Team;
