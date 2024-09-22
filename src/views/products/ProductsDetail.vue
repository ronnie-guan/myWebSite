<template>
  <div class="content">
    <div class="products">
      <div class="left_box">
        <div class="title">ART-NS0404</div>
        <div class="bread_crumbs">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="(item, index) in breadCrumbs"
              :key="index"
              :class="index === breadCrumbs.length - 1 ? 'fontBold' : ''"
              >{{ item }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
        <div class="products_img">
          <div class="loop">
            <el-carousel
              height="100%"
              arrow="never"
              indicator-position="none"
              @change="carouseChage"
              ref="carouse"
            >
              <el-carousel-item v-for="(item, index) in imgs" :key="index">
                <img :src="item" alt="" srcset="" />
              </el-carousel-item>
            </el-carousel>
            <div class="mini_img">
              <div class="pre" @click="handlePre">
                <i class="el-icon-arrow-left"></i>
              </div>
              <div class="img_content">
                <div class="select_img">
                  <img
                    v-for="(item, index) in imgs"
                    :key="index"
                    :src="item"
                    alt=""
                    srcset=""
                    :class="index === select_index ? 'active_img' : ''"
                    @click="handleClick(index)"
                  />
                </div>
              </div>
              <div class="next" @click="handleNext">
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right_box">
        <el-carousel
          height="400px"
          direction="vertical"
          :autoplay="false"
          arrow="never"
          indicator-position="none"
          ref="optional_carouse"
        >
          <div class="indicator">
            <div
              v-for="(item, index) in productsData.optionalFieldNum"
              :class="[
                'indicator_item',
                { indicator_active: index <= parameters - 1 }
              ]"
              :key="index"
              @click="
                () => {
                  parameters = index;
                  $refs.optional_carouse.setActiveItem(index);
                }
              "
            ></div>
          </div>
          <el-carousel-item
            v-for="(item, index) in productsData.optionalField"
            :key="index"
          >
            <div class="optional">
              <div class="title">
                {{ item.Key.split(":")[0] + " : " + item.Key.split(":")[1] }}
              </div>
              <div class="option">
                <el-radio-group
                  v-model="porduct_formData[item.Key.split(':')[0]]"
                  size="mini"
                  @click.native="onRadioChange(item.Key.split(':')[0], $event)"
                >
                  <el-radio
                    border
                    class="option_item"
                    v-for="(subItem, subIndex) in item.Value"
                    :label="subItem"
                    :key="subIndex"
                    >{{ subItem }}</el-radio
                  >
                </el-radio-group>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="features">
      <h1>Features</h1>
      <div class="features_content">
        <div class="features_content_detail_left">
          <div
            class="item"
            v-for="(item, index) in Object.keys(productsData.Features).slice(
              0,
              halfLength
            )"
          >
            <div class="name">{{ item }}</div>
            <div class="value">{{ productsData.Features[item] }}</div>
          </div>
        </div>
        <div class="features_content_detail_right">
          <div
            class="item"
            v-for="(item, index) in Object.keys(productsData.Features).slice(
              halfLength
            )"
          >
            <div class="name">{{ item }}</div>
            <div class="value">{{ productsData.Features[item] }}</div>
          </div>
        </div>
        <div class="enclosure">
          <h1>Enclosure:</h1>
          <el-button
            >Specification sheet <i class="el-icon-download"></i
          ></el-button>
          <el-divider></el-divider>
          <h1>Authentication</h1>
          <div class="mini_icon">
            <img
              src="http://t13.baidu.com/it/u=2427297025,2025803767&fm=224&app=112&f=JPEG?w=500&h=500"
              alt=""
              srcset=""
              v-for="(item, index) in productsData.Authentication"
              :key="index"
            />
          </div>
        </div>
      </div>

      <div class="other_box">
        <h1>Other Recommendations For Your Business</h1>
        <div class="other_product">
          <div
            class="item"
            v-for="(item, index) in productsData.RelatedProducts"
            :key="index"
          >
            <img
              src="http://t13.baidu.com/it/u=2427297025,2025803767&fm=224&app=112&f=JPEG?w=500&h=500"
              alt=""
              srcset=""
            />
            <div class="name">{{ item.productName }}</div>
            <div class="parameters1"></div>
            <div class="parameters2"></div>
            <div class="parameters3"></div>
          </div>
        </div>
      </div>
    </div>
    <globalComponents />
  </div>
