// new Vue({
//   el: "#app",
//   data() {
//     return{
//       goals: [],
//       enteredValue: ''
//     };
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredValue);
//       this.enteredValue= '';
//     }
//   }
// });

new Vue({
  el: "#user-goal",
  //data, methods = vue reserved terminology 
  data() {
    return{
      courseGoal: 'returned string',
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h2>Master vue and build amazing apps!</h2>',
      vueLink: 'https://vuejs.org/'
    };
  },
  // use methods to pass functions
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});


