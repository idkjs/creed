// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");

function applicative__001($$class) {
  var f = CamlinternalOO.new_variable($$class, "");
  var ids = CamlinternalOO.get_method_labels($$class, [
        "pure",
        "liftA2",
        "apply"
      ]);
  var liftA2 = ids[1];
  var apply = ids[2];
  CamlinternalOO.set_method($$class, liftA2, (function (self$1, g, a1, a2) {
          var tmp = self$1[f];
          return Curry._3(self$1[0][apply], self$1, Caml_oo_curry.js3(-1010905610, 1, tmp, g, a1), a2);
        }));
  return (function (env, self, f$1) {
      var self$1 = CamlinternalOO.create_object_opt(self, $$class);
      self$1[f] = f$1;
      return self$1;
    });
}

var applicative_ = /* class */[
  undefined,
  applicative__001,
  undefined,
  undefined
];

exports.applicative_ = applicative_;
/* No side effect */