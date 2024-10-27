Vue.createApp({
  data() {
    return {
      name: "Md Nadeem Asgar",
      age: 28,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&s",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandomNumber() {
      return Math.floor(Math.random() * 10);
    },
  },
}).mount("#assignment");
