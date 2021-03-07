const sgMail = require("@sendgrid/mail");

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { firstname, lastname, email, subject, country, message } = req.body;

  const content = {
    to: {
      email: "hello@charitech.io",
      name: "charitech.io",
    },
    from: {
      email: "site@charitech.io",
      name: "charitech.io",
    },
    reply_to: {
      email: email,
      name: firstname,
    },
    subject: `${firstname} - ${subject}`,
    text: message,
    html: `
           <p>Firstname: ${firstname}</p> 
           <p>Lastname: ${lastname}</p> 
           <p>Mail: ${email}</p> 
           <p>Subject: ${subject}</p>
           <p><b>Message</b>:</p>
           <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
