const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-message-form', async (req, res) => {
    const {name, email, message} = req.body;
    const recibidor = 'horaios.contact@gmail.com';
    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
        </ul>
        <p>${message}</p>
    `;
    console.log(contentHTML);
    res.send({message: 'Message received', data: req.body});
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'horaios.contact@gmail.com',
            pass: 'hicyyxuppbvvcuvs'
        }
    });

    const info = await transporter.sendMail({
        from: "'Horaios Server' <horaios.contact@gmail.com",
        to: recibidor,
        subject: 'Website contact form',
        html: contentHTML
    });

    console.log('Message sent', info.messageId);
    
})

module.exports = router;