# V O AI P

V O AI P is an interactive voice response system that utilizes Google Generative AI to answer user questions via telephone. It records user inquiries and provides responses using Twilio's API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive voice response system
- Records user questions
- Generates answers using Google Generative AI
- Supports continuous interaction with the user

## Technologies Used

- Node.js
- Express.js
- Twilio API
- Google Generative AI API

## Installation
**Clone the repository:**
```sh
    git clone git@github.com:Sumit189/voAIp.git
```

**Install dependencies:**
```sh
    npm install
```

**Set up environment variables:**
```sh
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    GENERATIVE_AI_API_KEY=your_gemini_api_key
    PORT=3000
```

**Start the server:**
```sh
    npm start
```

**Set up Twilio webhook:**
- Set up a new Twilio phone number
- Set the webhook URL to NGROK_URL/voice
