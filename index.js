import express from 'express'
import {Agenda} from 'agenda'
import email from './mail/nodemailer.js'
import * as dotenv from 'dotenv' 
import axios from 'axios'


dotenv.config()

const port = process.env.PORT || 8000

const app = express()


//json formate
app.use(express.json())

//disable x-powered-by;
app.disable('x-powered-by');


const mongodb = process.env.MONGO_URI
const URL = process.env.URL


const fetchData = async () => {
  try {
    const response = await axios.get(URL);
    console.log('response', response.data);
  } catch (error) {
    console.log(error.message);
  }
};

app.get('/', async (req, res) => {
  try {
    res.status(201).send({ Request: "HTTP request send success", Time: `Bangladesh standard time ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })}` });
    
    
  } catch (error) {
    console.log(error);
  }
});




 

// Connect to MongoDB
const agenda = new Agenda({ db: { address:  mongodb} });

//here is main code
agenda.define('sendEmail', async (job) => {

    email('nishitaislam2075@gmail.com', process.env.NISHITAISLAM2075)
    email('kona2075@gmail.com', process.env.KONA2075)
    email('tamjidahmed80@gmail.com', process.env.TAMJIDAHMED80 )
    email('imemonkhan0@gmail.com', process.env.IMEMONKHAN0)
    email('tamjida387@gmail.com', process.env.TAMJIDA387)
    email('hometv121121@gmail.com', process.env.HOMETV121121)
    email('atamjid327@gmail.com', process.env.ATAMJID327)
    email('ahmedtamjid67@gmail.com', process.env.AHMEDTAMJID67)
    email('ahmedtamjid245@gmail.com', process.env.AHMEDTAMJID245)



  });
  agenda.define('sendRequest', async (job)=>{
    await fetchData();
  })








  await agenda.start();
  await agenda.every('1 day', 'sendEmail');

await agenda.every('1 minute', 'sendRequest');




app.listen(port, ()=>{
    console.log(`port connected to ${port}`)
})