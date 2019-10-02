# Nuxt test speed 2.9.0 drop

## Build Setup

- Copy `.env.example` to `.env`
- Go to `src`
- Install package with `npm install`
- Run dev with `npm run dev`

## How to test with 2.9.1 and reproduce the slow loading effect

Follow the build setup after try these steps:

- Switch between **Menu 1** and **Menu 2** few time.

## How to test with 2.8.1

- Go to `src/package.json` and change version to 2.8.1 without the `^` before the version number. (Is a lot faster)

### List of commands

```bash
# install dependencies
npm run install

# serve with hot reload at localhost:3000
npm run dev

# Lint Fix
npm run lintfix

# build for production and launch server
npm run build
npm run start

# generate static project
npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
