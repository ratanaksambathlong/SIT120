window.onload = function() {
    Vue.component('todo-item', {
        props: ['todo'],
        template: `
            <p>
                <input type="checkbox" :id="todo.key" v-model="todo.complete">
                <label for="key" @click="todo.complete = !todo.complete">
                    {{ todo.text }}
                </label>
            </p>`
    })
    

    var app = new Vue({
        el: '#todo-app',
        data() {
            return {
                newToDoText : '',
                toDoList: [
                    {id: "task1", text: "Assignment 1", complete: false},
                    {id: "task2", text: "Assignment 2", complete: false},
                    {id: "task3", text: "Assignment 3", complete: false},
                          ], 
                   }
               },
                      });
}


