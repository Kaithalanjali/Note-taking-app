// const validator=require('validator')
// console.log(validator.isEmail('anjalikaithal25@gmail.com'))



// const display=require('./notes.js')
// const displayit=display()
// console.log(displayit)


// const chalk=require('chalk');
//  import chalk from 'chalk';
// console.log(chalk.blue('Hello npm'));
// const greenMsg = chalk.green.inverse.bold('success!')
// console.log(greenMsg)



// const getNotes= require('./notes.js)
//  const msg = getNotes()
//  console.log(msg)
//  console.log(process.argv[2])

const notes= require('./notes.js')
const { string } = require('yargs')
const yargs=require('yargs')
yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'adds two things',
    builder:{
        title:{
            describe:'Note title',
            demandOption:false,
            type: string
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type: string
        }
    },
    handler(argv) {
       notes.addNote(argv.title, argv.body)
    }

})
yargs.command({
    command:'remove',
    describe:'remore the things',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:string
        },

    },
    handler(argv) {
      notes.removeNote(argv.title)
    }

})
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{

        title:{
            describe:'Note title',
            demandOption:true,
            type: string
        }
    },
    handler(argv) {
        console.log('Reading a note')
        notes.readnote(argv.title)
    }

})
yargs.command({
    command:'list',
    describe:'List your notes',
    handler() {
        console.log(chalk.blueBright.bold('Your notes are'))
        notes.listallnote()
    }

})

// console.log(yargs.argv)
yargs.parse()

