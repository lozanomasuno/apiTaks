const { Router } =  require('express');
const router = Router();

const tasks = require('../tasks.json');
console.log(tasks);

router.get('/', (req, res)=>{
    res.json(tasks);
});

module.exports = router;
