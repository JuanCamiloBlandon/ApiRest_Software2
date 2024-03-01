const{response} = require('express');

const posts = [
    {
        id: 12345,
        title: 'My title',
        body: 'body here'
    },
    {
        id: 123456,     
            title: 'My title2',
            body: 'body here2'
        },
        {
        id: 1234567,
        title: 'My title3',
        body: 'body here3'
    }
]

const characters = [
    {
        "info": {
          "count": 826,
          "pages": 42,
          "next": "https://rickandmortyapi.com/api/character/?page=2",
          "prev": null
        },
        "results": [
          {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
              "name": "Earth",
              "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
              "name": "Earth",
              "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "episode": [
              "https://rickandmortyapi.com/api/episode/1",
              "https://rickandmortyapi.com/api/episode/2",
              // ...
            ],
            "url": "https://rickandmortyapi.com/api/character/1",
            "created": "2017-11-04T18:48:46.250Z"
          },
          // ...
        ]
      }
]

let tasks = [];

// Controlador para manejar las tareas
const taskController = {
    // Obtener todas las tareas
    getAllTasks: (req, res) => {
        res.json(tasks);
    },

    // Obtener una tarea por su ID
    getTaskById: (req, res) => {
        const task = tasks.find(task => task.id === parseInt(req.params.id));
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(task);
    },

    // Agregar una nueva tarea
    createTask: (req, res) => {
        const task = req.body;
        if (!task.name || !task.description || !task.dueDate) {
            return res.status(400).json({ message: 'Faltan campos obligatorios' });
        }
        task.id = tasks.length + 1;
        tasks.push(task);
        res.status(201).json(task);
    },

    // Actualizar una tarea existente
    updateTask: (req, res) => {
        const task = tasks.find(task => task.id === parseInt(req.params.id));
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        Object.assign(task, req.body);
        res.json(task);
    },

    // Eliminar una tarea
    deleteTask: (req, res) => {
        tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
        res.status(204).end();
    }
};


module.exports = taskController