// STEP 2: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2

(function (window) {
  // STEP 3: Create an object, called 'byeSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // STEP 4: Rewrite the 'speak' function such that it is attached to the
  // byeSpeaker object instead of being a standalone function.
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the 'byeSpeaker' object to the global scope. Name it
  // 'byeSpeaker' on the global scope as well.
  window.byeSpeaker = byeSpeaker;

})(window);
