# SneakerStore - Tienda de Zapatos Online

Una tienda de zapatos moderna construida con **Next.js 16**, diseñada para ser desplegada fácilmente en Render usando Docker.

## Características

- 🛒 Catálogo de productos con filtros por categoría y precio
- 🛍️ Carrito de compras con persistencia en localStorage
- 💳 Proceso de checkout completo
- 📱 Diseño totalmente responsivo (mobile-first)
- ⚡ Optimizado para rendimiento
- 🐳 Listo para Docker y Render
- 🎨 Diseño moderno y minimalista

## Tecnologías Utilizadas

- **Frontend**: Next.js 16, React 19, TailwindCSS
- **Almacenamiento**: LocalStorage (carrito)
- **Containerización**: Docker
- **Hosting**: Render

## Instalación Local

### Requisitos
- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clona o descarga el proyecto**
   \`\`\`bash
   git clone https://github.com/TU_USUARIO/sneaker-store.git
   cd sneaker-store
   \`\`\`

2. **Instala las dependencias**
   \`\`\`bash
   npm install
   \`\`\`

3. **Ejecuta en desarrollo**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Abre en tu navegador**
   \`\`\`
   http://localhost:3000
   \`\`\`

## Comandos Disponibles

\`\`\`bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Inicia la aplicación de producción
npm start

# Linting
npm run lint
\`\`\`

## Desplegar en Render

### Opción 1: Desde GitHub (Recomendado)

1. **Sube a GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "SneakerStore Next.js app"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/sneaker-store.git
   git push -u origin main
   \`\`\`

2. **Conecta con Render**
   - Ve a https://render.com
   - Haz clic en "New +" → "Web Service"
   - Selecciona "Connect a repository"
   - Busca "sneaker-store" y selecciónalo
   - Render detectará automáticamente el Dockerfile
   - Haz clic en "Create Web Service"

3. **¡Listo!** 
   - Tu app estará en vivo en ~2 minutos
   - URL: \`https://sneaker-store.onrender.com\`

### Opción 2: Usar Docker Localmente

\`\`\`bash
# Construir la imagen
docker build -t sneaker-store:latest .

# Ejecutar el contenedor
docker run -p 3000:3000 sneaker-store:latest
\`\`\`

Luego accede a \`http://localhost:3000\`

## Estructura del Proyecto

\`\`\`
├── app/
│   ├── page.tsx              # Página principal (catálogo)
│   ├── layout.tsx            # Layout principal
│   ├── globals.css           # Estilos globales
│   ├── cart/
│   │   └── page.tsx          # Página del carrito
│   └── checkout/
│       └── page.tsx          # Página de checkout
├── components/
│   ├── product-grid.tsx      # Grid de productos
│   ├── cart-summary.tsx      # Resumen del carrito
│   ├── checkout-form.tsx     # Formulario de pago
│   └── navbar.tsx            # Navegación
├── public/
│   └── [imágenes de productos]
├── Dockerfile                # Configuración Docker
├── .dockerignore             # Archivos a ignorar en Docker
└── next.config.mjs           # Configuración Next.js
\`\`\`

## Características del Carrito

- ✅ Agregar/remover productos
- ✅ Ajustar cantidades
- ✅ Persistencia con localStorage
- ✅ Cálculo automático de totales
- ✅ Descuento del 10% en órdenes mayores a \$100

## Características del Checkout

- ✅ Formulario de información personal
- ✅ Dirección de envío
- ✅ Información de tarjeta (mockup)
- ✅ Resumen de orden
- ✅ Confirmación de compra

## Variables de Entorno

Actualmente no requiere variables de entorno. Si deseas agregar en el futuro:

\`\`\`bash
# .env.local (no subir a GitHub)
NEXT_PUBLIC_API_URL=https://api.ejemplo.com
\`\`\`

## Desarrollo

### Agregar nuevos productos

Edita \`app/page.tsx\` y modifica el array \`products\`:

\`\`\`typescript
const products = [
  {
    id: 1,
    name: "Nike Air Force 1",
    price: 120,
    category: "running",
    image: "/white-nike-air-force-1.png",
    description: "Zapatilla clásica..."
  },
  // Agregar más productos...
];
\`\`\`

### Personalizar estilos

Todos los estilos usan TailwindCSS. Modifica los colores y fuentes en \`app/globals.css\`.

## Troubleshooting

### El carrito no persiste
- Verifica que localStorage esté habilitado en el navegador
- Abre DevTools → Application → LocalStorage

### Imágenes no cargan
- Asegúrate que las imágenes estén en \`/public\`
- Revisa la ruta en el componente

### Build falla en Render
- Revisa los logs en Render Dashboard
- Verifica que package.json tenga todas las dependencias
- Asegúrate que next.config.mjs sea válido

## Próximas Mejoras

- [ ] Integración con Stripe para pagos reales
- [ ] Sistema de administración
- [ ] Autenticación de usuarios
- [ ] Historial de órdenes
- [ ] Búsqueda y filtros avanzados
- [ ] Sistema de reseñas

## Licencia

MIT

## Soporte

Si tienes problemas:
1. Revisa los logs en Render
2. Abre un issue en GitHub
3. Verifica que Docker esté correctamente instalado

---

**¡Hecho con ❤️ usando Next.js!**
