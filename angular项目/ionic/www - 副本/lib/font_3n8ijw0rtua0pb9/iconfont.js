;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-xiaoxi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M319.798025 964.852902c-6.696516 0-13.352099-2.440585-18.570961-7.131421-8.770757-7.888667-11.589966-20.455891-7.048533-31.340799l31.720446-75.93853c5.287423-11.30651 9.475815-24.943089 9.841136-31.232328-6.859221-10.734482-5.585205-25.173332 3.795443-34.552957 10.843976-10.830673 28.426423-10.830673 39.270399 0.014326 23.437805 23.450085 8.67559 65.431222-2.209318 88.354304l-0.704035 1.694595 126.09486-69.039399c4.093225-2.236947 8.67559-3.415796 13.337773-3.415796 215.60243 0 390.999159-154.586774 390.999159-344.591199 0-176.182628-182.716438-330.724377-390.999159-330.724377-206.655663 0-385.726062 151.829987-391.025765 331.544045-3.009544 102.08912 50.196239 199.649086 145.95314 267.670296 12.498662 8.863878 15.439644 26.188452 6.561439 38.70144-8.892531 12.483312-26.202779 15.439644-38.714743 6.545066C126.941646 692.465165 65.236282 577.810868 68.801481 456.854029 74.956667 247.934812 279.442922 71.425749 515.32421 71.425749c242.035452 0 446.523753 176.881546 446.523753 386.247948 0 218.470757-196.420555 396.61711-439.324794 400.061558L333.136821 961.435059C328.948429 963.727265 324.366064 964.852902 319.798025 964.852902z"  ></path>'+
      ''+
      '<path d="M586.004993 406.725328 336.146365 406.725328c-7.67275 0-13.880125-6.215562-13.880125-13.881149s6.208399-13.881149 13.880125-13.881149l249.858628 0c7.671727 0 13.880125 6.215562 13.880125 13.881149S593.676719 406.725328 586.004993 406.725328z"  ></path>'+
      ''+
      '<path d="M697.051111 406.725328l-41.642422 0c-7.671727 0-13.880125-6.215562-13.880125-13.881149s6.208399-13.881149 13.880125-13.881149l41.642422 0c7.67275 0 13.881149 6.215562 13.881149 13.881149S704.723861 406.725328 697.051111 406.725328z"  ></path>'+
      ''+
      '<path d="M502.718101 545.534767 350.027513 545.534767c-7.67275 0-13.881149-6.215562-13.881149-13.880125 0-7.66661 6.208399-13.880125 13.881149-13.880125l152.690588 0c7.67275 0 13.880125 6.213515 13.880125 13.880125C516.598226 539.319206 510.390851 545.534767 502.718101 545.534767z"  ></path>'+
      ''+
      '<path d="M586.004993 545.534767l-27.762297 0c-7.67275 0-13.881149-6.215562-13.881149-13.880125 0-7.66661 6.208399-13.880125 13.881149-13.880125l27.762297 0c7.671727 0 13.880125 6.213515 13.880125 13.880125C599.885118 539.319206 593.676719 545.534767 586.004993 545.534767z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
