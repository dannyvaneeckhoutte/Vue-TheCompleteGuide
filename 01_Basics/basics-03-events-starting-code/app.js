const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		add(num) {
			return (this.counter = this.counter + num);
		},
		remove(num) {
			return (this.counter = this.counter - num);
		},
		reset() {
			return (this.counter = 0);
		},
	},
});

app.mount("#events");
