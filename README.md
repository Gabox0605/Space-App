# Space App 🌌

Space App es una aplicación de galería interactiva desarrollada con **React** y **Styled Components**, diseñada para explorar las maravillas del universo. La aplicación ofrece una experiencia fluida y visualmente atractiva, adaptada tanto para computadoras de escritorio como para dispositivos móviles y tablets.

## 🚀 Características

- **Galería Dinámica:** Visualización de imágenes espaciales con títulos y fuentes.
- **Buscador Inteligente:** Filtrado en tiempo real mediante una barra de búsqueda que normaliza caracteres (ignora tildes y mayúsculas).
- **Filtros por Etiquetas (Tags):** Categorización rápida por Estrellas, Galaxias, Lunas y Nebulosas.
- **Favoritos:** Funcionalidad para marcar tus imágenes preferidas.
- **Modal de Zoom:** Visualización detallada con descripciones extendidas para cada fotografía.
- **Diseño Responsivo:** 
  - **Desktop/Tablet:** Mantiene una estructura lateral organizada con escalado de componentes.
  - **Móvil:** Transición automática a un diseño de columna única para optimizar la navegación táctil.

## 🛠️ Tecnologías Utilizadas

- **React:** Biblioteca principal para la construcción de la interfaz.
- **Styled Components:** Gestión de estilos mediante CSS-in-JS y Media Queries avanzadas.
- **Vite:** Entorno de desarrollo rápido y moderno.
- **JSON:** Almacenamiento local de datos para la galería y populares.

## 📦 Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 📂 Estructura del Proyecto

- `src/components/`: Componentes modulares (Cabecera, Banner, Galería, etc.).
- `src/App.jsx`: Componente principal que gestiona el estado global de la aplicación.
- `src/fotos.json`: Fuente de datos para la galería principal.