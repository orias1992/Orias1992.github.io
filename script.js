// Code goes here

$(document).ready(function(){
  
  
  
  $('#go').on('click',function(){ // listen for the trnaslate button to be clicked.
  
    var text = $('#translate').val(), // gets the value of the text box
        textArr = text.split(" "), // Splits the string into an array of words
    
        gorPhrase = ""; // just sets up a variable to hold the trnalsated text
        
        badWords = false;
  
    $('#error').empty();
    $('#result').empty();
    
    for(var i = 0; i < textArr.length; i++) // loop through all the words entered
    {
      var translated = false;
      for(var x = 0; x < translations.length; x++) // loop through all the Gor Tog words
      {
        if(textArr[i] == translations[x].en) 
        // If the word entered matches the "en" (English) add the Gor version to the 
        // gorPhrase string
        {
          gorPhrase += translations[x].gor+' ';
          translated = true;
        }
      }
      if(!translated) // If it wasn't translated
      {
        badWords = true;
        gorPhrase += "<mark>"+textArr[i]+"</mark> "; // leave it as the word entered 
      }
      
    }
    console.log(gorPhrase);
    
    $('#result').html('<h2>Toggish:</h2><blockquote>'+gorPhrase+'</blockquote>'); // display the 
    
    if(badWords){
      $('#error').html('<p>Some words couldn\'t be translated, they are <mark>highlighted</mark></p>');
    }
  });
  
});