var express = require('express');
var router = express.Router();
//
var path = require('path');
var upload = require('jquery-file-upload-middleware');

//文件上传服务
router.post('/', upload.fileHandler({
        uploadDir: path.join(__dirname, '../public/images'),
        uploadUrl: '/images',
        acceptFileTypes:/\.(gif|jpe?g|png)$/i
    })
);

module.exports = router;