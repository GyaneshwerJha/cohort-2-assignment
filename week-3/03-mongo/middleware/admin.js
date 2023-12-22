const { Admin } = require("../db");

// Middleware for handling auth
// TODO: Use try catch
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;
    const admin = Admin.findOne({username, password});
    
    if(admin){
        next();
    }
}

module.exports = adminMiddleware;