//Before
var site = portalLib.getSite();
//After
var site = contentLib.getSite({
    key: req.params.contentId
});