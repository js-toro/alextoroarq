# Alex Toro Arquitectos | `alextoroarquitectos`

Sitio web institucional de Alex Toro Arquitectos, firma de Medellín (Colombia) con más de 20 años de experiencia en diseño arquitectónico, especializada en vivienda multifamiliar.

Está publicado en [alextoroarquitectos.com](https://alextoroarquitectos.com).

## Propósito

Presentar a la firma y su portafolio, y recibir solicitudes de contacto de clientes potenciales.

El sitio ofrece estas secciones:

- **Inicio**: presentación de la firma, galería destacada y proyectos seleccionados.
- **Nosotros**: quiénes son y cómo trabajan.
- **Servicios**: servicios de diseño y modelado que ofrece la firma.
- **Portafolio**: proyectos clasificados en multifamiliar, unifamiliar y otros, con una página de detalle por proyecto.
- **Contacto**: formulario que envía el mensaje por correo electrónico.

El contenido del portafolio se mantiene como archivos JSON e imágenes en `public/data`, sin base de datos.

## Stack

Next.js 14 (App Router), React 18, TypeScript, SCSS, Redux Toolkit y Resend para el envío de correo.

El código sigue una arquitectura por capas en `src/`: `domain`, `application`, `infrastructure` y `ui`.

## Desarrollo

```bash
npm install
npm run dev
```

El sitio queda disponible en [http://localhost:3000](http://localhost:3000). El envío de correo requiere definir las variables de entorno en un archivo `.env` local, que no debe versionarse.
