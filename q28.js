/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let result=[]
    for(let i=0; i<list1.length; i++){
        if(this.val && this.next){
            result.push(list1[i])
        }else{
            result.push(list1[i])
        }
        for(let j=i; j<list2.length; j++){
            if(this.val && this.next){
                result.push(list1[j])
            }else{
                result.push(list1[j])    
            break;
        }
    }
}
    return result
    
}
console.log(mergeTwoLists([1,2,4],[1,3,4]));
console.log(mergeTwoLists([],[0]));

