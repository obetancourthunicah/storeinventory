# Store Inventory

Es un proyecto acdémico. Se elaborará dos soluciones, un backend en express basado en el REST API json y un frontend basado en react.js.
La persistencia de datos se manejará en mongodb.

## backend

### Seguridad (JWT)
Backend tendra esquema de seguridad para validar usuario y contraseña el cual dovelvera un hash JWT para las siguientes autenticaciones
en las rutas privadas.

- login
- register

### Productos
Manejar el ingreso de las caracteristicas del
catalogo de producto y su inventario inicial

- nuevo
- actualizar
- dehabilitar
- busqueda
- busqueda personalizada
- busqueda por punto de reabastecimiento

### Kardex
Registrar y trazar todo movimiento de inventario de un producto espcífico

- ingresarMovimiento
  - productoterminado +
  - productodevuelto +
  - ajustedeinventario +-
  - productoentregado -
  - productodañado -
  - productodonado -
- obtenerKardePorRangodeFechaDeProductoX
