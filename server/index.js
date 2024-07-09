const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const name = req.body.name
    const from = req.body.from
    const to = req.body.to
    const subject = req.body.subject
    const text = req.body.text
  
    const transporter = nodemailer.createTransport({
        host: "localhost",
        secureConnection : false, 
        port: 1025,
        tls: {
            ciphers: "SSLv3"
        },
    })
  
    const mailOptions = {
        from: 'contact@trouve-ton-artisan.com',
        to: to,
        subject: subject,
        text: `${name} veut vous contacter :
        
        ${text}

        Répondre à l'adresse suivante : ${from}`
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.status(200).send('Email sent successfully');
        }
    })
})

app.listen(port, () => {
    console.log(`Server listening at localhost:${port}`)
})