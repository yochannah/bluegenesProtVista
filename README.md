# bluegenesProtVista

Wrapper around the uniprot protvista protein feature viewer

This is a prototype tool for the BlueGenes Tool API, and roughly fits the expected format of BlueGenes tool API behaviour.

### Note the following

 - **config.json** is read by BlueGenes to allow BlueGenes to know what type of data the tool supports.
 - **preview.png** is optional, but will be used in the longer term in a tool admin UI to allow people to enable / disable / configure tools. 
 - **package.json** is the default npm config but it also used by bluegenes to glean information like the script entry point (main), tool name and the tool's dependencies.
   - `dependencies` will be automatically installed by bluegenes
   - `devDependencies` will not be automatically installed and may be items like imtables (which bluegenes will provide on the window) or jquery. (versions to be confirmed).
   
### To set up locally

1. Clone the repo
2. `cd bluegenesProtVista` and then `npm install` to install dependencies.
3. Open demo.html to see the demo working live. 



   
