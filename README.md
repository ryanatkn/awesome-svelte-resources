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
- [sample apps](#sample-apps)
- [testing](#testing)
- [routers](#routers)
  - [Svelte-specific routing](#svelte-specific-routing)
  - [generic routing](#generic-routing)
- [misc libraries](#misc-libraries)
  - [integrations with other libraries](#integrations-with-other-libraries)
  - [easily integrated state libraries](#easily-integrated-state-libraries)
- [ui component sets](#ui-component-sets)
- [misc components](#misc-components)
  - [non-svelte components](#non-svelte-components)
- [examples](#examples)
  - [closed-source examples](#closed-source-examples)
- [native](#native)
- [experiments](#experiments)
- [media](#media)
  - [videos](#videos)
  - [podcasts](#podcasts)
- [other lists](#other-lists)

> possible improvements
>
> - Needs more links. Send pulls and issues!
> - Some sections need better organization, or at least more subheadings.
> - If a project fails to meet acceptable quality standards,
>   please open an issue or PR to discuss removing it.
> - It'd be nice if GitHub had a way to embed
>   a project's summary line in another document. (does it??)
>   These will get out of date. Maybe some scripting is in order.
>   (maybe/probably someone already did that somewhere)

## official links

- [svelte.dev](https://svelte.dev/)
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
- **[`sapper`](https://github.com/sveltejs/sapper)<sub>@sveltejs</sub>** -
  Military-grade progressive web apps, powered by Svelte

## integrations

The official list of integrations is
**[`@sveltejs/integrations`](https://github.com/sveltejs/integrations)**.
Look there first - they're mostly not duplicated here.
Maybe they [should be](https://github.com/ryanatkn/awesome-svelte-resources/pulls)?

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
- [`svelte-language-server`](https://github.com/UnwrittenFun/svelte-language-server)<sub>@UnwrittenFun</sub> -
  A WIP language server for Svelte

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
- [`Svelte-Play`](https://github.com/Shyam-Chen/Svelte-Play)<sub>@Shyam-Chen</sub> -
  A boilerplate for Svelte, Material, Babel, and PostCSS. Webpack
- [`svelte-starter-template`](https://github.com/Holben888/svelte-starter-template)<sub>@Holben888</sub> -
  A small starter template to get up and running with Svelte v3
- [`tailwindcss-svelte-starter`](https://github.com/marcograhl/tailwindcss-svelte-starter)<sub>@marcograhl</sub> -
  Tailwindcss v1 + Svelte v3 = <3
- [`svelte-tailwind-template`](https://github.com/muhajirdev/svelte-tailwind-template)<sub>@muhajirdev</sub> -
  Svelte + Tailwind = ❤
- [`svelte-3-rollup-typescript-vscode`](https://github.com/geakstr/svelte-3-rollup-typescript-vscode)<sub>@geakstr</sub> -
  Starter for svelte 3/rollup/typescript/vscode
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

### electron

- [`svelte-template-electron`](https://github.com/Rich-Harris/svelte-template-electron)<sub>@Rich-Harris</sub> -
  A template for building Electron apps with Svelte
  **VERSION 2** <sub>(but included here anyway)</sub> -
- [`Sveltron`](https://github.com/Blade67/Sveltron)<sub>@Blade67</sub> -
  Electron Svelte boilerplate
- [`svelte-electron-template`](https://github.com/chuanqisun/svelte-electron-template)<sub>@chuanqisun</sub> -
  The bare minimum boilerplate to use svelte in electron

### mobile

- [`svelte-cordova`](https://github.com/syonip/svelte-cordova)<sub>@syonip</sub> -
  Starter template for Cordova featuring hot reload

## sample apps

- **[`svelte-todomvc`](https://github.com/sveltejs/svelte-todomvc)<sub>@sveltejs</sub>** -
  TodoMVC implemented in Svelte
- **[`realworld`](https://github.com/sveltejs/realworld)<sub>@sveltejs</sub>** -
  Svelte/Sapper implementation of the RealWorld app

## testing

- [`svelte-testing-library`](https://github.com/testing-library/svelte-testing-library)<sub>@testing-library</sub> -
  :chipmunk: Simple and complete Svelte DOM testing utilities that encourage good testing practices
- [`jest-transform-svelte`](https://github.com/rspieker/jest-transform-svelte)<sub>@rspieker</sub> -
  Jest Transformer for Svelte components
- [`svelte-test`](https://github.com/pngwn/svelte-test)<sub>@pngwn</sub> -
  Testing utilities for Svelte

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
  Ultimate svelte router
- [`svelte-router`](https://github.com/jamen/svelte-router)<sub>@jamen</sub> -
  Svelte router using a store and components.
- [`svelte-hash-router`](https://github.com/pynnl/svelte-hash-router)<sub>@pynnl</sub> -
  Simple Svelte 3 hash based router with global routes.

### generic routing

- [`navaid`](https://github.com/lukeed/navaid)<sub>@lukeed</sub> -
  A navigation aid (aka, router) for the browser in 850 bytes~!
- [`abstract-state-router`](https://github.com/TehShrike/abstract-state-router)<sub>@TehShrike</sub> -
  Like ui-router, but without all the Angular. The best way to structure a single-page webapp.
- [`page.js`](https://github.com/visionmedia/page.js/)<sub>@visionmedia</sub> -
  Micro client-side router inspired by the Express router
- [`router5`](https://github.com/router5/router5)<sub>@router5</sub> -
  Flexible and powerful universal routing solution

## misc libraries

- **[`gestures`](https://github.com/sveltejs/gestures)<sub>@sveltejs</sub>** -
  Svelte actions for cross-platform gesture detection (work in progress)
- [`svelte-adapter`](https://github.com/pngwn/svelte-adapter)<sub>@pngwn</sub> -
  Use Svelte components with Vue and React
- [`svelte-i18n`](https://github.com/kaisermann/svelte-i18n)<sub>@kaisermann</sub> -
  Internationalization library for Svelte
- [`svelte-writable-derived`](https://github.com/PikadudeNo1/svelte-writable-derived) -
  Two-way data-tranforming stores.
- [`svelte-webext-storage-adapter`](https://github.com/PikadudeNo1/svelte-webext-storage-adapter) -
  Allows Firefox/Chrome extension authors to make writable stores based on `chrome.storage`.

### integrations with other libraries

- [`svelte-apollo`](https://github.com/timhall/svelte-apollo)<sub>@timhall</sub> -
  Svelte integration for Apollo GraphQL
- [`svelte-awesome`](https://github.com/RobBrazier/svelte-awesome)<sub>@RobBrazier</sub> -
  Awesome SVG icon component for Svelte JS, built with Font Awesome icons.
- [`fa-svelte`](https://github.com/alphapeter/fa-svelte)<sub>@alphapeter</sub> -
  Font Awesome 5 for svelte.js
- [`meteor-svelte`](https://github.com/meteor-svelte/meteor-svelte)<sub>@meteor-svelte</sub> -
  Build cybernetically enhanced web apps with Meteor and Svelte.
- [`prettier-plugin-svelte`](https://github.com/UnwrittenFun/prettier-plugin-svelte)<sub>@UnwrittenFun</sub> -
  Format your svelte components using prettier.

### easily integrated state libraries

- [`immer`](https://github.com/immerjs/immer)<sub>@immerjs</sub> -
  Create the next immutable state by mutating the current one
- [`xstate`](https://github.com/davidkpiano/xstate)<sub>@davidkpiano</sub> -
  State machines and statecharts for the modern web.
- [`microstates.js`](https://github.com/microstates/microstates.js)<sub>@microstates</sub> -
  Composable State Primitives for JavaScript

## ui component sets

- [`svelma`](https://github.com/c0bra/svelma)<sub>@c0bra</sub> -
  Bulma components for Svelte
- [`smelte`](https://github.com/matyunya/smelte)<sub>@matyunya</sub> -
  Material design components for Svelte using Tailwind CSS
- [`svelte-toolbox`](https://github.com/svelte-toolbox/svelte-toolbox)<sub>@svelte-toolbox</sub> -
  A UI component library for Svelte implementing Google's Material Design specification

## misc components

- **[`svelte-virtual-list`](https://github.com/sveltejs/svelte-virtual-list)<sub>@sveltejs</sub>** -
  A virtual list component for Svelte apps
- **[`svelte-scroller`](https://github.com/sveltejs/svelte-scroller)<sub>@sveltejs</sub>** -
  A `<Scroller>` component for Svelte apps
- [`svelte-scrollspy`](https://github.com/beyonk-adventures/svelte-scrollspy)<sub>@beyonk-adventures</sub> -
  Scroll Spy component for Svelte
- [`svelte-loadable`](https://github.com/kaisermann/svelte-loadable)<sub>@kaisermann</sub> -
  Dynamically load a svelte component
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
- [`svelte-color-picker`](https://github.com/qintarp/svelte-color-picker)<sub>@qintarp</sub> -
  A color picker component for svelte
- [`svelte-sortable-list`](https://github.com/brunomolteni/svelte-sortable-list)<sub>@brunomolteni</sub> -
  A svelte 3 component that implements a list with animated drag-n-drop functionality.
- [`svelte-image`](https://github.com/matyunya/svelte-image)<sub>@matyunya</sub> -
  Image processing with Sharp for Svelte
- many many more.. [please send help](https://github.com/ryanatkn/awesome-svelte-resources/pulls)

### non-svelte components

- [`Pikaday`](https://github.com/Pikaday/Pikaday)<sub>@Pikaday</sub> -
  A refreshing JavaScript Datepicker — lightweight, no dependencies, modular CSS

## examples

- [`svelte-travel-transitions`](https://github.com/pngwn/svelte-travel-transitions)<sub>@pngwn</sub> -
  Native-like Page Transitions with Svelte and Sapper, A Travel App.
- send [pull requests](https://github.com/ryanatkn/awesome-svelte-resources/pulls)!

### closed-source examples

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

# :sunflower:
