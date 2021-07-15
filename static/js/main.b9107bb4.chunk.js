(this["webpackJsonpsudoku-game"]=this["webpackJsonpsudoku-game"]||[]).push([[0],[,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(10),a=n.n(s),i=(n(16),n(3)),l=n(1),o=(n(17),n(18),n(19),n(20),n(0)),u=Object(c.createContext)();u.displayName="Store";var d=function(){return Object(c.useContext)(u)},j=function(e){var t=e.children,n=e.initialState,r=e.reducer,s=Object(c.useReducer)(r,n),a=Object(l.a)(s,2),i=a[0],d=a[1];return Object(o.jsx)(u.Provider,{value:[i,d],displayName:"Game Context",children:t})},b=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},m=function(e){switch(e){case"A":return 1;case"B":return 2;case"C":return 3;case"D":return 4;case"E":return 5;case"F":return 6;case"G":return 7;case"H":return 8;case"I":return 9}},f=function(e,t){return 0!==t[m(e.row)-1][parseInt(e.col)-1]},O=function(e){var t=d(),n=Object(l.a)(t,1)[0],c=n.selectedTile,r=n.initBoardState,s="",a={row:e.row,col:e.col};return f(a,r)?0===e.value?(s=" ",Object(o.jsx)("div",{className:"tile",id:e.tileId,onClick:function(t){e.selectTileHandler(e)},children:Object(o.jsx)("div",{className:b("value-container","board-tile",e.row===c.row&&e.col===c.col&&"selected-tile-class",e.row===c.row&&"selected-row-class",e.col===c.col&&"selected-col-class"),children:s})})):(s=e.value,Object(o.jsx)("div",{className:"tile",id:e.tileId,onClick:function(t){e.selectTileHandler(e)},children:Object(o.jsx)("div",{className:b("value-container","board-tile",e.row===c.row&&e.col===c.col&&"selected-tile-class",e.row===c.row&&"selected-row-class",e.col===c.col&&"selected-col-class",e.value===c.value&&"selected-value-class"),children:s})})):0===e.value?(s=" ",Object(o.jsx)("div",{className:"tile",id:e.tileId,onClick:function(t){e.selectTileHandler(e)},children:Object(o.jsx)("div",{className:b("value-container","user-tile",e.row===c.row&&e.col===c.col&&"selected-tile-class",e.row===c.row&&"selected-row-class",e.col===c.col&&"selected-col-class"),children:s})})):(s=e.value,Object(o.jsx)("div",{className:"tile",id:e.tileId,onClick:function(t){e.selectTileHandler(e)},children:Object(o.jsx)("div",{className:b("value-container","user-tile",e.row===c.row&&e.col===c.col&&"selected-tile-class",e.row===c.row&&"selected-row-class",e.col===c.col&&"selected-col-class",e.value===c.value&&"selected-value-class"),children:s})}))},h="SELECT_TILE",v="UPDATE_TILE_VALUE",x="UNDO_MOVE",p=function(e){var t=d(),n=Object(l.a)(t,2),c=n[0],r=n[1],s=c.boardState,a=c.selectedTile,i=function(t){r({type:h,selectedTile:{row:t.row,col:t.col,value:u(t.row,t.col),unit:e.id}})},u=function(e,t){var n=m(e);return s[n-1][t-1]};return Object(o.jsx)("div",{id:e.id,className:b("board-unit",e.id===a.unit&&"selected-unit-class"),children:function(){for(var t=[],n=0;n<3;n++)for(var c=e.rows.substring(n,n+1),r=0;r<3;r++){var s=e.cols.substring(r,r+1),a="tile"+c+s,l=u(c,s);t.push(Object(o.jsx)(O,{row:c,col:s,tileId:a,value:l,selectTileHandler:i}))}return t}()},e.id)},N=function(e){return Object(o.jsxs)("div",{className:"Board-container",children:[Object(o.jsx)(p,{id:"unit1",cols:"123",rows:"ABC"}),Object(o.jsx)(p,{id:"unit2",cols:"456",rows:"ABC"}),Object(o.jsx)(p,{id:"unit3",cols:"789",rows:"ABC"}),Object(o.jsx)(p,{id:"unit4",cols:"123",rows:"DEF"}),Object(o.jsx)(p,{id:"unit5",cols:"456",rows:"DEF"}),Object(o.jsx)(p,{id:"unit6",cols:"789",rows:"DEF"}),Object(o.jsx)(p,{id:"unit7",cols:"123",rows:"GHI"}),Object(o.jsx)(p,{id:"unit8",cols:"456",rows:"GHI"}),Object(o.jsx)(p,{id:"unit9",cols:"789",rows:"GHI"})]})},w=(n(22),function(e){var t=d(),n=Object(l.a)(t,1)[0].remainingNums;return Object(o.jsxs)("div",{className:"NumPad",children:[Object(o.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(1)},children:[Object(o.jsx)("span",{className:"number-span",children:"1"}),Object(o.jsx)("span",{className:"remaining-span",children:n[0]})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(2)},children:[Object(o.jsx)("span",{className:"number-span",children:"2"}),Object(o.jsx)("span",{className:"remaining-span",children:n[1]})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(3)},children:[Object(o.jsx)("span",{className:"number-span",children:"3"}),Object(o.jsx)("span",{className:"remaining-span",children:n[2]})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(4)},children:[Object(o.jsx)("span",{className:"number-span",children:"4"}),Object(o.jsx)("span",{className:"remaining-span",children:n[3]})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(5)},children:[Object(o.jsx)("span",{className:"number-span",children:"5"}),Object(o.jsx)("span",{className:"remaining-span",children:n[4]})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(6)},children:[Object(o.jsx)("span",{className:"number-span",children:"6"}),Object(o.jsx)("span",{className:"remaining-span",children:n[5]})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(7)},children:[Object(o.jsx)("span",{className:"number-span",children:"7"}),Object(o.jsx)("span",{className:"remaining-span",children:n[6]})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(8)},children:[Object(o.jsx)("span",{className:"number-span",children:"8"}),Object(o.jsx)("span",{className:"remaining-span",children:n[7]})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(9)},children:[Object(o.jsx)("span",{className:"number-span",children:"9"}),Object(o.jsx)("span",{className:"remaining-span",children:n[8]})]})]})}),S=(n(23),function(e){return Object(o.jsxs)("div",{className:"timer",children:[Object(o.jsxs)("span",{className:"digits",children:[("0"+Math.floor(e.time/60%60)).slice(-2),":"]}),Object(o.jsx)("span",{className:"digits",children:("0"+Math.floor(e.time%60)).slice(-2)})]})});n(8),n(9);function g(e){var t=e.open,n=e.children,c=e.onClose;return t?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"close",onClick:c,children:"x"}),n]})}):null}function k(e){var t,n,c=9,r=9,s=9,a=9,i=9,l=9,o=9,u=9,d=9;for(t=0;t<9;t++)for(n=0;n<9;n++)1===e[t][n]&&c--,2===e[t][n]&&r--,3===e[t][n]&&s--,4===e[t][n]&&a--,5===e[t][n]&&i--,6===e[t][n]&&l--,7===e[t][n]&&o--,8===e[t][n]&&u--,9===e[t][n]&&d--;return[c,r,s,a,i,l,o,u,d]}function y(e){var t=Object(c.useState)(0),n=Object(l.a)(t,2),r=n[0],s=n[1],a=d(),u=Object(l.a)(a,2),j=u[0],b=u[1],O=Object(c.useState)(!1),h=Object(l.a)(O,2),p=h[0],N=h[1],w=j.isSolved,y=j.boardState,C=j.undoState,T=j.selectedTile,H=j.initBoardState;Object(c.useEffect)((function(){var e=null;return!1===w?e=setInterval((function(){s((function(e){return e+1}))}),1e3):clearInterval(e),function(){clearInterval(e)}}),[w]);return Object(o.jsxs)("div",{className:"side-controls",children:[Object(o.jsxs)("div",{className:"timer-container",children:[Object(o.jsx)("div",{className:"timer-item",children:Object(o.jsx)("h3",{children:"EASY"})}),Object(o.jsx)("div",{className:"timer-item",children:Object(o.jsx)(S,{time:r})})]}),Object(o.jsxs)("div",{className:"controls-container",children:[Object(o.jsx)("button",{className:"undo-btn",onClick:function(e){!function(){var e=C.map((function(e){return e.slice()}));if(C.length>1){e.pop();var t=e.slice(e.length-1);b({type:x,boardState:t[0],undoState:e})}}()},children:"Undo"}),Object(o.jsx)("button",{className:"hint-btn",children:"Hint"}),Object(o.jsx)("button",{className:"notes-btn",children:"Notes"}),Object(o.jsx)("button",{className:"eraser-btn",onClick:function(e){!function(){if(!f(T,H)){var e=Object(i.a)(y);e[m(T.row)-1][parseInt(T.col)-1]=0;var t=k(e);b({type:v,boardState:e,remainingNums:t,selectedTile:{row:T.row,col:T.col,unit:T.unit,value:0}})}}()},children:"Eraser"}),Object(o.jsx)("button",{className:"new-game-btn",children:"New Game"}),Object(o.jsx)("button",{className:"settings-btn",onClick:function(){return N(!0)},children:"Settings"}),Object(o.jsx)(g,{open:p,onClose:function(){return N(!1)},children:Object(o.jsxs)("div",{className:"side-modal",children:[Object(o.jsx)("div",{className:"side-modal-header",children:"Settings"}),Object(o.jsx)("div",{className:"side-modal-text",children:"Error Limits"}),Object(o.jsxs)("label",{class:"switch",children:[Object(o.jsx)("input",{type:"checkbox"}),Object(o.jsx)("span",{class:"slider"})]}),Object(o.jsx)("div",{className:"side-modal-text",children:"Auto - Detect Mistakes"}),Object(o.jsxs)("label",{class:"switch",children:[Object(o.jsx)("input",{type:"checkbox"}),Object(o.jsx)("span",{class:"slider"})]}),Object(o.jsx)("div",{className:"side-modal-text",children:"Auto - Update Hints"}),Object(o.jsxs)("label",{class:"switch",children:[Object(o.jsx)("input",{type:"checkbox"}),Object(o.jsx)("span",{class:"slider"})]}),Object(o.jsx)("div",{className:"side-modal-text",children:"Light / Dark Mode"}),Object(o.jsxs)("label",{class:"switch",children:[Object(o.jsx)("input",{type:"checkbox"}),Object(o.jsx)("span",{class:"slider"})]})]})})]})]})}var C,T=n.p+"static/media/pepeScrap.f374ebdc.png",H=function(){var e=d(),t=Object(l.a)(e,2),n=t[0],c=t[1],r=n.boardState,s=n.solvedBoardState,a=n.selectedTile,u=n.initBoardState,j=(n.undoState,function(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++)if(e[t][n]!==s[t][n])return!1;return!0});return Object(o.jsx)("div",{className:"flex content-center justify-center App bg-primary ",children:Object(o.jsxs)("div",{className:"flex-auto w-2/3 justify-self-center max-w-2/3 App-container bg-secondary",children:[Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)("div",{className:"text-8xl tracking-header header-title text-bold text-primary",children:"SUDOKU"})}),Object(o.jsxs)("div",{className:"Game-container",children:[Object(o.jsx)(N,{}),Object(o.jsx)(w,{btnHandler:function(e){!function(e){var t=Object(i.a)(r);if(!f(a,u)){t[m(a.row)-1][parseInt(a.col)-1]=e;var n=j(t),s=k(t);c({type:v,boardState:t,remainingNums:s,selectedTile:{row:a.row,col:a.col,unit:a.unit,value:e},isSolved:n})}}(e)}}),Object(o.jsx)(y,{}),Object(o.jsx)("div",{className:"image-container",children:Object(o.jsx)("img",{src:T,alt:"pepe scrappy",className:"pepe-scrap"})})]})]})})},E=n(4),I=n(11),A=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];function M(e,t,n,c){return!!(function(e,t,n){for(var c=0;c<9;c++)if(e[t][c]===n)return!1;return!0}(e,t,c)&&function(e,t,n){for(var c=0;c<9;c++)if(e[c][t]===n)return!1;return!0}(e,n,c)&&function(e,t,n,c){var r=Math.floor(t/3);r*=3;var s=Math.floor(n/3);s*=3;for(var a=r;a<r+3;a++)for(var i=s;i<s+3;i++)if(e[a][i]===c)return!1;return!0}(e,t,n,c))}var B=[1,2,3,4,5,6,7,8,9];function J(e){for(var t=Object(i.a)(e),n=t.length-1;n>0;n--){var c=Math.floor(Math.random()*(n+1)),r=[t[c],t[n]];t[n]=r[0],t[c]=r[1]}return t}function D(e,t){return e=Math.ceil(e),t+=1,t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function G(e){var t=function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++)if(0===e[t][n])return[t,n];return[-1,-1]}(e),n=t[0],c=t[1];if(-1===n)return e;var r,s,a=J(B),i=Object(I.a)(a);try{for(i.s();!(s=i.n()).done;){if(r=s.value,++C>2e7)throw new Error("Recursion Timeout");if(M(e,n,c,r)){if(e[n][c]=r,G(e))return e;e[n][c]=0}}}catch(l){i.e(l)}finally{i.f()}return!1}function U(e,t){var n=function(e,t){for(var n=0;n<t.length;n++)if(0===e[t[n].row][t[n].col])return{row:t[n].row,col:t[n].col};return!1}(e,t);if(!n)return e;for(var c=1;c<=9;c++){if(++C>6e7)throw new Error("Removal Timeout");if(M(e,n.row,n.col,c)){if(e[n.row][n.col]=c,U(e,t))return e;e[n.row][n.col]=0}}return!1}var L=function(e,t){for(var n=[],c=J(function(e,t){var n=t-e+1;return Array.from({length:n},(function(t,n){return e+n}))}(0,80));n.length<t;){var r=c.pop();if(void 0===r)throw new Error("Impossible Game");var s=Math.floor(r/9),a=r%9;if(e[s])if(0!==e[s][a])n.push({row:s,col:a,val:e[s][a]}),e[s][a]=0,F(JSON.parse(JSON.stringify(e)))&&(e[s][a]=n.pop().val)}return[n,e]};function F(e){for(var t,n,c=[],r=function(e){for(var t=[],n=0;n<9;n++)for(var c=0;c<9;c++)0===e[n][c]&&t.push({row:n,col:c});return t}(e),s=0;s<r.length;s++){var a=(t=Object(i.a)(r)).splice(s,1);if(t.unshift(a[0]),n=U(JSON.parse(JSON.stringify(e)),t),c.push(n.join()),Array.from(new Set(c)).length>1)return!0}return!1}var _=function(e){var t=JSON.parse(JSON.stringify(A));return G(t),t};var P=function e(){var t=D(36,46);t=81-t;try{C=0;var n=_(),c=L(JSON.parse(JSON.stringify(n)),t),r=Object(l.a)(c,2);return[r[0],r[1],n]}catch(s){return e()}}(),R=Object(l.a)(P,3),V=R[0],K=R[1],Y=R[2],q={boardState:K,initBoardState:K.map((function(e){return e.slice()})),solvedBoardState:Y,removedVals:V,selectedTile:{row:null,col:null,value:null,unit:null},remainingNums:k(K),isSolved:!1,undoState:[K.map((function(e){return e.slice()}))]};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(j,{initialState:q,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(E.a)(Object(E.a)({},e),{},{selectedTile:t.selectedTile});case v:return Object(E.a)(Object(E.a)({},e),{},{boardState:t.boardState,remainingNums:t.remainingNums,selectedTile:t.selectedTile,isSolved:t.isSolved,undoState:e.undoState.concat([t.boardState.map((function(e){return e.slice()}))])});case x:return Object(E.a)(Object(E.a)({},e),{},{boardState:t.boardState,undoState:t.undoState})}},children:Object(o.jsx)(H,{})})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.b9107bb4.chunk.js.map