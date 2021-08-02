(this["webpackJsonpsudoku-game"]=this["webpackJsonpsudoku-game"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(13),s=n.n(c),i=(n(19),n(4)),o=n(1),l=(n(20),n(21),n(22),n(23),n(24),n(0)),u=Object(r.createContext)();u.displayName="Store";var d,b=function(){return Object(r.useContext)(u)},j=function(e){var t=e.children,n=e.initialState,a=e.reducer,c=Object(r.useReducer)(a,n),s=Object(o.a)(c,2),i=s[0],d=s[1];return Object(l.jsx)(u.Provider,{value:[i,d],displayName:"Game Context",children:t})},f=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},m=function(e){switch(e){case"A":return 1;case"B":return 2;case"C":return 3;case"D":return 4;case"E":return 5;case"F":return 6;case"G":return 7;case"H":return 8;case"I":return 9}},O=function(e,t){return 0!==t[m(e.row)-1][parseInt(e.col)-1]},v=function(e){var t=b(),n=Object(o.a)(t,1)[0],r=n.selectedTile,a=n.initBoardState,c=n.boardNotes,s=0===e.value?" ":e.value,i={row:e.row,col:e.col},u=m(e.row);return 0===e.value?Object(l.jsx)("div",{className:"tile",id:e.tileId,onClick:function(t){e.selectTileHandler(e)},children:Object(l.jsx)("div",{className:f("value-container",e.row===r.row&&e.col===r.col&&"selected-tile-class",e.row===r.row&&"selected-row-class",e.col===r.col&&"selected-col-class",0!==e.value&&e.value===r.value?"selected-value-class":""),children:Object(l.jsx)("table",{className:"cell-hints",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][0]?"selected-hint":"",1===r.value&&c[u-1][e.col-1][0]?"selected-value-note":""),children:"1"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][1]?"selected-hint":"",2===r.value&&c[u-1][e.col-1][1]?"selected-value-note":""),children:"2"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][2]?"selected-hint":"",3===r.value&&c[u-1][e.col-1][2]?"selected-value-note":""),children:"3"})]})," ",Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][3]?"selected-hint":"",4===r.value&&c[u-1][e.col-1][3]?"selected-value-note":""),children:"4"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][4]?"selected-hint":"",5===r.value&&c[u-1][e.col-1][4]?"selected-value-note":""),children:"5"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][5]?"selected-hint":"",6===r.value&&c[u-1][e.col-1][5]?"selected-value-note":""),children:"6"})]})," ",Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][6]?"selected-hint":"",7===r.value&&c[u-1][e.col-1][6]?"selected-value-note":""),children:"7"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][7]?"selected-hint":"",8===r.value&&c[u-1][e.col-1][7]?"selected-value-note":""),children:"8"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][8]?"selected-hint":"",9===r.value&&c[u-1][e.col-1][8]?"selected-value-note":""),children:"9"})]})]})})})}):Object(l.jsx)("div",{className:"tile",id:e.tileId,onClick:function(t){e.selectTileHandler(e)},children:Object(l.jsx)("div",{className:f("value-container",O(i,a)?"board-tile":"user-tile",e.row===r.row&&e.col===r.col&&"selected-tile-class",e.row===r.row&&"selected-row-class",e.col===r.col&&"selected-col-class",0!==e.value&&e.value===r.value?"selected-value-class":""),children:s})})},h={SELECT_TILE:"SELECT_TILE",UPDATE_TILE_VALUE:"UPDATE_TILE_VALUE",UNDO_MOVE:"UNDO_MOVE",NOTES_TOGGLE:"NOTES_TOGGLE",ERASE_TILE:"ERASE_TILE",NEW_GAME:"NEW_GAME",UPDATE_NOTES:"UPDATE_NOTES"},p=function(e){var t=b(),n=Object(o.a)(t,2),r=n[0],a=n[1],c=r.boardState,s=r.selectedTile,i=function(t){a({type:h.SELECT_TILE,selectedTile:{row:t.row,col:t.col,value:u(t.row,t.col),unit:e.id}})},u=function(e,t){var n=m(e);return c[n-1][t-1]};return Object(l.jsx)("div",{id:e.id,className:f("board-unit",e.id===s.unit&&"selected-unit-class"),children:function(){for(var t=[],n=0;n<3;n++)for(var r=e.rows.substring(n,n+1),a=0;a<3;a++){var c=e.cols.substring(a,a+1),s="tile"+r+c,o=u(r,c);t.push(Object(l.jsx)(v,{row:r,col:c,tileId:s,value:o,selectTileHandler:i}))}return t}()},e.id)},N=function(e){return Object(l.jsxs)("div",{className:"Board-container",children:[Object(l.jsx)(p,{id:"unit1",cols:"123",rows:"ABC",ref:e.ref}),Object(l.jsx)(p,{id:"unit2",cols:"456",rows:"ABC",ref:e.ref}),Object(l.jsx)(p,{id:"unit3",cols:"789",rows:"ABC",ref:e.ref}),Object(l.jsx)(p,{id:"unit4",cols:"123",rows:"DEF",ref:e.ref}),Object(l.jsx)(p,{id:"unit5",cols:"456",rows:"DEF",ref:e.ref}),Object(l.jsx)(p,{id:"unit6",cols:"789",rows:"DEF",ref:e.ref}),Object(l.jsx)(p,{id:"unit7",cols:"123",rows:"GHI",ref:e.ref}),Object(l.jsx)(p,{id:"unit8",cols:"456",rows:"GHI",ref:e.ref}),Object(l.jsx)(p,{id:"unit9",cols:"789",rows:"GHI",ref:e.ref})]})},x=(n(26),function(e){var t=b(),n=Object(o.a)(t,1)[0].remainingNums;return Object(l.jsxs)("div",{className:"NumPad",children:[Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(1)},children:[Object(l.jsx)("span",{className:"number-span",children:"1"}),Object(l.jsx)("span",{className:"remaining-span",children:n[0]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(2)},children:[Object(l.jsx)("span",{className:"number-span",children:"2"}),Object(l.jsx)("span",{className:"remaining-span",children:n[1]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(3)},children:[Object(l.jsx)("span",{className:"number-span",children:"3"}),Object(l.jsx)("span",{className:"remaining-span",children:n[2]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(4)},children:[Object(l.jsx)("span",{className:"number-span",children:"4"}),Object(l.jsx)("span",{className:"remaining-span",children:n[3]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(5)},children:[Object(l.jsx)("span",{className:"number-span",children:"5"}),Object(l.jsx)("span",{className:"remaining-span",children:n[4]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(6)},children:[Object(l.jsx)("span",{className:"number-span",children:"6"}),Object(l.jsx)("span",{className:"remaining-span",children:n[5]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(7)},children:[Object(l.jsx)("span",{className:"number-span",children:"7"}),Object(l.jsx)("span",{className:"remaining-span",children:n[6]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(8)},children:[Object(l.jsx)("span",{className:"number-span",children:"8"}),Object(l.jsx)("span",{className:"remaining-span",children:n[7]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(9)},children:[Object(l.jsx)("span",{className:"number-span",children:"9"}),Object(l.jsx)("span",{className:"remaining-span",children:n[8]})]})]})}),g=(n(27),function(e){return Object(l.jsxs)("div",{className:"timer",children:[Object(l.jsxs)("span",{className:"digits",children:[("0"+Math.floor(e.time/60%60)).slice(-2),":"]}),Object(l.jsx)("span",{className:"digits",children:("0"+Math.floor(e.time%60)).slice(-2)})]})}),w=(n(11),n(12),n(5)),S=n.n(w),E=n(8),y=n(3),k=n(14),T=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];function C(e,t,n,r){return!!(function(e,t,n){for(var r=0;r<9;r++)if(e[t][r]===n)return!1;return!0}(e,t,r)&&function(e,t,n){for(var r=0;r<9;r++)if(e[r][t]===n)return!1;return!0}(e,n,r)&&function(e,t,n,r){var a=Math.floor(t/3);a*=3;var c=Math.floor(n/3);c*=3;for(var s=a;s<a+3;s++)for(var i=c;i<c+3;i++)if(e[s][i]===r)return!1;return!0}(e,t,n,r))}var A=[1,2,3,4,5,6,7,8,9];function I(e){for(var t=Object(i.a)(e),n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),a=[t[r],t[n]];t[n]=a[0],t[r]=a[1]}return t}function L(e,t){return e=Math.ceil(e),t+=1,t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function _(e){var t=function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++)if(0===e[t][n])return[t,n];return[-1,-1]}(e),n=t[0],r=t[1];if(-1===n)return e;var a,c,s=I(A),i=Object(k.a)(s);try{for(i.s();!(c=i.n()).done;){if(a=c.value,++d>2e7)throw new Error("Recursion Timeout");if(C(e,n,r,a)){if(e[n][r]=a,_(e))return e;e[n][r]=0}}}catch(o){i.e(o)}finally{i.f()}return!1}function B(e,t){var n=function(e,t){for(var n=0;n<t.length;n++)if(0===e[t[n].row][t[n].col])return{row:t[n].row,col:t[n].col};return!1}(e,t);if(!n)return e;for(var r=1;r<=9;r++){if(++d>6e7)throw new Error("Removal Timeout");if(C(e,n.row,n.col,r)){if(e[n.row][n.col]=r,B(e,t))return e;e[n.row][n.col]=0}}return!1}var M=function(e,t){for(var n=[],r=I(function(e,t){var n=t-e+1;return Array.from({length:n},(function(t,n){return e+n}))}(0,80));n.length<t;){var a=r.pop();if(void 0===a)throw new Error("Impossible Game");var c=Math.floor(a/9),s=a%9;if(e[c])if(0!==e[c][s])n.push({row:c,col:s,val:e[c][s]}),e[c][s]=0,H(JSON.parse(JSON.stringify(e)))&&(e[c][s]=n.pop().val)}return[n,e]};function H(e){for(var t,n,r=[],a=function(e){for(var t=[],n=0;n<9;n++)for(var r=0;r<9;r++)0===e[n][r]&&t.push({row:n,col:r});return t}(e),c=0;c<a.length;c++){var s=(t=Object(i.a)(a)).splice(c,1);if(t.unshift(s[0]),n=B(JSON.parse(JSON.stringify(e)),t),r.push(n.join()),Array.from(new Set(r)).length>1)return!0}return!1}var G=function(e){var t=JSON.parse(JSON.stringify(T));return _(t),t};function U(){var e=L(36,46);e=81-e;try{d=0;var t=G(),n=M(JSON.parse(JSON.stringify(t)),e),r=Object(o.a)(n,2);return[r[0],r[1],t]}catch(a){return U()}}function D(){var e=L(32,35);e=81-e;try{d=0;var t=G(),n=M(JSON.parse(JSON.stringify(t)),e),r=Object(o.a)(n,2);return[r[0],r[1],t]}catch(a){return D()}}function V(){var e=L(28,31);e=81-e;try{d=0;var t=G(),n=M(JSON.parse(JSON.stringify(t)),e),r=Object(o.a)(n,2);return[r[0],r[1],t]}catch(a){return V()}}function J(e){var t,n,r=9,a=9,c=9,s=9,i=9,o=9,l=9,u=9,d=9;for(t=0;t<9;t++)for(n=0;n<9;n++)1===e[t][n]&&r--,2===e[t][n]&&a--,3===e[t][n]&&c--,4===e[t][n]&&s--,5===e[t][n]&&i--,6===e[t][n]&&o--,7===e[t][n]&&l--,8===e[t][n]&&u--,9===e[t][n]&&d--;return[r,a,c,s,i,o,l,u,d]}var P,R,W,F,K,X,Y,q,z,Q=function(){var e=Object(E.a)(S.a.mark((function e(){var t,n,r,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:return a=e.sent,c=Object(o.a)(a,3),t=c[0],n=c[1],r=c[2],e.abrupt("return",[t,n,r]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(E.a)(S.a.mark((function e(t){var n,r,a,c,s,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<5)){e.next=14;break}return r=void 0,a=void 0,c=void 0,e.next=5,Q();case 5:s=e.sent,i=Object(o.a)(s,3),r=i[0],a=i[1],c=i[2],t.push({removedVals:r,startingBoard:a,finalBoard:c});case 11:n++,e.next=1;break;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=U(),t=Object(o.a)(e,3);P=t[0],R=t[1],W=t[2]},ee=function(){var e=D(),t=Object(o.a)(e,3);F=t[0],K=t[1],X=t[2]},te=[];$(),ee();var ne={boardState:R,initBoardState:R.map((function(e){return e.slice()})),solvedBoardState:W,removedVals:P,selectedTile:{row:null,col:null,value:null,unit:null},remainingNums:J(R),isSolved:!1,isNotesMode:!1,undoState:[R.map((function(e){return e.slice()}))],difficulty:"Beginner",boardNotes:[[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]]].map((function(e){return e.slice()})),remainingHints:3},re=function(){var e=Object(E.a)(S.a.mark((function e(t){var n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="Beginner"===e.t0?3:"Intermediate"===e.t0?5:"Advanced"===e.t0?7:16;break;case 3:return $(),e.abrupt("break",17);case 5:return ee(),e.abrupt("break",17);case 7:return e.next=9,Q();case 9:return n=e.sent,r=Object(o.a)(n,3),Y=r[0],q=r[1],z=r[2],te.push({removedVals:Y,startingBoard:q,finalBoard:z}),e.abrupt("break",17);case 16:return e.abrupt("break",17);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=n.p+"static/media/pepeScrapWin.578c277b.png";function ce(e){var t=b(),n=Object(o.a)(t,2),r=(n[0],n[1]),a=function(t){var n=function(e){switch(e){case"Beginner":return[P,R,W];case"Intermediate":return[F,K,X];case"Advanced":var t=te.shift();return Y=t.removedVals,q=t.startingBoard,z=t.finalBoard,[Y,q,z]}}(t),a=Object(o.a)(n,3),c=a[0],s=a[1],i=a[2];r({type:h.NEW_GAME,boardState:s,initBoardState:s.map((function(e){return e.slice()})),solvedBoardState:i.map((function(e){return e.slice()})),removedVals:c,selectedTile:{row:null,col:null,value:null,unit:null},remainingNums:J(s),undoState:[s.map((function(e){return e.slice()}))],difficulty:t,boardNotes:[[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]]]}),e.resetHandler(),re(t)},c=e.name;return e.open?"isSettings"===c?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"close",onClick:e.onClose,children:"x"}),Object(l.jsxs)("div",{className:"side-modal",children:[Object(l.jsx)("div",{className:"side-modal-header",children:"Settings"}),Object(l.jsx)("div",{className:"side-modal-text",children:"Light / Dark Mode"}),Object(l.jsxs)("label",{class:"switch",children:[Object(l.jsx)("input",{type:"checkbox",onChange:function(t){return e.onChange(t)}}),Object(l.jsx)("span",{class:"slider"})]})]})]})}):"isNewGame"===c?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"close",onClick:e.onClose,children:"x"}),Object(l.jsxs)("div",{className:"side-modal",children:[Object(l.jsx)("div",{className:"side-modal-header",children:"New Game"}),Object(l.jsx)("button",{className:"new-game-modal-btn",onClick:function(e){a("Beginner")},children:"Beginner"}),Object(l.jsx)("button",{className:"new-game-modal-btn",onClick:function(e){a("Intermediate")},children:"Intermediate"}),Object(l.jsx)("button",{className:"new-game-modal-btn",onClick:function(e){a("Advanced")},children:"Advanced"})]})]})}):"isWin"===c?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"page-modal",children:[Object(l.jsx)("button",{className:"close",onClick:e.onClose,children:"x"}),Object(l.jsx)("div",{className:"page-modal-header",children:"YOU WIN!"}),Object(l.jsxs)("div",{className:"page-modal-text",children:["Board complete in"," ",("0"+Math.floor(e.time/60%60)).slice(-2),":",("0"+Math.floor(e.time%60)).slice(-2),"!"]}),Object(l.jsx)("img",{src:ae,alt:"pepe scrappy win",className:"pepe-scrap-win",draggable:"false"})]})})}):void 0:null}function se(e){var t=Object(r.useState)(0),n=Object(o.a)(t,2),a=n[0],c=n[1],s=b(),u=Object(o.a)(s,2),d=u[0],j=u[1],v=Object(r.useState)(!1),p=Object(o.a)(v,2),N=p[0],x=p[1],w=Object(r.useState)(!1),S=Object(o.a)(w,2),E=S[0],y=S[1],k=Object(r.useState)(!1),T=Object(o.a)(k,2),C=T[0],A=T[1],I=d.isSolved,L=d.boardState,_=d.solvedBoardState,B=d.undoState,M=d.selectedTile,H=d.initBoardState,G=d.difficulty,U=d.isNotesMode,D=d.remainingHints,V=d.boardNotes;Object(r.useEffect)((function(){var e=null;return!1===I?e=setInterval((function(){c((function(e){return e+1}))}),1e3):(clearInterval(e),A(!0)),function(){clearInterval(e)}}),[I]);return Object(l.jsxs)("div",{className:"side-controls",children:[Object(l.jsxs)("div",{className:"timer-container",children:[Object(l.jsx)("div",{className:"timer-item",children:G}),Object(l.jsx)("div",{className:"timer-item",children:Object(l.jsx)(g,{time:a})})]}),Object(l.jsxs)("div",{className:"controls-container",children:[Object(l.jsx)(ce,{name:"isWin",open:C,onClose:function(){return A(!1)},time:a}),Object(l.jsx)("button",{className:"undo-btn",onClick:function(e){!function(){var e=B.map((function(e){return e.slice()}));if(B.length>1){e.pop();var t=e.slice(e.length-1),n=J(t[0]);e[0]=H.map((function(e){return e.slice()})),j({type:h.UNDO_MOVE,boardState:t[0],undoState:e,remainingNums:n})}}()},children:"Undo"}),Object(l.jsx)("button",{className:"hint-btn",onClick:function(e){!function(){if(0!==D){for(var e=Object(i.a)(L),t=0,n=!1,r=0;r<9&&1!==t;r++)for(var a=0;a<9;a++)if(0!==e[r][a]&&e[r][a]!==_[r][a]){e[r][a]=_[r][a],t=1,n=!0;break}if(t=0,!1===n)for(r=0;r<9&&1!==t;r++)for(a=0;a<9;a++)if(0===e[r][a]){e[r][a]=_[r][a],t=1;break}var c=J(e);j({type:h.GIVE_HINT,boardState:e,remainingNums:c,remainingHints:D-1})}}()},children:"Hint"}),Object(l.jsx)("button",{className:f("notes-btn",U?"notes-on":"notes-off"),onClick:function(e){j({type:h.NOTES_TOGGLE,isNotesMode:!U})},children:"Notes"}),Object(l.jsx)("button",{className:"eraser-btn",onClick:function(e){!function(){if(null!==M.row&&!O(M,H)){var e=Object(i.a)(L),t=Object(i.a)(V),n=m(M.row);e[n-1][parseInt(M.col)-1]=0,t[n-1][parseInt(M.col)-1]=[!1,!1,!1,!1,!1,!1,!1,!1,!1];var r=J(e);j({type:h.ERASE_TILE,boardState:e,remainingNums:r,selectedTile:{row:M.row,col:M.col,unit:M.unit,value:0},boardNotes:t})}}()},children:"Eraser"}),Object(l.jsx)("button",{className:"new-game-btn",onClick:function(){return y(!0)},children:"New Game"}),Object(l.jsx)(ce,{name:"isNewGame",open:E,onClose:function(){return y(!1)},resetHandler:function(){return c(0)}}),Object(l.jsx)("button",{className:"settings-btn",onClick:function(){return x(!0)},children:"Settings"}),Object(l.jsx)(ce,{name:"isSettings",onChange:function(t){return e.onChange(t)},open:N,onClose:function(){return x(!1)}})]})]})}var ie=n.p+"static/media/pepeScrap.f374ebdc.png",oe=n(9);function le(e){e&&(e.stopPropagation?e.stopPropagation():window.event&&(window.event.cancelBubble=!0))}var ue=["INPUT","TEXTAREA"],de=function(e,t){switch(t.type){case"set-key-down":return Object(y.a)(Object(y.a)({},e),{},Object(oe.a)({},t.key,!0));case"set-key-up":return Object(y.a)(Object(y.a)({},e),{},Object(oe.a)({},t.key,!1));case"reset-keys":return Object(y.a)({},t.data);default:return e}},be=function(e,t,n){if(!Array.isArray(e))throw new Error("The first parameter to `useKeyboardShortcut` must be an ordered array of `KeyboardEvent.key` strings.");if(!e.length)throw new Error("The first parameter to `useKeyboardShortcut` must contain atleast one `KeyboardEvent.key` string.");if(!t||"function"!==typeof t)throw new Error("The second parameter to `useKeyboardShortcut` must be a function that will be envoked when the keys are pressed.");var a=(n||{}).overrideSystem,c=e.reduce((function(e,t){return e[t.toLowerCase()]=!1,e}),{}),s=Object(r.useReducer)(de,c),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(r.useCallback)((function(e){return function(t){var n=e.toLowerCase();if(!t.repeat&&!ue.includes(t.target.tagName)&&n===t.key.toLowerCase()&&void 0!==l[n])return a&&(t.preventDefault(),le(t)),u({type:"set-key-down",key:n}),!1}}),[l,a]),b=Object(r.useCallback)((function(e){return function(t){var n=e.toLowerCase();if(!ue.includes(t.target.tagName)&&t.key.toLowerCase()===n&&void 0!==l[n])return a&&(t.preventDefault(),le(t)),u({type:"set-key-up",key:n}),!1}}),[l,a]);Object(r.useEffect)((function(){Object.values(l).filter((function(e){return!e})).length?u({type:null}):(t(l),u({type:"reset-keys",data:c}))}),[t,l]),Object(r.useEffect)((function(){return e.forEach((function(e){return window.addEventListener("keydown",d(e))})),function(){return e.forEach((function(e){return window.removeEventListener("keydown",d(e))}))}}),[]),Object(r.useEffect)((function(){return e.forEach((function(e){return window.addEventListener("keyup",b(e))})),function(){return e.forEach((function(e){return window.removeEventListener("keyup",b(e))}))}}),[])},je=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],c=b(),s=Object(o.a)(c,2),u=s[0],d=s[1],j=u.boardState,v=u.solvedBoardState,p=u.selectedTile,g=u.initBoardState,w=u.isNotesMode,S=u.boardNotes;Object(r.useEffect)((function(){Z(te)}),[]);var E=function(e){var t=Object(i.a)(j);if(!O(p,g)){t[m(p.row)-1][parseInt(p.col)-1]=e;var n=k(t),r=J(t);d({type:h.UPDATE_TILE_VALUE,boardState:t,remainingNums:r,selectedTile:{row:p.row,col:p.col,unit:p.unit,value:e},isSolved:n})}},y=function(e){var t=m(p.row),n=Object(i.a)(S);n[t-1][p.col-1][e]=!n[t-1][p.col-1][e],d({type:h.UPDATE_NOTES,boardNotes:n})},k=function(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++)if(e[t][n]!==v[t][n])return!1;return!0},T=function(e){null===p.row||w?null!==p.row&&w&&y(e-1):E(e)};return be(["1"],(function(){return T(1)}),{overrideSystem:!1}),be(["2"],(function(){return T(2)}),{overrideSystem:!1}),be(["3"],(function(){return T(3)}),{overrideSystem:!1}),be(["4"],(function(){return T(4)}),{overrideSystem:!1}),be(["5"],(function(){return T(5)}),{overrideSystem:!1}),be(["6"],(function(){return T(6)}),{overrideSystem:!1}),be(["7"],(function(){return T(7)}),{overrideSystem:!1}),be(["8"],(function(){return T(8)}),{overrideSystem:!1}),be(["9"],(function(){return T(9)}),{overrideSystem:!1}),Object(l.jsx)("div",{className:n?"theme-light":"theme-dark",children:Object(l.jsx)("div",{className:f("flex content-center justify-center App bg-primary",n?"App-bg-light":"App-bg-dark"),children:Object(l.jsxs)("div",{className:"flex-auto w-2/3 justify-self-center max-w-2/3 App-container bg-secondary",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("div",{className:"text-8xl tracking-header header-title text-bold text-primary",children:"SUDOKU"})}),Object(l.jsxs)("div",{className:"Game-container",children:[Object(l.jsx)(N,{}),Object(l.jsx)(x,{btnHandler:function(e){w?y(e-1):E(e)}}),Object(l.jsx)(se,{onChange:function(e){return a(!n)}}),Object(l.jsx)("div",{className:"image-container",children:Object(l.jsx)("img",{src:ie,alt:"pepe scrappy",className:"pepe-scrap",draggable:"false"})})]})]})})})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{initialState:ne,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.SELECT_TILE:return Object(y.a)(Object(y.a)({},e),{},{selectedTile:t.selectedTile});case h.UPDATE_TILE_VALUE:return Object(y.a)(Object(y.a)({},e),{},{boardState:t.boardState,remainingNums:t.remainingNums,selectedTile:t.selectedTile,isSolved:t.isSolved,undoState:e.undoState.concat([t.boardState.map((function(e){return e.slice()}))])});case h.UNDO_MOVE:return Object(y.a)(Object(y.a)({},e),{},{boardState:t.boardState,undoState:t.undoState,remainingNums:t.remainingNums});case h.NOTES_TOGGLE:return Object(y.a)(Object(y.a)({},e),{},{isNotesMode:t.isNotesMode});case h.ERASE_TILE:return Object(y.a)(Object(y.a)({},e),{},{boardState:t.boardState,remainingNums:t.remainingNums,selectedTile:t.selectedTile,boardNotes:t.boardNotes});case h.GIVE_HINT:return Object(y.a)(Object(y.a)({},e),{},{boardState:t.boardState,remainingNums:t.remainingNums,remainingHints:t.remainingHints});case h.NEW_GAME:return{boardState:t.boardState.map((function(e){return e.slice()})),initBoardState:t.initBoardState.map((function(e){return e.slice()})),solvedBoardState:t.solvedBoardState.map((function(e){return e.slice()})),removedVals:t.removedVals,selectedTile:t.selectedTile,remainingNums:t.remainingNums,isSolved:!1,isNotesMode:!1,undoState:t.undoState,difficulty:t.difficulty,boardNotes:t.boardNotes,remainingHints:3};case h.UPDATE_NOTES:return Object(y.a)(Object(y.a)({},e),{},{boardNotes:t.boardNotes.map((function(e){return e.slice()}))})}},children:Object(l.jsx)(je,{})})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.ac7eecf8.chunk.js.map