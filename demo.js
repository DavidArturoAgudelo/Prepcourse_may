var persona ="Pepite";
function esAlto(Altura){
    if(Altura >= 160){
        return persona + ": Es alto ya que su altura es: "+ Altura +" cm";
    }else {
        return persona + ": No es una persona alta";
    }
}
console.log(esAlto(170))
console.log(esAlto(150))