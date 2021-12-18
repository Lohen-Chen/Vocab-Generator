function send() {
  var wordarr = []; //dont delete this assigns var as a variable
  var wordjs = document.getElementById('words');
  var presplitwords = wordjs.value;
  var words = presplitwords.split(',') //splits words into an array
  console.log(words); //logs words
    for(let i = 0; i < words.length; i++){
      var arr = words[i]; //words[i] = word arr and then the number of i which will cycle the words
      console.log(arr);
      let url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' +arr+ '/?key=foo'; //creates url also put your key to replace foo
      console.log(url);

        async function getData(url) {
          const response = await fetch(url); //fetches data
          const data = await response.json(); //idk
          definition = data[0].shortdef[0] + ": " + data[0].shortdef[1] +".";  //shortdef 1 + shortdef 2 with some psuedo punctuation
          console.log(definition);
          word = data[0].hwi.hw; //the actual word
          nosword = word.replace(/[^\w\s]/gi, ''); //removes any special characters in the actualy word nosword = no special character word
          console.log(nosword);
          cnosword = nosword.charAt(0).toUpperCase() + nosword.slice(1); //capitlizes first letter of nosword cnosword = captilized no special character word
          soneres = cnosword + ": " + definition; //combines the word with definition soneres = stage one result
          resultjs = soneres.replace('undefined', ''); //gets rid of any undefined 
          var result = document.createElement("P");
          result.innerHTML = resultjs; 
          document.getElementById('results').appendChild(result);  //puts the output into the results div
        }

      getData(url); //executes the function
  }
}

// written by Lohen Chen
