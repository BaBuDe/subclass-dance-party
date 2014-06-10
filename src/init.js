$(document).ready(function(){

  document.getElementById('intro').play();

  window.dancers = [];
  var alreadyCalled = false;

  $(".harlemShakeButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */



    if (!alreadyCalled) {
      $('.regularShawn').hide();
      // document.getElementById('intro').pause();
      
      for (var i=0; i<30; i++) {
        // make a dancer with a random position
        var dancer = new BlinkyDancer(
          $("body").height() * Math.random(),
          $("body").width() * Math.random(),
          Math.random() * 1000
        );
        $('body').append(dancer.$node);
      }
      alreadyCalled = true;  
    }
  });
});

