//Before
var content = portalLib.getContent();
//After
var content = contentLib.get({
    key: req.params.contentId
});