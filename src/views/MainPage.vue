<template>
  <div id="MainPage">
    <!-- INTRO -->
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
    <!-- FEATURES -->
    <div class="feature">
      <div class="container">
        <div class="feature__inner">
          <div class="feature__item">
            <div class="feature__item_icon">
              <img src="../../public/imgs/features/cancellation_icon.png" alt="">
            </div>
            <div class="feature__item_title">Cancellation of reservation</div>
            <div class="feature__item_text">
              Have you changed your plans? No worries. Please cancel your
              booking 24 hours before the start of most tours and activities to
              receive a full refund.
            </div>
          </div>
          <div class="feature__item">
            <div class="feature__item_icon">
              <img src="../../public/imgs/features/noqueues_icon.png" alt="">
            </div>
            <div class="feature__item_title">No queues</div>
            <div class="feature__item_text">
              Have you changed your plans? No worries. Please cancel your booking 24 hours before the start of most tours and activities to receive a full refund.
            </div>
          </div>
          <div class="feature__item">
            <div class="feature__item_icon">
              <img src="../../public/imgs/features/support_icon.png" alt="">
            </div>
            <div class="feature__item_title">24/7 support</div>
            <div class="feature__item_text">
              Have you changed your plans? No worries. Please cancel your booking 24 hours before the start of most tours and activities to receive a full refund.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
/* INTRO */
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

/* FEATURES */
.feature{
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.feature__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.feature__item{
  max-width: 300px;
}
.feature__item_title {
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 7px;
}
.feature__item_text {
  text-align: justify;
  line-height: 1.5;
}
</style>
