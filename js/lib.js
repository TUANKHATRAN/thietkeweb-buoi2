
const productList = [
  { "id": 1, "name": "Phở bò", "price": 40000, "image": "../assets/images/phobo.jpg", "prolink": "https://fptshop.com.vn/tin-tuc/dien-may/cach-nau-pho-bo-thom-ngon-chuan-vi-nho-bi-quyet-gia-truyen-khong-phai-ai-cung-biet-173349", "description": "Phở bò thơm ngon với nước dùng đậm đà, bánh phở mềm và thớ thịt bò tái chín vừa phải.", "note": "Hãy thêm chanh và ớt nếu muốn tăng hương vị." },
  { "id": 2, "name": "Bánh mì thịt", "price": 20000, "image": "../assets/images/banhmi.jpg", "prolink": "https://sieuthi-go.vn/about-us/cam-nang-mua-sam/cach-lam-banh-mi-thit-nuong-thom-ngon-chuan-vi-tai-nha-2413.html?srsltid=AfmBOoobKfe9OovzIWEPNvWxWvTmbs_B8eIFBnS_25NDlrNghd4dJi1B", "description": "Bánh mì nóng giòn kèm pate, thịt nướng và đồ chua tạo nên hương vị hấp dẫn đặc trưng Việt Nam.", "note": "Thêm rau thơm và tương ớt cho ngon hơn." },
  { "id": 3, "name": "Bún bò Huế", "price": 45000, "image": "../assets/images/bunbo.jpg", "prolink": "https://vi.wikipedia.org/wiki/B%C3%BAn_b%C3%B2_Hu%E1%BA%BF", "description": "Bún bò Huế cay nồng với mắm ruốc, giò heo và bún to, đầy đủ hương vị miền Trung.", "note": "Nêm thêm chanh và hành lá tùy khẩu vị." },
  { "id": 4, "name": "Cơm tấm sườn", "price": 35000, "image": "../assets/images/comtam.jpg", "prolink": "https://vi.wikipedia.org/wiki/C%C6%A1m_t%E1%BA%A5m", "description": "Cơm tấm sườn nướng thơm lừng, ăn cùng trứng ốp la, chả và đồ chua đặc sắc.", "note": "Thêm nước mắm chua ngọt để dậy vị." },
  { "id": 5, "name": "Gỏi cuốn", "price": 25000, "image": "../assets/images/goicuon.jpg", "prolink": "https://vi.wikipedia.org/wiki/G%E1%BB%8Fi_cu%E1%BB%91n", "description": "Gỏi cuốn tươi mát với tôm, thịt, bún và rau sống, chấm cùng nước mắm pha hoặc tương đậm đà.", "note": "Ăn ngay để bánh không bị ướt." },
  { "id": 6, "name": "Hủ tiếu", "price": 40000, "image": "../assets/images/hutieu.jpg", "prolink": "https://vi.wikipedia.org/wiki/H%E1%BB%83_ti%E1%BA%BFu", "description": "Hủ tiếu nóng hổi với nước dùng ngọt, bánh hủ tiếu dai và nhiều topping thơm ngon.", "note": "Thêm giá đỗ và rau cải để cân bằng hương vị." },
  { "id": 7, "name": "Bánh xèo", "price": 50000, "image": "../assets/images/banhxeo.jpg", "prolink": "https://vi.wikipedia.org/wiki/B%C3%A1nh_x%C3%A8o", "description": "Bánh xèo giòn rụm, nhân tôm và thịt, ăn kèm rau sống và nước chấm chua ngọt.", "note": "Cuốn kèm rau thơm để tăng độ ngon." },
  { "id": 8, "name": "Chả giò", "price": 30000, "image": "../assets/images/chagio.jpg", "prolink": "https://vi.wikipedia.org/wiki/Ch%E1%BA%A3_gi%C3%B2", "description": "Chả giò vàng ươm, nhân thịt và rau củ, ăn kèm nước chấm pha chua ngọt.", "note": "Ăn khi còn nóng để giòn lâu." },
  { "id": 9, "name": "Bún chả", "price": 45000, "image": "../assets/images/buncha.jpg", "prolink": "https://vi.wikipedia.org/wiki/B%C3%BAn_ch%E1%BA%A3", "description": "Bún chả Hà Nội gồm thịt nướng thơm, nước mắm chua ngọt và bún tươi.", "note": "Thêm vài lát ớt để tăng độ cay nếu thích." },
  { "id": 10, "name": "Lẩu thái", "price": 150000, "image": "../assets/images/lauthai.jpg", "prolink": "https://vi.wikipedia.org/wiki/L%E1%BA%A5u_th%C3%A1i", "description": "Lẩu Thái chua cay đặc trưng, nhiều hải sản và rau sống tươi ngon.", "note": "Nêm thêm sa tế nếu muốn tăng vị cay." }
];

function addProduct(product) {
  const productItem = document.createElement("div");
  productItem.setAttribute("class", "product-item");

  const productImage = document.createElement("div");
  productImage.setAttribute("class", "product-image");

  const img = document.createElement("img");
  img.setAttribute("src", product.image);
  img.setAttribute("alt", product.name);
  img.style.width = "200px";
  img.style.height = "auto";

  productImage.appendChild(img);
  productItem.appendChild(productImage);

  const productTitle = document.createElement("h3");
  productTitle.setAttribute("class", "product-title");
  productTitle.textContent = product.name;
  productItem.appendChild(productTitle);

  const productPrice = document.createElement("p");
  productPrice.setAttribute("class", "product-price");
  productPrice.textContent = "Giá: " + product.price.toLocaleString() + " VND";
  productItem.appendChild(productPrice);

  const productDetails = document.createElement("p");
  productDetails.setAttribute("class", "product-details");
  const detailsLink = document.createElement("a");
  detailsLink.setAttribute("href", product.prolink);
  detailsLink.setAttribute("target", "_blank");
  detailsLink.textContent = "Chi tiết sản phẩm";
  productDetails.appendChild(detailsLink);
  productItem.appendChild(productDetails);

  const buyButton = document.createElement("button");
  buyButton.setAttribute("class", "buy-button");
  buyButton.textContent = "Mua hàng";
  buyButton.addEventListener("click", function() {
    alert("Đã thêm vào giỏ hàng!");
  });
  productItem.appendChild(buyButton);

  const viewDetailsButton = document.createElement("button");
  viewDetailsButton.setAttribute("class", "view-details-button");
  viewDetailsButton.textContent = "Xem chi tiết";
  viewDetailsButton.addEventListener("click", function() {
    window.location.href = "product-detail.html?id=" + product.id;
  });
  productItem.appendChild(viewDetailsButton);

  const grid = document.getElementById('product-grid') || document.body;
  grid.appendChild(productItem);
}