<template>
  <div class="globalBox" v-if="isShow">
    <div class="phone">
      <i class="el-icon-phone"></i><span>400-400-400</span>
    </div>
    <div class="custom">
      <i class="el-icon-s-custom"></i
      ><span><router-link to="./contact">contactUs</router-link></span>
    </div>
    <div class="backTop" @click="backTop"><i class="el-icon-arrow-up"></i></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    backTop() {
      let timer = null;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        var oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop =
            oTop - 100;
          timer = requestAnimationFrame(fn);
        }
      });
    },
    handleScroll() {
      const scrollDistance =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollDistance > 300) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.globalBox {
  position: fixed;
  right: 10px;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: end;
  div {
    width: 34px;
    background-color: rgba(102, 102, 120, 0.7);
    color: white;
    font-size: 18px;
    margin-top: 5px;
    cursor: pointer;
    height: 34px;
    text-align: left;
    transition: width 0.3s ease;
    overflow: hidden;
    i {
      padding: 10px;
    }
    span {
      width: 90px;
      transition: width 0.3s ease;
      a {
        color: white;
      }
    }
  }
  /* .phone:hover span,
  .custom:hover span {
    width: 90px;
    padding-right: 10px;
  } */
  .phone:hover {
    width: 125px;
  }
  .custom:hover {
    width: 100px;
  }
}
/* 小于768 */
/* @media (max-width: 768px) {
  .formInfo {
    max-width: 90%;
    margin: auto;
  }
} */
</style>
