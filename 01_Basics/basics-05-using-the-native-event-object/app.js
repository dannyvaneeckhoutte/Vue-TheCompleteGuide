const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			lastName: "",
			// fullName: "",
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				this.counter = 0;
			}
		},
		/* 		name(value) {
			if (value === "") {
				this.fullName = "";
			} else {
				this.fullName = value + " " + this.lastName;
			}
		},
		lastName(value) {
			if (value === "") {
				this.fullName = "";
			} else {
				this.fullName = this.name + " " + value;
			}
		}, */
	},
	computed: {
		fullName() {
			if (this.name === "" || this.lastName === "") {
				return "";
			} else {
				return this.name + " " + this.lastName;
			}
		},
	},

	methods: {
		/* 		// replaced by computed property fullName()
		outputFullname() {
			// If the input field is empty, return empty string, else return the full name
			if (this.name === "") {
				return "";
			} else {
				return this.name + " " + "Schwarzmüller";
			}
		}, */

		// Not needed, using v-model (2-way binding) instead to update name:
		setName(event) {
			this.name = event.target.value;
		},
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
		resetResult() {
			this.counter = 0;
		},
	},
});

app.mount("#events");
