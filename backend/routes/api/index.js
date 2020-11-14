const router = require('express').Router();



/* GET home page. */
router.get("/", (request, response) => {
  return response.status(200).json("backend-sucess");
}) 

module.exports = router;
