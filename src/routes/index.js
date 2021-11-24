const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=>{
    const data = {
        "name": "Fazt",
        "website": "faztweb.com"
    };
    
    res.json(data);
})

module.exports = router;