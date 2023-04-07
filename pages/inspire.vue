<template>
  <v-app>

      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src="~/assets/ortam1.png" alt="">
          </div>          
          
          <div class="slide">
            <img src="~/assets/ortam1.png" alt="">
          </div>          
          
          <div class="slide">
            <img src="~/assets/ortam1.png" alt="">
          </div>

          <div class="slide">
            <img src="~/assets/ortam1.png" alt="">
          </div>

        </div>

      </div>
  </v-app>
</template>

<script>
export default {
  name: 'InspirePage'
}
</script>

<style>
body{
  align-items: center;
  justify-content: center;
}


.slider{
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: auto;
}

</style>