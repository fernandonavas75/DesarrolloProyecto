# DesarrolloProyecto
 En este proyecto se va realizar un proyecto expermiental sobre la venta de licores y cigarillos es un proyecto de 6to semestre de la Universidad Catolica Del Ecuador

 #chanelog 22/10/2024 maded by Fernando Navas
 #version 1.0
 #desarrollador: Fernando Navas
 #bd designer: Luis Salazar
 #bd developer: Luis Salazar

Se realizo una base de datos experimental para organizar la parte de logistica del proyecto esta base de datos es una forma experimental y de prueba
para el avance del proyecto esta base de datos va ser modificada a futuro dependiendo de como se vaya a realizar los cambios. Sin embargo nos vamos avance
sin embargo nos vamos a basar en estos datos para poder realizar la partde del front no es lo mas ideal pero al ser un proyecto en el que se esta desarrollando 
mediante la metodologia big bang es algo que se puede modificar con facilidad en un futuro
## Estructura de la base de datos v0.1
### Análisis del script de creación de base de datos

Este script define cinco tablas dentro de una base de datos SQL Server: `Clientes`, `Productos`, `Factura`, `Carrito` y `Contactos`. A continuación, te proporciono un análisis de la estructura de cada tabla y la documentación detallada de la base de datos.

#### 1. Tabla `Clientes`
Esta tabla almacena información básica de los clientes que se registran en el sistema.

- Campos:
  - `ClienteID`: Entero, clave primaria, autoincremental. Identificador único de cada cliente.
  - `Nombre`: NVARCHAR(100), campo obligatorio. Almacena el nombre del cliente.
  - `Apellido`: NVARCHAR(100), campo obligatorio. Almacena el apellido del cliente.
  - `Correo`: NVARCHAR(150), campo opcional. Almacena la dirección de correo electrónico del cliente.
  - `Telefono`: NVARCHAR(20), campo opcional. Almacena el número de teléfono del cliente.
  - `Direccion`: NVARCHAR(200), campo opcional. Almacena la dirección física del cliente.
  - `FechaRegistro`: DATE, campo obligatorio. Almacena la fecha en la que el cliente fue registrado, con un valor por defecto de la fecha actual.

#### 2. Tabla `Productos`
Esta tabla almacena información sobre los productos disponibles en el inventario.

- **Campos:**
  - `ProductoID`: Entero, clave primaria, autoincremental. Identificador único de cada producto.
  - `Nombre`: NVARCHAR(100), campo obligatorio. Almacena el nombre del producto.
  - `Tipo`: NVARCHAR(50), campo opcional. Almacena el tipo de producto (ejemplo: Cerveza, Vino, Whisky, etc.).
  - `Precio`: DECIMAL(10,2), campo obligatorio. Almacena el precio del producto.
  - `CantidadEnStock`: INT, campo obligatorio. Almacena la cantidad disponible en stock del producto.
  - `Proveedor`: NVARCHAR(100), campo opcional. Almacena el nombre del proveedor del producto.
  - `FechaIngreso`: DATE, campo obligatorio. Almacena la fecha de ingreso del producto en el inventario, con valor por defecto de la fecha actual.
  - `Imagen`: NVARCHAR(MAX), campo opcional. Almacena la URL o ruta de la imagen del producto.

#### 3. Tabla `Factura`
Esta tabla almacena las facturas generadas por las compras realizadas por los clientes.

- Campos:
 - `FacturaID`: Entero, clave primaria, autoincremental. Identificador único de cada factura.
  - `ClienteID`: Entero, campo obligatorio. Clave foránea que hace referencia al cliente asociado a la factura.
  - `FechaCompra`: DATE, campo obligatorio. Almacena la fecha en la que se realizó la compra, con valor por defecto de la fecha actual.
  - `Total`: DECIMAL(10,2), campo obligatorio. Almacena el total de la compra.

- Relaciones:
  - Clave foránea `ClienteID` que hace referencia a la tabla `Clientes(ClienteID)`.

#### 4. Tabla `Carrito`
Esta tabla almacena los productos que los clientes han agregado a sus carritos de compras.

- **Campos:**
  - `CarritoID`: Entero, clave primaria, autoincremental. Identificador único de cada carrito.
  - `ClienteID`: Entero, campo obligatorio. Clave foránea que hace referencia al cliente propietario del carrito.
  - `ProductoID`: Entero, campo obligatorio. Clave foránea que hace referencia al producto agregado al carrito.
  - `Cantidad`: INT, campo obligatorio. Almacena la cantidad de unidades del producto en el carrito.
  - `Subtotal`: DECIMAL(10,2), campo calculado y persistido. Almacena el subtotal (cantidad * precio del producto).

- Relaciones:
  - Clave foránea `ClienteID` que hace referencia a la tabla `Clientes(ClienteID)`.
  - Clave foránea `ProductoID` que hace referencia a la tabla `Productos(ProductoID)`.

#### 5. Tabla `Contactos`
Esta tabla almacena los mensajes de contacto enviados por los usuarios del sistema.

- **Campos:**
  - `ContactoID`: Entero, clave primaria, autoincremental. Identificador único de cada mensaje de contacto.
  - `Nombre`: NVARCHAR(100), campo obligatorio. Almacena el nombre del usuario que envió el mensaje.
  - `Correo`: NVARCHAR(150), campo opcional. Almacena la dirección de correo electrónico del remitente.
  - `Telefono`: NVARCHAR(20), campo opcional. Almacena el número de teléfono del remitente.
  - `Mensaje`: NVARCHAR(500), campo obligatorio. Almacena el contenido del mensaje enviado por el usuario.
  - `FechaContacto`: DATE, campo obligatorio. Almacena la fecha en la que se recibió el mensaje, con valor por defecto de la fecha actual.

### Relaciones entre tablas

- La tabla `Clientes` está relacionada con:
  - `Factura`: Un cliente puede tener muchas facturas.
  - `Carrito`: Un cliente puede tener muchos productos en su carrito.

- La tabla `Productos` está relacionada con:
  - `Carrito`: Un producto puede estar en varios carritos.

### Documentación propuesta para la base de datos:

#### **Objetivo de la base de datos:**
La base de datos está diseñada para gestionar la información de los clientes, productos, facturas y el carrito de compras en una tienda en línea. También incluye una tabla para el registro de contactos de los usuarios.

#### **Estructura de la base de datos:**

1. **Clientes**: Almacena la información de los usuarios que se registran en el sistema.
2. **Productos**: Contiene los detalles de los productos disponibles en el inventario.
3. **Factura**: Registra las compras realizadas por los clientes, con información sobre el cliente y el total de la compra.
4. **Carrito**: Administra los productos que los clientes han agregado a sus carritos de compra antes de finalizar una compra.
5. **Contactos**: Registra los mensajes enviados por los usuarios a través de formularios de contacto.

### Observaciones:
1. **Claves foráneas**: Las relaciones entre las tablas están correctamente implementadas usando claves foráneas, lo que garantiza la integridad referencial.
2. **Campos calculados**: En la tabla `Carrito`, el campo `Subtotal` está calculado en función de la cantidad y el precio del producto. Esto puede optimizar el rendimiento al evitar que el subtotal se calcule en cada consulta.
3. **Normalización**: Las tablas están bien diseñadas desde el punto de vista de la normalización, con las relaciones adecuadamente estructuradas para evitar la duplicación de datos.


