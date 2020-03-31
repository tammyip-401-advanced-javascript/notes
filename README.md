LAB 05 DSA: Linked List Implementation

Author: Tammy Ip

# Linked List Implementation
<!-- Short summary or background information -->
A standard Linked List is singly linked, meaning each Node in the list only maintains a link to the next Node in the list, often called next. In this lab, I will apply a few methods on a singly linked ist.
    
## Links
<!-- Link to pull request, passing tests, etc --> 
    
## Challenge
<!-- Description of the challenge -->
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node. Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
    
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
insert(): Time: O(1), Space: O(1) 
includes(): Time: O(N), Space: O(1) 
toString(): Time: O(N), Space: O(n^2)
    
## API
<!-- Description of each method publicly available to your Linked List -->
insert(): takes any value as an argument and adds a new node with that value to the head of the list with an O(1) time performance 
includes(): takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list 
toString(): takes in no arguments and returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"
    
## Testing
<!-- Description of how to run your tests -->
