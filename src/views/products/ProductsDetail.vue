<template>
  <div class="content">
    <div class="products">
      <div class="left_box">
        <div class="title">{{ product_formData.productName }}</div>
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
              <el-carousel-item
                v-for="(item, index) in productsData.mainImagesUrl"
                :key="index"
              >
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
                    v-for="(item, index) in productsData.mainImagesUrl"
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
                  v-model="product_formData[item.Key.split(':')[0]]"
                  size="mini"
                  @click.native="onRadioChange(item.Key.split(':')[0], $event)"
                >
                  <el-radio
                    border
                    class="option_item"
                    v-for="(subItem, subIndex) in item.Value"
                    v-if="subItem.indexOf('INPUT') === -1"
                    :label="subItem"
                    :key="subIndex"
                    >{{ subItem }}</el-radio
                  >
                </el-radio-group>
                <!-- <el-input
                  v-if="
                    productsData.optionalField[index].Value[0].indexOf('INPUT') >
                      -1
                  "
                  v-model="product_formData[item.Key.split(':')[0]]"
                ></el-input> -->
                <el-input
                  style="width: 240px;"
                  :placeholder="
                    productsData.optionalField[index].Value[0].split(':')[1]
                  "
                  v-if="
                    productsData.optionalField[index].Value[0].indexOf(
                      'INPUT'
                    ) > -1
                  "
                  v-model="product_formData[item.Key.split(':')[0]]"
                >
                  <el-button
                    slot="append"
                    icon="el-icon-check"
                    v-if="parameters !== productsData.optionalFieldNum - 1"
                    @click="
                      () => {
                        parameters++;
                        $refs.optional_carouse.setActiveItem(parameters);
                      }
                    "
                  ></el-button>
                </el-input>
                <div
                  class="select_btn"
                  v-if="index === productsData.optionalFieldNum - 1"
                >
                  <el-button type="primary" @click="handleAdd"
                    >add To Cart</el-button
                  >
                </div>
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
          <el-button @click="handleDown"
            >Specification sheet <i class="el-icon-download"></i
          ></el-button>
          <el-divider></el-divider>
          <h1>Authentication</h1>
          <div class="mini_icon">
            <img
              v-for="(item, index) in productsData.Authentication"
              :src="item"
              alt=""
              srcset=""
              :key="index"
            />
          </div>
        </div>
      </div>
      <div class="optional_accessories">
        <h1>Optional Accessories</h1>
        <div class="optional_accessories_loop">
          <el-carousel style="height: 100%;" arrow="always">
            <el-carousel-item
              v-for="(item, index) in productsData.OptionalAccessoriesImageUrl"
              :key="index"
            >
              <img :src="item" alt="" srcset="" />
            </el-carousel-item>
          </el-carousel>
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
            <img :src="item.productImageUrl" alt="" srcset="" />
            <div class="name">{{ item.productName }}</div>
            <div class="parameters1" v-if="item.size">
              size: {{ item.size }}
            </div>
            <div class="parameters2" v-if="item.ledQty">
              ledQty: {{ item.ledQty }}
            </div>
            <div class="parameters3" v-if="item.power">
              power: {{ item.power }}
            </div>
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
      product_formData: {},
      productsData: {
        Authentication: [
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/Ctf_logo_24V.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/Ctf_logo_360du.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/Ctf_logo_3YearsWarranty.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/Ctf_logo_CE.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/Ctf_logo_ERP.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/Ctf_logo_IP67.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/Ctf_logo_ISO.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/Ctf_logo_LM-80.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/Ctf_logo_ROHS.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/Ctf_logo_UKCA.webp"
        ],
        EnclosureUrl: [
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/ART-NSD10 Neon Strip.pdf"
        ],
        Features: {
          Model: "ART-NSD10 Neon Strip",
          LedType: "2022",
          LedQty: "480 LEDs/m",
          Lumen: "",
          CRI: ">90",
          BeamAngle: "360°",
          Voltage: "24V DC",
          Power: "12 W/m",
          IPRating: "IP67",
          Warranty: "3 years",
          CuttingLength: "25 mm",
          OperatingTemp: "-20°C~50°C"
        },
        OptionalAccessoriesImageUrl: [
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/3D_Bend_Neon_Series/Cable_Outlet.webp",
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/3D_Bend_Neon_Series/common_NSON.webp",
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/3D_Bend_Neon_Series/Installation_Accessories.webp",
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/3D_Bend_Neon_Series/power_line.webp"
        ],
        RelatedProducts: [
          {
            productImageUrl:
              "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0511/ART-NS0511_1.webp",
            productName: "ART-NS0511",
            productId: "1204000006",
            size: "5*11 mm",
            ledQty: "126;300 LEDs/m",
            power: "11 W/m"
          },
          {
            productImageUrl:
              "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Tunable_COB_LED_Strip/ART-COB08-608-W+WW-1224/ART-COB08-608-W+WW-1224_1.webp",
            productName: "ART-COB08-608-W+WW-1224",
            productId: "1109000004",
            size: "",
            ledQty: "608 LEDs/m",
            power: "7W+7W;10W+10W"
          },
          {
            productImageUrl:
              "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Efficiency_FCOB_LED_Strip/ART-FCOB10-320-X-24/ART-FCOB10-320-X-24_1.webp",
            productName: "ART-FCOB10-320-X-24",
            productId: "1104000002",
            size: "",
            ledQty: "320 LEDs/m",
            power: "15 W/m"
          },
          {
            productImageUrl:
              "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Voltage_SMD_2835_LED_Strip/ART-HS2835-120-X-02/ART-HS2835-120-X-02_1.webp",
            productName: "ART-HS2835-120-X-02",
            productId: "1303040002",
            size: "",
            ledQty: "120 LEDs/m",
            power: "11 W/m"
          }
        ],
        mainImagesUrl: [
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/ART-NSD10_Neon_Strip_1.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/ART-NSD10_Neon_Strip_2.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/ART-NSD10_Neon_Strip_3.webp",
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/ART-NSD10_Neon_Strip_4.webp"
        ],
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
            Value: ["INPUT:???W/m"]
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
        optionalFieldNum: 6,
        productID: "1001000001"
      },
      breadCrumbs: ["Home"],
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
        this.select_index = this.productsData.mainImagesUrl.length - 1;
      }
      this.$refs.carouse.setActiveItem(this.select_index);
    },
    handleNext() {
      this.select_index++;
      if (this.select_index > this.productsData.mainImagesUrl.length - 1) {
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
        if (this.product_formData[type] === e.target._value) {
          this.product_formData[type] = "";
        }
        if (e.target._value) {
          this.parameters++;
          if (this.parameters >= this.productsData.optionalFieldNum) {
            this.parameters = productsData.optionalFieldNum;
          }
          this.$refs.optional_carouse.setActiveItem(this.parameters);
        }
      }
    },
    async handleDown() {
      try {
        // 检查 URL 是否有效
        const response = await fetch(this.productsData.EnclosureUrl, {
          method: "HEAD"
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // 创建 Blob URL 并下载
        const blob = await fetch(this.productsData.EnclosureUrl).then(res =>
          res.blob()
        );
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "specification-sheet.pdf"; // 设置下载文件名
        link.style.display = "none"; // 隐藏链接
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // 清理 Blob URL
      } catch (error) {
        console.log(error);
      }
    },
    handleAdd() {
      const storedValue = JSON.parse(localStorage.getItem("buyProduct")) || [];
      const { number, ...formData } = this.product_formData;

      const list = storedValue.map(element => {
        const { number: elementNumber, ...data } = element;

        if (JSON.stringify(data) === JSON.stringify(formData)) {
          // 找到匹配的元素并递增数量
          return {
            ...element,
            number: elementNumber + 1
          };
        } else {
          return element;
        }
      });

      // 如果没有找到匹配的元素，则添加新的元素
      if (
        !list.some(
          item =>
            JSON.stringify(item) === JSON.stringify({ ...formData, number: 1 })
        )
      ) {
        list.push({ ...this.product_formData, number: 1 });
      }

      localStorage.setItem("buyProduct", JSON.stringify(list));
      this.$router.push({
        path: "/products/productsCart"
      });
    }
  },
  mounted() {
    const data = this.$route.query;
    const name = data.name;
    this.product_formData.productName = name;
    this.product_formData.number = 1;
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
        margin-top: 24px;
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
          height: 100%;
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
          background: blue;
        }
      }
      .optional {
        height: 100%;
        .title {
        }
        .option {
          height: 95%;
          .select_btn {
            text-align: center;
            margin-top: 24px;
          }
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
  .optional_accessories {
    max-width: 1200px;
    margin: auto;
    margin-top: 48px;
    h1 {
      font-size: 28px;
      font-weight: bold;
      text-align: center;
    }
    .optional_accessories_loop {
      height: 300px;
      width: 800px;
      margin: auto;
      text-align: center;
      img {
        height: 100%;
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
        width: 25%;
        text-align: center;
        img {
          width: 240px;
          height: 240px;
          margin: 0 12px;
          border-radius: 12px;
        }
        .name {
          text-align: center;
          font-weight: bold;
          margin: 8px 0;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
}
</style>
