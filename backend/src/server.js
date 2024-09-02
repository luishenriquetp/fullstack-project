const app = require('./app');

const PORT = 5000; // Porta definida diretamente no código

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
