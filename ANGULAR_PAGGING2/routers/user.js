var express = require('express');

var router = express.Router();

router.get('/', function (req,res) {
   res.render('index.ect');
});
router.post('/getuser', function (req, res) {
   var take = req.body.take;
   var skip = req.body.skip;
   var typeOrder = req.body.typeOrder;
   var nameOrder = req.body.nameOrder;
   var orderBy = nameOrder + ' ' + typeOrder;
   db.user.findAll({ offset: skip, limit: take, order:orderBy }).then(function (data) {
      db.user.findAndCountAll().then(function (rs) {
         res.json({
            total:rs.count,
            data:data
         })
      })
   });
});
router.delete('/getuser', function (req, res) {
   console.log(req.body.id)
   db.user.destroy({
      where:{
         id:parseInt(req.body.id)
      }
   }).then(function (data) {
      console.log(data)
      res.json({success:data});
   })
});
module.exports = router;