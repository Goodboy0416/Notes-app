const chalk =require ('chalk');
const note=require('./notes');
const yargs=require('yargs');
const notes=require('./notes');
//const msg=note();
console.log(chalk.inverse.bold.blue("gaurav mehta"));

//Command for Adding the Notes

yargs.command({
    command:'add',
    describe:'Adding a Note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})

//Command for Removing the Notes

yargs.command({
    command:'remove',
    describe:'Removing a Note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

//Command for Listing the Note

yargs.command({
    command:'list',
    describe:'Listing your Note',
    handler(){
        notes.ListNote()
    }
})

//Command For Reading the Notes

yargs.command({
    command:'read',
    describe:'Reading your Note',
    builder:{
        title:{
            describe:'read',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.ReadNote(argv.title);
    }
})

//yargs basically is advance functionality of command line

yargs.parse();


