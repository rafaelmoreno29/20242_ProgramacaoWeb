const express = require('express');
const app = express();
app.use(express.json());

app.get("/produto", (request, response) => {
    return response.json({ mensagem: "teste" });
})

app.get("/somar/:numero1/:numero2", (request, response) => {
    const numero1 = request.params.numero1;
    const numero2 = request.params.numero2;
    const soma = parseFloat(numero1) + parseFloat(numero2);
    return response.json({ "soma": soma });
});

app.listen(3001, () => console.log('server running on port 3001')); 
