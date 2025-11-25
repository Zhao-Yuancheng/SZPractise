<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFiguresStore } from "../store/figures";
import { storeToRefs } from "pinia";
const router = useRouter();
const figuresStores = useFiguresStore();
const { index_now } = storeToRefs(figuresStores);

const figures = [
   {
    date: "建校伊始",
    data: [
      {
        url: "/pioneers/000",
        name: "校史溯源",
        pic: "./pioneers_imgs/0000.jpg",
      },
      {
        url: "/pioneers/001",
        name: "顾颉刚先生和辛树帜先生",
        pic: "./pioneers_imgs/0011.jpg",
      },
      // {
      //   url: "/pioneers/000",
      //   name: "校史溯源",
      //   pic: "./pioneers_imgs/0000.jpg",
      // },
    ],
    picUrl: [
      "./carousel_imgs/000.jpg",
      "./carousel_imgs/001.jpg",
      "./carousel_imgs/002.jpg",
      "./carousel_imgs/100.jpg",
      "./carousel_imgs/101.jpg",
      "./carousel_imgs/102.jpg",
    ],
  },
  
  {
    date: "发展时期",
    data: [
      {
        url: "/pioneers/200",
        name: "葛墨林",
        pic: "./pioneers_imgs/2000.jpg",
      },
      {
        url: "/pioneers/201",
        name: "黄建国",
        pic: "./pioneers_imgs/2011.jpg",
      },
      {
        url: "/pioneers/202",
        name: "丑纪范",
        pic: "./pioneers_imgs/2020.jpg",
      },
    ],
    picUrl: [
      "./carousel_imgs/200.jpg",
      "./carousel_imgs/201.jpg",
      "./carousel_imgs/202.jpg",
    ],
  },
   {
    date: "改革开放",
    data: [
      {
        url: "/pioneers/300",
        name: "刘冰校长",
        pic: "./pioneers_imgs/3003.jpg",
      },
      {
        url: "/pioneers/301",
        name: "水天明",
        pic: "./pioneers_imgs/3011.jpg",
      },
      {
        url: "/pioneers/302",
        name: "兰天考察队",
        pic: "./pioneers_imgs/3024.png",
      },
    ],
    picUrl: [
      "./carousel_imgs/300.jpg",
      "./carousel_imgs/301.jpg",
      "./carousel_imgs/302.jpg",
      "./carousel_imgs/303.jpg",
    ],
  },
  {
    date: "新世纪",
    data: [
      {
        url: "/pioneers/400",
        name: "黄建平",
        pic: "./pioneers_imgs/4000.jpg",
      },
      {
        url: "/pioneers/401",
        name: "周又和",
        pic: "./pioneers_imgs/4010.jpg",
      },
      {
        url: "/pioneers/402",
        name: "沈学顺",
        pic: "./pioneers_imgs/4020.jpg",
      },
    ],
    picUrl: [
      "./carousel_imgs/400.jpg",
      "./carousel_imgs/401.jpg",
      "./carousel_imgs/402.jpg",
      "./carousel_imgs/403.jpg",
    ],
  },
  {
    date: "新青年",
    data: [
      {
        url: "/pioneers/500",
        name: "金易",
        pic: "./pioneers_imgs/5001.jpg",
      },
      {
        url: "/pioneers/501",
        name: "靳志文",
        pic: "./pioneers_imgs/5010.jpg",
      },
      // {
      //   url: "/pioneers/000",
      //   name: "校史溯源",
      //   pic: "./pioneers_imgs/0000.jpg",
      // },
    ],
    picUrl: [
      "./carousel_imgs/500.jpg",
      "./carousel_imgs/501.jpg",
      "./carousel_imgs/502.jpg",
    ],
  },
];

const ticks = {
  0: "建校伊始",
  1: "发展时期",
  2: "改革开放",
  3: "新世纪",
  4: "新青年",
};
// const index_now = ref(0);

const figuresLength = Object.keys(figures).length;

console.log(index_now.value);
// console.log(figures[index_now.value]["picUrl"])
</script>


<template>
  <v-layout>
    <v-app-bar color="rgb(0,89,139)" height="34">
      <template v-slot:prepend>
        <v-btn
          class="elevation-10"
          href="https://www.lzu.edu.cn/"
          style="width: 90px; height: 30px"
        >
          <img src="./logo.png" alt="icon" style="width: 81px; height: 25px" />
        </v-btn>
      </template>
      <v-app-bar-title
        class="text-center"
        style="font-size: 16px; font-weight: bold"
        >榜样中的思政课&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</v-app-bar-title
      >
      <template v-slot:append>
        <v-btn
          class="elevation-10"
          href="https://marx.lzu.edu.cn/info/1134/6171.htm"
          style="width: 81px; height: 30px"
        >
          指导老师
        </v-btn>
      </template>
    </v-app-bar>

    <!--颜色没有加-->
    <v-main style="background-color: rgb(236, 252, 255)">
      <div align="center">
        <v-slider
          v-model="index_now"
          class="px-3 mt-3"
          max-width="340"
          :max="figuresLength - 1"
          thumb-size="10"
          thumb-color="#74a6df"
          track-color="#ddf0f6"
          track-size="3"
          track-fill-color="blue-grey"
          show-ticks="always"
          :ticks="ticks"
          tick-size="4"
          step="1"
          style="font-size: 0.7rem; color: rgb(0, 89, 139)"
        >
        </v-slider>
      </div>

      <!-- <v-card variant="text" class="mx-auto" max-width="340">
        <img
          :src="figures[index_now]['picUrl']"
          referrerPolicy="no-referrer"
          width="340"
        />
      </v-card> -->

      <v-carousel
        cycle
        height="250"
        hide-delimiter-background
        :show-arrows="false"
        class="elevation-10"
      >
        <v-carousel-item
          v-for="(carouselImg, index) in figures[index_now ]['picUrl']"
          :key="index"
          :src="carouselImg"
          class="pa-2"
          cover
        ></v-carousel-item>
      </v-carousel>

      <!-- <v-divider class="mt-3" thickness="12" color="info"></v-divider> -->

      <v-card
        class="mx-2 my-5 elevation-10"
        variant="tonal"
        color="blue-darken-4"
        v-for="(dayfigure, index) in figures[index_now]['data']"
        :key="index"
        @click="router.push(dayfigure['url'])"
      >
        <v-img :src="dayfigure.pic"></v-img>
        <v-card-text class="text-h6">{{ dayfigure.name }}</v-card-text>
      </v-card>
    </v-main>

    <v-footer
      class="text-center d-flex flex-column py-0"
      color="rgb(0,89,139)"
      height="40"
      elevation="0"
      app
    >
      <div class="font-weight-regular opacity-60" style="font-size: 0.6rem">
        地址： 兰州市榆中县夏官营镇兰州大学榆中校区 邮编：730107
      </div>
      <div style="font-size: 0.6rem">
        {{ new Date().getFullYear() }} —
        <strong>兰州大学大气科学学院 2025级作业小组</strong>
      </div>
    </v-footer>
  </v-layout>
</template>


<style scoped></style>
