(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,a){},52:function(e,t,a){e.exports=a(94)},60:function(e,t,a){},61:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/personal_description_banner.e877b4c7.gif"},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(12),l=a.n(o),r=(a(57),a(58),a(59),a(60),a(61),a(16)),s=a(17),m=a(20),i=a(19),u=a(3),b=a(6),h=function(){return c.a.createElement("div",{className:"Home__background_image"},c.a.createElement(j,null),c.a.createElement("div",{className:"container"},c.a.createElement(u.H,{style:{marginTop:"15px"}},c.a.createElement(v,null)),c.a.createElement(u.H,null,c.a.createElement(y,null)),c.a.createElement(u.H,null,c.a.createElement(w,null))))},d=a(11),f=function(){var e=c.a.useState([]),t=Object(d.a)(e,2),a=t[0],o=t[1],l=c.a.useState(null),r=Object(d.a)(l,2),s=r[0],m=r[1],i=c.a.useState(null),b=Object(d.a)(i,2),h=b[0],f=b[1],p=c.a.useState(!1),g=Object(d.a)(p,2),j=g[0],v=g[1],I=[];c.a.useEffect((function(){fetch("https://ademo.pythonanywhere.com/project/api/v1/projects/").then((function(e){return e.json()})).then((function(e){o(e.results),m(e.next)}))}),[]);var O=function(e){f(e)},y=function(){v(!j)};return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container-fluid Home__background_image"},c.a.createElement(u.H,null,a?a.map((function(e){return c.a.createElement(E,{key:e.id,obj:e,seeProjectDetails:O,modal:y})})):console.log(a)),s?c.a.createElement(u.H,{style:{marginTop:"20px",justifyContent:"center"}},c.a.createElement(u.b,{outline:!0,color:"black",onClick:function(){a.map((function(e){return I.push(e)})),fetch(s).then((function(e){return e.json()})).then((function(e){e.results.map((function(e){return I.push(e)})),o(I),m(e.next)}))}},c.a.createElement("strong",null,"MORE"))):"",j?c.a.createElement(T,{toggleModal:y,obj:JSON.parse(h),modal:9}):""))},p=function(){var e=c.a.useState([]),t=Object(d.a)(e,2),a=t[0],n=t[1];return c.a.useEffect((function(){fetch("https://ademo.pythonanywhere.com/project/api/v1/blogs/").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),c.a.createElement(u.m,null,c.a.createElement(u.H,{style:{justifyContent:"center"}},a?a.map((function(e,t){return t%2===0?c.a.createElement(x,{key:e.id,obj:e}):c.a.createElement(k,{key:e.id,obj:e})})):console.log(a)))},g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isOpen:!1},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.y,{color:"default-color sticky-top",dark:!0,expand:"md"},c.a.createElement(u.z,null,c.a.createElement("strong",{className:"white-text"},"Ashikun Nabi")),c.a.createElement(u.B,{onClick:this.toggleCollapse}),c.a.createElement(u.l,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},c.a.createElement(u.A,{left:!0},c.a.createElement(u.w,null,c.a.createElement(u.x,{exact:!0,to:"/",activeClassName:"navbar_active"},"Home")),c.a.createElement(u.w,null,c.a.createElement(u.x,{exact:!0,to:"/portfolio",activeClassName:"navbar_active"},"Portfolio")),c.a.createElement(u.w,null,c.a.createElement(u.x,{exact:!0,to:"/blog",activeClassName:"navbar_active"},"Blog"))))),c.a.createElement(b.a,{exact:!0,path:"/",component:h}),c.a.createElement(b.a,{exact:!0,path:"/Portfolio",component:f}),c.a.createElement(b.a,{exact:!0,path:"/Blog",component:p}))}}]),a}(n.Component),E=(a(26),function(e){return c.a.createElement(u.k,{lg:"3",md:"4",sm:"6",xs:"12",style:{marginTop:"40px"}},c.a.createElement(u.c,{narrow:!0,style:{height:"530px"}},c.a.createElement(u.J,{cascade:!0,className:"card__view"},e.obj.show_image?c.a.createElement(u.e,{hover:!0,overlay:"white-slight",className:"card-img-top card__image",src:e.obj.image,alt:"food"}):c.a.createElement("div",{className:"card__image embed-responsive embed-responsive-16by9"},c.a.createElement("iframe",{className:"embed-responsive-item",src:e.obj.video,title:e.obj.title,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),c.a.createElement(u.d,null,c.a.createElement("h5",{className:"pink-text"},e.obj.is_fab_icon?c.a.createElement(u.o,{fab:!0,icon:e.obj.icon}):c.a.createElement(u.o,{icon:e.obj.icon}),"\xa0",e.obj.technology),c.a.createElement(u.g,{className:"font-weight-bold",style:{height:"20%"}},e.obj.title),c.a.createElement(u.f,{style:{overflow:"hidden"}},e.obj.thirty_words_description," ..."),c.a.createElement(u.k,{md:"12",className:"d-flex justify-content-center"},c.a.createElement(u.b,{value:JSON.stringify(e.obj),onClick:function(t){return function(t){e.seeProjectDetails(t.target.value),e.modal()}(t)}},"See Details")),c.a.createElement(u.k,{md:"12",className:"d-flex justify-content-center"},e.obj.show_website?c.a.createElement(u.b,{outline:!0,href:e.obj.website,target:"_blank"},c.a.createElement(u.o,{size:"lg",icon:"cloud"})):"",e.obj.show_github?c.a.createElement(u.b,{outline:!0,color:"black",href:e.obj.github,target:"_blank"},c.a.createElement(u.o,{size:"lg",fab:!0,icon:"github"})):""))))}),j=function(){var e=c.a.useState([]),t=Object(d.a)(e,2),a=t[0],n=t[1];return c.a.useEffect((function(){fetch("https://ademo.pythonanywhere.com/project/api/v1/quotes/").then((function(e){return e.json()})).then((function(e){for(var t=[],a=0;a<e.length;a++)e[a].show_as_carousel&&t.push(e[a]);n(t)}))}),[]),c.a.createElement(u.h,{activeItem:1,length:3,showControls:!0,showIndicators:!0,className:"z-depth-1"},c.a.createElement(u.i,null,c.a.createElement(u.j,{itemId:"1"},c.a.createElement(u.J,null,c.a.createElement("img",{className:"d-block w-100",src:a[0]&&a[0].image,alt:"First slide"}),c.a.createElement(u.r,{overlay:""}))),c.a.createElement(u.j,{itemId:"2"},c.a.createElement(u.J,null,c.a.createElement("img",{className:"d-block w-100",src:a[1]&&a[1].image,alt:"Second slide"}),c.a.createElement(u.r,{overlay:""}))),c.a.createElement(u.j,{itemId:"3"},c.a.createElement(u.J,null,c.a.createElement("img",{className:"d-block w-100",src:a[2]&&a[2].image,alt:"Third slide"}),c.a.createElement(u.r,{overlay:""})))))},v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{style:{height:"20px",backgroundColor:"black",width:"100%"}}),c.a.createElement("img",{src:a(84),className:"img-fluid shadow-box-example z-depth-1",alt:"",width:"100%"}))},I=function(){return c.a.createElement(u.n,{color:"default-color",className:"font-small",style:{marginTop:"20px"}},c.a.createElement(u.m,{fluid:!0,className:"text-center text-md-left"},c.a.createElement(u.H,null,c.a.createElement(u.k,{md:"12",className:"text-center py-3"},c.a.createElement("a",{href:"https://github.com/Ashikunnabi/",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},c.a.createElement(u.o,{fab:!0,icon:"github"})),c.a.createElement("a",{href:"https://www.facebook.com/ashikunnabituhin",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},c.a.createElement(u.o,{fab:!0,icon:"facebook-square"})),c.a.createElement("a",{href:"https://twitter.com/AshikunnabiT",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},c.a.createElement(u.o,{fab:!0,icon:"twitter"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/ashikunnabi/",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},c.a.createElement(u.o,{fab:!0,icon:"linkedin"}))))),c.a.createElement("div",{className:"footer-copyright text-center py-3"},c.a.createElement(u.m,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",c.a.createElement("a",{href:"#!"}," Md. Ashikun Nabi "))))},O=function(e){return c.a.createElement(u.b,{color:e.obj.button_color},e.obj.is_fab_icon?c.a.createElement(u.o,{fab:!0,icon:e.obj.icon}):c.a.createElement(u.o,{icon:e.obj.icon}),"\xa0 ",e.obj.title)},y=function(){var e=c.a.useState([]),t=Object(d.a)(e,2),a=t[0],n=t[1];return c.a.useEffect((function(){fetch("https://ademo.pythonanywhere.com/project/api/v1/skills/").then((function(e){return e.json()})).then((function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a]);n(t)}))}),[]),c.a.createElement("div",{className:"Skills__div"},c.a.createElement("h1",{className:"Skills__h1"},"SKILLS"),a?a.map((function(e){return c.a.createElement(O,{key:e.id,obj:e})})):console.log(a))},N=a(50),w=(a(93),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={photoIndex:0,isOpen:!1,images:["https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w"]},e.componentDidMount=function(){fetch("https://ademo.pythonanywhere.com/project/api/v1/quotes/").then((function(e){return e.json()})).then((function(t){for(var a=[],n=0;n<t.length;n++)t[n].show_as_carousel||a.push(t[n].image);e.setState({images:a})}))},e.renderImages=function(){var t=-1;return e.state.images.map((function(a){var n=++t;return c.a.createElement(u.k,{md:"4",key:t},c.a.createElement("figure",null,c.a.createElement("img",{src:a,alt:"Gallery",className:"img-fluid",onClick:function(){return e.setState({photoIndex:n,isOpen:!0})}})))}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,o=t.images;return c.a.createElement("div",{className:"mt-4",style:{backgroundColor:"white"}},c.a.createElement("div",{className:"mdb-lightbox"},c.a.createElement(u.H,null,this.renderImages())),n&&c.a.createElement(N.a,{mainSrc:o[a],nextSrc:o[(a+1)%o.length],prevSrc:o[(a+o.length-1)%o.length],imageTitle:a+1+"/"+o.length,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+o.length-1)%o.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%o.length})}}))}}]),a}(c.a.Component)),x=function(e){return c.a.createElement("div",{style:{backgroundColor:"white",borderBottom:"1px solid lightgray",padding:"25px 0px"}},c.a.createElement(u.H,null,c.a.createElement(u.k,{md:"4",lg:"4",className:"mb-lg-0 mb-5"},c.a.createElement(u.J,{hover:!0,rounded:!0,className:"z-depth-1-half mb-4"},c.a.createElement("img",{className:"img-fluid",src:e.obj.image,alt:""}))),c.a.createElement(u.k,{md:"8",lg:"8",className:"mb-lg-0 mb-5"},c.a.createElement("span",null,e.obj.published_date),c.a.createElement("h3",null,c.a.createElement("strong",null,e.obj.title)),c.a.createElement("p",null,e.obj.description),c.a.createElement(u.b,{href:e.obj.url,target:"_blank",color:"light-blue"},"Read"))))},k=function(e){return c.a.createElement("div",{style:{backgroundColor:"white",borderBottom:"1px solid lightgray",padding:"25px 0px"}},c.a.createElement(u.H,null,c.a.createElement(u.k,{md:"8",lg:"8",className:"mb-lg-0 mb-5"},c.a.createElement("span",null,e.obj.published_date),c.a.createElement("h3",null,c.a.createElement("strong",null,e.obj.title)),c.a.createElement("p",null,e.obj.description),c.a.createElement(u.b,{href:e.obj.url,target:"_blank",color:"light-blue"},"Read")),c.a.createElement(u.k,{md:"4",lg:"4",className:"mb-lg-0 mb-5"},c.a.createElement(u.J,{hover:!0,rounded:!0,className:"z-depth-1-half mb-4"},c.a.createElement("img",{className:"img-fluid",src:e.obj.image,alt:""})))))},T=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={modal9:!0},e}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(u.m,null,c.a.createElement(u.s,{isOpen:this.state.modal9,toggle:this.props.toggleModal,fullHeight:!0,position:"top"},c.a.createElement(u.v,{toggle:this.props.toggleModal},this.props.obj.title),c.a.createElement(u.t,null,this.props.obj.description,c.a.createElement("hr",null),c.a.createElement("h4",null,"Technology Stacks"),c.a.createElement("ul",{class:"list-group z-depth-0"},this.props.obj.technology_stacks.split("\n").map((function(e){return c.a.createElement("li",{class:"list-group-item justify-content-between"},e)})))),c.a.createElement(u.u,null)))}}]),a}(n.Component);var S=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(g,null),c.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(14);l.a.render(c.a.createElement(L.a,null,c.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.b18ca40d.chunk.js.map