#Nov 15th 2017 - what I learnt

## How to utilize markdwon method

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

### box-size
box-size에는 border-box, content-box가 있음. border-box가 padding 등의 값을 모두 안쪽으로 더한 것. 새로 padding에 px을 줘도 전체 사이즈 안에서 인식됨.

### table의 border-collapse: collapse;
standard border는 duplicate border but collapsed border는 line border
collapsed border를 해서 2겹을 하나로 만들었으니
border-spacing: 0으로 해야하는지는 모르겠음


### rem vs em
rem is a unit of typography equal to the root font-size. This means 1rem is always equal to the font-size defined in <html>.
em just is equal to the parent font-size.

### a:link, a:visited
color를 왜 inherit?
dext-decoration: none; 밑줄 없애기


### *의 의미
*는 모든 요소를 다 지정

### 특별법 우선 원칙이 css에서도 적용

### vw, vh
The viewport is the area of your browser where actual content is displayed - in other words your web browser without its toolbars and buttons. The units are vw, vh, vmin and vmax. They all represent a percentage of the browser (viewport) dimensions and scale accordingly on window resize.
보이보는 부분을 전체의 %로 나타낸 것.
e.g. 50vh

### before, after
before는 자신이 속해있는 element의 가장 앞에 virtual tag를 만들어주는 것. after는 가장 마지막


### :의 의미
:focus에서 :는 action을 의미
::는 static expresssion이라고?

### 폴더 href 
.이 하나면 current folder
.. 두개면 above one folder
c:/users/admin/www 이런식으로 적을 것

### menu>li vs menu li 차이점
former indicates the elements just below menu elements but the latter does every elements in menu


### font 추가
font.css 가서 추가해야 함


###position
With absolute positioning, an element can be placed anywhere on a page.
\\\ h2 {
    position: absolute;
    left: 150px;
    top: 100px;
}\\\


###overflow
The overflow property specifies what to do if the content of an element exceeds the size of the element's box.
overflow:scroll
overflow: hidden

###visibility
hidden은 보이지 않으나 영역은 사라지지 않음

###display
inline
An inline element does not start on a new line and only takes up as much width as necessary. 딱 지만큼만 간다
block
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). 갈 때까지 간다

###clip
the clip property only works on elements with position: absolute or position: fixed. It won’t work with relative or static positioning.
crop처럼 잘라내는 것. 

###transform
translate(100px, 100px)
X축 Y축으로 각각 100px만큼 이동

### z-index
The z-index property specifies the stack order of an element.
not value but order. 누가 먼저 앞인가
z-index: -1;

### important
important 구체성 점수를 가리지 않고 최상위로 적용
남발하면 문제됨.

### float & clear

float을 하면 floating 되는 것 같다. 그래서 양 옆에 다른 text나 imgae가 올 수 있더라.

clear는 floating element를 인정하느냐 마느냐
clear: none이 default
clear는 float을 무시하는 것?
좌우로 나를 가리지말고 비켜!
The most common way to use the clear property is after you have used a float property on an element.



### text-transform
toUpperCase toLowerCase method와 동일

### inline-block
inline-block을 하면 다른 element가 이 안으로 못 들어온다.
floating하는 글은 위에서 아래로 가는 것을 봤다.

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
````

main-munu의 li가 get focused then go 'span' and execute ::after



### animation vs transformation vs transition



### 'form' works with fieldset, legend

### form에서 '아이디'는 입력칸의 서식을 알려주는 tag를 붙어야 함. #user-email 
for라는 속성을 사용