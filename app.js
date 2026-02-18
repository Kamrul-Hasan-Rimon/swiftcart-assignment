const productContainer = document.getElementById("product-container");
const categoryContainer = document.getElementById("category-container");
const loadingSpinner = document.getElementById("loading-spinner");
const cartCountElement = document.getElementById("cart-count");
const trendingContainer = document.getElementById("trending-container");

let allProducts = [];
let cart = [];

// Initial load with Promise.all
(async () => {
  loadingSpinner.classList.remove("hidden");
  try {
    const [productsRes, categoriesRes] = await Promise.all([
      fetch("https://fakestoreapi.com/products"),
      fetch("https://fakestoreapi.com/products/categories"),
    ]);
    const products = await productsRes.json();
    const categories = await categoriesRes.json();
    allProducts = products;

    // Display category buttons
    categories.forEach((category) => {
      const btn = document.createElement("button");
      btn.classList.add("btn", "btn-outline", "capitalize");
      btn.textContent = category;
      btn.addEventListener("click", () => {
        document.querySelectorAll("#category-container button").forEach((b) => {
          b.classList.remove("btn-primary", "btn-active");
          b.classList.add("btn-outline");
        });
        btn.classList.remove("btn-outline");
        btn.classList.add("btn-primary", "btn-active");
        filterProducts(category);
      });
      categoryContainer.appendChild(btn);
    });

    displayProducts(products);
    displayTrending(products);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loadingSpinner.classList.add("hidden");
  }
})();

function filterProducts(category) {
  const filtered =
    category === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === category);
  displayProducts(filtered);
}

function displayProducts(products) {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "card bg-base-100 shadow-xl h-full border";
    div.innerHTML = `
      <figure class="px-10 pt-10 h-48">
        <img src="${product.image}" alt="Shoes" class="h-full object-contain" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-sm">${product.title.slice(0, 20)}...</h2>
        <div class="badge badge-secondary">${product.category}</div>
        <p class="font-bold text-lg text-primary">$${product.price}</p>
        <div class="flex items-center gap-1 text-yellow-500">
          <i class="fa-solid fa-star"></i>
          <span>${product.rating.rate}</span>
          <span class="text-gray-400 text-xs">(${product.rating.count})</span>
        </div>
        <div class="card-actions justify-end mt-4 w-full">
          <button class="btn btn-sm btn-outline btn-primary w-[45%]" onclick="showDetails(${product.id})"><i class="fa-solid fa-eye"></i> Details</button>
          <button class="btn btn-sm btn-primary w-[45%]" onclick="addToCart(${product.id})"><i class="fa-solid fa-cart-plus"></i> Add</button>
        </div>
      </div>
    `;
    productContainer.appendChild(div);
  });
}

async function showDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
    <img src="${product.image}" class="max-w-xs mx-auto object-contain rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-2xl font-bold">${product.title}</h1>
      <p class="py-4 text-gray-600">${product.description}</p>
      <p class="text-2xl font-bold text-primary mb-4">$${product.price}</p>
      <button class="btn btn-primary w-full" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
  document.getElementById("product_modal").showModal();
}

function addToCart(id) {
  cart.push(id);
  if (cartCountElement) {
    cartCountElement.innerText = cart.length;
  }

  const modal = document.getElementById("product_modal");
  if (modal && modal.open) {
    modal.close();
  }

  const btn = event?.target;
  if (btn) {
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
    btn.classList.add("btn-success");
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove("btn-success");
    }, 2000);
  }
}

function displayTrending(products) {
  const sorted = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);
  trendingContainer.innerHTML = "";
  sorted.forEach((product) => {
    const div = document.createElement("div");
    div.className = "card bg-base-100 shadow-xl";
    div.innerHTML = `
      <figure class="px-10 pt-10 h-40">
        <img src="${product.image}" class="h-full object-contain" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-sm">${product.title.slice(0, 15)}...</h2>
        <p class="font-bold text-lg">$${product.price}</p>
        <div class="badge badge-accent">Top Rated</div>
      </div>
    `;
    trendingContainer.appendChild(div);
  });
}
