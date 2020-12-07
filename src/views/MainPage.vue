<template>
  <div id="MainPage">
    <div class="greeting">
      <div class="greeting__inner">
        <h2 class="greeting__title">
          Find tours, activities and tickets for sightseeing in Lanzarote
        </h2>
        <div class="greeting__action">
          <input type="date">
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
.greeting {
  height: 550px;
  background: url("../../public/imgs/mainpage_bg.png") no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
}
.greeting__inner{
  height: 252px;
  width: 820px;
  
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(2.5px);
  border-radius: 12px;
}
.greeting__title{
  color: #fff;
  padding: 30px 60px;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
}
.greeting__action{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
