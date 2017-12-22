#Nov 15th 2017 - what I learnt

# Semantic Elements
## Why Semantic Elements?
With HTML4, developers used their own id/class names to style elements: header, top, bottom, footer, menu, navigation, main, container, content, article, sidebar, topnav, etc.

This made it impossible for search engines to identify the correct web page content.

With the new HTML5 elements (<header> <footer> <nav> <section> <article>), this will become easier.

Semantic Elements in HTML5
<article>	Defines an article
<aside>	Defines content aside from the page content
<details>	Defines additional details that the user can view or hide
<figcaption>	Defines a caption for a <figure> element
<figure>	Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.
<footer>	Defines a footer for a document or section
<header>	Specifies a header for a document or section
<main>	Specifies the main content of a document
<mark>	Defines marked/highlighted text
<nav>	Defines navigation links
<section>	Defines a section in a document
<summary>	Defines a visible heading for a <details> element
<time>	Defines a date/time

## semantics elements

Semantics is the study of the meanings of words and phrases in a language.
Semantic elements = elements with a meaning.

### code insert

> 코드를 입력할 때는 `를 앞 뒤로 3번씩 넣는다
> when inputting indentation, use 'arrow'
> when inputting 'url', use 'square braces' [trustar][http://www.trustar.co.kr]
 

##
CSS Zen garden 가면 text가 이미지처럼 보일 수 있다 ? SEO
텍스트를 넣고 hidden 처리하면 SEO에 도움   aria 라는 기술을 확인


### normailzation 

> why is 'normalization' necessary?
normailization은 브라우저마다 기본 user agent style이 다른데 이를 공통적으로 변환시켜주는 것

## block elements vs inline elements

HTML elements can be divided into two categories : block level and inline elements.

> block elements
1. HTML block level elements can appear in the body of an HTML page.
2. It can contain another block level as well as inline elements.
3. By default, block-level elements begin on new lines.
4. block level elements create larger structures (than inline elements).

List of block level elements
p,  h1, h2, h3, h4, h5, h6, ol, ul, div, fieldset, form, table

>inline elements
1. HTML inline level elements can appear in the body of an HTML page.
2. It can contain data and other inline elements.
3. By default, inline elements do not begin on new lines.
4. inline elements create shorter structures (than block level elements).
b, big, i, small, tt
abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var
a, bdo, br, img, map, object, q, script, span, sub, sup
button, input, label, select, textarea



### box-size
box-size : border-box, content-box 
> border-box : padding, margin 등 값이 더해져도 전체 width는 변하지 않고, 사이즈 않에서 인식됨. 단, 처음에 width를 주어야 함. 주지 않은 상태에서 padding 등이 추가되면 width가 증가.

> content-box : 안에 padding 등 입력하면 width가 지정되었더라도 전체 size가 증가함.


### table의 border-collapse: collapse;
standard border는 duplicate border but collapsed border는 line border
collapsed border를 해서 2겹을 하나로 만들었으니
border-spacing: 0으로 해야하는지는 모르겠음


### rem vs em
rem is a unit of typography equal to the root font-size. This means 1rem is always equal to the font-size defined in <html>.
em just is equal to the parent font-size.

### a:link, a:visited, a:focused
:은 action을 의미
::은 static을 의미

color를 왜 inherit?

### *의 의미
*는 모든 요소를 다 지정

### 특별법 우선 원칙이 css에서도 적용

### vw, vh
The viewport is the area of your browser where actual content is displayed - in other words your web browser without its toolbars and buttons. The units are vw, vh, vmin and vmax. They all represent a percentage of the browser (viewport) dimensions and scale accordingly on window resize.
보이보는 부분을 전체의 %로 나타낸 것.
e.g. 50vh

### background
background: url(""), no-repeat, right, top

### linear-gradient
background: url(""), no-repeat, right, top, linear-gradient(to bottom, color %, color %, color %)

### before, after
before는 자신이 속해있는 element의 가장 앞에 virtual tag를 만들어주는 것.
after는 그 다음


### 폴더 href 
.이 하나면 current folder
.. 두개면 above one folder
c:/users/admin/www 이런식으로 적을 것

### menu>li vs menu li 차이점
former indicates the elements just below menu elements but the latter does every elements in menu


### font 추가
font.css 가서 추가해야 함


###position
> With absolute positioning, an element can be placed anywhere on a page. The element is positioned relative to its first positioned (not static) ancestor element

1. static - default value. 
Elements render in order, as they appear in the document flow
top, right doesn't work

2. relative
The element is positioned relative to its NORMAL position
top, right work

3. absolute 
자신의 부모 혹은 조상 객체중에 'STATIC'이 아닌 속성(absolute, fixed, relative)이 있는 것을 찾아 그 객체를 좌표의 기준으로 삼는다. 

absolute is positioned relative to the NEAREST positioned ancestor (instead of positioned relative to the viewport, like fixed). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

특징

- 공중에 붕붕 떠다닌다라고 생각
- top, right 등으로 위치를 지정
> position 설정시 box sixe
>> width, heigth가 없으면 텍스트 크기만큼이 사이즈. 텍스트가 많아지만 사이즈도 커진다
>>> width, height를 주었는데, 텍스트가 주어진 사이즈보다 많아지면 텍스트가 칸을 넘어간다.



### float & clear

> float
1. float을 시키면 원래 있던 자리에서 뜬다.
2. width, height 다 된다
3. float으로 떠버리니, 다음에 온 값들은 float과 텍스트만 겹치지 않고, 박스는 겹친다.

> clear
The most common way to use the clear property is after you have used a float property on an element.
float 쓰면 남은 영역에 text 등이 온다.
Clear를 쓰면 그 남은 영역으로 가는 것을 'clear'하게 비워놓아라


###overflow
The overflow property specifies what to do if the content of an element exceeds the size of the element's box.
scroll, hidden, visible
> hidden : 보이지 않는 것 뿐만 아니라 박스영역도 겹쳐지지 않음.

###visibility
visibility: hidden;
> hidden으로 하니 보이지만 않을 뿐 영역은 그대로 있다.


###display & inline
inline
An inline element does not start on a new line and only takes up as much width as necessary. 딱 지만큼만 간다.
> margin padding are not working
> width is NOT working

block
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). 갈 때까지 간다
> margin padding are working
> position - top, left doesn't work
> width is working but text는 여전히 끝까지
> 


### inline-block
inline-block을 하면 다른 element가 이 안으로 못 들어온다. float - clear를 대신하는 기능

The old way - using float (notice that we also need to specify a clear property for the element after the floating boxes):
The same effect can be achieved by using the inline-block value of the display property (notice that no clear property is needed):
> inline-block elements are like inline elements but they can have a width and a height.

### float inline-block
2개를 동시에 넣으면 float이 안 먹음

float은 block요소인데 block을 inline화 했으니 서로 incompatible


###clip
the clip property only works on elements with position: absolute or position: fixed. It won’t work with relative or static positioning.
crop처럼 잘라내는 것. 


### z-index
The z-index property specifies the stack order of an element.
not value but order. 누가 먼저 앞인가
z-index: -1;

### important
important 구체성 점수를 가리지 않고 최상위로 적용
남발하면 문제됨.


### text-transform
toUpperCase toLowerCase method와 동일


### 명령어 이해

``` 
.main-menu span:hover::after, .main-menu>li:focus span::after {
  content: "";
  display: block;
  border-top: 2px solid #000;
}
```

main-menu의 span에 hovering을 하면 ::after를 실행해라

```
.main-menu span:hover, .main-menu>li:focus span {
  color: yellow;
}
```

main-munu의 li가 get focused then go 'span' and execute ::after




###
html에서 크기를 제어할 수 있는건 모두 inline-block의 성격
크기조절이 css에서 되는건 inline

## Form tag
form에 기본적으로 들어가는 코드
```
<form>
  <fieldset>
  <legend></legend>
    <label for="name">Choose a username: </label>
    <input type="text" id="uname" name="name">
    <button>Submit</button>
  </fieldset>
