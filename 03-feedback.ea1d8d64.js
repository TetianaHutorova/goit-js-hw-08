var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};JSON.parse('{"LSVIDEO":"videoplayer-current-time","LSFEEDBACK":"feedback-form-state"}');var t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,u,f,c=0,l=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function S(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function b(e){return c=e,u=setTimeout(O,t),l?S(e):a}function E(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-c>=i}function O(){var e=d();if(E(e))return j(e);u=setTimeout(O,function(e){var n=t-(e-f);return g?m(n,i-(e-c)):n}(e))}function j(e){return u=void 0,y&&o?S(e):(o=r=void 0,a)}function D(){var e=d(),n=E(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return b(f);if(g)return u=setTimeout(O,t),S(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,i=(g="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),D.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},D.flush=function(){return void 0===u?a:j(d())},D}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");y.addEventListener("input",t((function(){const e={email:y.elements.email.value,message:y.elements.message.value};localStorage.setItem("common.LSFEEDBACK",JSON.stringify(e))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("common.LSFEEDBACK"))),e.currentTarget.reset(),localStorage.removeItem("common.LSFEEDBACK")})),localStorage.getItem("common.LSFEEDBACK")&&(y.elements.email.value=JSON.parse(localStorage.getItem("common.LSFEEDBACK")).email,y.elements.message.value=JSON.parse(localStorage.getItem("common.LSFEEDBACK")).message);
//# sourceMappingURL=03-feedback.ea1d8d64.js.map