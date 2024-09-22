<template>
  <div class="header" @mouseleave="()=> menuId='001'">
    <div class="navBar" :class="{ open: isOpenMenu }">
      <div class="nav_logo">
        <router-link to="/" style="display: block;"
          ><img src="../../assets/Logo/new_logo_arraystar.jpg" alt="" srcset=""
        /></router-link>
      </div>
      <div class="nav_menu">
        <router-link
          v-for="item in navMenuList"
          :key="item.id"
          :to="item.path"
          @click.native="isOpenMenu = !isOpenMenu"
         
          >
          <span  @mouseover="menuHover(item.id)">
            {{ item.itmeName }}
          </span>
          </router-link
        >
        <i
          slot="suffix"
          class="el-input__icon el-icon-search"
          @click="handleClick"
        ></i>
      </div>
      <div class="burger" @click="isOpenMenu = !isOpenMenu">
        <i v-if="!isOpenMenu" class="fa fa-navicon fa-2x"></i>
        <i v-else class="fa fa-close fa-2x"></i>
      </div>
    </div>
    <div class="search_full" :style="{ height: openSearch ? '180px' : '0' }">
      <div class="conten">
        <div class="input_box">
          <el-input placeholder="请输入内容" v-model="input" clearable>
          </el-input>
        </div>
        <div class="seart_type">
          <div><i class="el-icon-right"></i> 随机推荐一个产品</div>
          <div><i class="el-icon-right"></i> 工厂视频</div>
          <div><i class="el-icon-right"></i> 公司产品手册</div>
          <div><i class="el-icon-right"></i> 联系我们</div>
        </div>
      </div>
    </div>
    <div class="superMenu" v-if="menuId === '003'">
      <div class="super_menu_type">
        <div class="super_menu_item" @mouseover="handleHover('COB')">
          <img src="../../assets/superMenu/第一排产品大类图片/COB.jpg" alt="" srcset="">
          <div class="item_title">COB</div>
        </div>
        <div class="super_menu_item" @mouseover="handleHover('NEON')">
          <img src="../../assets/superMenu/第一排产品大类图片/NEON.jpg" alt="" srcset="">
          <div class="item_title">NEON</div>
        </div>
        <div class="super_menu_item" @mouseover="handleHover('POWER')">
          <img src="../../assets/superMenu/第一排产品大类图片/POWER.jpg" alt="" srcset="">
          <div class="item_title">POWER</div>
        </div>
        <div class="super_menu_item" @mouseover="handleHover('SMD')">
          <img src="../../assets/superMenu/第一排产品大类图片/SMD.jpg" alt="" srcset="">
          <div class="item_title">SMD</div>
        </div>
        <div class="super_menu_item" @mouseover="handleHover('Wall Washer')">
          <img src="../../assets/superMenu/第一排产品大类图片/Wall Washer.jpg" alt="" srcset="">
          <div class="item_title">Wall Washer</div>
        </div>
        <div class="super_menu_item" @mouseover="handleHover('Controller')">
          <img src="../../assets/superMenu/第一排产品大类图片/控制器.jpg" alt="" srcset="">
          <div class="item_title">Controller</div>
        </div>
      </div>
      <div class="productDetails_box">
        <div class="COB_list COB" v-if="showProduct ==='COB'">
          <h1>COB Series LED Strip</h1>
          <div class="list">
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/Classic COB.jpg" alt="" srcset="">
              <div class="title">Classic COB</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/Free Cut COB.jpg" alt="" srcset="">
              <div class="title">Free Cut COB</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/High Brightness COB.jpg" alt="" srcset="">
              <div class="title">High Brightness COB</div>
            </div>
            
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/High Brightness Ultra Wide COB.jpg" alt="" srcset="">
              <div class="title">High Brightness Ultra Wide COB</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/High Efficiency FCOB.jpg" alt="" srcset="">
              <div class="title">High Efficiency FCOB</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/Magic COB.jpg" alt="" srcset="">
              <div class="title">Magic COB</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/Reel To Reel COB.jpg" alt="" srcset="">
              <div class="title">Reel To Reel COB</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/RGB COB.jpg" alt="" srcset="">
              <div class="title">RGB COB</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/RGBW COB.jpg" alt="" srcset="">
              <div class="title">RGBW COB</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/Tunable COB.jpg" alt="" srcset="">
              <div class="title">Tunable COB</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/COB Series LED Strip/Waterproof COB.jpg" alt="" srcset="">
              <div class="title">Waterproof COB</div>
            </div>
          </div>
        </div>
        <div class="COB_list NEON" v-if="showProduct ==='NEON'">
          <h1>LED Neon Strip Light</h1>
          <div class="list">
            <div class="item">
              <img src="../../assets/superMenu/LED Neon Strip Light/3D Bend Neon.jpg" alt="" srcset="">
              <div class="title">3D Bend Neon</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/LED Neon Strip Light/Dream Color Neon.jpg" alt="" srcset="">
              <div class="title">Dream Color Neon</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/LED Neon Strip Light/High Voltage Neon.jpg" alt="" srcset="">
              <div class="title">High Voltage Neon</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/LED Neon Strip Light/Side Bend Neon.jpg" alt="" srcset="">
              <div class="title">Side Bend Neon</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/LED Neon Strip Light/Top Bend Neon.jpg" alt="" srcset="">
              <div class="title">Top Bend Neon</div>
            </div>
          </div>
        </div>
        <div class="COB_list POWER" v-if="showProduct ==='POWER'">
          <h1>POWER</h1>
          <div class="list">
            <div class="item">
              <img src="../../assets/superMenu/POWER/Dimmable Waterproof LED Power Supply.jpg" alt="" srcset="">
              <div class="title">Dimmable Waterproof LED Power Supply</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/POWER/Switch LED Power Supply.jpg" alt="" srcset="">
              <div class="title">Switch LED Power Supply</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/POWER/Waterproof LED Power Supply.jpg" alt="" srcset="">
              <div class="title">Waterproof LED Power Supply</div>
            </div>
          </div>
        </div>
        <div class="COB_list SMD" v-if="showProduct ==='SMD'">
          <h1>SMD Series LED Strip</h1>
          <div class="list">
            <div class="item">
              <img src="../../assets/superMenu/SMD Series LED Strip/2216.jpg" alt="" srcset="">
              <div class="title">2216</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/SMD Series LED Strip/2835.jpg" alt="" srcset="">
              <div class="title">2835</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/SMD Series LED Strip/3014.jpg" alt="" srcset="">
              <div class="title">3014</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/SMD Series LED Strip/3528-temp.jpg" alt="" srcset="">
              <div class="title">3528-temp</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/SMD Series LED Strip/4040.jpg" alt="" srcset="">
              <div class="title">4040</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/SMD Series LED Strip/5050.jpg" alt="" srcset="">
              <div class="title">5050</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/SMD Series LED Strip/Magic Series LED Strip.jpg" alt="" srcset="">
              <div class="title">Magic Series LED Strip</div>
            </div>
          </div>
        </div>
        <div class="COB_list Wall Washer" v-if="showProduct ==='Wall Washer'">
          <h1>Wall Washer Series LED Strip</h1>
          <div class="list">
            <div class="item">
              <img src="../../assets/superMenu/Wall Washer Series LED Strip/ART-WL1006-56-X-24.jpg" alt="" srcset="">
              <div class="title">ART-WL1006-56-X-24</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/Wall Washer Series LED Strip/ART-WL1207-56-X-24.jpg" alt="" srcset="">
              <div class="title">ART-WL1207-56-X-24</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/Wall Washer Series LED Strip/ART-WL1616-48-X-24.jpg" alt="" srcset="">
              <div class="title">ART-WL1616-48-X-24</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/Wall Washer Series LED Strip/ART-WL2010--X-24.jpg" alt="" srcset="">
              <div class="title">ART-WL2010--X-24</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/Wall Washer Series LED Strip/ART-WL3030-48-X-24.jpg" alt="" srcset="">
              <div class="title">ART-WL3030-48-X-24</div>
            </div>
          </div>
        </div>
        <div class="COB_list Controller" v-if="showProduct ==='Controller'">
          <h1>Controller</h1>
          <div class="list">
            <div class="item">
              <img src="../../assets/superMenu/Controller/DMX.jpg" alt="" srcset="">
              <div class="title">DMX</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/Controller/RF.jpg" alt="" srcset="">
              <div class="title">RF</div>
            </div>
            <div class="item">
              <img src="../../assets/superMenu/Controller/SPI.jpg" alt="" srcset="">
              <div class="title">SPI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navMenuList: [
        //导航
        { id: "001", path: "/home", itmeName: "HOME" },
        { id: "002", path: "/projects", itmeName: "Projects" },
        { id: "003", path: "/products", itmeName: "Products" },
        { id: "004", path: "/about", itmeName: "ABOUT US" },
        // { id: '003', path: '/course', itmeName: '课程分类' },
        // { id: '004', path: '/teacher', itmeName: '教师团队' },
        // { id: '005', path: '/news', itmeName: '新闻动态' },
        { id: "006", path: "/contact", itmeName: "Contact Arraystar" },
      ],
      isOpenMenu: false, //小屏幕下是否显示菜单
      openSearch: false,
      input:'',
      showProduct:'COB',
      menuId:'001'
    };
  },
  methods: {
    handleClick() {
      this.$emit("judgment");
      this.openSearch = !this.openSearch;
      this.menuId = '001'
    },
    handleHover(type){
      this.showProduct = type
    },
    menuHover(id){
      this.menuId = id
      if(id==='003'){
        this.openSearch = false
      }
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  /* height: 80px; */
  background-color: rgba(102, 102, 102, 0.1);
  position: sticky;
  z-index: 99;
  top: 0;
  margin-bottom: -80px;
  background-color: black;
}
.navBar {
  max-width: 1200px;
  height: 80px;
  margin: auto;
  color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 200;
  top: 0;
  left: 0;
}
.nav_logo a {
  cursor: pointer;
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  img {
    height: 50px;
  }
}
.nav_menu a {
  color: #ffffff;
  text-decoration: none;
  margin: 0 24px;
}
.burger {
  display: none;
}
.inline-input {
  .el-input {
    .el-input__inner {
      border-radius: 20px;
      background-color: transparent;
      color: white;
    }
  }
}

.search_full {
  height: 0;
  width: 100%;
  transition: height 0.3s ease;
  position: absolute;
  top: 80px;
  overflow: hidden;
  background-color: black;
  .conten {
    max-width: 1200px;
    margin: auto;
    height: 100%;
    .input_box {
      .el-input__inner {
        background-color: transparent;
        border: 0;
        color: white;
      }
    }
    .seart_type {
      color: white;
      div {
        font-size: 14px;
        margin-bottom: 12px;
        cursor: pointer;
      }
      div:hover {
        background-color: gray;
      }
    }
  }
}
.superMenu {
  max-width: 1200px;
  margin: auto;
  padding: 12px;
  position: absolute;
  background-color: black;
  left: 0;
  right: 0;
  .super_menu_type {
    display: flex;
    .super_menu_item {
      width: 16.6%;
      text-align: center;
      color: white;
      img {
        height: 100px;
      }
    }
  }
  .productDetails_box {
    .COB_list {
      h1 {
        color: white;
        font-size: 14px;
        margin-top: 12px;
      }
      .list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .item {
          width: 16.6%;
        text-align: center;
        color: white;
        img {
          height: 100px;
        }
        }
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .nav_menu {
    display: none;
  }
  .burger {
    display: block;
    cursor: pointer;
    z-index: 20;
  }
  .burger .fa-close {
    color: #ffffff;
  }

  .navBar.open .nav_menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: right;
    position: absolute;
    right: 0;
    top: 80px;
    width: 50vw;
    background-color: #2b2b2b;
    /* opacity: 0; */
    -webkit-animation: slideDown 0.5s ease-out 0s 1 normal forwards;
    animation: slideDown 0.5s ease-out 0s 1 normal forwards;
  }
  .navBar.open .nav_menu a {
    color: #fff;
    margin: 0;
    padding: 16px 20px;
    border-bottom: 1px solid #343434;
  }

  .navBar.open .nav_logo {
    color: #aaaaaa;
    z-index: 20;
  }
  .navBar.open .burger div {
    background-color: #aaaaaa;
  }
  /* 导航列表 */
  @-webkit-keyframes slideDown {
    from {
      right: -55%;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }
  @keyframes slideDown {
    from {
      right: -55%;
      opacity: 0;
    }
    to {
      right: 0;
      opacity: 1;
    }
  }
}
</style>
