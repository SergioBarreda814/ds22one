/** INSTRUCTIONS
 * PROBLEM 1
 * linked-list (stack/queue) implementation exercise
 * 
 */
function Node(data) {
  this.data = data
  this.next = null
}
 
   
function Linked(n) {
   this.head = n;
   this.tail = n;
   this.size = 1;
   this.getHead = getHead;
   this.prepend = prepend;
   this.append = append;
   this.traverse = traverse;
}

function getHead(){return console.log(this.head)}

function prepend(n){
   n.next = this.head;
   this.head=n;
   this.size++;
}

function append(n){
   n.next = null;
   this.tail.next=n;
   this.tail=n;
   this.size++;
}

function traverse(){
   let c=this.head;
   while(c){
 console.log(c.data);
 c=c.next;
   }
   console.log('\n');
}


 function Queue(n) {
 
   this.linked = new Linked(n)    
   this.enqueue = enqueue;
   this.dequeue = dequeue;
   this.back = back;
   this.toString = toString;
   this.empty = empty;
}
function enqueue(n){
 this.linked.append(n);
 return console.log(n.data + ' agregado con exito');
}
function dequeue(n){
   let temp = this.linked.head;
   let anterior = null;
   
   if(temp.data == n){
     this.linked.head = temp.next;
     return console.log( n + ' Extraido con exito');
   }
   else{
   while(temp != null){
     if(temp.data == n){
       anterior.next = temp.next;
       return console.log(n + " Extraido con exito");
     }
     anterior = temp;
      temp = temp.next;
   }
  }
 }
 
 function font(){
   return console.log("Front: " + this.linked.head.data);
 }
 
 function  back(){
   return console.log("Back: " + this.linked.tail.data);
 }
 
 function toString(){
   let temp = this.linked.head;
   while(temp){
     console.log(temp.data);
     temp = temp.next;
   }
     console.log('\n')
 }
 
 function empty(){
   if(this.linked.head){
     return console.log("La cola no esta vacia");
   }
   else{
     return console.log("la cola esta vacia");
   }
 }
 
 
 
 function Stack(n) {
   //props
   this.linked = new Linked(n);  
   //methods
   this.push = push;
   this.pop = pop;
   this.peek = peek;
}
 
 function  push(n){
   this.linked.prepend(n);
   return console.log(n.data + ' agregado con exito');
 }
 
 function pop(n){
       let temp = this.linked.head;
   let anterior = null;
   
   if(temp.data == n){
     this.linked.head = temp.next;
     return console.log( n + ' Extraido con exito');
   }
   else{
   while(temp != null){
     if(temp.data == n){
       anterior.next = temp.next;
       return console.log(n + " Extraido con exito");
     }
     anterior = temp;
      temp = temp.next;
   }
  }
 }
 
 function peek(){
   stack.linked.traverse();
 }
 
 let n1= new Node(1);
 let n2 = new Node(2);
 let n3 = new Node(3);
 let n4 = new Node(4);
 let n5 = new Node(5);
 let n6 = new Node(6);
 
 
 let queue = new Queue(n1);
 console.log("Cola");
 queue.enqueue(n2);
 queue.enqueue(n3);
 queue.toString();
 queue.dequeue(2);
 queue.toString();
 queue.empty();
 queue.back();
 console.log('\n')

 
 let stack = new Stack(n4);
 console.log("Pila");
 stack.push(n5);
 stack.push(n6);
 stack.peek();
 stack.pop(6);
 stack.peek();
