module.exports = (req, res, next) => {
    const emailValid = (email) => {

        let emailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
        let emailItsOk = emailRegex.test(email);
        if(!emailItsOk) {
            res.status(400).json({ message: "Email non valide"})
        } else {
            next()
        }
    }
    emailValid(req.body.email)
};