(this.webpackJsonpstreamship=this.webpackJsonpstreamship||[]).push([[0],{150:function(e,a,t){e.exports=t.p+"static/media/netflix.5827529b.webp"},151:function(e,a,t){e.exports=t.p+"static/media/tomatometer-rotten.f1ef4f02.svg"},152:function(e,a,t){e.exports=t.p+"static/media/tomatometer-fresh.149b5e8a.svg"},169:function(e,a,t){e.exports=t(312)},174:function(e,a,t){},175:function(e,a,t){},312:function(e,a,t){"use strict";t.r(a);var n=t(40),r=t.n(n);t(174),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(0),s=t.n(c),i=t(38),l=t(159),o=t(160),m=t(22),u=(t(175),t(55)),d=t(36),p=(t(176),t(158)),v=t(324),E=t(323);var f=function(){var e=window.location.pathname,a="/"===e?"Movies":e.substr(1)||"tvshows"===e?"TV Shows":e.substr(1),t=Object(c.useState)(a),n=Object(p.a)(t,2),r=n[0],i=n[1],l=function(e,a){var t=a.name;i(t)};return s.a.createElement(v.a,{pointing:!0,secondary:!0,size:"large",color:"orange"},s.a.createElement(v.a.Item,null,s.a.createElement("img",{src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/21/sailboat_26f5.png"})),s.a.createElement(v.a.Item,{name:"Movies",active:"Movies"===r,onClick:l,as:u.b,to:""}),s.a.createElement(v.a.Item,{name:"TV Shows",active:"TV Shows"===r,onClick:l,as:u.b,to:"/tvshows"}),s.a.createElement(v.a.Menu,{position:"right"},s.a.createElement(v.a.Item,null,s.a.createElement(E.a,{transparent:!0,icon:{name:"search",link:!0},placeholder:"Search..."}))))},g=t(76),b=t(77),h=t.n(b),w=t(54),x=t(325),_=t(319),k=t(322),O=t(157),y=t(150),I=t.n(y),j=t(151),z=t.n(j),C=t(152),S=t.n(C);var M=function(e){var a=e.movie,t=a.image,n=a.url,r=a.name,c=(a.provider,a.year),i=a.rating,l=a.duration,o=a.genre,m=a.description,u=(a.cast,a.imdb_score),d=a.rotten_tomatoes_score,p=a.metacritic_score;return s.a.createElement(k.a,{fluid:!0,color:"orange",href:n,target:"_blank"},s.a.createElement(O.a,{src:t,wrapped:!0,ui:!1}),s.a.createElement(k.a.Content,null,s.a.createElement(k.a.Header,null,r),s.a.createElement(k.a.Meta,null,s.a.createElement("span",{className:"date"},c),s.a.createElement("b",null,"|"),s.a.createElement("div",{class:"ui circular label"},s.a.createElement("span",{className:"rating"},i)),s.a.createElement("b",null,"|"),s.a.createElement("i",{class:"clock icon"}),s.a.createElement("span",{className:"duration"},l),s.a.createElement("b",null,"|"),s.a.createElement("span",{className:"genre"},o)),s.a.createElement(k.a.Description,null,m)),s.a.createElement(k.a.Content,{extra:!0},s.a.createElement("div",{class:"ui stackable four column grid"},s.a.createElement("div",{class:"column"},s.a.createElement(O.a,{class:"ui image",src:I.a,size:"mini",rounded:!0})),s.a.createElement("div",{class:"column"},s.a.createElement("i",{class:"large yellow star icon"}),u),s.a.createElement("div",{class:"column"},parseInt(d.substr(0,d.indexOf("%")))<60&&s.a.createElement(O.a,{src:z.a,size:"mini"}),parseInt(d.substr(0,d.indexOf("%")))>=60&&s.a.createElement(O.a,{src:S.a,size:"mini"}),d),s.a.createElement("div",{class:"column"},parseInt(p.substr(0,p.indexOf("/")))>60&&s.a.createElement("div",{class:"ui green label"},p.substr(0,p.indexOf("/"))),parseInt(p.substr(0,p.indexOf("/")))>=40&&parseInt(p.substr(0,p.indexOf("/")))<=60&&s.a.createElement("div",{class:"ui yellow label"},p.substr(0,p.indexOf("/"))),parseInt(p.substr(0,p.indexOf("/")))<40&&s.a.createElement("div",{class:"ui red label"},p.substr(0,p.indexOf("/")))))))};function B(){var e=Object(g.a)(["\n  {\n    netflix_movies {\n      image\n      name\n      url\n      provider\n      year\n      rating\n      duration\n      genre\n      description\n      cast\n      imdb_score\n      rotten_tomatoes_score\n      metacritic_score\n    }\n  }\n"]);return B=function(){return e},e}var N=h()(B());var T=function(){var e=Object(w.a)(N),a=e.loading,t=e.error,n=e.data;return n?console.log(n):t&&console.log(t),s.a.createElement("div",{class:"ui stackable three column grid"},s.a.createElement(x.a.Row,null,a?s.a.createElement(_.a,{active:!0,inline:"centered",size:"big"},"Preparing your movies..."):n.netflix_movies&&n.netflix_movies.map((function(e){return s.a.createElement(x.a.Column,{key:e.name,style:{marginBottom:20}},s.a.createElement(M,{movie:e}))}))))};function V(){var e=Object(g.a)(["\n  {\n    netflix_tv_shows {\n      image\n      name\n      url\n      provider\n      year\n      rating\n      duration\n      genre\n      description\n      cast\n      imdb_score\n      rotten_tomatoes_score\n      metacritic_score\n    }\n  }\n"]);return V=function(){return e},e}var J=h()(V());var P=function(){var e=Object(w.a)(J),a=e.loading,t=e.error,n=e.data;return n?console.log(n):t&&console.log(t),s.a.createElement(x.a,{columns:3},s.a.createElement(x.a.Row,null,a?s.a.createElement(_.a,{active:!0,inline:"centered",size:"big"},"Preparing your TV Shows..."):n.netflix_tv_shows&&n.netflix_tv_shows.map((function(e){return s.a.createElement(x.a.Column,{key:e.name,style:{marginBottom:20}},s.a.createElement(M,{movie:e}))}))))},R=t(320);var W=function(){return s.a.createElement(u.a,null,s.a.createElement(R.a,null,s.a.createElement(f,null),s.a.createElement(d.a,{exact:!0,path:"/",component:T}),s.a.createElement(d.a,{exact:!0,path:"/tvshows",component:P})))},q=new i.c({link:new o.a({uri:"https://streamship.herokuapp.com/v1/graphql",headers:{}}),cache:new l.a}),D=s.a.createElement(m.a,{client:q},s.a.createElement(W,null));r.a.render(D,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[169,1,2]]]);
//# sourceMappingURL=main.0462fef3.chunk.js.map