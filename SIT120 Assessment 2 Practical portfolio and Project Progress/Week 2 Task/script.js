let vue = new Vue({
    el: '#app',
    data: {
        todos: [
            { title: 'Viewed the video', checked: false },
            { title: 'Interacted with the map', checked: false },
            { title: 'Checked the date', checked: false },
        ],
    },
});

function carTypes (name) {
    if (name = 'Honda') {
        return name;    
    } else {
        return "Sorry we don't sell" + name + ".";
    }
}