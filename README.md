# awesome Svelte resources

[<img src="svelte-logo.svg" align="right" width="100">](https://svelte.dev)

> useful resources for [Svelte](https://svelte.dev) v3+

Please feel free to submit anything you find useful or interesting.

For [Sapper](https://github.com/sveltejs/sapper) resources,
check out _(insert link here if someone makes it)_.

See also [awesome-svelte](https://github.com/CalvinWalzel/awesome-svelte)
and [other awesome lists](https://github.com/sindresorhus/awesome).

## contents

- [official links](#official-links)
- [integrations](#integrations)
  - [preprocessors](#preprocessors)
  - [editor tools](#editor-tools)
- [web app frameworks](#web-app-frameworks)
- [templates](#templates)
  - [electron](#electron)
  - [mobile](#mobile)
- [testing](#testing)
- **[routers](#routers)**
  - [Svelte-specific routing](#svelte-specific-routing)
  - [generic routing](#generic-routing)
- [ui component sets](#ui-component-sets)
- [components](#components)
- [misc libraries](#misc-libraries)
  - [integrations with other libraries](#integrations-with-other-libraries)
  - [easily integrated state libraries](#easily-integrated-state-libraries)
- [example app showcase :rainbow::sparkles:](#example-app-showcase)
  - [closed-source showcase](#closed-source-showcase)
- [native](#native)
- [experiments](#experiments)
- [media](#media)
  - [videos](#videos)
  - [podcasts](#podcasts)
- [other lists](#other-lists)

> possible improvements
>
> - Needs more links. Send pulls and issues!
> - Many project descriptions could be updated, clarified, expanded, etc.
> - Some sections need better organization, or at least more subheadings.
> - If a project fails to meet acceptable quality standards,
>   please open an issue or PR to discuss removing it.

## official links

- **[svelte.dev](https://svelte.dev/)**
  - [Tutorial](https://svelte.dev/tutorial)
  - [API docs](https://svelte.dev/docs)
  - [Examples](https://svelte.dev/examples)
  - [REPL](https://svelte.dev/repl)
  - [Blog](https://svelte.dev/blog)
  - [FAQ](https://github.com/sveltejs/svelte/wiki/FAQ)
  - [Discord chat](https://svelte.dev/chat)
- **[`svelte`](https://github.com/sveltejs/svelte)<sub>@sveltejs</sub>** -
  Cybernetically enhanced web apps
- **[`integrations`](https://github.com/sveltejs/integrations)<sub>@sveltejs</sub>** -
  Ways to incorporate Svelte into your stack
- **[`branding`](https://github.com/sveltejs/branding)<sub>@sveltejs</sub>** -
  Logos etc for Svelte and related projects
- **[`rfcs`](https://github.com/sveltejs/rfcs)<sub>@sveltejs</sub>** -
  RFCs for [changes to Svelte](https://github.com/sveltejs/rfcs/pulls)
- **[`sapper`](https://github.com/sveltejs/sapper)<sub>@sveltejs</sub>** -
  Military-grade progressive web apps, powered by Svelte

## integrations

The official list of integrations is
**[`@sveltejs/integrations`](https://github.com/sveltejs/integrations)**.
Look there first - they're mostly not duplicated here.
Maybe they [should be](https://github.com/ryanatkn/awesome-svelte-resources/pulls)?

- **[`svelte-loader`](https://github.com/sveltejs/svelte-loader)<sub>@sveltejs</sub>** -
  Webpack loader for Svelte components.
- [`rollup-plugin-svelte`](https://github.com/rollup/rollup-plugin-svelte)<sub>@rollup</sub> -
  Compile Svelte components with Rollup
- more at the official **[`@sveltejs/integrations`](https://github.com/sveltejs/integrations)**

### preprocessors

- [`svelte-preprocess`](https://github.com/kaisermann/svelte-preprocess)<sub>@kaisermann</sub> -
  A Svelte preprocessor with baked in support for common used preprocessors
- [`MDsveX`](https://github.com/pngwn/MDsveX)<sub>@pngwn</sub> -
  A markdown preprocessor for Svelte.
- [`svelte-typescript`](https://github.com/pyoner/svelte-typescript)<sub>@pyoner</sub> -
  Typescript monorepo for Svelte v3 (preprocess, template, types)
- [`svelte-ts-preprocess`](https://github.com/PaulMaly/svelte-ts-preprocess)<sub>@PaulMaly</sub> -
  Typescript preprocessor for Svelte 3

Some components are bundled with specific preprocessors that they rely on;
those projects are listed under [misc components](#misc-components).

### editor tools

- [`svelte-vscode`](https://github.com/UnwrittenFun/svelte-vscode)<sub>@UnwrittenFun</sub> -
  Svelte language support for VS Code
- [`vim-svelte`](https://github.com/evanleck/vim-svelte)<sub>@evanleck</sub> -
  Svelte JavaScript syntax highlighting for vim.
- [`svelte-intellij`](https://github.com/tomblachut/svelte-intellij)<sub>@tomblachut</sub> -
  Provides syntax highlighting of Svelte components in WebStorm and friends
- [`svelte-language-server`](https://github.com/UnwrittenFun/svelte-language-server)<sub>@UnwrittenFun</sub> -
  A WIP language server for Svelte
- [`vscode-svelte-component-extractor`](https://github.com/proverbial-ninja/vscode-svelte-component-extractor)<sub>@proverbial-ninja</sub> -
  Creates a new Svelte component from higlighted text

## web app frameworks

- **[`sapper`](https://github.com/sveltejs/sapper)<sub>@sveltejs</sub>** -
  Military-grade progressive web apps, powered by Svelte

## templates

- **[`template`](https://github.com/sveltejs/template)<sub>@sveltejs</sub>** -
  Template for building basic applications with Svelte with rollup
- **[`template-webpack`](https://github.com/sveltejs/template-webpack)<sub>@sveltejs</sub>** -
  Template for building basic Svelte applications with webpack
- **[`component-template`](https://github.com/sveltejs/component-template)<sub>@sveltejs</sub>** -
  A base for building shareable Svelte components
- **[`template-custom-element`](https://github.com/sveltejs/template-custom-element)<sub>@sveltejs</sub>** -
  Template for building basic applications with Svelte and custom elements
- **[`sapper-template`](https://github.com/sveltejs/sapper-template)<sub>@sveltejs</sub>** -
  Starter template for Sapper apps
- [`svelte-typescript`](https://github.com/pyoner/svelte-typescript)<sub>@pyoner</sub> -
  Typescript monorepo for Svelte v3 (preprocess, template, types)
- [`svelte-ts-template`](https://github.com/Axelen123/svelte-ts-template)<sub>@Axelen123</sub> -
  Typescript template for Svelte v3
- [`svelte-play`](https://github.com/Shyam-Chen/Svelte-Play)<sub>@Shyam-Chen</sub> -
  A boilerplate for Svelte, Material, Babel, and PostCSS. Webpack
- [`svelte-starter-template`](https://github.com/Holben888/svelte-starter-template)<sub>@Holben888</sub> -
  A small starter template to get up and running with Svelte v3
- [`tailwindcss-svelte-starter`](https://github.com/marcograhl/tailwindcss-svelte-starter)<sub>@marcograhl</sub> -
  Tailwindcss v1 + Svelte v3 = <3
- [`svelte-tailwind-template`](https://github.com/muhajirdev/svelte-tailwind-template)<sub>@muhajirdev</sub> -
  Svelte + Tailwind = ❤
- [`svelte-template`](https://github.com/fabiohvp/svelte-template)<sub>@fabiohvp</sub> -
  Svelte with materializecss + tailwindcss
- [`svelte-3-rollup-typescript-vscode`](https://github.com/geakstr/svelte-3-rollup-typescript-vscode)<sub>@geakstr</sub> -
  Starter for Svelte 3/rollup/typescript/vscode
- [`svelte-firebase`](https://github.com/jorgegorka/svelte-firebase)<sub>@jorgegorka</sub> -
  A template to help you start developing SPAs with Svelte and Firebase.
- [`svelte-firebase-auth`](https://github.com/ricalamino/svelte-firebase-auth)<sub>@ricalamino</sub> -
  Svelte App with Firebase Authentication for all purposes
- [`svelte-component-template`](https://github.com/YogliB/svelte-component-template)<sub>@YogliB</sub> -
  A base for building shareable Svelte 3 components
- [`svelte-pouchdb-couchdb`](https://github.com/neighbourhoodie/svelte-pouchdb-couchdb)<sub>@neighbourhoodie</sub> -
  Offline-Capable todo list built with Svelte, PouchDB and CouchDB
- [`svelte-routing-template`](https://github.com/OrdinaryJellyfish/svelte-routing-template)<sub>@OrdinaryJellyfish</sub> -
  Svelte webpack template with routing and lazy-loading
- [`svelte-example-museums`](https://github.com/angelozehr/svelte-example-museums)<sub>@angelozehr</sub> -
  An example repo of a Svelte app that is IE11 compatible
- [`svelte-boilerplate`](https://github.com/pankod/svelte-boilerplate)<sub>@pankod</sub> -
  Svelte application boilerplate with Webpack, Sass, BabelJS, Fetch, PostCSS, Jest, .Env
- [`svelte-poi-starter`](https://github.com/pbastowski/svelte-poi-starter)<sub>@pbastowski</sub> -
  Svelte 3 starter with POI 12 and Prettier. Outputs web apps or web components.
- [`svelte-template-browserify`](https://github.com/soapdog/svelte-template-browserify)<sub>@soapdog</sub> -
  A Svelte template for browserify
- [`svelte-box`](https://github.com/antony/svelte-box)<sub>@antony</sub> -
  A truffle box for Svelte, a seed for building an Ethereum dapp using Truffle

### electron

- [`svelte-template-electron`](https://github.com/Rich-Harris/svelte-template-electron)<sub>@Rich-Harris</sub> -
  A template for building Electron apps with Svelte
  <sub>(**VERSION 2** but included here anyway)</sub>
- [`Sveltron`](https://github.com/Blade67/Sveltron)<sub>@Blade67</sub> -
  Electron Svelte boilerplate
- [`svelte-electron-template`](https://github.com/chuanqisun/svelte-electron-template)<sub>@chuanqisun</sub> -
  The bare minimum boilerplate to use Svelte in electron

### mobile

- [`svelte-cordova`](https://github.com/syonip/svelte-cordova)<sub>@syonip</sub> -
  Starter template for Cordova featuring hot reload
- [`svelte-phonegap`](https://github.com/lpshanley/svelte-phonegap)<sub>@lpshanley</sub> -
  Template for building phonegap hybrid applications with Svelte

## testing

- [`svelte-testing-library`](https://github.com/testing-library/svelte-testing-library)<sub>@testing-library</sub> -
  :chipmunk: Simple and complete Svelte DOM testing utilities that encourage good testing practices
- [`jest-transform-svelte`](https://github.com/rspieker/jest-transform-svelte)<sub>@rspieker</sub> -
  Jest Transformer for Svelte components
- [`svelte-test`](https://github.com/pngwn/svelte-test)<sub>@pngwn</sub> -
  Testing utilities for Svelte
- [`storybookjs`](https://github.com/storybookjs/storybook)<sub>@storybook</sub> -
  UI component dev & test

## routers

See [the FAQ](https://github.com/sveltejs/svelte/wiki/faq)
for some good info about Svelte routing solutions.
Many generic routers work great with Svelte,
and there are ones that use Svelte-specific idioms too.

### Svelte-specific routing

[Sapper](https://github.com/sveltejs/sapper) includes a nifty
filesystem-based routing solution along with a full app framework.

- [`svelte-routing`](https://github.com/EmilTholin/svelte-routing)<sub>@EmilTholin</sub> -
  A declarative Svelte routing library with SSR support
- [`svelte-state-renderer`](https://github.com/TehShrike/svelte-state-renderer)<sub>@TehShrike</sub> -
  abstract-state-router renderer for Svelte
- [`svelte-spa-router`](https://github.com/ItalyPaleAle/svelte-spa-router)<sub>@ItalyPaleAle</sub> -
  Router for SPAs using Svelte 3
- [`svero`](https://github.com/kazzkiq/svero)<sub>@kazzkiq</sub> -
  A simple router for Svelte 3
- [`swheel`](https://github.com/qutran/swheel)<sub>@qutran</sub> -
  Ultimate Svelte router
- [`svelte-router`](https://github.com/jamen/svelte-router)<sub>@jamen</sub> -
  Svelte router using a store and components.
- [`svelte-hash-router`](https://github.com/pynnl/svelte-hash-router)<sub>@pynnl</sub> -
  Simple Svelte 3 hash based router with global routes.
- [`svelte-easyroute`](https://github.com/lyohaplotinka/svelte-easyroute)<sub>@lyohaplotinka</sub> -
  Easy router for Svelte framework
- [`svelte-router-spa`](https://github.com/jorgegorka/svelte-router)<sub>@jorgegorka</sub> -
  Svelte Router adds routing to your Svelte apps. It's specially designed for Single Page Applications (SPA).
- [`svelte-router`](https://github.com/spaceavocado/svelte-router)<sub>@spaceavocado</sub> -
  Simple Svelte Router for Single Page Applications (SPA).
- [`svelte-page-router`](https://github.com/PaulMaly/svelte-page-router)<sub>@PaulMaly</sub> -
  Simple config-based router with DX similar to VueRouter. Works well on the server-side. Supports `preload` function (Sapper-like) to load page data before rendering.

### generic routing

- [`navaid`](https://github.com/lukeed/navaid)<sub>@lukeed</sub> -
  A navigation aid (aka, router) for the browser in 850 bytes~!
- [`abstract-state-router`](https://github.com/TehShrike/abstract-state-router)<sub>@TehShrike</sub> -
  Like ui-router, but without all the Angular. The best way to structure a single-page webapp.
- [`page.js`](https://github.com/visionmedia/page.js/)<sub>@visionmedia</sub> -
  Micro client-side router inspired by the Express router
- [`router5`](https://github.com/router5/router5)<sub>@router5</sub> -
  Flexible and powerful universal routing solution

## ui component sets

- [`svelma`](https://github.com/c0bra/svelma)<sub>@c0bra</sub> -
  Bulma components for Svelte
- [`smelte`](https://github.com/matyunya/smelte)<sub>@matyunya</sub> -
  Material design components for Svelte using Tailwind CSS
- [`svelte-toolbox`](https://github.com/svelte-toolbox/svelte-toolbox)<sub>@svelte-toolbox</sub> -
  A UI component library for Svelte implementing Google's Material Design specification
- [`svelte-material-ui`](https://github.com/hperrin/svelte-material-ui)<sub>@hperrin</sub> -
  Svelte Material UI Components
- [`sveltemantic`](https://github.com/titans-inc/sveltemantic)<sub>@titans-inc</sub> -
  Fomantic-UI components for Svelte 3
- [`sveltestrap`](https://github.com/bestguy/sveltestrap)<sub>@bestguy</sub> -
  Bootstrap 4 components for Svelte
- [`svelte-ui`](https://github.com/vikignt/svelte-ui)<sub>@vikignt</sub> -
  Simple Svelte 3 UI components

## components

- **[`svelte-virtual-list`](https://github.com/sveltejs/svelte-virtual-list)<sub>@sveltejs</sub>** -
  A virtual list component for Svelte apps
- **[`svelte-scroller`](https://github.com/sveltejs/svelte-scroller)<sub>@sveltejs</sub>** -
  A `<Scroller>` component for Svelte apps
- **[`svelte-subdivide`](https://github.com/sveltejs/svelte-subdivide)<sub>@sveltejs</sub>** -
  A component for building Blender-style layouts in Svelte apps
  <sub>(**VERSION 2** but included here anyway)</sub>
- [`svelte-scrollspy`](https://github.com/beyonk-adventures/svelte-scrollspy)<sub>@beyonk-adventures</sub> -
  Scroll Spy component for Svelte
- [`svelte-loadable`](https://github.com/kaisermann/svelte-loadable)<sub>@kaisermann</sub> -
  Dynamically load a Svelte component
- [`svelte-waypoint`](https://github.com/matyunya/svelte-waypoint)<sub>@matyunya</sub> -
  Lazyload images or anything component for Svelte
- [`svelte-inspect`](https://github.com/trbrc/svelte-inspect)<sub>@trbrc</sub> -
  console.log()-like interactive inspector for Svelte 3
- [`svelte-progressbar`](https://github.com/okrad/svelte-progressbar)<sub>@okrad</sub> -
  A multiseries, SVG progressbar component made with Svelte
- [`svelte-notifications`](https://github.com/beyonk-adventures/svelte-notifications)<sub>@beyonk-adventures</sub> -
  Svelte toast notifications component that can be used in any JS application
- [`svelte-notifications`](https://github.com/keenethics/svelte-notifications)<sub>@keenethics</sub> -
  Simple and flexible notifications system
- [`svelte-easy-crop`](https://github.com/ValentinH/svelte-easy-crop)<sub>@ValentinH</sub> -
  A Svelte component to crop images with easy interactions
- [`gdpr-cookie-consent-banner`](https://github.com/beyonk-adventures/gdpr-cookie-consent-banner)<sub>@beyonk-adventures</sub> -
  A GDPR compliant cookie consent banner implementation
- [`svelte-facebook-pixel`](https://github.com/beyonk-adventures/svelte-facebook-pixel)<sub>@beyonk-adventures</sub> -
  A facebook pixel module for Svelte / Sapper
- [`svelte-carousel`](https://github.com/beyonk-adventures/svelte-carousel)<sub>@beyonk-adventures</sub> -
  A super lightweight, super simple Carousel for Svelte 3
- [`multicarousel`](https://github.com/sciactive/multicarousel)<sub>@sciactive</sub> -
  A dependency free multiple item JavaScript carousel.
- [`svelte-color-picker`](https://github.com/qintarp/svelte-color-picker)<sub>@qintarp</sub> -
  A color picker component for Svelte
- [`svelte-sortable-list`](https://github.com/brunomolteni/svelte-sortable-list)<sub>@brunomolteni</sub> -
  A Svelte 3 component that implements a list with animated drag-n-drop functionality.
- [`svelte-image`](https://github.com/matyunya/svelte-image)<sub>@matyunya</sub> -
  Image processing with Sharp for Svelte
- [`svelte-image-encoder`](https://github.com/saabi/svelte-image-encoder)<sub>@saabi</sub> -
  An `<ImgEncoder>` Svelte component for editing and compressing profile pictures before upload to a server.
- [`svelte-calendar`](https://github.com/6eDesign/svelte-calendar)<sub>@6eDesign</sub> -
  A lightweight datepicker with neat animations and a unique UX.
- [`svelte-select`](https://github.com/rob-balfre/svelte-select)<sub>@rob-balfre</sub> -
  A select component for Svelte apps
- [`svelte-rate-it`](https://github.com/emrekara37/svelte-rate-it)<sub>@emrekara37</sub> -
  A rate component for Svelte apps
- [`svelte-grid`](https://github.com/vaheqelyan/svelte-grid)<sub>@vaheqelyan</sub> -
  A responsive, draggable and resizable grid layout, for Svelte.
- [`svelte-tabs`](https://github.com/joeattardi/svelte-tabs)<sub>@joeattardi</sub> -
  Tabs component for Svelte
- many many more.. [please send help](https://github.com/ryanatkn/awesome-svelte-resources/pulls)

## misc libraries

- **[`gestures`](https://github.com/sveltejs/gestures)<sub>@sveltejs</sub>** -
  Svelte actions for cross-platform gesture detection (work in progress)
- [`svelte-adapter`](https://github.com/pngwn/svelte-adapter)<sub>@pngwn</sub> -
  Use Svelte components with Vue and React
- [`svelte-i18n`](https://github.com/kaisermann/svelte-i18n)<sub>@kaisermann</sub> -
  Internationalization library for Svelte
- [`svelte-intl`](https://github.com/Panya/svelte-intl)<sub>@Panya</sub> -
  Internationalize your Svelte apps using format-message and Intl object
- [`svelte-writable-derived`](https://github.com/PikadudeNo1/svelte-writable-derived)<sub>@PikadudeNo1</sub> -
  Two-way data-transforming stores.
- [`svelte-webext-storage-adapter`](https://github.com/PikadudeNo1/svelte-webext-storage-adapter)<sub>@PikadudeNo1</sub> -
  Allows Firefox/Chrome extension authors to make writable stores based on `chrome.storage`.
- [`sveltedoc-parser`](https://github.com/alexprey/sveltedoc-parser)<sub>@alexprey</sub> -
  Generate a JSON documentation for a Svelte component
- [`svelte-css-vars`](https://github.com/kaisermann/svelte-css-vars)<sub>@kaisermann</sub> -
  Ever wanted to have reactive css variables in Svelte? What if I tell you there's a way?

### easily integrated state libraries

Svelte stores are
[natively compatible](https://github.com/sveltejs/svelte/issues/2549#issuecomment-488885660)
with [t39 Observables](https://github.com/tc39/proposal-observable),
[`rxjs`](https://github.com/ReactiveX/rxjs), and similar.

- [`rxjs`](https://github.com/ReactiveX/rxjs)<sub>@ReactiveX</sub> -
  A reactive programming library for JavaScript (<https://rxjs.dev>)
- [`immer`](https://github.com/immerjs/immer)<sub>@immerjs</sub> -
  Create the next immutable state by mutating the current one
- [`xstate`](https://github.com/davidkpiano/xstate)<sub>@davidkpiano</sub> -
  State machines and statecharts for the modern web.
- [`microstates.js`](https://github.com/microstates/microstates.js)<sub>@microstates</sub> -
  Composable State Primitives for JavaScript

### integrations with other libraries

- [`svelte-apollo`](https://github.com/timhall/svelte-apollo)<sub>@timhall</sub> -
  Svelte integration for Apollo GraphQL
- [`svelte-awesome`](https://github.com/RobBrazier/svelte-awesome)<sub>@RobBrazier</sub> -
  Awesome SVG icon component for Svelte JS, built with Font Awesome icons.
- [`svelte-fa`](https://github.com/Cweili/svelte-fa)<sub>@Cweili</sub> -
  Tiny FontAwesome 5 component for Svelte
- [`fa-svelte`](https://github.com/alphapeter/fa-svelte)<sub>@alphapeter</sub> -
  Font Awesome 5 for Svelte
- [`svelte-feather-icons`](https://github.com/dylanblokhuis/svelte-feather-icons)<sub>@dylanblokhuis</sub> -
  Feather icons for Svelte
- [`meteor-svelte`](https://github.com/meteor-svelte/meteor-svelte)<sub>@meteor-svelte</sub> -
  Build cybernetically enhanced web apps with Meteor and Svelte.
- [`prettier-plugin-svelte`](https://github.com/UnwrittenFun/prettier-plugin-svelte)<sub>@UnwrittenFun</sub> -
  Format your Svelte components using prettier.
- [`echarts-for-svelte`](https://github.com/liyuanqiu/echarts-for-svelte)<sub>@liyuanqiu</sub> -
  :chart_with_upwards_trend: Baidu Echarts(v3.0 & v4.0) components for Svelte wrapper.
- [`svelte-mapbox`](https://github.com/beyonk-adventures/svelte-mapbox)<sub>@beyonk-adventures</sub> -
  MapBox Map and Autocomplete components for Svelte (or Vanilla JS)
- [`svelte-flatpickr`](https://github.com/jacobmischka/svelte-flatpickr)<sub>@jacobmischka</sub> -
  Flatpickr component for Svelte

## example app showcase

> open source Svelte in the wild :rainbow::sparkles:

- **[`svelte-todomvc`](https://github.com/sveltejs/svelte-todomvc)<sub>@sveltejs</sub>** -
  TodoMVC implemented in Svelte (<https://svelte-todomvc.surge.sh>)
- **[`realworld`](https://github.com/sveltejs/realworld)<sub>@sveltejs</sub>** -
  Svelte/Sapper implementation of the RealWorld app (<https://svelte-realworld.now.sh>)
- **[`svelte-repl`](https://github.com/sveltejs/svelte-repl)<sub>@sveltejs</sub>** -
  The `<Repl>` component used on the Svelte website (<https://svelte.dev/repl>)
- **[`svelte-dbmonster`](https://github.com/sveltejs/svelte-dbmonster)<sub>@sveltejs</sub>** -
  Svelte implementation of DBMonster (<http://svelte-dbmonster.surge.sh>)
  <sub>(**VERSION 2** but included here anyway)</sub>
- **[`hn.svelte.dev`](https://github.com/sveltejs/hn.svelte.dev)<sub>@sveltejs</sub>** -
  Hacker News clone built with Svelte and Sapper (<https://hn.svelte.dev>)
- [`svelte-travel-transitions`](https://github.com/pngwn/svelte-travel-transitions)<sub>@pngwn</sub> -
  Native-like Page Transitions with Svelte and Sapper, A Travel App.
- [`new-tab`](https://github.com/MaxMilton/new-tab)<sub>@MaxMilton</sub> -
  ⚡ A high performance Google Chrome new tab page that gets you where you need to go faster.
- [`nau-chrome-tab`](https://github.com/trongthanh/nau-chrome-tab)<sub>@trongthanh</sub> -
  Beautiful New Tab extension for Chrome, Firefox and browsers support web extension
- [`Nomie`](https://github.com/open-nomie/nomie)<sub>@brandoncorbin</sub> -
  Mood and Life Tracker built with Svelte
- send [pull requests](https://github.com/ryanatkn/awesome-svelte-resources/pulls)!

### closed-source showcase

- NYTimes article:
  [A ‘Bridge’ to China, and Her Family’s Business, in the Trump Cabinet](https://www.nytimes.com/2019/06/02/us/politics/elaine-chao-china.html) -
  Uses the experimental **[`@sveltejs/gl`](https://github.com/sveltejs/gl)**
  to draw a 3d animated globe.

## native

- [`svelte-native`](https://github.com/halfnelson/svelte-native)<sub>@halfnelson</sub> -
  Svelte controlling native components via Nativescript

## experiments

- **[`gl`](https://github.com/sveltejs/gl)<sub>@sveltejs</sub>** -
  A (very experimental) project to bring WebGL to Svelte

## media

[<img src="svelte-horizontal.svg" align="right" height="100">](https://svelte.dev/blog)

- [Svelte's official blog](https://svelte.dev/blog)

### videos

- [Rich Harris - Rethinking reactivity - YGLF 2019](https://www.youtube.com/watch?v=AdNJ3fydeao)
- [Rich Harris - Computer, build me an app - JSConf EU 2018](https://www.youtube.com/watch?v=qqt6YxAZoOc)

### podcasts

- [Shop Talk #349 - Talking Svelte with Rich Harris](https://shoptalkshow.com/episodes/349/)
- [devmode.fm #44 - Svelte 3’s radical new approach to web frameworks](https://devmode.fm/episodes/svelte-3s-radical-new-approach-to-web-frameworks)
- [The Undefined Podcast #8 - Fake News and Frameworks with NYTimes Rich Harris](https://undefined.fm/radio/fake-news-and-frameworks-with-nytimes-rich-harris/)
- [Toolsday #93 - Svelte](https://spec.fm/podcasts/toolsday/293076)
- [Harry Wolff - A Svelte Chat with Rich Harris!](https://www.youtube.com/watch?v=48gHuY4w0hY)

## other lists

- **[`integrations`](https://github.com/sveltejs/integrations)<sub>@sveltejs</sub>** -
  Ways to incorporate Svelte into your stack
- [`awesome-svelte`](https://github.com/CalvinWalzel/awesome-svelte)<sub>@CalvinWalzel</sub> -
  A curated list of awesome things related to Svelte (includes v2 resources)
- [`svelte-sapper-community`](https://github.com/mindrones/svelte-sapper-community)<sub>@mindrones</sub> -
  Svelte/Sapper community map
- [`Why Svelte`](https://why-svelte-js.web.app/) -
  A collection of blog posts, videos, and other Svelte resources
  (<https://why-svelte-js.web.app>)

# [:sunflower:](license)
