const { Router } =  require('express');
const router = Router();

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

module.exports = router;
