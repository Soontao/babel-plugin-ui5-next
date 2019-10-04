"use strict";

sap.ui.define("babel/test/test/fixtures/es6-class-to-ui5-class/actual", ["sap/ui/JSView", "sap/m/Button"], function (JSView, Button) {
  var _default = {};

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var AView = {
    init: function init() {
      JSView.prototype.init.apply(this, []);
    },
    onPress: function onPress() {// do nothing
    },
    createContent: function createContent() {
      return new Button({
        onPress: this.onPress.bind(this),
        text: "Text Here"
      }).addStyleClass("btnClass1");
    },
    getControllerName: function getControllerName() {
      return "custom.Controller";
    }
  };
  AView = sap.ui.jsview("babel.test.test.fixtures.es6-class-to-ui5-class.actual", AView) || AView;
  _default = _extends(AView, _default);
  return _default;
})