function readText()
{
    const text = document.getElementById('text').value;
    const utterance = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(utterance);
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('text-to-speech-form');

    if(form) 
    {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            readText();
        });
    }
});