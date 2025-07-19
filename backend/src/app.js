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

// Puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Backend SambaDesk corriendo en http://localhost:${PORT}`);
});
