export default function loadNavbar() {
  const nav = document.querySelector("nav");
  nav.innerHTML = `
     <button class="btn active">Home</button>
            <button class="btn">Menu</button>
            <button class="btn">About</button>
    `;
}
