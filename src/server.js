const express = require('express');
const app = express();
const port = 8080;
const skillsRouter = require('./routes/skills.route');

app.get('/', (req,res)=>{
    res.send("Skill Lab is Alive!")
});
app.use('',skillsRouter);
app.listen(port, ()=>{
console.log(`Student Skill Tracker 1.0 Listening on ${port}`)
})