const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~8FQxiQyb#oKIiOfxX9PUrjkC9P3CMtEs34PvOKbas8q4nE0WbL_g'
};
