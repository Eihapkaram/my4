<template>
  <swiper
    :spaceBetween="30"
    :slides-per-view="1"
    :centeredSlides="true"
    :autoplay="{
      delay: 6000,
      disableOnInteraction: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="film in this.st.results" :key="film.id"
      ><img id="item" :src="this.sr + '/' + film.backdrop_path" />
      <div class="condis" id="con">
        <div class="content">
          <h3 class="title">{{ film.title }}</h3>
          <h5 class="subtitel">popularity:{{ film.popularity }}</h5>
          <p class="discr">
            {{ film.overview }}
          </p>

          <div
            class="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div @click.prevent="trialasync(film.id)" class="progress-bar">
              <span id="textbtn">WATCH NOW</span>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import $ from "jquery";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      srcs: "http://localhost:8080/img/1.cea911c0.jpg",
      discrpt: "action moves",
      namez: "last man down",
      srcvl: "https://www.youtube.com/embed/GCc7v40DmqA",
      srcjo: "http://localhost:8080/img/2.02a34ac6.jpg",
      discriptjo: "action moves",
      srcvjo: "https://www.youtube.com/embed/ygUHhImN98w",
      namejo: "jocker",
      srcsu: "http://localhost:8080/img/3.cee2bd5f.jpg",
      srcvsu: "https://www.youtube.com/embed/OtXlekcPnmM",
      discriptsu: "cartoon moves",
      namesu: "sun",
      isactive: false,
      sr: "https://image.tmdb.org/t/p/original",
    };
  },
  inject: ["fun", "trialmovis"],
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  props: ["st"],
  mounted: function () {
    window.setTimeout(function () {
      window.setInterval(function () {
        let mu = $(".swiper-slide-active");
        if (mu) {
          $(".swiper-slide-active .content").animate({ left: "0px" }, 1000);
          $(".swiper-slide-active .content").css({ display: "flex" });
        }
      }, 3000);
    }, 1000);
  },
  methods: {
    async trialasync(id) {
      await this.trialmovis(id);
      this.$router.push({ name: "about", params: { filmid: id } });
    },
    itemhover() {
      $(".popup").css({ display: "flex" });
      $(".btn1").css({ display: "flex" });
    },
    itemhover2() {
      $(".popup").css({ display: "none" });
      $(".btn1").css({ display: "none" });
    },

    itemhover0() {
      $(".popup2").css({ display: "flex" });
      $(".btn2").css({ display: "flex" });
    },
    itemhover1() {
      $(".popup2").css({ display: "none" });
      $(".btn2").css({ display: "none" });
    },
    itemhover3() {
      $(".popup3").css({ display: "flex" });
      $(".btn3").css({ display: "flex" });
    },
    itemhover4() {
      $(".popup3").css({ display: "none" });
      $(".btn3").css({ display: "none" });
    },

    itemhover5() {
      $(".popup4").css({ display: "flex" });
      $(".btn4").css({ display: "flex" });
    },
    itemhover6() {
      $(".popup4").css({ display: "none" });
      $(".btn4").css({ display: "none" });
    },
    itemhover7() {
      $(".popup5").css({ display: "flex" });
      $(".btn5").css({ display: "flex" });
    },
    itemhover8() {
      $(".popup5").css({ display: "none" });
      $(".btn5").css({ display: "none" });
    },
    tolast(view, src, discrption, filmname, srcvl) {
      this.$router.push({
        name: view,
        query: {
          imgsrc: src,
          discrptione: discrption,
          name: filmname,
          video: srcvl,
        },
      });
    },
    tosun(view, src, discrption, filmname, srcvsu) {
      this.$router.push({
        name: view,
        query: {
          imgsrc: src,
          discrptione: discrption,
          name: filmname,
          video: srcvsu,
        },
      });
    },
    tojocker(view, src, discrption, filmname, srcvjo) {
      this.$router.push({
        name: view,
        query: {
          imgsrc: src,
          discrptione: discrption,
          name: filmname,
          video: srcvjo,
        },
      });
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
#head {
  align-self: end;
  margin-right: 20px;
  margin-block: 30px;
  color: black;
}
.progress {
  position: relative;
  height: 50px;
  border-radius: none;
  width: 100px;
  cursor: pointer;
  background-color: transparent;
  left: 20px;
}
.progress:hover .progress-bar {
  width: 100%;
}
.progress-bar {
  width: 50%;
  background-color: brown;
  border-radius: 2px;
  padding: 5px;
}
#textbtn {
  z-index: 5;
  position: fixed;
}
.checked {
  color: orange;
}
.swiper {
  width: 100%;
  height: 100%;
  position: relative;
  top: -60px;
  z-index: 2;
}
.condis {
  position: absolute;
  left: 0px;
  width: 400px;
}
.content {
  position: relative;
  overflow: hidden;
  left: -500px;
  display: none;
  flex-flow: column;
  justify-content: center;
  align-content: center;
}
.swiper-slide-active {
  color: aliceblue;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  filter: drop-shadow();

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide #item {
  display: block;
  width: 100%;
  height: 600px;
  object-fit: cover;
  gap: 100rem;
  border-radius: 5px;
}
.swiper-slide #item:hover {
  transform: scale(1.1);
  transition: all, 1s;
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
.btn1 {
  animation: btnani 2s infinite linear;
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
.btn5 {
  width: 50px;
  height: 50px;
  align-self: center;
  cursor: pointer;
  border: 2px solid orange;
  border-radius: 50%;
  justify-content: center;
  align-content: center;
  position: relative;
  align-self: center;
  right: auto;
  background-color: orange;
}
.btn5:hover {
  animation: btnani 2s infinite linear;
}
/*/mobile/*/
@media (max-width: 500px) {
  .swiper-slide #item {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
    gap: 100rem;
    border-radius: 5px;
  }
}
</style>
