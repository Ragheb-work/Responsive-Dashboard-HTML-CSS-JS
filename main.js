let sideMenu = document.querySelector("aside");
let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");
let themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span").classList.toggle("active");
  themeToggler.querySelector("span:last-child").classList.toggle("active");
});
orders.forEach((order) => {
  let tr = document.createElement("tr");
  let trContent = `
                <td>${order.productName}</td>
                <td>${order.productNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${
                  order.shipping === "Declined"
                    ? "danger"
                    : order.shipping === "Pending"
                    ? "warning"
                    : "primary"
                }">${order.shipping}</td>
                <td class="primary">Details</td>
        `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
