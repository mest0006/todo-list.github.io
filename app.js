
var storageKey = "todo-storage";
var list = [
  {
    id: 0,
    item: "water plants",
    completed: false
  },
  {
    id: 0,
    item: "feed cat",
    completed: false
  }
];
var app = new Vue({
  el: "#app",
  data: {
    todos: '',
    list: list
  },




  methods: {
    add: function () {
      this.list.push({
        item: this.todos,
        completed: 'false',
        id: 1
      }),
        this.todos = ''
      localStorage.setItem(storageKey, JSON.stringify(this.list))

    },

    deleteItem: function (index) {
      this.list.splice(this.list.indexOf(index), 1)

    },

  },



})