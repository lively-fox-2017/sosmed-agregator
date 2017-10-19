var SweetSelector = (function() {
    function select(input) {
      console.log(document.querySelector(input));
      // console.log('halo')
    }
    
    return {
      select: select
    }
})()

var DOM = (function() {
  function hide(input) {
    var e = document.querySelector(input);
    e.style.display = 'none'
    // console.log('halo')
  }

  function show(input) {
    var e = document.querySelector(input);
    e.style.display = 'block'
    // console.log('halo')
  }

  function addClass(className, input) {
    var e = document.querySelector(className);
    e.classList.add(className + input)
  }

  function removeClass(className, input) {
    var e = document.querySelector(className);
    console.log(e.className)
    e.classList.remove(className + input)
  }
  
  return {
    hide: hide,
    show: show,
    addClass: addClass,
    removeClass: removeClass
  }
})()

var EventDispatcher = (function() {
  function on(input, event, func) {
    var e = document.querySelector(input);
    e.addEventListener(event, func)
    // console.log('halo')
  }

  function trigger(input, event) {
    var e = document.querySelector(input);
    e.addEventListener(event, () => {
      console.log("awesome")
    })
    // console.log('halo')
  }

  return {
    on: on,
    trigger: trigger
  }
})()

var AjaxWrapper = (function() {
  function request(obj) {
    function reqListener() {
      console.log(this.responseText)
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", obj.url);
    oReq.send()
  }

  return {
    request: request
  }
})()


// var miniquery = (function() {
//   function select(input) {
//     console.log(document.querySelector(input));
//     // console.log('halo')
//   }
  
//   return {
//     select: select
//   }
// })()