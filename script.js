const menuItems = [
      {
        name: "Jollof Rice",
        description: "Spicy rice served with beef and plantain.",
        price: 1500,
        image: "Images/Jollof rice and Chickenn.jpg",
      },
      {
        name: "Egusi Soup",
        description: "Thick melon seed soup with pounded yam.",
        price: 2000,
        image: "Images/Egusi and Poundo yam.jpg"
      },
      {
        name: "Suya",
        description: "Grilled spicy meat skewers.",
        price: 1000,
        image: "Images/Suya.jpg"
      },
      {
        name: "Akpu & Oha",
        description: "Cassava fufu with oha leaf soup.",
        price: 1800,
        image: "Images/Pepper soup.jpg"
      },
      {
        name: "Moi Moi",
        description: "Steamed bean pudding.",
        price: 800,
        image: "Images/Moi Moi.jpg"
      },
      {
        name: "Fried Plantain & Egg Sauce",
        description: "Ripe plantains with spicy egg sauce.",
        price: 1200,
        image: "Images/Fried Plantain and Egg.jpg"
      }
    ];

    let cart = [];

    function loadMenu() {
      const menu = document.getElementById("menu");
      menuItems.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p><strong>₦${item.price}</strong></p>
          <button onclick="addToCart(${index})">Add to Plate</button>
        `;
        menu.appendChild(card);
      });
    }

    function addToCart(index) {
      cart.push(menuItems[index]);
      updateCart();
    }

    function updateCart() {
      const cartList = document.getElementById("cart-list");
      const total = document.getElementById("total");
      cartList.innerHTML = "";
      let sum = 0;

      cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₦${item.price}`;
        cartList.appendChild(li);
        sum += item.price;
      });

      total.textContent = sum;
    }

    function submitOrder() {
      if (cart.length === 0) {
        alert("Please select at least one meal before submitting your order.");
        return;
      }
      alert("🎉 Order submitted successfully! Thank you.");
      cart = [];
      updateCart();
    }

    function printOrder() {
      if (cart.length === 0) {
        alert("No items to print.");
        return;
      }
      let printContent = "🧾 Abuja Buka - Order Summary\n\n";
      let sum = 0;
      cart.forEach(item => {
        printContent += `${item.name} - ₦${item.price}\n`;
        sum += item.price;
      });
      printContent += `\nTotal: ₦${sum}\n\nThanks for ordering!`;

      const printWindow = window.open("", "", "height=500,width=400");
      printWindow.document.write(`<pre>${printContent}</pre>`);
      printWindow.document.close();
      printWindow.print();
    }

    loadMenu();