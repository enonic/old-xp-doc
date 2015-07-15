var portal = require('/lib/xp/portal');

// Get the current site.
var site = portal.getSite();

// Find the module configuration for this module in current site.
var moduleConfig = site.moduleConfigs['com.enonic.first.module'];

// Get the current content. It holds the context of the current execution
// session, including information about regions in the page.
var content = portal.getContent();

// Include info about the region of the current content in the parameters
// list for the rendering.
var mainRegion = content.page.regions["main"];

// Extend the model from previous example
var model = {
    name: "Michael",
    mainRegion: mainRegion,
    moduleConfig: moduleConfig
};
