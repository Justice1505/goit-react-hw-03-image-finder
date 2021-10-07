(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(10),c=n.n(r),i=n(12),l=n(4),s=n(5),u=n(7),h=n(6),g=n(0),d=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={find:""},e.handleSearchForm=function(t){t.preventDefault(),e.props.onSubmit(e.state.find),e.setState({find:""})},e.handleInputChange=function(t){e.setState({find:t.target.value})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSearchForm,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInputChange,value:this.state.find})]})})}}]),n}(a.Component),m=n(21),p=n.n(m),f="https://pixabay.com/api/",j="23745072-b1ce4d1935f2990f41ff03e07",b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return p.a.get("".concat(f,"?q=").concat(e,"&page=").concat(t,"&key=").concat(j,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data}))},O=function(e){var t=e.image,n=e.largeImg,a=e.onPictureOpen;return Object(g.jsx)("li",{className:"ImageGalleryItem",onClick:function(){a(n)},children:Object(g.jsx)("img",{src:t,alt:"#",className:"ImageGalleryItem-image"})})},y=function(e){var t=e.gallery,n=e.onPictureOpen;return console.log("ImgG",t),Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(g.jsx)(O,{image:e.webformatURL,largeImg:e.largeImageURL,onPictureOpen:n},e.id)}))})},v=document.querySelector("#modal"),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e.onEsc=function(t){"Escape"===t.code&&e.props.onClose()},e.onBackdrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEsc)}},{key:"render",value:function(){return Object(r.createPortal)(Object(g.jsx)("div",{className:"Overlay",onClick:this.onBackdrop,children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:this.props.largeImage,alt:"#"})})}),v)}}]),n}(a.Component),S=function(e){var t=e.getPhoto;return Object(g.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})},w=n(22),k=n.n(w),I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsx)(k.a,{type:"ThreeDots",color:"#00BFFF",height:70,width:100,timeout:3e3})}}]),n}(o.a.Component),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={find:"",gallery:[],page:1,total:0,largeImageURL:{},showModal:!1,isLoading:!1},e.makeGallery=function(){var t=e.state,n=t.find,a=t.page;e.setState({isLoading:!0}),b(n,a).then((function(t){var n=t.hits,o=t.total;console.log("hit",n),e.setState((function(e){return{gallery:[].concat(Object(i.a)(e.gallery),Object(i.a)(n)),page:e.page+1,total:o}})),1!==a&&e.scroll(),console.log("state",e.state.gallery),0===o&&alert("There are no pictures")})).catch((function(e){return alert(e.message)})).finally((function(){return e.setState({isLoading:!1})}))},e.onFormSubmit=function(t){e.setState({find:t,page:1})},e.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.showBtnLoadMore=function(){return Math.ceil(e.state.total/12)!==e.state.page-1},e.onPictureOpen=function(t){e.setState({largeImageURL:t}),e.toggleModal()},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){if(t.find!==this.state.find)return this.setState({gallery:[]}),void this.makeGallery()}},{key:"render",value:function(){var e=this.state,t=e.gallery,n=e.showModal,a=e.largeImageURL,o=e.isLoading,r=e.total;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d,{onSubmit:this.onFormSubmit}),console.log("render",t),0!==t.length&&Object(g.jsx)(y,{gallery:t,onPictureOpen:this.onPictureOpen}),n&&Object(g.jsx)(x,{onClose:this.toggleModal,largeImage:a}),o&&Object(g.jsx)(I,{}),this.showBtnLoadMore()&&0!==r&&Object(g.jsx)(S,{getPhoto:this.makeGallery})]})}}]),n}(a.Component);n(66),n(67);c.a.render(Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(C,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.63c9dbf8.chunk.js.map