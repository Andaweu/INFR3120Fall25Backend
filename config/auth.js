//checks if the user is logged in when interacting with a page requiring it
//if not logged in the user is redirected to the login screen
function ensureLoggedIn(req, res, next) {
    if (req.isAuthenticated && req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}

module.exports = {ensureLoggedIn};