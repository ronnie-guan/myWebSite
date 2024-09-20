<template>
  <div class="globalBox" v-if="isShow">
    <div>1</div>
    <div>2</div>
    <div class="backTop" @click="backTop">3</div>
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
  div {
    width: 62px;
    height: 62px;
    background-color: blue;
    color: white;
    font-size: 18px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    cursor: pointer;
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
