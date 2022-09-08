const app = new Vue({
  el: "#app",
  data: {
    message: "Week 4 Task 1",
  },
});

var app2 = new Vue({
  el: "#app2",
  data: {
    true: true,
    message: "this line will show if the condition is set to 'true'",
  },
});

var app3 = new Vue({
  el: "#app3",
  data: {
    false: false,
    message: "this line will show if the condition is set to 'false'",
  },
});

var app4 = new Vue({
  el: "#app4",
  data: {
    show: true,
    message: "the line renders text using 'show'",
  },
});

var app5 = new Vue({
  el: "#app5",
  data: {
    name: "Josh",
    age: "23",
    job: "waiter",
  },
});
