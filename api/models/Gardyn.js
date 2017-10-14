/**
 * Gardyn.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	Name:{
  		type: 'string'
	}
	Climate:{
		type: 'string'

	}
	Sunlight:{
		type: 'string'

	}
	Support:{
		type: 'string'

	}
	Spacing:{
		type: 'string'

	}
	Water:{
		type: 'string'

	}
	Special:{
		type: 'string'

	}

  },
  connection: "mongodb"
};

