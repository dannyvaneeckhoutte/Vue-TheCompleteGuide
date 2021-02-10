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

Only use methods if you know you want to recalculate a value whenever anything changes, else use computed.
Methods to be mixed into the component instance. You can access these methods directly on the VM instance, or use them in directive expressions. All methods will have their this context automatically bound to the component instance.

#### computed

Computed properties are cached, and only re-computed on reactive dependency changes. Note that if a certain dependency is out of the instance's scope (i.e. not reactive), the computed property will not be updated.

#### watch

Are
