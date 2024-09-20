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
                :default-active="activeIndex"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <span>导航一</span>
                  </template>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">
                      <el-dropdown placement="right-start">
                        <span class="el-dropdown-link">
                          下拉菜单<i
                            class="el-icon-arrow-right el-icon--right"
                          ></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item icon="el-icon-plus"
                            >黄金糕</el-dropdown-item
                          >
                          <el-dropdown-item icon="el-icon-circle-plus"
                            >狮子头</el-dropdown-item
                          >
                          <el-dropdown-item icon="el-icon-circle-plus-outline"
                            >螺蛳粉</el-dropdown-item
                          >
                          <el-dropdown-item icon="el-icon-check"
                            >双皮奶</el-dropdown-item
                          >
                          <el-dropdown-item icon="el-icon-circle-check"
                            >蚵仔煎</el-dropdown-item
                          >
                        </el-dropdown-menu>
                      </el-dropdown>
                    </el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <div class="product_list"></div>
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
      activeIndex: "1-4",
      products: [
        {
          id: 1001000000,
          name: "Product A",
          imageUrl: "https://example.com/images/ART_NSD10_Neon_Strip/p1.jpg",
          colortTemp:
            "2700K;3000K;3500K;4000K;5000K;6000K;R;G;B;2200K~6000K;RGB;Pixel",
          secondary: [
            {
              //...
              threeLevel: [
                {
                  name: "111",
                  id: "121"
                }
              ]
            }
          ]
        },
        {
          id: 1001000001,
          name: "Product B",
          imageUrl: "https://example.com/images/ART_NSD15_Neon_Strip/p1.jpg",
          colortTemp: "2700K;3000K;3500K;4000K;5000K;6000K;"
        }
        // 省略其他产品
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
  display: flex;
  .product_select {
    width: 200px;
    height: 280px;
    background-color: red;
  }
  .product_list {
    flex: 1;
    padding-left: 18px;
  }
}
@media (max-width: 1200px) {
}
</style>
