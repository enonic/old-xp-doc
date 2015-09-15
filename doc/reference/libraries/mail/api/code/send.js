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

var sendResultHtml = mail.send({
    from: 'me@enonic.com',
    to: 'user@somewhere.org',
    subject: 'HTML email test',
    body: '<h1>HTML Email!</h1><p>You can use headers to set the content type.</p>',
    headers: {
        'Content-Type': 'text/html; charset="UTF-8"'
    }
});

