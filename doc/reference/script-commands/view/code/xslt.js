var view = resolve('view/fruit.xsl');

var result = execute('xslt.render', {
    view: view,
    model: {
        fruits: [
            {
                name: 'Apple',
                color: 'Red'
            },
            {
                name: 'Pear',
                color: 'Green'
            }
        ]
    }
});
