(function (window) {

   var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < window.names.length; i++) {
    var firstLetter = window.names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      window.byeSpeaker.speak(window.names[i]);
    } else {
      window.helloSpeaker.speak(window.names[i]);
    }
  }
})(window);
