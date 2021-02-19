<template>
  <div class="main-page">
    <div class="main-title">
      <p class="main-title-first">Digital marketing service</p>
      <p class="main-title-second">Innovation and expertise to grow your business now and in the future</p>
      <p class="main-title-third">Your digital marketing strategy will likely comprise various digital marketing channels. Because your business is unique, you won’t market yourself like anyone else and that’s why we don’t offer a ‘one-size-fits-all’ solution.</p>
      <button class="connect"><span>Get in touch with our team</span> <div class="triangle-wrapper"><div class="triangle-right"></div></div></button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

.main-page{
  height: 100%;
}
.main-title{
  margin-top: 10%;
  color: white;
  font-weight: 700;
}
.main-title-first{
  font-size: 15px;
  line-height: 20px;
  text-transform: uppercase;
}
.main-title-second{
  font-size: 65px;
  line-height: 70px;
  width: 70%;
}
.main-title-third{
  margin: 30px auto;
  color: #BDBDD9;
  width: 50%;
  font-size: 22px;
  line-height: 25px;
  font-weight: 400;

}
.connect{
  padding: 20px 30px;
  border: 2px solid #FAB61F;
  color: #FAB61F;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: baseline;
  background: linear-gradient(135deg, #0C1228 50%, #FAB61F 50%);
  background-size: 200% 200%;
  transition: all 2s ease;
  position: relative;
}
.connect .triangle-right{
  border-right: 5px solid #FAB61F;
}
.connect:hover{
  background-position:right bottom;
}
.connect:hover{
  color: white;
}
.connect:hover .triangle-right{
  position: absolute;
  right: -2px;
  bottom: -2px;
  border-right: 5px solid white;
}
</style>
