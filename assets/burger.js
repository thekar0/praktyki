document.addEventListener("DOMContentLoaded", function()
{

const burger = document.getElementById("burger")
const burger_elements = Array.from(document.getElementsByClassName("burger_element"))
const navbar = document.getElementsByClassName("navbar")[0]
const burger_holder = document.getElementById("burger_holder")
const dropdowns = Array.from(document.getElementsByClassName("dropdown"))
let unrolled = false


dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function()
    {
        burger_holder.style.overflow = "visible"
    })
});

burger.addEventListener('click', function()
{


    if(!unrolled)
    {
        unrolled = true
        burger_holder.style.maxHeight = "10rem"
        burger_holder.style.padding = "5%"
        burger_elements.forEach(element => {
            element.style.filter = "brightness(0.5)"
        });
    }
    else
    {
        burger_holder.style.maxHeight = "0rem"
        burger_holder.style.padding = "0%"
        burger_holder.style.overflow = "hidden"
        burger_elements.forEach(element => {
            element.style.filter = "brightness(1)"
        });

        unrolled = false
    }

})

})
