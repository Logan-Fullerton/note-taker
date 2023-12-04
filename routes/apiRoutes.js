const router=require ('express').Router()
const util=require('util')
const fs=require('fs')
const readFileAsync=util.promisify(fs.readFile)

router.get('/notes',async function(req,res){
    const notes=await readFileAsync('./db/db.json')
    const parsedNotes=JSON.parse(notes)
    res.json(parsedNotes)
})
module.exports=router