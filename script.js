let page = ""

document.getElementById("homeButton").addEventListener('click', function() {
    document.getElementById("pages").innerHTML = `
        <li><button id="quizButton">A Personality Quiz</button> – Make a personality quiz out of your favorite game or show! Use JavaScript to ask questions and decide on what the quiz taker's character is!</li>
        <li><button id="clickerButton">A Cookie Clicker Game</button> – Clicking on a picture increases your score, and you can make upgrades to increase your score further! It doesn't have to be a cookie, either! It can be whatever you want, it's your website!</li>
        <li><button id="madLibsButton">Advanced Mad Libs Creator</button> – If you liked the Mad Libs project from Week 5, you can build onto it by adding more and more scenarios!</li>
        <li><button id="wikiButton">Wiki</button> – If you have a favorite game or show you want to make your own wiki about, make it! You can have multiple pages on your website.</li>
        <li><button id="RPGButton">Choose Your Own Adventure Game</button> – The website gives the user a scenario and a choice, and each choice will lead them down a new path in a story of your creation!</li>
        <li><button id="studyButton">Flashcard Study Website</button> – Want to test your friends, or help them study for something? Make a website that has interactable flashcards that give the answer when clicked!</li>
        <li><button id="triviaButton">Trivia Game</button> – If you have tricky trivia questions to ask about a TV series, a game, or even about yourself, make a trivia website for others to tackle!</li>

    `;


    document.getElementById("header").innerHTML = "<h1>Welcome to my ICSpark Final Project Website!</h1>";
    document.getElementById("instructions").innerHTML = "<p>Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS!</p>";
});



document.getElementById("quizButton2").addEventListener('click', function() {
    document.getElementById("pages").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Personality Quiz</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    page = "quiz";
    load();
});
document.getElementById("clickerButton2").addEventListener('click', function() {
    document.getElementById("pages").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Cookie Clicker</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    page = "quiz";
    load();
});
document.getElementById("madLibsButton2").addEventListener('click', function() {
    document.getElementById("pages").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Mad Libs</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    page = "quiz";
    load();
});
document.getElementById("wikiButton2").addEventListener('click', function() {
    document.getElementById("pages").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>The Wiki</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    page = "quiz";
    load();
});
document.getElementById("RPGButton2").addEventListener('click', function() {
    document.getElementById("pages").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Choose Your Own Adventure Game</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>"  
    page = "quiz";
    load();
});
document.getElementById("studyButton2").addEventListener('click', function() {
    document.getElementById("pages").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Flashcard Study</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    page = "quiz";
    load();
});
document.getElementById("triviaButton2").addEventListener('click', function() {
    document.getElementById("pages").innerHTML = ""; 
    document.getElementById("header").innerHTML = "  <h1>Trivia</h1>"
    document.getElementById("instructions").innerHTML ="<p> Before I began working on my final project, I took the time to try and think of what my final project would be! I couldn't think of anything so I used what ICSpark already provided, THE IDEAS! </p>" 
    page = "quiz";
    load();
});



function load() {
alert(page)

    if (page === quiz) {
        
    } else if (page === clicker) {
        

        } else if (page === madlibs) {
        

            } else if (page === wiki) {
        

                } else if (page === rpg) {
        

                    } else if (page === study) {
        

                        } else if (page === trivia) {
        

                            } else if (page === game) {
        

                                } else {
                                
                                    
                                }
}

    
    
    