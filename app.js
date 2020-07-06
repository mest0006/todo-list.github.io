
var storageKey = "todo-storage";
var list = [
  {
    id: 0,
    item: "water Flowers",
    completed: false
  },
  {
    id: 1,
    item: "morning walk",
    completed: false
  }
];
var app = new Vue({
  el: "#app",
  data: {
    todos: '',
    list: list
  },

  created () {
    this.list = JSON.parse(localStorage.getItem(storageKey) || '[]')
  },



  methods: {
    add: function () {
      this.list.push({
        id: 1,
        item: this.todos,
        completed: 'false'

      }),
        this.todos = ''
      localStorage.setItem(storageKey, JSON.stringify(this.list))

      
    },

    deleteItem: function (index) {
      this.list.splice(this.list.indexOf(index), 1)
      localStorage.setItem(storageKey, JSON.stringify(this.list))
    },

  },



})