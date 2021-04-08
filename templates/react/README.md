# 🌠 Flayyer template

Feel free to checkout the latest documentation at [docs.flayyer.com](https://docs.flayyer.com) 📖

## Development

You can start a development server at [http://localhost:7777](http://localhost:7777) with:

```sh
npm run start

# Custom port and host
npm run start --port 3000 --host 0.0.0.0
```

Then preview your template at [https://flayyer.github.io/flayyer-studio](https://flayyer.github.io/flayyer-studio)

![flayyer-studio screenshot](https://raw.githubusercontent.com/flayyer/flayyer-studio/main/.github/screenshot.png)

## Deployment

Once you are ready to deploy to production please remember to build the project first:

```sh
NODE_ENV=production npm run build
```

Get your Flayyer key from [https://flayyer.com/dashboard/_/settings](https://flayyer.com/dashboard/_/settings) and set it as an environment variable:

```sh
# in your terminal
export FLAYYER_KEY=...
```

Alternatively you can create a `.env` file:

```sh
# .env
FLAYYER_KEY=...
```

Deploy to production

```sh
npm run deploy
```

You can find the live URL for your deck in the terminal output, it is something like: `https://flayyer.io/v2/tenant/deck/template`.

## Usage

Append queryparams to your URLs and we will set those as props when rendering.

![Resultant flayyer live image](https://github.com/flayyer/create-flayyer-app/blob/master/.github/assets/result-1.png?raw=true)

![Resultant flayyer live image](https://github.com/flayyer/create-flayyer-app/blob/master/.github/assets/result-2.png?raw=true)

Next steps:

* Use our official libraries to format URLs https://docs.flayyer.com/docs/libraries
* Read our guides to integrate this into your software: https://docs.flayyer.com/guides

## FAQ & Caveats

### What is Flayyer studio?

It's a browser app that opens your local server (localhost:7777) in multiple _iframes_ so you can have a better developer experience. It works best on Firefox.

### SCSS Support

Sure. Install `npm install --save sass` and just import your SASS/SCSS files just like: `import "/styles.scss"`.

> See: https://docs.flayyer.com/docs/features/styles

### Custom fonts

Refer to https://docs.flayyer.com/docs/features/fonts. If you are building a template for the marketplace and want to support on-the-fly fonts you can use: [flayyer/use-googlefonts](https://github.com/flayyer/use-googlefonts).

### Nested directories

**This is not implemented yet. Please prefer a flat `/templates` directory.** This means you have to avoid folders inside `/templates`.

Folders outside `/templates` is ok 👍

### Development server crashes or stop previewing

The development server (`npm run start`) can be buggy sometimes. Please restart the server if you encounter any problems.

---

> Default image credits: [Photo by Osvaldo Castillo from Pexels](https://images.pexels.com/photos/3402313/pexels-photo-3402313.jpeg)
