function MakeThemVisible(value){
    if (value=="a"){
        document.getElementById('DVD').style.display="block";
        document.getElementById('DVD').style.position="relative";
        document.getElementById('DVD').style.left="15px";
        document.getElementById('Furniture').style.display="none";
        document.getElementById('Book').style.display="none";
    }

    if (value=="b"){
        document.getElementById('DVD').style.display="none";
        document.getElementById('Furniture').style.display="block";
        document.getElementById('Book').style.display="none";
    }
    
    if (value=="c"){
        document.getElementById('DVD').style.display="none";
        document.getElementById('Furniture').style.display="none";
        document.getElementById('Book').style.display="block";
        document.getElementById('Book').style.position="relative";
        document.getElementById('Book').style.left="1px";
    }

    if (value=="o"){
        document.getElementById('DVD').style.display="none";
        document.getElementById('Furniture').style.display="none";
        document.getElementById('Book').style.display="none";
    }
}

