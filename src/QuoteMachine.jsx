import React, { Component } from "react";
export class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      quote: "Be Inspired",
      author: "By You",
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    var quotes = [
      {
        id: 1,
        quote:
          "Corruption exists where you have a healthy state; and it takes up just 10, or maximum 15 percent of the country. When it takes up to 99 per cent of the country, that’s not corruption, that is the state.",
        author: "Anonymous",
      },
      {
        id: 2,
        quote:
          "We judge others on their actions but ourselves on our intentions.",
        author: "Unknown",
      },
      {
        id: 3,
        quote:
          "People do two things. Some just let life push them around. Others get angry and push back.",
        author: "Robert Kyosaki",
      },
      {
        id: 4,
        quote: "Meaning is a jumper that you have to knit yourself.",
        author: "Exurb1a",
      },
      {
        id: 5,
        quote:
          "All men have fears, but the brave put down their fears and go forward, sometimes to death, but always to victory.",
        author: "Unknown",
      },
      {
        id: 6,
        quote: "A fool and his money is one big party.",
        author: "Robert Kyosaki",
      },
      {
        id: 7,
        quote: "A man convinced against his will is of the same opinion still.",
        author: "Dale Carnegie",
      },
      {
        id: 8,
        quote: "He will win who knows when to fight and when not to fight.",
        author: "Sun Tzu",
      },
      {
        id: 9,
        quote:
          "You can measure the size of a person by what makes him or her angry.",
        author: "Unknown",
      },
      {
        id: 10,
        quote:
          "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.",
        author: "Sun Tzu",
      },
      {
        id: 11,
        quote:
          "There are no limitations to the mind except those we acknowledge.",
        author: "Napoleon Hill",
      },
      {
        id: 12,
        quote:
          "Life is a checkerboard, and the player opposite you is time. If you hesitate before moving, or neglect to move promptly, your men will be wiped off the board by time, you are playing against a partner who will not tolerate indecision.",
        author: "Napoleon Hill",
      },
      {
        id: 13,
        quote:
          "Once you say you’re going to settle for second, that’s what happens.",
        author: "John F. Kennedy",
      },
      {
        id: 14,
        quote:
          "Humans are the result of blind evolutionary processes that operate without goal or purpose.",
        author: "Yuval Noah Harari",
      },
      {
        id: 15,
        quote:
          "Anything that limits the human liberty to feel, to think to desire and to invent, limits the meaning of the universe.",
        author: "Yuval Noah Harari",
      },
      {
        id: 16,
        quote:
          "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead",
      },
      {
        id: 17,
        quote: "Everybody has a plan until they get punched in the face.",
        author: "Mike Tyson",
      },
      {
        id: 18,
        quote:
          "A lie told once remains a lie, but a lie told a thousand times becomes the truth.",
        author: "Joseph Goebbels",
      },
      {
        id: 19,
        quote:
          "There is no honourable way to kill, no good gentle way to destroy. There is nothing good in war. Except it’s ending.",
        author: "Abraham Lincoln",
      },
      {
        id: 20,
        quote: "Dust is matter in the wrong place.",
        author: "Unknown",
      },
      {
        id: 21,
        quote:
          "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
      },
      {
        id: 22,
        quote:
          "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
      },
      {
        id: 23,
        quote:
          "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson",
      },
      {
        id: 24,
        quote:
          "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr Seuss",
      },
      {
        id: 25,
        quote:
          "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        author: "Anne Frank",
      },
      {
        id: 26,
        quote: "believe that you can and you're halfway there.",
        author: "Theodore Roosevelt",
      },
    ];
    var values = Object.values(quotes);
    var randomiseQuotes = values[Math.floor(Math.random() * values.length)];
    this.setState({
      id: randomiseQuotes.id,
      quote: randomiseQuotes.quote,
      author: randomiseQuotes.author,
    });
  }
  render() {
    <script
      type="text/javascript"
      async
      src="https://platform.twitter.com/widgets.js"
    ></script>;
    //change background colour
    var colours = [
      "#d83816",
      "#d8a916",
      "#83d816",
      "#16d8c0",
      "#3016d8",
      "#d216d8",
      "#b41b51",
      "#b6a362",
    ];
    var randomisedColours = colours[Math.floor(Math.random() * colours.length)];
    const quoteBoxStyle = {
      background: "white",
      borderRadius: "2%",
      display: "table",
      width: "500px",
      height: "200px",
      margin: "auto",
    };

    const quoteTextStyle = {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "450px",
      marginTop: "35px",
      textAlign: "center",
      color: randomisedColours,
      transition: "all 1s ease-out",
    };

    const quoteAuthorStyle = {
      maxWidth: "150px",
      marginLeft: "55%",
      marginTop: "10px",
      color: randomisedColours,
      transition: "all 1s ease-out",
    };

    const buttonClassStyle = {
      marginTop: "20px",
      marginBottom: "40px",
    };

    const buttonStyle = {
      marginLeft: "260px",
      borderRadius: "5%",
      backgroundColor: randomisedColours,
      border: "none",
      width: "90px",
      height: "30px",
      fontSize: "15px",
      color: "white",
      cursor: "pointer",
      transition: "all 1s ease-out",
    };
    const bodyStyle = {
      backgroundColor: randomisedColours,
      height: "100vh",
      width: "100vw",
      transition: "all 1s ease-in",
    };
    const twitterAnchor = {
      color: "white",
      padding: "8px 7px 5px 7px",
      backgroundColor: randomisedColours,
      fontSize: "18px",
      marginLeft: "80px",
      borderRadius: "8%",
      transition: "all 1s ease-out",
    };

    return (
      <body style={bodyStyle}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div id="quote-box" style={quoteBoxStyle}>
          <div id="quote-text" style={quoteTextStyle}>
            <h1 id="text">{this.state.quote}</h1>
          </div>
          <div id="quote-author" style={quoteAuthorStyle}>
            <h4 id="author">- {this.state.author}</h4>
          </div>
          <div class="button" style={buttonClassStyle}>
            <a
              href={`https://twitter.com/intent/tweet?text=${this.state.quote} - ${this.state.author}`}
              class="twitter-share-button d-inline"
              id="tweet-quote"
              style={twitterAnchor}
            >
              <i class="fa fa-twitter"></i>
            </a>

            <button
              id="new-quote"
              onClick={this.getQuote}
              class="d-inline"
              type="button"
              style={buttonStyle}
            >
              New Quote
            </button>
          </div>
        </div>
      </body>
    );
  }
}
