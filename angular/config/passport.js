const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Profile = require('../models/Profile');
const profile = require('../routes/profile');

/*module.exports = (passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    Profile.findById(jwt_payload.id, (err, profile) => {
      if (err) {
        return done(err, false);
      }

      if (profile) {
        return done(null, profile);
      } else {
        return done(null, false);
      }
    });
  }));
}*/
