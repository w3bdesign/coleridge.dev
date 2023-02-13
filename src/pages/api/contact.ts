const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; }): void; new(): any; }; }; }) => {
  const body = req.body;
  res.status(200).json({ status: 'Ok' });
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
`;

  const data = {
    to: process.env.EMAIL_ID,
    from: 'kai@coleridge.dev',
    subject: 'New message from Contact Form',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  try {
    await mail.send(data);
    return { success: true}
  }
  catch (error) {
    return { success: false}
  }
};
