const form=document.getElementById("form");

const nombre=document.getElementById("nombre");

const contraseña=document.getElementById("contraseña");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(nombre.value.length<=0 || contraseña.value.length<=0){
        alert("tiene que llenar los campos")
    }
})