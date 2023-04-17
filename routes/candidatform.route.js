const express = require('express');
const { Addcandidatform, Findcandidatform, FindSinglcandidatform, Updatecandidatform} = require('../controllers/candidatform.controller');
const router = express.Router()


router.post('/candidatform', Addcandidatform)


router.get('/candidatform', Findcandidatform)
router.get('/candidatform/:id', FindSinglcandidatform)



router.put('/candidatform/:id', Updatecandidatform)

/* add user */


module.exports = router;