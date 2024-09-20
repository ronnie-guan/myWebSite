<template>
  <div class="block">
    <el-carousel trigger="click" height="100%" arrow="always">
      <el-carousel-item>
        <h3 class="small">
          <img src="../../../assets/Banner/banner_1.jpg" alt="" srcset="" />
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="small">
          <img
            src="../../../assets/Banner/banner_2.jpg"
            alt=""
            srcset=""
          />
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="small">
          <img
            src="../../../assets/Banner/banner_3.jpg"
            alt=""
            srcset=""
          />
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="small">
          <img
            src="../../../assets/Banner/banner_4.jpg"
            alt=""
            srcset=""
          />
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="small">
          <img
            src="../../../assets/Banner/banner_5.jpg"
            alt=""
            srcset=""
          />
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="small">
          <img
            src="../../../assets/Banner/banner_6.jpg"
            alt=""
            srcset=""
          />
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style>
.block {
  margin-top: 80px;
  height: calc(100vh - 80px);
  .el-carousel {
    height: 100%;
  }
  .small {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
