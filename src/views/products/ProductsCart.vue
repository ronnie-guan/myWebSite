<template>
  <div class="cart_content">
    <div class="buy_table">
      <div class="title">Inquiry Basket</div>
      <el-card class="box-card">
        <el-table :data="list_data" stripe style="width: 100%">
          <el-table-column prop="table_index" label="Pos"> </el-table-column>
          <el-table-column prop="productName" label="productName">
          </el-table-column>
          <el-table-column prop="number" label="number"></el-table-column>
          <el-table-column label="">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-card>
      <el-card class="box-card" style="margin: 24px 0;">
        <div class="form">
          <el-form
            label-position="top"
            label-width="80px"
            :model="formData"
            :rules="rules"
            ref="ruleForm"
          >
            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item label="Name" prop="name">
                  <el-input
                    v-model="formData.name"
                    placeholder="Your full name"
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="10" :offset="2">
                <el-form-item label="E-mail Address" prop="email">
                  <el-input
                    v-model="formData.email"
                    placeholder="abc@gmail.com"
                  ></el-input> </el-form-item
              ></el-col>
            </el-row>
            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item label="Website" prop="website">
                  <el-input
                    v-model="formData.website"
                    placeholder="https://www.xxxx.com/"
                  ></el-input> </el-form-item
              ></el-col>
              <el-col :span="10" :offset="2">
                <el-form-item label="Country" prop="country">
                  <el-input
                    v-model="formData.country"
                    placeholder="Please choose your country"
                  ></el-input> </el-form-item
              ></el-col>
            </el-row>
            <el-row>
              <el-col :span="22" :offset="1">
                <el-form-item label="Enquiry Message">
                  <el-input
                    type="textarea"
                    :rows="4"
                    resize="none"
                    v-model="formData.enquiryMessage"
                    placeholder="What can we do for you?"
                  ></el-input> </el-form-item
              ></el-col>
            </el-row>
            <el-row>
              <el-col :span="22" :offset="1" style="text-align: center;">
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')"
                    >Submit</el-button
                  >
                  <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-card>
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
      list_data: [],
      formData: {},
      rules: {
        name: [
          { required: true, message: "Please input name", trigger: "blur" }
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "The mailbox format is incorrect",
            trigger: "change"
          }
        ],
        website: [
          {
            required: true,
            message: "Please input website",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    handleDelete(index, data) {
      console.log(index, data);
      this.$confirm("Are you sure you want to delete it?", "Tips", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        const list = this.list_data.filter((item, i) => i !== index);
        this.list_data = list.map((item, index) => {
          return { ...item, table_index: index + 1 };
        });
        localStorage.setItem("buyProduct", JSON.stringify(list));
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({ message: "Submit successfully", type: "success" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
    const storedValue = localStorage.getItem("buyProduct");
    const data = JSON.parse(storedValue).map((item, index) => {
      return { table_index: index + 1, ...item };
    });
    this.list_data = data;
    console.log(this.list_data);
  },
  mixins: [scrollRevealMixin]
};
</script>

<style scoped>
.cart_content {
  max-width: 1200px;
  margin: auto;
  margin-top: 80px;
  .buy_table {
    overflow: hidden;
    .title {
      font-size: 28px;
      font-weight: bold;
      margin: 24px 0;
    }
  }
  .form {
  }
}
/* 1200px*/
@media (max-width: 1200px) {
}
</style>
