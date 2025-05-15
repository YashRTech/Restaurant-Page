export default function loadAbout() {
  const div = document.createElement("div");
  div.className = "about";
  div.innerHTML = `
     <h1>Nosotros</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis voluptates nostrum vero aliquam iure. Ad tempora ea nihil consectetur iusto dolor laudantium, sequi, labore culpa rem repellat amet non ab nemo, temporibus distinctio impedit. Eveniet perspiciatis cupiditate dicta praesentium omnis mollitia deserunt blanditiis repudiandae maxime, doloribus natus deleniti debitis consequatur itaque laudantium, minus ipsam ab nobis in quam. Culpa perferendis necessitatibus minima veritatis libero voluptatibus, rerum numquam? Vero, tenetur ut sint totam et in molestiae exercitationem est laboriosam perferendis, labore illum veniam dolorum blanditiis libero eos, maiores aliquid nam ipsa consectetur? Maiores laborum, esse praesentium iure delectus veniam rem?</p>
    `;
  return div;
}