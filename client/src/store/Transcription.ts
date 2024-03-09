





export const TranscriptionStore = {
  transcription: 'Testing the limits',
  updateTranscription: (transcript: string) => {
    console.log('updateTranscription: ', transcript);
    TranscriptionStore.transcription = transcript;
  }
};


