# GADMA - Gestión y Administración de Materiales para Bomberos

## 📌 Descripción del Proyecto
GADMA es una aplicación web diseñada para ayudar en la gestión y administración de materiales en los cuarteles de bomberos. Su objetivo es proporcionar una plataforma robusta, segura y escalable para el control de inventarios, movimientos de materiales y notificaciones.

## 🚀 Tecnologías Utilizadas
- **Frontend:** React con Next.js y Tailwind CSS
- **Backend:** Node.js con NestJS (alternativa: Django en Python)
- **Base de Datos:** Firestore (Firebase) o PostgreSQL (Google Cloud SQL)
- **Autenticación:** Firebase Auth o JWT
- **Hosting y CI/CD:** Google Cloud Run / Firebase Hosting + GitHub Actions

## 📂 Estructura del Proyecto
```
📂 gadma/
┣ 📂 frontend/    → Código de la app web
┣ 📂 backend/     → API y lógica del servidor
┣ 📂 database/    → Esquemas y migraciones
┣ 📂 docs/        → Documentación del proyecto
┣ 📂 .github/     → Configuración para CI/CD
┣ 📜 README.md    → Información general del proyecto
```

## ⚡ Primeros Pasos
1. **Clonar el repositorio:**
   ```sh
   git clone https://github.com/fiweredo/gadma.git
   ```
2. **Instalar dependencias:**
   - Para el frontend:
     ```sh
     cd frontend
     npm install
     ```
   - Para el backend:
     ```sh
     cd backend
     npm install
     ```
3. **Ejecutar los servidores de desarrollo:**
   - Frontend:
     ```sh
     npm run dev
     ```
   - Backend:
     ```sh
     npm run start:dev
     ```




