### toggleClass
The toggleClass() method toggles between adding and removing one or more class names from the selected elements.
syntax

This method checks each element for the specified class names. The class names are added if missing, and removed if already set - This creates a toggle effect.

```
$(selector).toggleClass(classname,function(index,currentclass),switch)
```

### addClass
The addClass() method adds one or more class names to the selected elements.
> This method does not remove existing class attributes, it only adds one or more class names to the class attribute.


### find
```
<ul class="level-1">
  <li class="item-i">I</li>
  <li class="item-ii">II
    <ul class="level-2">
      <li class="item-a">A</li>
      <li class="item-b">B
        <ul class="level-3">
          <li class="item-1">1</li>
          <li class="item-2">2</li>
          <li class="item-3">3</li>
        </ul>
      </li>
      <li class="item-c">C</li>
    </ul>
  </li>
  <li class="item-iii">III</li>
</ul>
```
```
$( "li.item-ii" ).find( "li" ).css( "background-color", "red" );
```
>li tag 중에서 item-ii class 갖고 있는 li를 찾은 후,  find는 앞서 찾은 li자식으로 있는 모든 li를 찾아서 .css 해라
>>A, B, 1, 2, 3, and C


### focusin focusout
The focusin event occurs when an element (or any elements inside it) gets focus.

### siblings
The siblings() method returns all sibling elements of the selected element.
Sibling elements are elements that share the same parent.

### parent
The parent() method returns the direct parent element of the selected element.

The DOM tree: This method only traverse a single level up the DOM tree. To traverse all the way up to the document's root element (to return grandparents or other ancestors), use the parents() or the parentsUntil() method.


### p:last-child, span:last-child, p:first-child
Select every <p> element that is the last child of its parent:

