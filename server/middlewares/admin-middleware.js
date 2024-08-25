const adminMiddleware = async (req, res, next) =>{
    try {
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            res.status(403).json({
                message : "Access Denied!...Only admins can access this page"
            })
        }
        next();
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = adminMiddleware;