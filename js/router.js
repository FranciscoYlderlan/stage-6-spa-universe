
import { menu } from "./menu.js";
export class Router {
    routes = {};

    add (route, path) {
        this.routes[route] = path;
    }

    route (event) {
        event = event || window.event;
        event.preventDefault();
        
        let {baseURI, href, tagName } = event.target;
        
        let href_ = tagName == "IMG"? baseURI.substring(0, baseURI.lastIndexOf("/")) : href;  
        
        window.history.pushState({},"",href_);
        
        this.handle();
    }

    handle () {

        let {pathname} = window.location;

        let route = this.routes[pathname] 
        
        let option = pathname.replace("/","");
        
        menu.selected(option)
        
        fetch(route)
        .then(page => page.text())
        .then(html => 
        { 
            document.querySelector("#app").innerHTML = html;
        })
    
    }

}