export default {
    handler(req, res) {
        try {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({
                message: 'OK',
                uptime: Math.floor(process.uptime()) + " seconds",
                timestamp: new Date(Date.now()).toString() 
            }));
        } catch (error) {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 500;
            res.end(JSON.stringify({
                message: error.message,
                uptime: Math.floor(process.uptime()) + " seconds",
                timestamp: new Date(Date.now()).toString() 
            }));
        }
    },
    path: '/healthcheck'
  }