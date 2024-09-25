import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productList: [
      {
        colourTemp: "2700K;3000K;4000K;6000K",
        id: "1001000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD10_Neon_Strip/ART-NSD10_Neon_Strip_1.webp",
        name: "ART-NSD10 Neon Strip"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1001000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD15_Neon_Strip/ART-NSD15_Neon_Strip_1.webp",
        name: "ART-NSD15 Neon Strip"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1001000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD18_Neon_Strip/ART-NSD18_Neon_Strip_1.webp",
        name: "ART-NSD18 Neon Strip"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K;",
        id: "1001000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD22_Neon_Strip/ART-NSD22_Neon_Strip_1.webp",
        name: "ART-NSD22 Neon Strip"
      },
      {
        colourTemp: "SPI RGB",
        id: "1001000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD22IC_Neon_Strip/ART-NSD22IC_Neon_Strip_1.webp",
        name: "ART-NSD22IC Neon Strip"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K;",
        id: "1001000006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD25_Neon_Strip/ART-NSD25_Neon_Strip_1.webp",
        name: "ART-NSD25 Neon Strip"
      },
      {
        colourTemp: "RGB",
        id: "1001000007",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Neon_Strip_Series/ART-NSD25RGB_Neon_Strip/ART-NSD25IC_Neon_Strip_1.webp",
        name: "ART-NSD25RGB Neon Strip"
      },
      {
        colourTemp: "2700K;3000K;4000K;6000K",
        id: "1002000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Rope_Strip_Series/ART-NSD15_Rope_Light/ART-NSD15_Rope_Light_1.webp",
        name: "ART-NSD15 Rope Light"
      },
      {
        colourTemp: "Magic RGB",
        id: "1002000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Rope_Strip_Series/ART-NSD15IC_Rope_Light/ART-NSD15IC_Rope_Light_1.webp",
        name: "ART-NSD15IC Rope Light"
      },
      {
        colourTemp: "2700K;3000K;4000K;6000K",
        id: "1002000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Rope_Strip_Series/ART-NSD18_Rope_Light/ART-NSD18_Rope_Light_1.webp",
        name: "ART-NSD18 Rope Light"
      },
      {
        colourTemp: "Magic RGB",
        id: "1002000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Rope_Strip_Series/ART-NSD18IC_Rope_Light/ART-NSD18IC_Rope_Light_1.webp",
        name: "ART-NSD18IC Rope Light"
      },
      {
        colourTemp: "2700K;3000K;4000K;6000K",
        id: "1002000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Rope_Strip_Series/ART-NSD22_Rope_Light/ART-NSD22_Rope_Light_1.webp",
        name: "ART-NSD22 Rope Light"
      },
      {
        colourTemp: "Magic RGB",
        id: "1002000006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/LED_Rope_Strip_Series/ART-NSD22IC_Rope_Light/ART-NSD22IC_Rope_Light_1.webp",
        name: "ART-NSD22IC Rope Light"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1003000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/360_Emitting_LED_Neon_Strip_Light/TUBE_IN_TUBE_LED_Neon_Strip_Series/ART-NSD25-240-X-1224/ART-NSD25-240-X-1224_1.webp",
        name: "ART-NSD25-240-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1102000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_COB_LED_Strip/ART-COB08-480-X-1224/ART-COB08-480-X-1224_1.webp",
        name: "ART-COB08-480-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1102000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_COB_LED_Strip/ART-COB10-320-X-48/ART-COB10-320-X-48_1.webp",
        name: "ART-COB10-320-X-48"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1102000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_COB_LED_Strip/ART-COB10-480-X-48/ART-COB10-480-X-48_1.webp",
        name: "ART-COB10-480-X-48"
      },
      {
        colourTemp: "6500K;4000K;2700K",
        id: "1102000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_COB_LED_Strip/ART-COB10-480-X-1224/ART-COB10-480-X-1224_1.webp",
        name: "ART-COB10-480-X-1224"
      },
      {
        colourTemp: "6500K;4000K;2700K",
        id: "1102000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_COB_LED_Strip/ART-COB10-512-X-24/ART-COB10-512-X-24_1.webp",
        name: "ART-COB10-512-X-24"
      },
      {
        colourTemp: "6500K;4000K;2700K",
        id: "1102000006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_COB_LED_Strip/ART-COB10-528-X-24/ART-COB10-528-X-24_1.webp",
        name: "ART-COB10-528-X-24"
      },
      {
        colourTemp: "6500K;4000K;2700K",
        id: "1102000007",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_COB_LED_Strip/ART-COB10-640-X-24/ART-COB10-640-X-24_1.webp",
        name: "ART-COB10-640-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1102000008",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_COB_LED_Strip/ART-COB12-616-X-24/ART-COB12-616-X-24_1.webp",
        name: "ART-COB12-616-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1111110001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Classic_COB_LED_Strip/ART-CSP08-480-X-24/ART-CSP08-480-X-24_1.webp",
        name: "ART-CSP08-480-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1111110002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Classic_COB_LED_Strip/ART-COB03-480-X-1224/ART-COB03-480-X-1224_1.webp",
        name: "ART-COB03-480-X-1224"
      },
      {
        colourTemp: "2700K;3000K;4000K;6000K",
        id: "1111110003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Classic_COB_LED_Strip/ART-COB04-480-X-24/ART-COB04-480-X-24_1.webp",
        name: "ART-COB04-480-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1111110004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Classic_COB_LED_Strip/ART-COB05-400-X-24/ART-COB05-400-X-24_1.webp",
        name: "ART-COB05-400-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;5000K;6000K",
        id: "1111110005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Classic_COB_LED_Strip/ART-COB05-480-X-1224/ART-COB05-480-X-1224_1.webp",
        name: "ART-COB05-480-X-1224"
      },
      {
        colourTemp: "6500K;4000K;2700K",
        id: "1111110006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Classic_COB_LED_Strip/ART-COB08-400-X-1224/ART-COB08-400-X-1224_1.webp",
        name: "ART-COB08-400-X-1224"
      },
      {
        colourTemp: "Ice Blue",
        id: "1111110007",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Classic_COB_LED_Strip/ART-COB08-480-B-24/ART-COB08-480-B-24_1.webp",
        name: "ART-COB08-480-B-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1111110008",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Classic_COB_LED_Strip/ART-CSP08-320-X-24/ART-CSP08-320-X-24_1.webp",
        name: "ART-CSP08-320-X-24"
      },
      {
        colourTemp: "RGB",
        id: "1107000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/RGB_COB_LED_Strip/ART-COB10-450-RGB-12/ART-COB10-450-RGB-12_1.webp",
        name: "ART-COB10-450-RGB-12"
      },
      {
        colourTemp: "RGB",
        id: "1107000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/RGB_COB_LED_Strip/ART-COB10-480-RGB-24/ART-COB10-480-RGB-24_1.webp",
        name: "ART-COB10-480-RGB-24"
      },
      {
        colourTemp: "RGB",
        id: "1107000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/RGB_COB_LED_Strip/ART-COB10-576-RGB-1224/ART-COB10-576-RGB-1224_1.webp",
        name: "ART-COB10-576-RGB-1224"
      },
      {
        colourTemp: "RGB",
        id: "1107000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/RGB_COB_LED_Strip/ART-COB10-756-RGB-12/ART-COB10-756-RGB-12_1.webp",
        name: "ART-COB10-756-RGB-12"
      },
      {
        colourTemp: "RGB",
        id: "1107000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/RGB_COB_LED_Strip/ART-COB10-768-RGB-24/ART-COB10-768-RGB-24_1.webp",
        name: "ART-COB10-768-RGB-24"
      },
      {
        colourTemp: "RGB",
        id: "1107000006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/RGB_COB_LED_Strip/ART-COB10-840-RGB-24/ART-COB10-840-RGB-24_1.webp",
        name: "ART-COB10-840-RGB-24"
      },
      {
        colourTemp: "RGBW",
        id: "1108000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/RGBW_COB_LED_Strip/ART-COB12-784-RGBW-24/ART-COB12-784-RGBW-24_1.webp",
        name: "ART-COB12-784-RGBW-24"
      },
      {
        colourTemp: "RGBW",
        id: "1108000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/RGBW_COB_LED_Strip/ART-COB12-896-RGBW-24/ART-COB12-896-RGBW-24_1.webp",
        name: "ART-COB12-896-RGBW-24"
      },
      {
        colourTemp: "RGBW",
        id: "1108000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/RGBW_COB_LED_Strip/ART-COB12-1232-RGBW-24/ART-COB12-1232-RGBW-24_1.webp",
        name: "ART-COB12-1232-RGBW-24"
      },
      {
        colourTemp: "5 IN 1,RGB+2700K+6000K",
        id: "1108000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/RGBW_COB_LED_Strip/ART-COB12-840-RGBCW-24/ART-COB12-840-RGBCW-24_1.webp",
        name: "ART-COB12-840-RGBCW-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1106000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Reel_To_Reel_COB_LED_Strip/ART-RCOB08-320-X-1224/ART-RCOB08-320-X-1224_1.webp",
        name: "ART-RCOB08-320-X-1224"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1106000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Reel_To_Reel_COB_LED_Strip/ART-RCOB08-480-X-1224/ART-RCOB08-480-X-1224_1.webp",
        name: "ART-RCOB08-480-X-1224"
      },
      {
        colourTemp: "2700K;3000K;4000;6500K",
        id: "1101000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Free_Cut_COB_LED_Strip/ART-COB05F-480-X-24/ART-COB05F-480-X-24_1.webp",
        name: "ART-COB05F-480-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000;6500K",
        id: "1101000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Free_Cut_COB_LED_Strip/ART-COB08F-240-X-1224/ART-COB08F-240-X-1224_1.webp",
        name: "ART-COB08F-240-X-1224"
      },
      {
        colourTemp: "2700K;3000K;4000;6500K",
        id: "1101000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Free_Cut_COB_LED_Strip/ART-COB08F-400-X-1224/ART-COB08F-400-X-1224_1.webp",
        name: "ART-COB08F-400-X-1224"
      },
      {
        colourTemp: "2700K;3000K;4000;6500K",
        id: "1101000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Free_Cut_COB_LED_Strip/ART-COB08F-528-X-1224-01/ART-COB08F-528-X-1224-01_1.webp",
        name: "ART-COB08F-528-X-1224-01"
      },
      {
        colourTemp: "2700K;3000K;4000;6500K",
        id: "1101000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Free_Cut_COB_LED_Strip/ART-COB08F-528-X-1224-02/ART-COB08F-528-X-1224-02_1.webp",
        name: "ART-COB08F-528-X-1224-02"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1103000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_Ultra_Wide_COB_LED_Strip/ART-COB10-1152-X-24/ART-COB10-1152-X-24_1.webp",
        name: "ART-COB10-1152-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1103000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_Ultra_Wide_COB_LED_Strip/ART-COB12-1280-X-24/ART-COB12-1280-X-24_1.webp",
        name: "ART-COB12-1280-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1103000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_Ultra_Wide_COB_LED_Strip/ART-COB15-1920-X-24/ART-COB15-1920-X-24_1.webp",
        name: "ART-COB15-1920-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1103000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_Ultra_Wide_COB_LED_Strip/ART-COB20-3072-X-24/ART-COB20-3072-X-24_1.webp",
        name: "ART-COB20-3072-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1103000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Brightness_Ultra_Wide_COB_LED_Strip/ART-COB30-1600-X-24/ART-COB30-1600-X-24_1.webp",
        name: "ART-COB30-1600-X-24"
      },
      {
        colourTemp: "Tunable 2700K~6500K",
        id: "1109000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Tunable_COB_LED_Strip/ART-COB05-600-W+WW-1224/ART-COB05-600-W+WW-1224_1.webp",
        name: "ART-COB05-600-W+WW-1224"
      },
      {
        colourTemp: "Tunable 2700K~6500K",
        id: "1109000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Tunable_COB_LED_Strip/ART-COB05-608-W+WW-1224/ART-COB05-608-W+WW-1224_1.webp",
        name: "ART-COB05-608-W+WW-1224"
      },
      {
        colourTemp: "Tunable 2700K~6500K",
        id: "1109000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Tunable_COB_LED_Strip/ART-COB10-640-W+WW-48/ART-COB10-640-W+WW-48_1.webp",
        name: "ART-COB10-640-W+WW-48"
      },
      {
        colourTemp: "Tunable 2700K~6500K",
        id: "1109000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Tunable_COB_LED_Strip/ART-COB08-608-W+WW-1224/ART-COB08-608-W+WW-1224_1.webp",
        name: "ART-COB08-608-W+WW-1224"
      },
      {
        colourTemp: "Magic RGB",
        id: "1105000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Magic_COB_LED_Strip/ART-COB10IC-576-RGB-1224/ART-COB10IC-576-RGB-1224_1.webp",
        name: "ART-COB10IC-576-RGB-1224"
      },
      {
        colourTemp: "Magic RGB",
        id: "1105000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Magic_COB_LED_Strip/ART-COB10IC-720-RGB-1224/ART-COB10IC-720-RGB-1224_1.webp",
        name: "ART-COB10IC-720-RGB-1224"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1105000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Magic_COB_LED_Strip/ART-MCOB10-420-W-24/ART-MCOB10-420-W-24_1.webp",
        name: "ART-MCOB10-420-W-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1105000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Magic_COB_LED_Strip/ART-MCOB10-480-W-24/ART-MCOB10-480-W-24_1.webp",
        name: "ART-MCOB10-480-W-24"
      },
      {
        colourTemp: "Magic RGBW",
        id: "1105000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Magic_COB_LED_Strip/ART-MCOB10-560-RGBW-24/ART-MCOB10-560-RGBW-24_1.webp",
        name: "ART-MCOB10-560-RGBW-24"
      },
      {
        colourTemp: "Magic RGBW",
        id: "1105000006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Magic_COB_LED_Strip/ART-MCOB10-784-RGBW-24/ART-MCOB10-784-RGBW-24_1.webp",
        name: "ART-MCOB10-784-RGBW-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6000K",
        id: "1104000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Efficiency_FCOB_LED_Strip/ART-FCOB08-320-X-1224/ART-FCOB08-320-X-1224_1.webp",
        name: "ART-FCOB08-320-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1104000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/High_Efficiency_FCOB_LED_Strip/ART-FCOB10-320-X-24/ART-FCOB10-320-X-24_1.webp",
        name: "ART-FCOB10-320-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6000K",
        id: "1110000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Waterproof_COB_LED_Strip/ART-COB06SE-480-X-1224/ART-COB06SE-480-X-1224_1.webp",
        name: "ART-COB06SE-480-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1110000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Waterproof_COB_LED_Strip/ART-COB08SE-480-X-1224-01/ART-COB08SE-480-X-1224-01_1.webp",
        name: "ART-COB08SE-480-X-1224-01"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1110000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Waterproof_COB_LED_Strip/ART-COB08SE-480-X-1224-02/ART-COB08SE-480-X-1224-02_1.webp",
        name: "ART-COB08SE-480-X-1224-02"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1110000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Waterproof_COB_LED_Strip/ART-COB08SE-480-X-1224-03/ART-COB08SE-480-X-1224-03_1.webp",
        name: "ART-COB08SE-480-X-1224-03"
      },
      {
        colourTemp: "2700K/3000K/4000K/6000K",
        id: "1110000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Waterproof_COB_LED_Strip/ART-COB08SE-480-X-1224-04/ART-COB08SE-480-X-1224-04_1.webp",
        name: "ART-COB08SE-480-X-1224-04"
      },
      {
        colourTemp: "2700K/3000K/4000K/6000K",
        id: "1110000006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Waterproof_COB_LED_Strip/ART-COB08SE-480-X-1224-05/ART-COB08SE-480-X-1224-05_1.webp",
        name: "ART-COB08SE-480-X-1224-05"
      },
      {
        colourTemp: "2700K/3000K/4000K/6000K",
        id: "1110000007",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/COB_Series_LED_Strip/Waterproof_COB_LED_Strip/ART-COB08ST-480-X-1224/ART-COB08ST-480-X-1224_1.webp",
        name: "ART-COB08ST-480-X-1224"
      },
      {
        colourTemp: "2200K;3000K;4000K;5000;6500K",
        id: "1205000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS0404/ART-NS0404_1.webp",
        name: "ART-NS0404"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K;R;G;B",
        id: "1205000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS0503/ART-NS0503_1.webp",
        name: "ART-NS0503"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K;R;G;B",
        id: "1205000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS0505/ART-NS0505_1.webp",
        name: "ART-NS0505"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1205000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS0606/ART-NS0606_1.webp",
        name: "ART-NS0606"
      },
      {
        colourTemp: "CCT Tunable",
        id: "1205000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS0808/ART-NS0808_1.webp",
        name: "ART-NS0808"
      },
      {
        colourTemp: "2700/3000/4000/6500K",
        id: "1205000006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS1010/ART-NS1010_1.webp",
        name: "ART-NS1010"
      },
      {
        colourTemp: "2700K;3000K;3500K;4000K;5000K;6000K;R;G;B",
        id: "1205000007",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS1010R/ART-NS1010R_1.webp",
        name: "ART-NS1010R"
      },
      {
        colourTemp: "2400K;2700K;3000K;4000K;6500K;R;G;B;RGB;SPI RGB",
        id: "1205000008",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS1111P/ART-NS1111P_1.webp",
        name: "ART-NS1111P"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1205000009",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS0513/ART-NS0513_1.webp",
        name: "ART-NS0513"
      },
      {
        colourTemp: "2400K;2700K;3000K;4000K;6500K;R;G;B;RGB;SPI RGB",
        id: "1205000010",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS1313/ART-NS1313_1.webp",
        name: "ART-NS1313"
      },
      {
        colourTemp: "Single Color/RGB/Pixel RGB",
        id: "1205000011",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS1313R/ART-NS1313R_1.webp",
        name: "ART-NS1313R"
      },
      {
        colourTemp: "CCT Tunable",
        id: "1205000012",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS1616/ART-NS1616_1.webp",
        name: "ART-NS1616"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1205000013",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS1616F/ART-NS1616F_1.webp",
        name: "ART-NS1616F"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1205000014",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS2014/ART-NS2014_1.webp",
        name: "ART-NS2014"
      },
      {
        colourTemp: "CCT Tunable",
        id: "1205000015",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Top_Bend_Neon_Series/ART-NS2020/ART-NS2020_1.webp",
        name: "ART-NS2020"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1204000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0206/ART-NS0206_1.webp",
        name: "ART-NS0206"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1204000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0408F/ART-NS0408F_1.webp",
        name: "ART-NS0408F"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1204000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0408/ART-NS0408_1.webp",
        name: "ART-NS0408"
      },
      {
        colourTemp: "2700K;3000K;3500K;4000K;5000K;6000K;R;G;B",
        id: "1204000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0410/ART-NS0410_1.webp",
        name: "ART-NS0410"
      },
      {
        colourTemp: "2700K;3000K;4000K;5000K;6000K;R;G;B",
        id: "1204000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0508/ART-NS0508_1.webp",
        name: "ART-NS0508"
      },
      {
        colourTemp: "Single Color/CCT Tunble",
        id: "1204000006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0511/ART-NS0511_1.webp",
        name: "ART-NS0511"
      },
      {
        colourTemp: "Single Color/CCT Tunable/RGB",
        id: "1204000007",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0612/ART-NS0612_1.webp",
        name: "ART-NS0612"
      },
      {
        colourTemp: "Single Color/CCT Tunable",
        id: "1204000008",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0612B/ART-NS0612B_1.webp",
        name: "ART-NS0612B"
      },
      {
        colourTemp: "Single Color",
        id: "1204000009",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0613/ART-NS0613_1.webp",
        name: "ART-NS0613"
      },
      {
        colourTemp: "Single Color/CCT Tunable/RGB",
        id: "1204000010",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0812P/ART-NS0812P_1.webp",
        name: "ART-NS0812P"
      },
      {
        colourTemp: "CCT Tunable",
        id: "1204000011",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS0816C/ART-NS0816C_1.webp",
        name: "ART-NS0816C"
      },
      {
        colourTemp: "2700/3000/4000/6500K",
        id: "1204000012",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS1010/ART-NS1010_1.webp",
        name: "ART-NS1010"
      },
      {
        colourTemp: "2700/3000/4000/6500K",
        id: "1204000013",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS1018/ART-NS1018_1.webp",
        name: "ART-NS1018"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1204000014",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS1112/ART-NS1112_1.webp",
        name: "ART-NS1112"
      },
      {
        colourTemp: "CCT Tunable",
        id: "1204000015",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS1212/ART-NS1212_1.webp",
        name: "ART-NS1212"
      },
      {
        colourTemp: "Single Color/CCT Tunable",
        id: "1204000016",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS1220P/ART-NS1220P_1.webp",
        name: "ART-NS1220P"
      },
      {
        colourTemp: "CCT Tunable",
        id: "1204000017",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS1225/ART-NS1225_1.webp",
        name: "ART-NS1225"
      },
      {
        colourTemp: "Single Color",
        id: "1204000018",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Side_Bend_Neon_Series/ART-NS1317/ART-NS1317_1.webp",
        name: "ART-NS1317"
      },
      {
        colourTemp: "Single Color/CCT Tunable",
        id: "1201000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/3D_Bend_Neon_Series/ART-NS1010-3D/ART-NS1010-3D_1.webp",
        name: "ART-NS1010-3D"
      },
      {
        colourTemp: "Single Color",
        id: "1201000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/3D_Bend_Neon_Series/ART-NS1212-3D/ART-NS1212-3D_1.webp",
        name: "ART-NS1212-3D"
      },
      {
        colourTemp: "Single Color/CCT Tunable",
        id: "1201000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/3D_Bend_Neon_Series/ART-NS1313-3D/ART-NS1313-3D_1.webp",
        name: "ART-NS1313-3D"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1201000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/3D_Bend_Neon_Series/ART-NS1616-3D/ART-NS1616-3D_1.webp",
        name: "ART-NS1616-3D"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1201000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/3D_Bend_Neon_Series/ART-NS2020-3D/ART-NS2020-3D_1.webp",
        name: "ART-NS2020-3D"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1203000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/High_Voltage_Neon_Series/ART-NS1018/ART-NS1018_1.webp",
        name: "ART-NS1018"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1203000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/High_Voltage_Neon_Series/ART-NS1220/ART-NS1220_1.webp",
        name: "ART-NS1220"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1203000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/High_Voltage_Neon_Series/ART-NS1616/ART-NS1616_4.webp",
        name: "ART-NS1616"
      },
      {
        colourTemp: "Magic RGB",
        id: "1202000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Dream_Color_Neon_Series/ART-NS0612IC/ART-NS0612IC_1.webp",
        name: "ART-NS0612IC"
      },
      {
        colourTemp: "Magic RGB",
        id: "1202000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Dream_Color_Neon_Series/ART-NS0816IC/ART-NS0816IC_1.webp",
        name: "ART-NS0816IC"
      },
      {
        colourTemp: "Magic RGB/RGBW",
        id: "1202000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Dream_Color_Neon_Series/ART-NS1220IC/ART-NS1220IC_1.webp",
        name: "ART-NS1220IC"
      },
      {
        colourTemp: "DMX512 RGB",
        id: "1202000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Dream_Color_Neon_Series/ART-NS1225IC/ART-NS1225IC_1.webp",
        name: "ART-NS1225IC"
      },
      {
        colourTemp: "Magic RGB",
        id: "1202000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Dream_Color_Neon_Series/ART-NS1616IC-84-RGB-24/ART-NS1616IC-84-RGB-24_1.webp",
        name: "ART-NS1616IC-84-RGB-24"
      },
      {
        colourTemp: "Magic White",
        id: "1202000006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/LED_Neon_Strip_Light/Dream_Color_Neon_Series/ART-NS1616IC-120-X-24/ART-NS1616IC-120-X-24_1.webp",
        name: "ART-NS1616IC-120-X-24"
      },
      {
        colourTemp: "Magic RGBW",
        id: "1301000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/Magic_Series_LED_Strip/ART-5050IC512-60-RGBW-1224/ART-5050IC512-60-RGBW-1224_1.webp",
        name: "ART-5050IC512-60-RGBW-1224"
      },
      {
        colourTemp: "Magic RGB",
        id: "1301000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/Magic_Series_LED_Strip/ART-5050IC512-72-RGB-24/ART-5050IC512-72-RGB-24_1.webp",
        name: "ART-5050IC512-72-RGB-24"
      },
      {
        colourTemp: "Magic RGB",
        id: "1301000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/Magic_Series_LED_Strip/ART-5050IC512-96-RGB-24/ART-5050IC512-96-RGB-24_1.webp",
        name: "ART-5050IC512-96-RGB-24"
      },
      {
        colourTemp: "Magic RGBW",
        id: "1301000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/Magic_Series_LED_Strip/ART-5050IC512-120-RGBW-24/ART-5050IC512-120-RGBW-24_1.webp",
        name: "ART-5050IC512-120-RGBW-24"
      },
      {
        colourTemp: "Magic RGB",
        id: "1301000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/Magic_Series_LED_Strip/ART-5050IC2811-60-RGB-1224/ART-5050IC2811-60-RGB-1224_1.webp",
        name: "ART-5050IC2811-60-RGB-1224"
      },
      {
        colourTemp: "Magic RGB",
        id: "1301000006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/Magic_Series_LED_Strip/ART-5050IC2815-60-RGB-12/ART-5050IC2815-60-RGB-12_1.webp",
        name: "ART-5050IC2815-60-RGB-12"
      },
      {
        colourTemp: "Magic RGBW",
        id: "1301000007",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/Magic_Series_LED_Strip/ART-5050IC2904B-60-RGBW-1224/ART-5050IC2904B-60-RGBW-1224_1.webp",
        name: "ART-5050IC2904B-60-RGBW-1224"
      },
      {
        colourTemp: "Magic RGB",
        id: "1301000008",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/Magic_Series_LED_Strip/ART-5050IC6813-96-RGB-12/ART-5050IC6813-96-RGB-12_1.webp",
        name: "ART-5050IC6813-96-RGB-12"
      },
      {
        colourTemp: "Magic RGB",
        id: "1301000009",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/Magic_Series_LED_Strip/ART-5050IC6815-60-RGB-12/ART-5050IC6815-60-RGB-12_1.webp",
        name: "ART-5050IC6815-60-RGB-12"
      },
      {
        colourTemp: "Magic RGB",
        id: "1301000010",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/Magic_Series_LED_Strip/ART-5050IC6815-60-RGB-24/ART-5050IC6815-60-RGB-24_1.webp",
        name: "ART-5050IC6815-60-RGB-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1302010001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2216_Series_LED_Strip/Classic_SMD_2216_LED_Strip_Series/ART-2216-120-X-1224/ART-2216-120-X-1224_1.webp",
        name: "ART-2216-120-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1302010002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2216_Series_LED_Strip/Classic_SMD_2216_LED_Strip_Series/ART-2216-280-X-24-4MM/ART-2216-280-X-24-4MM_1.webp",
        name: "ART-2216-280-X-24-4MM"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1302010003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2216_Series_LED_Strip/Classic_SMD_2216_LED_Strip_Series/ART-2216-280-X-24-6MM/ART-2216-280-X-24-6MM_1.webp",
        name: "ART-2216-280-X-24-6MM"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1302010004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2216_Series_LED_Strip/Classic_SMD_2216_LED_Strip_Series/ART-2216-300-X-1224/ART-2216-300-X-1224_1.webp",
        name: "ART-2216-300-X-1224"
      },
      {
        colourTemp: "2300K~6000K",
        id: "1302020001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2216_Series_LED_Strip/Tunable_SMD_2216_LED_Strip/ART-2216-224-24-2WTCW/ART-2216-224-24-2WTCW_1.webp",
        name: "ART-2216-224-24-2WTCW"
      },
      {
        colourTemp: "2700K~6000K",
        id: "1302020002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2216_Series_LED_Strip/Tunable_SMD_2216_LED_Strip/ART-2216-280-W+WW-24/ART-2216-280-W+WW-24_1.webp",
        name: "ART-2216-280-W+WW-24"
      },
      {
        colourTemp: "2300K~6000K",
        id: "1302020003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2216_Series_LED_Strip/Tunable_SMD_2216_LED_Strip/ART-T2216-240-W+WW-1224/ART-T2216-240-W+WW-1224_1.webp",
        name: "ART-T2216-240-W+WW-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303010001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Classic_SMD_2835_LED_Strip_Series/ART-2835-60-X-5/ART-2835-60-X-5_1.webp",
        name: "ART-2835-60-X-5"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303010002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Classic_SMD_2835_LED_Strip_Series/ART-2835-60-X-1224/ART-2835-60-X-1224_1.webp",
        name: "ART-2835-60-X-1224"
      },
      {
        colourTemp: "2700K,3000K,4000K,6000K",
        id: "1303010003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Classic_SMD_2835_LED_Strip_Series/ART-2835-120-X-48/ART-2835-120-X-48_1.webp",
        name: "ART-2835-120-X-48"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303010004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Classic_SMD_2835_LED_Strip_Series/ART-2835-120-X-1224/ART-2835-120-X-1224_1.webp",
        name: "ART-2835-120-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303010005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Classic_SMD_2835_LED_Strip_Series/ART-2835-120-X-1224-4MM/ART-2835-120-X-1224-4MM_1.webp",
        name: "ART-2835-120-X-1224-4MM"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303010006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Classic_SMD_2835_LED_Strip_Series/ART-2835-160-X-1224/ART-2835-160-X-1224_1.webp",
        name: "ART-2835-160-X-1224"
      },
      {
        colourTemp: "Red/Green/Blue/Yellow",
        id: "1303010007",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Classic_SMD_2835_LED_Strip_Series/ART-2835-168-X-24-5MM/ART-2835-168-X-24-5MM_1.webp",
        name: "ART-2835-168-X-24-5MM"
      },
      {
        colourTemp: "Red/Green/Blue/Yellow",
        id: "1303010008",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Classic_SMD_2835_LED_Strip_Series/ART-2835-168-X-24-8MM/ART-2835-168-X-24-8MM_1.webp",
        name: "ART-2835-168-X-24-8MM"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303010009",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Classic_SMD_2835_LED_Strip_Series/ART-2835-240-X-1224/ART-2835-240-X-1224_1.webp",
        name: "ART-2835-240-X-1224"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1303020001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/E_Series_SMD_2835_LED_Strip/ART-E2825-180-X-24/ART-E2825-180-X-24_1.webp",
        name: "ART-E2825-180-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1303020002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/E_Series_SMD_2835_LED_Strip/ART-E2835-120-X-1224/ART-E2835-120-X-1224_1.webp",
        name: "ART-E2835-120-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303030001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Efficiency_SMD_2835_LED_Strip/ART-HE2835-64-X-1224/ART-HE2835-64-X-1224_1.webp",
        name: "ART-HE2835-64-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303030002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Efficiency_SMD_2835_LED_Strip/ART-HE2835-128-X-24/ART-HE2835-128-X-24_1.webp",
        name: "ART-HE2835-128-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303030003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Efficiency_SMD_2835_LED_Strip/ART-HE2835-144-X-24/ART-HE2835-144-X-24_1.webp",
        name: "ART-HE2835-144-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303030004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Efficiency_SMD_2835_LED_Strip/ART-HE2835-180-X-24/ART-HE2835-180-X-24_1.webp",
        name: "ART-HE2835-180-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303030005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Efficiency_SMD_2835_LED_Strip/ART-HE2835-240-X-24/ART-HE2835-240-X-24_1.webp",
        name: "ART-HE2835-240-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303030006",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Efficiency_SMD_2835_LED_Strip/ART-HE2835-240-X-24-5mm/ART-HE2835-240-X-24-5mm_1.webp",
        name: "ART-HE2835-240-X-24-5mm"
      },
      {
        colourTemp: "3000K,4000K,6000K",
        id: "1303040001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Voltage_SMD_2835_LED_Strip/ART-HS2835-120-X-01/ART-HS2835-120-X-01_1.webp",
        name: "ART-HS2835-120-X-01"
      },
      {
        colourTemp: "2700K;3000K;4000K;6000K",
        id: "1303040002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Voltage_SMD_2835_LED_Strip/ART-HS2835-120-X-02/ART-HS2835-120-X-02_1.webp",
        name: "ART-HS2835-120-X-02"
      },
      {
        colourTemp: "2700K;3000K;4000K;6000K",
        id: "1303040003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Voltage_SMD_2835_LED_Strip/ART-HS2835-180-X-01/ART-HS2835-180-X-01_1.webp",
        name: "ART-HS2835-180-X-01"
      },
      {
        colourTemp: "3000K,4000K,6000K",
        id: "1303040004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/High_Voltage_SMD_2835_LED_Strip/ART-HS2835-240-X-01/ART-HS2835-240-X-01_1.webp",
        name: "ART-HS2835-240-X-01"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303050001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Mini_Cutting_SMD_2835_LED_Strip/ART-S2835-120-X-24/ART-S2835-120-X-24_1.webp",
        name: "ART-S2835-120-X-24"
      },
      {
        colourTemp: "2700K~6500K",
        id: "1303060001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Tunable_SMD_2835_LED_Strip/ART-2835-120-W+WW-24/ART-2835-120-W+WW-24_1.webp",
        name: "ART-2835-120-W+WW-24"
      },
      {
        colourTemp: "2700K~6500K",
        id: "1303060002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Tunable_SMD_2835_LED_Strip/ART-2835-240-W+WW-24/ART-2835-240-W+WW-24_1.webp",
        name: "ART-2835-240-W+WW-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303070001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/UVA_SMD_2835_LED_Strip/ART-2835UV-120-X-1224/ART-2835UV-120-X-1224_1.webp",
        name: "ART-2835UV-120-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303080001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Waterproof_SMD_2835_LED_Strip/ART-2835PU-128-X-24/ART-2835PU-128-X-24_1.webp",
        name: "ART-2835PU-128-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303080002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Waterproof_SMD_2835_LED_Strip/ART-2835SE-120-W-1224-D/ART-2835SE-120-W-1224-D_1.webp",
        name: "ART-2835SE-120-W-1224-D"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303090001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Zigzan_SMD_2835_LED_Strip/ART-S2835-60-X-1224/ART-S2835-60-X-1224_1.webp",
        name: "ART-S2835-60-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303090002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Zigzan_SMD_2835_LED_Strip/ART-S2835-72-X-1224/ART-S2835-72-X-1224_1.webp",
        name: "ART-S2835-72-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1303090003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_2835_Series_LED_Strip/Zigzan_SMD_2835_LED_Strip/ART-S2835-120-X-1224/ART-S2835-120-X-1224_1.webp",
        name: "ART-S2835-120-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1304010001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_3014_Series_LED_Strip/Classic_SMD_3014_LED_Strip_Series/ART-3014-120-X-1224/ART-3014-120-X-1224_1.webp",
        name: "ART-3014-120-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1304010002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_3014_Series_LED_Strip/Classic_SMD_3014_LED_Strip_Series/ART-3014-128-X-24/ART-3014-128-X-24_1.webp",
        name: "ART-3014-128-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1304010003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_3014_Series_LED_Strip/Classic_SMD_3014_LED_Strip_Series/ART-3014-204-X-24/ART-3014-204-X-24_1.webp",
        name: "ART-3014-204-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1304010004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_3014_Series_LED_Strip/Classic_SMD_3014_LED_Strip_Series/ART-S3014-120-X-1224/ART-S3014-120-X-1224_1.webp",
        name: "ART-S3014-120-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K/R/G/B/Y",
        id: "1305010001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_3528_Series_LED_Strip/Classic_SMD_3528_LED_Strip_Series/ART-3528-60-X-1224/ART-3528-60-X-1224_1.webp",
        name: "ART-3528-60-X-1224"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K/R/G/B/Y",
        id: "1305010002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_3528_Series_LED_Strip/Classic_SMD_3528_LED_Strip_Series/ART-3528-240-X-1224/ART-3528-240-X-1224_1.webp",
        name: "ART-3528-240-X-1224"
      },
      {
        colourTemp: "RGB+W3000K",
        id: "1306000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_4040_Series_LED_Strip/ART-4040RGB+2835W-240-24/ART-4040RGB+2835W-240-24_1.webp",
        name: "ART-4040RGB+2835W-240-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1307010001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_5050_Series_LED_Strip/Classic_SMD_5050_LED_Strip_Series/ART-5050-30-X-1224/ART-5050-30-X-1224_1.webp",
        name: "ART-5050-30-X-1224"
      },
      {
        colourTemp: "RGB",
        id: "1307020001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_5050_Series_LED_Strip/RGB_SMD_5050_LED_Strip_Series/ART-5050-60-RGB-1224/ART-5050-60-RGB-1224_1.webp",
        name: "ART-5050-60-RGB-1224"
      },
      {
        colourTemp: "RGB",
        id: "1307020002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_5050_Series_LED_Strip/RGB_SMD_5050_LED_Strip_Series/ART-5050-96-RGB-1224/ART-5050-96-RGB-1224_1.webp",
        name: "ART-5050-96-RGB-1224"
      },
      {
        colourTemp: "RGB",
        id: "1307020003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_5050_Series_LED_Strip/RGB_SMD_5050_LED_Strip_Series/ART-S5050-48-RGB-1224/ART-S5050-48-RGB-1224_1.webp",
        name: "ART-S5050-48-RGB-1224"
      },
      {
        colourTemp: "RGB",
        id: "1307020004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_5050_Series_LED_Strip/RGB_SMD_5050_LED_Strip_Series/ART-S5050-60-RGB-1224/ART-S5050-60-RGB-1224_1.webp",
        name: "ART-S5050-60-RGB-1224"
      },
      {
        colourTemp: "RGB+W",
        id: "1307030001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_5050_Series_LED_Strip/RGBW_SMD_5050_LED_Strip_Series/ART-5050-60-RGBW-1224/ART-5050-60-RGBW-1224_1.webp",
        name: "ART-5050-60-RGBW-1224"
      },
      {
        colourTemp: "RGB+WW3000K+W6000K",
        id: "1307030002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_5050_Series_LED_Strip/RGBW_SMD_5050_LED_Strip_Series/ART-5050-96-RGBCW-24/ART-5050-96-RGBCW-24_1.webp",
        name: "ART-5050-96-RGBCW-24"
      },
      {
        colourTemp: "RGB+W",
        id: "1307030003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/SMD_Series_LED_Strip/SMD_5050_Series_LED_Strip/RGBW_SMD_5050_LED_Strip_Series/ART-5050-120-RGBW-24/ART-5050-120-RGBW-24_1.webp",
        name: "ART-5050-120-RGBW-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1400000001",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/Wall_Washer_Series_LED_Strip/ART-WL1006-56-X-24/ART-WL1006-56-X-24_1.webp",
        name: "ART-WL1006-56-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1400000002",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/Wall_Washer_Series_LED_Strip/ART-WL1207-56-X-24/ART-WL1207-56-X-24_1.webp",
        name: "ART-WL1207-56-X-24"
      },
      {
        colourTemp: "2700K, 3000K, 4000K, 6000K",
        id: "1400000003",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/Wall_Washer_Series_LED_Strip/ART-WL1616-48-X-24/ART-WL1616-48-X-24_1.webp",
        name: "ART-WL1616-48-X-24"
      },
      {
        colourTemp: "2700K/3000K/4000K/6500K",
        id: "1400000004",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/Wall_Washer_Series_LED_Strip/ART-WL2010-112-X-24/ART-WL2010-112-X-24_1.webp",
        name: "ART-WL2010-112-X-24"
      },
      {
        colourTemp: "2700K;3000K;4000K;6500K",
        id: "1400000005",
        imageUrl:
          "http://43.131.6.9:80/resource/LedStrip/Wall_Washer_Series_LED_Strip/ART-WL3030-48-X-24/ART-WL3030-48-X-24_1.webp",
        name: "ART-WL3030-48-X-24"
      }
    ]
  },
  mutations: {
    setProductList(state, products) {
      state.productList = products;
    }
  },
  actions: {
    fetchProducts({ commit }, products) {
      commit("setProductList", products);
    }
  }
});

export default store;
