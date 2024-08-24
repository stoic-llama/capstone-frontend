export default {
    handler,
    formattedDateNow,
    path: '/healthcheck'
}


function handler(req, res, formattedDateNow) {
    // try {
        // throw new Error("Test Error")
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify({
            name: 'capstone-frontend',
            message: 'OK',
            uptime: Math.floor(process.uptime()) + " seconds",
            timestamp: formattedDateNow() // new Date(Date.now()).toString() 
        }));
    // } catch (error) {
    //     throw new Error(error);
        // res.setHeader('Content-Type', 'application/json');
        // res.statusCode = 500;
        // res.end(JSON.stringify({
        //     name: 'capstone-frontend',
        //     message: error.message,
        //     uptime: Math.floor(process.uptime()) + " seconds",
        //     timestamp: formattedDateNow() // new Date(Date.now()).toString() 
        // }));
    // }
}

function formattedDateNow() {
    var result = "" 
    var d = new Date(Date.now())
 
    // format ---> 'YYYY/MM/D hh:mm:ss SSS'
 
    result = result + d.getFullYear()
             + "-"
             + String(d.getMonth() + 1).padStart(2, '0') // (d.getMonth()+1)
             + "-"
             + d.getDate().toString().padStart(2,0) 
             + " "
             + d.getHours().toString().padStart(2,0)
             + ":"
             + d.getMinutes().toString().padStart(2,0)
             + ":"
             + d.getSeconds().toString().padStart(2,0)
             // + "."
             // + d.getMilliseconds().toString().padStart(2,0)
 
    return result;
}