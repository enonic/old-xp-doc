var i18n = require('/lib/xp/i18n');

var complex_message = i18n.localize({
    key: 'complex_message'
});

var message_multi_placeholder = i18n.localize({
    key: 'message_multi_placeholder',
    locale: "no",
    values: ["John", "London"]
});
