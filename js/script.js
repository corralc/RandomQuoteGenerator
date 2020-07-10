/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array
 * 
 * An array of Objects that hold quotes, and source.
 * Some objects hold citation and some hold year properties and values 
***/
  let quotes = [
    {
      quote: "We Generate Fears While We Sit. We Overcome Them By Action.",
      source: "Dr. Henry Link",
      tags: "inspirational, life, challenge"

    },
    {
      quote: "Do. Or do not. There is no try.", 
      source: "Yoda",
      citation: "Star Wars The Empire Strikes Back"

    },
    {
      quote: "We May Encounter Many Defeats But We Must Not Be Defeated.",
      source: "Maya Angelou"

    },
    {
      quote: "Just because someone stumbles and loses their path, doesn’t mean they’re lost forever.",
      source: "Professor X",
      year: 2014

    },
    {
      quote: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
      source: "Steve Jobs"

    },




  ];


/***
 * `getRandomQuote` function
 *  Gets a random quote from the quotes array
 * 
 * @returns {object} The randomized selected quote
***/
  const getRandomQuote = () =>{
    //Created a variable to store a random number from 0 to 4(The index of last object in array) 
    const randNum = Math.floor(Math.random() * quotes.length );

    //Logs the random Number
    console.log(randNum);

    //Returns a random selected quote object within the quotes array
    return quotes[randNum];

  }
  
  //Calls the getRandomQuote function
  getRandomQuote();


  /***
 * `getRandomColor` function
 *  Creates a random rgb value 
 * 
 * @returns {string} The randomized rgb value
***/
  const getRandomColor = () =>{
    
    //New string variable that starts off the rgb value
    let rgb = "rgb(";
    
    //Outer for loop that loops 1 time
    for(let i = 0; i < 1; i++){
      
      //Inner for loop that loops 2 times
      for(let index = 0; index < 3; index++){
        
        //Adds a randomized number from 0 to 255 and adds it to the rgb variable along with a comma at the end
        rgb+= `${Math.floor(Math.random() * 256)},`;
      }
      //Adds a randomized number from 0 to 255 and adds it to the rgb variable
      rgb+= `${Math.floor(Math.random() * 256)})`;

    }
    //Returns the randomized string of RGB values
    return rgb;
  }
  

/***
 * `printQuote` function
 *  Creates and outputs the random quote in the HTML
 * 
***/
  const printQuote = () =>{
    
    //Calls getRandomQuote function and sets it to a new variable randQuote which will hold the random object
    const randQuote = getRandomQuote();
    
    //Created a variable that will hold the HTML and started adding the paragraph tags to display the quote
    let quoteHTML = `<p class="quote">${randQuote.quote}</p>
    <p class="source">${randQuote.source}`;
    
    //Conditional that uses hasOwnProperty method to determine if citation is a property in the random quote.
    //Will return True or False
    if(randQuote.hasOwnProperty("citation")){
      
      //If true, concatenate a span tag to the string of HTML that will display the citation property
      quoteHTML += `<span class="citation">${randQuote.citation}</span>`;

    }

    //Conditional that uses hasOwnProperty method to determine if year is a property in the random quote.
    if(randQuote.hasOwnProperty("year")){
      
      //If true, concatenate a span tag to the string of HTML that will display the year property
      quoteHTML+= `<span class="year">${randQuote.year}</span>`;

    }

    //Concatenate closing p tag
    quoteHTML+= "</p>";

    //Conditional that uses hasOwnProperty method to determine if tags is a property in the random quote.
    if(randQuote.hasOwnProperty("tags")){

      //If true, concatenate a p tag to the string of HTML that will display the tags property
      quoteHTML+= `<p class = "tags">Tags: ${randQuote.tags}</p>`

    }


    //Grabs element by ID= quote-box and displays the quote within the html
    document.getElementById('quote-box').innerHTML = quoteHTML;

    //Changes the background color to the value returned by the random color function
    document.querySelector("body").style.backgroundColor = getRandomColor();
    
    //returns the string of HTML that displays the quote
    return quoteHTML;
  }
  
 
 //Calls the set interval method that calls printQuote every 30 seconds 
setInterval(printQuote,3000);




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);