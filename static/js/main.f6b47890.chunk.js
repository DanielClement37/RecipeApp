(this["webpackJsonpsudoku-game"]=this["webpackJsonpsudoku-game"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(13),s=n.n(c),i=(n(19),n(5)),o=n(1),l=(n(20),n(21),n(22),n(23),n(24),n(0)),u=Object(r.createContext)();u.displayName="Store";var d,b=function(){return Object(r.useContext)(u)},j=function(e){var t=e.children,n=e.initialState,a=e.reducer,c=Object(r.useReducer)(a,n),s=Object(o.a)(c,2),i=s[0],d=s[1];return Object(l.jsx)(u.Provider,{value:[i,d],displayName:"Game Context",children:t})},f=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")},m=function(e){switch(e){case"A":return 1;case"B":return 2;case"C":return 3;case"D":return 4;case"E":return 5;case"F":return 6;case"G":return 7;case"H":return 8;case"I":return 9}},O=function(e,t){return 0!==t[m(e.row)-1][parseInt(e.col)-1]},h=function(e){var t=b(),n=Object(o.a)(t,1)[0],r=n.selectedTile,a=n.initBoardState,c=n.boardNotes,s=0===e.value?" ":e.value,i={row:e.row,col:e.col},u=m(e.row);return 0===e.value?Object(l.jsx)("div",{className:"tile",id:e.tileId,onClick:function(t){e.selectTileHandler(e)},children:Object(l.jsx)("div",{className:f("value-container",e.row===r.row&&e.col===r.col&&"selected-tile-class",e.row===r.row&&"selected-row-class",e.col===r.col&&"selected-col-class",0!==e.value&&e.value===r.value?"selected-value-class":""),children:Object(l.jsx)("table",{className:"cell-hints",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][0]?"selected-hint":""),children:"1"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][1]?"selected-hint":""),children:"2"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][2]?"selected-hint":""),children:"3"})]})," ",Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][3]?"selected-hint":""),children:"4"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][4]?"selected-hint":""),children:"5"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][5]?"selected-hint":""),children:"6"})]})," ",Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][6]?"selected-hint":""),children:"7"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][7]?"selected-hint":""),children:"8"})," ",Object(l.jsx)("td",{className:f("hint-item",c[u-1][e.col-1][8]?"selected-hint":""),children:"9"})]})]})})})}):Object(l.jsx)("div",{className:"tile",id:e.tileId,onClick:function(t){e.selectTileHandler(e)},children:Object(l.jsx)("div",{className:f("value-container",O(i,a)?"board-tile":"user-tile",e.row===r.row&&e.col===r.col&&"selected-tile-class",e.row===r.row&&"selected-row-class",e.col===r.col&&"selected-col-class",0!==e.value&&e.value===r.value?"selected-value-class":""),children:s})})},v={SELECT_TILE:"SELECT_TILE",UPDATE_TILE_VALUE:"UPDATE_TILE_VALUE",UNDO_MOVE:"UNDO_MOVE",NOTES_TOGGLE:"NOTES_TOGGLE",ERASE_TILE:"ERASE_TILE",NEW_GAME:"NEW_GAME",UPDATE_NOTES:"UPDATE_NOTES"},p=function(e){var t=b(),n=Object(o.a)(t,2),r=n[0],a=n[1],c=r.boardState,s=r.selectedTile,i=function(t){a({type:v.SELECT_TILE,selectedTile:{row:t.row,col:t.col,value:u(t.row,t.col),unit:e.id}})},u=function(e,t){var n=m(e);return c[n-1][t-1]};return Object(l.jsx)("div",{id:e.id,className:f("board-unit",e.id===s.unit&&"selected-unit-class"),children:function(){for(var t=[],n=0;n<3;n++)for(var r=e.rows.substring(n,n+1),a=0;a<3;a++){var c=e.cols.substring(a,a+1),s="tile"+r+c,o=u(r,c);t.push(Object(l.jsx)(h,{row:r,col:c,tileId:s,value:o,selectTileHandler:i}))}return t}()},e.id)},x=function(e){return Object(l.jsxs)("div",{className:"Board-container",children:[Object(l.jsx)(p,{id:"unit1",cols:"123",rows:"ABC",ref:e.ref}),Object(l.jsx)(p,{id:"unit2",cols:"456",rows:"ABC",ref:e.ref}),Object(l.jsx)(p,{id:"unit3",cols:"789",rows:"ABC",ref:e.ref}),Object(l.jsx)(p,{id:"unit4",cols:"123",rows:"DEF",ref:e.ref}),Object(l.jsx)(p,{id:"unit5",cols:"456",rows:"DEF",ref:e.ref}),Object(l.jsx)(p,{id:"unit6",cols:"789",rows:"DEF",ref:e.ref}),Object(l.jsx)(p,{id:"unit7",cols:"123",rows:"GHI",ref:e.ref}),Object(l.jsx)(p,{id:"unit8",cols:"456",rows:"GHI",ref:e.ref}),Object(l.jsx)(p,{id:"unit9",cols:"789",rows:"GHI",ref:e.ref})]})},N=(n(26),function(e){var t=b(),n=Object(o.a)(t,1)[0].remainingNums;return Object(l.jsxs)("div",{className:"NumPad",children:[Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(1)},children:[Object(l.jsx)("span",{className:"number-span",children:"1"}),Object(l.jsx)("span",{className:"remaining-span",children:n[0]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(2)},children:[Object(l.jsx)("span",{className:"number-span",children:"2"}),Object(l.jsx)("span",{className:"remaining-span",children:n[1]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(3)},children:[Object(l.jsx)("span",{className:"number-span",children:"3"}),Object(l.jsx)("span",{className:"remaining-span",children:n[2]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(4)},children:[Object(l.jsx)("span",{className:"number-span",children:"4"}),Object(l.jsx)("span",{className:"remaining-span",children:n[3]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(5)},children:[Object(l.jsx)("span",{className:"number-span",children:"5"}),Object(l.jsx)("span",{className:"remaining-span",children:n[4]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(6)},children:[Object(l.jsx)("span",{className:"number-span",children:"6"}),Object(l.jsx)("span",{className:"remaining-span",children:n[5]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(7)},children:[Object(l.jsx)("span",{className:"number-span",children:"7"}),Object(l.jsx)("span",{className:"remaining-span",children:n[6]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(8)},children:[Object(l.jsx)("span",{className:"number-span",children:"8"}),Object(l.jsx)("span",{className:"remaining-span",children:n[7]})]}),Object(l.jsxs)("button",{className:"circle-btn",onClick:function(t){e.btnHandler(9)},children:[Object(l.jsx)("span",{className:"number-span",children:"9"}),Object(l.jsx)("span",{className:"remaining-span",children:n[8]})]})]})}),g=(n(27),function(e){return Object(l.jsxs)("div",{className:"timer",children:[Object(l.jsxs)("span",{className:"digits",children:[("0"+Math.floor(e.time/60%60)).slice(-2),":"]}),Object(l.jsx)("span",{className:"digits",children:("0"+Math.floor(e.time%60)).slice(-2)})]})}),w=(n(11),n(12),n(4)),S=n.n(w),E=n(6),y=n(3),k=n(14),T=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],C=[[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]],[[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1]]];function A(e,t,n,r){return!!(function(e,t,n){for(var r=0;r<9;r++)if(e[t][r]===n)return!1;return!0}(e,t,r)&&function(e,t,n){for(var r=0;r<9;r++)if(e[r][t]===n)return!1;return!0}(e,n,r)&&function(e,t,n,r){var a=Math.floor(t/3);a*=3;var c=Math.floor(n/3);c*=3;for(var s=a;s<a+3;s++)for(var i=c;i<c+3;i++)if(e[s][i]===r)return!1;return!0}(e,t,n,r))}var B=[1,2,3,4,5,6,7,8,9];function I(e){for(var t=Object(i.a)(e),n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),a=[t[r],t[n]];t[n]=a[0],t[r]=a[1]}return t}function L(e,t){return e=Math.ceil(e),t+=1,t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function _(e){var t=function(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[t].length;n++)if(0===e[t][n])return[t,n];return[-1,-1]}(e),n=t[0],r=t[1];if(-1===n)return e;var a,c,s=I(B),i=Object(k.a)(s);try{for(i.s();!(c=i.n()).done;){if(a=c.value,++d>2e7)throw new Error("Recursion Timeout");if(A(e,n,r,a)){if(e[n][r]=a,_(e))return e;e[n][r]=0}}}catch(o){i.e(o)}finally{i.f()}return!1}function M(e,t){var n=function(e,t){for(var n=0;n<t.length;n++)if(0===e[t[n].row][t[n].col])return{row:t[n].row,col:t[n].col};return!1}(e,t);if(!n)return e;for(var r=1;r<=9;r++){if(++d>6e7)throw new Error("Removal Timeout");if(A(e,n.row,n.col,r)){if(e[n.row][n.col]=r,M(e,t))return e;e[n.row][n.col]=0}}return!1}var H=function(e,t){for(var n=[],r=I(function(e,t){var n=t-e+1;return Array.from({length:n},(function(t,n){return e+n}))}(0,80));n.length<t;){var a=r.pop();if(void 0===a)throw new Error("Impossible Game");var c=Math.floor(a/9),s=a%9;if(e[c])if(0!==e[c][s])n.push({row:c,col:s,val:e[c][s]}),e[c][s]=0,G(JSON.parse(JSON.stringify(e)))&&(e[c][s]=n.pop().val)}return[n,e]};function G(e){for(var t,n,r=[],a=function(e){for(var t=[],n=0;n<9;n++)for(var r=0;r<9;r++)0===e[n][r]&&t.push({row:n,col:r});return t}(e),c=0;c<a.length;c++){var s=(t=Object(i.a)(a)).splice(c,1);if(t.unshift(s[0]),n=M(JSON.parse(JSON.stringify(e)),t),r.push(n.join()),Array.from(new Set(r)).length>1)return!0}return!1}var U=function(e){var t=JSON.parse(JSON.stringify(T));return _(t),t};function D(){var e=L(36,46);e=81-e;try{d=0;var t=U(),n=H(JSON.parse(JSON.stringify(t)),e),r=Object(o.a)(n,2);return[r[0],r[1],t]}catch(a){return D()}}function V(){var e=L(32,35);e=81-e;try{d=0;var t=U(),n=H(JSON.parse(JSON.stringify(t)),e),r=Object(o.a)(n,2);return[r[0],r[1],t]}catch(a){return V()}}function J(){var e=L(28,31);e=81-e;try{d=0;var t=U(),n=H(JSON.parse(JSON.stringify(t)),e),r=Object(o.a)(n,2);return[r[0],r[1],t]}catch(a){return J()}}function P(){var e=L(17,27);e=81-e;try{d=0;var t=U(),n=H(JSON.parse(JSON.stringify(t)),e),r=Object(o.a)(n,2);return[r[0],r[1],t]}catch(a){return P()}}function R(e){var t,n,r=9,a=9,c=9,s=9,i=9,o=9,l=9,u=9,d=9;for(t=0;t<9;t++)for(n=0;n<9;n++)1===e[t][n]&&r--,2===e[t][n]&&a--,3===e[t][n]&&c--,4===e[t][n]&&s--,5===e[t][n]&&i--,6===e[t][n]&&o--,7===e[t][n]&&l--,8===e[t][n]&&u--,9===e[t][n]&&d--;return[r,a,c,s,i,o,l,u,d]}var W,F,K,X,Y,q,z,Q,Z,$,ee,te,ne=function(){var e=Object(E.a)(S.a.mark((function e(){var t,n,r,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:return a=e.sent,c=Object(o.a)(a,3),t=c[0],n=c[1],r=c[2],e.abrupt("return",[t,n,r]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(E.a)(S.a.mark((function e(){var t,n,r,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return a=e.sent,c=Object(o.a)(a,3),t=c[0],n=c[1],r=c[2],e.abrupt("return",[t,n,r]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(E.a)(S.a.mark((function e(t){var n,r,a,c,s,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<5)){e.next=14;break}return r=void 0,a=void 0,c=void 0,e.next=5,ne();case 5:s=e.sent,i=Object(o.a)(s,3),r=i[0],a=i[1],c=i[2],t.push({removedVals:r,startingBoard:a,finalBoard:c});case 11:n++,e.next=1;break;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(E.a)(S.a.mark((function e(t){var n,r,a,c,s,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<5)){e.next=14;break}return r=void 0,a=void 0,c=void 0,e.next=5,re();case 5:s=e.sent,i=Object(o.a)(s,3),r=i[0],a=i[1],c=i[2],t.push({removedVals:r,startingBoard:a,finalBoard:c});case 11:n++,e.next=1;break;case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=D(),t=Object(o.a)(e,3);W=t[0],F=t[1],K=t[2]},ie=function(){var e=V(),t=Object(o.a)(e,3);X=t[0],Y=t[1],q=t[2]},oe=[],le=[];se(),ie();var ue={boardState:F,initBoardState:F.map((function(e){return e.slice()})),solvedBoardState:K,removedVals:W,selectedTile:{row:null,col:null,value:null,unit:null},remainingNums:R(F),isSolved:!1,isNotesMode:!1,undoState:[F.map((function(e){return e.slice()}))],difficulty:"Beginner",boardNotes:C,remainingHints:3},de=function(){var e=Object(E.a)(S.a.mark((function e(t){var n,r,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="Beginner"===e.t0?3:"Intermediate"===e.t0?5:"Advanced"===e.t0?7:"Expert"===e.t0?16:25;break;case 3:return se(),e.abrupt("break",26);case 5:return ie(),e.abrupt("break",26);case 7:return e.next=9,ne();case 9:return n=e.sent,r=Object(o.a)(n,3),z=r[0],Q=r[1],Z=r[2],oe.push({removedVals:z,startingBoard:Q,finalBoard:Z}),e.abrupt("break",26);case 16:return e.next=18,re();case 18:return a=e.sent,c=Object(o.a)(a,3),$=c[0],ee=c[1],te=c[2],le.push({removedVals:$,startingBoard:ee,finalBoard:te}),e.abrupt("break",26);case 25:return e.abrupt("break",26);case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=n.p+"static/media/pepeScrapWin.578c277b.png";function je(e){var t=b(),n=Object(o.a)(t,2),r=(n[0],n[1]),a=function(t){var n=function(e){switch(e){case"Beginner":return[W,F,K];case"Intermediate":return[X,Y,q];case"Advanced":var t=oe.shift();return z=t.removedVals,Q=t.startingBoard,Z=t.finalBoard,[z,Q,Z];case"Expert":var n=le.shift();return $=n.removedVals,ee=n.startingBoard,te=n.finalBoard,[$,ee,te]}}(t),a=Object(o.a)(n,3),c=a[0],s=a[1],i=a[2];r({type:v.NEW_GAME,boardState:s,initBoardState:s.map((function(e){return e.slice()})),solvedBoardState:i.map((function(e){return e.slice()})),removedVals:c,selectedTile:{row:null,col:null,value:null,unit:null},remainingNums:R(s),undoState:[s.map((function(e){return e.slice()}))],difficulty:t}),e.resetHandler(),de(t)},c=e.name;return e.open?"isSettings"===c?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"close",onClick:e.onClose,children:"x"}),Object(l.jsxs)("div",{className:"side-modal",children:[Object(l.jsx)("div",{className:"side-modal-header",children:"Settings"}),Object(l.jsx)("div",{className:"side-modal-text",children:"Error Limits"}),Object(l.jsxs)("label",{class:"switch",children:[Object(l.jsx)("input",{type:"checkbox"}),Object(l.jsx)("span",{class:"slider"})]}),Object(l.jsx)("div",{className:"side-modal-text",children:"Auto - Detect Mistakes"}),Object(l.jsxs)("label",{class:"switch",children:[Object(l.jsx)("input",{type:"checkbox"}),Object(l.jsx)("span",{class:"slider"})]}),Object(l.jsx)("div",{className:"side-modal-text",children:"Auto - Update Hints"}),Object(l.jsxs)("label",{class:"switch",children:[Object(l.jsx)("input",{type:"checkbox"}),Object(l.jsx)("span",{class:"slider"})]}),Object(l.jsx)("div",{className:"side-modal-text",children:"Light / Dark Mode"}),Object(l.jsxs)("label",{class:"switch",children:[Object(l.jsx)("input",{type:"checkbox",onChange:function(t){return e.onChange(t)}}),Object(l.jsx)("span",{class:"slider"})]})]})]})}):"isNewGame"===c?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"close",onClick:e.onClose,children:"x"}),Object(l.jsxs)("div",{className:"side-modal",children:[Object(l.jsx)("div",{className:"side-modal-header",children:"New Game"}),Object(l.jsx)("button",{className:"new-game-modal-btn",onClick:function(e){a("Beginner")},children:"Beginner"}),Object(l.jsx)("button",{className:"new-game-modal-btn",onClick:function(e){a("Intermediate")},children:"Intermediate"}),Object(l.jsx)("button",{className:"new-game-modal-btn",onClick:function(e){a("Advanced")},children:"Advanced"}),Object(l.jsx)("button",{className:"new-game-modal-btn",onClick:function(e){a("Expert")},children:"Expert"})]})]})}):"isWin"===c?Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"page-modal",children:[Object(l.jsx)("button",{className:"close",onClick:e.onClose,children:"x"}),Object(l.jsx)("div",{className:"page-modal-header",children:"YOU WIN!"}),Object(l.jsxs)("div",{className:"page-modal-text",children:["Board complete in"," ",("0"+Math.floor(e.time/60%60)).slice(-2),":",("0"+Math.floor(e.time%60)).slice(-2),"!"]}),Object(l.jsx)("img",{src:be,alt:"pepe scrappy win",className:"pepe-scrap-win",draggable:"false"})]})})}):void 0:null}function fe(e){var t=Object(r.useState)(0),n=Object(o.a)(t,2),a=n[0],c=n[1],s=b(),u=Object(o.a)(s,2),d=u[0],j=u[1],h=Object(r.useState)(!1),p=Object(o.a)(h,2),x=p[0],N=p[1],w=Object(r.useState)(!1),S=Object(o.a)(w,2),E=S[0],y=S[1],k=Object(r.useState)(!1),T=Object(o.a)(k,2),C=T[0],A=T[1],B=d.isSolved,I=d.boardState,L=d.solvedBoardState,_=d.undoState,M=d.selectedTile,H=d.initBoardState,G=d.difficulty,U=d.isNotesMode,D=d.remainingHints;Object(r.useEffect)((function(){var e=null;return!1===B?e=setInterval((function(){c((function(e){return e+1}))}),1e3):(clearInterval(e),A(!0)),function(){clearInterval(e)}}),[B]);return Object(l.jsxs)("div",{className:"side-controls",children:[Object(l.jsxs)("div",{className:"timer-container",children:[Object(l.jsx)("div",{className:"timer-item",children:G}),Object(l.jsx)("div",{className:"timer-item",children:Object(l.jsx)(g,{time:a})})]}),Object(l.jsxs)("div",{className:"controls-container",children:[Object(l.jsx)(je,{name:"isWin",open:C,onClose:function(){return A(!1)},time:a}),Object(l.jsx)("button",{className:"undo-btn",onClick:function(e){!function(){var e=_.map((function(e){return e.slice()}));if(_.length>1){e.pop();var t=e.slice(e.length-1),n=R(t[0]);e[0]=H.map((function(e){return e.slice()})),j({type:v.UNDO_MOVE,boardState:t[0],undoState:e,remainingNums:n})}}()},children:"Undo"}),Object(l.jsx)("button",{className:"hint-btn",onClick:function(e){!function(){if(0!==D){for(var e=Object(i.a)(I),t=0,n=!1,r=0;r<9&&1!==t;r++)for(var a=0;a<9;a++)if(0!==e[r][a]&&e[r][a]!==L[r][a]){e[r][a]=L[r][a],t=1,n=!0;break}if(t=0,!1===n)for(r=0;r<9&&1!==t;r++)for(a=0;a<9;a++)if(0===e[r][a]){e[r][a]=L[r][a],t=1;break}var c=R(e);j({type:v.GIVE_HINT,boardState:e,remainingNums:c,remainingHints:D-1})}}()},children:"Hint"}),Object(l.jsx)("button",{className:f("notes-btn",U?"notes-on":"notes-off"),onClick:function(e){j({type:v.NOTES_TOGGLE,isNotesMode:!U})},children:"Notes"}),Object(l.jsx)("button",{className:"eraser-btn",onClick:function(e){!function(){if(null!==M.row&&!O(M,H)){var e=Object(i.a)(I);e[m(M.row)-1][parseInt(M.col)-1]=0;var t=R(e);j({type:v.ERASE_TILE,boardState:e,remainingNums:t,selectedTile:{row:M.row,col:M.col,unit:M.unit,value:0}})}}()},children:"Eraser"}),Object(l.jsx)("button",{className:"new-game-btn",onClick:function(){return y(!0)},children:"New Game"}),Object(l.jsx)(je,{name:"isNewGame",open:E,onClose:function(){return y(!1)},resetHandler:function(){return c(0)}}),Object(l.jsx)("button",{className:"settings-btn",onClick:function(){return N(!0)},children:"Settings"}),Object(l.jsx)(je,{name:"isSettings",onChange:function(t){return e.onChange(t)},open:x,onClose:function(){return N(!1)}})]})]})}var me=n.p+"static/media/pepeScrap.f374ebdc.png",Oe=n(9);function he(e){e&&(e.stopPropagation?e.stopPropagation():window.event&&(window.event.cancelBubble=!0))}var ve=["INPUT","TEXTAREA"],pe=function(e,t){switch(t.type){case"set-key-down":return Object(y.a)(Object(y.a)({},e),{},Object(Oe.a)({},t.key,!0));case"set-key-up":return Object(y.a)(Object(y.a)({},e),{},Object(Oe.a)({},t.key,!1));case"reset-keys":return Object(y.a)({},t.data);default:return e}},xe=function(e,t,n){if(!Array.isArray(e))throw new Error("The first parameter to `useKeyboardShortcut` must be an ordered array of `KeyboardEvent.key` strings.");if(!e.length)throw new Error("The first parameter to `useKeyboardShortcut` must contain atleast one `KeyboardEvent.key` string.");if(!t||"function"!==typeof t)throw new Error("The second parameter to `useKeyboardShortcut` must be a function that will be envoked when the keys are pressed.");var a=(n||{}).overrideSystem,c=e.reduce((function(e,t){return e[t.toLowerCase()]=!1,e}),{}),s=Object(r.useReducer)(pe,c),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(r.useCallback)((function(e){return function(t){var n=e.toLowerCase();if(!t.repeat&&!ve.includes(t.target.tagName)&&n===t.key.toLowerCase()&&void 0!==l[n])return a&&(t.preventDefault(),he(t)),u({type:"set-key-down",key:n}),!1}}),[l,a]),b=Object(r.useCallback)((function(e){return function(t){var n=e.toLowerCase();if(!ve.includes(t.target.tagName)&&t.key.toLowerCase()===n&&void 0!==l[n])return a&&(t.preventDefault(),he(t)),u({type:"set-key-up",key:n}),!1}}),[l,a]);Object(r.useEffect)((function(){Object.values(l).filter((function(e){return!e})).length?u({type:null}):(t(l),u({type:"reset-keys",data:c}))}),[t,l]),Object(r.useEffect)((function(){return e.forEach((function(e){return window.addEventListener("keydown",d(e))})),function(){return e.forEach((function(e){return window.removeEventListener("keydown",d(e))}))}}),[]),Object(r.useEffect)((function(){return e.forEach((function(e){return window.addEventListener("keyup",b(e))})),function(){return e.forEach((function(e){return window.removeEventListener("keyup",b(e))}))}}),[])},Ne=function(){var e=Object(r.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],c=b(),s=Object(o.a)(c,2),u=s[0],d=s[1],j=u.boardState,h=u.solvedBoardState,p=u.selectedTile,g=u.initBoardState,w=u.isNotesMode,S=u.boardNotes;Object(r.useEffect)((function(){ae(oe),ce(le)}),[]);var E=function(e){var t=Object(i.a)(j);if(!O(p,g)){t[m(p.row)-1][parseInt(p.col)-1]=e;var n=k(t),r=R(t);d({type:v.UPDATE_TILE_VALUE,boardState:t,remainingNums:r,selectedTile:{row:p.row,col:p.col,unit:p.unit,value:e},isSolved:n})}},y=function(e){var t=m(p.row),n=Object(i.a)(S);n[t-1][p.col-1][e]=!n[t-1][p.col-1][e],d({type:v.UPDATE_NOTES,boardNotes:n})},k=function(e){for(var t=0;t<9;t++)for(var n=0;n<9;n++)if(e[t][n]!==h[t][n])return!1;return!0},T=function(e){null===p.row||w?null!==p.row&&w&&y(e-1):E(e)};return xe(["1"],(function(){return T(1)}),{overrideSystem:!1}),xe(["2"],(function(){return T(2)}),{overrideSystem:!1}),xe(["3"],(function(){return T(3)}),{overrideSystem:!1}),xe(["4"],(function(){return T(4)}),{overrideSystem:!1}),xe(["5"],(function(){return T(5)}),{overrideSystem:!1}),xe(["6"],(function(){return T(6)}),{overrideSystem:!1}),xe(["7"],(function(){return T(7)}),{overrideSystem:!1}),xe(["8"],(function(){return T(8)}),{overrideSystem:!1}),xe(["9"],(function(){return T(9)}),{overrideSystem:!1}),Object(l.jsx)("div",{className:n?"theme-light":"theme-dark",children:Object(l.jsx)("div",{className:f("flex content-center justify-center App bg-primary",n?"App-bg-light":"App-bg-dark"),children:Object(l.jsxs)("div",{className:"flex-auto w-2/3 justify-self-center max-w-2/3 App-container bg-secondary",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("div",{className:"text-8xl tracking-header header-title text-bold text-primary",children:"SUDOKU"})}),Object(l.jsxs)("div",{className:"Game-container",children:[Object(l.jsx)(x,{}),Object(l.jsx)(N,{btnHandler:function(e){w?y(e-1):E(e)}}),Object(l.jsx)(fe,{onChange:function(e){return a(!n)}}),Object(l.jsx)("div",{className:"image-container",children:Object(l.jsx)("img",{src:me,alt:"pepe scrappy",className:"pepe-scrap",draggable:"false"})})]})]})})})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{initialState:ue,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.SELECT_TILE:return Object(y.a)(Object(y.a)({},e),{},{selectedTile:t.selectedTile});case v.UPDATE_TILE_VALUE:return Object(y.a)(Object(y.a)({},e),{},{boardState:t.boardState,remainingNums:t.remainingNums,selectedTile:t.selectedTile,isSolved:t.isSolved,undoState:e.undoState.concat([t.boardState.map((function(e){return e.slice()}))])});case v.UNDO_MOVE:return Object(y.a)(Object(y.a)({},e),{},{boardState:t.boardState,undoState:t.undoState,remainingNums:t.remainingNums});case v.NOTES_TOGGLE:return Object(y.a)(Object(y.a)({},e),{},{isNotesMode:t.isNotesMode});case v.ERASE_TILE:return Object(y.a)(Object(y.a)({},e),{},{boardState:t.boardState,remainingNums:t.remainingNums,selectedTile:t.selectedTile});case v.GIVE_HINT:return Object(y.a)(Object(y.a)({},e),{},{boardState:t.boardState,remainingNums:t.remainingNums,remainingHints:t.remainingHints});case v.NEW_GAME:return{boardState:t.boardState.map((function(e){return e.slice()})),initBoardState:t.initBoardState.map((function(e){return e.slice()})),solvedBoardState:t.solvedBoardState.map((function(e){return e.slice()})),removedVals:t.removedVals,selectedTile:t.selectedTile,remainingNums:t.remainingNums,isSolved:!1,isNotesMode:!1,undoState:t.undoState,difficulty:t.difficulty,boardNotes:C.map((function(e){return e.slice()})),remainingHints:3};case v.UPDATE_NOTES:return Object(y.a)(Object(y.a)({},e),{},{boardNotes:t.boardNotes.map((function(e){return e.slice()}))})}},children:Object(l.jsx)(Ne,{})})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.f6b47890.chunk.js.map