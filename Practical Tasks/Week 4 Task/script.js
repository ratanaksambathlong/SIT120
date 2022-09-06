const app = new Vue({
  el: "#app",
  data: {
    message: "Hello!",
  },
});

var app2 = new Vue({
  el: "#app2",
  data: {
    if: true,
    message: "This line will show if the condition is set to 'true'",
  },
});

var app3 = new Vue({
  el: "#app3",
  data: {
    if: false,
    message: "This line will show if the condition is set to 'false'",
  },
});

var app4 = new Vue({
  el: "#app4",
  data: {
    show: true,
    message: "The line renders text using show",
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
