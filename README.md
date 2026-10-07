# FakeStore CLI

Un cliente de interfaz de línea de comandos (CLI) desarrollado en Node.js que interactúa con la API REST de FakeStore para realizar operaciones CRUD sobre un catálogo de productos a través de comandos en la terminal.

---

## 🛠️ Tecnologías Utilizadas

- Node.js (v18+)
- ESModules ("type": "module")
- Fetch API (nativo de Node.js)
- JavaScript Moderno (Destructuring, Rest Parameters, Async/Await)

---

## 📋 Requisitos Previos

tener instalado Node.js.

---

## 🚀 Instalación y Configuración

1. Clonar el repositorio:
git clone [https://github.com/TU_USUARIO/fakestore-cli.git](https://github.com/FACUU04/PreEntrega_NodeJS.git)

2. Ingresar a la carpeta del proyecto:
cd fakestore-cli

3. Verificar estructura:
El proyecto utiliza módulos nativos de Node.js, por lo que no requiere instalar dependencias adicionales de terceros.

---

## 💻 Comandos de Uso

Todas las acciones se ejecutan utilizando el script npm run start seguido del método HTTP, el recurso y los parámetros correspondientes.

### 1. Consultar todos los productos (GET)
Obtiene el listado completo de productos de la tienda:
npm run start GET products

### 2. Consultar un producto por ID (GET)
Obtiene la información detallada de un producto específico mediante su ID:
npm run start GET products/15

### 3. Crear un nuevo producto (POST)
Envía los datos necesarios (título, precio y categoría) para agregar un nuevo producto:
npm run start POST products T-Shirt-Rex 300 remeras

### 4. Eliminar un producto por ID (DELETE)
Envía una petición para eliminar el producto correspondiente al ID indicado:
npm run start DELETE products/7

---

## 📁 Estructura del Proyecto


├── index.js        # Punto de entrada y lógica de comandos
├── package.json    # Configuración de Node.js y scripts
└── README.md       # Documentación del proyecto
