<template>
  <v-app dark>
    <div class="wrapper">

      <div class="header">
        <div class="logo">
          <a href="">
            <img src="~/assets/logo.png" alt="" height="65" width="219">
          </a>
        </div>

        <nav class="navigation">
          <ul class="navItems">
            <li><a href="">Özellikler</a></li>
            <li><a href="">Yardım</a></li>
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
            <li class="switch1"><a href="#" ref="boldText" @click="makeBold('boldText')">TR</a></li>
            <li class="switch2"><a href="#" ref="thinText" @click="makeBold('thinText')">EN</a></li>
          </ul>
        </div>

      </div>

        <nuxt/>


    <div class="footer">
      <p class="footer1">2022 Copyright. All Rights Reserved. </p>

    </div>

    </div>
  </v-app>
</template>

<script>

  export default{
    name: 'default',
    methods: {
      makeBold(elementRef) {
      const boldText = this.$refs.boldText;
      const thinText = this.$refs.thinText;
      if (elementRef === 'boldText') {
        boldText.style.fontWeight = 'bold';
        thinText.style.fontWeight = 'normal';
      } else if (elementRef === 'thinText') {
        thinText.style.fontWeight = 'bold';
        boldText.style.fontWeight = 'normal';
      }
    }
  }
  }
</script>

<style>
@media only screen and (max-width: 1600px) {
  .background-illustration {
  width: 1920px;
  height: 5000px;
  position: absolute;
  z-index: 0.5;
  left: -90px;
  top: 10px;
}
}



.background-illustration {
  width: 1920px;
  height: 5000px;
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
  body{
  height:100vh;
  margin: 0;
  padding:0;
  

  }
  .wrapper{
    max-width: 1920px;

  }
  .header{
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: rgba(49, 156, 255, 1);
    height: 100px;
    position: fixed;
    width: 100%;   
    z-index: 3; 
    max-width: 1920px;
    margin: 0 auto;

  }
  .logo{

    display: flex;
    align-items: center;
    margin: 10px;
    padding: 10px 0px;
    margin-left: auto;

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
    width: 100%;
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
</style>