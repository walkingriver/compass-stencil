# Compass Stencil

This is a web component that displays a compass, implemented entirely with StencilJS.

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/walkingriver/compass-stencil.git
cd compass-stencil
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To view the build, start an HTTP server inside of the `/www` directory.

To watch for file changes during development, run:

```bash
npm run dev
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```

## Using in your own web page

After building the component and including it in your web page's index.html file, you can use the `<wr-compass>` tag. There are two attributes. The first is `bearing`, which is the number of degrees from north that the compass should point. You can also provide a compass `heading`, which is the direction the browser is currently facing. 

The idea is that this component can be used on a mobile device through the Ionic Framework. Set the bearing attribute, and then set up the geolocation capabilities of the phone to track the phone's heading. Pass that every second or two into the `<wr-compass>`, and the on-screen compass should track the object pointed to by the `bearing` attribute. That's the theory, anyway.

## About Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

### Acknowledgements

This compass was originally created by Rafael Lima. You can see the original CSS and HTML here. http://cssdeck.com/labs/a7kowq1s/ I simply modified it to be a StencilJS-based web component. 
