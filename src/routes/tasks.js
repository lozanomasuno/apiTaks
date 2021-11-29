const { Router } =  require('express');
const router = Router();
const _ =require('underscore');
const tasks = require('../tasks.json');

router.get('/', (req, res)=>{
    res.json(tasks);
});

router.post('/', (req, res)=>{
    const { title, importance, project, analist} = req.body;
    if(title && importance && project &&  analist){
        const id = tasks.length + 1;
        const newTask = {...req.body, id};
        tasks.push(newTask);
        res.json(tasks);
    }else{
        res.send('wrong request');
    }
})

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    _.each(tasks, (task, i)=>{
        if(task.id == id){
            tasks.splice(i, 1);
        }
    })
    res.send('deleted');
});

module.exports = router;
