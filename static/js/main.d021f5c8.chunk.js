(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,a){},52:function(e,t,a){e.exports=a(94)},60:function(e,t,a){},61:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/personal_description_banner.e877b4c7.gif"},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(11),l=a.n(c),r=(a(57),a(58),a(59),a(60),a(61),a(16)),s=a(17),m=a(20),i=a(19),u=a(3),p=a(6),d=function(){return o.a.createElement("div",{className:"Home__background_image"},o.a.createElement(j,null),o.a.createElement("div",{className:"container"},o.a.createElement(u.H,{style:{marginTop:"15px"}},o.a.createElement(I,null)),o.a.createElement(u.H,null,o.a.createElement(y,null)),o.a.createElement(u.H,null,o.a.createElement(x,null))))},f=a(13),h=function(){var e=o.a.useState([]),t=Object(f.a)(e,2),a=t[0],c=t[1],l=o.a.useState(null),r=Object(f.a)(l,2),s=r[0],m=r[1],i=o.a.useState(null),p=Object(f.a)(i,2),d=p[0],h=p[1],b=o.a.useState(!1),g=Object(f.a)(b,2),j=g[0],I=g[1],v=[];o.a.useEffect((function(){fetch("https://ademo.pythonanywhere.com/project/api/v1/projects/").then((function(e){return e.json()})).then((function(e){c(e.results),m(e.next)}))}),[]);var O=function(e){h(e)},y=function(){I(!j)};return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"container-fluid Home__background_image"},o.a.createElement(u.H,null,a?a.map((function(e){return o.a.createElement(E,{key:e.id,obj:e,seeProjectDetails:O,modal:y})})):console.log(a)),s?o.a.createElement(u.H,{style:{marginTop:"20px",justifyContent:"center"}},o.a.createElement(u.b,{outline:!0,color:"black",onClick:function(){a.map((function(e){return v.push(e)})),fetch(s).then((function(e){return e.json()})).then((function(e){e.results.map((function(e){return v.push(e)})),c(v),m(e.next)}))}},o.a.createElement("strong",null,"MORE"))):"",j?o.a.createElement(k,{toggleModal:y,obj:JSON.parse(d),modal:9}):""))},b=function(){return o.a.createElement(u.m,null,o.a.createElement(u.H,{style:{justifyContent:"center"}},o.a.createElement(w,null),o.a.createElement(T,null),o.a.createElement(w,null)))},g=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isOpen:!1},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.y,{color:"default-color sticky-top",dark:!0,expand:"md"},o.a.createElement(u.z,null,o.a.createElement("strong",{className:"white-text"},"Ashikun Nabi")),o.a.createElement(u.B,{onClick:this.toggleCollapse}),o.a.createElement(u.l,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},o.a.createElement(u.A,{left:!0},o.a.createElement(u.w,null,o.a.createElement(u.x,{exact:!0,to:"portfolio/",activeClassName:"navbar_active"},"Home")),o.a.createElement(u.w,null,o.a.createElement(u.x,{exact:!0,to:"portfolio/portfolio",activeClassName:"navbar_active"},"Portfolio"))))),o.a.createElement(p.a,{exact:!0,path:"portfolio/",component:d}),o.a.createElement(p.a,{exact:!0,path:"portfolio/portfolio",component:h}),o.a.createElement(p.a,{exact:!0,path:"portfolio/Blog",component:b}))}}]),a}(n.Component),E=(a(26),function(e){return o.a.createElement(u.k,{md:"3",style:{marginTop:"40px"}},o.a.createElement(u.c,{narrow:!0,style:{height:"530px"}},o.a.createElement(u.J,{cascade:!0,className:"card__view"},e.obj.show_image?o.a.createElement(u.e,{hover:!0,overlay:"white-slight",className:"card-img-top card__image",src:e.obj.image,alt:"food"}):o.a.createElement("div",{class:"card__image embed-responsive embed-responsive-16by9"},o.a.createElement("iframe",{class:"embed-responsive-item",src:e.obj.video,title:e.obj.title,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))),o.a.createElement(u.d,null,o.a.createElement("h5",{className:"pink-text"},e.obj.is_fab_icon?o.a.createElement(u.o,{fab:!0,icon:e.obj.icon}):o.a.createElement(u.o,{icon:e.obj.icon}),"\xa0",e.obj.technology),o.a.createElement(u.g,{className:"font-weight-bold",style:{height:"20%"}},e.obj.title),o.a.createElement(u.f,{style:{height:"27%"}},e.obj.thirty_words_description," ..."),o.a.createElement(u.k,{md:"12",className:"d-flex justify-content-center"},o.a.createElement(u.b,{value:JSON.stringify(e.obj),onClick:function(t){return function(t){e.seeProjectDetails(t.target.value),e.modal()}(t)}},"See Details")),o.a.createElement(u.k,{md:"12",className:"d-flex justify-content-center"},e.obj.show_website?o.a.createElement(u.b,{outline:!0,href:e.obj.website,target:"_blank"},o.a.createElement(u.o,{size:"lg",icon:"cloud"})):"",e.obj.show_github?o.a.createElement(u.b,{outline:!0,color:"black",href:e.obj.github,target:"_blank"},o.a.createElement(u.o,{size:"lg",fab:!0,icon:"github"})):""))))}),j=function(){var e=o.a.useState([]),t=Object(f.a)(e,2),a=t[0],n=t[1];return o.a.useEffect((function(){fetch("https://ademo.pythonanywhere.com/project/api/v1/quotes/").then((function(e){return e.json()})).then((function(e){for(var t=[],a=0;a<e.length;a++)e[a].show_as_carousel&&t.push(e[a]);n(t)}))}),[]),o.a.createElement(u.h,{activeItem:1,length:3,showControls:!0,showIndicators:!0,className:"z-depth-1"},o.a.createElement(u.i,null,o.a.createElement(u.j,{itemId:"1"},o.a.createElement(u.J,null,o.a.createElement("img",{className:"d-block w-100",src:a[0]&&a[0].image,alt:"First slide"}),o.a.createElement(u.r,{overlay:""}))),o.a.createElement(u.j,{itemId:"2"},o.a.createElement(u.J,null,o.a.createElement("img",{className:"d-block w-100",src:a[1]&&a[1].image,alt:"Second slide"}),o.a.createElement(u.r,{overlay:""}))),o.a.createElement(u.j,{itemId:"3"},o.a.createElement(u.J,null,o.a.createElement("img",{className:"d-block w-100",src:a[2]&&a[2].image,alt:"Third slide"}),o.a.createElement(u.r,{overlay:""})))))},I=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{style:{height:"20px",backgroundColor:"black",width:"100%"}}),o.a.createElement("img",{src:a(84),className:"img-fluid shadow-box-example z-depth-1",alt:"",width:"100%"}))},v=function(){return o.a.createElement(u.n,{color:"default-color",className:"font-small",style:{marginTop:"20px"}},o.a.createElement(u.m,{fluid:!0,className:"text-center text-md-left"},o.a.createElement(u.H,null,o.a.createElement(u.k,{md:"12",className:"text-center py-3"},o.a.createElement("a",{href:"https://github.com/Ashikunnabi/",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},o.a.createElement(u.o,{fab:!0,icon:"github"})),o.a.createElement("a",{href:"https://www.facebook.com/ashikunnabituhin",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},o.a.createElement(u.o,{fab:!0,icon:"facebook-square"})),o.a.createElement("a",{href:"https://twitter.com/AshikunnabiT",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},o.a.createElement(u.o,{fab:!0,icon:"twitter"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/ashikunnabi/",className:"px-4 waves-effect waves-light",style:{fontSize:"25px"}},o.a.createElement(u.o,{fab:!0,icon:"linkedin"}))))),o.a.createElement("div",{className:"footer-copyright text-center py-3"},o.a.createElement(u.m,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright: ",o.a.createElement("a",{href:"#!"}," Md. Ashikun Nabi "))))},O=function(e){return o.a.createElement(u.b,{color:e.obj.button_color},e.obj.is_fab_icon?o.a.createElement(u.o,{fab:!0,icon:e.obj.icon}):o.a.createElement(u.o,{icon:e.obj.icon}),"\xa0 ",e.obj.title)},y=function(){var e=o.a.useState([]),t=Object(f.a)(e,2),a=t[0],n=t[1];return o.a.useEffect((function(){fetch("https://ademo.pythonanywhere.com/project/api/v1/skills/").then((function(e){return e.json()})).then((function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a]);n(t)}))}),[]),o.a.createElement("div",{className:"Skills__div"},o.a.createElement("h1",{className:"Skills__h1"},"SKILLS"),a?a.map((function(e){return o.a.createElement(O,{key:e.id,obj:e})})):console.log(a))},N=a(50),x=(a(93),function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={photoIndex:0,isOpen:!1,images:["https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w","https://images.squarespace-cdn.com/content/v1/5962fcd3bebafbc89ca399c2/1502804452401-TE2FPPRJFDW2VVC51IOB/ke17ZwdGBToddI8pDm48kGHIT0vMLcNfb7m0L42cgRUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcGeoXiJxmFnNOjAW3Q5u7CeFeAgOCL2u531iTQs5I-Mjhg-dGrYyYO3FLjneeV7oB/USE+THIS+LIGHT+GRAY+BOX.jpg?format=2500w"]},e.componentDidMount=function(){fetch("https://ademo.pythonanywhere.com/project/api/v1/quotes/").then((function(e){return e.json()})).then((function(t){for(var a=[],n=0;n<t.length;n++)t[n].show_as_carousel||a.push(t[n].image);e.setState({images:a})}))},e.renderImages=function(){var t=-1;return e.state.images.map((function(a){var n=++t;return o.a.createElement(u.k,{md:"4",key:t},o.a.createElement("figure",null,o.a.createElement("img",{src:a,alt:"Gallery",className:"img-fluid",onClick:function(){return e.setState({photoIndex:n,isOpen:!0})}})))}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.photoIndex,n=t.isOpen,c=t.images;return o.a.createElement("div",{className:"mt-4",style:{backgroundColor:"white"}},o.a.createElement("div",{className:"mdb-lightbox"},o.a.createElement(u.H,null,this.renderImages())),n&&o.a.createElement(N.a,{mainSrc:c[a],nextSrc:c[(a+1)%c.length],prevSrc:c[(a+c.length-1)%c.length],imageTitle:a+1+"/"+c.length,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(a+c.length-1)%c.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(a+1)%c.length})}}))}}]),a}(o.a.Component)),w=function(){return o.a.createElement("div",{style:{backgroundColor:"white",borderBottom:"1px solid lightgray",padding:"25px 0px"}},o.a.createElement(u.H,null,o.a.createElement(u.k,{md:"4",lg:"4",className:"mb-lg-0 mb-5"},o.a.createElement(u.J,{hover:!0,rounded:!0,className:"z-depth-1-half mb-4"},o.a.createElement("img",{className:"img-fluid",src:"https://mdbootstrap.com/img/Photos/Others/images/86.jpg",alt:""}))),o.a.createElement(u.k,{md:"8",lg:"8",className:"mb-lg-0 mb-5"},o.a.createElement("span",null,"Icont Tool name"),o.a.createElement("h3",null,o.a.createElement("strong",null,"Full Title of a project")),o.a.createElement("p",null,"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.Full Title of a project"),o.a.createElement("p",null,"by ",o.a.createElement("strong",null,"Carine Fox"),", 19/08/2018"),o.a.createElement(u.b,{color:"light-blue"},"React"))))},T=function(){return o.a.createElement("div",{style:{backgroundColor:"white",borderBottom:"1px solid lightgray",padding:"25px 0px"}},o.a.createElement(u.H,null,o.a.createElement(u.k,{md:"8",lg:"8",className:"mb-lg-0 mb-5"},o.a.createElement("span",null,"Icont Tool name"),o.a.createElement("h3",null,o.a.createElement("strong",null,"Full Title of a project")),o.a.createElement("p",null,"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.Full Title of a project"),o.a.createElement("p",null,"by ",o.a.createElement("strong",null,"Carine Fox"),", 19/08/2018"),o.a.createElement(u.b,{color:"light-blue"},"React")),o.a.createElement(u.k,{md:"4",lg:"4",className:"mb-lg-0 mb-5"},o.a.createElement(u.J,{hover:!0,rounded:!0,className:"z-depth-1-half mb-4"},o.a.createElement("img",{className:"img-fluid",src:"https://mdbootstrap.com/img/Photos/Others/images/86.jpg",alt:""})))))},k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={modal9:!0},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(u.m,null,o.a.createElement(u.s,{isOpen:this.state.modal9,toggle:this.props.toggleModal,fullHeight:!0,position:"top"},o.a.createElement(u.v,{toggle:this.props.toggleModal},this.props.obj.title),o.a.createElement(u.t,null,this.props.obj.description,o.a.createElement("hr",null),o.a.createElement("h4",null,"Technology Stacks"),o.a.createElement("ul",{class:"list-group z-depth-0"},this.props.obj.technology_stacks.split("\n").map((function(e){return o.a.createElement("li",{class:"list-group-item justify-content-between"},e)})))),o.a.createElement(u.u,null)))}}]),a}(n.Component);var L=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(14);l.a.render(o.a.createElement(S.a,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.d021f5c8.chunk.js.map