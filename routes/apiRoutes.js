const router=require ('express').Router();
const util=require('util');
const fs=require('fs');
const { uuid } = require('uuidv4');
const readFileAsync=util.promisify(fs.readFile);
const writeFileAsync=util.promisify(fs.writeFile)

router.get('/notes',async function (req,res){
    const notes=await readFileAsync('./db/db.json')
    const parsedNotes=JSON.parse(notes)
    res.json(parsedNotes)
})

router.post('/notes',async function(req,res){
    const notes=await readFileAsync('./db/db.json')
    const parsedNotes=JSON.parse(notes)
    var newNote={title:req.body.title, text:req.body.text,id:uuid()}
    parsedNotes.push (newNote)
    const updatedNotes=await writeFileAsync('./db/db.json',JSON.stringify(parsedNotes))
    res.json (updatedNotes)
})

module.exports=router