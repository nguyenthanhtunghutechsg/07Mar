const fs = require('node:fs');

function controlRes(res, code, data) {
    res.statusCode = code;
    res.write(data);
}

module.exports = {
    ReadView: function (viewPath, res) {
        fs.readFile(viewPath, (error, data) => {
            if (error) {
                controlRes(res, 404, "<h1>File not found</h1>")
            } else {
                controlRes(res, 200, data)
            }
            res.end();
        })
    }
}