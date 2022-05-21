try {
    const contant_header_con = document.getElementById("contant_header_con");
    contant_header_con.addEventListener("mouseover", changeBorderStyle2);
    contant_header_con.addEventListener("mouseleave", changeBorderColor);
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }

try {
    const contant_header_hom = document.getElementById("contant_header");
    const borderColor = contant_header_hom.style.borderColor;
    contant_header_hom.addEventListener("mouseover", changeBorderStyle);
    contant_header_hom.addEventListener("mouseleave", changeBorderColor);
} catch (error) {
console.error(error);
// expected output: ReferenceError: nonExistentFunction is not defined
// Note - error messages will vary depending on browser
}

function changeBorderStyle2(){
    this.style.borderRadius = "15px" ;
    this.style.borderStyle = "dotted";
    this.style.color = "rgb(80, 86, 87)";
}
function changeBorderColor(){
    this.style.color = "rgb(31, 195, 222)";
}


function changeBorderStyle(){
    this.style.borderRadius = "15px" ;
    this.style.borderStyle = "dashed";
    this.style.color = "rgb(0, 78, 100)";
}

const navHom = document.getElementById("hom");
const navCon = document.getElementById("con");

function markThis(eleme){
    eleme.style.color = "green";
    eleme.style.fontSize = "25px";
}

if ( document.URL.includes("home%20page.html") ) {
    markThis(navHom);
} else {
    markThis(navCon);
}
