const { Router } =  require('express');
const router = Router();
const _ =require('underscore');
const tasks = require('../tasks.json');

router.get('/', (req, res)=>{
    res.json(tasks);
});

router.put('/:id', (req, res)=>{
    const {id} = req.params;
    const { title, importance, project, analist} = req.body;
    if( title && importance && project &&  project) {
      _.each(tasks, (task, i)=> {
         if(task.id == id){
            task.title = title;
            task.importance = importance;
            task.project = project;
            task.analist = analist;            
         }        
      });      
      res.json(tasks);
    } else {
        res.status(500).json({error: 'there was an error.'});
    }   
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
