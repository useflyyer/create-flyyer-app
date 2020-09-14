create-flayyer-app
==================

Create FLAYYER app

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/create-flayyer-app.svg)](https://npmjs.org/package/create-flayyer-app)
[![Downloads/week](https://img.shields.io/npm/dw/create-flayyer-app.svg)](https://npmjs.org/package/create-flayyer-app)
[![License](https://img.shields.io/npm/l/create-flayyer-app.svg)](https://github.com/flayyer/create-flayyer-app/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [Usage](#usage-1)
* [or install it globally with:](#or-install-it-globally-with)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g create-flayyer-app
$ create-flayyer-app COMMAND
running command...
$ create-flayyer-app (-v|--version|version)
create-flayyer-app/1.3.3 darwin-x64 node-v12.18.2
$ create-flayyer-app --help [COMMAND]
USAGE
  $ create-flayyer-app COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->

<!-- commandsstop -->

# Usage

Start by invoking `create-flayyer-app`.

```sh
npx create-flayyer-app my-deck

# or install it globally with:
npm install -g create-flayyer-app
create-flayyer-app my-deck
```

Then cd into your new created `my-deck` directory and install the dependencies.

```sh
cd my-deck
npm install
```

Create and edit templates inside the `templates` directory.

Once you are ready execute `npm run deploy` but with your API key

```sh
export FLAYYER_KEY=...
npm run build
npm run deploy
```

> Get your FLAYYER_KEY at [https://flayyer.com](https://flayyer.com) 👈

Great! 🎉
Now your new template deck should appear here.

If you need to update your templates you can just run `npm run deploy` again.
