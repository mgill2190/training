# Development Setup #

- Be careful when using `sudo`, it deserves respect and attention.

## Environment Profile

Your environment profile is located in `~/.bash_profile`

- `export PATH="/usr/local/bin:/usr/local/sbin:~/bin:$PATH"` - ensure packages installed by homebrew are evaluated first
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

## Install Git

```bash
brew install git
```

Define your Git user (should be the same name and email you use for GitHub):

```bash
git config --global user.name "Your Name Here"
git config --global user.email "your_email@youremail.com"
```
To push code to your GitHub repositories, its recommended to use HTTPS method (versus SSH). So you don't have to type your username and password everytime, enable Git password caching:

```bash
git config --global credential.helper osxkeychain
```

## Node.js

Install [Node.js](http://nodejs.org/) with Homebrew:

    $ brew update
    $ brew install node
    
The formula also installs the [npm](https://npmjs.org/) package manager. However, as suggested by the Homebrew output, we need to add `/usr/local/share/npm/bin` to our path so that npm-installed modules with executables will have them picked up.

To do so, add this line to your `~/.path` file, before the `export PATH` line:

```bash
PATH=/usr/local/share/npm/bin:$PATH
```
        
Open a new terminal for the `$PATH` changes to take effect.

We also need to tell npm where to find the Xcode Command Line Tools, by running:

    $ sudo xcode-select -switch /usr/bin

(If Xcode Command Line Tools were installed by Xcode, try instead:)

    $ sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer

Node modules are installed locally in the `node_modules` folder of each project by default, but there are at least two that are worth installing globally. Those are [CoffeeScript](http://coffeescript.org/) and [Grunt](http://gruntjs.com/):

    $ npm install -g coffee-script
    $ npm install -g grunt-cli
    
## Install everything

```bash
brew tap caskroom/cask
brew tap caskroom/homebrew-versions
brew update && brew upgrade brew-cask && brew cleanup && brew cask cleanup

brew install vim
brew install git
brew install curl
brew cask install node
brew cask install phpstorm
brew cask install navicat-for-mysql
brew cask install docker
brew cask install google-chrome

brew cask install alfred
brew cask install virtualbox
brew cask install awscli
brew cask install cyberduck
brew cask install atom-beta
brew cask install dropbox
brew cask install filezilla
brew cask install mamp
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