</form>
```
> form works with fieldset and legend
> form에서 label과 input은 1:1 대응
> legend shows the information of form


### form action
```
<form action="" required placeholder="검색창에 넣고 싶은 말></form>
```

### form에서 '아이디'는 입력칸의 서식을 알려주는 tag를 붙어야 함. #user-email 
for라는 속성을 사용

### form fieldset
HTML5에서는 HTML4, XHTML 모두 포용

### input tag에 들어가는 속성
1. placeholder - 보여주는 value
2. type - type의 종류는 매우 많음
[type의 종류][https://www.w3schools.com/tags/tag_input.asp]
3. required - 필수값
4. maxlength - 글자수 제한
5. disabled - 사용할 수 없음. e.g. 주소입력 할 때 쓰임


### input type
button, checkbox, color, date, email, image, number, password, text, submit, search


### section
section element represents a standalone section which doesn't have a more specific semantic element to represent it.

### article
The <article> tag specifies independent, self-contained content.

### time tag
The <time> tag defines a human-readable date/time.
Time element can also be used to encode dates and times in a machine-readable way so that user agents can offer to add birthday reminders or scheduled events to the user's calendar, and search engines can produce smarter search results.
<time datetime="2017-11-21T16:13:55">2017-11-21</time>




### white-space
nowrap은 줄바뀜 하지 않고 오른쪽으로 계속 간다. 


### box-shadow
```
box-shadow: 10px 5px 5px black;
```
1번째 값 : offset x
2번째 값 : offset y
3번째 값 : blur radius
4번째 값 : color


## HTML Entities
& ampersand &amp;
" &quot;
' &apos;
non-breaking space *nbsp;

### tabindex?
tabindex는 tab을 통해 이동하는 순서
근데 예제에서 왜 tabindex를 썼는지 이해가 안됨



## media-query
```
@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}
```
bigger than 480px, show lightgreen


### 
section, navigation, article, aside는 그 안에 있는 contents는 모두 연관된 컨텐츠
(명시적인 outline)

div는 암묵적인 outline



### title 역할
모든 tag에 다 쓸 수 있다
title은 보충설명임

카드번호 입력하는 4 blanks에 모두 하나씩 label을 해줄 수 없으므로, 이럴 때 title을 쓴다

<img src="" alt="web cafe" title="web cafe"> 이렇게 중복하는건 좋지 않음


### web form 2.0
form사이에는 margin넣지 않는다

### id
id는 javascript 때문에 잘 사용안함.
id는 10점이어서 점수가 높기 때문



### w3c markup
img랑 text를 markup에서 넣지 말자.


### dl dt dd 정의형 목록 tag
목록을 정의할 때는 dl 사용
e.g. 웹관련용어 - 웹표준이란
dl은 용어 + 설명으로 구성
```
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```
dl에는 아무것도 안 넣었다. 



### 웹관련용어 layout 복습

term class 처리법
1. dt, dd 3개 모두 floating
2. problem => dl영역이 줄어듬 
> solution : clearfix::after
> solution : overflow : hidden (단, float한 이미지가 커지면 범위를 벗어날 수 있음)
> 1번 inline block 하고 2번 float하면 3번째가 텍스트가 사이로 올라간다. 나쁜 코드는 아니자만 관리가 어려움


# nth-child
li:nth-child(3n+1):nth-child(even) 
1번째부터 선택하되 3n의 첫번째 그런데 even이니까 1은 아니고 4, 10

### word-break
word-break : break-all;

### white-space, overflow, text-overflow
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;


### calculation function
width: 100% - 150px;

### icon font 지정
.search-form label::before {
  content: '\f1d9';
  font-family: "fontello";
}
font-family지정해줘야 한다

icon 많이 사용하면
.icon::before{
  font-family : "fontello";
}
이렇게 해주면 편함
그러면 content: ""만 해주면 됨

### tab ARIA


### h3를 왜 줬는지


## Grid
### grid display
```
grid-template-column:[first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
<!-- you can choose to explicitly name the lines. Note the bracket syntax for the line names: -->
```

```
grid-template-columns: repeat(3, 20px [col-start]) 5%;
grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start] 5%;
```

```
grid-template-columns: 1fr 1fr 1fr;
<!-- this will set each item to one third the width of the grid container: -->
```

### grid-template
```
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
<!-- four columns wide by three rows tall -->
```

### grid-gap
```
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  grid-gap: 10px 15px;
}
```
### justify-item vs align-item

start aligns the 'content' to the left end of the grid area
```
.container {
  justify-items: start | end | center | stretch;
}
```
[reference][https://css-tricks.com/snippets/css/complete-guide-grid/]

### justify-content vs align-content


grid-column-start 첫번째 줄 번호가 1번, negative value is working
start value < end value is okay
grid-column-start : span 3;
grid-column : 4 / 6;

grid-area accepts four values separated by slashes: 
grid-row-start, grid-column-start, grid-row-end, followed by grid-column-end.

grid-template-columns: 100px 3em 40%;



### IR (image replacement)

```
h1 {
      width: 290px;
      height: 195px;
      position: relative;
      font-size: 1em;
      padding: 20px;
      box-sizing: border-box;
    }
    
    h1::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("/images/title.png") no-repeat;
    } 
