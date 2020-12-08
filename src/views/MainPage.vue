<template>
  <div id="MainPage">
    <div class="intro">
      <div class="intro__inner">
        <h2 class="intro__title">
          Find tours, activities and tickets for sightseeing in Lanzarote
        </h2>
        <div class="intro__action">
          <input type="date" />
          <button>SELECT</button>
        </div>
      </div>           
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.intro {
  min-height: calc(100vh - 106px);
  /* max-height: 750px; */
  background: url("../../public/imgs/mainpage_bg_wave.png") no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro__inner {
  height: 252px;
  width: 820px;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(2.5px);
  border-radius: 12px;
}
.intro__title {
  color: #fff;
  padding: 32px 58px;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
}
.intro__action {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
