//Before
var siteConfig = portalLib.getSiteConfig();
//After
var siteConfig = contentLib.getSiteConfig({
    key: req.params.contentId,
    applicationKey: app.name
});