(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{21:function(e,t,n){e.exports=n(47)},26:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),c=n.n(r),s=(n(26),n(9)),u=n(2),i=n.n(u),l=n(7),p=n(3),m=n(4),d=n(8),h=n(6),b=n(5),f=n(10),g=n.n(f),v=function(e){var t=e.totalCounters;return o.a.createElement("nav",{className:"navbar navbar-light bg-light"},o.a.createElement("a",{className:"navbar-brand",href:"#"},"TimeZone"," ",o.a.createElement("span",{className:"badge badge-pill badge-secondary"},t)))},y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleChange=function(t){var n=t.target.value;e.props.onChanges(e.props.counter,n)},e.handleSubmitting=Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.onSubmit(e.props.counter);case 2:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.counter.value,this.props.counter.value}},{key:"componentWillUnmount",value:function(){console.log("Counter - Unmount")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("input",{type:"text",onChange:this.handleChange.bind(this)}),o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-sm m-2",onClick:this.handleSubmitting},"Submit"),o.a.createElement("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2"},"Delete"),this.props.children,"          ")}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(a.Component),O=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.counters,a=e.onDelete,r=e.onIncrement,c=e.onChanges,s=e.onSubmit;return o.a.createElement("div",null,o.a.createElement("button",{onClick:t,className:"btn btn-secondary btn-sm m-2"},"Reset"),n.map((function(e){return o.a.createElement(y,{key:e.id,onDelete:a,onIncrement:r,onChanges:c,onSubmit:s,counter:e},o.a.createElement("p",{className:"serif"},"Time: ",e.output))})))}}]),n}(a.Component),j=(n(45),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={counters:[{id:1,data:"",output:""},{id:2,data:"",output:""},{id:3,data:"",output:""},{id:4,data:"",output:""}]},a.handleDelete=function(e){var t=a.state.counters.filter((function(t){return t.id!==e}));a.setState({counters:t})},a.geocode=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var o,r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://maps.googleapis.com/maps/api/geocode/json?",{params:{address:t,key:"AIzaSyA4w6NRc7DjmfJCoxO0TQ8Sdu-E_DDQ-X4"}});case 3:o=e.sent,console.log("GEOCODE",o),r=o.data.results[0].formatted_address,console.log(r),c=o.data.results[0].geometry.location.lat,s=o.data.results[0].geometry.location.lng,console.log("lat:",c),console.log("long:",s),a.timezone(c,s,n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("geocoding api: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}(),a.timezone=function(){var e=Object(l.a)(i.a.mark((function e(t,n,o){var r,c,u,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("http://api.timezonedb.com/v2.1/get-time-zone?key=11DHLME82RAS&format=json&by=position&",{params:{lat:t,lng:n}});case 3:r=e.sent,console.log("RESPONSE",r),c=r.data.formatted,console.log(c),u=Object(s.a)(a.state.counters),l=u.indexOf(o),u[l].output=c,a.setState({counters:u}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("timezone api:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,a){return e.apply(this,arguments)}}(),a.handleInput=function(e,t){var n=Object(s.a)(a.state.counters),o=n.indexOf(e);n[o].data=t,a.setState({counters:n}),console.log("handleInput",n)},a.handleSubmit=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submit",Object(d.a)(a)),n=Object(s.a)(a.state.counters),o=n.indexOf(t),e.next=5,a.geocode(n[o].data,t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleReset=function(){var e=a.state.counters.map((function(e){return e.data="",e.output="",e}));a.setState({counters:e})},console.log("App-constructor"),a}return Object(m.a)(n,[{key:"render",value:function(){return console.log("App - rendered"),o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),o.a.createElement("main",{className:"container"},o.a.createElement(O,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDelete:this.handleDelete,onChanges:this.handleInput,onSubmit:this.handleSubmit})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(46);c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7afdedd7.chunk.js.map