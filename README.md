![201498294-16befa1d-2140-495e-bcde-622e8b6e3ead](https://user-images.githubusercontent.com/51129378/218395019-17120b26-ad67-46fd-8860-5a01fa3a7cc1.png)

<h1>Coleridge.dev</h1>

### Source code to my personal website

#### Current featues:
- Developed with [NextJS](https://nextjs.org/) a poweful framework for building serverless applications
- Uses a React Hook for [Lanyard API](https://github.com/Phineas/lanyard) to fetch Discord Presence data to display Spotify status, online presence etc. A shoutout to [Phineas](https://github.com/Phineas) for developing this API
- Uses [TailWind CSS](https://tailwindcss.com/) to design the site. 
- Uses [SendGrid Twilio API](https://sendgrid.com/) to send contact form data relays it to my personal email. 

#### Upcoming changes:
- Implement light mode 
- Develop about page 
- Add top loading bar animation

##### Note: if the the homepage refreshes this is normal, this is because the hook needs to be re-rendered to fetch latest presence data. This will periodally run every minute
