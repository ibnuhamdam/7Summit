line = document.querySelector(".menus");
        menus = document.querySelector(".menus-items");
        abc = document.querySelector("a");

        line.addEventListener("click", function () {
            setTimeout(lineFunction, 200);
            menusToggle();
        })

        abc.addEventListener("click", menunavbar())

        console.log(abc);
        
        

        function lineFunction() {
            if (line.classList.contains("paused") === true) {
                line.classList.replace("paused", "active");
            }
            else if (line.classList.contains("active") === true) {
                line.classList.remove("active");
                line.classList.add("inactive");
            }
            else {
                line.classList.remove("inactive");
                line.classList.add("active");
            }
        }

        function menunavbar() {
            abc.classList.add("active")
        }

        function menusToggle() {
            menus.classList.toggle("active")
        }

