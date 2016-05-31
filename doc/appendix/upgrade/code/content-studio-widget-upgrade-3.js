//Before
var siteConfig = portalLib.getSiteConfig();
//After
var siteConfig = contentLib.getSiteConfig({
    key: contentId,
    applicationKey: app.name
});