<template>
  <div>
    <div class="banner">
      <div class="video_Btn" v-if="!dialogVisible">
        <h1>WINNING TOGETHER</h1>
        <h1>SHARING TOGETHER</h1>
        <el-Button @click="dialogVisible = true">Watch Video</el-Button>
      </div>
      <img
        src="../../assets/aboutus/forAboutUs_logo_bkg_white.jpg"
        alt=""
        srcset=""
      />
      <video
        autoplay
        loop
        muted
        style="width: 100%; height: 100%; object-fit: fill"
      >
        <source src="../../assets/aboutus/campanyVedio.mp4" type="video/mp4" />
      </video>
      <el-dialog
        :visible.sync="dialogVisible"
        width="80%"
        top="5vh"
        :destroy-on-close="true"
      >
        <video
          class="fullVideo"
          controls
          autoplay
          loop
          src="../../assets/aboutus/campanyVedio.mp4"
          v-if="dialogVisible"
        ></video>
      </el-dialog>
    </div>
    <div class="content">
      <div class="introduced">
        <div class="title">
          <div>Who is</div>
          <div><span>Arraystar</span> ?</div>
        </div>
        <div class="detail">
          ShenZhen Arraystarled Limited is an TUV ISO 9001:2015 certified
          company, established in year 2012,we specialized in LED strip light
          development and manufacture.Our main products are SMD LED strip light,
          COB LED strip light,LED neon light, Wall vasher Leb strip and Iroo Leb
          strip
        </div>
      </div>
      <div class="productIntroduction">
        <div class="left">
          <div class="title">
            <countTo
              class="countto"
              :startVal="1"
              :endVal="12"
              :duration="1000"
            />
            Years +
          </div>
          <div class="detail">
            Becomes a leading enterprise in the segmented domain with 12-year
            accumulation.
          </div>
        </div>
        <div class="center">
          <div class="title">
            <countTo
              class="countto"
              :startVal="1"
              :endVal="3000"
              :duration="1000"
            />
            &#x33A1;
          </div>
          <div class="detail">
            Our factory is located in Shenzhen,covering an area of
            3,000㎡.Featured in stable high-quality,strong production capacity
            and quick delivery
          </div>
        </div>
        <div class="right">
          <div class="title">
            <countTo
              class="countto"
              :startVal="1"
              :endVal="150000"
              :duration="1000"
            />
            m
          </div>
          <div class="detail">
            our production ability is 100,000 meters non-waterproof LED strip
            and 50,000 meters silicone extrysion waterproof LED.
          </div>
        </div>
      </div>
      <div class="arraystar">
        <div class="title">About Arraystar</div>
        <div class="honor_list">
          <div class="honor">
            <div class="icon">
              <i class="el-icon-share"></i>
            </div>
            <div class="honor_title">16 years</div>
            <div class="detail">
              ShenZhen Arraystarled Limited is an TUV lSO9001:2015 certified
              company, established inyear 2012, we specialized in LED strip
              lightand LED industrial lighting productsdevelopment and
              manufacture.
            </div>
          </div>
          <div class="honor">
            <div class="icon">
              <i class="el-icon-share"></i>
            </div>
            <div class="honor_title">Strong Production</div>
            <div class="detail">
              All of our products are CE, RoHS certified andsome are UL listed.
              Our R&D team offer high leveldevelopment and OEM service. The
              opticalengineer, structure engineer, electrical engineer.and
              lighting designer team ensure we can do OEMand ODM for all
              customers as well as Dialuxsimulation.
            </div>
          </div>
          <div class="honor">
            <div class="icon">
              <i class="el-icon-share"></i>
            </div>
            <div class="honor_title">Product System</div>
            <div class="detail">
              Our main products are SMD LED striplight,COB LED strip light,LED
              neon light,IP68LED strip,LED flood light,LED highbaylight,LED
              sport lights and LED street light.
            </div>
          </div>
          <div class="honor">
            <div class="icon">
              <i class="el-icon-share"></i>
            </div>
            <div class="honor_title">Excellent Team</div>
            <div class="detail">
              Arraystarled focus on providing LED lightingcomplete solution, we
              concentrate on our mainproducts innovation and production.
              Productsquality, reasonable price, customer service are thethree
              key points, we have won good reputationfrom customers all over the
              world.
            </div>
          </div>
        </div>
      </div>
      <div class="company_production_line">
        <div class="title">Company production line</div>
        <div class="carousel">
          <el-carousel
            trigger="click"
            height="100%"
            arrow="always"
            :autoplay="false"
          >
            <el-carousel-item>
              <div
                style="display: flex; justify-content: space-around;height: 100%;"
              >
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/machine_1.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/machine_2.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/machine_3.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div
                style="display: flex; justify-content: space-around;height: 100%;"
              >
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/machine_4.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/machine_5.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/machine_7.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div
                style="display: flex; justify-content: space-around;height: 100%;"
              >
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/machine_8.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/machine_9.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/machine_10.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div
                style="display: flex; justify-content: space-around;height: 100%;"
              >
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/machine_11.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/Office.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/work_1.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div
                style="display: flex; justify-content: space-around;height: 100%;"
              >
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/work_2.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="img_box">
                  <div class="mask">产品</div>
                  <img
                    src="../../assets/aboutus/生产线图片/work_3.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="img_box">
                  <div class="mask">产品</div>
                  <!-- <img src="../../assets/aboutus/生产线图片/work_3.jpg" alt="" srcset="" /> -->
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="certification_system">
        <div class="title">Certification System</div>
        <div class="introduction_box">
          <div class="introduced">
            Most of our products are CE,RoHS certified and Ullisted.Our R&D team
            offer high level developmentservice.The optical engineer,structure
            engineerelectrical engineer,and lighting designer team ensurewe can
            do OEM and ODM for all customers as well!as Dialux simulation.
          </div>
          <div class="certification_list">
            <img
              src="../../assets/aboutus/证书-whiteBkg.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="loop_certificate">
          <vue-seamless-scroll
            :data="listData"
            :class-option="classOption"
            class="warp"
          >
            <ul class="ul-item">
              <li
                class="li-item"
                v-for="(item, index) in listData"
                :key="index"
              >
                <img :src="item.url" :alt="`Image ${index}`" loading="lazy" />
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>
      </div>
    </div>
    <globalComponents />
  </div>
