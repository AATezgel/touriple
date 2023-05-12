<template>
  <v-app dark>
    <div class="wrapper">

      <div class="header">
        <div class="logo">
          <a href="">
            <img src="~/assets/logo.png" alt="" >
          </a>
        </div>

        <nav class="navigation">
          <ul class="navItems">
            <li><a @click="scrollToDiv" >{{ $t('bas1') }}</a></li>
            <li><a @click="scrollToDiv2" >{{ $t('bas2') }}</a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>

            <li><a href=""></a></li>



          </ul>
        </nav>
        <div class="lang">
          <ul class="navItems">
            <li class="switch1"><a  ref="boldText"  @click="makeBold('boldText')">TR</a></li>
            <li class="switch2"><a  ref="thinText" @click="makeBold('thinText')">EN</a></li>
          </ul>
        </div>

      </div>

 
  
      <div class="wrapper1">

<div class="header1">
  <div class="logo1">
    <h1 class="sansh1">{{ $t('yazi1') }}</h1>
    <h1 class="sansh1">{{ $t('yazi2') }}</h1>
    <h1 class="sansh1">{{ $t('yazi3') }}</h1>
    <br>
    <br>

    <p class="sans">{{ $t('yazi4') }}</p>
    <p class="sans">{{ $t('yazi5') }}</p>
    <p class="sans">{{ $t('yazi6') }}</p>
    <p class="sans">{{ $t('yazi7') }}</p>

  </div>

  <div class="lang1">

    <img class="image" src="~/assets/ortam1.png" alt="">
  </div>  
  
</div>






<div class="bos1"></div>






<div class="header2"  ref="myDiv">
  <div class="logo2 reveal fade-right">
    <h1  class="sansh1">{{ $t('yazi8') }}</h1>

    <br>
    <br>
    <p class="sans">{{ $t('yazi9') }}</p>
    <p class="sans">{{ $t('yazi10') }}</p>
  </div>

  <div class="lang1 reveal fade-down">

    <img class="image2" src="~/assets/ortam2.png" alt="">
    </div>
  
</div>








<div class="header2">
  <div class="logo2 reveal fade-fade">

    <img class="image2" src="~/assets/kaydır1.gif" alt="">
  </div>
  <div class="lang2 reveal fade-down">

    <p class="sans">{{ $t('yazi11') }}</p>
    <p class="sans">{{ $t('yazi12') }}</p>
  </div>
</div>




<div class="header2 reveal fade-down">
  <div class="logo2">

    <p class="sans">{{ $t('yazi13') }}</p>
    <p class="sans">{{ $t('yazi14') }}</p>
    <p class="sans">{{ $t('yazi15') }}</p>
    <p class="sans">{{ $t('yazi16') }}</p>


  </div>

  <div class="lang1 reveal fade-up">

    <img class="image2" src="~/assets/ortam4.png" alt="">
    </div>
  
</div>








<div class="header2">

  <div class="logo2 reveal fade-left">
    <h1 class="neden">{{ $t('yazi17') }}</h1> <br> <br>


    <img class="image2" src="~/assets/ortam5-1.png" alt="">
  </div>
  <div class="lang2 reveal fade-right">
    <p class="sans">{{ $t('yazi18') }}</p>
    <p class="sans">{{ $t('yazi19') }}</p>
    <p class="sans">{{ $t('yazi20') }}</p>
    <p class="sans">{{ $t('yazi21') }}</p>
    <p class="sans">{{ $t('yazi22') }}</p>
  </div>
</div>





<div class="header2">
  <div class="logo2 reveal fade-left">
    <p class="sans">{{ $t('yazi23') }}</p>
    <p class="sans">{{ $t('yazi24') }}</p>
    <p class="sans">{{ $t('yazi25') }}</p>
    <p class="sans">{{ $t('yazi26') }}</p>
    <p class="sans">{{ $t('yazi27') }}</p>
    <p class="sans">{{ $t('yazi28') }}</p>
    <p class="sans">{{ $t('yazi29') }}</p>
    <p class="sans">{{ $t('yazi30') }}</p>
    <p class="sans">{{ $t('yazi31') }}</p>

  </div>

  <div class="lang1 reveal fade-right">

    <img class="image31" src="~/assets/elaç1.gif" alt="">
    </div>
  
