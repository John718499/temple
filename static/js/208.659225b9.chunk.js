"use strict";(self.webpackChunktemple=self.webpackChunktemple||[]).push([[208],{8208:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(1413),a=n(4165),s=n(5861),i=n(5671),o=n(3144),c=n(136),l=n(9388),u=n(2791),d=n(3504),f=n(6871),m=n(3855),h=n(2677),p=n(6157),v=n(5481),w=n(4221),x=n(184),g=function(t){(0,c.Z)(n,t);var e=(0,l.Z)(n);function n(t){var r;return(0,i.Z)(this,n),(r=e.call(this,t)).EmailChange=function(t){r.setState({email:t.target.value})},r.PasswordChange=function(t){r.setState({password:t.target.value})},r.ConfirmPasswordChange=function(t){r.setState({confirmPassword:t.target.value})},r.EmailInvalid=function(){return r.state.validated&&!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(r.state.email)},r.PasswordInvalid=function(){return r.state.validated&&r.state.password.length<6},r.ConfirmPasswordInvalid=function(){return r.state.validated&&(""===r.state.confirmPassword||r.state.password!==r.state.confirmPassword)},r.RegisterClick=function(){var t=(0,s.Z)((0,a.Z)().mark((function t(e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),e.stopPropagation(),t.next=4,r.setState({validated:!0});case 4:if(![r.EmailInvalid(),r.PasswordInvalid(),r.ConfirmPasswordInvalid()].some((function(t){return t}))){t.next=7;break}return t.abrupt("return");case 7:(0,v.xH)(r.state.email,r.state.password,(function(){w.fn.success("\u6210\u529f","\u8a3b\u518a",3e3),r.props.navigate("/login")}),(function(t){-1!==t.toString().indexOf("auth/email-already-in-use")&&w.fn.error("\u96fb\u5b50\u90f5\u4ef6\u5df2\u8a3b\u518a","\u8a3b\u518a",3e3),console.log("error",t)}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.state={email:"",password:"",confirmPassword:"",validated:!1},r}return(0,o.Z)(n,[{key:"render",value:function(){return(0,x.jsxs)("div",{className:"mx-auto",style:{maxWidth:"330px",width:"100%",padding:"50px 15px 15px 15px"},children:[(0,x.jsx)("p",{className:"fs-2 text-center",children:"\u8a3b\u518a\u5e33\u865f"}),(0,x.jsxs)(m.Z,{noValidate:!0,onSubmit:this.RegisterClick,children:[(0,x.jsx)("div",{className:"mb-2",children:(0,x.jsxs)(m.Z.Group,{className:"position-relative",as:h.Z,md:"12",controlId:"email",children:[(0,x.jsx)(m.Z.Control,{required:!0,type:"email",placeholder:"\u8acb\u8f38\u5165\u96fb\u5b50\u90f5\u4ef6",value:this.state.email,onChange:this.EmailChange,isInvalid:this.EmailInvalid()}),(0,x.jsx)(m.Z.Control.Feedback,{className:"text-nowrap",style:{left:"102%",top:"50%",transform:"translateY(-50%)"},type:"invalid",tooltip:!0,children:""===this.state.email?"\u5fc5\u586b":"\u8acb\u8f38\u5165Email\u683c\u5f0f"})]})}),(0,x.jsx)("div",{className:"mb-2",children:(0,x.jsxs)(m.Z.Group,{className:"position-relative",as:h.Z,md:"12",controlId:"password",children:[(0,x.jsx)(m.Z.Control,{required:!0,type:"password",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:this.state.password,onChange:this.PasswordChange,isInvalid:this.PasswordInvalid()}),(0,x.jsx)(m.Z.Control.Feedback,{className:"text-nowrap",style:{left:"102%",top:"50%",transform:"translateY(-50%)"},type:"invalid",tooltip:!0,children:""===this.state.password?"\u5fc5\u586b":"\u5bc6\u78bc\u9577\u5ea6\u9700\u5927\u65bc6"})]})}),(0,x.jsx)("div",{className:"mb-3",children:(0,x.jsxs)(m.Z.Group,{className:"position-relative",as:h.Z,md:"12",controlId:"password",children:[(0,x.jsx)(m.Z.Control,{required:!0,type:"password",placeholder:"\u518d\u6b21\u78ba\u8a8d\u60a8\u7684\u5bc6\u78bc",value:this.state.confirmPassword,onChange:this.ConfirmPasswordChange,isInvalid:this.ConfirmPasswordInvalid()}),(0,x.jsx)(m.Z.Control.Feedback,{className:"text-nowrap",style:{left:"102%",top:"50%",transform:"translateY(-50%)"},type:"invalid",tooltip:!0,children:""===this.state.confirmPassword?"\u5fc5\u586b":"\u5169\u6b21\u8f38\u5165\u7684\u5bc6\u78bc\u5fc5\u9808\u4e00\u81f4"})]})}),(0,x.jsxs)("div",{className:"d-flex justify-content-around",children:[(0,x.jsx)(p.Z,{className:"me-1 col-6",type:"submit",children:"\u8a3b\u518a"}),(0,x.jsx)(d.rU,{className:"btn btn-danger col-6",to:"./../login",children:"\u8fd4\u56de"})]})]})]})}}]),n}(u.Component);function Z(t){var e=(0,f.s0)();return(0,x.jsx)(g,(0,r.Z)((0,r.Z)({},t),{},{navigate:e}))}},5481:function(t,e,n){n.d(e,{Cj:function(){return f},Ih:function(){return u},RD:function(){return m},gx:function(){return p},xH:function(){return d}});var r=n(4165),a=n(5861),s=n(408),i=n(6115),o=n(9033),c=(0,o.v0)(),l=(0,s.N8)(),u=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.n)();case 2:return t.abrupt("return",c.currentUser);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(t,e,n,r){(0,o.Xb)(c,t,e).then(h).then(n).catch(r)},f=function(t,e,n,r){(0,o.e5)(c,t,e).then(h).then(n).catch(r)},m=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.n)();case 2:c.signOut().then(e).catch(n);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=c.currentUser;(0,s.t8)((0,s.iH)(l,"users/".concat(t.uid,"/email")),t.email)},p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.currentUser,t.next=3,(0,i.C)((0,s.iH)(l,"users/".concat(e.uid))).then((function(t){if(!t.exists())throw new Error("nodata");var e=t.val();localStorage.setItem("email",e.email||!1)})).catch((function(){return localStorage.removeItem("email")}));case 3:return t.next=5,(0,i.C)((0,s.iH)(l,"isSuperAdmin/".concat(e.uid))).then((function(t){if(!t.exists())throw new Error("nodata");localStorage.setItem("isSuperAdmin",t.val()||!1)})).catch((function(){return localStorage.removeItem("isSuperAdmin")}));case 5:return t.next=7,(0,i.C)((0,s.iH)(l,"isAdmin/".concat(e.uid))).then((function(t){if(!t.exists())throw new Error("nodata");localStorage.setItem("isAdmin",t.val()||!1)})).catch((function(){return localStorage.removeItem("isAdmin")}));case 7:return t.next=9,(0,i.C)((0,s.iH)(l,"isActive/".concat(e.uid))).then((function(t){if(!t.exists())throw new Error("nodata");localStorage.setItem("isActive",t.val()||!1)})).catch((function(){return localStorage.removeItem("isActive")}));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},6115:function(t,e,n){n.d(e,{C:function(){return o},n:function(){return i}});var r=n(9033),a=n(408),s=(0,r.v0)(),i=function(){return new Promise((function(t){if(s.currentUser)t(!0);else var e=(0,r.v0)().onAuthStateChanged((function(n){e(),t(!!n)}))}))},o=function(t){return new Promise((function(e,n){(0,a.jM)(t,(function(t){e(t)}),(function(t){n(t)}),{onlyOnce:!0})}))}}}]);
//# sourceMappingURL=208.659225b9.chunk.js.map