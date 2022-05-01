var Length = document.querySelectorAll(".drum").length;

for ( var i=0; i < Length; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("Hello!");
    });

}



