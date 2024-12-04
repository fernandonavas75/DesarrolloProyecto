// URL del backend (ajusta según tu configuración)
const API_URL = "http://localhost:3000/api";

// Función para obtener productos desde el backend
async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}/products`); // Asegúrate de tener este endpoint en tu backend
        if (!response.ok) throw new Error("Error al obtener productos");

        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Función para renderizar productos en el DOM
function renderProducts(products) {
    const container = document.querySelector(".deals-container");
    container.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos productos

    products.forEach((product) => {
        const productHTML = `
            <div class="deal">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <p class="price">$${product.price}</p>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// Ejecutar la función cuando cargue la página
document.addEventListener("DOMContentLoaded", fetchProducts);

function showError(message) {
    const container = document.querySelector(".deals-container");
    container.innerHTML = `<p class="error">${message}</p>`;
}
