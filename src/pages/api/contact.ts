const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; }): void; new(): any; }; }; }) => {
    const body = req.body;
    console.log(body);
    res.status(200).json({ status: 'Ok' });
    
    const message = `
     Name: ${body.name}\r\n
     Email: ${body.email}\r\n
     Message: ${body.message}
`;

    const data = {
        to: 'kaicoleridge13@gmail.com',
        from: 'kai@coleridge.dev',
        subject: 'New message from contact form',
        text: message,
        html: message.replace(/\r\n/g, '<br>'), 
    };

    await mail.send(data);

    res.status(200).json({ status: 'Ok' });
};