var portal = require('/lib/xp/portal');

// Get the current site.
var site = portal.getSite();

// Find the site configuration for this app in current site.
var siteConfig = site.siteConfigs['com.enonic.first.app'];
