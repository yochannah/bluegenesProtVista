var bluegenesProtvista = function (el, service, package, state, config) {
    //protVista expects an accession, so convert intermine id to accession
    //TODO: How do we handle multiple values, e.g. list ids? 
    var columnToConvert = config.columnMapping[package.class][package.format];
    var accession = new imjs.Service(service)
        .findById(package.class, package.value)
        .then(function(response) {
            var ProtVista = require('ProtVista');
            var instance = new ProtVista({
                el: el,
                uniprotacc: response[columnToConvert]
        });
    });
}

