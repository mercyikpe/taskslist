let Task = {

    props: [ 'task' ],

    template: `
    <div class="task">
      {{ task.body }}
    </div>  
    `
}

let Tasks = {
    components: {
        'task': Task
    },

    data () {
        return {
            tasks: [
                { id: 1, body: 'Pick a medium', done: false },
                { id: 2, body: 'Make multiples', done: false },
                { id: 3, body: 'Keep it simple', done: false },
                { id: 4, body: 'Meet the MIT', done: false },
                { id: 5, body: 'Start easy', done: false },
                { id: 6, body: 'break it down', done: false }
            ]
        }
    },

    template: `
        <div>
            <div class="tasks">
              <template v-if="tasks.length">
                  <task v-for="task in tasks" :key="task.id" :task="task"></task>
              </template>
              <span v-else>No Tasks 
                <btn type="button" class="btn add-task-button">Add task</btn> 
              </span>
            </div>

        </div>
        `
}

let app = new Vue({
    el: '#app',

    components: {
        'tasks': Tasks
    }
})
