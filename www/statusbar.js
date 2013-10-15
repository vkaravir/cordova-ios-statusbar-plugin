(function() {
var exec = require('cordova/exec');

var StatusBar = function() {};
// animation styles used when showing/hiding the statusbar
// see the details at:
// https://developer.apple.com/library/ios/documentation/uikit/reference/UIApplication_Class/Reference/Reference.html#//apple_ref/c/tdef/UIStatusBarAnimation
// defaults to none
StatusBar.AnimationSlide = "slide";
StatusBar.AnimationFade = "fade";
StatusBar.AnimationNone = "none";
// style of the statusbar
// see details at: 
// https://developer.apple.com/library/ios/documentation/uikit/reference/UIApplication_Class/Reference/Reference.html#//apple_ref/doc/c_ref/UIStatusBarStyle
// defaults to default :D
StatusBar.StyleDefault = "default";
StatusBar.StyleLightContent = "lightcontent";

// simple utility function to extend the options
var extendObj = function(target, source) {
    for (var key in source) {
        target[key] = source[key];
    }
    return target;
};

var sbproto = StatusBar.prototype;
// Shows the statusbar. If successful, calls the success function with
// the height of the statusbar as a parameter. If statusbar is already
// visible, does nothing except call the success function.
// Options:
//   - animation: style of animation used, should be one of values
//                StatusBar.AnimationNone, StatusBar.AnimationFade
//                StatusBar.AnimationSlide
sbproto.show = function(success, error, opts) {
    var options = extendObj({animation: StatusBar.AnimationNone}, opts);
    exec(success, error, "StatusBar", "showStatusBar", [options]);
};
// Hides the statusbar. If successful, calls the success function with
// the height of the statusbar as a parameter. If statusbar is already
// hidden, does nothing except call the success function.
// Options:
//   - animation: style of animation used, should be one of values
//                StatusBar.AnimationNone, StatusBar.AnimationFade
//                StatusBar.AnimationSlide
sbproto.hide = function(success, error, opts) {
    var options = extendObj({animation: StatusBar.AnimationNone}, opts);
    exec(success, error, "StatusBar", "hideStatusBar", [options]);
};
// Toggles the visibility of the statusbar. If statusbar is visible,
// behaves like hide, otherwise like show.
sbproto.toggle = function(success, error, opts) {
    var options = extendObj({animation: StatusBar.AnimationNone}, opts);
    exec(success, error, "StatusBar", "toggleStatusBar", [options]);
};
// Sets the style of the statusbar. Parameter style should be either
// StatusBar.StyleDefault or StatusBar.StyleLightContent. Calls the success
// function with height as a parameter.
// Options:
//   - animate: boolean whether to animate the style change or not,
//              defaults to false
sbproto.setStyle = function(style, success, error, opts) {
    var options = extendObj({animate: false, style: style}, opts);
    exec(success, error, "StatusBar", "setStyle", [options]);
};
// Calls the success function with height as the parameter.
sbproto.height = function(success, error) {
    exec(success, error, "StatusBar", "height", []);
};

module.exports = StatusBar;
})();