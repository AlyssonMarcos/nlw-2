// Server
const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess} = require('./pages');

// Set up nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

// Sever start and configuration
server
// Receives req.body data
.use(express.urlencoded({extended: true}))
// Set up files statics
.use(express.static('public'))
// Application routes
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.get('/page-success', pageSuccess)
// Start the server
.listen(5500);