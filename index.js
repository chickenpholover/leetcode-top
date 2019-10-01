/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 /********************
 Result:
 Runtime: 60 ms, faster than 70.29% of JavaScript online submissions for Two Sum.
 Memory Usage: 36.6 MB, less than 10.75% of JavaScript online submissions for Two Sum.
 /********************/
const twoSum = function(nums, target) {
    var dict = {};
    var value = 0;
    var pair = 0;
    var i = 0;
    
    for (i = 0; i < nums.length; i++) {
        
        //Grab element
        value = nums[i];
        pair = target - nums[i];

        //Look at historical log and see if there's already a pair
        if (dict[pair]) {
            return [dict[pair], i]
        }

        // { value: index }
        if (!dict[value]) {
            dict[value] = [i]; 
        }
    }
    
    return [];
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/********************
 Result:
 Runtime: 104 ms, faster than 93.97% of JavaScript online submissions for Add Two Numbers.
 Memory Usage: 38.7 MB, less than 31.94% of JavaScript online submissions for Add Two Numbers.
 /********************/
const addTwoNumbers = function(l1, l2) {
   	var l1Cur = l1;
	var l2Cur = l2;
	var l3 = {} ;
	var l3Cur = l3;

	var sum = 0;
	var carry = 0;
	var val1 = 0;
	var val2 = 0

	while (l1Cur || l2Cur) {
		
		//defaults 0 if value cannot be found
		val1 = l1Cur && l1Cur.val ? l1Cur.val : 0;
		val2 = l2Cur && l2Cur.val ? l2Cur.val : 0;

		sum = val1 + val2 + carry;
		carry = 0;

		if (sum > 9) {
			//extract first number
			sum = sum % 10;
			//Assumes carry is always 1
			carry = 1;
		}

		//Standard Singly-Linked List Add
		if (!l3) {
			l3 = new ListNode(sum);
			l3Cur = l3;
		} else {
			while(l3Cur.next) {
				l3Cur = l3Cur.next;
			}

			l3Cur.next = new ListNode(sum);
		}

		//To allow loop to conitnue when one is longer than the other
		l1Cur = l1Cur && l1Cur.next ? l1Cur.next : null;
		l2Cur = l2Cur && l2Cur.next ? l2Cur.next : null;
	}

	//Add any addition carry for edge cases
	if (carry > 0) {
		while(l3Cur.next) {
			l3Cur = l3Cur.next;
		}

		l3Cur.next = new ListNode(carry);
	}

	return l3;
};

