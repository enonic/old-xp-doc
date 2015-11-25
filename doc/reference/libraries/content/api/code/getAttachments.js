var contentLib = require('/lib/xp/content');

var attachments = contentLib.getAttachments('/features/js-libraries/mycontent');
var name, attachment;

if (!attachments) {
    log.info('Content was not found');
} else {
    for (name in attachments) {
        attachment = attachmens[name];
        log.info('Attachment: name = %s, size = %s, label = %s, mimeType = %s', attachment.name,
            attachment.size, attachment.label, attachment.mimeType);
    }
}
