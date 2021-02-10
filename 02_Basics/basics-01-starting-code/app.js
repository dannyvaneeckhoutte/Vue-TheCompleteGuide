const app = Vue.createApp({
	data() {
		return {
			courseGoalA: "The goal is A",
			courseGoalB: "The goal is B",
			courseGoalC: "<p>This is a paragraph</p>",
			courseLink: "https://v3.vuejs.org",
		};
	},
	methods: {
		outputGoal() {
			const randomNum = Math.random();
			if (randomNum < 0.5) {
				return this.courseGoalA;
			} else {
				return this.courseGoalB;
			}
		},
	},
});
app.mount("#user-goal");

/* const app = Vue.createApp({
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

app.mount("#user-goal"); */
