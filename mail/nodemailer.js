import nodemailer from 'nodemailer'

const mail = async(user, password) =>{

    try {
        // Setup nodemailer with Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${user}`, // your Gmail address
      pass: `${password}`, // your Gmail password or an app-specific password
    },
  });


  const mailOptions = {
    from: `yearly <${user}>`,
    to: 'tamjidahmed644@gmail.com',
    subject: 'Monthly Email',
    text: `This is your Monthly email reminder! Monthly email sent Bangladesh Standard Time (BST) in : ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} and Email is ${user}`,
  };

  await transporter.sendMail(mailOptions);


  console.log(`Monthly email sent Bangladesh Standard Time (BST) in : ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} and Email is : ${user}`, );


} catch (error) {
    console.log(error)
}

}

export default mail