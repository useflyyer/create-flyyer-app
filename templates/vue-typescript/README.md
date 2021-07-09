# 🌠 {{ replace-title }}

Feel free to checkout the latest documentation at [docs.flyyer.io](https://docs.flyyer.io) 📖

## Development

You can start a development server at [http://localhost:7777](http://localhost:7777) with:

```sh
npm run start

# Custom port and host
npm run start --port 3000 --host 0.0.0.0
```

Then preview your template at [https://useflyyer.github.io/studio](https://useflyyer.github.io/studio)

[![flyyer-studio screenshot](https://raw.githubusercontent.com/useflyyer/studio/main/.github/screenshot.png)](https://useflyyer.github.io/studio)

## Deployment

Once you are ready to deploy to production please remember to build the project first:

```sh
NODE_ENV=production npm run build
```

Get your Flyyer key from [https://flyyer.io/dashboard/_/settings](https://flyyer.io/dashboard/_/settings) and set it as an environment variable:

```sh
# in your terminal
export FLYYER_KEY=...
```

Alternatively you can create a `.env` file:

```sh
# .env
FLYYER_KEY=...
```

Deploy to production

```sh
npm run deploy
```

You can find the live URL for your deck in the terminal output, it is something like: `https://cdn.flyyer.io/render/v2/tenant/deck/template`.

## Usage

Append queryparams to your URLs and we will set those as props when rendering.

![Resultant flyyer live image](https://github.com/useflyyer/create-flyyer-app/blob/master/.github/assets/result-1.png?raw=true)

![Resultant flyyer live image](https://github.com/useflyyer/create-flyyer-app/blob/master/.github/assets/result-2.png?raw=true)

Next steps:

* Use our official libraries to format URLs https://docs.flyyer.io/docs/libraries
* Read our guides to integrate this into your software: https://docs.flyyer.io/guides

## FAQ & Caveats

### What is Flyyer studio?

It's a browser app that opens your local server (localhost:7777) in multiple _iframes_ so you can have a better developer experience. It works best on Firefox.

### SCSS Support

Sure. Install `npm install --save sass` and just import your SASS/SCSS files just like: `import "/styles.scss"`.

> See: https://docs.flyyer.io/docs/features/styles

### Custom fonts

Refer to https://docs.flyyer.io/docs/features/fonts. If you are building a template for the community and want to support on-the-fly fonts you can use: [flyyer/use-googlefonts](https://github.com/useflyyer/use-googlefonts).

### Nested directories

**This is not implemented yet. Please prefer a flat `/templates` directory.** This means you have to avoid folders inside `/templates`.

Folders outside `/templates` is ok 👍

### Development server crashes or stop previewing

The development server (`npm run start`) can be buggy sometimes. Please restart the server if you encounter any problems.

---

> Default image credits: [Photo by Osvaldo Castillo from Pexels](https://images.pexels.com/photos/3402313/pexels-photo-3402313.jpeg)
> Default image credits: [Photo by Anni Roenkae from Pexels](https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg)
