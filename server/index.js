const express = require('express');
const next = require('next');

const server = express();
const port = parseInt(process.env.PORT, 10) || 3030;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// set the header
server.set('x-powered-by', dev)
// initail nextjs
function initApp() {
    app.prepare().then(() => {
        server.get('/api/test', (req, res) => {
            res.json({
                code: 1,
                data: 'ok'
            })
        })
    
        server.get('/ser/id:', (req, res) => {
            return handle(req, res);
        })
    
        server.get('*', (req, res) => {
            return handle(req, res);
        });
    
        try {
            server.listen(port, '0.0.0.0', () => {
              console.log(`> Ready for the new url: ${port}`)  
            })
        } catch (err) {
            console.error(err)
        }
    })
}

module.exports = {
    initApp
}