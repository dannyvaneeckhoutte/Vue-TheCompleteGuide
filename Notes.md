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

### App properties

#### data

The function that returns a data object for the component instance.

#### methods

- Use with event binding OR data binding
- Data binding: Method is executed for every "re-render" cycle of the component
- Use for events or data that really needs to be re-evaluated every time

#### computed

- Use with data binding, not event binding
- Only re-evaluated if one of their "used values" changed
- Use for data that depends on other data

#### watch

- Not used directly in the template
- Watch any property, even computed
- Allows to run code in reaction to changed data (e.g. send http request etc...)
- Use for any non-data update you want to make
