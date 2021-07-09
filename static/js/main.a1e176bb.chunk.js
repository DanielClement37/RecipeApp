(this["webpackJsonpsudoku-game"]=this["webpackJsonpsudoku-game"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),s=t(8),a=t.n(s),i=(t(14),t(5)),l=t(2),o=(t(15),t(16),t(17),t(18),t(0)),u=function(e){var n="";return n=0===e.value?" ":e.value,Object(o.jsx)("div",{className:"tile",id:e.tileId,onClick:function(n){e.selectTileHandler(e)},children:Object(o.jsx)("div",{className:"value-container",children:n})})},d=Object(c.createContext)();d.displayName="Store";var j=function(){return Object(c.useContext)(d)},b=function(e){var n=e.children,t=e.initialState,r=e.reducer,s=Object(c.useReducer)(r,t),a=Object(l.a)(s,2),i=a[0],u=a[1];return Object(o.jsx)(d.Provider,{value:[i,u],children:n})},m="SELECT_TILE",f="UPDATE_TILE_VALUE",O=function(e){switch(e){case"A":return 1;case"B":return 2;case"C":return 3;case"D":return 4;case"E":return 5;case"F":return 6;case"G":return 7;case"H":return 8;case"I":return 9}},h=function(e){var n=j(),t=Object(l.a)(n,2),c=t[0],r=t[1],s=c.boardState,a=function(n){r({type:m,selectedTile:{row:n.row,col:n.col},selectedUnit:e.id,selectedValue:i(n.row,n.col),selectedRow:n.row,selectedColumn:n.col})},i=function(e,n){var t=O(e);return s[t-1][n-1]};return Object(o.jsx)("div",{className:"board-unit",id:e.id,children:function(){for(var n=[],t=0;t<3;t++)for(var c=e.rows.substring(t,t+1),r=0;r<3;r++){var s=e.cols.substring(r,r+1),l="tile"+c+s,d=i(c,s);n.push(Object(o.jsx)(u,{row:c,col:s,tileId:l,value:d,selectTileHandler:a}))}return n}()})},p=function(e){return Object(o.jsxs)("div",{className:"Board-container",children:[Object(o.jsx)(h,{id:"unit1",cols:"123",rows:"ABC"}),Object(o.jsx)(h,{id:"unit2",cols:"456",rows:"ABC"}),Object(o.jsx)(h,{id:"unit3",cols:"789",rows:"ABC"}),Object(o.jsx)(h,{id:"unit4",cols:"123",rows:"DEF"}),Object(o.jsx)(h,{id:"unit5",cols:"456",rows:"DEF"}),Object(o.jsx)(h,{id:"unit6",cols:"789",rows:"DEF"}),Object(o.jsx)(h,{id:"unit7",cols:"123",rows:"GHI"}),Object(o.jsx)(h,{id:"unit8",cols:"456",rows:"GHI"}),Object(o.jsx)(h,{id:"unit9",cols:"789",rows:"GHI"})]})},x=(t(20),function(e){return Object(o.jsxs)("div",{className:"NumPad",children:[Object(o.jsxs)("button",{className:"circle-btn",onClick:function(n){e.btnHandler(1)},children:[Object(o.jsx)("span",{className:"number-span",children:"1"}),Object(o.jsx)("span",{className:"remaining-span",children:"3"})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(n){e.btnHandler(2)},children:[Object(o.jsx)("span",{className:"number-span",children:"2"}),Object(o.jsx)("span",{className:"remaining-span",children:"3"})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(n){e.btnHandler(3)},children:[Object(o.jsx)("span",{className:"number-span",children:"3"}),Object(o.jsx)("span",{className:"remaining-span",children:"3"})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(n){e.btnHandler(4)},children:[Object(o.jsx)("span",{className:"number-span",children:"4"}),Object(o.jsx)("span",{className:"remaining-span",children:"3"})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(n){e.btnHandler(5)},children:[Object(o.jsx)("span",{className:"number-span",children:"5"}),Object(o.jsx)("span",{className:"remaining-span",children:"3"})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(n){e.btnHandler(6)},children:[Object(o.jsx)("span",{className:"number-span",children:"6"}),Object(o.jsx)("span",{className:"remaining-span",children:"3"})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(n){e.btnHandler(7)},children:[Object(o.jsx)("span",{className:"number-span",children:"7"}),Object(o.jsx)("span",{className:"remaining-span",children:"3"})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(n){e.btnHandler(8)},children:[Object(o.jsx)("span",{className:"number-span",children:"8"}),Object(o.jsx)("span",{className:"remaining-span",children:"3"})]}),Object(o.jsxs)("button",{className:"circle-btn",onClick:function(n){e.btnHandler(9)},children:[Object(o.jsx)("span",{className:"number-span",children:"9"}),Object(o.jsx)("span",{className:"remaining-span",children:"3"})]})]})}),v=(t(21),function(e){return Object(o.jsxs)("div",{className:"timer",children:[Object(o.jsxs)("span",{className:"digits",children:[("0"+Math.floor(e.time/60%60)).slice(-2),":"]}),Object(o.jsx)("span",{className:"digits",children:("0"+Math.floor(e.time%60)).slice(-2)})]})});t(22);function N(){var e=Object(c.useState)(!1),n=Object(l.a)(e,2),t=n[0],r=(n[1],Object(c.useState)(0)),s=Object(l.a)(r,2),a=s[0],i=s[1];Object(c.useEffect)((function(){var e=null;return!1===t?e=setInterval((function(){i((function(e){return e+1}))}),1e3):clearInterval(e),function(){clearInterval(e)}}),[t]);return Object(o.jsxs)("div",{className:"side-controls",children:[Object(o.jsxs)("div",{className:"timer-container",children:[Object(o.jsx)("div",{className:"timer-item",children:Object(o.jsx)("h3",{children:"EASY"})}),Object(o.jsx)("div",{className:"timer-item",children:Object(o.jsx)(v,{time:a})})]}),Object(o.jsxs)("div",{className:"controls-container",children:[Object(o.jsx)("button",{className:"undo-btn",children:"Undo"}),Object(o.jsx)("button",{className:"hint-btn",children:"Hint"}),Object(o.jsx)("button",{className:"notes-btn",children:"Notes"}),Object(o.jsx)("button",{className:"eraser-btn",children:"Eraser"}),Object(o.jsx)("button",{className:"new-game-btn",children:"New Game"}),Object(o.jsx)("button",{id:"set-btn",className:"settings-btn",children:"Settings"}),Object(o.jsx)("div",{id:"settings-modal",className:"side-modal",children:Object(o.jsx)("span",{class:"close",children:"\xd7"})})]})]})}window.onload=function(){var e=document.getElementById("settings-modal"),n=document.getElementById("set-btn"),t=document.getElementsByClassName("close")[0];n.onclick=function(){e.style.display="block"},t.onclick=function(){e.style.display="none"},window.onclick=function(n){n.target==e&&(e.style.display="none")}};var w,g=t.p+"static/media/pepeScrap.f374ebdc.png",y=function(){var e=j(),n=Object(l.a)(e,2),t=n[0],c=n[1],r=t.boardState,s=t.selectedValue,a=t.selectedTile;return Object(o.jsx)("div",{className:"flex content-center justify-center App bg-primary ",children:Object(o.jsxs)("div",{className:"flex-auto w-2/3 justify-self-center max-w-2/3 App-container bg-secondary",children:[Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)("div",{className:"text-8xl tracking-header header-title text-bold text-primary",children:"SUDOKU"})}),Object(o.jsxs)("div",{className:"Game-container",children:[Object(o.jsx)(p,{}),Object(o.jsx)(x,{btnHandler:function(e){!function(e){var n=Object(i.a)(r);0===s&&(n[O(a.row)-1][parseInt(a.col)-1]=e,c({type:f,boardState:n}))}(e)}}),Object(o.jsx)(N,{}),Object(o.jsx)("div",{className:"image-container",children:Object(o.jsx)("img",{src:g,alt:"pepe scrappy",className:"pepe-scrap"})})]})]})})},S=t(6),C=t(9),E=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];function k(e,n,t,c){return!!(function(e,n,t){for(var c=0;c<8;c++)if(e[n][c]===t)return!1;return!0}(e,n,c)&&function(e,n,t){for(var c=0;c<8;c++)if(e[c][n]===t)return!1;return!0}(e,t,c)&&function(e,n,t,c){var r=Math.floor(n/3);r*=3;var s=Math.floor(t/3);s*=3;for(var a=r;a<r+3;a++)for(var i=s;i<s+3;i++)if(e[a][i]===c)return!1;return!0}(e,n,t,c))}var H=[1,2,3,4,5,6,7,8,9];function I(e){for(var n=Object(i.a)(e),t=n.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),r=[n[c],n[t]];n[t]=r[0],n[c]=r[1]}return n}function T(e,n){return e=Math.ceil(e),n+=1,n=Math.floor(n),Math.floor(Math.random()*(n-e)+e)}function A(e){var n=function(e){for(var n=0;n<e.length;n++)for(var t=0;t<e[n].length;t++)if(0===e[n][t])return[n,t];return[-1,-1]}(e),t=n[0],c=n[1];if(-1===t)return e;var r,s,a=I(H),i=Object(C.a)(a);try{for(i.s();!(s=i.n()).done;){if(r=s.value,++w>2e7)throw new Error("Recursion Timeout");if(k(e,t,c,r)){if(e[t][c]=r,A(e))return e;e[t][c]=0}}}catch(l){i.e(l)}finally{i.f()}return!1}function M(e,n){var t=function(e,n){for(var t=0;t<n.length;t++)if(0===e[n[t].row][n[t].col])return{row:n[t].row,col:n[t].col};return!1}(e,n);if(!t)return e;for(var c=1;c<=9;c++){if(++w>6e7)throw new Error("Removal Timeout");if(k(e,t.row,t.col,c)){if(e[t.row][t.col]=c,M(e,n))return e;e[t.row][t.col]=0}}return!1}var B=function(e,n){for(var t=[],c=I(function(e,n){var t=n-e+1;return Array.from({length:t},(function(n,t){return e+t}))}(0,80));t.length<n;){var r=c.pop();if(void 0===r)throw new Error("Impossible Game");var s=Math.floor(r/9),a=r%9;if(e[s])if(0!==e[s][a])t.push({row:s,col:a,val:e[s][a]}),e[s][a]=0,J(JSON.parse(JSON.stringify(e)))&&(e[s][a]=t.pop().val)}return[t,e]};function J(e){for(var n,t,c=[],r=function(e){for(var n=[],t=0;t<9;t++)for(var c=0;c<9;c++)0===e[t][c]&&n.push({row:t,col:c});return n}(e),s=0;s<r.length;s++){var a=(n=Object(i.a)(r)).splice(s,1);if(n.unshift(a[0]),t=M(JSON.parse(JSON.stringify(e)),n),c.push(t.join()),Array.from(new Set(c)).length>1)return!0}return!1}var U=function(e){var n=JSON.parse(JSON.stringify(E));return A(n),n};var G=function e(){var n=T(36,46);n=81-n;try{w=0;var t=U(),c=B(JSON.parse(JSON.stringify(t)),n),r=Object(l.a)(c,2);return[r[0],r[1],t]}catch(s){return e()}}(),R=Object(l.a)(G,3),V=R[0],D={boardState:R[1],solvedBoardState:R[2],removedVals:V,selectedTile:{row:null,col:null},selectedUnit:null,selectedValue:null,selectedRow:null,selectedColumn:null};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(b,{initialState:D,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m:return Object(S.a)(Object(S.a)({},e),{},{selectedTile:n.selectedTile,selectedUnit:n.selectedUnit,selectedRow:n.selectedRow,selectedColumn:n.selectedColumn,selectedValue:n.selectedValue});case f:return Object(S.a)(Object(S.a)({},e),{},{boardState:n.boardState})}},children:Object(o.jsx)(y,{})})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.a1e176bb.chunk.js.map