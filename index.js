"use strict";
//https://github.com/spiral/sf.js

//Add console shim for old IE
require("./lib/shim/console");

var sf = {//Describe all modules to use it in plugins too.
    modules: {
        core: {
            Ajax: require("./lib/core/Ajax"),
            BaseDOMConstructor: require("./lib/core/BaseDOMConstructor"),
            DomMutations:require("./lib/core/DomMutations"),
            Events: require("./lib/core/Events"),
            InstancesController: require("./lib/core/InstancesController")
        },
        helpers: {
            DOMEvents:require("./lib/helpers/DOMEvents"),
            domTools:require("./lib/helpers/domTools"),
            LikeFormData: require("./lib/helpers/LikeFormData"),
            tools: require("./lib/helpers/tools")
        }
    }
};

sf.instancesController = new sf.modules.core.InstancesController(sf);
sf.domMutation = new sf.modules.core.DomMutations(sf.instancesController);

//create global ajax
sf.ajax = new sf.modules.core.Ajax(window.csrfToken ? {//TODO move to spiral bindings
    headers: {
        "X-CSRF-Token": window.csrfToken
    }
} : null);

window.spiral = sf; //TODO remove?


window.spiralFrontend = sf;

if (!window.hasOwnProperty("sf")){//bind only if  window.sf is empty to avoid conflicts with other libs
    window.sf = sf;
}

require("./lib/vendor/formToObject"); //formToObject  for form
require("./lib/instances/form/Form.js"); //add form
require("./lib/instances/form/FormMessages/spiral"); //add form addon



//
//spiralFrontend.Core = {
//    instances: {
//        Form: {
//            self: Form,
//            FormMessages: {
//                spiral: require("./lib/instances/form/FormMessages/spiral.js")
//                //bootstrap: require("./lib/instances/form/FormMessages/bootstrap.js")
//                //materialLite: require("./FormMessages/materialLite.js")
//            }
//        }
//    }
//};

//spiralFrontend.lock = require("./lib/core/lock");

//spiralFrontend.instancesController.addInstanceType("form", "js-spiral-form", Form);











