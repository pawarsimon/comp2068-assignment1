const nodemailer = require('nodemailer');

exports.sendemail = (req, res) => {

      nodemailer.createTestAccount((err, account) => {
        const transporter = nodemailer.createTransport({
          host: "smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "c876dcc0fad599",
            pass: "eb19cd57c20eb0"
          }
        });
    
        const mailOptions = {
          from: req.body.email,
          to: 'simonpawar4@gmail.com', 
          subject: 'message from portfolio contact form', 
          text: req.body.message,
          html: `<b>${req.body.message}</b>`,
        };
    
        
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
      });
    
    res.redirect('/');
  };