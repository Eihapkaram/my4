<template>
  <div class="contianer-fliud" id="AllSction">
    <header id="head">
      <h3>
        :Trending <img style="width: 30px" src="../assets/quotation.png" />
      </h3>
      <div
        class="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="progress-bar">
          <span id="ig">WATCH ALL</span>
        </div>
      </div>
    </header>
    <swiper
      :scrollbar="{
        hide: true,
      }"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
      }"
      :slides-per-view="3"
      :spaceBetween="80"
      :modules="modules"
      :navigation="true"
      class="mySwiper"
    >
      <swiper-slide id="swip" v-for="film in this.st" :key="film.id"
        ><img id="item" :src="sr + '/' + film.poster_path" />
        <div class="popupp" id="popup">
          <div class="coninform">
            <span class="type">{{ film.original_language }}</span>
            <span class="riting"
              >{{ film.vote_average }} <span class="fa fa-star checked"></span
            ></span>
            <span class="type2">web-DL</span>
          </div>
          <img
            @click.prevent="trialasync(film.id)"
            class="btn1"
            src="../assets/play.png"
          />
          <h3 id="movename">{{ film.title }}</h3>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
//import $ from "jquery";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  inject: ["fun", "trialmovis"],
  data() {
    return {
      srcs: "http://localhost:8080/img/1.cea911c0.jpg",
      discrpt: "action moves",
      namez: "last man down",
      typelast: "action",
      srcvl: "https://www.youtube.com/embed/GCc7v40DmqA",
      srcjo: "http://localhost:8080/img/2.02a34ac6.jpg",
      discriptjo: "action moves",
      srcvjo: "https://www.youtube.com/embed/ygUHhImN98w",
      namejo: "jocker",
      typejo: "drama",
      srcsu: "http://localhost:8080/img/3.cee2bd5f.jpg",
      srcvsu: "https://www.youtube.com/embed/OtXlekcPnmM",
      discriptsu: "cartoon moves",
      namesu: "sun",
      typesun: "cartoon",
      films: "",
      sr: "https://image.tmdb.org/t/p/w500",
    };
  },
  props: ["st"],
  beforeMount() {
    this.films = this.st;
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  methods: {
    async trialasync(id) {
      await this.trialmovis(id);

      this.$router.push({ name: "AboutAll", params: { filmid: id } });
    },
    setup() {
      return {
        modules: [Scrollbar],
      };
    },
  },
};
</script>
<style scoped>
.contianer-fliud {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
}
.progress {
  position: relative;
  height: 50px;
  border-radius: none;
  width: 150px;
  cursor: pointer;
  background-color: transparent;
  left: 20px;
  color: #080808;
}
.progress:hover .progress-bar {
  width: 100%;
}
.progress-bar {
  width: 50%;
  background-color: brown;
  border-radius: 2px;
  padding: 5px;
  overflow: visible;
}
#ig {
  z-index: 0;
  position: absolute;
  color: #faf4f4;
}
#head {
  align-self: flex-end;
  display: flex;
  flex-flow: row-reverse;
  justify-content: space-between;
  margin-right: 0px;
  margin-block: 30px;
  color: #ffffff;
  letter-spacing: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: transparent;
  font-style: normal;
  width: 100%;
}
#head h3 {
  margin-right: 20px;
}
.checked {
  color: orange;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  filter: drop-shadow();
  /* Center slide text vertically */
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}

.swiper-slide #item {
  display: block;
  width: 18rem;
  object-fit: cover;
  gap: 2rem;
  border-radius: 5px;
}
.btn1 {
  width: 50px;
  height: 50px;
  display: ;
  cursor: pointer;
  border: 2px solid orange;
  border-radius: 50%;
  justify-content: center;
  align-content: center;
  position: fixed;
  top: 180px;
  align-self: center;
  right: auto;
  background-color: orange;
}
#swip {
  border-radius: 5px;
}
.popupp:hover .btn1 {
  animation: btnani 2s infinite linear;
}
#swip:hover .popupp {
  display: flex;
  border-radius: 5px;
}
@keyframes btnani {
  0% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 1;
  }
  40% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
  80% {
    box-shadow: 0 0 0 50px rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
  100% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
}
#movename {
  position: absolute;
  z-index: 3;
  color: whitesmoke;
  top: 320px;
  font-size: large;
  align-self: center;
}
#moveitem {
  position: absolute;
  z-index: 3;
  color: whitesmoke;
  top: 350px;
  font-size: small;
  align-self: center;
}
.coninform {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  top: 0px;
  right: 0px;
  row-gap: 3px;
  height: 100%;
  width: 290px;
}
.popupp {
  display: none;
  background-color: rgba(0, 0, 0, 70%);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  top: auto;
  right: auto;
  height: 100%;
  width: 290px;
}
.riting {
  background-color: rgba(0, 0, 0, 70%);
  border-radius: 5px;
  color: beige;
  width: 80px;
}
.type {
  background-color: rgb(250, 186, 10);
  border-radius: 5px;
  color: black;
  width: 80px;
  margin-block: 3px;
}
.type2 {
  background-color: rgba(0, 0, 0, 70%);
  border-radius: 5px;
  color: beige;
  width: 80px;
}
/*/tablet/*/
@media (max-width: 1366px) {
  .swiper-slide #item {
    margin-left: -60rem;
  }
  .popupp {
    margin-left: -60rem;
  }
}
/*/tablet/*/
@media (max-width: 991px) {
  .swiper-slide #item {
    margin-left: -500px;
  }
  .popupp {
    margin-left: -500px;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  .swiper-slide #item {
    margin-left: -270px;
  }
  .popupp {
    margin-left: -270px;
  }
}
</style>
