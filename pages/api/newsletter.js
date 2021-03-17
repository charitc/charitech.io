const sgClient = require("@sendgrid/client");
sgClient.setApiKey(process.env.SENDGRID_API_KEY_LIST);

export default async function (req, res) {
  const user_email = req.body.email;

  function validateEmail(user_email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(user_email).toLowerCase());
  }

  if (validateEmail(user_email)) {
    const data = {
      list_ids: ["a86b54de-f004-441e-91b6-859f52e3f771"],
      contacts: [
        {
          email: user_email,
        },
      ],
    };
    const request = {};
    request.body = data;
    request.method = "PUT";
    request.url = "/v3/marketing/contacts";

    try {
      await sgClient.request(request);
      res.status(200).send("Message sent successfully.");
    } catch (error) {
      console.log("ERROR", error);
      res.status(400).send("Message not sent.");
    }
  } else {
    res.status(400).send("No valid email");
  }
}
