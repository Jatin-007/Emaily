const passport = require ('passport'); 

module.exports = app=> {
    app.get(
        '/auth/google',
        passport.authenticate('google', 
            { 
            scope: ['profile', 'email'] 
            // using Google Strategy tool from passport to get access to google's oauth
            // scope refers to what data to be required from google. In this case it is profile information and email
        }
    ));
    
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {  
            res.redirect('/surveys');
        }
    );  
        // google inside passport.authenticate is provided inside passport's google strategy

    app.get('/api/logout', (req, res)=> {
        req.logout();
        res.redirect('/');
    }); 

    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    });
};
