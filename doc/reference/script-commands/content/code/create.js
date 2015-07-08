var result = execute('content.create', {
    name: 'mycontent',
    parentPath: '/a/b',
    displayName: 'My Content',
    draft: true,
    contentType: 'system:unstructured',
    data: {
        a: 1,
        b: 2,
        c: ['1', '2'],
        d: {
            e: {
                f: 3.6,
                g: true
            }
        }
    },
    x: {
        test: {
            a: 1
        }
    }
});

log.info('Content created with id ' + result._id);
