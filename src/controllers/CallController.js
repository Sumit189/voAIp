import twilio from 'twilio';

const CallController = {
    handleIncomingCall: (req, res) => {
        const twiml = new twilio.twiml.VoiceResponse();
        twiml.say('Hello! Thank you for calling V O AI P');
        twiml.say('Please ask your question, after the beep');
        twiml.record({
            transcribe: true,
            transcribeCallback: '/transcription',
            maxLength: 60,
            action: '/transcription'
        });
    
        res.type('text/xml');
        res.send(twiml.toString());
    },
    processKeyPress: (req, res) => {
        const digitPressed = req.body.Digits;
        const twiml = new twilio.twiml.VoiceResponse();
    
        if (digitPressed) {
            twiml.say('Please ask your question after the beep.');
            twiml.record({
                transcribe: true,
                transcribeCallback: '/transcription',
                maxLength: 30,
                action: '/transcription'
            });
        } else {
            twiml.say('Thank you! Goodbye!');
            twiml.hangup();
        }
    
        res.type('text/xml');
        res.send(twiml.toString());
    }
}

export default CallController;
