const boxes = document.querySelectorAll(".box")




let string = "";
let arr = Array.from(boxes)

boxes.forEach(box => {

box.addEventListener("click", (e) => {
     if(e.target.innerHTML == "="){
        string=eval(string);
        document.querySelector(".search-input").value = string;
    } else if(e.target.innerHTML == "AC"){
            string="";
            document.querySelector(".search-input").value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector(".search-input").value = string;
    }

});
});