</template>

<script>
// import SubNavBanner from "@/components/banner/SubNavBanner";
import scrollRevealMixin from "@/mixin/scrollRevealMixin.js";
import countTo from "vue-count-to";
import vueSeamlessScroll from "vue-seamless-scroll";
import globalComponents from "@/components/globalComponents";
export default {
  components: { countTo, vueSeamlessScroll, globalComponents },
  mixins: [scrollRevealMixin],
  data() {
    return {
      about_cont:
        "为您不断创新并提供有关多个行业领域的高质量商业设计与营销培训课程，课程涉及服装如何搭配，服装陈列,陈列师培训、化妆、视觉营销培训,专为热爱界面设计的你而倾力打造。这里拥有无敌的创意、精美的视觉、国际化的意识和前瞻性思维！也许在不知不觉中，它将成为你设计路上的一位好伙伴，在你需要灵感的时候给予你帮助，鼓励你不断向前!",
      itemList: [
        //导航
        { id: "001", title: "穿衣", content: "穿衣品味是培养你时尚感的一步" },
        { id: "002", title: "化妆", content: "化妆让你拥有更完美的容颜更自信" },
        { id: "003", title: "塑性", content: "系统的塑性训练让你更有气质" },
        { id: "004", title: "穿衣", content: "穿衣品味是培养你时尚感的一步" }
      ],
      dialogVisible: false,
      listData: [
        {
          url: require("../../assets/aboutus/一直滚动的认证图/CE-EMC.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/aboutus/一直滚动的认证图/CE-LVD.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/aboutus/一直滚动的认证图/IP65.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/aboutus/一直滚动的认证图/ROHS.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/aboutus/一直滚动的认证图/UL753.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/aboutus/一直滚动的认证图/UL7532.jpg"),
          alt: "Banner Image"
        }
      ],
      classOption: {
        limitMoveNum: 2,
        direction: 2,
        limitMoveNum: 6
      }
    };
  }
};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 60vh;
  margin-top: 80px;
  position: relative;
  img {
    position: absolute;
    height: 60px;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .video_Btn {
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    text-align: center;
    h1:nth-child(1) {
      color: white;
    }
    h1:nth-child(2) {
      color: gray;
    }
    h1 {
      font-size: 48px;
    }
    .el-button {
      margin-top: 28px;
      background-color: transparent;
      span {
        color: white;
      }
    }
  }
  video {
    width: 100%;
    height: 100%;
    source {
      width: 100%;
      height: 100%;
    }
  }
  .el-dialog__headerbtn {
    top: 10px;
    right: 10px;
  }
  .fullVideo {
    /* height: 60vh; */
    width: 100%;
    margin-bottom: 20px;
  }

  .el-dialog__body {
    padding: 0;
  }
}
.content {
  max-width: 1200px;
  margin: auto;
  .introduced {
    display: flex;
    margin: 48px 0;
    .title {
      flex: 2;
    }
    .detail {
      flex: 1;
    }
    .title {
      div {
        font-size: 24px;
        span {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
  .productIntroduction {
    display: flex;
    margin-bottom: 48px;
    justify-content: space-between;
    padding: 28px;
    height: 280px;
    background-image: url("../../assets/aboutus/bkg.jpg");
    background-size: 100% 100%;
    .left,
    .center,
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      color: white;
    }
    .left,
    .center,
    .right {
      .title,
      .countto {
        font-size: 28px;
      }
    }
    .center {
      margin: 0 48px;
    }
  }
  .arraystar {
    margin-bottom: 48px;
    text-align: center;
    .title {
      font-size: 28px;
      margin: 28px;
      font-weight: bold;
    }
    .honor_list {
      display: flex;
      .honor {
        flex: 1;
        .honor_title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .detail {
          font-size: 14px;
        }
      }
    }
  }
  .company_production_line {
    text-align: center;
    .title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 48px;
    }
    .carousel {
      height: 280px;
      .el-carousel {
        width: 100%;
        height: 100%;
      }
      .img_box {
        width: 33%;
        position: relative;
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: white;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }
      .img_box:hover .mask {
        opacity: 0; /* 鼠标悬停时消失 */
      }
    }
  }
  .certification_system {
    
    .title {
      font-size: 28px;
      text-align: center;
      margin: 68px 0;
      font-weight: bold;
    }
    .introduction_box {
      display: flex;
      .introduced,
      .certification_list {
        flex: 1;
        img {
          width: 100%;
        }
      }
    }
    .loop_certificate {
      margin: 28px 0;
      .warp {
        width: 300px * 4;
        height: 330px;
        margin: 0 auto;
        overflow: hidden;
        ul {
          list-style: none;
          padding: 0;
          margin: 0 auto;
          &.ul-item {
            display: flex;
            .li-item {
              width: 300px;
              height: 330px;
              margin-right: 10px;
              line-height: 330px;
              background-color: #999;
              color: #fff;
              text-align: center;
              font-size: 30px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
/* .aboCon {
  padding: 100px 0;
}
.aboCon .aboImg {
  max-width: 820px;
  height: 500px;
  position: relative;
  margin: auto;
}
.aboCon .aboImg .boxLine {
  width: 100%;
  height: 100%;
  border: 1px solid #b09c70;
  position: absolute;
  top: 30px;
  left: 30px;
}
.aboCon .aboImg .tit {
  position: absolute;
  top: 70px;
  left: 50px;
}
.aboCon .aboImg .tit p:nth-child(1) {
  color: #f5f5f5;
  font-size: 30px;
  font-weight: bold;
}
.aboCon .aboImg .tit p:nth-child(2) {
  color: #f5f5f5;
  font-size: 18px;
  margin-top: 10px;
}
.aboCon .aboImg .topLine {
  width: 150px;
  height: 1px;
  background-color: #b09c70;
  position: absolute;
  top: 95px;
  left: -105px;
}
.aboCon .aboImg .bottmLine {
  width: 300px;
  height: 1px;
  background-color: #b09c70;
  position: absolute;
  bottom: 95px;
  right: -205px;
}
.aboCon img {
  width: 100%;
  height: 100%;
}
article {
  color: #aaaaaa;
  line-height: 30px;
  margin-top: 30px;
  max-width: 850px;
  margin: auto;
  margin-top: 60px;
}
.items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 80px;
}
.items .item {
  width: 25%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-align: center;
  padding: 20px 20px;
}
.items .item i {
  color: #b09c70;
}
.items .item span:nth-child(2) {
  color: #333333;
  font-weight: bold;
  line-height: 50px;
  display: inline-block;
}

.items .item span:nth-child(3) {
  color: #aaaaaa;
  line-height: 25px;
  display: inline-block;
} */

/* 小于768 */
@media (max-width: 870px) {
  /* .aboCon {
    padding: 30px 0;
  }
  .aboCon .aboImg {
    max-width: 90%;
  }
  .aboCon .aboImg .boxLine {
    width: 90%;
    top: 5%;
    left: 5%;
  }
  .aboCon .aboImg .tit {
    position: relative;
    top: 30px;
    left: 0px;
  }
  .aboCon .aboImg .tit p:nth-child(1) {
    color: #5a5a5a;
  }
  .aboCon .aboImg .tit p:nth-child(2) {
    color: #5a5a5a;
  }
  .aboCon .aboImg .topLine {
    display: none;
  }
  .aboCon .aboImg .bottmLine {
    display: none;
  }
  article {
    margin-top: 120px;
    width: 90%;
    text-align: justify;
  }
  .items {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 30px;
  }
  .items .item {
    width: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
  }
  .items .item i {
    color: #b09c70;
  }
  .items .item span:nth-child(2) {
    color: #333333;
    font-weight: bold;
    line-height: 50px;
  }

  .items .item span:nth-child(3) {
    color: #aaaaaa;
    line-height: 25px;
  } */
}
</style>
