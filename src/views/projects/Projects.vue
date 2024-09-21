<template>
  <div class="content">
    <!-- Outdoor Lighting -->
    <div class="outdoor_lighting">
      <div class="text">
        <h1>Outdoor Lighting</h1>
        <h3>Building/Hotel/Park/Scenic Area/Garden/Bridge/Fence</h3>
      </div>
      <img
        src="../../assets/Projects/OutdoorLighting/outdoorLightingBkg.jpg"
        alt=""
        srcset=""
        style="height: 370px;"
      />
    </div>
    <div class="outdoor_lighting_loop">
      <div class="loop_certificate">
        <vue-seamless-scroll
          :data="outdoor_lighting_list"
          :class-option="classOption"
          class="warp"
        >
          <ul class="ul-item">
            <li
              class="li-item"
              v-for="(item, index) in outdoor_lighting_list"
              :key="index"
            >
              <img :src="item.url" :alt="`Image ${index}`" loading="lazy" />
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
    <!-- Commercial Lighting -->
    <div class="outdoor_lighting">
      <div class="text">
        <h1>Commercial Lighting</h1>
        <h3>Bar/KTV/Restaurant/Shopping Mall</h3>
      </div>
      <img
        src="../../assets/Projects/CommercialLighting/commercialLighting_bgk.jpg"
        alt=""
        srcset=""
      />
    </div>
    <div class="outdoor_lighting_loop">
      <div class="loop_certificate">
        <vue-seamless-scroll
          :data="commercial_lighting_list"
          :class-option="classOption"
          class="warp"
        >
          <ul class="ul-item">
            <li
              class="li-item"
              v-for="(item, index) in commercial_lighting_list"
              :key="index"
            >
              <img :src="item.url" :alt="`Image ${index}`" loading="lazy" />
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
    <!-- Lndoor Lighting -->
    <div class="outdoor_lighting">
      <div class="text">
        <h1>Lndoor Lighting</h1>
        <h3>Kitchen/Bedroom/Bathroom/Basement/Living Room/Garden</h3>
      </div>
      <img
        src="../../assets/Projects/IndoorLighting/IndoorLighting.jpg"
        alt=""
        srcset=""
      />
    </div>
    <div class="outdoor_lighting_loop">
      <div class="loop_certificate">
        <vue-seamless-scroll
          :data="indoor_lighting_list"
          :class-option="classOption"
          class="warp"
        >
          <ul class="ul-item">
            <li
              class="li-item"
              v-for="(item, index) in indoor_lighting_list"
              :key="index"
            >
              <img :src="item.url" :alt="`Image ${index}`" loading="lazy" />
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
    <globalComponents />
  </div>
</template>

<script>
import globalComponents from "@/components/globalComponents";
import scrollRevealMixin from "@/mixin/scrollRevealMixin.js";
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  components: { globalComponents, vueSeamlessScroll },
  data() {
    return {
      outdoor_lighting_list: [
        {
          url: require("../../assets/Projects/OutdoorLighting/滚动的图片/1.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/OutdoorLighting/滚动的图片/2.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/OutdoorLighting/滚动的图片/3.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/OutdoorLighting/滚动的图片/4.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/OutdoorLighting/滚动的图片/5.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/OutdoorLighting/滚动的图片/6.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/OutdoorLighting/滚动的图片/7.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/OutdoorLighting/滚动的图片/8.jpg"),
          alt: "Banner Image"
        }
      ],
      commercial_lighting_list: [
        {
          url: require("../../assets/Projects/CommercialLighting/滚动的图片/1.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/CommercialLighting/滚动的图片/2.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/CommercialLighting/滚动的图片/3.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/CommercialLighting/滚动的图片/4.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/CommercialLighting/滚动的图片/5.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/CommercialLighting/滚动的图片/6.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/CommercialLighting/滚动的图片/7.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/CommercialLighting/滚动的图片/8.jpg"),
          alt: "Banner Image"
        }
      ],
      indoor_lighting_list: [
        {
          url: require("../../assets/Projects/IndoorLighting/滚动的图片/1.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/IndoorLighting/滚动的图片/2.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/IndoorLighting/滚动的图片/3.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/IndoorLighting/滚动的图片/4.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/IndoorLighting/滚动的图片/5.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/IndoorLighting/滚动的图片/6.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/IndoorLighting/滚动的图片/7.jpg"),
          alt: "Banner Image"
        },
        {
          url: require("../../assets/Projects/IndoorLighting/滚动的图片/8.jpg"),
          alt: "Banner Image"
        }
      ],
      classOption: {
        limitMoveNum: 2,
        direction: 2,
        limitMoveNum: 6
      }
    };
  },
  methods: {},
  mixins: [scrollRevealMixin]
};
</script>

<style scoped>
.content {
  max-width: 1200px;
  margin: auto;
  margin-top: 80px;
  overflow: hidden;
  .outdoor_lighting {
    height: 160px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    border-radius: 40px;
    background-color: #0a0a0c;
    overflow: hidden;
    img {
      width: 420px;
      height: 235px;
      margin-top: -30px;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 30px;
      height: 100%;
      color: white;
      h1 {
        font-size: 24px;
      }
      h3 {
        font-size: 15px;
        font-weight: 500;
        margin-top: 20px;
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
            height: 300px;
            margin-right: 10px;
            line-height: 330px;
            background-color: #999;
            color: #fff;
            text-align: center;
            font-size: 30px;
            border-radius: 10px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              transition: transform 0.3s ease;
            }
            img:hover {
              transform: scale(1.3);
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
}
</style>
