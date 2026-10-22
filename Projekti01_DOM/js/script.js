
const form = document.getElementById("shopping-form");
const shoppingList = document.getElementById("table-body");

const itemInput = document.getElementById("item-input");
const amountInput = document.getElementById("amount-input");

const itemError = document.getElementById("item-error");
const amountError = document.getElementById("amount-error");

let products = JSON.parse(localStorage.getItem("shoppingList")) || [];

function saveProducts() {
    localStorage.setItem("shoppingList", JSON.stringify(products));
}

function showProducts() {
    shoppingList.innerHTML = "";

    products.forEach(function(product, index) {
        const tr = document.createElement("tr");

        const checkTd = document.createElement("td");
        const itemTd = document.createElement("td");
        const amountTd = document.createElement("td");
        const actionTd = document.createElement("td");

        itemTd.textContent = product.item;
        amountTd.textContent = product.amount;

        const checkButton = document.createElement("button");
        checkButton.type = "button";
        checkButton.classList.add("check-button");
        checkButton.textContent = product.bought ? "✓" : "";

        if (product.bought) {
            tr.classList.add("bought");
        }

        checkButton.setAttribute(
            "aria-label",
            product.bought ? "Peru ostettu" : "Merkitse ostetuksi"
        );

        checkButton.setAttribute("aria-pressed", String(product.bought));

        checkButton.addEventListener("click", function() {
            product.bought = !product.bought;
            saveProducts();
            showProducts();
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Poista";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function() {
            products.splice(index, 1);
            saveProducts();
            showProducts();
        });

        checkTd.appendChild(checkButton);
        actionTd.appendChild(deleteButton);

        tr.appendChild(checkTd);
        tr.appendChild(itemTd);
        tr.appendChild(amountTd);
        tr.appendChild(actionTd);

        shoppingList.appendChild(tr);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const item = itemInput.value.trim();
    const amount = amountInput.value.trim();

    itemInput.classList.remove("invalid");
    amountInput.classList.remove("invalid");

    itemError.textContent = "";
    amountError.textContent = "";

    let valid = true;

    if (item.length < 2) {
        itemInput.classList.add("invalid");
        itemError.textContent = "Tuotteen nimessä pitää olla vähintään 2 merkkiä.";
        valid = false;
    }

    if (amount === "" || !Number.isInteger(Number(amount)) || Number(amount) < 1) {
        amountInput.classList.add("invalid");
        amountError.textContent = "Anna positiivinen kokonaisluku.";
        valid = false;
    }

    if (!valid) {
        return;
    }

    const product = {
        item: item,
        amount: amount,
        bought: false
    };

    products.push(product);

    saveProducts();
    showProducts();

    form.reset();
});

showProducts();
