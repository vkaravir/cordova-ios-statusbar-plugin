cordova-ios-statusbar-plugin
============================

A simple plugin for Cordova 3+ on iOS to control the statusbar. It allows you to show/hide/toggle
the statusbar, as well as change the style and get the height of the bar.


## Installation

To use the plugin, you need to add it to your project using the Cordova/PhoneGap CLI:

    cordova plugin add https://github.com/vkaravir/cordova-ios-statusbar-plugin.git
    
The CLI will set the JS file references etc correctly to your project.

## Usage

**Creating an instance of the plugin:**  Before calling functions of the plugin, you need to initialize an instance:

    var sbplugin = new StatusBar();

**Show/Hide/Toggle Visibility:** You can hide the statusbar using the ```hide(success, error, options)``` function.
For example

    sbplugin.hide(function(height) { }, function(err) { }, { animation: StatusBar.AnimationFade });
    
The success function gets the height of the statusbar as the first parameter. The option ```animation``` specifies
what kind of animation effect is used to hide the statusbar. Valid values are StatusBar.AnimationFade,
StatusBar.AnimationSlide, and StatusBar.AnimationNone (default).

There are similar functions ```sbplugin.show(...)``` and ```sbplugin.toggle(...)``` which do what the names suggest.

**Changing the style of the statusbar:** You can change the style of the statusbar using the
```setStyle(style, success, error, options)``` function. For example

    sbplugin.setStyle(StatusBar.StyleLightContent, function(height) {}, function(err) {}, { animate: true });
    
The first parameter ```style``` should be either StatusBar.StyleLightContent or StatusBar.StyleDefault (default).
The option ```animate``` specifies whether or not the style change is animated (defaults to false). Again, bar height
is passed as a parameter to the success function.

**Getting the height of the statusbar:** The ```height(success, error)``` function will get the current height of the
statusbar. For example

    sbplugin.height(function(height) { console.log("Height is", height); }, function(err) {});
