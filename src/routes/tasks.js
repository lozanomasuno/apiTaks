const { Router } =  require('express');
const router = Router();

const tasks = require('../tasks.json');

router.get('/', (req, res)=>{
    res.json(tasks);
});

module.exports = router;
