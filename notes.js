const fs=require('fs')
// const getNotes=function(){return('Your notes...')}
const chalk=require('chalk');
//  import chalk from 'chalk';
const addNote= function  (title, body) {
    const notes=loadNotes()
     const duplicate=notes.filter((note)=>note.title===title)
     if (duplicate.length===0) {
         
         notes.push({
             title:title,
             body:body
         })
         saveNotes(notes)
         console.log('New note added')
     } else {
         console.log('Sorry! title already taken')
     }

}
const removeNote= (title)=>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>  note.title!==title);
    if (notes.length==notesToKeep.length) {

        const redMsg=chalk.red.bold('Sorry, note does not exist')
        console.log(redMsg)
    
    } else {
        const greenMsg = chalk.green.bold('Your note have been removed successfully!')
         console.log(greenMsg)
         saveNotes(notesToKeep)
    }
}
const saveNotes=(notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes=()=>{
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON= dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
        
     catch (e) {
    return []
     }
    };
    const listallnote=()=>{
        const notes=loadNotes()
         notes.forEach((note)=>{ 
            console.log(note.title)
        })
    }
    const readnote=(title)=>{
        const notes=loadNotes()
        const found=notes.find((note)=>note.title===title)
        if(found==undefined)
        {
            console.log(chalk.red('Note not found'))
        }
        else{

            console.log(chalk.bgYellowBright(found.title) )
            console.log(found.body)
        }

    }
      
module.exports={
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listallnote: listallnote,
    readnote:readnote
};