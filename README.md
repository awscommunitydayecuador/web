# AWS Community Day Ecuador 2025

Landing page oficial para el AWS Community Day Ecuador 2025, desarrollada con Next.js y Tailwind CSS.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Countdown en Tiempo Real**: Cuenta regresiva hasta el evento
- **Navegación Fluida**: Menú de navegación con scroll suave
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Carga rápida y optimizada

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React para producción
- **TypeScript**: Tipado estático para mejor desarrollo
- **Tailwind CSS**: Framework de CSS utility-first
- **React Hooks**: Estado y efectos del lado del cliente
- **Responsive Design**: Diseño adaptativo

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/aws-community-day-ecuador.git
   cd aws-community-day-ecuador
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
aws-community-day-ecuador/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal
├── components/
│   ├── Navbar.tsx           # Componente de navegación
│   ├── Hero.tsx             # Sección hero principal
│   ├── Countdown.tsx        # Componente de countdown
│   ├── About.tsx            # Sección acerca del evento
│   ├── Venue.tsx            # Información del lugar
│   └── Footer.tsx           # Pie de página
├── public/
│   └── logo-aws-community-day.png
├── tailwind.config.ts       # Configuración de Tailwind
├── next.config.js           # Configuración de Next.js
└── package.json
```

## 🎨 Personalización

### Colores AWS
Los colores oficiales de AWS están definidos en `tailwind.config.ts`:
- `aws-orange`: #FF9900
- `aws-blue`: #232F3E
- `aws-dark-blue`: #1B2530
- `aws-light-blue`: #37475A

### Fuentes
El proyecto utiliza la fuente Onest Variable para una apariencia moderna y legible.

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Configura el directorio de publicación: `.next`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: info@awscommunityday.ec
- **Website**: https://awscommunityday.ec
- **Twitter**: @AWSCDEcuador

## 🙏 Agradecimientos

- Comunidad AWS Ecuador
- Organizadores del evento
- Contribuidores y voluntarios

---

Desarrollado con ❤️ por la comunidad AWS Ecuador 