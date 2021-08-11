
const calculateTemp = () => {
   const value = document.getElementById('value').value;
   const selection = document.getElementById('selection');
   const valueTemp = selection.options[selection.selectedIndex].value;
   
   const celToFah = (celsius) => {
      let fahrenhite = Math.round((celsius*9/5)+32);
      return fahrenhite;
   }
   const fahToCel = (fahrenhite) => {
      let celsius = Math.round((fahrenhite-32)*5/9);
      return celsius;
   }

   let result;

   if (valueTemp == 'cel') {
      result = celToFah(value);
      document.getElementById('resultContainer').innerHTML = `${result} °Fahrenhite`;
   } else {
      result = fahToCel(value);
      document.getElementById('resultContainer').innerHTML = `${result} °Celsius`;
   }
};