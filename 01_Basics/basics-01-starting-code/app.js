const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course an learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      courseGoalC: "<h3>This is a h3 heading!</h3>",
      vueLink: "https://v3.vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA; // this keyword in Vue has acces to colmplete vue app
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
