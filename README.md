# Docs

Welcome to the developer resources and documentation for Probable Futures data and maps. This documentation is currently in its alpha testing phase.

**Public Documentation**: [Probable Futures Documentation](https://docs.probablefutures.org/)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/downloads): Used to clone the repository.
- [Homebrew](https://brew.sh/): This is a package manager for macOS. If you're on a different platform, refer to the appropriate package manager.
- [Ruby](https://www.ruby-lang.org/): Jekyll is built with Ruby.

---

## How to Run Locally

Follow these steps to get the project up and running on your local machine:

1. Clone the Repository
Navigate to the directory where you want to clone the repository and run:

```sh
git clone git@github.com:Probable-Futures/docs.git
cd docs
```

2. Install and Configure Ruby

If you haven't already installed Ruby, follow these steps:

a. Install rbenv (Ruby Version Manager)

```sh
brew install rbenv
```

b. Configure Shell to Use rbenv
If you're using bash:

```sh
echo ‘eval “$(rbenv init -)”‘ >> ~/.bash_profile
```

then

```sh
source ~/.bash_profile
```

If you're using zsh:

```sh
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
```

```sh
source ~/.zshrc
```

c. Install Ruby Version 3.2.2:

```sh
rbenv install 3.2.2
```

then run

```sh
rbenv global 3.2.2
```

3. Install Required Gems

With Ruby installed, run the following commands:

```sh
bundle install
```

and then run

```sh
gem install jekyll bundler
```

## Serve the Project

With Jekyll and Bundler installed, navigate to the directory where you cloned the repository and run:

```sh
jekyll serve --livereload
```

This starts the Jekyll server with live-reloading enabled, allowing you to view live changes as you edit the project.

You should now be able to access the local version of the docs at <http://localhost:4000/> or the URL provided in your terminal.

---

## Contributing

Bug reports, proposals of new features, and pull requests are welcome on GitHub at <https://github.com/probablefutures/docs>. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

### Submitting code changes

- Submit an [Issue](https://github.com/probablefutures/docs/issues) that motivates the changes, using the appropriate template
- Discuss the proposed changes with other users and the maintainers
- Open a [Pull Request](https://github.com/probablefutures/docs/pulls)
- Ensure all CI tests pass
- Provide instructions to check the effect of the changes
- Await code review
