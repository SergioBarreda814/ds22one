/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * create a linked-list with 1000-random-names
 * 'name3', 'name99', ..., 'name7'
 *
 * then look 'name7' up
 * returns true
 *
 * then look 'name3007' up
 * returns false
 *
 * use the method contains
 */
 function Node(data){
    this.data = data
    this.netx = null
}
 function contains(n,t){
   let temp;
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
  let a= new Node(0)
    let b= new Node(1)
    a.next=b

    for(let i=0;i<1000;i++){
        let random = Math.floor(Math.random() * 1000 + 1);
        let n = new Node(`name${random}`)
        b.next = n
        b=n
    }
  contains(a,"name7");
  contains(a,"name3007");
  