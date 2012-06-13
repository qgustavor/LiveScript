// prelude.ls 0.3.0
// Copyright (c) 2012 George Zahariev
// Released under the MIT License
// raw.github.com/gkz/prelude-ls/master/LICNSE
this.prelude=function(){function Wb(a,b){return a.length?function(){var c=b?b.concat():[];return c.push.apply(c,arguments)<a.length?Wb.call(this,a,c):a.apply(this,c)}:a}function Xb(a,b){var c=0,d=b.length>>>0;while(c<d)if(a===b[c++])return!0;return!1}function Yb(a,b){return function(){return a(b.apply(this,arguments))}}function Zb(a){return!a}function $b(a,b){var c={}.hasOwnProperty;for(var d in b)c.call(b,d)&&(a[d]=b[d]);return a}exports={};var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb,Ib,Jb,Kb,Lb,Mb,Nb,Ob,Pb,Qb,Rb,Sb,Tb,Ub={}.toString,Vb=[].slice;return exports.objToFunc=a=function(a){return function(b){return a[b]}},exports.each=b=Wb(function(a,b){var c,d,e;if(Ub.call(b).slice(8,-1)==="Object")for(d in b)c=b[d],a(c);else for(d=0,e=b.length;d<e;++d)c=b[d],a(c);return b}),exports.map=c=Wb(function(b,c){var d,e,f,g,h,i,j,k={};Ub.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=Ub.call(c).slice(8,-1);if(d==="Object"){for(e in c)f=c[e],k[e]=b(f);return k}h=[];for(i=0,j=c.length;i<j;++i)f=c[i],h.push(b(f));return g=h,d==="String"?g.join(""):g}),exports.filter=d=Wb(function(b,c){var d,e,f,g,h,i,j,k={};Ub.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=Ub.call(c).slice(8,-1);if(d==="Object"){for(e in c)f=c[e],b(f)&&(k[e]=f);return k}h=[];for(i=0,j=c.length;i<j;++i)f=c[i],b(f)&&h.push(f);return g=h,d==="String"?g.join(""):g}),exports.reject=e=Wb(function(b,c){var d,e,f,g,h,i,j,k={};Ub.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=Ub.call(c).slice(8,-1);if(d==="Object"){for(e in c)f=c[e],b(f)||(k[e]=f);return k}h=[];for(i=0,j=c.length;i<j;++i)f=c[i],b(f)||h.push(f);return g=h,d==="String"?g.join(""):g}),exports.find=f=Wb(function(b,c){var d,e,f;Ub.call(b).slice(8,-1)!=="Function"&&(b=a(b));if(Ub.call(c).slice(8,-1)==="Object")for(e in c){d=c[e];if(b(d))return d}else for(e=0,f=c.length;e<f;++e){d=c[e];if(b(d))return d}}),exports.pluck=g=Wb(function(a,b){var c,d,e,f,g=[];if(Ub.call(b).slice(8,-1)==="Object"){for(c in b)d=b[c],d[a]!=null&&(g[c]=d[a]);return g}for(e=0,f=b.length;e<f;++e)d=b[e],d[a]!=null&&g.push(d[a]);return g}),exports.head=i=exports.first=h=function(a){if(!a.length)return;return a.slice(0,1)},exports.tail=j=function(a){if(!a.length)return;return a.slice(1)},exports.last=k=function(a){if(!a.length)return;return a.slice(a.length-1)},exports.initial=l=function(a){if(!a.length)return;return a.slice(0,a.length-1)},exports.empty=m=function(a){var b;if(Ub.call(a).slice(8,-1)==="Object"){for(b in a)return!1;return!0}return!a.length},exports.values=n=function(a){var b,c,d=[];for(c in a)b=a[c],d.push(b);return d},exports.keys=o=function(a){var b,c=[];for(b in a)c.push(b);return c},exports.length=p=function(a){return Ub.call(a).slice(8,-1)==="Object"&&(a=n(a)),a.length},exports.cons=q=Wb(function(a,b){return Ub.call(b).slice(8,-1)==="String"?a+b:[a].concat(b)}),exports.append=r=Wb(function(a,b){return Ub.call(b).slice(8,-1)==="String"?a+b:a.concat(b)}),exports.join=s=Wb(function(a,b){return Ub.call(b).slice(8,-1)==="Object"&&(b=n(b)),b.join(a)}),exports.reverse=t=function(a){return Ub.call(a).slice(8,-1)==="String"?a.split("").reverse().join(""):a.slice().reverse()},exports.fold=v=exports.foldl=u=Wb(function(a,b,c){var d,e,f;if(Ub.call(c).slice(8,-1)==="Object")for(e in c)d=c[e],b=a(b,d);else for(e=0,f=c.length;e<f;++e)d=c[e],b=a(b,d);return b}),exports.fold1=x=exports.foldl1=w=Wb(function(a,b){return v(a,b[0],b.slice(1))}),exports.foldr=y=Wb(function(a,b,c){return v(a,b,c.reverse())}),exports.foldr1=z=Wb(function(a,b){return b.reverse(),v(a,b[0],b.slice(1))}),exports.andList=A=function(a){return v(function(a,b){return a&&b},!0,a)},exports.orList=B=function(a){return v(function(a,b){return a||b},!1,a)},exports.any=C=Wb(function(b,c){return Ub.call(b).slice(8,-1)!=="Function"&&(b=a(b)),v(function(a,c){return a||b(c)},!1,c)}),exports.all=D=Wb(function(b,c){return Ub.call(b).slice(8,-1)!=="Function"&&(b=a(b)),v(function(a,c){return a&&b(c)},!0,c)}),exports.unique=E=function(a){var b,c,d,e;b=[];if(Ub.call(a).slice(8,-1)==="Object")for(d in a)c=a[d],Xb(c,b)||b.push(c);else for(d=0,e=a.length;d<e;++d)c=a[d],Xb(c,b)||b.push(c);return Ub.call(a).slice(8,-1)==="String"?b.join(""):b},exports.sum=F=function(a){var b,c,d,e;b=0;if(Ub.call(a).slice(8,-1)==="Object")for(d in a)c=a[d],b+=c;else for(d=0,e=a.length;d<e;++d)c=a[d],b+=c;return b},exports.product=G=function(a){var b,c,d,e;b=1;if(Ub.call(a).slice(8,-1)==="Object")for(d in a)c=a[d],b*=c;else for(d=0,e=a.length;d<e;++d)c=a[d],b*=c;return b},exports.mean=I=exports.average=H=function(a){return F(a)/p(a)},exports.concat=J=function(a){return v(r,[],a)},exports.concatMap=K=Wb(function(a,b){return J(c(a,b))}),exports.listToObj=L=function(a){var b,c,d,e;b={};for(d=0,e=a.length;d<e;++d)c=a[d],b[c[0]]=c[1];return b},exports.maximum=M=function(a){return x(ob,a)},exports.minimum=N=function(a){return x(pb,a)},exports.scan=P=exports.scanl=O=Wb(function(a,b,c){var d,e;return d=b,Ub.call(c).slice(8,-1)==="Object"?[b].concat(function(){var b,f,g=[];for(b in f=c)e=f[b],g.push(d=a(d,e));return g}()):[b].concat(function(){var b,f,g,h=[];for(b=0,g=(f=c).length;b<g;++b)e=f[b],h.push(d=a(d,e));return h}())}),exports.scan1=R=exports.scanl1=Q=Wb(function(a,b){return P(a,b[0],b.slice(1))}),exports.scanr=S=Wb(function(a,b,c){return c.reverse(),P(a,b,c).reverse()}),exports.scanr1=T=Wb(function(a,b){return b.reverse(),P(a,b[0],b.slice(1)).reverse()}),exports.replicate=U=Wb(function(a,b){var c,d;c=[],d=0;for(;d<a;++d)c.push(b);return Ub.call(b).slice(8,-1)==="String"?c.join(""):c}),exports.take=V=Wb(function(a,b){switch(!1){case!(a<=0):return Ub.call(b).slice(8,-1)==="String"?"":[];case!!b.length:return b;default:return b.slice(0,a)}}),exports.drop=W=Wb(function(a,b){switch(!1){case!(a<=0):return b;case!!b.length:return b;default:return b.slice(a)}}),exports.splitAt=X=Wb(function(a,b){return[V(a,b),W(a,b)]}),exports.takeWhile=Y=Wb(function(b,c){var d,e,f,g;if(!c.length)return c;Ub.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=[];for(f=0,g=c.length;f<g;++f){e=c[f];if(!b(e))break;d.push(e)}return Ub.call(c).slice(8,-1)==="String"?d.join(""):d}),exports.dropWhile=Z=Wb(function(b,c){var d,e,f,g;if(!c.length)return c;Ub.call(b).slice(8,-1)!=="Function"&&(b=a(b)),d=0;for(f=0,g=c.length;f<g;++f){e=c[f];if(!b(e))break;++d}return W(d,c)}),exports.span=$=Wb(function(a,b){return[Y(a,b),Z(a,b)]}),exports.breakIt=_=Wb(function(a,b){return $(Yb(Zb,a),b)}),exports.elem=ab=Wb(function(a,b){return Xb(a,b)}),exports.notElem=bb=Wb(function(a,b){return!Xb(a,b)}),exports.lookup=cb=Wb(function(a,b){return b!=null?b[a]:void 8}),exports.call=db=Wb(function(a,b){return b!=null?typeof b[a]=="function"?b[a]():void 8:void 8}),exports.zip=eb=function(){var a,b,c,d,e,f,g,h,i;a=Vb.call(arguments),b=[];for(c=0,g=a.length;c<g;++c){d=a[c];for(e=0,h=d.length;e<h;++e)f=d[e],c===0&&b.push([]),(i=b[e])!=null&&i.push(f)}return b},exports.zipWith=fb=function(b){var c,d,e,f,g,h=[];c=Vb.call(arguments,1),Ub.call(b).slice(8,-1)!=="Function"&&(b=a(b));if(!c[0].length||!c[1].length)return[];for(e=0,g=(f=eb.apply(this,c)).length;e<g;++e)d=f[e],h.push(b.apply(this,d));return h},exports.compose=gb=function(){var a;return a=Vb.call(arguments),function(){var b,c,d,e,f;b=arguments;for(d=0,f=(e=a).length;d<f;++d)c=e[d],b=[c.apply(this,b)];return b[0]}},exports.partial=hb=function(a){var b;return b=Vb.call(arguments,1),function(){var c;return c=Vb.call(arguments),a.apply(this,b.concat(c))}},exports.id=ib=function(a){return a},exports.flip=jb=Wb(function(a,b,c){return a(c,b)}),exports.lines=kb=function(a){return a.length?a.split("\n"):[]},exports.unlines=lb=function(a){return a.join("\n")},exports.words=mb=function(a){return a.length?a.split(/[ ]+/):[]},exports.unwords=nb=function(a){return a.join(" ")},exports.max=ob=Wb(function(a,b){return a>b?a:b}),exports.min=pb=Wb(function(a,b){return a>b?b:a}),exports.negate=qb=function(a){return-a},exports.abs=rb=Math.abs,exports.signum=sb=function(a){switch(!1){case!(a<0):return-1;case!(a>0):return 1;default:return 0}},exports.quot=tb=Wb(function(a,b){return~~(a/b)}),exports.rem=ub=Wb(function(a,b){return a%b}),exports.div=vb=Wb(function(a,b){return Math.floor(a/b)}),exports.mod=wb=Wb(function(a,b){var c;return(a%(c=b)+c)%c}),exports.recip=xb=function(a){return 1/a},exports.pi=yb=Math.PI,exports.tau=zb=yb*2,exports.exp=Ab=Math.exp,exports.sqrt=Bb=Math.sqrt,exports.ln=Cb=Math.log,exports.pow=Db=Wb(function(a,b){return Math.pow(a,b)}),exports.sin=Eb=Math.sin,exports.tan=Fb=Math.tan,exports.cos=Gb=Math.cos,exports.asin=Hb=Math.asin,exports.acos=Ib=Math.acos,exports.atan=Jb=Math.atan,exports.atan2=Kb=Wb(function(a,b){return Math.atan2(a,b)}),exports.truncate=Lb=function(a){return~~a},exports.round=Mb=Math.round,exports.ceiling=Nb=Math.ceil,exports.floor=Ob=Math.floor,exports.isItNaN=Pb=function(a){return a!==a},exports.even=Qb=function(a){return a%2===0},exports.odd=Rb=function(a){return a%2!==0},exports.gcd=Sb=Wb(function(a,b){var c;a=Math.abs(a),b=Math.abs(b);while(b!==0)c=a%b,a=b,b=c;return a}),exports.lcm=Tb=Wb(function(a,b){return Math.abs(Math.floor(a/Sb(a,b)*b))}),exports.installPrelude=function(a){$b(a,exports)},exports.prelude=exports,exports}()