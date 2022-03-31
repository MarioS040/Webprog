module.exports = validateRequest;

function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // Inkludieren aller Error
        allowUnknown: true, // Ignorieren unbekannter props
        stripUnknown: true // Entfernen unbekannter props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        next(`Validierungs error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}