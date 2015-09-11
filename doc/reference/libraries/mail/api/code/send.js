var mail = require('/lib/xp/mail');

var sendResult = mail.send({
    from: 'Sales Department <sales@enonic.com>',
    to: 'user@somewhere.org',
    subject: 'Email Test from Enonic XP',
    cc: 'other@example.org',
    bcc: ['support@enonic.com', 'other@enonic.com'],
    replyTo: 'support@enonic.com',
    body: 'Welcome to Enonic XP!' + '\r\n\r\n' + '- The Dev Team'
});