/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * isSquare(g)
 *
 * indicates whether g is a squared matrix
*/
let mat = [
  [0,1,0,0],
  [1,0,1,1],
  [0,1,0,1],
  [0,1,1,0],
  ];
  function isSquare(g){
    for (let k=0;k<g.length;k++)
      if(g.length!==g[k].length)
        return console.log(false);
    return console.log(true);
  }
  console.log("Es cuadrada")
  isSquare(mat)
 /* PROBLEM 2
 * isSymmetrical(g)
 *
 * indicates whether g is a symmetrical matrix
 */
 let y = [
  [0,1,0,0],
  [1,0,1,1],
  [0,1,0,1],
  [0,1,1,0],
  ];
  function isSymmetrical(g){
    for(let i=0; i < g.length; i++){
      for(let j=0; j < g[i].length; j++){
       if(g[i][j] != g[j][i]){
         return console.log(false);
       }
     } 
    }
    return console.log(true);
  }
  console.log("Es simetrica")
  isSymmetrical(y)

 /* PROBLEM 3 y PROBLEM 4
 * isTree(t)
 * indicates whether t is a tree
 * 
 * OR
 * 
 * isGraph(q)
 * indicates whether q is a graph
 */
 class Matriz{
  constructor(matriz){
    this.matriz=matriz;
  }
    esArbol(matriz){
    let sum=0;
    let cont=0;
    let columna=0;
    
     for(let i=0; i < matriz.length; i++){
      for(let j=0; j < matriz[i].length; j++){
        cont++;
        columna = cont / matriz.length ;
      }
     }
        
    for(let i=1;i<matriz.length;i++){
      sum=0;
      for(let j=0;j<columna;j++){
        if(j<i){
          sum+=matriz[i][j];
         if(sum > 1){
           return console.log(false);
         }
         }
       }
    }
      return console.log(true);     
  }
  
  esGrafo(matriz){
    if(matriz.esArbol(matriz) == false){
      return console.log(true);
    }
    else{
      return console.log(false);    
    }
      
  }
  
}
   
let x = [
[0,1,0,0],
[1,0,1,1],
[0,1,0,1],
[0,1,1,0],
];
 let a = new Matriz(x);
 console.log("Es un arbol")
a.esArbol(a);
console.log("Es un grafo")
a.esGrafo(a);
