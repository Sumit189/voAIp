import { validateRequest } from 'twilio';

const TwilioAuth = {
    twilioAuthMiddleware: (req, res, next) => {
        const twilioSignature = req.headers['x-twilio-signature'];
        const url = req.protocol + '://' + req.get('host') + req.originalUrl;
        const authToken = process.env.TWILIO_AUTH_TOKEN;

        // Validate the request
        if (!validateRequest(authToken, twilioSignature, url, req.body)) {
            return res.status(403).json({ message: 'Invalid Twilio request.' });
        }
        next();
    }
}

export default TwilioAuth;