<template>
  <nav class="navbar">
    <a class="navbar-brand">MOVIE</a>
    <router-link v-for="(link, i) in links" :key="i" :to="link.path"
      >{{ link.meta.titel }}
    </router-link>
    <form
      id="searchfor"
      class="d-flex"
      role="search"
      @submit.prevent="dosearch()"
    >
      <input
        name="search"
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button @click="add()" class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  </nav>
  <div class="row">
    <span class="xclose" id="closespan" @click="colse">&#9932;</span>
    <div class="col-lg-3" id="result">
      <div id="swip" v-for="ruslt in this.searchresalt" :key="ruslt.id">
        <img id="item" :src="sr + '/' + ruslt.poster_path" />
        <div class="popupp" id="popup">
          <div class="coninform">
            <span class="type">{{ ruslt.original_language }}</span>
            <span class="riting"
              >{{ ruslt.vote_average }} <span class="fa fa-star checked"></span
            ></span>
            <span class="type2">web-DL</span>
          </div>
          <img
            @click.prevent="trialasync(ruslt.id)"
            class="btn1"
            id="btnnav"
            src="../assets/play.png"
          />
          <h3 id="movename">{{ ruslt.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
nav.navbar {
  display: flex;
  flex-flow: row, wrap;
  justify-content: flex-end;
  align-content: center;
  padding: 10px;
  gap: 50px;
  background-color: transparent;
  z-index: 10;
}
.navbar-brand {
  left: -50px;
  position: relative;
  color: salmon;
}
.btn.btn-outline-success:hover {
  background-color: brown;
  border-color: brown;
}
.row {
  display: flex;
  --bs-gutter-x: none;
}
#result {
  display: ;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  z-index: 10;
  border-radius: 100px;
  top: 100px;
  width: 100%;
  transition: all, 2s;
  background-color: rgba(255, 255, 255, 0.904);
  height: auto;
  overflow-y: scroll;
  backdrop-filter: blur(2px);
}
#imgcard {
}
#closespan {
  display: none;
  position: relative;
  top: 0px;
  z-index: 12;
  width: 50px;
  right: 0px;
  cursor: pointer;
  font-size: 100px;
  color: brown;
}
#swip {
  text-align: center;
  font-size: 18px;
  background: transparent;
  filter: drop-shadow();
  height: 50%;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.checked {
  color: orange;
}

#swip #item {
  width: 18rem;
  object-fit: cover;
  gap: 2rem;
  border-radius: 5px;
  position: relative;
}
#swip #item:hover {
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
  align-items: center;
  position: relative;
  align-self: center;
  top: -50px;
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
  color: rgb(255, 250, 250);
  top: 300px;
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
  position: relative;
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
  right: auto;
  height: 430px;
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
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/mobile/*/
@media (max-width: 500px) {
  .navbar-brand {
    left: -40px;
    position: relative;
    color: salmon;
  }
  /* div poppup*/
  #swip div {
    height: 12rem;
  }
  .popupp {
    display: none;
    background-color: rgba(0, 0, 0, 70%);
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    right: auto;
    height: 200px;
    width: 8rem;
  }
  .xclose {
    position: relative;
    top: 690px;
    left: 0px;
    cursor: pointer;
    font-size: 80px;
    color: brown;
  }
  #swip #item {
    display: flex;
    align-items: center;
    width: 18rem;
    object-fit: cover;
    gap: 2rem;
    margin-right: 5px;
    border-radius: 5px;
    position: relative;
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
  #btnnav {
    width: 50px;
    height: 50px;
    display: ;
    cursor: pointer;
    border: 2px solid orange;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
    align-self: center;
    top: 100px;
    right: auto;
    background-color: orange;
  }
}
/*/tablet/*/
@media (max-width: 991px) {
  .popupp {
    display: none;
    background-color: rgba(0, 0, 0, 70%);
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    right: auto;
    height: 430px;
    width: 290px;
  }
  .navbar-brand {
    left: -10px;
    position: relative;
    color: salmon;
  }
  #result {
    display: none;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-start;
    position: absolute;
    z-index: 10;
    border-radius: 100px;
    top: 350px;
    left: -10px;
    height: 100%;
    width: 100%;
    transition: all, 2s;
    overflow: scroll;
  }
  #closespan {
    position: relative;
    top: 50px;
    left: 700px;
    cursor: pointer;
    font-size: 80px;
    color: brown;
  }
  #swip #item {
    display: flex;
    align-items: center;
    width: 18rem;
    object-fit: cover;
    gap: 2rem;
    margin-right: 5px;
    border-radius: 5px;
    position: relative;
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
  .btn1 {
    width: 50px;
    height: 50px;
    display: ;
    cursor: pointer;
    border: 2px solid orange;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
    align-self: center;
    top: 150px;
    right: auto;
    background-color: orange;
  }
}
</style>
<script>
import { mapActions, mapState } from "pinia";
import { mystore2 } from "../store/index";
export default {
  data() {
    return {
      links: [],
      searchresalt: "",
      todolist: [],
      sr: "https://image.tmdb.org/t/p/w500",
    };
  },
  inject: ["fun", "trialmovis"],
  props: ["st", "sz"],
  computed: {
    ...mapState(mystore2, ["result"]),
  },
  methods: {
    ...mapActions(mystore2, ["getruslt"]),
    async trialasync(id) {
      await this.trialmovis(id);
      this.$router.push({ name: "about", params: { filmid: id } });
      this.getruslt();
    },
    dosearch() {
      const search_form = document
        .getElementById("searchfor")
        .search.value.toLowerCase();
      const filterdata = this.st.results.filter((el) => {
        return el.title.toLocaleLowerCase().includes(search_form);
      });
      this.searchresalt = filterdata;
      console.log(filterdata);
      if (search_form) {
        window.result.style.display = "flex";
        window.closespan.style.display = "none";
        window.closespan.style.display = "inline";
      }
    },
    async add() {
      await localStorage.setItem("ser", JSON.stringify(this.searchresalt));
    },
    updetetodo() {
      if (localStorage.getItem("ser")) {
        this.todolist = JSON.parse(localStorage.getItem("ser"));
      }
    },
    colse() {
      window.closespan.style.display = "none";
      window.result.style.display = "none";
    },
  },
  async mounted() {
    this.links = this.$router.options.routes;
    this.updetetodo();
    localStorage.setItem("ser", JSON.stringify(this.searchresalt));
  },
};
</script>
