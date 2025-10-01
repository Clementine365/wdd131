// Array of product objects
const products = [
    {id: "prod1", name: "hair product"},
    {id: "prod2", name: "food Product "},
    {id: "prod3", name: "plants Product"},
    {id: "prod4", name: "electronics Product "}
];

// Populate the select field
const productSelect = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