</div>





<div class="bos2"></div>






<div class="contack" ref="myDiv2">
  <img class="mailImage" src="~/assets/Vector.png" alt="">
  <p class="h1">Let us contact with you</p>

  <input class="inputText" type="text" placeholder="Enter Your Email"> <br>
  <input class="checkbox" type="checkbox" id="" name="" value="">
  <label for="vehicle1">I would like to be informed via this email</label><br>
  <button class="button2">Confirm</button>
</div>


<br><br><br><br>




<div class="socialMedia">
  <a href="">
    <img class="image3" src="~/assets/ins.png" alt="">
  </a>        <a href="">
    <img class="image3" src="~/assets/face.png" alt="">
  </a>        <a href="">
    <img class="image4" src="~/assets/twit.png" alt="">
  </a>

</div>



</div>




    </div>
        <div class="footer"  >
      <p class="footer1">2022 Copyright. All Rights Reserved. </p>

    </div>
  </v-app>
</template>

<script>
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
  }
}

  export default{
    name: 'default',
    
    mounted() {
    reveal();
    window.addEventListener("scroll", reveal);

  },
    methods: {
      makeBold(elementRef) {
      const boldText = this.$refs.boldText;
      const thinText = this.$refs.thinText;
      if (elementRef === 'boldText') {
        this.$i18n.locale = 'en'
        boldText.style.fontWeight = 'bold';
        thinText.style.fontWeight = 'normal';
      } else if (elementRef === 'thinText') {
        this.$i18n.locale = 'tr'
        thinText.style.fontWeight = 'bold';
        boldText.style.fontWeight = 'normal';
      }
    },
    scrollToDiv() {
      const divPosition = this.$refs.myDiv.offsetTop - 250// mydiv etiketinin üst kenarının pozisyonunu alır
      window.scrollTo({
        top: divPosition,
        behavior: "smooth" // animasyonlu kaydırma işlemi yapar
      })
    },
    scrollToDiv2() {
      const divPosition = this.$refs.myDiv2.offsetTop - 250// mydiv etiketinin üst kenarının pozisyonunu alır
      window.scrollTo({
        top: divPosition,
        behavior: "smooth" // animasyonlu kaydırma işlemi yapar
      })
    }
  }
  }
</script>

<style>




