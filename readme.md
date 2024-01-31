This is a reproduction repo for the issue [#3319](https://github.com/ionic-team/stencil/issues/3319) in Stencil.

Generated with create-stencil@3.5.2.

## Reproduce

To install the dependencies of the latest stencil, run

```bash
npm install
```

To trigger stencil build and to start the dev server, run

```bash
npm run start
```

After starting the server, in a *separate* process, run

```bash
npm run hydrate:copy
```

This command will hydrate the src/index.html to www/ssr/index.html
and the generated package with the `dist-custom-elements` output target
will be synced into the served www directory.

## Observe

The difference on the client-side hydration can be now observed between

- not hydrated document - `http://localhost:3333`
- on the server hydrated document - `http://localhost:3333/ssr`

## Try the fix locally

Clone the forked repository

```bash
git clone https://github.com/andrew9994/stencil.git
```

cd into stencil

```bash
cd stencil
```

Switch to the fix branch

```bash
git checkout fix/dist-custom-elements-ssr
```

Install the dependencies and build

```bash
npm install
npm run install.jest
npm run build
```

After build link the @stencil/core package

```bash
npm link
```

And run the link command in *this* stencil project

```bash
npm link @stencil/core
```