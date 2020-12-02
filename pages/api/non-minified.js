// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const foo = require( '../../dist/foo.js' )

export default (req, res) => {
  res.statusCode = 200
  res.json({ number: foo( 1, 2 ) })
}
