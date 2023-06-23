import jwt from 'jsonwebtoken'

const secret = "mysuperdupersecret"

const token = jwt.sign({
    email: 'kecin.rieger@sap.com'
}, secret, {
    expiresIn: '1h',
    issuer: 'wwi21sebkjhkjhkjh',
    subject: 'kevin',
})

console.log(token)

// ANDERER SERVICE

console.log(jwt.verify(token, secret))
