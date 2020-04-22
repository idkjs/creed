// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Higher$Creed = require("../src/higher.bs.js");

function foldp(param, l) {
  var succ = param.succ;
  var zero = param.zero;
  if (l.tag) {
    return Curry._1(succ, foldp({
                    zero: zero,
                    succ: succ
                  }, l[0]));
  } else {
    return Curry._1(zero, l[0]);
  }
}

var Perfect = Higher$Creed.Newtype1({ });

function idp(p) {
  return foldp({
              zero: (function (l) {
                  return /* Zero */Block.__(0, [l]);
                }),
              succ: (function (b) {
                  return /* Succ */Block.__(1, [b]);
                })
            }, p);
}

exports.foldp = foldp;
exports.Perfect = Perfect;
exports.idp = idp;
/* Perfect Not a pure module */