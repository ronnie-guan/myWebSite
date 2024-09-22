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
    <div class="productsAre">
      <h1>Projects</h1>
      <div class="loop">
        <carousel :margin="12" :loop="true" :items="2" :autoplay="true" :autoHeight="true" :nav="false" :dots="false" :center="true" :activeIndex="1">
          <img src="../../assets/Home/8.More/more.jpg" style="height: 634px;"/>
          <img src="../../assets/Home/8.More/more.jpg" style="height: 634px;"/>
          <img src="../../assets/Home/8.More/more.jpg" style="height: 634px;"/>
          <img src="../../assets/Home/8.More/more.jpg" style="height: 634px;"/>
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
    return {};
  }
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
</style>
