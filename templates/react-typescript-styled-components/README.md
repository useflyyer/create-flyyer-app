# 🌠 Flayyer template

Feel free to checkout the latest documentation at [app.flayyer.com/docs](http://app.flayyer.com/docs) 📖

## Development

You can start a development server at [http://localhost:7777](http://localhost:7777) with:

```sh
npm run start

# Custom port and host
npm run start --port 3000 --host 0.0.0.0
```

Then preview your template at [http://localhost:7777/main.html](http://localhost:7777/main.html)

## Deployment

Once you are ready to deploy please remember to build the project first:

```sh
npm run build
```

Get your Flayyer key from [https://app.flayyer.com](https://app.flayyer.com) and set it as an environment variable:

```sh
export FLAYYER_KEY=...
```

Deploy to production

```sh
npm run deploy
```

You can find the URL for your deck in the terminal output.

## FAQ & Caveats

### SCSS Support

Sure. Install `npm install --save sass` and just import your SASS/SCSS files just like: `import "/styles.scss"`.

> See: https://app.flayyer.com/en/docs/structure/styles

### Custom fonts

Refer to https://app.flayyer.com/en/docs/structure/fonts.

### Nested directories

**This is not implemented yet. Please prefer a flat `/templates` directory.** This means you have to avoid folders inside `/templates`.

Folders outside `/templates` is ok 👍

### Development server crashes or stop previewing

The development server (`npm start`) can be buggy sometimes. Please restart the server if you encounter any problems.

We are working to replace it with: `flayyer-studio` (coming soon) ⚡️
