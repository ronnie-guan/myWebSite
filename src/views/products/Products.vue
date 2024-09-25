<template>
  <div>
    <div class="content">
      <div class="product_select">
        <el-card
          class="box-card"
          :body-style="{ padding: 0, height: '280px', overflow: 'auto' }"
        >
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                router
                :default-active="activeIndex"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <span>导航一</span>
                  </template>
                  <!-- <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group> -->
                  <!-- <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group> -->
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <span slot="title">导航二</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <div class="product_list">
        <div class="screening_box">
          <div class="screening_item">
            <div class="screening_item">
              <span class="group_type">Input voltage</span>
            </div>
            <div class="select_group">
              <el-radio-group
                v-model="filters.group1"
                size="mini"
                @click.native="onRadioChange('group1', $event)"
              >
                <el-radio label="1" border>option1</el-radio>
                <el-radio label="2" border>option2</el-radio>
                <el-radio label="3" border>option3</el-radio>
                <el-radio label="4" border>option4</el-radio>
                <el-radio label="5" border>option5</el-radio>
              </el-radio-group>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="screening_item">
            <span class="group_type">Light Source Type</span>
            <div class="select_group">
              <el-radio-group
                v-model="filters.group2"
                size="mini"
                @click.native="onRadioChange('group2', $event)"
              >
                <el-radio label="1" border>option1</el-radio>
                <el-radio label="2" border>option2</el-radio>
                <el-radio label="3" border>option3</el-radio>
                <el-radio label="4" border>option4</el-radio>
                <el-radio label="5" border>option5</el-radio>
              </el-radio-group>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="screening_item">
            <span class="group_type">Installation</span>
            <div class="select_group">
              <el-radio-group
                v-model="filters.group3"
                size="mini"
                @click.native="onRadioChange('group3', $event)"
              >
                <el-radio label="1" border>option1</el-radio>
                <el-radio label="2" border>option2</el-radio>
                <el-radio label="3" border>option3</el-radio>
                <el-radio label="4" border>option4</el-radio>
                <el-radio label="5" border>option5</el-radio>
              </el-radio-group>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="screening_item">
            <span class="group_type">Lighting types</span>
            <div class="select_group">
              <el-radio-group
                v-model="filters.group4"
                size="mini"
                @click.native="onRadioChange('group4', $event)"
              >
                <el-radio label="1" border>option1</el-radio>
                <el-radio label="2" border>option2</el-radio>
                <el-radio label="3" border>option3</el-radio>
                <el-radio label="4" border>option4</el-radio>
                <el-radio label="5" border>option5</el-radio>
              </el-radio-group>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="screening_item">
            <span class="group_type">Surface width dimension</span>
            <div class="select_group">
              <el-radio-group
                v-model="filters.group5"
                size="mini"
                @click.native="onRadioChange('group5', $event)"
              >
                <el-radio label="1" border>option1</el-radio>
                <el-radio label="2" border>option2</el-radio>
                <el-radio label="3" border>option3</el-radio>
                <el-radio label="4" border>option4</el-radio>
                <el-radio label="5" border>option5</el-radio>
              </el-radio-group>
            </div>
          </div>
          <el-divider></el-divider>
        </div>
        <div class="detail_list">
          <div class="product_detail" v-for="item in products" :key="item.id">
            <div class="img">
              <img :src="item.imageUrl" alt="" srcset="" />
            </div>
            <div class="title_card">
              <h1>{{ item.name }}</h1>
              <div v-for="item in item.colourTemp.split(';')" :key="item">
                <h2>{{ item }}</h2>
              </div>
              <div class="more_btn">
                <el-button
                  @click="
                    () => {
                      $router.push({
                        path: '/products/productsDetail',
                        query: {
                          id: item.id,
                          name: item.name
                        }
                      });
                    }
                  "
                  >Learn more</el-button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <globalComponents />
  </div>
</template>

<script>
// import feedback from "@/components/feedback/Feedback";
import globalComponents from "@/components/globalComponents";
import scrollRevealMixin from "@/mixin/scrollRevealMixin.js";
export default {
  components: { globalComponents },
  data() {
    return {
      activeIndex: "1",
      products: this.$store.state.productList,
      filters: {}
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, "---", keyPath);
      // this.$router.push(`./${key}`);
      this.activeIndex = key;
    },
    handleClose(key, keyPath) {
      console.log(key, "---", keyPath);
      this.activeIndex = key;
      // this.$router.push(`./${key}`);
    },
    handleSelect(key, keyPath) {
      console.log(key, "---", keyPath);
      this.activeIndex = key;
    },
    onRadioChange(type, e) {
      if (e.target.tagName === "INPUT") {
        if (this.filters[type] === e.target._value) {
          this.filters[type] = "";
        }
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  mixins: [scrollRevealMixin]
};
</script>

<style scoped>
.content {
  max-width: 1200px;
  margin: auto;
  margin-top: 120px;
  display: flex;
  .product_select {
    width: 200px;
    height: 280px;
  }
  .product_list {
    flex: 1;
    padding-left: 18px;
    .screening_box {
      .screening_item {
        height: 40px;
        display: flex;
        align-items: center;
        .group_type {
          color: black;
          width: 155px;
          margin-right: 5px;
        }
      }
    }
    .detail_list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .product_detail {
        width: 32%;
        overflow: hidden;
        height: 330px;
        background: white;
        position: relative;
        margin-bottom: 12px;
        .img {
          height: 280px;
          border-radius: 10px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .title_card {
          transition: margin-top 0.3s ease;
          border-radius: 10px 10px 0 0;
          background: white;
          position: absolute;
          left: 0;
          right: 0;
          h1 {
            font-size: 18px;
            margin: 6px 0;
          }
          h2 {
            font-size: 14px;
          }
          h1,
          h2 {
            padding-left: 10px;
          }
          .more_btn {
            text-align: center;
            margin-bottom: 12px;
            margin-top: 6px;
            padding: 0 5px;
            .el-button {
              width: 100%;
            }
          }
        }
      }
      .product_detail:hover .title_card {
        margin-top: -100px;
      }
    }
    .page {
      text-align: center;
      margin: 20px 0;
    }
  }
  .el-divider--horizontal {
    margin: 5px 0;
  }
  .el-radio__inner {
    display: none;
  }
  .el-radio {
    border-radius: 20px;
  }
}
@media (max-width: 1200px) {
}
</style>
