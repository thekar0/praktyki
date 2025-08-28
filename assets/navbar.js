fetch("assets/navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar_container").innerHTML = html;
    
    // Now initialize burger after navbar is in DOM
    initBurger();
  });

  function initBurger() {
    console.log("Xd");
    
    const burger = document.getElementById("burger");
    if (!burger) return;

    const burger_elements = Array.from(document.getElementsByClassName("burger_element"));
    const burger_holder = document.getElementById("burger_holder");
    let unrolled = false;

    burger.addEventListener("click", function() {
        if (!unrolled) {
            unrolled = true;
            burger_holder.style.maxHeight = "10rem";
            burger_holder.style.padding = "5%";
            burger_elements.forEach(el => el.style.filter = "brightness(0.5)");
        } else {
            unrolled = false;
            burger_holder.style.maxHeight = "0rem";
            burger_holder.style.padding = "0%";
            burger_holder.style.overflow = "hidden";
            burger_elements.forEach(el => el.style.filter = "brightness(1)");
        }
    });
} 