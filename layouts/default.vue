<template>
  <v-app dark>
    <div class="wrapper">
      <div class="background-illustration">
          <svg width="2735" height="4576" viewBox="0 0 2735 4576" fill="none" xmlns="http://www.w3.org/2000/svg" class="backgroundillustration" data-v-314f53c6=""><path d="M2054.28 3752.77L1096.6 3574.02L275.991 3393.09L119.822 3361.92C66.774 3351.33 45.2713 3287.14 81.2367 3246.73L157.66 3160.87C197.888 3115.67 255.511 3089.82 316.017 3089.82L380.29 3089.82L615.632 3110.68L951.301 3135.19C977.667 3137.11 1004.15 3133.84 1029.26 3125.57L2048.48 2789.53C2114 2767.93 2167.96 2844.13 2125.83 2898.76L1851.39 3254.61C1829.02 3283.62 1832.8 3324.97 1860.06 3349.45L1903.39 3388.35L1965.9 3444.48C1984.02 3460.74 2009.27 3466.42 2032.6 3459.49L2079.28 3445.62C2147.56 3425.34 2198.97 3508.11 2150.53 3560.33L2122.32 3590.75C2104.04 3610.46 2101.26 3639.98 2115.54 3662.76C2143.06 3706.64 2105.2 3762.28 2054.28 3752.77Z" fill="#72D1EE" fill-opacity="0.2" data-v-314f53c6=""></path> <path d="M1049.72 363.553L1404.28 568.456C1435.73 586.628 1475.55 580.693 1500.33 554.141L1882.48 144.677C1930.78 92.9202 2017.5 127.101 2017.5 197.896V453L2219.64 2049.07C2227.57 2111.73 2161.63 2157.35 2105.79 2127.82L161.258 1099.54C110.441 1072.67 105.162 1001.93 151.428 967.811L964.397 368.31C989.361 349.901 1022.86 348.033 1049.72 363.553Z" fill="#72D1EE" fill-opacity="0.2" data-v-314f53c6=""></path></svg>
      </div>
        
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
            <li class="switch1"><a href="#">TR</a></li>
            <li class="switch2"><a href="#">EN</a></li>
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
    
    max-width: auto;
    margin: 0 ;

  }
  .header{
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: rgba(49, 156, 255, 1);
    color: #fff;
    height: 100px;
    position: fixed;
    width: 100%;    

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
    color : #fff;
  }
  .navItems{
    display: flex;
    align-items: center;
    margin: 0 0px;
  }
  .navItems li a{
    font-weight: bold;
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