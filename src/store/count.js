import axios from "axios";
import { defineStore } from "pinia";
export const mystore = defineStore("mystore1", {
  state: () => ({
    count: "",
    singelmove: "",
    trial: "",
    singelTV: "",
    name: "eihap",
    allTV1: "",
    ALL: "",
  }),
  getters: {},
  actions: {
    async doget(filmid) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTc2NDlhOGQ0MWQ2ZGJmMjU5ZjY1ZThlMGY1NDczNCIsIm5iZiI6MTczMjcwMzA5NS42NDk5OTk5LCJzdWIiOiI2NzQ2ZjM3Nzc5NTg0N2U5OTM1NDUwZjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u6cHQ9ZvlRQoaC01MYZ4TcA4sAWzbrb82_TjoAKS8zQ",
        },
      };

      await fetch(
        `https://api.themoviedb.org/3/movie/${filmid}?language=en-US`,
        options
      )
        .then((res) => res.json())
        .then((res) => (this.singelmove = res))
        .catch((err) => console.error(err));
      console.log(this.singelmove);
    },

    async dogetAll() {
      await axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=e57649a8d41d6dbf259f65e8e0f54734"
        )
        .then((res) => {
          this.count = res.data;
        });
    },
    async dogetAlltv() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTc2NDlhOGQ0MWQ2ZGJmMjU5ZjY1ZThlMGY1NDczNCIsIm5iZiI6MTczMjcwMzA5NS42NDk5OTk5LCJzdWIiOiI2NzQ2ZjM3Nzc5NTg0N2U5OTM1NDUwZjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u6cHQ9ZvlRQoaC01MYZ4TcA4sAWzbrb82_TjoAKS8zQ",
        },
      };
      await fetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      )
        .then((res) => res.json())
        .then((res) => (this.allTV1 = res.results))
        .catch((err) => console.error(err));
    },
    async dogetTV(filmid) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTc2NDlhOGQ0MWQ2ZGJmMjU5ZjY1ZThlMGY1NDczNCIsIm5iZiI6MTczMjcwMzA5NS42NDk5OTk5LCJzdWIiOiI2NzQ2ZjM3Nzc5NTg0N2U5OTM1NDUwZjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u6cHQ9ZvlRQoaC01MYZ4TcA4sAWzbrb82_TjoAKS8zQ",
        },
      };

      await fetch(
        `https://api.themoviedb.org/3/tv/${filmid}?language=en-US`,
        options
      )
        .then((res) => res.json())
        .then((res) => (this.singelTV = res))
        .catch((err) => console.error(err));
    },
    async getTrialmovie(filmid) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTc2NDlhOGQ0MWQ2ZGJmMjU5ZjY1ZThlMGY1NDczNCIsIm5iZiI6MTczMjcwMzA5NS42NDk5OTk5LCJzdWIiOiI2NzQ2ZjM3Nzc5NTg0N2U5OTM1NDUwZjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u6cHQ9ZvlRQoaC01MYZ4TcA4sAWzbrb82_TjoAKS8zQ",
        },
      };

      await fetch(
        `https://api.themoviedb.org/3/movie/${filmid}/videos?language=en-US`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          this.trial = res.results;
          console.log(res.results);
        })
        .catch((err) => console.error(err));
    },
    async getTrialTv(tvid) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTc2NDlhOGQ0MWQ2ZGJmMjU5ZjY1ZThlMGY1NDczNCIsIm5iZiI6MTczMjcwMzA5NS42NDk5OTk5LCJzdWIiOiI2NzQ2ZjM3Nzc5NTg0N2U5OTM1NDUwZjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u6cHQ9ZvlRQoaC01MYZ4TcA4sAWzbrb82_TjoAKS8zQ",
        },
      };

      await fetch(
        `https://api.themoviedb.org/3/tv/${tvid}/videos?language=en-US`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          this.trial = res.results;
        })
        .catch((err) => console.error(err));
    },
    async ALLfun() {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTc2NDlhOGQ0MWQ2ZGJmMjU5ZjY1ZThlMGY1NDczNCIsIm5iZiI6MTczMjcwMzA5NS42NDk5OTk5LCJzdWIiOiI2NzQ2ZjM3Nzc5NTg0N2U5OTM1NDUwZjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.u6cHQ9ZvlRQoaC01MYZ4TcA4sAWzbrb82_TjoAKS8zQ",
        },
      };

      await fetch(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        options
      )
        .then((res) => res.json())
        .then((res) => {
          this.ALL = res.results;
          console.log(res.results);
        })
        .catch((err) => console.error(err));
    },
  },
});
