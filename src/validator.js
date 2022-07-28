//Objeto validator que contiene las funciones y que luego va a ser importado al index.js para poder interactuar.
const validator = {
  isValid: function (creditNum) {
    const total = [];
    creditNum.forEach((e, i) => {
      if(i % 2 === 0){
        const numPar = e * 2;
      
        if (numPar > 9){
          total.push(
            numPar.toString().split('').reduce((a, b) =>parseInt(a) + parseInt(b))
          );
        }
        else{total.push(numPar); }//numpar si multiplica todos los pares, e si pasan sin multiplicar
        console.log(numPar);
      }
      else{total.push(parseInt(e));}
    });
    console.log(total);
    const sumaTotal = total.reduce((digit1, digit2) => digit1+digit2, 0);
    console.log(sumaTotal);
    if(sumaTotal % 10 === 0){
      return true;
      
    }
    else{return false;}
    
  },


  
  
  
  
};
export default validator;