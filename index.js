/**
 *
 * @param {number} longueur 
 * @param {boolean} [inclureSymboles=false] 
 * @returns {string} 
 */
function genererMotDePasse(longueur, inclureSymboles = false) {
    if (longueur < 4) {
        throw new Error("La longueur du mot de passe doit être d'au moins 4 caractères.");
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chiffres = "0123456789";
    const symboles = "!@#$%^&*()-_+=<>?";
    let caracteres = alphabet + chiffres;

    if (inclureSymboles) {
        caracteres += symboles;
    }

    let motDePasse = "";
    for (let i = 0; i < longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[indexAleatoire];
    }

    return motDePasse;
}

module.exports = genererMotDePasse;
