exports.ex1 = (req, res) => {
    const palavra = req.query.palavra;
    let qtdeVogais = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].tolowercase() === 'a' ||
            palavra[i].tolowercase() === 'e' ||
            palavra[i].tolowercase() === 'i' ||
            palavra[i].tolowercase() === 'o' ||
            palavra[i].tolowercase() === 'u') {
            qtdeVogais++;
        }
    }
    res.json({ "qtdeVogais": qtdeVogais });
};
