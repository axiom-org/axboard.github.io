(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t){},146:function(e,t,a){e.exports=a(244)},160:function(e,t){},207:function(e,t){},209:function(e,t){},218:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),l=(a(151),a(40)),i=a(7),u=a.n(i),s=a(17),m=a(66),p=a(67),d=a(144),f=a(138),v=a(68),h=a(145),b=a(89),E=a.n(b),y=a(12),g=a(37),w=a(44),k=a(70),O=a(71),x=(a(218),r.a.createContext(null)),j=x;function S(){var e=Object(n.useContext)(x);if(null===e)throw new Error("null context causes trouble");return e}var L=a(43),C=a(36),P=a(19);function T(e){var t=e.username||"anonymous";return r.a.createElement(y.Link,{to:"/u/".concat(t,"/").concat(e.publicKey)},t)}function z(e){var t=function(e,t){return 1===e?"1 ".concat(t," ago"):"".concat(e," ").concat(t,"s ago")},a=(new Date).getTime()-e.getTime();if(a<0)return"in the future";if(a<1e3)return"just now";var n=Math.floor(a/1e3);if(n<60)return t(n,"second");var r=Math.floor(n/60);if(r<60)return t(r,"minute");var o=Math.floor(r/60);if(o<24)return t(o,"hour");var c=Math.floor(o/24);if(c<30)return t(c,"day");var l=Math.floor(c/30);return l<12?t(l,"month"):t(Math.floor(l/12),"year")}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var D=r.a.createElement("polyline",{fill:"none",points:"3,15.5 12,6.5 21,15.5 ",stroke:"#000000",strokeMiterlimit:10,strokeWidth:2}),I=function(e){var t=e.svgRef,a=B(e,["svgRef"]);return r.a.createElement("svg",M({enableBackground:"new 0 0 24 24",id:"Layer_1",viewBox:"0 0 24 24",xmlSpace:"preserve",ref:t},a),D)},R=r.a.forwardRef(function(e,t){return r.a.createElement(I,M({svgRef:t},e))});a.p;function K(e){var t=S(),a=Object(n.useRef)(null),o=e.direction<0?{transform:"scaleY(-1)"}:{},c=e.direction*e.currentVote>0;return r.a.createElement(C.a,{ref:a,variant:"outline-secondary",active:c,onClick:function(n){n.preventDefault(),a.current.blur(),t.keyPair?c?t.app.unvote(e.postID):e.direction>0?t.app.upvote(e.postID):t.app.downvote(e.postID):window.location.assign("/#/login")}},r.a.createElement(R,{width:"20",height:"20",style:o}))}function V(e){var t={color:"black"};return e.post.data.url?r.a.createElement(P.a.Title,null,r.a.createElement("a",{style:t,href:e.post.data.url},e.post.data.title)):r.a.createElement(P.a.Title,null,r.a.createElement(y.Link,{style:t,to:"/post/".concat(e.post.id)},e.post.data.title))}function F(e){var t=S(),a=t.comments[e.post.id],n=a?Object.keys(a).length:0,o="".concat(n," comment").concat(1===n?"":"s"),c=t.boards[e.post.data.board],l=0;if(t.keyPair){var i=t.keyPair.getPublicKey();if(i===e.post.owner)l=1;else{var u=t.votes.getVote(i,e.post.id);u&&(l=u.data.score)}}return r.a.createElement(P.a,{style:{marginTop:"10px"}},r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement(w.a,{xs:"auto"},r.a.createElement(P.a.Body,null,r.a.createElement(K,{direction:1,currentVote:l,postID:e.post.id}),r.a.createElement(P.a.Text,{style:{marginTop:"0.5rem",marginBottom:"0.5rem",textAlign:"center"}},t.votes.getScore(e.post.id)),r.a.createElement(K,{direction:-1,currentVote:l,postID:e.post.id}))),r.a.createElement(w.a,null,r.a.createElement(P.a.Body,null,r.a.createElement(V,{post:e.post}),r.a.createElement(P.a.Subtitle,{className:"mb-2 text-muted"},"posted by"," ",r.a.createElement(T,{username:e.post.data.author,publicKey:e.post.owner})," ",z(e.post.timestamp),c&&[r.a.createElement("span",{key:1}," in "),r.a.createElement(y.Link,{key:2,to:"/b/".concat(c.name,"/").concat(c.id)},"b/".concat(c.name))]),r.a.createElement(P.a.Text,null,e.post.data.summary),r.a.createElement(L.LinkContainer,{to:"/post/".concat(e.post.id)},r.a.createElement(P.a.Link,null,o)))))))}function W(e){return r.a.createElement("div",null,e.posts.map(function(e,t){return r.a.createElement(F,{key:t,post:e})}))}function A(e){var t=S(),a=t.boards[e.id];if(!a)return r.a.createElement("div",null,"board not found");if(e.name&&e.name!==a.name)return r.a.createElement("div",null,"the board has been renamed");var n=[];for(var o in t.posts){var c=t.posts[o];c.data.board===e.id&&n.push(c)}return n.sort(function(e,t){return t.timestamp.getTime()-e.timestamp.getTime()}),r.a.createElement("div",null,r.a.createElement("h2",null,"b/"+a.name),r.a.createElement(y.Link,{to:"/newpost/".concat(a.id)},"new post"),r.a.createElement(W,{posts:n}))}var N=a(76),G=a(75),U=a(97);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var H=r.a.createElement("metadata",{id:"metadata65"}),J=r.a.createElement("defs",{id:"defs63"}),Z=function(e){var t=e.svgRef,a=_(e,["svgRef"]);return r.a.createElement("svg",Y({id:"Axe",enableBackground:"new 0 0 300 300",height:289.06046,viewBox:"0 0 200.00008 169.37136",width:341.33347,ref:t},a),H,J,r.a.createElement("g",{id:"g58",transform:"translate(-50.000375,-65.314644)"},r.a.createElement("path",{d:"M 247.884,132.889 209.346,98.9 211.05,97.197 c 6.492,-6.501 6.492,-17.074 -0.003,-23.575 -6.305,-6.312 -17.268,-6.312 -23.573,0 l -3.18,3.182 -11.255,-9.927 c -2.478,-2.179 -6.223,-2.069 -8.555,0.269 l -34.38,34.386 c -2.335,2.332 -2.451,6.08 -0.269,8.552 l 9.927,11.257 -84.893,84.893 c -6.492,6.501 -6.492,17.074 0.003,23.575 3.25,3.254 7.517,4.877 11.787,4.877 4.27,0 8.536,-1.63 11.787,-4.877 l 83.412,-83.415 33.985,38.536 c 1.218,1.386 2.939,2.118 4.691,2.118 0.989,0 1.99,-0.232 2.912,-0.72 9.65,-5.091 18.519,-11.641 26.354,-19.479 7.831,-7.832 14.384,-16.695 19.478,-26.353 1.347,-2.552 0.77,-5.696 -1.394,-7.607 z M 196.312,82.461 c 1.63,-1.624 4.27,-1.624 5.893,0 1.627,1.624 1.627,4.273 0.003,5.897 l -2.256,2.256 -6.266,-5.526 z m -27.141,-2.326 40.906,36.078 c -3.899,6.227 -8.459,12.025 -13.673,17.237 -5.213,5.213 -11.011,9.775 -17.239,13.672 L 143.092,106.218 Z M 69.606,220.97 c -1.63,1.624 -4.27,1.624 -5.893,0 -1.627,-1.624 -1.627,-4.273 -0.003,-5.897 l 84.336,-84.339 5.527,6.267 z M 220.96,158.009 c -5.777,5.775 -12.177,10.762 -19.081,14.87 l -14.316,-16.233 c 6.365,-4.154 12.291,-8.964 17.679,-14.356 5.393,-5.391 10.202,-11.316 14.354,-17.68 l 16.232,14.317 c -4.11,6.904 -9.097,13.307 -14.868,19.082 z",id:"path56",style:{fill:"#ffffff"}})),r.a.createElement("path",{style:{fill:"#ffffff",fillOpacity:0,strokeWidth:.24916942},d:"M 14.452229,169.09346 C 9.5365704,168.45068 4.4575264,164.97858 2.1907698,160.71137 0.6732403,157.8546 0.2557569,156.1046 0.26973151,152.65878 0.28084089,149.9191 0.36553639,149.30449 0.97329421,147.5532 1.3533069,146.45817 2.0639079,144.8884 2.5524081,144.06482 3.2381313,142.90875 13.295863,132.70391 46.675463,99.296422 L 89.910344,56.025424 89.062123,55.045203 c -0.466517,-0.539115 -2.831016,-3.231322 -5.254447,-5.982673 -2.423426,-2.751358 -4.606928,-5.375684 -4.852225,-5.831842 -0.658424,-1.224416 -0.610435,-4.008891 0.09159,-5.314436 0.313424,-0.582867 8.017582,-8.45881 18.555721,-18.969474 19.931398,-19.87943012 18.887428,-18.98487348 21.843108,-18.71686566 0.79916,0.0724688 1.77955,0.30123046 2.17863,0.50836523 0.39909,0.20712891 3.40755,2.74434963 6.68546,5.63825973 l 5.95983,5.2616487 2.26276,-2.2140119 c 3.35319,-3.2809629 5.87188,-4.7107735 9.53185,-5.4110391 2.41381,-0.4618359 4.12951,-0.4519277 6.50802,0.037559 3.57279,0.7352988 6.79385,2.5340098 9.02039,5.0371582 2.44619,2.7501028 4.23738,7.4053358 4.23738,11.0127648 0,3.95751 -1.79672,8.338987 -4.71644,11.501508 -0.96908,1.049666 -1.76197,1.964344 -1.76197,2.032612 0,0.06827 8.84808,7.927494 19.6624,17.464933 21.70463,19.141904 20.80175,18.22169 20.79107,21.190242 -0.006,1.694754 -0.58628,3.017608 -3.35587,7.651606 -9.42167,15.764056 -22.805,29.099192 -38.59261,38.453632 -4.41091,2.61354 -5.60235,3.11792 -7.3505,3.11175 -2.06842,-0.007 -3.20396,-0.59898 -5.11115,-2.66325 -0.88904,-0.96225 -8.79251,-9.89252 -17.56327,-19.845066 L 111.88501,80.903053 69.277035,123.45293 c -32.529967,32.4856 -42.947355,42.74731 -44.042806,43.38462 -1.980985,1.15249 -4.236282,1.9304 -6.515772,2.24744 -2.106117,0.29294 -2.09083,0.29291 -4.266228,0.008 z m 3.948328,-12.47371 c 0.588744,-0.29737 85.137273,-84.701246 85.137273,-84.991613 0,-0.238928 -5.230504,-6.178664 -5.440902,-6.178664 -0.09207,0 -19.360981,19.201623 -42.819803,42.670267 -42.574389,42.59222 -42.652717,42.67241 -42.820975,43.84597 -0.270322,1.88546 0.631008,3.74983 2.182559,4.51456 0.944133,0.46535 2.968131,0.54039 3.761848,0.13948 z M 154.18424,106.27678 c 10.03105,-6.26575 20.00618,-15.657178 27.04422,-25.461711 1.83858,-2.56128 4.42874,-6.543194 4.57847,-7.03858 0.0738,-0.24429 -15.91744,-14.573479 -16.23038,-14.54345 -0.0734,0.007 -0.99758,1.271461 -2.05379,2.809817 -6.77988,9.874799 -16.26713,19.446064 -26.56831,26.803558 -1.55333,1.10945 -2.99711,2.113928 -3.20841,2.232176 -0.30525,0.17083 1.0888,1.885781 6.78574,8.347758 3.94344,4.473022 7.26658,8.132762 7.38473,8.132762 0.11814,0 1.13862,-0.57705 2.26773,-1.28233 z M 132.33703,79.868826 c 10.27529,-7.008978 18.84429,-15.573949 25.70386,-25.691771 l 2.16328,-3.190811 -0.86224,-0.84781 C 158.8677,49.672133 149.62472,41.486879 138.80198,31.948977 L 119.12426,14.607342 106.09405,27.632229 c -7.166614,7.163689 -13.000179,13.151883 -12.963476,13.307097 0.079,0.33412 35.873556,40.955332 36.088976,40.955332 0.0812,0 1.48403,-0.911625 3.11748,-2.025832 z m 19.22959,-56.111361 c 1.76222,-1.835168 2.23627,-3.052242 1.80815,-4.642178 -0.69393,-2.577035 -3.41319,-3.937517 -5.80424,-2.903935 -0.44099,0.190629 -1.52141,1.081617 -2.40094,1.979976 l -1.59914,1.633377 1.22538,1.095616 c 3.36386,3.007617 4.97668,4.397841 5.11031,4.40499 0.0811,0.0041 0.82828,-0.701192 1.66048,-1.567846 z",id:"path67"}),r.a.createElement("path",{style:{fill:"#ffffff",fillOpacity:0,strokeWidth:.24916942},d:"m 14.269264,169.07717 c -1.983018,-0.2963 -4.3930608,-1.16925 -6.2017163,-2.24634 -1.8112324,-1.07862 -4.4586926,-3.72608 -5.5373203,-5.53732 -3.07148144,-5.15763 -3.15724862,-11.57323 -0.2253574,-16.85732 0.5889973,-1.06154 10.55529,-11.1733 44.216409,-44.861776 l 43.456032,-43.49134 -5.269746,-5.968793 c -2.898358,-3.282837 -5.47912,-6.417298 -5.735028,-6.965472 -0.633914,-1.357887 -0.616447,-3.650572 0.03891,-5.107969 0.731151,-1.625918 35.434933,-36.3637206 37.220643,-37.2571347 1.55393,-0.77745117 3.52897,-0.81941601 5.09635,-0.10829296 0.60295,0.2735625 2.39697,1.64985356 3.98671,3.05842386 1.58974,1.4085761 4.27069,3.7804336 5.95768,5.2708066 l 3.06723,2.7097622 2.41449,-2.3965903 c 2.74756,-2.7271817 4.54267,-3.9016875 7.39788,-4.8402891 1.72278,-0.566332 2.41613,-0.6552773 5.10797,-0.6552773 2.69668,0 3.38211,0.08826 5.10798,0.6577383 4.27143,1.4094199 7.6755,4.3212773 9.56609,8.1828694 1.34187,2.740816 1.77112,4.543435 1.77112,7.437785 0,4.454719 -1.52379,8.199996 -4.68052,11.504109 -1.60368,1.678553 -1.83116,2.020875 -1.52942,2.301563 0.19495,0.181347 8.88839,7.848187 19.31877,17.037422 10.43037,9.189234 19.30052,17.115574 19.71143,17.614095 0.87503,1.061549 1.31595,2.369748 1.31595,3.904325 0,1.339769 -0.94134,3.381023 -3.61977,7.849341 -8.36797,13.959938 -20.3703,26.440334 -34.00481,35.359254 -3.28175,2.14673 -7.98354,4.88366 -9.42268,5.48497 -1.2522,0.5232 -3.35332,0.44852 -4.79187,-0.17033 -1.36333,-0.58649 0.30443,1.24062 -23.14099,-25.352026 L 111.82101,80.842174 68.933565,123.68819 c -42.066311,42.02568 -42.923227,42.86315 -44.756215,43.74054 -3.185332,1.52471 -6.758016,2.11911 -9.908104,1.64844 z m 4.264131,-12.55544 c 0.431841,-0.2051 19.782404,-19.37066 43.00125,-42.59011 l 42.216085,-42.21718 -1.70166,-1.948928 c -3.071812,-3.51818 -3.817166,-4.316039 -4.032029,-4.316039 -0.428578,0 -85.034619,84.857937 -85.289701,85.543637 -1.070912,2.87874 0.868939,5.90155 3.78726,5.90155 0.678498,0 1.586959,-0.16782 2.018795,-0.37293 z M 154.75836,105.90635 c 8.69352,-5.52614 16.95641,-13.010744 23.7101,-21.476832 2.25355,-2.824934 7.41987,-10.312283 7.41987,-10.75333 0,-0.370963 -16.24482,-14.506313 -16.42986,-14.296366 -0.10381,0.117797 -0.7336,0.999053 -1.3995,1.958356 -7.64671,11.015777 -17.01105,20.46798 -27.64406,27.903434 -1.50748,1.054148 -2.74087,2.0234 -2.74087,2.153888 0,0.344737 13.9037,16.1391 14.21888,16.15241 0.14596,0.006 1.43541,-0.73254 2.86544,-1.64156 z M 131.64124,80.356244 c 9.82795,-6.587244 18.57189,-15.068396 25.21709,-24.459211 1.1795,-1.666839 2.4145,-3.488484 2.74443,-4.048101 L 160.20265,50.83144 143.976,36.525008 C 135.05135,28.656471 125.82341,20.518584 123.46949,18.440815 l -4.27988,-3.777768 -13.12773,13.129488 -13.127735,13.129489 14.495265,16.43731 c 20.11535,22.810383 21.64732,24.535324 21.79038,24.535324 0.0694,0 1.15906,-0.692285 2.42145,-1.538414 z m 19.78139,-56.331187 c 1.54973,-1.592408 2.07367,-2.583352 2.07367,-3.921973 0,-2.248582 -1.61799,-4.000289 -3.86721,-4.18681 -1.71155,-0.141938 -2.61639,0.309603 -4.56968,2.280416 l -1.56194,1.575943 3.14633,2.780279 c 1.73048,1.529157 3.22719,2.780285 3.32603,2.780285 0.0988,0 0.75259,-0.588662 1.4528,-1.30814 z",id:"path69"}),r.a.createElement("path",{style:{fill:"#ffffff",fillOpacity:0,strokeWidth:.24916942},d:"m 14.269264,169.07717 c -1.983018,-0.2963 -4.3930608,-1.16925 -6.2017163,-2.24634 -1.8112324,-1.07862 -4.4586926,-3.72608 -5.5373203,-5.53732 -3.07148144,-5.15763 -3.15724862,-11.57323 -0.2253574,-16.85732 0.5889973,-1.06154 10.55529,-11.1733 44.216409,-44.861776 l 43.456032,-43.49134 -5.269746,-5.968793 c -2.898358,-3.282837 -5.47912,-6.417298 -5.735028,-6.965472 -0.633914,-1.357887 -0.616447,-3.650572 0.03891,-5.107969 0.731151,-1.625918 35.434933,-36.3637206 37.220643,-37.2571347 1.55393,-0.77745117 3.52897,-0.81941601 5.09635,-0.10829296 0.60295,0.2735625 2.39697,1.64985356 3.98671,3.05842386 1.58974,1.4085761 4.27069,3.7804336 5.95768,5.2708066 l 3.06723,2.7097622 2.41449,-2.3965903 c 2.74756,-2.7271817 4.54267,-3.9016875 7.39788,-4.8402891 1.72278,-0.566332 2.41613,-0.6552773 5.10797,-0.6552773 2.69668,0 3.38211,0.08826 5.10798,0.6577383 4.27143,1.4094199 7.6755,4.3212773 9.56609,8.1828694 1.34187,2.740816 1.77112,4.543435 1.77112,7.437785 0,4.454719 -1.52379,8.199996 -4.68052,11.504109 -1.60368,1.678553 -1.83116,2.020875 -1.52942,2.301563 0.19495,0.181347 8.88839,7.848187 19.31877,17.037422 10.43037,9.189234 19.30052,17.115574 19.71143,17.614095 0.87503,1.061549 1.31595,2.369748 1.31595,3.904325 0,1.339769 -0.94134,3.381023 -3.61977,7.849341 -8.36797,13.959938 -20.3703,26.440334 -34.00481,35.359254 -3.28175,2.14673 -7.98354,4.88366 -9.42268,5.48497 -1.2522,0.5232 -3.35332,0.44852 -4.79187,-0.17033 -1.36333,-0.58649 0.30443,1.24062 -23.14099,-25.352026 L 111.82101,80.842174 68.933565,123.68819 c -42.066311,42.02568 -42.923227,42.86315 -44.756215,43.74054 -3.185332,1.52471 -6.758016,2.11911 -9.908104,1.64844 z m 4.264131,-12.55544 c 0.431841,-0.2051 19.782404,-19.37066 43.00125,-42.59011 l 42.216085,-42.21718 -1.70166,-1.948928 c -3.071812,-3.51818 -3.817166,-4.316039 -4.032029,-4.316039 -0.428578,0 -85.034619,84.857937 -85.289701,85.543637 -1.070912,2.87874 0.868939,5.90155 3.78726,5.90155 0.678498,0 1.586959,-0.16782 2.018795,-0.37293 z M 154.75836,105.90635 c 8.69352,-5.52614 16.95641,-13.010744 23.7101,-21.476832 2.25355,-2.824934 7.41987,-10.312283 7.41987,-10.75333 0,-0.370963 -16.24482,-14.506313 -16.42986,-14.296366 -0.10381,0.117797 -0.7336,0.999053 -1.3995,1.958356 -7.64671,11.015777 -17.01105,20.46798 -27.64406,27.903434 -1.50748,1.054148 -2.74087,2.0234 -2.74087,2.153888 0,0.344737 13.9037,16.1391 14.21888,16.15241 0.14596,0.006 1.43541,-0.73254 2.86544,-1.64156 z M 131.64124,80.356244 c 9.82795,-6.587244 18.57189,-15.068396 25.21709,-24.459211 1.1795,-1.666839 2.4145,-3.488484 2.74443,-4.048101 L 160.20265,50.83144 143.976,36.525008 C 135.05135,28.656471 125.82341,20.518584 123.46949,18.440815 l -4.27988,-3.777768 -13.12773,13.129488 -13.127735,13.129489 14.495265,16.43731 c 20.11535,22.810383 21.64732,24.535324 21.79038,24.535324 0.0694,0 1.15906,-0.692285 2.42145,-1.538414 z m 19.78139,-56.331187 c 1.54973,-1.592408 2.07367,-2.583352 2.07367,-3.921973 0,-2.248582 -1.61799,-4.000289 -3.86721,-4.18681 -1.71155,-0.141938 -2.61639,0.309603 -4.56968,2.280416 l -1.56194,1.575943 3.14633,2.780279 c 1.73048,1.529157 3.22719,2.780285 3.32603,2.780285 0.0988,0 0.75259,-0.588662 1.4528,-1.30814 z",id:"path71"}),r.a.createElement("path",{style:{fill:"#ffffff",fillOpacity:0,strokeWidth:.24916942},d:"m 14.269264,169.07717 c -1.983018,-0.2963 -4.3930608,-1.16925 -6.2017163,-2.24634 -1.8112324,-1.07862 -4.4586926,-3.72608 -5.5373203,-5.53732 -3.07148144,-5.15763 -3.15724862,-11.57323 -0.2253574,-16.85732 0.5889973,-1.06154 10.55529,-11.1733 44.216409,-44.861776 l 43.456032,-43.49134 -5.269746,-5.968793 c -2.898358,-3.282837 -5.47912,-6.417298 -5.735028,-6.965472 -0.633914,-1.357887 -0.616447,-3.650572 0.03891,-5.107969 0.731151,-1.625918 35.434933,-36.3637206 37.220643,-37.2571347 1.55393,-0.77745117 3.52897,-0.81941601 5.09635,-0.10829296 0.60295,0.2735625 2.39697,1.64985356 3.98671,3.05842386 1.58974,1.4085761 4.27069,3.7804336 5.95768,5.2708066 l 3.06723,2.7097622 2.41449,-2.3965903 c 2.74756,-2.7271817 4.54267,-3.9016875 7.39788,-4.8402891 1.72278,-0.566332 2.41613,-0.6552773 5.10797,-0.6552773 2.69668,0 3.38211,0.08826 5.10798,0.6577383 4.27143,1.4094199 7.6755,4.3212773 9.56609,8.1828694 1.34187,2.740816 1.77112,4.543435 1.77112,7.437785 0,4.454719 -1.52379,8.199996 -4.68052,11.504109 -1.60368,1.678553 -1.83116,2.020875 -1.52942,2.301563 0.19495,0.181347 8.88839,7.848187 19.31877,17.037422 10.43037,9.189234 19.30052,17.115574 19.71143,17.614095 0.87503,1.061549 1.31595,2.369748 1.31595,3.904325 0,1.339769 -0.94134,3.381023 -3.61977,7.849341 -8.36797,13.959938 -20.3703,26.440334 -34.00481,35.359254 -3.28175,2.14673 -7.98354,4.88366 -9.42268,5.48497 -1.2522,0.5232 -3.35332,0.44852 -4.79187,-0.17033 -1.36333,-0.58649 0.30443,1.24062 -23.14099,-25.352026 L 111.82101,80.842174 68.933565,123.68819 c -42.066311,42.02568 -42.923227,42.86315 -44.756215,43.74054 -3.185332,1.52471 -6.758016,2.11911 -9.908104,1.64844 z m 4.264131,-12.55544 c 0.431841,-0.2051 19.782404,-19.37066 43.00125,-42.59011 l 42.216085,-42.21718 -1.70166,-1.948928 c -3.071812,-3.51818 -3.817166,-4.316039 -4.032029,-4.316039 -0.428578,0 -85.034619,84.857937 -85.289701,85.543637 -1.070912,2.87874 0.868939,5.90155 3.78726,5.90155 0.678498,0 1.586959,-0.16782 2.018795,-0.37293 z M 154.75836,105.90635 c 8.69352,-5.52614 16.95641,-13.010744 23.7101,-21.476832 2.25355,-2.824934 7.41987,-10.312283 7.41987,-10.75333 0,-0.370963 -16.24482,-14.506313 -16.42986,-14.296366 -0.10381,0.117797 -0.7336,0.999053 -1.3995,1.958356 -7.64671,11.015777 -17.01105,20.46798 -27.64406,27.903434 -1.50748,1.054148 -2.74087,2.0234 -2.74087,2.153888 0,0.344737 13.9037,16.1391 14.21888,16.15241 0.14596,0.006 1.43541,-0.73254 2.86544,-1.64156 z M 131.64124,80.356244 c 9.82795,-6.587244 18.57189,-15.068396 25.21709,-24.459211 1.1795,-1.666839 2.4145,-3.488484 2.74443,-4.048101 L 160.20265,50.83144 143.976,36.525008 C 135.05135,28.656471 125.82341,20.518584 123.46949,18.440815 l -4.27988,-3.777768 -13.12773,13.129488 -13.127735,13.129489 14.495265,16.43731 c 20.11535,22.810383 21.64732,24.535324 21.79038,24.535324 0.0694,0 1.15906,-0.692285 2.42145,-1.538414 z m 19.78139,-56.331187 c 1.54973,-1.592408 2.07367,-2.583352 2.07367,-3.921973 0,-2.248582 -1.61799,-4.000289 -3.86721,-4.18681 -1.71155,-0.141938 -2.61639,0.309603 -4.56968,2.280416 l -1.56194,1.575943 3.14633,2.780279 c 1.73048,1.529157 3.22719,2.780285 3.32603,2.780285 0.0988,0 0.75259,-0.588662 1.4528,-1.30814 z",id:"path73"}))},$=r.a.forwardRef(function(e,t){return r.a.createElement(Z,Y({svgRef:t},e))});a.p;function q(){var e=S();return e.keyPair?r.a.createElement(N.a,null,r.a.createElement(U.a,{title:"Logged in as "+e.username,id:"logoutdropdown"},r.a.createElement(U.a.Item,{as:"button",onClick:function(){return e.app.logout()}},"Log out"))):r.a.createElement(N.a,null,r.a.createElement(L.LinkContainer,{to:"/login"},r.a.createElement(C.a,{active:!1},"log in")))}var X=Object(g.o)(function(e){return r.a.createElement(G.a,{bg:"dark",variant:"dark",className:"justify-content-between"},r.a.createElement(N.a,null,r.a.createElement(L.LinkContainer,{to:"/"},r.a.createElement(G.a.Brand,null,r.a.createElement($,{width:"28",height:"28",style:{transform:"scaleX(-1)"}}),r.a.createElement(G.a.Text,{style:{width:"10px"}}),"Axboard"))),"/login"!==e.location.pathname&&r.a.createElement(q,null))});function Q(){var e=S(),t=[];for(var a in e.posts){var n=e.posts[a];t.push(n)}return e.votes.sort(t),r.a.createElement("div",null,r.a.createElement(P.a,{style:{marginTop:"10px"}},r.a.createElement(P.a.Body,null,r.a.createElement(P.a.Title,null,"Home Page"),r.a.createElement(L.LinkContainer,{to:"/newpost/"},r.a.createElement(P.a.Link,null,"New Post")))),r.a.createElement(W,{posts:t}))}function ee(){return r.a.createElement("div",null,"loading...")}var te=a(18);function ae(){var e=S(),t=Object(n.useState)(""),a=Object(te.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),i=Object(te.a)(l,2),u=i[0],s=i[1];if(e.keyPair)return r.a.createElement(g.c,{to:"/"});return r.a.createElement("form",{onSubmit:function(t){t.preventDefault();try{e.app.login(o,u)}catch(t){alert(t),c(""),s("")}}},r.a.createElement("label",null,"username:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:o,onChange:function(e){return c(e.target.value)}})),r.a.createElement("br",null),r.a.createElement("label",null,"passphrase:",r.a.createElement("br",null),r.a.createElement("input",{type:"password",value:u,onChange:function(e){return s(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"log in"}))}function ne(){var e=Object(n.useState)(""),t=Object(te.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),l=Object(te.a)(c,2),i=l[0],m=l[1],p=Object(n.useState)(""),d=Object(te.a)(p,2),f=d[0],v=d[1],h=S();if(!h.username)return r.a.createElement("div",null,"You must log in to create a new board.");if(""!==f)return r.a.createElement(g.c,{to:f});var b=function(){var e=Object(s.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(a.length<3)){e.next=4;break}return alert("name too short"),e.abrupt("return");case 4:return console.log("creating board with name: ".concat(a)),e.next=7,h.app.createBoard({description:i},a);case 7:n=e.sent,console.log(n),v("/b/".concat(n.name,"/").concat(n.id));case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b},r.a.createElement("label",null,"create a new board.",r.a.createElement("br",null),"name:",r.a.createElement("br",null),r.a.createElement("input",{value:a,onChange:function(e){return o(e.target.value.replace(/[\W_]/g,""))}})),r.a.createElement("label",null,"description:",r.a.createElement("br",null),r.a.createElement("textarea",{value:i,onChange:function(e){return m(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Submit"}))}var re=a(22);function oe(e){return e.author?e.board?e.summary&&0!==e.summary.trim().length?e.title&&0!==e.title.trim().length?e.url&&!e.url.startsWith("http")?"".concat(e.url," is not a valid URL."):null:"Every post must have a title.":"Every post must have a summary.":"You must select a board to post to.":"Every post must have an author."}function ce(e){return r.a.createElement(re.a.Group,null,r.a.createElement(re.a.Label,null,"Board"),r.a.createElement(re.a.Control,{as:"select",selected:e.selected,onChange:function(t){var a=t.target.value||void 0;e.onSelect(a)}},r.a.createElement("option",{value:"",key:""},"Select a board to post to."),e.boards.map(function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)})))}function le(e){var t=S(),a=Object(n.useState)(""),o=Object(te.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)(""),m=Object(te.a)(i,2),p=m[0],d=m[1],f=Object(n.useState)(""),v=Object(te.a)(f,2),h=v[0],b=v[1],E=Object(n.useState)(""),w=Object(te.a)(E,2),k=w[0],O=w[1],x=Object(n.useState)(e.board),j=Object(te.a)(x,2),L=j[0],P=j[1];if(c.length>0)return r.a.createElement(g.c,{to:"/post/".concat(c)});if(!t.username)return r.a.createElement(g.c,{to:"/login"});var T=t.username,z=function(){var e=Object(s.a)(u.a.mark(function e(a){var n,r,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(r=oe(n={author:T,board:L||"",summary:h,title:p,url:k||void 0}))){e.next=6;break}return alert(r),e.abrupt("return");case 6:return console.log("posting ".concat(p," to ").concat(L)),e.next=9,t.app.createPost(n);case 9:o=e.sent,l(o.id);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),M=(new Date).getTime()-6048e5,B=Object.values(t.boards).filter(function(e){return t.postsForBoard[e.id]||e.timestamp.getTime()>M});return B.sort(function(e,t){return e.name.localeCompare(t.name)}),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("h2",null,"New Post"),r.a.createElement("br",null),r.a.createElement(re.a,{onSubmit:z},!e.board&&r.a.createElement(ce,{boards:B,selected:L,onSelect:P}),r.a.createElement(re.a.Group,null,r.a.createElement(re.a.Label,null,"Title"),r.a.createElement(re.a.Control,{type:"text",value:p,placeholder:"The title of the page you're linking to, or a brief description of your post.",onChange:function(e){return d(e.target.value)}})),r.a.createElement(re.a.Group,null,r.a.createElement(re.a.Label,null,"URL"),r.a.createElement(re.a.Control,{type:"text",value:k,placeholder:"Optional.",onChange:function(e){return O(e.target.value)}})),r.a.createElement(re.a.Group,null,r.a.createElement(re.a.Label,null,"Summary"),r.a.createElement(re.a.Control,{as:"textarea",rows:"3",value:h,placeholder:"Describe why this link is interesting, ask a question, or make a brief comment.",onChange:function(e){return b(e.target.value)}})),r.a.createElement(C.a,{variant:"primary",type:"submit",value:"Submit"},"Submit")),r.a.createElement("br",null),r.a.createElement(y.Link,{to:"/newboard"},"create a new board"))}function ie(){return r.a.createElement("div",null,r.a.createElement("p",null,"404 error: No page matches this URL."),r.a.createElement("br",null),r.a.createElement(y.Link,{to:"/"},"Return to the home page."))}function ue(e){var t=Object(n.useState)(""),a=Object(te.a)(t,2),o=a[0],c=a[1];return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log("submitting ".concat(o)),e.onSubmit(o),c("")}},r.a.createElement("label",null,e.name,":",r.a.createElement("br",null),r.a.createElement("textarea",{value:o,onChange:function(e){return c(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Submit"}))}function se(e){var t=S();if(!t.username)return null;var a=t.username;return r.a.createElement(ue,{name:"Reply",onSubmit:function(){var n=Object(s.a)(u.a.mark(function n(r){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.app.createComment({author:a,board:e.post.data.board,content:r,parent:e.post.id});case 2:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()})}function me(e){var t=S(),a=t.posts[e.id];if(!a)return r.a.createElement("div",null,"post not found");var n=t.comments[e.id],o=[];for(var c in n)o.push(n[c]);o.sort(function(e,t){return e.timestamp.getTime()-t.timestamp.getTime()});var l=t.boards[a.data.board];return r.a.createElement("div",null,r.a.createElement("h2",null,"Post Detail (",e.id,")"),r.a.createElement("div",null,"posted by"," ",r.a.createElement(T,{username:a.data.author,publicKey:a.owner})," ",z(a.timestamp),l&&r.a.createElement("div",null,"in"," ",r.a.createElement(y.Link,{to:"/b/".concat(l.name,"/").concat(l.id)},"b/".concat(l.name)))),a.data.content,o.map(function(e,t){return r.a.createElement("p",{key:t},"Comment: ",e.data.content,r.a.createElement("br",null),"by"," ",r.a.createElement(T,{username:e.data.author,publicKey:e.owner})," ","(",z(e.timestamp),")")}),r.a.createElement(se,{post:a}))}function pe(e){var t=S(),a=[];for(var n in t.posts){var o=t.posts[n];o.owner===e.publicKey&&a.push(o)}return a.sort(function(e,t){return t.timestamp.getTime()-e.timestamp.getTime()}),r.a.createElement("div",null,r.a.createElement("h2",null,"posts from ",e.name," (",e.publicKey,"):"),r.a.createElement(W,{posts:a}))}var de=function(){function e(t){Object(m.a)(this,e),this.karma=void 0,this.score=void 0,this.votes=void 0,this.karma={},this.score={},this.votes={};var a=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var l=o.value;this.addVote(l)}}catch(i){n=!0,r=i}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}}return Object(p.a)(e,[{key:"modify",value:function(e,t,a){this.score[e]?this.score[e]+=a:this.score[e]=a,this.karma[t]?this.karma[t]+=a:this.karma[t]=a}},{key:"getScore",value:function(e){return 1+(this.score[e]||0)}},{key:"getKarma",value:function(e){return this.karma[e]||0}},{key:"getVote",value:function(e,t){var a="".concat(e,":").concat(t);return this.votes[a]||null}},{key:"sort",value:function(e){var t=this;e.sort(function(e,a){return t.getScore(a.id)-t.getScore(e.id)||a.timestamp.getTime()-e.timestamp.getTime()})}},{key:"addVote",value:function(e){if(!(Math.abs(e.data.score)>1)&&e.data.target&&e.data.target.split(":")[0]!==e.owner){var t="".concat(e.owner,":").concat(e.data.target);this.votes[t]&&this.removeVote(this.votes[t]),this.modify(e.data.target,e.owner,e.data.score),this.votes[t]=e}}},{key:"removeVote",value:function(e){var t="".concat(e.owner,":").concat(e.data.target);this.votes[t]===e?(delete this.votes[t],this.modify(e.data.target,e.owner,-e.data.score),e.forget()):console.log("bad removeVote")}}]),e}(),fe=function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).channel=void 0,a.postdb=void 0,a.commentdb=void 0,a.votedb=void 0,a.boarddb=void 0,window.app=Object(v.a)(a);var n=new E.a({network:"prod",verbose:!0});a.channel=n.channel("Axboard"),a.postdb=a.channel.database("Posts"),a.commentdb=a.channel.database("Comments"),a.votedb=a.channel.database("Votes"),a.boarddb=a.channel.database("Boards");var r=function(e){var t,a=(t=e.timestamp,((new Date).getTime()-t.getTime())/864e5);return!(a>7||a<-.05)};return a.postdb.useFilter(function(e){return r(e)&&!oe(e.data)}),a.commentdb.useFilter(r),a.votedb.useFilter(r),a.state={posts:{},comments:{},votes:new de([]),boards:{},keyPair:void 0,username:void 0,loading:!0},a.loadData(),setTimeout(function(){var e=window.localStorage.getItem("username"),t=window.localStorage.getItem("passphrase");e&&t&&a.login(e,t)},0),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"loadData",value:function(){var e=Object(s.a)(u.a.mark(function e(){var t,a,n,r,o,c,l,i,s,m,p,d,f,v,h,b,E,y,g,w,k,O,x,j,S,L,C;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.postdb.waitForLoad();case 2:return e.next=4,this.commentdb.waitForLoad();case 4:return e.next=6,this.votedb.waitForLoad();case 6:return e.next=8,this.boarddb.waitForLoad();case 8:return e.next=10,this.postdb.find({selector:{}});case 10:for(t=e.sent,a={},n=!0,r=!1,o=void 0,e.prev=15,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0)i=l.value,a[i.id]=i;e.next=23;break;case 19:e.prev=19,e.t0=e.catch(15),r=!0,o=e.t0;case 23:e.prev=23,e.prev=24,n||null==c.return||c.return();case 26:if(e.prev=26,!r){e.next=29;break}throw o;case 29:return e.finish(26);case 30:return e.finish(23);case 31:return e.next=33,this.commentdb.find({selector:{}});case 33:for(s=e.sent,m={},p=!0,d=!1,f=void 0,e.prev=38,v=s[Symbol.iterator]();!(p=(h=v.next()).done);p=!0)b=h.value,E=b.data.parent,m[E]||(m[E]={}),m[E][b.id]=b;e.next=46;break;case 42:e.prev=42,e.t1=e.catch(38),d=!0,f=e.t1;case 46:e.prev=46,e.prev=47,p||null==v.return||v.return();case 49:if(e.prev=49,!d){e.next=52;break}throw f;case 52:return e.finish(49);case 53:return e.finish(46);case 54:return e.next=56,this.votedb.find({selector:{}});case 56:return y=e.sent,g=new de(y),e.next=60,this.boarddb.find({selector:{}});case 60:for(w=e.sent,k={},O=!0,x=!1,j=void 0,e.prev=65,S=w[Symbol.iterator]();!(O=(L=S.next()).done);O=!0)C=L.value,k[C.id]=C;e.next=73;break;case 69:e.prev=69,e.t2=e.catch(65),x=!0,j=e.t2;case 73:e.prev=73,e.prev=74,O||null==S.return||S.return();case 76:if(e.prev=76,!x){e.next=79;break}throw j;case 79:return e.finish(76);case 80:return e.finish(73);case 81:this.setState({posts:a,comments:m,votes:g,boards:k,loading:!1});case 82:case"end":return e.stop()}},e,this,[[15,19,23,31],[24,,26,30],[38,42,46,54],[47,,49,53],[65,69,73,81],[74,,76,80]])}));return function(){return e.apply(this,arguments)}}()},{key:"createPost",value:function(){var e=Object(s.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.postdb.create(t);case 2:return a=e.sent,this.setState(function(e){var t=Object(l.a)({},e.posts);return t[a.id]=a,Object(l.a)({},e,{posts:t})}),e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"createComment",value:function(){var e=Object(s.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.commentdb.create(t);case 2:return a=e.sent,this.setState(function(e){var n=Object(l.a)({},e.comments[t.parent]);n[a.id]=a;var r=Object(l.a)({},e.comments);return r[t.parent]=n,Object(l.a)({},e,{comments:r})}),e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"createBoard",value:function(){var e=Object(s.a)(u.a.mark(function e(t,a){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.boarddb.create(t,a);case 2:return n=e.sent,this.setState(function(e){var t=Object(l.a)({},e.boards);return t[n.id]=n,Object(l.a)({},e,{boards:t})}),e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"vote",value:function(){var e=Object(s.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.slice(0,10)+t.target.slice(-10),e.next=3,this.votedb.create(t,a);case 3:return n=e.sent,this.state.votes.addVote(n),this.forceUpdate(),e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"upvote",value:function(){var e=Object(s.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.vote({target:t,score:1});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"downvote",value:function(){var e=Object(s.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.vote({target:t,score:-1});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"unvote",value:function(){var e=Object(s.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.vote({target:t,score:0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"login",value:function(e,t){if(!/^[A-Za-z0-9_]+$/.test(e))throw new Error("invalid username: ".concat(e));var a=b.KeyPair.fromSecretPhrase(e+";"+t);this.channel.setKeyPair(a),this.setState({keyPair:a,username:e}),window.localStorage.setItem("username",e),window.localStorage.setItem("passphrase",t)}},{key:"logout",value:function(){this.channel.setKeyPair(null),this.setState({keyPair:void 0}),window.localStorage.removeItem("username"),window.localStorage.removeItem("passphrase")}},{key:"render",value:function(){if(this.state.loading)return r.a.createElement(ee,null);var e={};for(var t in this.state.posts){var a=this.state.posts[t];e[a.data.board]||(e[a.data.board]={}),e[a.data.board][t]=a}return r.a.createElement(j.Provider,{value:{app:this,posts:this.state.posts,comments:this.state.comments,votes:this.state.votes,boards:this.state.boards,username:this.state.username,keyPair:this.state.keyPair,postsForBoard:e}},r.a.createElement(y.HashRouter,null,r.a.createElement(X,null),r.a.createElement(k.a,null,r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement(g.g,null,r.a.createElement(g.d,{path:"/post/:id",render:function(e){var t=e.match;return r.a.createElement(me,{id:t.params.id})}}),r.a.createElement(g.d,{path:"/u/:name/:publicKey",render:function(e){var t=e.match;return r.a.createElement(pe,{name:t.params.name,publicKey:t.params.publicKey})}}),r.a.createElement(g.d,{path:"/b/:name/:id",render:function(e){var t=e.match;return r.a.createElement(A,{name:t.params.name,id:t.params.id})}}),r.a.createElement(g.d,{path:"/login"},r.a.createElement(ae,null)),r.a.createElement(g.d,{path:"/newboard"},r.a.createElement(ne,null)),r.a.createElement(g.d,{path:"/newpost/:board",render:function(e){var t=e.match;return r.a.createElement(le,{board:t.params.board})}}),r.a.createElement(g.d,{path:"/newpost"},r.a.createElement(le,null)),r.a.createElement(g.d,{path:"/",exact:!0},r.a.createElement(Q,null)),r.a.createElement(g.d,null,r.a.createElement(ie,null))))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,1,2]]]);
//# sourceMappingURL=main.0371c67e.chunk.js.map