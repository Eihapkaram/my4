<template>
  <div id="myfoot" class="container-fluid">
    <div class="con1">
      <ul>
        <li>move</li>
        <li>terial</li>
        <li>action</li>
      </ul>
    </div>
    <div class="con1">
      <ul>
        <li>drama</li>
        <li>filem</li>
        <li>fantazia</li>
      </ul>
    </div>
    <div class="con1">
      <ul>
        <li>move</li>
        <li>terial</li>
        <li>action</li>
      </ul>
    </div>
    <div class="follow" id="follow">
      <ul class="follow">
        <li>
          <a href="#" id="link1"
            ><label for="link1"><img src="../assets/facebook.png" /></label
          ></a>
        </li>
        <li>
          <a href="#" id="link2"
            ><label for="link2"><img src="../assets/twit.png" /></label
          ></a>
        </li>
        <li>
          <a href="#" id="link3"
            ><label for="link3"><img src="../assets/yout.png" /></label
          ></a>
        </li>
      </ul>
    </div>
    <div class="preves"><h5>جميع الحقوق محفوظه 2024</h5></div>
  </div>
</template>
<style scoped>
ul {
  list-style-type: none;
}
.con1 {
  position: relative;
  display: flex;
  flex-flow: row;
  background-color: transparent;
  width: 200px;
  align-self: center;
}
li {
  text-decoration: none;
}
#myfoot {
  background-color: rgb(28, 30, 34);
  color: #2c3e50;
  position: relative;
  margin-block-start: 40px;
  height: 300px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
.follow {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  position: relative;
  left: 50px;
}
.preves {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  position: relative;
  top: 4rem;
  left: -50px;
}
a img {
  cursor: pointer;
}
/*/desktop/*/
@media (max-width: 1366px) {
  .preves {
    top: 3rem;
  }
}
/*/tablet/*/
@media (max-width: 991px) {
  .preves {
    top: 2rem;
    left: 1rem;
  }
  #follow {
    left: -100px;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  .preves {
    top: -1rem;
    left: -2rem;
  }
  .con1 {
    position: relative;
    display: flex;
    flex-flow: column;
    background-color: transparent;
    width: 200px;
    align-self: center;
  }
  #myfoot {
    background-color: rgb(28, 30, 34);
    color: #2c3e50;
    position: relative;
    margin-block-start: 40px;
    height: 300px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
  }
}
</style>
<script>
export default {};
</script>
