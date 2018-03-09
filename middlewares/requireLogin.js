module.exports = (req, res, next) => {
    if(!req.user){
        return res.status(401).send({error: 'You must log in!'});
    }
    // if the user is not logged in, return the response with error of status 401 and a message
    // otherwise proceed with function next();
    
    next();
};
// next is a function arguement we call when we are function is all done running