```



### Sprite image
An image sprite is a collection of images put into a single image.

sprite.html 복습!!


### position sticky


### button 은 inline속성 ir할 때 글자 밑에 다른 배경색 있는 이유

### 단축코드 background 같은 것을 쓰면 position을 주지 않더라도 position 0이라고 값이 주어진다


### [class$="more"], [class^="more"]
[class$="more"] means every class which ends with 'more'
[class^="more"] means every class which starts with 'more'

a[href^="https"] 이런 경우에 많이 사용

### counter-increment
counter-increment: number;
content: counter(number, decimal); number가 increment할 때 마다 decimal로 보여줘라
decimal 대신 upper-roman, upper-alpha 등 가능

### quotes: "<<"">>";


### address
address is only used in footer


### picture
HTML5 element

```
<style>
  img {display: block; margin: 0 auto;}
</style>

<picture>
  <source 
    media="(min-width: 650px)"
    srcset="images/kitten-stretching.png">
  <source 
    media="(min-width: 465px)"
    srcset="images/kitten-sitting.png">
  <img 
    src="images/kitten-curled.png" 
    alt="a cute kitten">
</picture>
```
width에 따라 show different images

### srcset
ie, chrome, html5 등 cross-browsing issue가 있다. 이를 해결하기 위해서 picturefill 사용

### favicon
favorite icon - icon on tab

### animation vs transformat vs transition

###transform
translate(100px, 100px)
X축 Y축으로 각각 100px만큼 이동

### animation
An animation lets an element gradually change from one style to another.

> animation-direction
alternate : Play the animation forwards first, then backwards:
alternate-reverse, etc


### keyframes
@keyframes specifies the animation code

```
@keyframes name {
  0% {
    font-size: 14rem;
    color: rgba(0, 0, 0, 0);
    transform: translate(0, 0);
    black;
  }
  100% {
    font-size : 16rem;
    color: rgba(0, 0, 0, 1);
    transform: translte(0, 0);
  } 
}
```


# rwd html css mobile 공부해야함

# media-query는 media.css에서 지정
@media screen and (min-width: 768px) {
  body {

  }
}
