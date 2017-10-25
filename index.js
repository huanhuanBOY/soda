const express = require('express');
const path = require('path');
const compression = require('compression');
const blogs = require('./Blogs');
const app = express();

const port = process.env.PORT || 8088;

app.use(compression());
app.use('/blogs', blogs);
app.use('/web', express.static('./sodaWEB'));
app.listen(port, '0.0.0.0', function() {
// console.log(`server started at ${port}`);
});