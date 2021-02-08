# Personal Notes

## Basics

### App structure

```html
<section id="user-goal">
	<h2>My Course Goal</h2>
	<p>{{ courseGoalA }}</p>
	<p>{{ courseGoalB }}</p>
	<p>{{ outputGoal() }}</p>
	<div v-html="courseGoalC"></div>
	<!-- In attributes we use v-bind: -->
	<p>Learn more <a v-bind:href="courseLink">about Vue</a></p>
</section>
```

```js
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
```
