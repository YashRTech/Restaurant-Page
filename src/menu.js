export default function loadMenu() {
  const div = document.createElement("div");
  div.className = "menu";
  div.innerHTML = `
      <div class="menu-item">
                <h2>Colorato</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis distinctio facilis, quaerat, harum pariatur eius possimus obcaecati maiores consectetur reprehenderit itaque, laudantium sint! Aliquid, est quas. Vitae, odio repellendus.</p>
                <div class="menu-bottom-border"></div>
            </div>
            <div class="menu-item">
                <h2>Gamberi</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis distinctio facilis, quaerat, harum pariatur eius possimus obcaecati maiores consectetur reprehenderit itaque, laudantium sint! Aliquid, est quas. Vitae, odio repellendus.</p>
                <div class="menu-bottom-border"></div>
            </div>
            <div class="menu-item">
                <h2>Pizza</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis distinctio facilis, quaerat, harum pariatur eius possimus obcaecati maiores consectetur reprehenderit itaque, laudantium sint! Aliquid, est quas. Vitae, odio repellendus.</p>
                <div class="menu-bottom-border"></div>
            </div>
            <div class="menu-item">
                <h2>Burger</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis distinctio facilis, quaerat, harum pariatur eius possimus obcaecati maiores consectetur reprehenderit itaque, laudantium sint! Aliquid, est quas. Vitae, odio repellendus.</p>
                <div class="menu-bottom-border"></div>
            </div>
            <div class="menu-item">
                <h2>Paneer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis distinctio facilis, quaerat, harum pariatur eius possimus obcaecati maiores consectetur reprehenderit itaque, laudantium sint! Aliquid, est quas. Vitae, odio repellendus.</p>
                <div class="menu-bottom-border"></div>
            </div>
            <div class="menu-item">
                <h2>Samosa</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis distinctio facilis, quaerat, harum pariatur eius possimus obcaecati maiores consectetur reprehenderit itaque, laudantium sint! Aliquid, est quas. Vitae, odio repellendus.</p>
                <div class="menu-bottom-border"></div>
            </div>
            <div class="menu-item">
                <h2>Pani Puri</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis distinctio facilis, quaerat, harum pariatur eius possimus obcaecati maiores consectetur reprehenderit itaque, laudantium sint! Aliquid, est quas. Vitae, odio repellendus.</p>
                <div class="menu-bottom-border"></div>
            </div>
    `;
  return div;
}