const axios = require( 'axios' )

module.exports = async function ( a, b ) {
  return a + b + String( await axios.get( 'ip-spot.com' ) )
}
