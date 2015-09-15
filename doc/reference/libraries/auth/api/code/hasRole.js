var auth = require('/lib/xp/auth');

var hasAdminAccess = auth.hasRole('system.admin.login');

log.info('The user ' + (hasAdminAccess ? 'has' : 'does not have') + ' access to the admin console.');
