create-flyyer-app
==================

[![Resultant flyyer live image](https://github.com/useflyyer/create-flyyer-app/blob/master/.github/assets/result-1.png?raw=true&v=1)](https://cdn.flyyer.io/render/v2/flyyer/default/main.jpeg?title=try+changing+this)

[![Resultant flyyer live image](https://github.com/useflyyer/create-flyyer-app/blob/master/.github/assets/result-2.png?raw=true&v=1)](https://cdn.flyyer.io/render/v2/flyyer/default/main.jpeg?title=awesome!+%F0%9F%98%83&description=Optional+description&_w=1080&_h=1920)

**Create [Flyyer.com](https://flyyer.io?ref=create-flyyer-app) app**

📚 Please read the documentation here: [https://docs.flyyer.io/docs/](https://docs.flyyer.io/docs/)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/create-flyyer-app.svg)](https://npmjs.org/package/create-flyyer-app)
[![Downloads/week](https://img.shields.io/npm/dw/create-flyyer-app.svg)](https://npmjs.org/package/create-flyyer-app)
[![License](https://img.shields.io/npm/l/create-flyyer-app.svg)](https://github.com/useflyyer/create-flyyer-app/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
<!-- tocstop -->

# Usage

Start by invoking `create-flyyer-app`.

```sh
npm init flyyer-app@latest my-project
```

With yarn:

```sh
yarn create flyyer-app my-project
```

Then cd into your new created `my-project` directory and install the dependencies.

```sh
cd my-project
npm install
```

Create and edit templates inside the `templates` directory. Run the local server with:

```sh
npm run start
```

Then preview your template at [https://useflyyer.github.io/studio](https://useflyyer.github.io/studio)

[![flyyer-studio screenshot](https://raw.githubusercontent.com/useflyyer/studio/main/.github/screenshot.png)](https://useflyyer.github.io/studio)

Once you are ready execute `npm run deploy` but with your API key

```sh
export FLYYER_KEY=...
export NODE_ENV=production
npm run build
npm run deploy
```

> Get your FLYYER_KEY at [https://flyyer.io/settings/keys](https://flyyer.io/settings/keys) 👈

Great! 🎉
Now your new template deck should appear there.

If you need to update your templates you can just run `npm run deploy` again.

## Dynamic og:image

You can use the resulting URLs to create dynamic `<meta property="og:image" />` for your websites.

See the official guides: https://docs.flyyer.io/guides

[![Demo of link previews using Flyyer](./.github/assets/agents.png)](https://flyyer.io?ref=create-flyyer-app)
