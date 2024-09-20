<template>
  <div class="contact_arraystar">
    <div class="title">Contact Arraystar</div>
    <div class="submitForm">
      <div class="form_row">
        <div class="form_item">
          <div class="title">Name</div>
          <div class="dateInput">
            <el-input
              v-model="form.name"
              placeholder="Your full name"
            ></el-input>
          </div>
        </div>
        <div class="form_item">
          <div class="title">Email</div>
          <div class="dateInput">
            <el-input v-model="form.email" placeholder="Email"></el-input>
          </div>
        </div>
      </div>
      <div class="form_row" style="margin: 28px 0;">
        <div class="form_item">
          <div class="title">WebSite</div>
          <div class="dateInput">
            <el-input
              v-model="form.webSite"
              placeholder="WebSite http:// of https://"
            ></el-input>
          </div>
        </div>
        <div class="form_item">
          <div class="title">Intended products</div>
          <div class="dateInput">
            <el-input
              v-model="form.intended_Products"
              placeholder="NeOn LED,SMD LED,COB LED"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="form_row">
        <div class="form_item" style="width: 100%;">
          <div class="title">Message</div>
          <div class="dateInput">
            <el-input
              v-model="form.message"
              placeholder="What can we do for you?"
              type="textarea"
              maxlength="100"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="form_btn">
        <el-button>SUBMIT</el-button>
      </div>
    </div>
    <!-- <div class="pubCon">
      <div class="contactCon">
        <div class="lfInfo">
          <h1>艾尼斯美妆培训连锁</h1>
          <h2>AINISI BEAUTY MAKE UP CHAIN</h2>
          <div class="line"></div>
          <p>
            <a href="###"
              ><i class="fa fa-institution fa-lg"></i><span>艾尼斯</span></a
            >
          </p>
          <p>
            <a href="###"
              ><i class="fa fa-map-marker"></i
              ><span>苏州市相城区春申湖西路903号</span></a
            >
          </p>
          <p>
            <a href="tel:4009699180"
              ><i class="fa fa-phone"></i><span>400-9699-180</span></a
            >
          </p>
          <p>
            <a href="###"
              ><i class="fa fa-envelope"></i
              ><span>honggaoyang@anspxhj999.onexmail.com</span></a
            >
          </p>
        </div>
        <div class="rtForm">
          <feedback>
            <p class="title">有什么问题请反馈给我们，我们将为你服务。</p>
          </feedback>
        </div>
      </div>
      <div class="mapCon" id="mapCon"></div>
    </div> -->
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
      form: {
        name: "",
        email: "",
        webSite: "",
        intended_Products: "",
        message: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  },
  mixins: [scrollRevealMixin]
};
</script>

<style scoped>
.contact_arraystar {
  margin-top: 80px;
  overflow: hidden;
  color: white;
  background-image: url("../../assets/Contactus/contactusBackground.jpg");
  background-size: 100%;
  background-position: center;
  .title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin: 60.5px 0;
  }
  .submitForm {
    max-width: 800px;
    margin: auto;
    .form_row {
      display: flex;
      justify-content: space-between;
      .form_item {
        width: 280px;
        border: 1px solid #c0c4cc;
        border-radius: 10px;
        background-color: rgba(180, 180, 180, 0.3);
        .title {
          text-align: left;
          margin: 0%;
          font-size: 14px;
          padding-left: 14px;
          margin-top: 5px;
          color: white;
        }
        .el-input__inner,
        .el-textarea__inner {
          height: 30px;
          border: 0;
          border-radius: 10px;
          background-color: transparent;
          color: white;
        }
        .el-textarea__inner {
          height: 100px;
        }
      }
    }
    .form_btn {
      width: 100%;
      text-align: center;
      .el-button {
        width: 180px;
        margin: 48px 0;
        color: white;
        background-color: transparent;
      }
    }
  }
}
/* .pubCon {
  position: relative;
  padding-top: 450px;
  padding-bottom: 50px;
}
.contactCon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: absolute;
  top: -50px;
}
.contactCon .lfInfo {
  width: 50%;
  background-color: #444444;
  color: #f5f5f5;
  padding: 70px 125px;
  -webkit-box-shadow: 0px 0px 10px 1px #6d6565;
  box-shadow: 0px 0px 10px 1px #6d6565;
}
.contactCon .lfInfo h1 {
  font-size: 24px;
  font-weight: 400;
}
.contactCon .lfInfo h2 {
  font-weight: 400;
  padding: 5px 0;
}
.contactCon .lfInfo .line {
  width: 50px;
  height: 1px;
  background-color: #b09c70;
  margin: 20px 0 35px;
}
.contactCon .lfInfo a {
  color: #f5f5f5;
  font-size: 16px;
  display: block;
  padding: 5px 0;
  text-decoration: none;
}
.contactCon .lfInfo i {
  font-size: 1em; 
  width: 30px;
  text-align: center;
}
.contactCon .lfInfo a span {
  padding-left: 10px;
}
.contactCon .rtForm {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #b09c70;
  color: #f5f5f5;
  padding: 40px 0px;
  -webkit-box-shadow: 0px 0px 10px 1px #6d6565;
  box-shadow: 0px 0px 10px 1px #6d6565;
}
.contactCon .rtForm .title {
  padding-bottom: 20px;
}

.mapCon {
  width: 100%;
  height: 300px;
} */

/* 1200px*/
@media (max-width: 1200px) {
  /* .pubCon {
    padding-top: 20px;
  }
  .contactCon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    width: 90%;
    position: relative;
    top: 0;
    margin: auto;
  }
  .contactCon .lfInfo {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    background-color: #444444;
    color: #f5f5f5;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 10px 1px #6d6565;
    box-shadow: 0px 0px 10px 1px #6d6565;
  }
  .contactCon .lfInfo h1 {
    font-size: 20px;
    font-weight: 400;
  }
  .contactCon .lfInfo .line {
    width: 100%;
    height: 1px;
    background-color: #b09c70;
    margin: 20px 0 35px;
  }
  .contactCon .rtForm {
    -webkit-box-flex: none;
    -ms-flex: none;
    flex: none;
    background-color: #b09c70;
    color: #f5f5f5;
    padding: 40px 0px;
    -webkit-box-shadow: 0px 0px 10px 1px #6d6565;
    box-shadow: 0px 0px 10px 1px #6d6565;
  }
  .contactCon .rtForm .title {
    padding-bottom: 20px;
  }

  .mapCon {
    width: 90%;
    margin: auto;
    height: 300px;
  } */
}
</style>
