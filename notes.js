const { default: chalk } = require('chalk');
const fs=require('fs');
const getNote=()=>{
    return "Your Notes ......"
}

//Adding the notes
const addNote=(title,body)=>{
    const notes=loadnotes();
    const duplicate=notes.filter((note)=>note.title===title);
    if(!duplicate.length){
        notes.push({
            title:title,
            body:body
        })
        console.log(chalk.green.inverse.bold("Added a new Note"));
        //console.log(notes);
        saveNotes(notes);
    }else{
        console.log(chalk.red.bold.inverse("This is already in the Notes!"));
    }
}

//Saving the Final Notes
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

//Previous Notes
const loadnotes=()=>{
    try{
        const data=fs.readFileSync('notes.json','utf-8');
        return JSON.parse(data);
    }catch(e){
        return [];
    }
}


//Removing The Notes

 const removeNote=(title)=>{
    const notes=loadnotes();
    const notesToKeep=notes.filter((note)=>note.title!==title);
    if(notesToKeep.length===notes.length){
        console.log(chalk.red.bold.inverse("NO Note Found"));
    }else{
        console.log(chalk.green.bold.inverse("Note is Finally Removed"));
    }
    saveNotes(notesToKeep);
    //console.log(notesToKeep);
 }


//Listing the Notes
const ListNote=()=>{
    const note=loadnotes();
    console.log(chalk.green.bold.inverse('Your Notes'));
    note.forEach((note)=>{
        console.log(chalk.bold.red.inverse(note.title+":=>"+note.body));

    })
}

//Reading the Notes
const ReadNote=(title)=>{
    const notes=loadnotes();
    const Read=notes.find((note)=>note.title===title);
    if(!Read){
        console.log(chalk.red.inverse.bold("No Notes Found"));
    }else{
        console.log(chalk.green.inverse.bold(Read.title+":=>"+Read.body));
    }
}

//Exporting the Modules
module.exports={
    getNote : getNote,
    addNote : addNote,
    removeNote:removeNote,
    ListNote:ListNote,
    ReadNote:ReadNote
};