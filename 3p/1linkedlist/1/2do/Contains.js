  /** INSTRUCTIONS
   *
   * create one file by program
   * implement a method, function, non-function solution
   * solve each as requested
   * may use code from previous exercises
   *
   * PROBLEM 1
   * contains(v)
   */
  function Node(data) {
      this.data = data
      this.next = null
  }
  
  let n1 = new Node(3)
  let n2 = new Node(-2)
  let n3 = new Node(1)

  n1.next=n2
  n2.next=n3

  function contains(n,t){
    //Temp = Mandar true si existe
    let temp;
    //n=inicio de la lista
    //T= valor que se quiere evaluar si existe
      let c=n;
    
      while(c){
      if(c.data == t){
        temp = "true"
        c = null
      }
      else{
          c = c.next
        }
      }
      
      if(temp=="true"){
        console.log(true)
      }
      else{
        console.log(false)
      }
    }
    
    contains(n1,1)
