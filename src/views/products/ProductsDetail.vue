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
                {{
                  item.Key.split(":")[0] +
                    " : " +
                    (item.Key.split(":")[1] || "")
                }}
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
import axios from "axios";
export default {
  components: { globalComponents },
  data() {
    return {
      product_formData: {},
      productsData: this.$store.state.productInfo,
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
    const id = data.id;
    this.product_formData.productName = name;
    this.product_formData.number = 1;
    const path = this.$route.path.split("/").filter(val => {
      if (val) {
        return val;
      }
    });
    this.breadCrumbs = [...this.breadCrumbs, ...path, name];
    axios
      .get(`http://43.131.6.9/api/ledstrip_product/${id}/details`)
      .then(response => {
        this.productsData = response.data;
        // 进一步处理响应数据
      })
      .catch(error => {
        console.error("Error fetching product details:", error);
        // 处理错误情况
      });
  },
  computed: {
    halfLength() {
      // 计算一半的长度
      if (this.productsData && this.productsData.Features) {
        return Math.ceil(Object.keys(this.productsData.Features).length / 2);
      }
    }
  },
  mixins: [scrollRevealMixin]
};
</script>

<style scoped>
.content {
  max-width: 1200px;
  min-height: 800px;
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
