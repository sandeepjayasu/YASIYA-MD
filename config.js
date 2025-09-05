const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~MAYS3T7Z#atzFMWbuSv8qTjcK2KlNMNqn_otbX_z5f69z_aOgZmw'
};
