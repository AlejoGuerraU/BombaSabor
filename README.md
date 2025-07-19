Integrantes: Juan Sebastián Lopera · Alejandro Guerra · Brayan Flórez

Enlace a Vercel: https://sistemarestauranteequipo5-gestiones.vercel.app/ 

En esta presentación del proyecto final de Gestión de Restaurante, mostramos el desarrollo completo de nuestro aplicativo, enfocado principalmente en el apartado front-end. Para su diseño, partimos de interfaces gráficas elaboradas inicialmente en Figma. En esta herramienta, combinamos dos modelos diferentes para crear uno solo, que luego implementamos en el producto final.

Proceso de trabajo

Antes de iniciar el desarrollo, establecimos reuniones semanales para coordinar tareas y avanzar de forma colaborativa. Investigamos y nos capacitamos en el uso de branches y commits, lo que permitió organizar el trabajo de cada integrante. Cada miembro fue responsable de una página específica, realizando avances y mejoras tanto en la estructura (átomos) como en la interfaz.

Descripción del aplicativo

Login: Para la autenticación, nos basamos en recursos de Chadcn como guía. Adaptamos su código a las necesidades de nuestro restaurante, logrando una versión organizada y funcional. Actualmente se utiliza un usuario fijo de forma interactiva, pero se puede integrar fácilmente un sistema de usuarios real.

Página principal: Ofrece múltiples opciones para que el usuario explore promociones y eventos. Incluye un menú tipo “hamburguesa” para acceder a la carta y demás secciones de interés. Además, muestra los horarios de atención y cuenta con un carrito de compras visible en la esquina superior derecha, donde se pueden revisar los productos seleccionados.

Categorías: Muestra los diferentes productos del restaurante. Aunque por defecto aparecen bebidas, esta sección es adaptable a cualquier tipo de producto. Al seleccionar un artículo, se despliega información detallada como nombre, precio, descripción y opción de compra.

Promociones: Página sencilla pero clave para mostrar las ofertas vigentes y facilitar su adquisición.

Eventos: Espacio informativo donde se publican noticias o artículos sobre los próximos eventos del restaurante.

Carrito: Aquí se visualizan los productos seleccionados, junto con las cantidades y el cálculo dinámico de precios, dependiendo de la cantidad elegida.

Aspectos técnicos

Para el desarrollo, instalamos herramientas como Iconify para la gestión de íconos y Tailwind CSS para los estilos. Trabajamos con TypeScript y recursos de Chadcn. Organizamos el proyecto en carpetas que agrupan las páginas dinámicas y los componentes reutilizables. Configuramos variables globales basadas en la paleta de colores definida en los mockups de Figma.

Siguiendo la metodología Atomic Design, creamos átomos como botones y tarjetas personalizadas, que luego se integraron en organismos más complejos, como la barra lateral (sidebar) y la navegación principal. Es importante destacar que, a medida que avanzaba el proyecto, realizamos ajustes necesarios para optimizar la funcionalidad y la experiencia de usuario.
