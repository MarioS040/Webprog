const jwt = require('express-jwt');
const { secret } = require('config.json');
const db = require('_helpers/db');

module.exports = authorize;

function authorize() {
    return [
        // Authentifizierung des JWT tokens mit HS256
        jwt({ secret, algorithms: ['HS256'] }),

        // Anhängen des ganzen User Objektes
        async (req, res, next) => {
            //user ID finden 
            const user = await db.User.findByPk(req.user.sub);

            // prüfung, ob der User noch existiert
            if (!user)
                return res.status(401).json({ message: 'Unauthorized' });

            // Returne die Authenzifizierung
            req.user = user.get();
            next();
        }
    ];
}