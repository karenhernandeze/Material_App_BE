const auth = async (req, res, next) => {
   let token = req.headers.token
   if(!token || token != "auth-123"){
       res.status(401).json({error: "Unauthorized", "href": "http://localhost:1111/"}).send(); 
   }
   next(); 
  }
  
  module.exports = auth;