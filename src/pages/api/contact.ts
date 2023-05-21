const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (
  req: { body: any },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { status: string }): void; new (): any };
    };
  }
) => {
  const body = req.body;

  const message = `
  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; font-family: sans-serif; font-size: 16px; line-height: 1.5; color: #333; margin: 20px 0;">
    <h1 style="margin-top: 0; color: #333;">New message</h1>
    <p><strong>Name:</strong> ${body.name}</p>
    <p><strong>Email:</strong> ${body.email}</p>
    <p><strong>Message:</strong> ${body.message}</p>
  </div>
`;

  const data = {
    to: process.env.EMAIL_ID,
    from: {
      email: 'kai@coleridge.dev',
      name: 'Coleridge.dev',
    },
    subject: "New message",
    text: message,
    html: message.replace(/\r\n/g, "<br>")
  };

  try {
    await mail.send(data);
    res.status(200).json({ status: "Ok" });
    return { success: true };
  } catch (error) {
    res
      .status(500)
      .json({ status: "ERROR 500: INTERNAL_SERVER_ERROR An error occured while sending request" });
    res
      .status(504)
      .json({ status: "ERROR 504: BAD_GATEWAY An error occured while sending the request" });
  }
};
