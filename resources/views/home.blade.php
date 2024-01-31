@extends('parentLayout')

@section('title', 'Home')
@section('content')

<div class="navbar">
        <div class="name">ABDULLAH ASIM🕹️</div>
        <div class="nav">
            <a href="index.html" class="navItem">PORTFOLIO</a>
            <a href="Resume.html" class="navItem">RESUME</a>
            <a href="About.html" class="navItem"id="thisPage">ABOUT</a>
        </div>
    </div>
    <!--<video src="assets/DRLTrailer.mp4" controls></video>!-->
    <div class = "about">
        <img class = "pfp" src="assets/pfp.jpg" width="300px">
        <p>
            Hi there!<br>Abdullah Asim here, the wizard behind thrilling games and innovative software. <br>Leading game development at M.H.F.L Studios, I've crafted epic experiences. As Founder of Simp Studios, I've reached over 11,300 downloads globally, and as the brains behind The Pro Programmer, I've tackled diverse client requirements. I'm fluent in Unity, Android, and a  of programming languages, weaving magic into every line of code. Join me on this epic quest where pixels meet limitless possibilities!
        </p>
    </div>
    <div class="footer">
            &copy 2024 Abdullah Asim
            <div class="nav">
                <a href="mailto:abdullah.asim.0807@gmail.com" ><img class="socialLink" src="assets/icons/email.png"></a>
                <a href="https://www.linkedin.com/in/abdullah-asim-2004/" ><img class="socialLink" src="assets/icons/linkedin.png"></a>
                <a href="https://www.youtube.com/TheProProgrammer" ><img class="socialLink" src="assets/icons/youtube.png"></a>
                <a href="https://wa.me/923072724153" ><img class="socialLink" src="assets/icons/whatsapp.png"></a>
                <a href="https://twitter.com/StudiosDeSimp"><img class="socialLink" src="assets/icons/twitter.png"></a>
            </div>
    </div>
    @endsection