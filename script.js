document.addEventListener("DOMContentLoaded", function() {
    const defaultMenuItem = document.querySelector(".menu-item.ntd");

    defaultMenuItem.classList.add("active", "hover");

    const contentGrids = document.querySelectorAll(".content-grid");

    contentGrids.forEach(grid => {
        if (grid.classList.contains("ntd-content")) {
            grid.classList.add("active");
        }
    });

    const menuItems = document.querySelectorAll(".menu-item");
    
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            menuItems.forEach(item => {
                item.classList.remove("hover");
            });
            this.classList.add("hover");
        });

        item.addEventListener("mouseleave", function() {
            this.classList.remove("hover");
        });

        item.addEventListener("click", function(event) {
            event.preventDefault();
            
            menuItems.forEach(item => {
                item.classList.remove("active");
                item.classList.remove("hover");
            });

            this.classList.add("active", "hover");
            const clickedClass = this.classList[1];
            
            contentGrids.forEach(grid => {
                grid.classList.remove("active");
            });

            document.querySelector(`.${clickedClass}-content`).classList.add("active");
        });
    });
});
