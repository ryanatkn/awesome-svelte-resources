# awesome Svelte resources

[<img src="svelte-logo.svg" align="right" width="100">](https://svelte.dev)

> useful resources for [Svelte](https://svelte.dev) v3+

Please feel free to submit anything you find useful or interesting.
See [contributing.md](contributing.md) for more.

For [Sapper](https://github.com/sveltejs/sapper) resources,
check out _(insert link here if someone makes it)_.

See also [awesome-svelte](https://github.com/CalvinWalzel/awesome-svelte)
and [other awesome lists](https://github.com/sindresorhus/awesome).

## contents

- [official links](#official-links)
  - [language translations](#language-translations)
- [communities :city_sunrise:](#communities)
  - [Meetup groups](#meetup-groups)
  - [Telegram chat rooms](#telegram-chat-rooms)
- [integrations](#integrations)
  - [bundler plugins](#bundler-plugins)
  - [preprocessors](#preprocessors)
  - [cli tools](#cli-tools)
  - [editor tools](#editor-tools)
- [web app frameworks](#web-app-frameworks)
- [templates](#templates)
  - [electron templates](#electron-templates)
  - [mobile templates](#mobile-templates)
- [testing](#testing)
- [routers](#routers)
  - [Svelte-specific routing](#svelte-specific-routing)
  - [generic routing](#generic-routing)
- [components and libraries](#components-and-libraries)
  - [ui component sets](#ui-component-sets)
  - [web component sets](#web-component-sets)
  - [layout and structure](#layout-and-structure)
  - [inputs and widgets](#inputs-and-widgets)
  - [fonts and icons](#fonts-and-icons)
  - [forms and validation](#forms-and-validation)
  - [images](#images)
  - [charts](#charts)
  - [time and date](#time-and-date)
  - [notifications](#notifications)
  - [maps](#maps)
  - [internationalization](#internationalization)
  - [stores and state](#stores-and-state)
  - [interaction](#interaction)
  - [async loading](#async-loading)
  - [social and other 3rd party services](#social-and-other-3rd-party-services)
  - [development and documentation](#development-and-documentation)
  - [other components and libraries](#other-components-and-libraries)
- [native](#native)
- [experiments](#experiments)
- [example app showcase](#example-app-showcase)
- [media](#media)
  - [talks](#talks)
  - [podcasts and other videos](#podcasts-and-other-videos)
- [other lists and resources](#other-lists-and-resources)

> notes
>
> - See [contributing.md](contributing.md) for submission info.
> - Needs more links. Send pulls and issues!
> - Many project descriptions could be updated, clarified, expanded, etc.
> - If a project fails to meet acceptable quality standards,
>   please open an issue or PR to discuss removing it.

## official links

- **[svelte.dev](https://svelte.dev/)**
  - [Tutorial](https://svelte.dev/tutorial)
  - [API docs](https://svelte.dev/docs)
  - [Examples](https://svelte.dev/examples)
  - [REPL](https://svelte.dev/repl)
    - [your saved apps](https://svelte.dev/apps)
  - [Blog](https://svelte.dev/blog)
  - [FAQ](https://github.com/sveltejs/svelte/wiki/FAQ)
  - [Discord chat](https://svelte.dev/chat)
- **[`svelte`](https://github.com/sveltejs/svelte)<sub>@sveltejs</sub>** -
  Cybernetically enhanced web apps
- **[`sapper`](https://github.com/sveltejs/sapper)<sub>@sveltejs</sub>** -
  Military-grade progressive web apps, powered by Svelte
- **[integrations](https://github.com/sveltejs/integrations)<sub>@sveltejs</sub>** -
  Ways to incorporate Svelte into your stack
- **[branding](https://github.com/sveltejs/branding)<sub>@sveltejs</sub>** -
  Logos etc for Svelte and related projects
- **[rfcs](https://github.com/sveltejs/rfcs)<sub>@sveltejs</sub>** -
  RFCs for [changes to Svelte](https://github.com/sveltejs/rfcs/pulls)

### language translations

Internationalized versions of the official Svelte website.

- Russian - **[ru.svelte.dev](https://ru.svelte.dev/)** -
  [AlexxNB/svelte3-translation-ru](https://github.com/AlexxNB/svelte3-translation-ru)

## communities

Join in! :city_sunrise:

- **[official Discord chat](https://svelte.dev/chat)**
- **[@sveltejs on Twitter](https://twitter.com/sveltejs)**
- unofficial subreddit [/r/sveltejs](https://www.reddit.com/r/sveltejs/)

### Meetup groups

- [London Svelte Meetup](https://www.meetup.com/svelte/)
- [Svelte Society NYC](https://www.meetup.com/Svelte-Society/)
- [SvelteJS Israel](https://www.meetup.com/Sveltejs-IL/)
- [SvelteJS Utah](https://www.meetup.com/SvelteJS-Utah/)
- [Sveltejs Society Stockholm](https://www.meetup.com/Sveltejs-Society-Stockholm/)
- [Svelte Vienna](https://www.meetup.com/Svelte-Vienna/)

### Telegram chat rooms

- [:ru: Svelte [svelt]](https://t.me/sveltejs) (1000+ users)
- [:ru: Svelte [svelt] Public](https://t.me/sveltejs_public)
- [:ru: Svelte [svelt] Jobs](https://t.me/sveltejs_jobs)

## integrations

The official list of integrations is
**[sveltejs/integrations](https://github.com/sveltejs/integrations)**.
Look there first - they're mostly not duplicated here.
Maybe they [should be](https://github.com/ryanatkn/awesome-svelte-resources/pulls)?

### bundler plugins

- **[`svelte-loader`](https://github.com/sveltejs/svelte-loader)<sub>@sveltejs</sub>** -
  Webpack loader for Svelte components.
- **[`rollup-plugin-svelte`](https://github.com/rollup/rollup-plugin-svelte)<sub>@rollup</sub>** -
  Compile Svelte components with Rollup
- more at the **[official integrations repo](https://github.com/sveltejs/integrations)**

### preprocessors

- [`svelte-preprocess`](https://github.com/kaisermann/svelte-preprocess)<sub>@kaisermann</sub> -
  A Svelte preprocessor with baked in support for common preprocessors
- [`mdsvex`](https://github.com/pngwn/MDsveX)<sub>@pngwn</sub> -
  A markdown preprocessor for Svelte.
- [`svelte-ts-preprocess`](https://github.com/PaulMaly/svelte-ts-preprocess)<sub>@PaulMaly</sub> -
  Typescript preprocessor for Svelte 3
- [`@pyoner/svelte-ts-preprocess`](https://github.com/pyoner/svelte-typescript)<sub>@pyoner</sub> -
  Typescript monorepo for Svelte v3 (preprocess, template, types)
- [`svelte-preprocess-postcss`](https://github.com/TehShrike/svelte-preprocess-postcss)<sub>@TehShrike</sub> -
  PostCSS preprocessor
- [`svelte-preprocess-sass`](https://github.com/ls-age/svelte-preprocess-sass)<sub>@ls-age</sub> -
  SASS/SCSS preprocessor
- [`svelte-preprocess-less`](https://github.com/ls-age/svelte-preprocess-less)<sub>@ls-age</sub> -
  LESS preprocessor
- [`@modular-css/svelte`](https://github.com/tivac/modular-css/tree/master/packages/svelte)<sub>@modular-css</sub> -
  `modular-css` preprocessor
- see also **[the official list](https://github.com/sveltejs/integrations#preprocessors)**

Some components are bundled with specific preprocessors that they rely on;
those projects are listed under [components and libraries](#components-and-libraries).

### cli tools

- [`@pwa/cli`](https://github.com/lukeed/pwa)<sub>@lukeed</sub> -
  Universal PWA Builder (WIP)
- [`baelte`](https://github.com/kennethlarsen/baelte)<sub>@kennethlarsen</sub> -
  CLI tool for svelte to help you be productive
- [`svb`](https://github.com/himynameisdave/svb)<sub>@himynameisdave</sub> -
  A zero-config CLI to bundle Svelte apps (WIP)

### editor tools

- [svelte-vscode](https://github.com/UnwrittenFun/svelte-vscode)<sub>@UnwrittenFun</sub> -
  Svelte language support for VS Code
- [vim-svelte](https://github.com/evanleck/vim-svelte)<sub>@evanleck</sub> -
  Svelte JavaScript syntax highlighting for vim.
- [vim-svelte-plugin](https://github.com/leafOfTree/vim-svelte-plugin)<sub>@leafOfTree</sub> -
  Vim syntax and indent plugin for .svelte files
- [svelte-intellij](https://github.com/tomblachut/svelte-intellij)<sub>@tomblachut</sub> -
  Provides syntax highlighting of Svelte components in WebStorm and friends
- [`svelte-language-server`](https://github.com/UnwrittenFun/svelte-language-server)<sub>@UnwrittenFun</sub> -
  A WIP language server for Svelte
- [vscode-svelte-component-extractor](https://github.com/proverbial-ninja/vscode-svelte-component-extractor)<sub>@proverbial-ninja</sub> -
  Creates a new Svelte component from higlighted text
- [coc-svelte](https://github.com/coc-extensions/coc-svelte)<sub>@coc-extensions</sub> -
  Svelte support for (Neo)Vim

## web app frameworks

- **[`sapper`](https://github.com/sveltejs/sapper)<sub>@sveltejs</sub>** -
  Military-grade progressive web apps, powered by Svelte

## templates

To avoid downloading a template's git history,
installation via [`degit`](https://github.com/Rich-Harris/degit) is recommended:

```bash
npx degit sveltejs/template svelte-app
```

- **[sveltejs/template](https://github.com/sveltejs/template)** -
  Template for building basic applications with Svelte with rollup
- **[sveltejs/template-webpack](https://github.com/sveltejs/template-webpack)** -
  Template for building basic Svelte applications with webpack
- **[sveltejs/component-template](https://github.com/sveltejs/component-template)** -
  A base for building shareable Svelte components
- **[sveltejs/template-custom-element](https://github.com/sveltejs/template-custom-element)** -
  Template for building basic applications with Svelte and custom elements
- **[sveltejs/sapper-template](https://github.com/sveltejs/sapper-template)** -
  Starter template for Sapper apps
- [pyoner/svelte-typescript](https://github.com/pyoner/svelte-typescript) -
  Typescript monorepo for Svelte v3 (preprocess, template, types)
- [Axelen123/svelte-ts-template](https://github.com/Axelen123/svelte-ts-template) -
  Typescript template for Svelte v3
- [Shyam-Chen/svelte-play](https://github.com/Shyam-Chen/Svelte-Play) -
  A boilerplate with Material, Babel, PostCSS, and Webpack
- [Holben888/svelte-starter-template](https://github.com/Holben888/svelte-starter-template) -
  A small starter template to get up and running with Svelte v3
- [marcograhl/tailwindcss-svelte-starter](https://github.com/marcograhl/tailwindcss-svelte-starter) -
  Tailwindcss v1 + Svelte v3 = <3
- [muhajirdev/svelte-tailwind-template](https://github.com/muhajirdev/svelte-tailwind-template) -
  Svelte + Tailwind = ❤
- [fabiohvp/svelte-template](https://github.com/fabiohvp/svelte-template) -
  Svelte with materializecss + tailwindcss
- [justinekizhak/svelte-tailwind-template](https://github.com/justinekizhak/svelte-tailwind-template) -
  SvelteJS and TailwindCSS template
- [geakstr/svelte-3-rollup-typescript-vscode](https://github.com/geakstr/svelte-3-rollup-typescript-vscode) -
  Starter for Svelte 3/rollup/typescript/vscode
- [jorgegorka/svelte-firebase](https://github.com/jorgegorka/svelte-firebase) -
  A template to help you start developing SPAs with Svelte and Firebase.
- [ricalamino/svelte-firebase-auth](https://github.com/ricalamino/svelte-firebase-auth) -
  Svelte App with Firebase Authentication for all purposes
- [YogliB/svelte-component-template](https://github.com/YogliB/svelte-component-template) -
  A base for building shareable Svelte 3 components
- [neighbourhoodie/svelte-pouchdb-couchdb](https://github.com/neighbourhoodie/svelte-pouchdb-couchdb) -
  Offline-Capable todo list built with Svelte, PouchDB and CouchDB
- [OrdinaryJellyfish/svelte-routing-template](https://github.com/OrdinaryJellyfish/svelte-routing-template) -
  Svelte webpack template with routing and lazy-loading
- [angelozehr/svelte-example-museums](https://github.com/angelozehr/svelte-example-museums) -
  An example repo of a Svelte app that is IE11 compatible
- [pankod/svelte-boilerplate](https://github.com/pankod/svelte-boilerplate) -
  Svelte application boilerplate with Webpack, Sass, BabelJS, Fetch, PostCSS, Jest, and .Env
- [pbastowski/svelte-poi-starter](https://github.com/pbastowski/svelte-poi-starter) -
  Svelte 3 starter with POI 12 and Prettier. Outputs web apps or web components.
- [soapdog/svelte-template-browserify](https://github.com/soapdog/svelte-template-browserify) -
  A Svelte template for browserify
- [antony/svelte-box](https://github.com/antony/svelte-box) -
  A truffle box for Svelte, a seed for building an Ethereum dapp using Truffle
- [spaceavocado/svelte-router-template](https://github.com/spaceavocado/svelte-router-template) -
  Boilerplate template project for SPA router spaceavocado/svelte-router
- [beyonk-adventures/svelte-component-livereload-template](https://github.com/beyonk-adventures/svelte-component-livereload-template) -
  Component template with LiveReload and Jest unit testing
- [patoi/svelte-component-library-template](https://github.com/patoi/svelte-component-library-template) -
  A base for building Svelte component library.
- [brandonxiang/svelte-webpack-mpa](https://github.com/brandonxiang/svelte-webpack-mpa) -
  A template to create multi-page application powered by Webpack
- [jerriclynsjohn/svelte-storybook-tailwind](https://github.com/jerriclynsjohn/svelte-storybook-tailwind) -
  Svelte + Storybook + Tailwind - Starter Template
- [farhan2106/svelte-typescript](https://github.com/farhan2106/svelte-typescript) -
  Typescript + Storybook + Webpack boilerplate
- [farhan2106/svelte-typescript-ssr](https://github.com/farhan2106/svelte-typescript-ssr) -
  Typescript + Storybook + Webpack with SSR boilerplate
- [n0th1ng-else/svelte-typescript-sass](https://github.com/n0th1ng-else/svelte-typescript-sass) -
  Boilerplate code with Typescript and Sass bundled by Webpack
- [stephanepericat/svelte-boilerplate](https://github.com/stephanepericat/svelte-boilerplate) -
  Boilerplate with Webpack, Cypress, Travis CI, Storybook, and SASS
- [will-wow/svelte-typescript-template](https://github.com/will-wow/svelte-typescript-template) -
  Template with TypeScript, Babel, Jest, Svelte-Testing-Library, Eslint, and Prettier
- [tonyrewin/svelte3-ts-boilerplate](https://github.com/tonyrewin/svelte3-ts-boilerplate) -
  Starter pack for Rollup, Typescript, and VSCode
- [devghost/svelte](https://github.com/devghost/svelte) -
  Skeleton app with Parcel, Jest, ESLint, Prettier, Babel, Wallaby
- [SteveALee/svelte-code-cypress-project](https://github.com/SteveALee/svelte-code-cypress-project) -
  Template with VSCode, Prettier, ESLint, Cypress, and Rollup

### electron templates

- [Rich-Harris/svelte-template-electron](https://github.com/Rich-Harris/svelte-template-electron) -
  A template for building Electron apps with Svelte (**VERSION 2**)
- [Blade67/Sveltron](https://github.com/Blade67/Sveltron) -
  Electron Svelte boilerplate
- [chuanqisun/svelte-electron-template](https://github.com/chuanqisun/svelte-electron-template) -
  The bare minimum boilerplate to use Svelte in electron

### mobile templates

- [syonip/svelte-cordova](https://github.com/syonip/svelte-cordova) -
  Starter template for Cordova featuring hot reload
- [lpshanley/svelte-phonegap](https://github.com/lpshanley/svelte-phonegap) -
  Template for building phonegap hybrid applications with Svelte

## testing

- [`@testing-library/svelte`](https://github.com/testing-library/svelte-testing-library)<sub>@testing-library</sub> -
  Simple and complete DOM testing utilities that encourage good practices.
- [`jest-transform-svelte`](https://github.com/rspieker/jest-transform-svelte)<sub>@rspieker</sub> -
  Jest Transformer for Svelte components
- [`svelte-test`](https://github.com/pngwn/svelte-test)<sub>@pngwn</sub> -
  Testing utilities for Svelte
- [storybookjs](https://github.com/storybookjs/storybook)<sub>@storybook</sub> -
  UI component dev & test
- [`svelte-jest`](https://github.com/ktsn/svelte-jest)<sub>@ktsn</sub> -
  Jest Svelte component transformer

## routers

See [the FAQ](https://github.com/sveltejs/svelte/wiki/faq)
for some good info about Svelte routing solutions.
Many generic routers work great with Svelte,
and there are ones that use Svelte-specific idioms too.

### Svelte-specific routing

**[Sapper](https://github.com/sveltejs/sapper)** includes a nifty
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
- [`@jamen/svelte-router`](https://github.com/jamen/svelte-router)<sub>@jamen</sub> -
  Svelte router using a store and components.
- [`svelte-hash-router`](https://github.com/pynnl/svelte-hash-router)<sub>@pynnl</sub> -
  Simple Svelte 3 hash based router with global routes.
- [svelte-easyroute](https://github.com/lyohaplotinka/svelte-easyroute)<sub>@lyohaplotinka</sub> -
  Easy router for Svelte framework
- [`svelte-router-spa`](https://github.com/jorgegorka/svelte-router)<sub>@jorgegorka</sub> -
  Svelte router specially designed for Single Page Applications (SPA).
- [`@spaceavocado/svelte-router`](https://github.com/spaceavocado/svelte-router)<sub>@spaceavocado</sub> -
  Simple Svelte Router for Single Page Applications (SPA).
- [`svelte-page-router`](https://github.com/PaulMaly/svelte-page-router)<sub>@PaulMaly</sub> -
  Simple config-based router with DX similar to VueRouter. Works well on the server-side.
- [`svelte-router`](https://github.com/jikkai/svelte-router)<sub>@jikkai</sub> -
  Router component for Svelte
- [`svelte-navaid`](https://github.com/jacwright/svelte-navaid)<sub>@jacwright</sub> -
  A Svelte router powered by [lukeed/navaid](https://github.com/lukeed/navaid)
- [`@slick-for/svelte`](https://github.com/shavyg2/slick-for-svelte)<sub>@shavyg2</sub> -
  Manage your views and routing using class decorators and dependency injection
- [`crayon-svelte`](https://github.com/alshdavid/crayon)<sub>@alshdavid</sub> -
  Framework agnostic UI router for SPAs with specific support for Svelte
- [`svelte-filerouter`](https://github.com/jakobrosenberg/svelte-filerouter)<sub>@jakobrosenberg</sub> -
  Filesystem-based router inspired by [Sapper's routing](https://sapper.svelte.dev/docs#Routing)

### generic routing

- [`navaid`](https://github.com/lukeed/navaid)<sub>@lukeed</sub> -
  A navigation aid (aka, router) for the browser in 850 bytes~!
- [`abstract-state-router`](https://github.com/TehShrike/abstract-state-router)<sub>@TehShrike</sub> -
  Like ui-router, but without all the Angular. The best way to structure a SPA.
- [`page`](https://github.com/visionmedia/page.js/)<sub>@visionmedia</sub> -
  Micro client-side router inspired by the Express router
- [`router5`](https://github.com/router5/router5)<sub>@router5</sub> -
  Flexible and powerful universal routing solution

## components and libraries

If you have any submissions, updates, or ideas to improve
this list of links, please feel free to open an
[issue](https://github.com/ryanatkn/awesome-svelte-resources/issues) or
[PR](https://github.com/ryanatkn/awesome-svelte-resources/pulls).

### ui component sets

- [`svelma`](https://github.com/c0bra/svelma)<sub>@c0bra</sub> -
  Bulma components for Svelte
- [`smelte`](https://github.com/matyunya/smelte)<sub>@matyunya</sub> -
  Material design components for Svelte using Tailwind CSS
- [`svelte-toolbox`](https://github.com/svelte-toolbox/svelte-toolbox)<sub>@svelte-toolbox</sub> -
  A UI component library for Svelte implementing Google's Material Design specification
- [`svelte-material-ui`](https://github.com/hperrin/svelte-material-ui)<sub>@hperrin</sub> -
  Svelte Material UI Components
- [`svelteify`](https://github.com/exybore/svelteify)<sub>@exybore</sub> -
  Material components library for Svelte using the stylesheet of Vuetify
- [`sveltemantic`](https://github.com/titans-inc/sveltemantic)<sub>@titans-inc</sub> -
  Fomantic-UI components for Svelte 3
- [`sveltestrap`](https://github.com/bestguy/sveltestrap)<sub>@bestguy</sub> -
  Bootstrap 4 components for Svelte
- [`svelte-ui`](https://github.com/vikignt/svelte-ui)<sub>@vikignt</sub> -
  Simple Svelte 3 UI components
- [`svmd`](https://github.com/hkh12/svmd)<sub>@hkh12</sub> -
  Easy-to-use, Customizable Material Design components for Svelte.

### web component sets

- [`zoo-web-components`](https://github.com/zooplus/zoo-web-components)<sub>@zooplus</sub> -
  Web-components library built with Svelte.

### layout and structure

- **[`@sveltejs/svelte-virtual-list`](https://github.com/sveltejs/svelte-virtual-list)<sub>@sveltejs</sub>** -
  A virtual list component for Svelte apps
- **[`@sveltejs/svelte-scroller`](https://github.com/sveltejs/svelte-scroller)<sub>@sveltejs</sub>** -
  A `<Scroller>` component for Svelte apps
- **[`@sveltejs/svelte-subdivide`](https://github.com/sveltejs/svelte-subdivide)<sub>@sveltejs</sub>** -
  A component for building Blender-style layouts in Svelte apps (**VERSION 2**)
- [`svelte-grid`](https://github.com/vaheqelyan/svelte-grid)<sub>@vaheqelyan</sub> -
  A responsive, draggable and resizable grid layout, for Svelte.
- [`svelte-sortable-list`](https://github.com/brunomolteni/svelte-sortable-list)<sub>@brunomolteni</sub> -
  A list with animated drag-n-drop functionality.
- [`@beyonk/svelte-carousel`](https://github.com/beyonk-adventures/svelte-carousel)<sub>@beyonk-adventures</sub> -
  A super lightweight, super simple carousel for Svelte 3
- [`multicarousel`](https://github.com/sciactive/multicarousel)<sub>@sciactive</sub> -
  A dependency free multiple item JavaScript carousel.
- [`svelte-swipe`](https://github.com/SharifClick/svelte-swipe)<sub>@SharifClick</sub> -
  A carousel with touch support
- [`svelte-tabs`](https://github.com/joeattardi/svelte-tabs)<sub>@joeattardi</sub> -
  Tabs component for Svelte
- [`svelte-media-query`](https://github.com/xelaok/svelte-media-query)<sub>@xelaok</sub> -
  CSS media queries in Svelte
- [`svelte-match-media`](https://github.com/pearofducks/svelte-match-media)<sub>@pearofducks</sub> -
  a matchMedia plugin for Svelte 3
- [`svelte-watch-resize`](https://github.com/xelaok/svelte-watch-resize)<sub>@xelaok</sub> -
  Watch element resize in Svelte
- [`svelte-simple-modal`](https://github.com/flekschas/svelte-simple-modal)<sub>@flekschas</sub> -
  A simple, small, and content-agnostic modal for Svelte
- [`svelte-popover`](https://github.com/vaheqelyan/svelte-popover)<sub>@vaheqelyan</sub> -
  A smart popover component for Svelte

### inputs and widgets

- **[`@sveltejs/svelte-repl`](https://github.com/sveltejs/svelte-repl)<sub>@sveltejs</sub>** -
  The `<Repl>` component used on the Svelte website
- [`svelte-color-picker`](https://github.com/qintarp/svelte-color-picker)<sub>@qintarp</sub> -
  A color picker component for Svelte
- [`svelte-select`](https://github.com/rob-balfre/svelte-select)<sub>@rob-balfre</sub> -
  A select component for Svelte apps
- [`svelte-rate-it`](https://github.com/emrekara37/svelte-rate-it)<sub>@emrekara37</sub> -
  A rate component for Svelte apps
- [`waxwing-rating`](https://github.com/dmitrykurmanov/waxwing-rating)<sub>@dmitrykurmanov</sub> -
  rating widget for the web
- [`@beyonk/gdpr-cookie-consent-banner`](https://github.com/beyonk-adventures/gdpr-cookie-consent-banner)<sub>@beyonk-adventures</sub> -
  A GDPR compliant cookie consent banner implementation
- [`svelte-inspect`](https://github.com/trbrc/svelte-inspect)<sub>@trbrc</sub> -
  console.log()-like interactive inspector for Svelte 3
- [`@okrad/svelte-progressbar`](https://github.com/okrad/svelte-progressbar)<sub>@okrad</sub> -
  A multiseries, SVG progressbar component made with Svelte
- [Browser REPL JS](https://github.com/milafrerichs/browser-repl-js)<sub>@milafrerichs</sub> -
  A Javascript REPL (code editor and code results) component
- [Simple Svelte Autocomplete](https://github.com/pstanoev/simple-svelte-autocomplete)<sub>@pstanoev</sub> -
  Simple autocomplete / typeahead component for Svelte

### fonts and icons

- [`svelte-icons`](https://github.com/gibdig/svelte-icons)<sub>@gibdig</sub> -
  Icon components for Svelte, featuring many icon sets
- [`svelte-awesome`](https://github.com/RobBrazier/svelte-awesome)<sub>@RobBrazier</sub> -
  Awesome SVG icon component for Svelte JS, built with Font Awesome icons.
- [`svelte-fa`](https://github.com/Cweili/svelte-fa)<sub>@Cweili</sub> -
  Tiny FontAwesome 5 component for Svelte
- [`fa-svelte`](https://github.com/alphapeter/fa-svelte)<sub>@alphapeter</sub> -
  Font Awesome 5 for Svelte
- [`svelte-feather-icons`](https://github.com/dylanblokhuis/svelte-feather-icons)<sub>@dylanblokhuis</sub> -
  Feather icons for Svelte

### forms and validation

See the [ui component sets](#ui-component-sets) section for more.

- [`@spaceavocado/svelte-form`](https://github.com/spaceavocado/svelte-form)<sub>@spaceavocado</sub> -
  Simple Svelte form model handler and input validations.
- [`svelte-forms`](https://github.com/chainlist/svelte-forms)<sub>@chainlist</sub> -
  Svelte forms validation made easy
- [`svelte-forms-lib`](https://github.com/tjinauyeung/svelte-forms-lib)<sub>@tjinauyeung</sub> -
  A lightweight library for managing forms in Svelte
- [`sveltejs-forms`](https://github.com/mdauner/sveltejs-forms)<sub>@mdauner</sub> -
  Form components using Yup for validation

### images

- [`svelte-waypoint`](https://github.com/matyunya/svelte-waypoint)<sub>@matyunya</sub> -
  Lazyload images or anything component for Svelte
- [`svelte-image`](https://github.com/matyunya/svelte-image)<sub>@matyunya</sub> -
  Image processing with Sharp for Svelte
- [`svelte-image-encoder`](https://github.com/saabi/svelte-image-encoder)<sub>@saabi</sub> -
  An `<ImgEncoder>` component for editing and compressing profile pictures
- [`svelte-easy-crop`](https://github.com/ValentinH/svelte-easy-crop)<sub>@ValentinH</sub> -
  A Svelte component to crop images with easy interactions

### charts

- [`echarts-for-svelte`](https://github.com/liyuanqiu/echarts-for-svelte)<sub>@liyuanqiu</sub> -
  Baidu Echarts(v3.0 & v4.0) components for Svelte wrapper.
- [`svelte-fusioncharts`](https://github.com/priyanjitdey94/svelte-fusioncharts)<sub>@priyanjitdey94</sub> -
  Svelte component for FusionCharts JavaScript charting library

### time and date

- [`svelte-calendar`](https://github.com/6eDesign/svelte-calendar)<sub>@6eDesign</sub> -
  A lightweight datepicker with neat animations and a unique UX.
- [`svelte-flatpickr`](https://github.com/jacobmischka/svelte-flatpickr)<sub>@jacobmischka</sub> -
  Flatpickr component for Svelte

### notifications

- [`@beyonk/svelte-notifications`](https://github.com/beyonk-adventures/svelte-notifications)<sub>@beyonk-adventures</sub> -
  Svelte toast notifications that can be used in any JS application
- [`svelte-notifications`](https://github.com/keenethics/svelte-notifications)<sub>@keenethics</sub> -
  Simple and flexible notifications system

### maps

- [`@beyonk/svelte-mapbox`](https://github.com/beyonk-adventures/svelte-mapbox)<sub>@beyonk-adventures</sub> -
  Mapbox integration for Svelte.
- [`@beyonk/svelte-googlemaps`](https://github.com/beyonk-adventures/svelte-googlemaps)<sub>@beyonk-adventures</sub> -
  Google Maps integration for Svelte.
- [`svelte-pick-a-place`](https://github.com/jimutt/svelte-pick-a-place)<sub>@jimutt</sub> -
  Svelte component for position and area selection with Leaflet.

### internationalization

- [`svelte-i18n`](https://github.com/kaisermann/svelte-i18n)<sub>@kaisermann</sub> -
  Internationalization library for Svelte
- [`svelte-intl`](https://github.com/Panya/svelte-intl)<sub>@Panya</sub> -
  Internationalize your Svelte apps using format-message and Intl object

### stores and state

- [`svelte-writable-derived`](https://github.com/PikadudeNo1/svelte-writable-derived)<sub>@PikadudeNo1</sub> -
  Two-way data-transforming stores.
- [`svelte-apollo`](https://github.com/timhall/svelte-apollo)<sub>@timhall</sub> -
  Svelte integration for Apollo GraphQL
- [Svelte for Meteor](https://github.com/meteor-svelte/meteor-svelte)<sub>@meteor-svelte</sub> -
  Build cybernetically enhanced web apps with Meteor and Svelte.
- [`svelte-webext-storage-adapter`](https://github.com/PikadudeNo1/svelte-webext-storage-adapter)<sub>@PikadudeNo1</sub> -
  Writable stores based on `chrome.storage` for Firefox/Chrome extensions.
- [`svelte-observable`](https://github.com/timhall/svelte-observable)<sub>@timhall</sub> -
  Use observables in Svelte components with ease.
- [`svelte-mobx`](https://github.com/xelaok/svelte-mobx)<sub>@xelaok</sub> -
  Reactive MVVM with MobX & Svelte.
- [`svelte-redux-connect`](https://github.com/kolodziejczak-sz/svelte-redux-connect)<sub>@kolodziejczak-sz</sub> -
  Redux binding to Svelte based on react-redux
- [`svql`](https://github.com/pateketrueke/svql)<sub>@pateketrueke</sub> -
  Wrapper for FetchQL, a GraphQL query client

### interaction

- **[`@sveltejs/gestures`](https://github.com/sveltejs/gestures)<sub>@sveltejs</sub>** -
  Svelte actions for cross-platform gesture detection (work in progress)
- [`@beyonk/svelte-scrollspy`](https://github.com/beyonk-adventures/svelte-scrollspy)<sub>@beyonk-adventures</sub> -
  Scroll Spy component for Svelte

### async loading

- [`svelte-loadable`](https://github.com/kaisermann/svelte-loadable)<sub>@kaisermann</sub> -
  Dynamically load a Svelte component
- [`svelte-content-loader`](https://github.com/PaulMaly/svelte-content-loader)<sub>@PaulMaly</sub> -
  SVG placeholder components for loading content

### social and other 3rd party services

- [`@beyonk/svelte-google-analytics`](https://github.com/beyonk-adventures/svelte-google-analytics)<sub>@beyonk-adventures</sub> -
  Google Analytics tracking module for Svelte / Sapper
- [`@beyonk/svelte-facebook-pixel`](https://github.com/beyonk-adventures/svelte-facebook-pixel)<sub>@beyonk-adventures</sub> -
  A Facebook pixel module for Svelte / Sapper
- [`@beyonk/svelte-facebook-customer-chat`](https://github.com/beyonk-adventures/svelte-facebook-customer-chat)<sub>@beyonk-adventures</sub> -
  A Facebook customer chat integration for Svelte / Sapper
- [`@beyonk/svelte-trustpilot`](https://github.com/beyonk-adventures/svelte-trustpilot)<sub>@beyonk-adventures</sub> -
  Trustpilot Trustboxes for Svelte / Sapper.

### development and documentation

- [Svelte DevTools](https://github.com/RedHatter/svelte-devtools)<sub>@RedHatter</sub> -
  Chrome/Firefox extension that allows inspection of Svelte components and state
- [`sveltedoc-parser`](https://github.com/alexprey/sveltedoc-parser)<sub>@alexprey</sub> -
  Generate a JSON documentation for a Svelte component
- [`prettier-plugin-svelte`](https://github.com/UnwrittenFun/prettier-plugin-svelte)<sub>@UnwrittenFun</sub> -
  Format your Svelte components using Prettier.
- [`svelte-inspector`](https://github.com/qutran/svelte-inspector)<sub>@qutran</sub> -
  Development helper for inspecting and opening Svelte components in your editor
- [`svelte-dev-helper`](https://github.com/ekhaled/svelte-dev-helper)<sub>@ekhaled</sub> -
  Helper for Svelte components to ease development. Used by `svelte-loader`

### other components and libraries

- [`svelte-adapter`](https://github.com/pngwn/svelte-adapter)<sub>@pngwn</sub> -
  Use Svelte components with Vue and React
- [`svelte-css-vars`](https://github.com/kaisermann/svelte-css-vars)<sub>@kaisermann</sub> -
  Ever wanted to have reactive css variables in Svelte? What if I tell you there's a way?

## native

- [svelte-native](https://github.com/halfnelson/svelte-native)<sub>@halfnelson</sub> -
  Svelte controlling native components via Nativescript

## experiments

- **[`@sveltejs/gl`](https://github.com/sveltejs/gl)<sub>@sveltejs</sub>** -
  A (very experimental) project to bring WebGL to Svelte

## example app showcase

> open source Svelte in the wild

- **[Svelte TodoMVC](https://github.com/sveltejs/svelte-todomvc)<sub>@sveltejs</sub>** -
  TodoMVC implemented in Svelte (<https://svelte-todomvc.surge.sh>)
- **[RealWorld example app](https://github.com/sveltejs/realworld)<sub>@sveltejs</sub>** -
  Svelte/Sapper implementation of the RealWorld app (<https://svelte-realworld.now.sh>)
- **[Svelte REPL](https://github.com/sveltejs/svelte-repl)<sub>@sveltejs</sub>** -
  The `<Repl>` component used on the Svelte website (<https://svelte.dev/repl>)
- **[Svelte DBMonster](https://github.com/sveltejs/svelte-dbmonster)<sub>@sveltejs</sub>** -
  Svelte implementation of DBMonster (<http://svelte-dbmonster.surge.sh>) (**VERSION 2**)
- **[hn.svelte.dev](https://github.com/sveltejs/hn.svelte.dev)<sub>@sveltejs</sub>** -
  Hacker News clone built with Svelte and Sapper (<https://hn.svelte.dev>)
- [svelte-travel-transitions](https://github.com/pngwn/svelte-travel-transitions)<sub>@pngwn</sub> -
  Native-like Page Transitions with Svelte and Sapper, A Travel App.
- [New Tab](https://github.com/MaxMilton/new-tab)<sub>@MaxMilton</sub> -
  ⚡ A high performance Google Chrome new tab page that gets you where you need to go faster.
- [NAU Tab](https://github.com/trongthanh/nau-chrome-tab)<sub>@trongthanh</sub> -
  Beautiful New Tab extension for Chrome, Firefox and browsers support web extension
- [Perfect Home](https://github.com/tborychowski/perfect-home)<sub>@tborychowski</sub> -
  Firefox newtab/home replacement
- [Nomie](https://github.com/open-nomie/nomie)<sub>@brandoncorbin</sub> -
  Mood and Life Tracker built with Svelte
- [palettes](https://github.com/gka/palettes)<sub>@gka</sub> -
  A tool for creating nice, percerptually correct and colorblind-safe color palettes.
- send [pull requests](https://github.com/ryanatkn/awesome-svelte-resources/pulls)!

## media

[<img src="svelte-horizontal.svg" align="right" height="100">](https://svelte.dev/blog)

- **[Svelte's official blog](https://svelte.dev/blog)**
- **[@sveltejs on Twitter](https://twitter.com/sveltejs)**

### talks

- [Rich Harris - Rethinking reactivity - YGLF 2019](https://www.youtube.com/watch?v=AdNJ3fydeao)
- [Rich Harris - Computer, build me an app - JSConf EU 2018](https://www.youtube.com/watch?v=qqt6YxAZoOc)

### podcasts and other videos

- [Shop Talk #349 - Talking Svelte with Rich Harris](https://shoptalkshow.com/episodes/349/)
- [devmode.fm #44 - Svelte 3’s radical new approach to web frameworks](https://devmode.fm/episodes/svelte-3s-radical-new-approach-to-web-frameworks)
- [The Undefined Podcast #8 - Fake News and Frameworks with NYTimes Rich Harris](https://undefined.fm/radio/fake-news-and-frameworks-with-nytimes-rich-harris/)
- [Toolsday #93 - Svelte](https://spec.fm/podcasts/toolsday/293076)
- [Harry Wolff - A Svelte Chat with Rich Harris!](https://www.youtube.com/watch?v=48gHuY4w0hY)
- [The Frontside Podcast - Svelte and Reactivity with Rich Harris](https://frontside.io/podcast/svelte-and-reactivity-with-rich-harris/)
- [egghead.io - Svelte 3 with Rich Harris](https://egghead.io/lessons/egghead-svelte-3-with-rich-harris)

## other lists and resources

- **[integrations](https://github.com/sveltejs/integrations)<sub>@sveltejs</sub>** -
  Ways to incorporate Svelte into your stack
- [awesome-svelte](https://github.com/CalvinWalzel/awesome-svelte)<sub>@CalvinWalzel</sub> -
  A curated list of awesome things related to Svelte (includes v2 resources)
- [svelte-sapper-community](https://github.com/mindrones/svelte-sapper-community)<sub>@mindrones</sub> -
  Svelte/Sapper community map
- [Why Svelte](https://why-svelte-js.web.app/) -
  A collection of blog posts, videos, and other Svelte resources
  (<https://why-svelte-js.web.app>)
- [Svelte Status](http://www.sveltestatus.com/) -
  Weekly curated blogs and tools for Svelte developers.

## license

[CC0](license) (public domain)

# [:sunflower:](#awesome-svelte-resources)
