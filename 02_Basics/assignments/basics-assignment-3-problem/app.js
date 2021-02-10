const app = Vue.createApp({
	data() {
		return {
			number: 0,
		};
	},

	methods: {
		addNumber(num) {
			this.number = this.number + num;
		},
		// manual reset
		resetNumber() {
			this.number = 0;
		},
	},

	computed: {
		result() {
			// Show "Not there yet" until you reach a result of exactly 37
			if (this.number < 37) {
				return "Not there yet";
			} else if (this.number === 37) {
				return this.number;
			} else {
				// Show "Too much!" if the result is greater than 37
				return "Too much!";
			}
		},
	},

	watch: {
		// Watch for changes in "result" and reset the value to 0 after 5 seconds
		result() {
			const that = this;
			setTimeout(function () {
				that.number = 0;
			}, 5000);
		},
	},
});
app.mount("#assignment");
