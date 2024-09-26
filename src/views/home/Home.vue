<template>
  <div>
    <!-- 头部banner -->
    <banner />
    <div class="project">
      <h1>Discover Products</h1>
      <div class="project_content">
        <div class="item">
          <img
            src="../../assets/Home/1.360 Emitting LED Neon Strip Light/ART-NSD22_Neon_Strip_3.jpg"
            alt=""
            srcset=""
          />
          <div class="title"></div>
        </div>
        <div class="item">
          <img
            src="../../assets/Home/2.COB Series LED Strip/ART-COB05-480-X-1224_3.jpg"
            alt=""
            srcset=""
          />
          <div class="title"></div>
        </div>
        <div class="item">
          <img
            src="../../assets/Home/3.LED Neon Strip Light/ART-NS1616_2.jpg"
            alt=""
            srcset=""
          />
          <div class="title"></div>
        </div>
        <div class="item">
          <img
            src="../../assets/Home/4.SMD Series LED Strip/ART-2835-160-X-1224_3.jpg"
            alt=""
            srcset=""
          />
          <div class="title"></div>
        </div>
        <div class="item">
          <img
            src="../../assets/Home/5.Wall Washer Series LED Strip/ART-WL2010-112-X-24_3.jpg"
            alt=""
            srcset=""
          />
          <div class="title"></div>
        </div>
        <div class="item">
          <img
            src="../../assets/Home/6.Power Supply/powerSupply.jpg"
            alt=""
            srcset=""
          />
          <div class="title"></div>
        </div>
        <div class="item">
          <img
            src="../../assets/Home/7.Controller/1500-1500主图.jpg"
            alt=""
            srcset=""
          />
          <div class="title"></div>
        </div>
        <div class="item">
          <img src="../../assets/Home/8.More/more.jpg" alt="" srcset="" />
          <div class="title"></div>
        </div>
      </div>
    </div>
    <div class="colorTemperatureConversion">
      <transition name="fade">
        <img :src="changeImg" alt="Image" />
      </transition>
      <div class="btn_list">
        <img
          v-for="item in change_btn_list"
          :key="item.type"
          :src="item.url"
          alt=""
          srcset=""
          @mouseover="handleChange(item.type)"
        />
      </div>
    </div>
    <div class="productsAre">
      <h1>Projects</h1>
      <div class="loop">
        <carousel
          :margin="12"
          :stopOnHover="true"
          :loop="true"
          :items="2"
          :autoplay="true"
          :autoHeight="true"
          :nav="false"
          :dots="false"
          :center="true"
          :activeIndex="1"
        >
          <img src="../../assets/Home/8.More/more.jpg" style="height: 634px;" />
          <img src="../../assets/Home/8.More/more.jpg" style="height: 634px;" />
          <img src="../../assets/Home/8.More/more.jpg" style="height: 634px;" />
          <img src="../../assets/Home/8.More/more.jpg" style="height: 634px;" />
        </carousel>
      </div>
    </div>
    <!-- 关于我们 -->
    <!-- <about-us /> -->
    <!-- 课程分类 -->
    <!-- <course-class /> -->
    <!-- 服务 -->
    <!-- <service /> -->
    <!-- 学员感言 -->
    <!-- <student-speak /> -->
    <!-- 导师团队 -->
    <!-- <teacher-team /> -->
    <!-- 新闻动态 -->
    <!-- <news /> -->
    <!-- 简介 -->
    <!-- <intro /> -->
    <!-- 给我们留言 -->
    <!-- <message /> -->
    <globalComponents />
  </div>
</template>

<script>
import banner from "@/views/home/components/Carousel";
import globalComponents from "@/components/globalComponents";
import AboutUs from "@/views/home/components/AboutUs";
import CourseClass from "@/views/home/components/CourseClass";
import Service from "@/views/home/components/Service";
import StudentSpeak from "@/views/home/components/StudentSpeak";
import TeacherTeam from "@/views/home/components/TeacherTeam";
import News from "@/views/home/components/News";
import Intro from "@/views/home/components/Intro";
import Message from "@/views/home/components/Message";
import scrollRevealMixin from "@/mixin/scrollRevealMixin.js";
import carousel from "vue-owl-carousel";
export default {
  name: "Home",
  components: {
    banner,
    AboutUs,
    CourseClass,
    Service,
    StudentSpeak,
    TeacherTeam,
    News,
    Intro,
    Message,
    carousel,
    globalComponents
  },
  mixins: [scrollRevealMixin],
  data() {
    return {
      changeImg: require("../../assets/HomeChange/不同色温产品图/2700K.webp"),
      img_list: [
        {
          url: require("../../assets/HomeChange/不同色温产品图/2700K.webp"),
          type: "2700K"
        },
        {
          url: require("../../assets/HomeChange/不同色温产品图/3000K.webp"),
          type: "3000K"
        },
        {
          url: require("../../assets/HomeChange/不同色温产品图/4000K.webp"),
          type: "4000K"
        },
        {
          url: require("../../assets/HomeChange/不同色温产品图/6500K.webp"),
          type: "6500K"
        },
        {
          url: require("../../assets/HomeChange/不同色温产品图/r.webp"),
          type: "r"
        },
        {
          url: require("../../assets/HomeChange/不同色温产品图/g.webp"),
          type: "g"
        },
        {
          url: require("../../assets/HomeChange/不同色温产品图/b.webp"),
          type: "b"
        },
        {
          url: require("../../assets/HomeChange/不同色温产品图/rgb.webp"),
          type: "rgb"
        }
      ],
      change_btn_list: [
        {
          url: require("../../assets/HomeChange/不同色温按钮图/2700K_btn.webp"),
          type: "2700K"
        },
        {
          url: require("../../assets/HomeChange/不同色温按钮图/3000K_btn.webp"),
          type: "3000K"
        },
        {
          url: require("../../assets/HomeChange/不同色温按钮图/4000K_btn.webp"),
          type: "4000K"
        },
        {
          url: require("../../assets/HomeChange/不同色温按钮图/6500K_btn.webp"),
          type: "6500K"
        },
        {
          url: require("../../assets/HomeChange/不同色温按钮图/r.webp"),
          type: "r"
        },
        {
          url: require("../../assets/HomeChange/不同色温按钮图/g.webp"),
          type: "g"
        },
        {
          url: require("../../assets/HomeChange/不同色温按钮图/b.webp"),
          type: "b"
        },
        {
          url: require("../../assets/HomeChange/不同色温按钮图/RGB_btn.webp"),
          type: "rgb"
        }
      ]
    };
  },
  methods: {
    handleChange(val) {
      this.changeImg = this.img_list.find(item => item.type === val).url;
    }
  },
};
</script>

<style scoped>
.project {
  max-width: 1200px;
  margin: auto;
  h1 {
    text-align: center;
    margin: 48px 0;
    font-size: 28px;
    font-weight: bold;
  }
  .project_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      width: 24%;
      img {
        width: 100%;
        transition: transform 0.3s ease;
      }
      img:hover {
        transform: scale(1.1);
      }
    }
  }
}
.productsAre {
  margin: auto;
  h1 {
    text-align: center;
    margin: 48px 0;
    font-size: 28px;
    font-weight: bold;
  }
  .loop {
    height: 634px;
  }
}
.colorTemperatureConversion {
  height: 100vh;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  padding-left: 20px;
  img {
    width: 760px;
  }
  .btn_list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 120px;
    height: 85vh;
    img {
      width: 80px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
