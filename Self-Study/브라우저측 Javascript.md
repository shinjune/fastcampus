#DOM API



트리


###노드 선택
document.querySelector
console mode

document.querySelectorAll('p')
document.querySelectorAll('div')
Array.isArray(document.querySelectorAll('div'))
배열이 아니다
document.querySelectorAll('div') instanceof NodeList

Array.from(document.querySelectorAll('div'))


el.querySelector

el.closeset

el.matches

### element 내용 조작하기

el.textContent

el.innerHTML
// el.innerHTML = 'hello' same as above but dangerous to XSS (cross site scripting - hacking method) 


### attribute element 조작하기
