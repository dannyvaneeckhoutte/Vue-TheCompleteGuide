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
				this.boxASelected = true;
				console.log("Box A Selected!");
			} else if (box === "B") {
				this.boxBSelected = true;
				console.log("Box B Selected!");
			} else if (box === "C") {
				this.boxCSelected = true;
				console.log("Box C Selected!");
			}
		},
	},
});
app.mount("#styling");
