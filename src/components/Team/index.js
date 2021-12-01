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
                        <div class="box"><img class="rounded-circle" data-bs-hover-animate="pulse" src="https://i.imgur.com/nAcoHRf.jpg"/>
                            <h3 class="name">Boris Simga</h3>
                            <p class="title">Designer</p>
                            <p class="description"><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br></br><br></br></p>
                            <div class="social"><a href="https://www.google.co.in"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                 
                    <div class="col-md-6 col-lg-4 item">
                        <div class="box"><img class="rounded-circle" data-bs-hover-animate="pulse" src="https://i.imgur.com/HjKTNkG.jpg"/>
                            <h3 class="name">Charles m.</h3>
                            <p class="title">Developer</p>
                            <p class="description"><br></br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id<br></br><br></br></p>
                            <div class="social"><a href="#"><i class="fa fa-facebook-official"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-instagram"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
    );
};

export default Team;
