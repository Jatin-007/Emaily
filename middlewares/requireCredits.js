module.exports = (req, res, next) => {
    if(req.user.credits < 1){
        return res.status(403).send({error: 'Not enough credits!'});
    }
    // status code does not specifically required... just provides an instinct
    // if the user have less than 1 credits show error
    
    next();
};
// next is a function arguement we call when we are function is all done running
