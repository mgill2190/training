# Development Setup #

- Be careful when using `sudo`, it deserves respect and attention.

## Environment Profile

Your environment profile is located in `~/.bash_profile`

- `ulimit -n 10240` - bumps the maximum number of file descriptors you can have open on your computer.
  There's no purpose for the default limit, especially on SSDs.
- `export JOBS=max` - tells `npm` to compile and install all your native addons in parallel and not sequentially.
  This greatly increases installation times.

## XCode Command Line Tools

Install XCode's command line tools.

```bash
xcode-select --install
xcodebuild -license
```

## Install Homebrew
[Homebrew](http://brew.sh/) is OS X's "missing" package manager.

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null ; brew install caskroom/cask/brew-cask 2> /dev/null
```

## Install everything

```bash

brew tap caskroom/cask
brew tap caskroom/homebrew-versions

brew install vim
brew install git
brew install curl
brew cask install phpstorm
brew cask install docker
brew cask install virtualbox
brew cask install docker
brew cask install node
brew cask install awscli
brew cask install google-chrome
brew cask install cyberduck
brew cask install alfred
brew cask install atom-beta
brew cask install dropbox
brew cask install filezilla
```

PHPStorm  
Navicat  
XTerm  
<a href="https://www.google.com/chrome/browser/desktop/index.html" target="_blank">Google Chrome</a>
MAMP PRO
Spark
Docker

https://www.codecademy.com/courses/learn-javascript

https://www.codecademy.com/en/courses/javascript-intermediate-en-2nQQb/0/2.

https://www.codecademy.com/courses/javascript-advanced-en-2hJ3J/0/1#
