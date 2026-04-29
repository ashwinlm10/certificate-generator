const jwt = require('jsonwebtoken')

const protect = (req, res, next) => {
    //token from the header
    const token = req.headers.authorization?.split(' ')[1]

    //if not token
    if(!token){
        return res.status(401).json({message: 'no token!' })
    }

    try{
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // save decode data to req.user
        req.user = decoded

        //continue to next middleware route
        next()
    }catch(error){
        return res.status(401).json({ message: 'Invalid token!'})
    }
}
module.exports = protect