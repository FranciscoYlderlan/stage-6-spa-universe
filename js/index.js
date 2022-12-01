
import { Router } from "./router.js";
import { menu } from "./menu.js";

const router = new Router();

window.route = () => router.route();
window.onpopstate = () => router.handle();


router.add("/","./pages/home.html");
router.add("/home", "./pages/home.html");
router.add("/index.html","./pages/home.html");
router.add("/universe", "./pages/universe.html");
router.add("/exploration","./pages/exploration.html");

router.handle()

