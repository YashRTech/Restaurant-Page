import cheffImage from "./assests/cheff.webp"

export default function loadHome() {
  const div = document.createElement("div");
  div.className = "home";
  div.innerHTML = `
    <p>Best pizza in your country</p>
    <p>Made with passion since 1908</p>
    <div class="cheffImg"><img src="${cheffImage}" loading="lazy" alt="cheff"></div>
    <p>Order online or visit us!</p>
    `;
  return div;
}