</template>

<script>
import globalComponents from "@/components/globalComponents";
import scrollRevealMixin from "@/mixin/scrollRevealMixin.js";
export default {
  components: { globalComponents },
  data() {
    return {
      porduct_formData: {},
      productsData: {
        productID: 1001000001,
        mainImagesUrl: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg" //这里的主图个数是不固定的，在1~8张，大部分4张
        ],
        optionalFieldNum: 6, //可选字段个数
        optionalField: [
          {
            Key: "CCT(K):Choose the lighting color you want.",
            ValueNum: 9,
            Value: [
              "2700K",
              "3000K",
              "4000K",
              "5000K",
              "6500K",
              "CCT Tunable",
              "RGB",
              "RGBW",
              "SPI RGB"
            ]
          },
          {
            Key: "Voltage:",
            ValueNum: 6,
            Value: [
              "DC 5V",
              "DC 12V",
              "DC 24V",
              "DC 48V",
              "DC 90~130V",
              "DC 200~240V"
            ]
          },
          {
            Key: "Power:",
            ValueNum: 1,
            Value: ["INPUT:???W/m"] //INPUT:   这种格式说明这个是用户输入值的，冒号后面的文字内容是输入框中的提示文字
          },
          {
            Key: "CRI:",
            ValueNum: 1,
            Value: [">90"]
          },
          {
            Key: "Strip Length:",
            ValueNum: 2,
            Value: ["5M", "INPUT:Length customization"]
          },
          {
            Key: "Purchase Quantity:",
            ValueNum: 1,
            Value: ["INPUT:PCS"]
          }
        ],
        EnclosureUrl: ["Url_1", "Url_2", "Url_3", "Url_4"], //点击下载附加的按钮下载的附件个数不一定是一个附件，有个别产品有4个左右的附件，大部分是一个附件
        Features: {
          Model: "ART-NS0606",
          LedType: "SMD 2836",
          LedQty: "280 LEDs/m",
          Lumen: "60~65 LM/W",
          CRI: ">90",
          BeamAngle: "120°",
          Voltage: "DC 24V; DC12V",
          Power: "6W/m",
          IPRating: "IP67",
          Warranty: "3 Years",
          CuttingLength: "25 mm;50 mm",
          OperatingTemp: "-20°C~60°C"
        },
        Authentication: [
          "Url_1",
          "Url_2",
          "Url_3",
          "Url_4",
          "Url_5",
          "Url_6",
          "Url_7",
          "Url_8",
          "Url_9" //这里认证logo图片的个数不是固定的，每款产品有的认证个数不一样
        ],
        OptionalAccessoriesImageUrl: ["Url_1", "Url_2", "Url_3", "Url_4"], //和这个灯带相关的配件图，个数不是固定的，一般在3到4张
        RelatedProducts: [
          //4个产品展示位，服务器随机返回的4款推荐产品
          {
            productImageUrl: "Url_1",
            productName: "ART-NS0516",
            productId: 10010002
          },
          {
            productImageUrl: "Url_2",
            productName: "ART-NS0517",
            productId: 10010003
          },
          {
            productImageUrl: "Url_3",
            productName: "ART-NS0518",
            productId: 10010004
          },
          {
            productImageUrl: "Url_4",
            productName: "ART-NS0519",
            productId: 10010005
          }
        ]
      },
      breadCrumbs: ["Home"],
      imgs: [
        "http://t13.baidu.com/it/u=2427297025,2025803767&fm=224&app=112&f=JPEG?w=500&h=500",
        "http://t13.baidu.com/it/u=2427297025,2025803767&fm=224&app=112&f=JPEG?w=500&h=500",
        "http://t13.baidu.com/it/u=2427297025,2025803767&fm=224&app=112&f=JPEG?w=500&h=500"
      ],
      select_index: 0,
      parameters: 0
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handlePre() {
      this.select_index--;
      if (this.select_index < 0) {
        this.select_index = this.imgs.length - 1;
      }
      this.$refs.carouse.setActiveItem(this.select_index);
    },
    handleNext() {
      this.select_index++;
      if (this.select_index > this.imgs.length - 1) {
        this.select_index = 0;
      }
      this.$refs.carouse.setActiveItem(this.select_index);
    },
    handleClick(val) {
      this.select_index = val;
      this.$refs.carouse.setActiveItem(this.select_index);
    },
    carouseChage(val) {
      this.select_index = val;
    },
    onRadioChange(type, e) {
      if (e.target.tagName === "INPUT") {
        if (this.porduct_formData[type] === e.target._value) {
          this.porduct_formData[type] = "";
        }
        if (e.target._value) {
          this.parameters++;
          if (this.parameters >= this.productsData.optionalFieldNum) {
            this.parameters = productsData.optionalFieldNum;
          }
          this.$refs.optional_carouse.setActiveItem(this.parameters);
        }
      }
    }
  },
  mounted() {
    const name = "ART-NS0404";
    const path = this.$route.path.split("/").filter(val => {
      if (val) {
        return val;
      }
    });
    this.breadCrumbs = [...this.breadCrumbs, ...path, name];
  },
  computed: {
    halfLength() {
      // 计算一半的长度
      return Math.ceil(Object.keys(this.productsData.Features).length / 2);
    }
  },
  mixins: [scrollRevealMixin]
};
</script>

