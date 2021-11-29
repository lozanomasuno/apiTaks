const { Router } = require('express');
const router = Router();

const analist = require('../analist.json');
console.log(analist);

router.get('/', (req, res)=>{
    res.json(analist);
});

module.exports = router;