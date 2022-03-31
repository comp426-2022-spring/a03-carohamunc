
// Require Express.js
const express = require('express')
const app = express()


args["port"]

var port = args.port || process.env.PORT || 5000
// Start an app server
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
});



app.get('/app/', (req, res) => {
    // Respond with status 200
        res.statusCode = 200;
    // Respond with status message "OK"
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
    });

    app.get('/app/flip', (req, res) => {
        const flip = coinFlip()
        res.status(200).json({'flip' : flip})
    });
    
    app.get('/app/flips/:number', (req, res) => {
        const flips = coinFlips(req.params.number)
        const count = countFlips(flips)
        res.status(200).json({'raw' : flips, 'summary' : count})
    });

    app.get('/app/flip/call/heads', (req, res) => {
        const flipheads = flipACoin("heads")
        res.status(200).json({'flipheads' : flipheads})
    });

    app.get('/app/flip/call/tails', (req, res) => {
        const fliptails = flipACoin("tails")
        res.status(200).json({'fliptails' : flipheads})
    });

    
    // Default response for any other request
app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
    res.type("text/plain")
});
    /** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
    var x = Math.round(Math.random());
    if (x < 1) {return "heads";} else {return "tails";}
  
  }
  
  /** Multiple coin flips
   * 
   * Write a function that accepts one parameter (number of flips) and returns an array of 
   * resulting "heads" or "tails".
   * 
   * @param {number} flips 
   * @returns {string[]} results
   * 
   * example: coinFlips(10)
   * returns:
   *  [
        'heads', 'heads',
        'heads', 'tails',
        'heads', 'tails',
        'tails', 'heads',
        'tails', 'heads'
      ]
   */
  
  function coinFlips(flips) {
    var arr = [];
    for (let i = 0; i < flips; i++) {
      arr[i] = coinFlip();
    }
    return arr;
  }
  
  /** Count multiple flips
   * 
   * Write a function that accepts an array consisting of "heads" or "tails" 
   * (e.g. the results of your `coinFlips()` function) and counts each, returning 
   * an object containing the number of each.
   * 
   * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
   * { tails: 5, heads: 5 }
   * 
   * @param {string[]} array 
   * @returns {{ heads: number, tails: number }}
   */
  
  function countFlips(array) {
    let h = 0;
    let t = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == "heads") {
        h++;
      } else {
        t++;
      }
    }
    return {heads: h, tails: t};
  }
  
  /** Flip a coin!
   * 
   * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
   * 
   * @param {string} call 
   * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
   * 
   * example: flipACoin('tails')
   * returns: { call: 'tails', flip: 'heads', result: 'lose' }
   */
  
  function flipACoin(call) {
    let flip = coinFlip();
    if (flip == call) {
      return "call: " + call + ", flip: " + flip + ", result: win"; 
    } else {
      return "call: " + call + ", flip: " + flip + ", result: lose"; 
    }
  }
  
  