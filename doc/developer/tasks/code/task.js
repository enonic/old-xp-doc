var taskLib = require('/lib/xp/task');

exports.run = function (params) {

    var count = params.count || 42;

    taskLib.progress({info: 'Initializing task'});

    for (var i = 0; i < count; i++) {
        taskLib.progress({
            info: 'Processing item ' + (i + 1),
            current: i,
            total: count
        });

        processItem(i);
    }

    taskLib.progress({info: 'Task completed'});

};
