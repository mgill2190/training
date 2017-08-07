# Development Setup #

## Install XCode

```bash
xcode-select --install
xcodebuild -license
```

## Install Homebrew
[Homebrew](http://brew.sh/) is OS X's "missing" package manager.

```bash
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null ; brew install caskroom/cask/brew-cask 2> /dev/null
```

## Install Git

    $ brew install git

Define your Git user (should be the same name and email you use for GitHub):

    $ git config --global user.name "Your Name Here"
    $ git config --global user.email "your_email@youremail.com"
    $ git config --global color.ui auto

To push code to your GitHub repositories, its recommended to use HTTPS method (versus SSH). So you don't have to type your username and password everytime, enable Git password caching:


    $ git config --global credential.helper osxkeychain

## Upgrade PHP version
    
   A fresh version of macOS Sierra, you get a PHP 5.6 installed. We want PHP 7.0 as default

    $ brew unlink php56 
    $ brew install php70

## Install Composer

    $ brew install composer

## Node.js

Install [Node.js](http://nodejs.org/) with Homebrew:

    $ brew update
    $ brew install node
    
The formula also installs the [npm](https://npmjs.org/) package manager. However, as suggested by the Homebrew output, we need to add `/usr/local/share/npm/bin` to our path so that npm-installed modules with executables will have them picked up.

To do so, add this line to your `~/.bash_profile` file, before the `export PATH` line:

```bash
PATH=/usr/local/share/npm/bin:$PATH
```

Node modules are installed locally in the `node_modules` folder of each project by default, but worth installing [Grunt](http://gruntjs.com/) globally

```bash
  npm install -g grunt-cli
```   
    
## Install Tools

```bash
brew tap caskroom/cask
brew tap caskroom/homebrew-versions
brew update && brew upgrade brew-cask && brew cleanup && brew cask cleanup

brew install vim
brew install curl
brew cask install phpstorm
brew cask install navicat-for-mysql
brew cask install docker
brew cask install google-chrome

brew cask install alfred
brew cask install awscli
brew cask install cyberduck
brew cask install atom-beta
brew cask install dropbox
brew cask install filezilla
brew cask install mamp
```

## Environment Profile

Your environment profile is located in `~/.bash_profile`. Please edit and add the following

```bash
# Add local paths
export PATH="/usr/local/bin:/usr/local/sbin:~/bin:$PATH"
# Bump the maximum number of file descriptors
ulimit -n 10240
# Improve NPM compile and install times
export JOBS=max

# Allow composer to run without any PHP memory limits
alias composer='php -d "memory_limit=-1" /usr/local/bin/composer'

# Latest version of MAMP PRO PHP binaries are always used
PHP_VERSION=`ls /Applications/MAMP/bin/php/ | sort -n | tail -1`;
export PATH=/Applications/MAMP/bin/php/${PHP_VERSION}/bin:$PATH;
```

# Introduction Courses

### Basic Javascript
https://www.codecademy.com/courses/learn-javascript

### Intermediate Javascript
https://www.codecademy.com/en/courses/javascript-intermediate-en-2nQQb/0/2.

### Advanced Javascript (AngularJS)
https://www.codecademy.com/courses/javascript-advanced-en-2hJ3J/0/1#

### Basic PHP
https://www.codecademy.com/courses/web-beginner-en-StaFQ/0/1


