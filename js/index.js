import { Router } from "./router.js";
import { menu } from "./menu.js";

const router = new Router();

window.route = () => router.route();
window.onpopstate = () => router.handle();


router.add("/","https://github.com/FranciscoYlderlan/stage-6-spa-universe/blob/main/pages/home.html");
router.add("/home", "https://github.com/FranciscoYlderlan/stage-6-spa-universe/blob/main/pages/home.html");
router.add("/index.html","https://github.com/FranciscoYlderlan/stage-6-spa-universe/blob/main/pages/home.html");
router.add("/universe", "https://github.com/FranciscoYlderlan/stage-6-spa-universe/blob/main/pages/universe.html");
router.add("/exploration","https://github.com/FranciscoYlderlan/stage-6-spa-universe/blob/main/pages/exploration.html");

router.handle()

/exploration.html



