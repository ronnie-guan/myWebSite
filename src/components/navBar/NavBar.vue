<template>
  <div class="header">
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
          >{{ item.itmeName }}</router-link
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      navMenuList: [
        //导航
        { id: "001", path: "/home", itmeName: "HOME" },
        { id: "003", path: "/products", itmeName: "Products" },
        { id: "002", path: "/about", itmeName: "ABOUT US" },
        // { id: '003', path: '/course', itmeName: '课程分类' },
        // { id: '004', path: '/teacher', itmeName: '教师团队' },
        // { id: '005', path: '/news', itmeName: '新闻动态' },
        { id: "006", path: "/contact", itmeName: "Contact Arraystar" },
      ],
      isOpenMenu: false, //小屏幕下是否显示菜单
      openSearch: false,
      input:''
    };
  },
  methods: {
    handleClick() {
      this.$emit("judgment");
      this.openSearch = !this.openSearch;
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
  padding: 0 20px;
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
