const genererMotDePasse = require('./index');

try {
    console.log("Mot de passe (10 caractères, sans symboles) :", genererMotDePasse(10));
    console.log("Mot de passe (16 caractères, avec symboles) :", genererMotDePasse(16, true));
} catch (error) {
    console.error("Erreur :", error.message);
}