<style scoped>
.content {
  max-width: 1200px;
  margin: auto;
  margin-top: 80px;
  .fontBold {
    span {
      font-weight: bold !important;
    }
  }
  .products {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left_box {
      width: 49%;
      .title {
        font-size: 28px;
        font-weight: bold;
      }
      .bread_crumbs {
        margin: 12px 0;
        div {
          span {
            font-size: 16px;
          }
        }
      }
      .products_img {
        img {
          width: 100%;
        }
      }
      .loop {
        height: 600px;
        .el-carousel {
          height: 85%;
        }
        .mini_img {
          width: 100%;
          height: 34px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 24px 0;
          .select_img {
            display: flex;
            img {
              height: 34px;
              width: 34px;
              margin: 0 6px;
            }
            .active_img {
              border: 1px solid #2789ff;
            }
          }
          i {
            cursor: pointer;
          }
        }
      }
    }
    .right_box {
      width: 49%;
      .indicator {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: end;
        .indicator_item {
          width: 8px;
          height: 8px;
          border-radius: 8px;
          background: white;
          margin: 6px 0;
          cursor: pointer;
          z-index: 10;
          background: gray;
        }
        .indicator_active {
          background: red;
        }
      }
      .optional {
        height: 100%;
        .title {
        }
        .option {
          height: 95%;
          .el-radio-group {
            display: flex;
            /* justify-content: space-between; */
            flex-wrap: wrap;
          }
          .option_item {
            width: 20%;
            text-align: center;
            margin: 13px 30px;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .el-radio__input {
          display: none;
        }
      }
      .el-carousel__button {
        width: 8px;
        height: 8px;
        border-radius: 8px;
      }
    }
  }
  .features {
    margin-bottom: 24px;
    h1 {
      margin: 12px 0;
    }
    .features_content {
      display: flex;
      .features_content_detail_left,
      .features_content_detail_right {
        width: 24%;
        border-right: 2px solid gray;
        padding-right: 12px;
        margin-right: 12px;
        .item {
          display: flex;
          justify-content: space-between;
          margin-top: 18px;
          .name {
            font-size: 12px;
            font-weight: bold;
          }
          .value {
            font-size: 12px;
          }
        }
      }
      .enclosure {
        flex: 1;
        .mini_icon {
          display: flex;
          img {
            width: 38px;
            height: 38px;
            margin: 0 4px;
          }
        }
      }
    }
  }
  .other_box {
    max-width: 1200px;
    margin: auto;
    margin-top: 48px;
    h1 {
      font-size: 28px;
      font-weight: bold;
      text-align: center;
    }
    .other_product {
      display: flex;
      justify-content: center;
      .item {
        img {
          width: 120px;
          height: 120px;
          margin: 0 12px;
          border-radius: 12px;
        }
        .name {
          text-align: center;
          font-weight: bold;
          margin: 8px 0
        }
      }
    }
  }
}
@media (max-width: 1200px) {
}
</style>
