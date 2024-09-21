import express from 'express';
import bodyParser from 'body-parser';
import CallController from './src/controllers/CallController.js';
import TranscriptionController from './src/controllers/TranscriptionController.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.post('/incoming-call', CallController.handleIncomingCall);
app.post('/transcription', TranscriptionController.handleTranscription);
app.post('/process-keypress', CallController.processKeyPress);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
