var auth = require('/lib/xp/auth');

var pwd = auth.generatePassword();
log.info('New password: %s', pwd);
