var page = ""

document.getElementById("quizButton").addEventListener('click', function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.style.display = 'none';
    });
    page = "quiz";
    load()
});
document.getElementById("clickerButton").addEventListener('click', function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.style.display = 'none';
    });
    page = "clicker";
    load()
});
document.getElementById("madLibsButton").addEventListener('click', function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.style.display = 'none';
    });
    page = "mad libs";
    load()
});
document.getElementById("wikiButton").addEventListener('click', function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.style.display = 'none';
    });
    page = "wiki";
    load()
});
document.getElementById("RPGButton").addEventListener('click', function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.style.display = 'none';
    });
    page = "rpg";
    load()
});
document.getElementById("studyButton").addEventListener('click', function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.style.display = 'none';
    });
    page = "study";
    load()
});
document.getElementById("triviaButton").addEventListener('click', function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.style.display = 'none';
    });
    page = "trivia";
    load()
});
document.getElementById("button").addEventListener('click', function() {
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.style.display = 'none';
    });
    page = "game";
    load()
});

function load() {
alert(page)

    if (page = quiz) {
        
    } else if (page = clicker) {
        

        } else if (page = madlibs) {
        

            } else if (page = wiki) {
        

                } else if (page = rpg) {
        

                    } else if (page = study) {
        

                        } else if (page = trivia) {
        

                            } else if (page = game) {
        

                                } else {
                                
                                    
                                }
}

    
    
    