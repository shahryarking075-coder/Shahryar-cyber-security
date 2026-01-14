window.onload = function(){
    // Urdu welcome message
    let msg = new SpeechSynthesisUtterance("سلام شہریار، خوش آمدید شاہریار اخلاقی ہیکنگ اکیڈمی میں۔");
    
    // Voice settings
    msg.lang = "ur-PK";   // Urdu Pakistan
    msg.rate = 0.9;       // Speed (0.8-1.2 recommended)
    msg.pitch = 1;        // Pitch
    msg.volume = 1;       // Volume 0-1
    
    // Speak
    window.speechSynthesis.speak(msg);
}