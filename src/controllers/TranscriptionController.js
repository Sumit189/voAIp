import twilio from 'twilio';
import GenerativeAIService from '../services/GenerativeAIService.js';
const twiml = new twilio.twiml.VoiceResponse();

const TranscriptionController = {
    handleTranscription: async (req, res) => {
        const transcriptionText = req.body.TranscriptionText;
        console.log(`Transcription received: ${transcriptionText}`);
        if (!transcriptionText) {
            console.log('No transcription received.');
            twiml.say('We did not receive any input, can you please repeat your question?');
            return;
        }
        const answer = await GenerativeAIService.getAnswer(transcriptionText);
        console.log(`AI response: ${answer}`);
        if (!answer) {
            twiml.say('Sorry, we could not find an answer to your question, can you please ask another question?');
            return;
        }

        twiml.say(answer);
        twiml.say('If you have another question, please press any key to continue or hang up to end the call.');
        const gather = twiml.gather({
            numDigits: 1,
            action: '/process-keypress',
            method: 'POST'
        });
    
        gather.say('Press any key to continue.');
    
        // If no input, end the call
        twiml.say('We did not receive any input. Goodbye!');
        twiml.hangup();
    
        res.type('text/xml');
        res.send(twiml.toString());
    }
}

export default TranscriptionController;