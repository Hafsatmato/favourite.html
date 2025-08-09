// Step 1: Create product objects
const products = [
  {
    name: "Smart Watch",
    price: "$50",
    image: "https://via.placeholder.com/200x150?text=Watch",
  },
  {
    name: "Bluetooth Speaker",
    price: "$30",
    image: "https://via.placeholder.com/200x150?text=Speaker",
  },
  {
    name: "Wireless Earbuds",
    price: "$40",
    image: "https://via.placeholder.com/200x150?text=Earbuds",
  },
  {
    name: "Smartphone Stand",
    price: "$15",
    image: "https://via.placeholder.com/200x150?text=Stand",
  },
  {
    name: "USB Charger",
    price: "$10",
    image: "https://via.placeholder.com/200x150?text=Charger",
  },
];

// Step 2: Select the container
const container = document.getElementById("products");

// Step 3: Loop through the products and create HTML
products.forEach(function (product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
      `;
  container.appendChild(card);
});
