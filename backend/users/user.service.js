const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    const user = await db.User.scope('withHash').findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.hash)))
        throw 'Username or password is incorrect';

    // Erfolgreiche Authentifizierung
    const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });  // 7 Tage "lebensdauer" des jwt tokens, aufgrund von "7d", könnte geändert werden
    return { ...omitHash(user.get()), token };
}

async function getAll() {
    return await db.User.findAll();
}

async function getById(id) {
    return await getUser(id);
}

async function create(params) {
    // Validierung, ob der User bzw. der Benutzername schon existiert
    if (await db.User.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    // Password wird mit bycrpyt gehashed (hier könnte falls gewünscht noch ein "salt" eingefügt werden)
    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    // User in der Datenbank einstellen
    await db.User.create(params);
}

async function update(id, params) {
    const user = await getUser(id);

    // Validierung
    const usernameChanged = params.username && user.username !== params.username;
    if (usernameChanged && await db.User.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    // password hashen
    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    // parameter in den user kopieren 
    Object.assign(user, params);
    await user.save();

    return omitHash(user.get());
}

async function _delete(id) {
    const user = await getUser(id);
    await user.destroy();
}

// Zusätzliche Funktionen

async function getUser(id) {
    const user = await db.User.findByPk(id);
    if (!user) throw 'User not found';
    return user;
}

function omitHash(user) {
    const { hash, ...userWithoutHash } = user;
    return userWithoutHash;
}