/** INSTRUCTIONS
* 
* create one file by program
* implement a method, function, non-function solution
* solve each as requested
* may use code from previous exercises
* 
*
* PROBLEM 1
* inorder(n)
*
* traverses a tree in INORDER
*/
function Node(o){
   this.d=o
   this.l=null
   this.r=null
}
 console.log("INORDER")
function inorder(n){
   if (n!==null){
     inorder(n.l)
     console.log(n.d)
     inorder(n.r)
   }
 }
let A = new Node('A')
let B = new Node('B')
let C = new Node('C')
let D = new Node('D')
let E = new Node('E')

A.l = B
A.r = C

B.l = D
B.r = E

inorder(A);

/* 
* PROBLEM 2
* posorder(n)
*
* traverses a tree in POSORDER 
*/
 console.log("POSORDER")
function posorder(n){
   if (n!==null){
     posorder(n.l)
     posorder(n.r)
     console.log(n.d)
   }
 }
 posorder(A);