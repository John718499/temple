"use strict";(self.webpackChunktemple=self.webpackChunktemple||[]).push([[696],{2696:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=n(1413),a=n(4165),i=n(5861),s=n(5671),c=n(3144),o=n(136),u=n(9388),l=n(2791),d=n(3504),f=n(6871),m=n(6157),p=n(5481),h=n(3446),v=n(4221),x=n(184),b=function(t){(0,o.Z)(n,t);var e=(0,u.Z)(n);function n(t){var r;return(0,s.Z)(this,n),(r=e.call(this,t)).MenuClick=function(){r.setState({menuOpenSataus:!r.state.menuOpenSataus})},r.Logout=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.RD)((function(){v.fn.success("\u6210\u529f","\u767b\u51fa",3e3),r.props.navigate("/login")}),(function(){v.fn.error("\u932f\u8aa4","\u767b\u51fa",3e3)}));case 2:case"end":return t.stop()}}),t)}))),r.state={loadedAuth:!1,menuOpenSataus:!1,isActive:!1,isAdmin:!1,isSuperAdmin:!1},r}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.Ih)();case 2:return t.sent||this.props.navigate("/login"),t.next=6,(0,p.gx)();case 6:return t.next=8,this.setState({isActive:"true"===localStorage.getItem("isActive"),isAdmin:"true"===localStorage.getItem("isAdmin"),isSuperAdmin:"true"===localStorage.getItem("isSuperAdmin"),loadedAuth:!0});case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.loadedAuth)return(0,x.jsx)(h.g,{});if(!this.state.isActive&&!this.state.isAdmin&&!this.state.isSuperAdmin)return(0,x.jsx)("div",{className:"p-3",children:(0,x.jsx)("div",{className:"mx-auto shadow rounded mt-3 mb-3",style:{maxWidth:"600px",width:"100%",padding:"40px 30px"},children:(0,x.jsxs)("span",{children:["\u76ee\u524d\u6c92\u6709\u6b0a\u9650",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"\u8acb\u806f\u7e6b\u7ba1\u7406\u8005\u8ce6\u4e88\u6b0a\u9650"]})})});var t=(0,x.jsx)("i",{className:"bi bi-menu-up"});this.state.menuOpenSataus&&(t=(0,x.jsx)("i",{className:"bi bi-arrow-return-left"}));var e=[];return(this.state.isAdmin||this.state.isSuperAdmin)&&(e.push((0,x.jsx)(d.rU,{to:"./create",children:(0,x.jsx)(m.Z,{className:"btn-circle position-fixed end-0 m-4 transition-primary btn-success ".concat(this.state.menuOpenSataus?"shadow":""),style:{bottom:"".concat(this.state.menuOpenSataus?"260px":"0"),zIndex:"50"},children:(0,x.jsx)("i",{className:"bi bi-plus-lg"})})},"create")),e.push((0,x.jsx)(d.rU,{to:"./manage",children:(0,x.jsx)(m.Z,{className:"btn-circle position-fixed end-0 m-4 transition-primary btn-success ".concat(this.state.menuOpenSataus?"shadow":""),style:{bottom:"".concat(this.state.menuOpenSataus?"195px":"0"),zIndex:"50"},children:(0,x.jsx)("i",{className:"bi bi-gear"})})},"manage"))),(0,x.jsxs)("div",{children:[e,(0,x.jsx)(d.rU,{to:"./join",children:(0,x.jsx)(m.Z,{className:"btn-circle position-fixed end-0 m-4 transition-primary btn-success ".concat(this.state.menuOpenSataus?"shadow":""),style:{bottom:"".concat(this.state.menuOpenSataus?"130px":"0"),zIndex:"50"},children:(0,x.jsx)("i",{className:"bi bi-house-fill"})})}),(0,x.jsx)(m.Z,{className:"btn-circle position-fixed end-0 m-4 transition-primary btn-success ".concat(this.state.menuOpenSataus?"shadow":""),style:{bottom:"".concat(this.state.menuOpenSataus?"65px":"0"),zIndex:"50"},onClick:this.Logout,children:(0,x.jsx)("i",{className:"bi bi-door-closed"})}),(0,x.jsx)(m.Z,{className:"btn-circle position-fixed end-0 m-4 transition-primary shadow ".concat(this.state.menuOpenSataus?"btn-danger":"btn-success"),style:{bottom:"0",zIndex:"60"},onClick:this.MenuClick,children:t}),(0,x.jsx)("div",{children:(0,x.jsx)(f.j3,{})})]})}}]),n}(l.Component);function g(t){var e=(0,f.s0)();return(0,x.jsx)(b,(0,r.Z)((0,r.Z)({},t),{},{navigate:e}))}},5481:function(t,e,n){n.d(e,{Cj:function(){return f},Ih:function(){return l},RD:function(){return m},gx:function(){return h},xH:function(){return d}});var r=n(4165),a=n(5861),i=n(408),s=n(6115),c=n(9033),o=(0,c.v0)(),u=(0,i.N8)(),l=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.n)();case 2:return t.abrupt("return",o.currentUser);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(t,e,n,r){(0,c.Xb)(o,t,e).then(p).then(n).catch(r)},f=function(t,e,n,r){(0,c.e5)(o,t,e).then(p).then(n).catch(r)},m=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.n)();case 2:o.signOut().then(e).catch(n);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=o.currentUser;(0,i.t8)((0,i.iH)(u,"users/".concat(t.uid,"/email")),t.email)},h=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.currentUser,t.next=3,(0,s.C)((0,i.iH)(u,"users/".concat(e.uid))).then((function(t){if(!t.exists())throw new Error("nodata");var e=t.val();localStorage.setItem("email",e.email||!1)})).catch((function(){return localStorage.removeItem("email")}));case 3:return t.next=5,(0,s.C)((0,i.iH)(u,"isSuperAdmin/".concat(e.uid))).then((function(t){if(!t.exists())throw new Error("nodata");localStorage.setItem("isSuperAdmin",t.val()||!1)})).catch((function(){return localStorage.removeItem("isSuperAdmin")}));case 5:return t.next=7,(0,s.C)((0,i.iH)(u,"isAdmin/".concat(e.uid))).then((function(t){if(!t.exists())throw new Error("nodata");localStorage.setItem("isAdmin",t.val()||!1)})).catch((function(){return localStorage.removeItem("isAdmin")}));case 7:return t.next=9,(0,s.C)((0,i.iH)(u,"isActive/".concat(e.uid))).then((function(t){if(!t.exists())throw new Error("nodata");localStorage.setItem("isActive",t.val()||!1)})).catch((function(){return localStorage.removeItem("isActive")}));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},6115:function(t,e,n){n.d(e,{C:function(){return c},n:function(){return s}});var r=n(9033),a=n(408),i=(0,r.v0)(),s=function(){return new Promise((function(t){if(i.currentUser)t(!0);else var e=(0,r.v0)().onAuthStateChanged((function(n){e(),t(!!n)}))}))},c=function(t){return new Promise((function(e,n){(0,a.jM)(t,(function(t){e(t)}),(function(t){n(t)}),{onlyOnce:!0})}))}},6157:function(t,e,n){n.d(e,{Z:function(){return v}});var r=n(1413),a=n(885),i=n(5987),s=n(1694),c=n.n(s),o=n(2791),u=n(184),l=["as","disabled"];function d(t){var e=t.tagName,n=t.disabled,r=t.href,a=t.target,i=t.rel,s=t.onClick,c=t.tabIndex,o=void 0===c?0:c,u=t.type;e||(e=null!=r||null!=a||null!=i?"a":"button");var l={tagName:e};if("button"===e)return[{type:u||"button",disabled:n},l];var d=function(t){(n||"a"===e&&function(t){return!t||"#"===t.trim()}(r))&&t.preventDefault(),n?t.stopPropagation():null==s||s(t)};return"a"===e&&(r||(r="#"),n&&(r=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:o,href:r,target:"a"===e?a:void 0,"aria-disabled":n||void 0,rel:"a"===e?i:void 0,onClick:d,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),d(t))}},l]}var f=o.forwardRef((function(t,e){var n=t.as,r=t.disabled,i=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,l),s=d(Object.assign({tagName:n,disabled:r},i)),c=(0,a.Z)(s,2),o=c[0],f=c[1].tagName;return(0,u.jsx)(f,Object.assign({},i,o,{ref:e}))}));f.displayName="Button";var m=n(162),p=["as","bsPrefix","variant","size","active","className"],h=o.forwardRef((function(t,e){var n=t.as,s=t.bsPrefix,o=t.variant,l=t.size,f=t.active,h=t.className,v=(0,i.Z)(t,p),x=(0,m.vE)(s,"btn"),b=d((0,r.Z)({tagName:n},v)),g=(0,a.Z)(b,2),S=g[0],j=g[1].tagName;return(0,u.jsx)(j,(0,r.Z)((0,r.Z)((0,r.Z)({},S),v),{},{ref:e,className:c()(h,x,f&&"active",o&&"".concat(x,"-").concat(o),l&&"".concat(x,"-").concat(l),v.href&&v.disabled&&"disabled")}))}));h.displayName="Button",h.defaultProps={variant:"primary",active:!1,disabled:!1};var v=h},162:function(t,e,n){n.d(e,{pi:function(){return c},vE:function(){return s}});var r=n(2791),a=(n(184),["xxl","xl","lg","md","sm","xs"]),i=r.createContext({prefixes:{},breakpoints:a});i.Consumer,i.Provider;function s(t,e){var n=(0,r.useContext)(i).prefixes;return t||n[e]||e}function c(){return(0,r.useContext)(i).breakpoints}},5987:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(3366);function a(t,e){if(null==t)return{};var n,a,i=(0,r.Z)(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}}}]);
//# sourceMappingURL=696.446686b9.chunk.js.map