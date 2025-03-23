let preview = ""

document.getElementById("homeButton").addEventListener('click', function() {
    document.getElementById("preview").innerHTML = `
        <button id="quizButton">A Personality Quiz</button>
        <button id="clickerButton">A Cookie Clicker Game</button>
        <button id="madLibsButton">Advanced Mad Libs Creator</button>
        <button id="wikiButton">Wiki</button> 
        <button id="RPGButton">Choose Your Own Adventure Game</button>
        <button id="studyButton">Flashcard Study Website</button>
        <button id="triviaButton">Trivia Game</button> 

    `;


    document.getElementById("header").innerHTML = "<h1>Welcome to my ICSpark Final Project Website!</h1>";
    document.getElementById("instructions").innerHTML = "<p>Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS!</p>";
});



document.getElementById("quizButton2").addEventListener('click', function() {
    document.getElementById("preview").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Personality Quiz</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    preview = "quiz";
    load();
});
document.getElementById("clickerButton2").addEventListener('click', function() {
    document.getElementById("preview").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Cookie Clicker</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    preview = "quiz";
    load();
});
document.getElementById("madLibsButton2").addEventListener('click', function() {
    document.getElementById("preview").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Mad Libs</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    preview = "quiz";
    load();
});
document.getElementById("wikiButton2").addEventListener('click', function() {
    document.getElementById("preview").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>The Wiki</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    preview = "quiz";
    load();
});
document.getElementById("RPGButton2").addEventListener('click', function() {
    document.getElementById("preview").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Choose Your Own Adventure Game</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>"  
    preview = "quiz";
    load();
});
document.getElementById("studyButton2").addEventListener('click', function() {
    document.getElementById("preview").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Flashcard Study</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    preview = "quiz";
    load();
});
document.getElementById("triviaButton2").addEventListener('click', function() {
    document.getElementById("preview").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Trivia</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    preview = "quiz";
    load();
});



function load() {
alert(preview)

    if (preview === quiz) {
        
    } else if (preview === clicker) {
        

        } else if (preview === madlibs) {
        

            } else if (preview === wiki) {
        

                } else if (preview === rpg) {
        

                    } else if (preview === study) {
        

                        } else if (preview === trivia) {
        

                            } else if (preview === game) {
        

                                } else {
                                
                                    
                                }
}

    
    
    