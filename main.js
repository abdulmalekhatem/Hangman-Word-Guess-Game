//letters 
const letters = "abcdefghijklmnopqrstuvwxyz";
//Get Array Form Letters 
let lettersArray = Array.from(letters);

//Select Letters Containers 
let lettersContainers = document.querySelector(".letters");

//Get The Time 
let duration = 1000 ;
//Generate Letters 
lettersArray.forEach(letters => 
    {
    //Create Span 
    let span = document.createElement("span");
    //Create Letter Text Node 
    let theLetters = document.createTextNode(letters);
    //Append The Letters To Span 
    span.appendChild(theLetters);
    //Add Class On Span 
    span.className = 'letters-box';
    //Append Span To The Letters Container 
    lettersContainers.appendChild(span); 
});
//Objects Of Words + Categories 
const words = {
    programming:["php","javascript","go","scala","fortran","r","mysql","python"],
    movies:["Presting","Inception","Parasite","Interstellar","Whiplash","Memento"], 
    people:["Albert Einstein","Hitchock","Alexander","Cleopatra","Mahtma Ghandi"],
    countries:["Syria","Palestine","Yemen","Egypt","Bahrain","Qatar"]
}
//Get Random Propenty
let allkeys = Object.keys(words);
//Random Number Depend On Keys Length
let randomProNumber = Math.floor(Math.random() * allkeys.length);
// Category 
let randomPropName = allkeys[randomProNumber];
//Category Words 
let randomPropVlaue = words[randomPropName];
//Random Number Depend On Words 
let randomValueNumber = Math.floor(Math.random() * randomPropVlaue.length);
//The  Chosen Words 
let randomValueValue = randomPropVlaue[randomValueNumber];
 
 // Set Category Info 
 document.querySelector(".game-info .category span").innerHTML = randomPropName;
//select Letters Guess Element 
let lettersGuessContainer = document.querySelector(".letters-guess");
//Convert Chosen word To Array 
let lettersAndSpace = Array.from(randomValueValue);
//console.log(lettersAndSpace);
//Create Span Depened On Word 
lettersAndSpace.forEach( letter => {
    //Create Empty Span 
    let emptySpan = document.createElement("span");

    //If Letter Is Space 
    if ( letter === ' ')
        {
        //Add Class To The Span 
        emptySpan.className = 'with-space';
        }
    //Append Span To The Letters Guess Container 
    lettersGuessContainer.appendChild(emptySpan);
});
//select Guess Span
let guessSpans = document.querySelectorAll(".letters-guess span");
//Set wrong Attempts
let wrongAttempts = 0 ;
//Select The Draw Element 
let theDraw = document.querySelector(".hangman-draw");
//Handle Clicking On Letters 
document.addEventListener("click",(e) => 
 {
    if (e.target.className === 'letters-box')
    {
        //Set The Chose Status 
let theStatus = false ;
        e.target.classList.add("clicked");
        //Get Clicked Letter 
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        //The Chose Word
        let theChoseWord = Array.from(randomValueValue.toLowerCase());
        //console.log(theClickedLetter);
        //console.log(lettersAndSpace);
        lettersAndSpace.forEach((wordLetter, wordindex)=> {

            //If The Clicked Letter Equal To One Of The Chosen Word Letter
            if(theClickedLetter == wordLetter )
                {
                    //the Status To Correct 
                    theStatus = true ; 
                    //Loop On All Guess Spans 
                guessSpans.forEach((span,spansIndex) => {
                     if(wordindex === spansIndex )
                     {
                        span.innerHTML = theClickedLetter ;
                     }
                });
                }
        });
        //Outside Loop 
    //If Letter Is Wrong 
    if(theStatus !== true)
    {
        //Increase The Wrong Attempts 
        wrongAttempts++;
        //Add Class Wrong On Draw Element 
        theDraw.classList.add(`wrong-${wrongAttempts}`);

        //Play Fail Sound 
        document.getElementById("fail").play();

        if (wrongAttempts === 8 )
        {
            endGame();
            lettersContainers.classList.add("finished");
        }

    }else
    {
         //Play Success Sound 
       
         FuncSuccess(() => {

         }
         ,duration);
        document.getElementById("success").play();
    }
    }
 });
 //End Game Function 
 function endGame(){
    //Create Popup Div 
    let div = document.createElement("div");

    //Create Text 
    let divText = document.createTextNode(`Game Over , The Word Is ${randomValueValue}`);

    //Append Text To Div
    div.appendChild(divText);

    //And Class On Div 
    div.className = 'popup';

    //Append To The Body 
    document.body.appendChild(div);
    }
    function FuncSuccess(){
        if (wrongAttempts < 4)
        {
           
        //Create Popup Div 
        let div = document.createElement("div");
    
        //Create Text 
        let divText = document.createTextNode(`You are Excellent , The Try Number Is [${wrongAttempts}]`);
    
        //Append Text To Div
        div.appendChild(divText);
    
        //And Class On Div 
        div.className = 'popups';
    
        //Append To The Body 
        document.body.appendChild(div);
        }
        if (wrongAttempts >= 4 && wrongAttempts <= 6 )
            {
            //Create Popup Div 
            let div = document.createElement("div");
        
            //Create Text 
            let divText = document.createTextNode(`You are Vary Good , The Try Number Is ${wrongAttempts}`);
        
            //Append Text To Div
            div.appendChild(divText);
        
            //And Class On Div 
            div.className = 'popup';
        
            //Append To The Body 
            document.body.appendChild(div);
            }
            if (wrongAttempts >= 7)
                {
                    
                //Create Popup Div 
                let div = document.createElement("div");
            
                //Create Text 
                let divText = document.createTextNode(`You are good  , The Try Number Is ${wrongAttempts}`);
            
                //Append Text To Div
                div.appendChild(divText);
            
                //And Class On Div 
                div.className = 'popup';
            
                //Append To The Body 
                document.body.appendChild(div);
                }
        }