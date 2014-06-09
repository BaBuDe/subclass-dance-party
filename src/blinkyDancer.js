var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var newBlinkyDancer = new Dancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of newBlinkyDancer function

  var oldStep = newBlinkyDancer.step;

  newBlinkyDancer.step = function(){
    // call the old version of step at the beginning of any call to newBlinkyDancer new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for newBlinkyDancer and
    // other effects you can use on a jQuery-wrapped html tag.
    newBlinkyDancer.$node.toggle();
  };
  newBlinkyDancer.step();
  return newBlinkyDancer;
};