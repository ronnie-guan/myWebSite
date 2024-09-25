<template>
  <div>
    <div class="footer">
      <div class="footCont">
        <img src="../../assets/Logo/new_logo_arraystar.jpg" alt="" srcset="" />
        <div
          class="ftItem"
          v-for="item in footInfoList"
          :key="item.id"
        >
          <h6>
            <a href="###">{{ item.title }}</a>
          </h6>
          <ul>
            <li v-for="subItem in item.subTitList" :key="subItem.subTitId">
              <a
                href="###"
                :style="{
                  textAlign:
                    item.id === '003' && subItem.subTitId === '3'
                      ? 'left'
                      : 'center',
                  lineHeight:
                    item.id === '003' && subItem.subTitId === '3'
                      ? '20px'
                      : 'center'
                }"
                >{{ subItem.subTit }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright @2023 Colorsled.com. All rights reserved</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footInfoList: [
        {
          id: "001",
          title: "Support",
          subTitList: [
            { subTitId: "1", subTit: "Download" },
            { subTitId: "2", subTit: "Contact Us" },
          ]
        },
        {
          id: "002",
          title: "Products",
          subTitList: [
            { subTitId: "1", subTit: "Projects" },
            { subTitId: "2", subTit: "Projects" },
            { subTitId: "3", subTit: "Projects" }
          ]
        },
        {
          id: "003",
          title: "Contact Us",
          subTitList: [
            { subTitId: "1", subTit: "+86-755-2923-1888" },
            { subTitId: "2", subTit: "colors@colorsled.com" },
            {
              subTitId: "3",
              subTit:
                "17F, Block B, Building 2, SkyworthInnovotion Valley, Shiyon town. BooalDistrict,Shenzhen"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: #333333;
  padding: 33px 0;
}
.footCont {
  max-width: 1200px;
  margin: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  img {
    height: 64px;
  }
}
.ftItem,
.ewm {
  width: 20%;
  text-align: left;
}
.ftItem h6 {
  height: 50px;
  line-height: 50px;
}
.ftItem h6 a {
  color: #f5f5f5;
  text-decoration: none;
}
.ftItem ul li {
  list-style: none;
}
.ftItem ul li a {
  color: #999999;
  text-decoration: none;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.ewm img {
  width: 110px;
  height: 110px;
  vertical-align: middle;
}
.copyright {
  width: 100%;
  height: 50px;
  color: #f5f5f5;
  background-color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.copyright .icon {
  margin-bottom: 20px;
}
.copyright .icon i {
  color: #b09c70;
  background-color: #333333;
  width: 30px;
  height: 30px;
  padding-top: 6px;
  border-radius: 50%;
  font-size: 16px;
  margin-right: 50px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.copyright .icon i:nth-child(3) {
  margin-right: 0;
}
.copyright .icon i:hover {
  cursor: pointer;
  background-color: #b09c70;
  color: #f5f5f5;
}

/* 小于580 */
@media (max-width: 580px) {
  .footCont {
    max-width: 580px;
  }
  .ftItem,
  .ewm {
    width: 50%;
    text-align: center;
  }
  .footCont {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
}
</style>
