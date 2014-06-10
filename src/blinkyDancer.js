var BlinkyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  
};

BlinkyDancer.prototype = new Dancer();

  
BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to newBlinkyDancer new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for newBlinkyDancer and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
