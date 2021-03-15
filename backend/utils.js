const jwt = require('jsonwebtoken');
// const user = require('./models/userModel');

// const generateToken = (user) => {
//   return jwt.sign(
//     {
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin
//     }, process.env.JWT_SECRET,
//     {
//       expiresIn: '30d'
//     }
//   );
// };

// module.exports = generateToken;

exports.generateToken = (function (user) {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    }, process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d'
    }
  );
});