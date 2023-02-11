const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { status: string; }): void; new(): any; }; }; }) => {
    const body = req.body;
    res.status(200).json({ status: 'Ok' });

    if (!body.name || !body.email || !body.message) {
        return res.status(400).json({ status: 'Bad Request' });
    }

    
    const message = `
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <div class="divide-y divide-gray-300/50">
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <b><h1>📨 You've got mail </h1></b>
          <ul class="space-y-4">
            <li class="flex items-center">
              <h3>
              Name: ${body.name}\r\n
                </h3>
            </li>
            <li class="flex items-center">
              <h3>
              Email: ${body.email}\r\n
              </h3>
            </li>
            <li class="flex items-center">
              <h3>
              Message: ${body.message}
              </h3>
        </div>
      </div>
    </div>
  </div>
</div>
     
`;

    const data = {
        to: process.env.EMAIL_ID,
        from: 'kai@coleridge.dev',
        subject: 'New message from contact form',
        text: message,
        html: message.replace(/\r\n/g, '<br>'), 
    };

    await mail.send(data);

    res.status(200).json({ status: 'Ok' });
};