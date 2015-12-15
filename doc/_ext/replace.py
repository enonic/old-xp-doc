def setup(app):
    app.connect('source-read', replace_version)
    return {'version': '0.1'}

def replace_version(app, docname, source):
    src = source[0]
    src = src.replace('${version}', app.config.version)
    src = src.replace('${release}', app.config.release)
    source[0] = src
