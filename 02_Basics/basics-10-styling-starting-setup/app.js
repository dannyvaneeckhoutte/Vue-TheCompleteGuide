const app = Vue.createApp({
	data() {
		return {
			boxASelected: false,
			boxBSelected: false,
			boxCSelected: false,
		};
	},
	methods: {
		boxSelected(box) {
			if (box === "A") {
				this.boxASelected = !this.boxASelected; // Toggles the true/false state of the box
				console.log("Box A Selected!");
			} else if (box === "B") {
				this.boxBSelected = !this.boxBSelected;
				console.log("Box B Selected!");
			} else if (box === "C") {
				this.boxCSelected = !this.boxCSelected;
				console.log("Box C Selected!");
			}
		},
	},
});
app.mount("#styling");
