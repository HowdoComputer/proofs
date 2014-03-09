// Generated by IcedCoffeeScript 1.7.1-a
(function() {
  var Auth, Base, constants,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Base = require('./base').Base;

  constants = require('./constants').constants;

  exports.Auth = Auth = (function(_super) {
    __extends(Auth, _super);

    function Auth(obj) {
      this.nonce = obj.nonce;
      Auth.__super__.constructor.call(this, obj);
    }

    Auth.prototype._type = function() {
      return constants.sig_types.auth;
    };

    Auth.prototype._json = function() {
      var ret;
      ret = Auth.__super__._json.call(this, {
        expire_in: 24 * 60 * 60
      });
      ret.body.nonce = this.nonce ? this.nonce.toString('hex') : null;
      return ret;
    };

    return Auth;

  })(Base);

}).call(this);