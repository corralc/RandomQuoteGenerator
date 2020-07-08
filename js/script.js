/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
  let quotes = [
    {
      fquote: "We Generate Fears While We Sit. We Overcome Them By Action.",
      source: "Dr. Henry Link"

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
***/
  const getRandomQuote = () =>{
    const randNum = Math.floor(Math.random() * quotes.length );
    console.log(randNum);
    console.log(randNum);
    return quotes[randNum];

  }

  getRandomQuote();

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);