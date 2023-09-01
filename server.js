const express = require('express');
const next = require('next');
const sequelize = require('./utils/db');
require('dotenv').config();


const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  server.use(express.json());

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.all('/api', (req, res) => {
    app.render(req, res, '/404', req.query);
  });


  const PORT = process.env.PORT || 3000;

  const start = async () => {
    try {
      await sequelize.authenticate()
        .then(() => {
          console.log('Подключение к базе данных установлено успешно');
        })
        .catch((error) => {
          console.error('Ошибка в подлючении:', error);
        });

      await sequelize.sync()
        .then(() => {
          console.log('Все модели были успешно синхронизированы');
        })
        .catch((error) => {
          console.error('Ошибка в файле server.js to synchronize models with the database:', error);
        });

      server.listen(PORT, () => console.log(`::::::::...The server is running on the port: ${PORT}...::::::::`));
    } catch (err) {
      console.log('error start: ', err);
    }
  };

  start();
});
