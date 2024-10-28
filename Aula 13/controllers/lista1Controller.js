exports.ex1 = (req, res) => {
    const palavra = req.query.palavra;
    let qtdeVogais = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].toLowerCase() === 'a' ||
            palavra[i].toLowerCase() === 'e' ||
            palavra[i].toLowerCase() === 'i' ||
            palavra[i].toLowerCase() === 'o' ||
            palavra[i].toLowerCase() === 'u') {
            qtdeVogais++;
        }
    }
    res.json({ "qtdeVogais": qtdeVogais });
};
