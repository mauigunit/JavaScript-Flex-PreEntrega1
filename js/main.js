let productos = [];
const maxProductos = 10;

const verificacionProductos = () => {
    if (productos.length == maxProductos) {
        console.log("Máximo de productos exedido.");
    }
}

const AgregarProducto = () => {
    console.log("Puede agregar un maximo de " + maxProductos + " Producto(s)");
    for (let i = 0; i <= maxProductos; i++) {
        if (productos.length == maxProductos) {
            console.log("lista de productos Excedida.");
            Menu();
        }
        else {
            let producto = prompt("ingrese un producto. Para volver a menu ingrese 0");
            if (producto == "0") {
                Menu();
            }
            else {
                let existeProducto = productos.indexOf(producto);
                console.log(existeProducto);
                console.log(producto);
                if (existeProducto == -1) {
                    productos.push(producto);
                    console.log("Producto " + producto + " agregado.");
                }
                else {
                    console.log("El producto " + producto + " ya se encuentra agregado.");
                }
            }
        }
    }
}

const EliminarProducto = () => {
    let producto = prompt("ingrese el producto s eliminar. Para volver a menu ingrese 0");
    if (producto == "0") {
        Menu();
    }
    else {
        let indexProducto = productos.indexOf(producto);
        if (indexProducto > -1) {
            productos.splice(indexProducto, 1);
            console.log("El producto " + producto + " fue eliminado.");
        }
        else {
            console.log("El producto " + producto + " no existe.");
        }
        Menu();
    }
}

const OrdenarProducto = () => {
    productos.sort();
    console.log("Productos Ordenados.");
    Menu();
}

const MostrarProductos = () => {
    console.log(productos);
    Menu();
}


const Menu = () => {
    let opMenu = prompt("Menu:\n\n1- Agregar Productos.\n2- Eliminar Producto.\n3- Ordenar Productos.\n4- Mostrar Productos.\n5- Salir.");
    switch (opMenu) {
        case "1":
            AgregarProducto();
            break;
        case "2":
            EliminarProducto();
            break;
        case "3":
            OrdenarProducto();
            break;
        case "4":
            MostrarProductos();
            break;
        case "5":
            console.log("Aplicación Finalizada");
            break;
        default:
            console.log("Opción no válida");
            break
    }
}

Menu();