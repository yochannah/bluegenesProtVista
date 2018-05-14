# bluegenesProtVista

Wrapper around the uniprot protvista protein feature viewer

This is a prototype tool for the BlueGenes Tool API, and roughly fits the expected format of BlueGenes tool API behaviour. It is loosely based on [this spec](https://gist.github.com/yochannah/69ab9d1fd9721cb9a701805832c39937)

### Note the following

 - **config.json** is read by BlueGenes to allow BlueGenes to know what type of data the tool supports.
 - **preview.png** is optional, but will be used in the longer term in a tool admin UI to allow people to enable / disable / configure tools.
 - **package.json** is the default npm config but it also used by bluegenes to glean information like the script entry point (main), tool name and the tool's dependencies.
   - `dependencies` will be automatically installed by bluegenes
   - `devDependencies` will not be automatically installed and may be items like imtables (which bluegenes will provide on the window) or jquery. (versions to be confirmed).
 - **src/index.js** is the important part - the visualiser is initialised here. Note the method name matches the package name, and note the method signature - this is what all tools will expect to receive from bluegenes
 - **demo.html** has comments explaining what's going on, too, but is mostly there so people can see what the vis looks like as part of a standalone package. It is optional.

### To set up locally

1. Clone the repo
2. `cd bluegenesProtVista` and then `npm install` to install dependencies.
3. Open demo.html to see the demo working live.

- Bluegenes will automatically generate code to pass the correct identifiers to dist/bundle.js

### Modifying the code

All of the editable source files for css and js are in `src`. To bundle for prod, run the following commands:

#### CSS

Assuming [less](http://lesscss.org/) is installed globally:

```
lessc src/style.css dist/style.css --clean-css
```

#### JS

Assuming [webpack](https://webpack.js.org/) is installed globally:

```
npx webpack
```
