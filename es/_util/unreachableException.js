import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";

var UnreachableException = function UnreachableException(value) {
  _classCallCheck(this, UnreachableException);

  this.error = new Error("unreachable case: ".concat(JSON.stringify(value)));
};

export { UnreachableException as default };