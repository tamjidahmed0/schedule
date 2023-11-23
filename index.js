import express from 'express'
import {Agenda} from 'agenda'
import email from './mail/nodemailer.js'


const port = process.env.PORT || 8000

const app = express()


//json formate
app.use(express.json())

//disable x-powered-by;
app.disable('x-powered-by');


// LUfOTarSzCLuvucu

// mongodb+srv://tamjid:<password>@schedule.eaawjpi.mongodb.net/?retryWrites=true&w=majority

// Connect to MongoDB
const agenda = new Agenda({ db: { address: 'mongodb+srv://tamjid:LUfOTarSzCLuvucu@schedule.eaawjpi.mongodb.net/agendaDB?retryWrites=true&w=majority' } });

//here is main code
agenda.define('sendEmail', async (job) => {

    email('nishitaislam2075@gmail.com', 'ogwintllofwbpahb')



  });


  await agenda.start();
  await agenda.every('1 minutes', 'sendEmail');



app.listen(port, ()=>{
    console.log(`port connected to ${port}`)
})