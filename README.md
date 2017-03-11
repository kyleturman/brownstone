# Brownstone

Brownstone is meant to be a starting place for you to create your own opinionated Sass-based CSS web toolkit.

The normalize file removes all style from any elements and relies completely on css to style all elements.

For more information on what it includes and how it works, look at `demo/index.html`.

## Including in your project
You can either...
- [Download a release](https://github.com/kyleturman/brownstone/releases])
- Include a submodule in your project with the `source_only` branch like so `git submodule add -b source_only https://github.com/kyleturman/brownstone.git your/scss/path`.
- Clone into your project directly with no git history like so `git clone --depth=1 --branch=source_only https://github.com/kyleturman/brownstone.git your/scss/path rm -rf !$/.git`

## Development
If you want to develop locally outside of a specific project...
- Clone this repo from master
- Run `npm install`
- Start the development server with `gulp`.
