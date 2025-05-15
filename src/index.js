import "./styles.css"
import asus from "./assests/asus.jpg";
import { hello } from "./hello.js";

console.log(hello);

const image = document.createElement("img");
image.src = asus;
   
document.body.appendChild(image);