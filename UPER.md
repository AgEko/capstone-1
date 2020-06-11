<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>

Two pages. {One : storepage ; Two : cart}
Need to find out how to change pages || Make a small window that can overlay the current screen.
Cart needs and option to purchase objects, check paypal, they have a simple port solution.

Inventory management system that can +/-, also send object to a cart[]
limited amount of stock available to store, min.10

Need a search fucntion that can find objects in storeRepo

Each object needs five attributes Product.{Name, serialNumber, Price, Manufacturer, category}


userCart must be able to hold multiples of any item. 


<h2>
    2. Planning the Solution
</h2>
Make wireframe of site. One page || two

Need a place to store the stockItems
  -Try the Web Storage API 
  -Else an [] that holds objects || prop drill to vahalla


Need components for 
    -search/filter functionality
    -Items to be sold
        -Objects of items
    -userCart 

Will need a theme for site, Not necessary to see if components will work.
try nice a* pens

<h2>
    3. Executing the Plan
</h2>
[]Not Started [-]Basic [=]Linked [+] Polished [X] Xtra 'SharkRAD'

[-]Start by making frame to set site in.
    [-]Navbar
        [-]Logo
        [-]store
        [-]CartBtn(href => cart page)
            []Running total of items Bubble
    [-]all items inline
    
    [-]Filters Section,  top mid
        [-] Search By name
        [o] Filters for different tags on items 
        [o] Dropdown for filter

    [-]flex grid for sales items, in center/right
        [-]3 wide,  column

    
    [-]Cart, 
        [-]new page
        [-]Holds a list for current items added from storeInventory
        [+]Subtotal for items 
        [/]buy button (paypal has a button generator; is in html. May cause issues if imported into react.js)


    [o]Make the background something like officespace clean--- Scratch that we going full unga bunga now. Nose bones, clubs and dino dogs

[]Store Page 
    [-] generate store tiles 
        [fun]
            [-]img
            [-]import object.elements to display
            [-] btn to add to cart
        [graphic]
            []
*
*
*
*
*
*
<h2>
    4. Reflection / Refactor
</h2>
*
*
*
*
*
*
*
*