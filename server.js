const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // mecanismo de segurança entre diferentes origens (front e back)
app.use(express.json());

app.post('/login', (req, res) => {
  const { name, password } = req.body;
  
  // Verifique as credenciais
  if (name === 'alan.turing' && password === 'Enigma@123') {
    res.json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
