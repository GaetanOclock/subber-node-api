const express = require('express');
const app = express();

app.use(express.static('/public'));
app.use(express.json());

require('./utils/relationships').associate();

const routers = ['original', 'slot', 'sub', 'user', 'video'];
routers.forEach(routerName => {
    const routerItem = require(`./router/${routerName}`);
    app.use('/' + routerName, routerItem);
});

app.use((req, res) => {
    res.status(404);
    res.send({
        message: "Resource not found"
    });
});

app.listen(3000, () => {
    console.log('serveur démarré sur http://localhost:3000');
});