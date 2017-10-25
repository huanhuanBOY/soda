const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');
const markdown = require('marked');

router.use(bodyParser.json());
router.use('/weihuan', function(req, res){
    var blogName = req.query["name"];
    try {
        var data = fs.readFileSync(__dirname+'/dir/'+blogName+'.md', 'utf8');
        var markdownContent = data.toString();
        var htmlContent = markdown( markdownContent );
        res.send(htmlContent);
    } catch (error) {
        res.status(404);
        res.json({ message: 'api.not.found' });
    } finally {
    }
});
router.use('/index', function(req, res){
    var blogName = req.query["name"];
    try {
        var data = fs.readFileSync(__dirname+'/blog.html', 'utf8');
        res.send(data);
    } catch (error) {
        res.status(404);
        res.json({ message: 'api.not.found' });
    } finally {
    }
});
router.get('/getList', function(req, res){
    var blogName = req.query["name"];
    try {
        var data = fs.readdirSync(__dirname+'/dir/');
        res.send(data);
    } catch (error) {
        res.status(404);
        res.json({ message: 'api.not.found' });
    } finally {
    }
});

router.use('*', function(req, res){
  res.status(404);
  res.json({ message: 'api.not.found' });
});

module.exports = router;
