require('../style/main.less');
var sub = require('./sub');
var app = document.createElement('div');
app.innerHTML = '<h1>Hello World f</h1>';
app.appendChild(sub());
document.body.appendChild(app);
