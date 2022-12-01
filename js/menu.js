class Option {
    constructor(selector) {
        this.isSelected = false;
        this.option = document.querySelector(selector);
    }
    select() {
        this.isSelected = true;
        this.option.classList.add("selected");

    }
    unselect() {
        this.isSelected = false;
        this.option.classList.remove("selected");
    }
}


export const menu = {
    home : new Option("ul li:nth-child(1) a"),
    universe : new Option("ul li:nth-child(2) a"),
    exploration : new Option("ul li:nth-child(3) a"),

    selected(option){
        switch (option) {
            case "home":
                this.home.select();
                this.universe.unselect();
                this.exploration.unselect();
            break;
            case "universe":
                this.home.unselect();
                this.universe.select();
                this.exploration.unselect();
                break;
            case "exploration":
                this.home.unselect();
                this.universe.unselect();
                this.exploration.select();
                break;
        
            default:
                this.home.select();
                this.universe.unselect();
                this.exploration.unselect();
                break;
        }
    }

}

