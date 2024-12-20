<template>
  <router-view />
  <FooterSiction />
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*background-image: url("../src/assets/bg3.jpg");
  object-fit: cover;
  background-blend-mode: screen;
  background-position: center;
  background-clip: border-box;
  background-origin: content-box;
  background-attachment: local;*/
  background-color: rgb(28, 30, 34);
  a {
    text-decoration: none;
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: brown;
    }
  }
  /*/desktop/*/
  @media (max-width: 1366px) {
    #closespan {
      top: 350px;
      left: 680px;
    }
  }
  /*/tablet/*/
  @media (max-width: 991px) {
    #closespan {
      top: 250px;
      left: 680px;
    }
  }
  /*/mobile/*/
  @media (max-width: 500px) {
    #swip #item {
      display: block;
      width: 8rem;
      height: auto;
      object-fit: cover;
      border-radius: 5px;
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
      width: 8rem;
    }
    #closespan {
      top: -50px;
      left: 0px;
    }
    .btn1 {
      width: 50px;
      height: 50px;
      cursor: pointer;
      border: 2px solid orange;
      border-radius: 50%;
      justify-content: center;
      align-content: center;
      position: fixed;
      top: 100px;
      align-self: center;
      right: auto;
      background-color: orange;
    }
    #informheader {
      align-self: flex-start;
      left: 210px;
      width: 200px;
    }
    #links ul {
      display: flex;
      flex-flow: row, wrap;
      justify-content: space-between;
      align-content: center;
    }
    #links {
      margin-inline-end: 30px;
    }
  }
}
</style>
<script>
import FooterSiction from "../src/components/FooterSiction.vue";
export default {
  components: {
    FooterSiction,
  },
};
</script>
