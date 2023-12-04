const express= require('express');
// const apiRoutes=('./routes/apiRoutes')
const htmlRoutes=('./routes/htmlRoutes')

const app=express()
const port=3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use ('/api',apiRoutes)
app.use ('/',htmlRoutes)
app.listen(port,function(){console.log('server running')})