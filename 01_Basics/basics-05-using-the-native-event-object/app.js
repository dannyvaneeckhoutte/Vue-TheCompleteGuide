const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
		};
	},
	methods: {
		// Not needed, using v-model (2-way binding) instead to update name:
		// setName(event) {
		// 	this.name = event.target.value;
		// },
		resetInput() {
			this.name = "";
		},
		add(num) {
			this.counter = this.counter + num;
			// this.counter++;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
	},
});

app.mount("#events");
