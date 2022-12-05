let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "#1: Seagulls only say this one word...",
	"a": "Food",
	"b": "Kill",
	"c": "Rawh",
	"d": "Mine",
	"image":"quizimages/q1.jpg",
	"answer": "d"
   },
   {
	"question": "#2: Lightning McQueen, a red race car, has which number decalled on him?",
	"a": "50",
	"b": "95",
	"c": "99",
	"d": "100",
	"image":"quizimages/q2.jpg",
	"answer": "b"
   },
   {
	"question": "#3: The Robot WALL-E is designed to...",
	"a": "Stack Garbage",
	"b": "Repair Spaceships",
	"c": "Collect Ocean Plastics",
	"d": "Dig Trenches",
	"image":"quizimages/q3.jpg",
	"answer": "a"
   },
   {
	"question": "#4: In 'Inside Out', Riley's almost-forgotten early childhood imaginary friend is named...",
	"a": "Dodo",
	"b": "Luley",
	"c": "Ralphy",
	"d": "Bing Bong",
	"image":"quizimages/q4.jpg",
	"answer": "d"
   },
   {
	"question": "#5: This Lamp often accompanies Pixar's Logo.",
	"a": "Luxo",
	"b": "Acme",
	"c": "Charlton",
	"d": "Binford",
	"image":"quizimages/q5.jpg",
	"answer": "a"
   },
   {
	"question": "#6: Young Merida accidentally turns her mother into a...",
	"a": "Elk",
	"b": "Wolf",
	"c": "Bear",
	"d": "Horse",
	"image":"quizimages/q6.jpg",
	"answer": "c"
   },
   {
	"question": "#7: Pixar's 'Turning Red' takes place in THIS major city...",
	"a": "Toronto",
	"b": "Paris",
	"c": "Tokyo",
	"d": "New York",
	"image":"quizimages/q7.jpg",
	"answer": "a"
   },
   {
	"question": "#8: Russel is a..",
	"a": "Wilderness Explorer",
	"b": "Eagle Scout",
	"c": "Nature Steward",
	"d": "Woodland Ranger",
	"image":"quizimages/q8.jpg",
	"answer": "a"
   },
   {
	"question": "#9: In 'Ratatouille', Remi has an imaginary ghost advisor named...",
	"a": "Pepe",
	"b": "Gusteau",
	"c": "Pierre",
	"d": "Gaston",
	"image":"quizimages/q9.jpg",
	"answer": "b"
   },
   {
	"question": "#10: Peach, the starfish in 'Finding Nemo', was originally from...",
	"a": "The Pacific Northwest",
	"b": "Hawaii",
	"c": "Petsmart",
	"d": "eBay",
	"image":"quizimages/q10.jpg",
	"answer": "d"
   }
 ];

 if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js');
  }
 
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "70vh";
	img.style.maxHeight = "80vh";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is";
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 
 
 
 
 
 
 
 
 
 
 
   