.background-illustration {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 0.5;
  left: -90px;
  top: 10px;
}




  a{
    text-decoration: none;
  }
  ul{
    list-style-type: none;

  }

  .wrapper{
    max-width: 100vw;

  }
  .header{
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: rgba(49, 156, 255, 1);
    height: 5.2vw;
    position: fixed;
    width: 100%;   
    z-index: 3; 
    max-width: 100vw;
    margin: 0 auto;

  }
  .logo{

    display: flex;
    align-items: center;
    margin: 0.52vw;
    padding: 0.52vw 0px;
    margin-left: auto;
    width: 11.4vw;
    height: 3.385vw;

  }

  .lang{
    margin-left: auto;
    margin-right: auto;
  }
  .navItems{
    display: flex;
    align-items: center;
    margin: 0 0px;
    font-weight: 900;
    margin-left: 2.6vw;
  }  


  .navItems li a{
    font-family: 'Josefin Sans';
    font-weight: 900;
    font-size: 18;
    line-height: 23;
    color: #fff;
    margin: 0 16px;
  }

  .footer{
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    background-color: rgba(49, 156, 255, 1);
    color: #fff;
    height: 420px;
    width: 100vw;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .footer1{
    margin-left: auto;
    margin-right: auto;
    color : #fff;
    padding:0 0;
    font-size: 30px;
    font-weight: 700;
    font-family: 'Josefin Sans';
  }

.checkbox{
  width: 20px;
  height: 20px;
  box-shadow: 1px 1px 0 1px #F73B3B;
}

.h1{
  font-weight: 600;
  font-size: 2.6vw;

}
.mailImage{
  width: 6.25vw;
  opacity: 20%;
  position: absolute;
  margin: -10px -60px;
  filter: blur(2px);
}

  .background-image{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0.1;
  left: 0;
  top: 0;
  width:145vw;
  height:238.3vw;
}
  .background-illustration {
  width: 1920px;
  height: 5000px;
  position: absolute;
  left: -90px;
  top: 10px;
}

  .header1{
    display: flex;
    align-items: center;
    margin-top: 26vw;
    color: #000000;
    height: 5.2vw;

  }
  .logo1{
    
    align-items: center;
    margin:0 -13vw;
    padding: 0.5vw 0px;
    margin-left: auto;
    margin-top:-4.2vw;

  }

  .lang1{
    margin-left: auto;
    margin-right: auto;
    color : #000000;
    padding:0 0;
  }
  .navItems1{
    display: flex;
    align-items: center;
    margin: 0 0px;
  }
  .navItems1 li a{
    font-weight: bold;
    font-size: 18;
    line-height: 23;
    color: #000000;
    margin: 0 16px;
  }
  .image{
    border-radius: 50%;
    width: 20.83vw;
    height: 20.83vw;
    z-index: 1;
    position: relative;
  }





a{
    text-decoration: none;
  }
  ul{
    list-style-type: none;

  }




  .sansh1{
    font-family: 'Josefin Sans';
    font-size: 2.1vw;
    font-weight: 500;
    margin: -20px 0;

  }
  .sans{
    font-family: 'Josefin Sans';
    font-size: 1.3vw;
    font-weight: 300;
    margin: -10px 0;

  }
  .wrapper1{
    max-width: 1920px;
    margin: 0 ;
    padding: 0 20px;

  }
  .bos1{
    margin: 41.6vw 0;
  }

  .image2{
    border-radius: 50%;
    width: 18.5vw;
    height: 18.5vw;
    z-index: 1;
    position: relative;
  }
  .image31{
    border-radius: 50%;
    width: 18.5vw;
    height: 18.5vw;
    z-index: 1;
    position: relative;
  }

  .logo2{
    
    align-items: center;
    margin:0 -150px;
    padding: 10px 0px;
    margin-left: auto;
    margin-top:-80px;

  }

  .lang2{
    margin-left: auto;
    margin-right: auto;
    color : #000000;
    padding:0 0;
    text-align: right;
  }

  .contack{
    margin: 0 0;
    padding: 0 0;
    text-align: center;
    margin-top: 100px;
    font-family: 'Josefin Sans';
    font-weight: 400;
    font-size: 20px;
  }


  .bos2{
    margin: 650px 0;
  }

  .inputText{
    width: 420px;
    height: 50px;
    border-radius: 5px;
    margin: 10px 0;
    padding: 0 80px;
    font-size: 35px;
    box-shadow: 0 2px 0 0 #dbdbdb;
  }
  .button2{
    width: 7.8vw;
    height: 2.1vw;
    border-radius: 12px;
    margin: 10px 0;
    padding: 0 20px;
    font-weight: 800;
    font-size: 1.56vw;
    background-color: rgba(49, 156, 255, 1);
    color: #ffffff;
  }

  .neden{
    margin: 0 0;
    padding: 0 0;
    margin-left: 0px;
    font-family: 'Josefin Sans';
    font-size: 40px;
    font-weight: 500;

  }

  .header2{
    display: flex;
    align-items: center;
    margin-top: 20.8vw;
    color: #000000;
    height: 5.2vw;

  }


  .socialMedia{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image3{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0 10px;
    z-index: 1;
    position: relative;
  }

  .image4{
    width: 50px;
    height: 50px;
    margin: 0 10px;
    z-index: 1;
    position: relative;
  }

.reveal {
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}


.active.fade-up {
  animation: fade-up 1s ease-in;
}
.active.fade-fade {
  animation: fade-fade 1s ease-in;
}
.active.fade-down {
  animation: fade-down 1s ease-in;
}
.active.fade-left {
  animation: fade-left 1s ease-in;
}
.active.fade-right {
  animation: fade-right 1s ease-in;
}
@keyframes fade-up {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-down {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-fade {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}




@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}


</style>