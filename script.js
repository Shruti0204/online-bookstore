const featuredBooks = [
      { title: "Atomic Habits", price: "₹400", image: "https://m.media-amazon.com/images/I/81F90H7hnML._SL1500_.jpg" },
      { title: "The Alchemist", price: "₹300", image: "https://m.media-amazon.com/images/I/61HAE8zahLL._SL1331_.jpg" },
      { title: "Big Magic", price: "₹350", image: "https://m.media-amazon.com/images/I/814PoPnrBQL._SL1500_.jpg" },
      { title: "Think Like a Monk", price: "₹380", image: "https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg" },
      { title: "Energies Your Mind", price: "₹500", image: "https://m.media-amazon.com/images/I/71B4h-dSVzL._SL1500_.jpg" },
    ];

    const arrivalsBooks = [
      { title: "The Power of Now", price: "₹420", image: "https://m.media-amazon.com/images/I/61Ij8nLooNL._SL1500_.jpg" },
      { title: "Rich Dad Poor Dad", price: "₹370", image: "https://m.media-amazon.com/images/I/81BE7eeKzAL._SL1500_.jpg" },
      { title: "Ikigai", price: "₹390", image: "https://m.media-amazon.com/images/I/81l3rZK4lnL._SL1500_.jpg" },
      { title: "Deep Work", price: "₹450", image: "https://m.media-amazon.com/images/I/81JJ7fyyKyS._SL1500_.jpg" },
      { title: "You Can", price: "₹280", image: "https://m.media-amazon.com/images/I/71TvSqVpBHL._SL1500_.jpg" },
    ];

    const featuredList = document.getElementById("featured-list");
    const arrivalsList = document.getElementById("arrivals-list");
    const cartBox = document.getElementById("cart-box");

    function createBookElement(book) {
      const div = document.createElement("div");
      div.classList.add("book");
      div.innerHTML = `
        <img src="${book.image}" alt="${book.title}" />
        <h3>${book.title}</h3>
        <p><strong>${book.price}</strong></p>
        <button class="add-btn" onclick="addToCart('${book.title}', '${book.price}')">Add to Cart</button>
        <button class="buy-btn" onclick="buyNow('${book.title}')">Buy Now</button>
      `;
      return div;
    }

    featuredBooks.forEach(book => featuredList.appendChild(createBookElement(book)));
    arrivalsBooks.forEach(book => arrivalsList.appendChild(createBookElement(book)));

    function addToCart(title, price) {
      alert(`Your item is added to cart "${title}"!`);
      const item = document.createElement("div");
      item.classList.add("cart-item");
      // item.textContent = title;
       item.textContent = `${title} - ${price}`;
      cartBox.appendChild(item);
    }

    function buyNow(title) {
      alert(`Thank you for buying "${title}"!`);
    }
