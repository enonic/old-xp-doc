return {
    status: 200,
    body: "Hello World",
    headers: {
        "header1": "value1"
    },
    cookies: {
        "plain": "value",
        "complex": {
            value: "value",
            path: "/valid/path",
            domain: "enonic.com",
            comment: "Some cookie comments",
            maxAge: 2000,
            secure: false,
            httpOnly: false
        }
    }
};