var useragent = require('express-useragent');

function generateUUID (version) {

    switch (version) {
        case 'timestamp':
            const uuidv1 = require('uuid/v1');
            return uuidv1()
            break;
        case 'random':
            const uuidv4 = require('uuid/v5');
            return uuidv4()
            break;
        default:
            const uuidv5 = require('uuid/v5');
            // ... using predefined URL namespace (for, well, URLs) 
            uuidv5('mail.technicalprb.com', uuidv5['URL']);
            return uuidv5['URL']
            break;
    }
}

function getUserSession(req, machineId) {

   var  source = req.header('user-agent'),
        us = useragent.parse(source || {});

    return {
        agent: {
            isMobile:  us? us.isMobile : '',
            isBot: us? us.isBot : '',
            browser: us? us.browser : '',
            version: us? us.version : '',
            os: us? us.os : '',
            platform: us? us.platform : '',
            source: source || '',
        }, // User Agent we get from headers
        referrer: req.header('referrer') || '', //  Likewise for referrer
        ip: req.header('x-forwarded-for') || req.connection.remoteAddress, // Get IP - allow for proxy
        device: { // Get screen info that we passed in url post data
            OsUUID: machineId,
            type: req.device.type.toUpperCase()
        }
    }
}

module.exports.getUserSession = getUserSession
module.exports.generateUUID = generateUUID