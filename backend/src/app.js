import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';

//cargar las variables de entorno
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

//middleware para ver solicitudes
app.use((req, res, next) => {
  console.log(`📥 [${req.method}] ${req.url}`);
  console.log("🧾 Headers:", req.headers);
  console.log("📦 Body:", req.body);
  next();
});


// Rutas
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// ruta /
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SambaDesk</title>
        <style>
          body {
            font-family: sans-serif;
            background-color: #f7f7f7;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            text-align: center;
          }
          h1 {
            color: #2c3e50;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Bienvenido a SambaDesk Backend</h1>
          <p>El servidor está corriendo correctamente 🎉</p>
        </div>
      </body>
    </html>
  `);
});


// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Backend SambaDesk corriendo en http://localhost:${PORT}`);
});
