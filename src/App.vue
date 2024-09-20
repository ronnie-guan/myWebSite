<template>
  <div id="app">
    <navbar @judgment="judgment"/>
    <router-view
      :style="{ filter: openSearch ? 'blur(5px)' : 'none' }"
    ></router-view>
    <bottom-info :style="{ filter: openSearch ? 'blur(5px)' : 'none' }" />
  </div>
</template>

<script>
import navbar from "@/components/navBar/NavBar";
import BottomInfo from "@/components/bottomInfo/BottomInfo";
export default {
  name: "App",
  components: { navbar, BottomInfo },
  data() {
    return {
      openSearch: false
    };
  },
  methods: {
    judgment() {
      this.openSearch = !this.openSearch;
    }
  }
};
</script>

<style>
@import "../src/assets/Global.css";
</style>
