(this["webpackJsonpconways-gol-react"]=this["webpackJsonpconways-gol-react"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),i=n(7),s=n.n(i),c=(n(12),n(13),n(2)),r=n(3),l=n(5),u=n(4),h=n(0),d=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.x,n=t.y;return Object(h.jsx)("div",{className:"Cell",style:{left:"".concat(20*e+1,"px"),top:"".concat(20*n+1,"px"),width:"".concat(19,"px"),height:"".concat(19,"px")}})}}]),n}(o.a.Component),b=(n(15),n(16),20),f=!0,j=0,v=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={cells:[],isRunning:!1,interval:250},t.runGame=function(){t.setState({isRunning:!0}),t.nextIteration()},t.stopGame=function(){t.setState({isRunning:!1}),t.timeoutHandler&&(window.clearTimeout(t.timeoutHandler),t.timeoutHandler=null)},t.actionClick=function(e){var n=t.getElementOffset(),a=e.clientX-n.x,o=e.clientY-n.y,i=Math.floor(a/b),s=Math.floor(o/b);i>=0&&i<=t.cols&&s>=0&&s<=t.rows&&(t.board[s][i]=!t.board[s][i]),t.setState({cells:t.updateCellsList()})},t.actionChangeInterval=function(e){j++,t.setState({interval:e.target.value})},t.actionClearButton=function(){j=0,t.board=t.makeTheBoardEmpty(),t.setState({cells:t.updateCellsList()})},t.actionModeButton=function(){t.stopGame(),f=!f},t.actionRandomButton=function(){for(var e=0;e<t.rows;e++)for(var n=0;n<t.cols;n++)t.board[e][n]=Math.random()>=.6;t.setState({cells:t.updateCellsList()})},t.rows=34,t.cols=54,t.board=t.makeTheBoardEmpty(),t}return Object(r.a)(n,[{key:"getElementOffset",value:function(){var t=this.boardRef.getBoundingClientRect(),e=document.documentElement;return{x:t.left+window.pageXOffset-e.clientLeft,y:t.top+window.pageYOffset-e.clientTop}}},{key:"updateCellsList",value:function(){for(var t=[],e=0;e<this.rows;e++)for(var n=0;n<this.cols;n++)this.board[e][n]&&t.push({x:n,y:e});return t}},{key:"makeTheBoardEmpty",value:function(){for(var t=[],e=0;e<this.rows;e++){t[e]=[];for(var n=0;n<this.cols;n++)t[e][n]=!1}return t}},{key:"nextIteration",value:function(){var t=this,e=this.makeTheBoardEmpty();j++;for(var n=0;n<this.rows;n++)for(var a=0;a<this.cols;a++){var o=this.calculateNeighbors(this.board,a,n);this.board[n][a]?e[n][a]=2===o||3===o:this.board[n][a]||3!==o||(e[n][a]=!0)}this.board=e,this.setState({cells:this.updateCellsList()}),this.timeoutHandler=window.setTimeout((function(){t.nextIteration()}),this.state.interval)}},{key:"calculateNeighbors",value:function(t,e,n){var a=0,o=[[]];f?o=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]]:f||(o=[[-1,0],[0,-1],[1,0],[0,1]]);for(var i=0;i<o.length;i++){var s=o[i],c=n+s[0],r=e+s[1];r>=0&&r<this.cols&&c>=0&&c<this.rows&&t[c][r]&&a++}return a}},{key:"render",value:function(){var t=this,e=this.state,n=e.cells,a=(e.interval,e.isRunning);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"Board",style:{width:1080,height:680,backgroundSize:"".concat(b,"px ").concat(b,"px")},onClick:this.actionClick,ref:function(e){t.boardRef=e},children:n.map((function(t){return Object(h.jsx)(d,{x:t.x,y:t.y},"".concat(t.x,",").concat(t.y))}))}),Object(h.jsxs)("div",{className:"controls",children:["Step interval: ",Object(h.jsx)("input",{id:"interval",value:this.state.interval,onChange:this.actionChangeInterval})," ms, iterations: ",Object(h.jsx)("input",{id:"iterations",value:j,type:"text",disabled:!0}),"  ",Object(h.jsx)("p",{}),a?Object(h.jsx)("button",{className:"button",id:"btnStop",onClick:this.stopGame,children:"Stop"}):Object(h.jsx)("button",{className:"button",id:"btnRun",onClick:this.runGame,children:"Run"}),f?Object(h.jsx)("button",{className:"button",onClick:this.actionModeButton,children:"Moore"}):Object(h.jsx)("button",{className:"button",onClick:this.actionModeButton,children:"Neumann"}),Object(h.jsx)("button",{className:"button",onClick:this.actionRandomButton,children:"Random"}),Object(h.jsx)("button",{className:"button",id:"btnClear",onClick:this.actionClearButton,children:"Clear"})]})]})}}]),n}(o.a.Component);var m=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{class:"title",children:Object(h.jsxs)("h1",{children:[Object(h.jsx)("a",{href:"https://en.wikipedia.org/wiki/John_Horton_Conway",target:"_blank",children:"\u21b1 John H. Conway"}),"'s ",Object(h.jsx)("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank",children:"Game of Life"})," in React"]})}),Object(h.jsx)(v,{}),Object(h.jsx)("div",{class:"author",children:"Karol 'z0miren' Warcha\u0142owski"})]})};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("react_root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.1a7f9aff.chunk.js.map