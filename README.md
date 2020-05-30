# Ionic Cordova InAppBrowser

npm install -g cordova ionic

ionic start ae blank

cd ae

ionic cordova plugin add cordova-plugin-inappbrowser

npm install @ionic-native/in-app-browser

ionic serve




npm i -g native-run
ionic cordova emulate ios


xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance

=>
xcode-select --install
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer



Siehe auch
https://stackoverflow.com/questions/46291707/ionic-cordova-inappbrowser-not-working-in-ios
https://ionicframework.com/docs/cli/commands/cordova-emulate

Deploy via XCode to connected ios device
https://ionicframework.com/docs/v3/intro/deploying/