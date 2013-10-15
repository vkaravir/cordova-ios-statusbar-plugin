//
//  StatusBar.h
//  Cordova StatusBar Plugin
//
//  Created by Ville Karavirta on 10/7/13.
//
//

#import <Cordova/CDV.h>

@interface StatusBar : CDVPlugin

- (void)hideStatusBar:(CDVInvokedUrlCommand*)command;
- (void)showStatusBar:(CDVInvokedUrlCommand*)command;
- (void)toggleStatusBar:(CDVInvokedUrlCommand*)command;
- (void)setStyle:(CDVInvokedUrlCommand*)command;
- (void)height:(CDVInvokedUrlCommand*)command;

@end
