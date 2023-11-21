const fs = require('fs');

todos = {};
incrementId  = 4

const data = {
  getAllTodos: () => {
    return todos;
  },

  deleteTodoById: (id) => {
    const deletedTodo = todos[id];
    delete todos[id];
    data.save();
    return deletedTodo;
  },

  load: () => {
    try {
      const raw = fs.readFileSync('data/todos.json');
      todos = JSON.parse(raw);
    } catch (error) {
      console.error('Error loading JSON data:', error);
    }
  },

  save: () => {
    try {
      const raw = JSON.stringify(todos, null, 2);
      fs.writeFileSync('data/todos.json', raw);
    } catch (error) {
      console.error('Error saving JSON data:', error);
    }
  },
  create: ({title, description}) => {
     // wrote after the interview
    newTodo = {
        id: incrementId,
        title: title,
        description: description,
    };
    todos = {
        ...todos,
        [incrementId++]: newTodo
    }
    data.save();
    return newTodo;
  },

}

module.exports = { data };