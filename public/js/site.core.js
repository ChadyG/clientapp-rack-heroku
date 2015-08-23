/*
* Javascript module system for EveryBitLoop
*
* It is preferable to use unobtrusive javascript when working with views and templates.
* http://edgeguides.rubyonrails.org/working_with_javascript_in_rails.html#unobtrusive-javascript
*
* Most javascript for Loop should be organized into modules.  Each module adds itself to the Loop
* object and appends its initializer to the initializer list.  See loop.*.js for examples.
*
*
*  Example
;(function($L) {
  $L.views = {
    // Initalize function that is called from core
    Initialize: function() {
    },
    SomeFunction: function(param) {
      //a function
    },
    SomeData: {
      // Data
    }
  }

  //Register ourself 
  $L.initializers.push(Loop.views.Initialize);
})(Loop);

*/
var Loop = {
  initializers: [],
  /// Called after page load
  Initialize: function()
  {
    for (var f in Loop.initializers) {
      Loop.initializers[f]();
    }
  }

};
