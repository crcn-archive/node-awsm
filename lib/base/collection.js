var protoclass = require("protoclass");


function Collection () {

}

protoclass(Collection, {

  /**
   */

  all: function (next) {
    this.find(next);
  },

  /**
   */

  find: function (query, next) {

  },

  /**
   */

  findOne: function (query, next) {

  }
});

module.exports = Collection;