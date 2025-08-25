document.addEventListener("DOMContentLoaded", function()
{

const burger = document.getElementById("burger")
const burger_elements = Array.from(document.getElementsByClassName("burger_element"))
const navbar = document.getElementsByClassName("navbar")[0]
const burger_holder = document.getElementById("burger_holder")

let unrolled = false

burger.addEventListener('click', function()
{


    if(!unrolled)
    {
        burger_holder.style.maxHeight = "100rem"
        burger_holder.style.padding = "5%"
        burger_holder.style.overflow = "visible"
        burger_elements.forEach(element => {
            element.style.filter = "brightness(0.5)"
        });
        
        unrolled = true
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
