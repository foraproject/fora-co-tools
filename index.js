(function() {
    "use strict"

    module.exports = function(debug) {
      return {
        parallel: function*(array) {
          if (debug) {
            for(var i = 0; i < array.length; i++) {
              yield* array[i];
            }
          } else {
            yield array;
          }
        }
      }
    }
})();
