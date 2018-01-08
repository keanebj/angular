/*
*
*	请勿用于任何商业用途，如果发生任何法律纠纷，于本人无关，谢谢
*	QQ群（20420014），欢迎加入学习
*
*/
var mobiscroll = mobiscroll || {};
(function(e, b, c) {
var n = {
		"column-count": 1,
		columns: 1,
		"font-weight": 1,
		"line-height": 1,
		opacity: 1,
		"z-index": 1,
		zoom: 1
	},
	p = {
		'readonly': 'readOnly'
	},
	j = [],
	f = Array.prototype.slice;

function d(a) {
	
	return typeof a === (false ? "" : "function");
}

function h(a) {
	return typeof a === (true ? "object" : "");
}

function k(a) {
	return typeof a.length == (true ? 'number' : "");
}

function l(a) {
	return a.replace(/-+(.)?/g, function(b, a) {
		return a ? a.toUpperCase() : '';
	});
}

function m(e, d, f) {
	for (var b in d) {
		if (f && (a.isPlainObject(d[b]) || a.isArray(d[b]))) {
			if (a.isPlainObject(d[b]) && !a.isPlainObject(e[b]) || a.isArray(d[b]) && !a.isArray(e[b])) {
				e[b] = {};
			}
			m(e[b], d[b], f);
		} else if (d[b] !== c) {
			e[b] = d[b];
		}
	}
}

function g(a) {
	return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
}

function o(b, a) {
	return typeof a == "number" && !n[g(b)] ? a + "px" : a;
}
var i = function() {
	var i = function(c) {
		var d = this,
			b = 0;
		for (b = 0; b < c.length; b++) {
			d[b] = c[b];
		}
		d.length = c.length;
		return a(this);
	};
	var a = function(c, k) {
		var h = [],
			f = 0;
		if (c && !k) {
			if (c instanceof i) {
				return c;
			}
		}
		if (d(c)) {
			return a(b).ready(c);
		}
		if (c) {
			if (typeof c === 'string') {
				var l, m, g;
				c = g = c.trim();
				if (g.indexOf('<') >= 0 && g.indexOf('>') >= 0) {
					var j = 'div';
					if (g.indexOf('<li') === 0) {
						j = 'ul';
					}
					if (g.indexOf('<tr') === 0) {
						j = 'tbody';
					}
					if (g.indexOf('<td') === 0 || g.indexOf('<th') === 0) {
						j = 'tr';
					}
					if (g.indexOf('<tbody') === 0) {
						j = 'table';
					}
					if (g.indexOf('<option') === 0) {
						j = 'select';
					}
					m = b.createElement(j);
					m.innerHTML = g;
					for (f = 0; f < m.childNodes.length; f++) {
						h.push(m.childNodes[f]);
					}
				} else {
					if (!k && c[0] === '#' && !c.match(/[ .<>:~]/)) {
						l = [b.getElementById(c.split('#')[1])];
					} else {
						if (k instanceof i) {
							k = k[0];
						}
						l = (k || b).querySelectorAll(c);
					}
					for (f = 0; f < l.length; f++) {
						if (l[f]) {
							h.push(l[f]);
						}
					}
				}
			} else if (c.nodeType || c === e || c === b) {
				h.push(c);
			} else if (c.length > 0 && c[0].nodeType) {
				for (f = 0; f < c.length; f++) {
					h.push(c[f]);
				}
			} else if (a.isArray(c)) {
				h = c;
			}
		}
		return new i(h);
	};
	i.prototype = {
		ready: function(c) {
			if (/complete|loaded|interactive/.test(b.readyState) && b.body) {
				c(a);
			} else {
				b.addEventListener('DOMContentLoaded', function() {
					c(a);
				}, false);
			}
			return this;
		},
		concat: j.concat,
		empty: function() {
			return this.each(function() {
				this.innerHTML = '';
			});
		},
		map: function(b) {
			return a(a.map(this, function(a, c) {
				return b.call(a, c, a);
			}));
		},
		slice: function() {
			return a(f.apply(this, arguments));
		},
		addClass: function(d) {
			if (typeof d === 'undefined') {
				return this;
			}
			var c = d.split(' ');
			for (var a = 0; a < c.length; a++) {
				for (var b = 0; b < this.length; b++) {
					if (typeof this[b].classList !== 'undefined' && c[a] !== '') {
						this[b].classList.add(c[a]);
					}
				}
			}
			return this;
		},
		removeClass: function(d) {
			var c = d.split(' ');
			for (var a = 0; a < c.length; a++) {
				for (var b = 0; b < this.length; b++) {
					if (typeof this[b].classList !== 'undefined' && c[a] !== '') {
						this[b].classList.remove(c[a]);
					}
				}
			}
			return this;
		},
		hasClass: function(a) {
			return this[0] ? this[0].classList.contains(a) : false;
		},
		toggleClass: function(d) {
			var c = d.split(' ');
			for (var b = 0; b < c.length; b++) {
				for (var a = 0; a < this.length; a++) {
					if (typeof this[a].classList !== 'undefined') {
						this[a].classList.toggle(c[b]);
					}
				}
			}
			return this;
		},
		closest: function(d, e) {
			var b = this[0],
				c = false;
			if (h(d)) {
				c = a(d);
			}
			while (b && !(c ? c.indexOf(b) >= 0 : a.matches(b, d))) {
				b = b !== e && b.nodeType !== b.DOCUMENT_NODE && b.parentNode;
			}
			return a(b);
		},
		attr: function(a, f) {
			var e;
			if (arguments.length === 1 && typeof a === 'string' && this.length) {
				e = this[0].getAttribute(a);
				return this[0] && (e || e === '') ? e : c;
			} else {
				for (var b = 0; b < this.length; b++) {
					if (arguments.length === 2) {
						this[b].setAttribute(a, f);
					} else {
						for (var d in a) {
							this[b][d] = a[d];
							this[b].setAttribute(d, a[d]);
						}
					}
				}
				return this;
			}
		},
		removeAttr: function(b) {
			for (var a = 0; a < this.length; a++) {
				this[a].removeAttribute(b);
			}
			return this;
		},
		prop: function(a, d) {
			a = p[a] || a;
			if (arguments.length === 1 && typeof a === 'string') {
				return this[0] ? this[0][a] : c;
			} else {
				for (var b = 0; b < this.length; b++) {
					this[b][a] = d;
				}
				return this;
			}
		},
		val: function(d) {
			if (typeof d === 'undefined') {
				if (this.length && this[0].multiple) {
					return a.map(this.find('option:checked'), function(a) {
						return a.value;
					});
				}
				return this[0] ? this[0].value : c;
			}
			if (this.length && this[0].multiple) {
				a.each(this[0].options, function() {
					this.selected = d.indexOf(this.value) != -1;
				});
			} else {
				for (var b = 0; b < this.length; b++) {
					this[b].value = d;
				}
			}
			return this;
		},
		on: function(k, g, f, h) {
			var e = k.split(' '),
				c, b;

			function i(e) {
				var b, c, d = e.target;
				if (a(d).is(g)) {
					f.call(d, e);
				} else {
					c = a(d).parents();
					for (b = 0; b < c.length; b++) {
						if (a(c[b]).is(g)) {
							f.call(c[b], e);
						}
					}
				}
			}

			function j(a, e, c, d) {
				var b = e.split('.');
				if (!a.DomNameSpaces) {
					a.DomNameSpaces = [];
				}
				a.DomNameSpaces.push({
					namespace: b[1],
					event: b[0],
					listener: c,
					capture: d
				});
				a.addEventListener(b[0], c, d);
			}
			for (c = 0; c < this.length; c++) {
				if (d(g) || g === false) {
					if (d(g)) {
						h = f || false;
						f = g;
					}
					for (b = 0; b < e.length; b++) {
						if (e[b].indexOf('.') != -1) {
							j(this[c], e[b], f, h);
						} else {
							this[c].addEventListener(e[b], f, h);
						}
					}
				} else {
					for (b = 0; b < e.length; b++) {
						if (!this[c].DomLiveListeners) {
							this[c].DomLiveListeners = [];
						}
						this[c].DomLiveListeners.push({
							listener: f,
							liveListener: i
						});
						if (e[b].indexOf('.') != -1) {
							j(this[c], e[b], i, h);
						} else {
							this[c].addEventListener(e[b], i, h);
						}
					}
				}
			}
			return this;
		},
		off: function(k, h, f, i) {
			var e, c, a, g, b = this;

			function j(h) {
				var a, c, d, e = h.split('.'),
					f = e[0],
					g = e[1];
				for (a = 0; a < b.length; ++a) {
					if (b[a].DomNameSpaces) {
						for (c = 0; c < b[a].DomNameSpaces.length; ++c) {
							d = b[a].DomNameSpaces[c];
							if (d.namespace == g && (d.event == f || !f)) {
								b[a].removeEventListener(d.event, d.listener, d.capture);
								d.removed = true;
							}
						}
						for (c = b[a].DomNameSpaces.length - 1; c >= 0; --c) {
							if (b[a].DomNameSpaces[c].removed) {
								b[a].DomNameSpaces.splice(c, 1);
							}
						}
					}
				}
			}
			e = k.split(' ');
			for (c = 0; c < e.length; c++) {
				for (a = 0; a < this.length; a++) {
					if (d(h) || h === false) {
						if (d(h)) {
							i = f || false;
							f = h;
						}
						if (e[c].indexOf('.') === 0) {
							j(e[c].substr(1), f, i);
						} else {
							this[a].removeEventListener(e[c], f, i);
						}
					} else {
						if (this[a].DomLiveListeners) {
							for (g = 0; g < this[a].DomLiveListeners.length; g++) {
								if (this[a].DomLiveListeners[g].listener === f) {
									this[a].removeEventListener(e[c], this[a].DomLiveListeners[g].liveListener, i);
								}
							}
						}
						if (this[a].DomNameSpaces && this[a].DomNameSpaces.length && e[c]) {
							j(e[c]);
						}
					}
				}
			}
			return this;
		},
		trigger: function(g, f) {
			var d = g.split(' ');
			for (var c = 0; c < d.length; c++) {
				for (var e = 0; e < this.length; e++) {
					var a;
					try {
						a = new CustomEvent(d[c], {
							detail: f,
							bubbles: true,
							cancelable: true
						});
					} catch (e) {
						a = b.createEvent('Event');
						a.initEvent(d[c], true, true);
						a.detail = f;
					}
					this[e].dispatchEvent(a);
				}
			}
			return this;
		},
		width: function(a) {
			if (a !== c) {
				return this.css('width', a);
			}
			if (this[0] === e) {
				return e.innerWidth;
			} else if (this[0] === b) {
				return b.documentElement.scrollWidth;
			} else {
				return this.length > 0 ? parseFloat(this.css('width')) : null;
			}
		},
		height: function(f) {
			if (f !== c) {
				return this.css('height', f);
			}
			if (this[0] === e) {
				return e.innerHeight;
			} else if (this[0] === b) {
				var d = b.body,
					a = b.documentElement;
				return Math.max(d.scrollHeight, d.offsetHeight, a.clientHeight, a.scrollHeight, a.offsetHeight);
			} else {
				return this.length > 0 ? parseFloat(this.css('height')) : null;
			}
		},
		innerWidth: function() {
			var b = this;
			if (this.length > 0) {
				if (this[0].innerWidth) {
					return this[0].innerWidth;
				} else {
					var a = this[0].offsetWidth,
						c = ['left', 'right'];
					c.forEach(function(c) {
						a -= parseInt(b.css(l('border-' + c + '-width')) || 0, 10);
					});
					return a;
				}
			}
		},
		innerHeight: function() {
			var b = this;
			if (this.length > 0) {
				if (this[0].innerHeight) {
					return this[0].innerHeight;
				} else {
					var a = this[0].offsetHeight,
						c = ['top', 'bottom'];
					c.forEach(function(c) {
						a -= parseInt(b.css(l('border-' + c + '-width')) || 0, 10);
					});
					return a;
				}
			}
		},
		offset: function() {
			if (this.length > 0) {
				var a = this[0],
					c = a.getBoundingClientRect(),
					d = b.body,
					f = a.clientTop || d.clientTop || 0,
					g = a.clientLeft || d.clientLeft || 0,
					h = e.pageYOffset || a.scrollTop,
					i = e.pageXOffset || a.scrollLeft;
				return {
					top: c.top + h - f,
					left: c.left + i - g
				};
			}
		},
		hide: function() {
			for (var a = 0; a < this.length; a++) {
				this[a].style.display = 'none';
			}
			return this;
		},
		show: function() {
			for (var a = 0; a < this.length; a++) {
				if (this[a].style.display == "none") {
					this[a].style.display = '';
				}
				if (getComputedStyle(this[a], '').getPropertyValue("display") == "none") {
					this[a].style.display = 'block';
				}
			}
			return this;
		},
		clone: function() {
			return this.map(function() {
				return this.cloneNode(true);
			});
		},
		styles: function() {
			return this[0] ? e.getComputedStyle(this[0], null) : c;
		},
		css: function(a, f) {
			var c, b, d = this[0],
				e = '';
			if (arguments.length < 2) {
				if (!d) {
					return;
				}
				if (typeof a === 'string') {
					return d.style[a] || getComputedStyle(d, '').getPropertyValue(a);
				}
			}
			if (typeof a === 'string') {
				if (!f && f !== 0) {
					this.each(function() {
						this.style.removeProperty(g(a));
					});
				} else {
					e = g(a) + ":" + o(a, f);
				}
			} else {
				for (b in a) {
					if (!a[b] && a[b] !== 0) {
						for (c = 0; c < this.length; c++) {
							this[c].style.removeProperty(g(b));
						}
					} else {
						e += g(b) + ':' + o(b, a[b]) + ';';
					}
				}
			}
			return this.each(function() {
				this.style.cssText += ';' + e;
			});
		},
		each: function(b) {
			for (var a = 0; a < this.length; a++) {
				if (b.apply(this[a], [a, this[a]]) === false) {
					break;
				}
			}
			return this;
		},
		filter: function(e) {
			var c = [];
			for (var b = 0; b < this.length; b++) {
				if (d(e)) {
					if (e.call(this[b], b, this[b])) {
						c.push(this[b]);
					}
				} else if (a.matches(this[b], e)) {
					c.push(this[b]);
				}
			}
			return new i(c);
		},
		html: function(b) {
			if (typeof b === 'undefined') {
				return this[0] ? this[0].innerHTML : c;
			} else {
				this.empty();
				for (var a = 0; a < this.length; a++) {
					this[a].innerHTML = b;
				}
				return this;
			}
		},
		text: function(b) {
			if (typeof b === 'undefined') {
				return this[0] ? this[0].textContent.trim() : null;
			} else {
				for (var a = 0; a < this.length; a++) {
					this[a].textContent = b;
				}
				return this;
			}
		},
		is: function(b) {
			return this.length > 0 && a.matches(this[0], b);
		},
		not: function(b) {
			var g = [];
			if (d(b) && b.call !== c) {
				this.each(function(a) {
					if (!b.call(this, a)) {
						g.push(this);
					}
				});
			} else {
				var e = typeof b == 'string' ? this.filter(b) : k(b) && d(b.item) ? f.call(b) : a(b);
				if (h(e)) {
					e = a.map(e, function(a) {
						return a;
					});
				}
				this.each(function(b, a) {
					if (e.indexOf(a) < 0) {
						g.push(a);
					}
				});
			}
			return a(g);
		},
		indexOf: function(b) {
			for (var a = 0; a < this.length; a++) {
				if (this[a] === b) {
					return a;
				}
			}
		},
		index: function(b) {
			return b ? this.indexOf(a(b)[0]) : this.parent().children().indexOf(this[0]);
		},
		get: function(a) {
			return a === c ? f.call(this) : this[a >= 0 ? a : a + this.length];
		},
		eq: function(a) {
			if (typeof a === 'undefined') {
				return this;
			}
			var b = this.length,
				c;
			if (a > b - 1) {
				return new i([]);
			}
			if (a < 0) {
				c = b + a;
				return c < 0 ? new i([]) : new i([this[c]]);
			}
			return new i([this[a]]);
		},
		append: function(a) {
			var c, d;
			for (c = 0; c < this.length; c++) {
				if (typeof a === 'string') {
					var e = b.createElement('div');
					e.innerHTML = a;
					while (e.firstChild) {
						this[c].appendChild(e.firstChild);
					}
				} else if (a instanceof i) {
					for (d = 0; d < a.length; d++) {
						this[c].appendChild(a[d]);
					}
				} else {
					this[c].appendChild(a);
				}
			}
			return this;
		},
		appendTo: function(b) {
			a(b).append(this);
			return this;
		},
		prepend: function(d) {
			var a, c;
			for (a = 0; a < this.length; a++) {
				if (typeof d === 'string') {
					var e = b.createElement('div');
					e.innerHTML = d;
					for (c = e.childNodes.length - 1; c >= 0; c--) {
						this[a].insertBefore(e.childNodes[c], this[a].childNodes[0]);
					}
				} else if (d instanceof i) {
					for (c = 0; c < d.length; c++) {
						this[a].insertBefore(d[c], this[a].childNodes[0]);
					}
				} else {
					this[a].insertBefore(d, this[a].childNodes[0]);
				}
			}
			return this;
		},
		prependTo: function(b) {
			a(b).prepend(this);
			return this;
		},
		insertBefore: function(e) {
			var b = a(e);
			for (var c = 0; c < this.length; c++) {
				if (b.length === 1) {
					b[0].parentNode.insertBefore(this[c], b[0]);
				} else if (b.length > 1) {
					for (var d = 0; d < b.length; d++) {
						b[d].parentNode.insertBefore(this[c].cloneNode(true), b[d]);
					}
				}
			}
			return this;
		},
		insertAfter: function(e) {
			var b = a(e);
			for (var c = 0; c < this.length; c++) {
				if (b.length === 1) {
					b[0].parentNode.insertBefore(this[c], b[0].nextSibling);
				} else if (b.length > 1) {
					for (var d = 0; d < b.length; d++) {
						b[d].parentNode.insertBefore(this[c].cloneNode(true), b[d].nextSibling);
					}
				}
			}
			return this;
		},
		next: function(b) {
			if (this.length > 0) {
				if (b) {
					if (this[0].nextElementSibling && a(this[0].nextElementSibling).is(b)) {
						return new i([this[0].nextElementSibling]);
					} else {
						return new i([]);
					}
				} else {
					if (this[0].nextElementSibling) {
						return new i([this[0].nextElementSibling]);
					} else {
						return new i([]);
					}
				}
			} else {
				return new i([]);
			}
		},
		nextAll: function(e) {
			var d = [],
				b = this[0];
			if (!b) {
				return new i([]);
			}
			while (b.nextElementSibling) {
				var c = b.nextElementSibling;
				if (e) {
					if (a(c).is(e)) {
						d.push(c);
					}
				} else {
					d.push(c);
				}
				b = c;
			}
			return new i(d);
		},
		prev: function(b) {
			if (this.length > 0) {
				if (b) {
					if (this[0].previousElementSibling && a(this[0].previousElementSibling).is(b)) {
						return new i([this[0].previousElementSibling]);
					} else {
						return new i([]);
					}
				} else {
					if (this[0].previousElementSibling) {
						return new i([this[0].previousElementSibling]);
					} else {
						return new i([]);
					}
				}
			} else {
				return new i([]);
			}
		},
		prevAll: function(e) {
			var d = [];
			var b = this[0];
			if (!b) {
				return new i([]);
			}
			while (b.previousElementSibling) {
				var c = b.previousElementSibling;
				if (e) {
					if (a(c).is(e)) {
						d.push(c);
					}
				} else {
					d.push(c);
				}
				b = c;
			}
			return new i(d);
		},
		parent: function(d) {
			var c = [];
			for (var b = 0; b < this.length; b++) {
				if (this[b].parentNode !== null) {
					if (d) {
						if (a(this[b].parentNode).is(d)) {
							c.push(this[b].parentNode);
						}
					} else {
						c.push(this[b].parentNode);
					}
				}
			}
			return a(a.unique(c));
		},
		parents: function(e) {
			var c = [];
			for (var d = 0; d < this.length; d++) {
				var b = this[d].parentNode;
				while (b) {
					if (e) {
						if (a(b).is(e)) {
							c.push(b);
						}
					} else {
						c.push(b);
					}
					b = b.parentNode;
				}
			}
			return a(a.unique(c));
		},
		find: function(e) {
			var c = [];
			for (var a = 0; a < this.length; a++) {
				var d = this[a].querySelectorAll(e);
				for (var b = 0; b < d.length; b++) {
					c.push(d[b]);
				}
			}
			return new i(c);
		},
		children: function(f) {
			var d = [];
			for (var e = 0; e < this.length; e++) {
				var c = this[e].childNodes;
				for (var b = 0; b < c.length; b++) {
					if (!f) {
						if (c[b].nodeType === 1) {
							d.push(c[b]);
						}
					} else {
						if (c[b].nodeType === 1 && a(c[b]).is(f)) {
							d.push(c[b]);
						}
					}
				}
			}
			return new i(a.unique(d));
		},
		remove: function() {
			for (var a = 0; a < this.length; a++) {
				if (this[a].parentNode) {
					this[a].parentNode.removeChild(this[a]);
				}
			}
			return this;
		},
		add: function() {
			var b = this;
			var c, d;
			for (c = 0; c < arguments.length; c++) {
				var e = a(arguments[c]);
				for (d = 0; d < e.length; d++) {
					b[b.length] = e[d];
					b.length++;
				}
			}
			return b;
		},
		before: function(b) {
			a(b).insertBefore(this);
			return this;
		},
		after: function(b) {
			a(b).insertAfter(this);
			return this;
		},
		scrollTop: function(a) {
			if (!this.length) {
				return;
			}
			var b = 'scrollTop' in this[0];
			if (a === c) {
				return b ? this[0].scrollTop : this[0].pageYOffset;
			}
			return this.each(b ? function() {
				this.scrollTop = a;
			} : function() {
				this.scrollTo(this.scrollX, a);
			});
		},
		scrollLeft: function(a) {
			if (!this.length) {
				return;
			}
			var b = 'scrollLeft' in this[0];
			if (a === c) {
				return b ? this[0].scrollLeft : this[0].pageXOffset;
			}
			return this.each(b ? function() {
				this.scrollLeft = a;
			} : function() {
				this.scrollTo(a, this.scrollY);
			});
		},
		contents: function() {
			return this.map(function(b, a) {
				return f.call(a.childNodes);
			});
		},
		nextUntil: function(d) {
			var b = this,
				c = [];
			while (b.length && !b.filter(d).length) {
				c.push(b[0]);
				b = b.next();
			}
			return a(c);
		},
		prevUntil: function(d) {
			var b = this,
				c = [];
			while (b.length && !a(b).filter(d).length) {
				c.push(b[0]);
				b = b.prev();
			}
			return a(c);
		},
		detach: function() {
			return this.remove();
		}
	};
	a.fn = i.prototype;
	return a;
}();
var a = i;
mobiscroll.$ = i;
a.inArray = function(a, b, c) {
	return j.indexOf.call(b, a, c);
};
a.extend = function(a) {
	var c, b = f.call(arguments, 1);
	if (typeof a == 'boolean') {
		c = a;
		a = b.shift();
	}
	a = a || {};
	b.forEach(function(b) {
		m(a, b, c);
	});
	return a;
};
a.isFunction = d;
a.isArray = function(a) {
	return Object.prototype.toString.apply(a) === '[object Array]';
};
a.isPlainObject = function(a) {
	return h(a) && a !== null && a !== a.window && Object.getPrototypeOf(a) == Object.prototype;
};
a.each = function(b, e) {
	var c, d;
	if (!h(b) || !e) {
		return;
	}
	if (a.isArray(b) || b instanceof i) {
		for (c = 0; c < b.length; c++) {
			if (e.call(b[c], c, b[c]) === false) {
				break;
			}
		}
	} else {
		for (d in b) {
			if (b.hasOwnProperty(d) && d !== 'length') {
				if (e.call(b[d], d, b[d]) === false) {
					break;
				}
			}
		}
	}
	return this;
};
a.unique = function(c) {
	var b = [];
	for (var a = 0; a < c.length; a++) {
		if (b.indexOf(c[a]) === -1) {
			b.push(c[a]);
		}
	}
	return b;
};
a.map = function(d, g) {
	var b, c = [],
		e, f;
	if (k(d)) {
		for (e = 0; e < d.length; e++) {
			b = g(d[e], e);
			if (b !== null) {
				c.push(b);
			}
		}
	} else {
		for (f in d) {
			b = g(d[f], f);
			if (b !== null) {
				c.push(b);
			}
		}
	}
	return c.length > 0 ? a.fn.concat.apply([], c) : c;
};
a.matches = function(a, b) {
	if (!b || !a || a.nodeType !== 1) {
		return false;
	}
	var c = a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector;
	return c.call(a, b);
};
}(window, document));

(function() {
    return function(g2f, M2f, y2f) {
        function o2f(R2f) {
            var f2f;
            for (f2f in R2f) {
                if (L2f[R2f[f2f]] !== y2f) {
                    return true;
                }
            }
            return false;
        }

        function i2f() {
            var H2f = ['Webkit', 'Moz', 'O', 'ms'],
                F2f;
            for (F2f in H2f) {
                if (o2f([H2f[F2f] + 'Transform'])) {
                    return '-' + H2f[F2f].toLowerCase() + '-';
                }
            }
            return '';
        }

        function v2f(O2f, E2f, a2f) {
            var B2f = O2f;
            if (typeof E2f === 'object') {
                return O2f.each(function() {
                    if (G2f[this.id]) {
                        G2f[this.id].destroy();
                    }
                    new U2f.classes[E2f.component || 'Scroller'](this, E2f);
                });
            }
            if (typeof E2f === 'string') {
                O2f.each(function() {
                    var z2f, p2f = G2f[this.id];
                    if (p2f && p2f[E2f]) {
                        z2f = p2f[E2f].apply(this, Array.prototype.slice.call(a2f, 1));
                        if (z2f !== y2f) {
                            B2f = z2f;
                            return false;
                        }
                    }
                });
            }
            return B2f;
        }
        var U2f, A2f, t2f, e2f = function() {},
            I2f = typeof jQuery == 'undefined' ? mobiscroll.$ : jQuery,
            P2f = +new Date(),
            G2f = {},
            N2f = I2f.extend,
            W2f = navigator.userAgent,
            J2f = W2f.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
            L2f = M2f.createElement('modernizr').style,
            l2f = o2f(['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']),
            T2f = o2f(['flex', 'msFlex', 'WebkitBoxDirection']),
            u2f = i2f(),
            m2f = u2f.replace(/^\-/, '').replace(/\-$/, '').replace('moz', 'Moz'),
            b2f = [];
        if (/Android/i.test(J2f)) {
            A2f = 'android';
            t2f = navigator.userAgent.match(/Android\s+([\d\.]+)/i);
            if (t2f) {
                b2f = t2f[0].replace('Android ', '').split('.');
            }
        } else if (/iPhone|iPad|iPod/i.test(J2f)) {
            A2f = 'ios';
            t2f = navigator.userAgent.match(/OS\s+([\d\_]+)/i);
            if (t2f) {
                b2f = t2f[0].replace(/_/g, '.').replace('OS ', '').split('.');
            }
        } else if (/Windows Phone/i.test(J2f)) {
            A2f = 'wp';
        } else if (/Windows|MSIE/i.test(J2f)) {
            A2f = 'windows';
        }
        U2f = mobiscroll = {
            $: I2f,
            version: '3.0.0',
			KvAPo : 1,
            util: {
                prefix: u2f,
                jsPrefix: m2f,
                has3d: l2f,
                hasFlex: T2f,
                preventClick: function() {
                    U2f.tapped++;
                    setTimeout(function() {
                        U2f.tapped--;
                    }, 500);
                },
                testTouch: function(d2f, C2f) {
                    if (d2f.type == 'touchstart') {
                        I2f(C2f).attr('data-touch', '1');
                    } else if (I2f(C2f).attr('data-touch')) {
                        I2f(C2f).removeAttr('data-touch');
                        return false;
                    }
                    return true;
                },
                objectToArray: function(x8f) {
                    var s2f = [],
                        Y8f;
                    for (Y8f in x8f) {
                        s2f.push(x8f[Y8f]);
                    }
                    return s2f;
                },
                arrayToObject: function(S8f) {
                    var Q8f = {},
                        D8f;
                    if (S8f) {
                        for (D8f = 0; D8f < S8f.length; D8f++) {
                            Q8f[S8f[D8f]] = S8f[D8f];
                        }
                    }
                    return Q8f;
                },
                isNumeric: function(j8f) {
                    return j8f - parseFloat(j8f) >= 0;
                },
                isString: function(h8f) {
                    return typeof h8f === 'string';
                },
                getCoord: function(Z8f, q8f, K8f) {
                    var w8f = Z8f.originalEvent || Z8f,
                        n8f = (K8f ? 'page' : 'client') + q8f;
                    if (w8f.targetTouches && w8f.targetTouches[0]) {
                        return w8f.targetTouches[0][n8f];
                    }
                    if (w8f.changedTouches && w8f.changedTouches[0]) {
                        return w8f.changedTouches[0][n8f];
                    }
                    return Z8f[n8f];
                },
                getPosition: function(I8f, G8f) {
                    var k8f = getComputedStyle(I8f[0]),
                        V8f, U8f;
                    I2f.each(['t', 'webkitT', 'MozT', 'OT', 'msT'], function(t8f, N8f) {
                        if (k8f[N8f + 'ransform'] !== y2f) {
                            V8f = k8f[N8f + 'ransform'];
                            return false;
                        }
                    });
                    V8f = V8f.split(')')[0].split(', ');
                    U8f = G8f ? V8f[13] || V8f[5] : V8f[12] || V8f[4];
                    return U8f;
                },
                constrain: function(b8f, y8f, J8f) {
                    return Math.max(y8f, Math.min(b8f, J8f));
                },
                vibrate: function(A8f) {
                    if ('vibrate' in navigator) {
                        navigator.vibrate(A8f || 50);
                    }
                },
                throttle: function(e8f, M8f) {
                    var c8f, g8f;
                    M8f = M8f || 100;
                    return function() {
                        var u8f = this,
                            o8f = +new Date(),
                            P8f = arguments;
                        if (c8f && o8f < c8f + M8f) {
                            clearTimeout(g8f);
                            g8f = setTimeout(function() {
                                c8f = o8f;
                                e8f.apply(u8f, P8f);
                            }, M8f);
                        } else {
                            c8f = o8f;
                            e8f.apply(u8f, P8f);
                        }
                    };
                }
            },
            tapped: 0,
            autoTheme: 'mobiscroll',
            presets: {
                scroller: {},
                numpad: {},
                listview: {},
                menustrip: {}
            },
            themes: {
                form: {},
                frame: {},
                scroller: {},
                listview: {},
                menustrip: {},
                progress: {}
            },
            platform: {
                name: A2f,
                majorVersion: b2f[0],
                minorVersion: b2f[1]
            },
            i18n: {},
            instances: G2f,
            classes: {},
            components: {},
            settings: {},
            setDefaults: function(v8f) {
                N2f(this.settings, v8f);
            },
            presetShort: function(W8f, L8f, l8f) {
                U2f[W8f] = function(R8f, f8f) {
                    var X8f, m8f, T8f = {},
                        i8f = f8f || {};
                    I2f.extend(i8f, {
                        preset: l8f === false ? y2f : W8f
                    });
                    I2f(R8f).each(function() {
                        if (G2f[this.id]) {
                            G2f[this.id].destroy();
                        }
                        X8f = new U2f.classes[L8f || 'Scroller'](this, i8f);
                        T8f[this.id] = X8f;
                    });
                    m8f = Object.keys(T8f);
                    return m8f.length == 1 ? T8f[m8f[0]] : T8f;
                };
                this.components[W8f] = function(H8f) {
                    return v2f(this, N2f(H8f, {
                        component: L8f,
                        preset: l8f === false ? y2f : W8f
                    }), arguments);
                };
            }
        };
        I2f.mobiscroll = U2f;
        I2f.fn.mobiscroll = function(r8f) {
            N2f(this, U2f.components);
            return v2f(this, r8f, arguments);
        };
        U2f.classes.Base = function(B8f, O8f) {
            var s8f, p8f, F8f, Y6f, a8f, z8f, d8f, x6f = U2f.util,
                C8f = x6f.getCoord,
                E8f = this;
            E8f.settings = {};
            E8f._init = e2f;
            E8f._destroy = e2f;
            E8f._processSettings = e2f;
            E8f.init = function(l6f) {
                var i6f;
                for (i6f in E8f.settings) {
                    delete E8f.settings[i6f];
                }
                F8f = E8f.settings;
                N2f(O8f, l6f);
                if (E8f._hasDef) {
                    d8f = U2f.settings;
                }
                N2f(F8f, E8f._defaults, d8f, O8f);
                if (E8f._hasTheme) {
                    a8f = F8f.theme;
                    if (a8f == 'auto' || !a8f) {
                        a8f = U2f.autoTheme;
                    }
                    if (a8f == 'default') {
                        a8f = 'mobiscroll';
                    }
                    O8f.theme = a8f;
                    Y6f = U2f.themes[E8f._class] ? U2f.themes[E8f._class][a8f] : {};
                }
                if (E8f._hasLang) {
                    s8f = U2f.i18n[F8f.lang];
                }
                if (E8f._hasTheme) {
                    z8f('onThemeLoad', {
                        lang: s8f,
                        settings: O8f
                    });
                }
                N2f(F8f, Y6f, s8f, d8f, O8f);
                E8f._processSettings();
                z8f('onProcessSettings');
                var m6f = {
                    form: true,
                    scrollview: true,
                    progress: true,
                    switch: true,
                    slider: true,
                    stepper: true
                };
				

                    var W6f = {
                        className: E8f._class,
                        buttons: E8f.buttons,
                        platform: U2f.platform,
                        userAgent: navigator.userAgent,
                        defSortHandle: I2f(B8f).find('ul,ol').length ? 'left' : 'right',
                        settings: {
                            activeClass: F8f.activeClass,
                            ampmText: F8f.ampmText,
                            amText: F8f.amText,
                            animateIcons: F8f.animateIcons,
                            backText: F8f.backText,
                            baseTheme: F8f.baseTheme,
                            buttons: F8f.buttons,
                            btnClass: F8f.btnClass,
                            btnWidth: F8f.btnWidth,
                            context: F8f.context == 'body' ? 'body' : '',
                            controls: F8f.controls,
                            cssClass: F8f.cssClass,
                            dateDisplay: F8f.dateDisplay,
                            dateFormat: F8f.dateFormat,
                            dateWheels: F8f.dateWheels,
                            dayNames: F8f.dayNames,
                            dayNamesShort: F8f.dayNamesShort,
                            daySuffix: F8f.daySuffix,
                            display: F8f.display,
                            dayText: F8f.dayText,
                            endYear: F8f.endYear,
                            fixedHeader: F8f.fixedHeader,
                            handleClass: F8f.handleClass,
                            handleMarkup: F8f.handleMarkup,
                            hideText: F8f.hideText,
                            hourText: F8f.hourText,
                            itemWidth: F8f.itemWidth,
                            lang: F8f.lang,
                            lapText: F8f.lapText,
                            layout: F8f.layout,
                            leftArrowClass: F8f.leftArrowClass,
                            max: F8f.max,
                            min: F8f.min,
                            minuteText: F8f.minuteText,
                            monthNames: F8f.monthNames,
                            monthNamesShort: F8f.monthNamesShort,
                            monthSuffix: F8f.monthSuffix,
                            monthText: F8f.monthText,
                            nowText: F8f.nowText,
                            pmText: F8f.pmText,
                            preset: F8f.preset,
                            resetText: F8f.resetText,
                            rightArrowClass: F8f.rightArrowClass,
                            rtl: F8f.rtl,
                            secText: F8f.secText,
                            select: F8f.select,
                            snap: F8f.snap,
                            sort: F8f.sort,
                            sortable: F8f.sortable,
                            sortHandle: F8f.sortHandle,
                            startText: F8f.startText,
                            startYear: F8f.startYear,
                            stepHour: F8f.stepHour,
                            stepMinute: F8f.stepMinute,
                            stepSecond: F8f.stepSecond,
                            steps: F8f.steps,
                            stopText: F8f.stopText,
                            striped: F8f.striped,
                            theme: F8f.theme,
                            timeFormat: F8f.timeFormat,
                            timeWheels: F8f.timeWheels,
                            todayText: F8f.todayText,
                            type: F8f.type,
                            variant: F8f.variant,
                            wrapperClass: F8f.wrapperClass,
                            yearSuffix: F8f.yearSuffix,
                            yearText: F8f.yearText
                        }
                    };
					
					
					
                    var u6f, o6f, P6f = [],
                        v6f = {},
                        T6f = ['refresh', 'redraw', 'navigate', 'showMonthView', 'changeTab', 'addValue', 'removeValue', 'getDate', 'setDate', 'addEvent', 'removeEvent', 'getEvents', 'setEvents', 'setActiveDate', 'start', 'stop', 'reset', 'lap', 'resetlap', 'getTime', 'setTime', 'getEllapsedTime', 'setEllapsedTime'],
                        X6f = {
                            jsonp: 1,
                            getInst: 1,
                            init: 1,
                            destroy: 1
                        },
                        L6f = function(R6f) {
                            E8f[R6f] = function() {
                                P6f.push({
                                    func: R6f,
                                    args: arguments
                                });
                            };
                        };
                    for (o6f in E8f) {
                        if (typeof E8f[o6f] === 'function' && !X6f[o6f]) {
                            v6f[o6f] = E8f[o6f];
                            L6f(o6f);
                        }
                    }
                    for (u6f = 0; u6f < T6f.length; u6f++) {
                        L6f(T6f[u6f]);
                    }
                    if (F8f.preset == 'timer' && !O8f.buttons) {
                        W6f.settings.buttons = ['toggle', 'resetlap'];
                        if (F8f.display !== 'inline') {
                            W6f.settings.buttons.push('hide');
                        }
                    }
			
					  for (o6f in v6f) {
                            E8f[o6f] = v6f[o6f];
                        }
						
						
                        if (E8f._hasPreset) {
                            p8f = U2f.presets[E8f._class][F8f.preset];
                            if (p8f) {
                                p8f = p8f.call(B8f, E8f);
                                N2f(F8f, p8f, O8f);
                            }
                        }
	
                        E8f._init(l6f);
			
                        z8f('onInit');
                        for (u6f = 0; u6f < P6f.length; u6f++) {
                            E8f[P6f[u6f].func].apply(E8f, P6f[u6f].args);
                        }
                        P6f = null;
                        v6f = null;
						
            };
            E8f.destroy = function() {
                if (E8f) {
                    E8f._destroy();
                    z8f('onDestroy');
                    delete G2f[B8f.id];
                    E8f = null;
                }
            };
            E8f.tap = function(a6f, O6f, C6f, r6f, z6f) {
                var B6f, E6f, H6f, F6f, p6f;
                r6f = r6f || 9;

                function s6f(D98) {
                    if (!H6f) {
                        if (C6f) {
                            D98.preventDefault();
                        }
                        H6f = this;
                        B6f = C8f(D98, 'X');
                        E6f = C8f(D98, 'Y');
                        F6f = false;
                        p6f = new Date();
                    }
                }

                function x98(S98) {
                    if (H6f && !F6f && (Math.abs(C8f(S98, 'X') - B6f) > r6f || Math.abs(C8f(S98, 'Y') - E6f) > r6f)) {
                        F6f = true;
                    }
                }

                function Y98(Q98) {
                    if (H6f) {
                        if (z6f && new Date() - p6f < 100 || !F6f) {
                            Q98.preventDefault();
                            O6f.call(H6f, Q98, E8f);
                        }
                        H6f = false;
                        x6f.preventClick();
                    }
                }

                function d6f() {
                    H6f = false;
                }
                if (F8f.tap) {
                    a6f.on('touchstart.mbsc', s6f).on('touchcancel.mbsc', d6f).on('touchmove.mbsc', x98).on('touchend.mbsc', Y98);
                }
                a6f.on('click.mbsc', function(j98) {
                    j98.preventDefault();
                    O6f.call(this, j98, E8f);
                });
            };
            E8f.trigger = function(n98, K98) {
                var Z98, h98, w98, q98 = [d8f, Y6f, p8f, O8f];
                for (h98 = 0; h98 < 4; h98++) {
                    w98 = q98[h98];
                    if (w98 && w98[n98]) {
                        Z98 = w98[n98].call(B8f, K98 || {}, E8f);
                    }
                }
                return Z98;
            };
            E8f.option = function(k98, U98) {
                var V98 = {};
                if (typeof k98 === 'object') {
                    V98 = k98;
                } else {
                    V98[k98] = U98;
                }
                E8f.init(V98);
            };
            E8f.getInst = function() {
                return E8f;
            };
           
            O8f = O8f || {};
            z8f = E8f.trigger;
            I2f(B8f).addClass('mbsc-comp');
            if (!B8f.id) {
                B8f.id = 'mobiscroll' + ++P2f;
            }
            G2f[B8f.id] = E8f;
        };

        function X2f(e98) {
            if (U2f.tapped && !e98.tap && !(e98.target.nodeName == 'TEXTAREA' && e98.type == 'mousedown')) {
                e98.stopPropagation();
                e98.preventDefault();
                return false;
            }
        }
        if (M2f.addEventListener) {
            I2f.each(['mouseover', 'mousedown', 'mouseup', 'click'], function(o98, g98) {
                M2f.addEventListener(g98, X2f, true);
            });
        }
    };
   
}())(window,document);
(function() {
    mobiscroll.i18n.ca = {
        setText: 'Acceptar',
        cancelText: 'Cancel·lar',
        clearText: 'Esborrar',
        selectedText: '{count} seleccionat',
        selectedPluralText: '{count} seleccionats',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte'],
        dayNamesShort: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
        dayNamesMin: ['Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'],
        dayText: 'Dia',
        hourText: 'Hores',
        minuteText: 'Minuts',
        monthNames: ['Gener', 'Febrer', 'Mar&ccedil;', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des'],
        monthText: 'Mes',
        secText: 'Segons',
        timeFormat: 'HH:ii',
        yearText: 'Any',
        nowText: 'Ara',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Avui',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Temps',
        calendarText: 'Calendari',
        closeText: 'Tancar',
        fromText: 'Iniciar',
        toText: 'Final',
        wholeText: 'Sencer',
        fractionText: 'Fracció',
        unitText: 'Unitat',
        labels: ['Anys', 'Mesos', 'Dies', 'Hores', 'Minuts', 'Segons', ''],
        labelsShort: ['Anys', 'Mesos', 'Dies', 'Hrs', 'Mins', 'Secs', ''],
        startText: 'Iniciar',
        stopText: 'Aturar',
        resetText: 'Reiniciar',
        lapText: 'Volta',
        hideText: 'Amagar',
        backText: 'Tornar',
        undoText: 'Desfer',
        offText: 'No',
        onText: 'Si'
    };
}());
(function() {
    mobiscroll.i18n.cs = {
        setText: 'Zadej',
        cancelText: 'Storno',
        clearText: 'Vymazat',
        selectedText: 'Označený: {count}',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
        dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
        dayNamesMin: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'],
        dayText: 'Den',
        hourText: 'Hodiny',
        minuteText: 'Minuty',
        monthNames: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
        monthNamesShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Čvc', 'Spr', 'Zář', 'Říj', 'Lis', 'Pro'],
        monthText: 'Měsíc',
        secText: 'Sekundy',
        timeFormat: 'HH:ii',
        yearText: 'Rok',
        nowText: 'Teď',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Dnes',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Čas',
        calendarText: 'Kalendář',
        closeText: 'Zavřít',
        fromText: 'Začátek',
        toText: 'Konec',
        wholeText: 'Celý',
        fractionText: 'Část',
        unitText: 'Jednotka',
        labels: ['Roky', 'Měsíce', 'Dny', 'Hodiny', 'Minuty', 'Sekundy', ''],
        labelsShort: ['Rok', 'Měs', 'Dny', 'Hod', 'Min', 'Sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetovat',
        lapText: 'Etapa',
        hideText: 'Schovat',
        backText: 'Zpět',
        undoText: 'Rozlepit',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.da = {
        setText: 'Sæt',
        cancelText: 'Annuller',
        clearText: 'Ryd',
        selectedText: '{count} valgt',
        selectedPluralText: '{count} valgt',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        hourText: 'Timer',
        minuteText: 'Minutter',
        monthNames: ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Måned',
        secText: 'Sekunder',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH.ii',
        yearText: 'År',
        nowText: 'Nu',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Dato',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Luk',
        fromText: 'Start',
        toText: 'Slut',
        wholeText: 'Hele',
        fractionText: 'Dele',
        unitText: 'Enhed',
        labels: ['År', 'Måneder', 'Dage', 'Timer', 'Minutter', 'Sekunder', ''],
        labelsShort: ['År', 'Mdr', 'Dg', 'Timer', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Nulstil',
        lapText: 'Omgang',
        hideText: 'Skjul',
        offText: 'Fra',
        onText: 'Til',
        backText: 'Tilbage',
        undoText: 'Fortryd'
    };
}());
(function() {
    mobiscroll.i18n.de = {
        setText: 'OK',
        cancelText: 'Abbrechen',
        clearText: 'Löschen',
        selectedText: '{count} ausgewählt',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        dayNamesMin: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
        dayText: 'Tag',
        delimiter: '.',
        hourText: 'Stunde',
        minuteText: 'Minuten',
        monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        monthText: 'Monat',
        secText: 'Sekunden',
        timeFormat: 'HH:ii',
        yearText: 'Jahr',
        nowText: 'Jetzt',
        pmText: 'nachm.',
        amText: 'vorm.',
        todayText: 'Heute',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Zeit',
        calendarText: 'Kalender',
        closeText: 'Schließen',
        fromText: 'Von',
        toText: 'Um',
        wholeText: 'Ganze Zahl',
        fractionText: 'Bruchzahl',
        unitText: 'Maßeinheit',
        labels: ['Jahre', 'Monate', 'Tage', 'Stunden', 'Minuten', 'Sekunden', ''],
        labelsShort: ['Jahr.', 'Mon.', 'Tag.', 'Std.', 'Min.', 'Sek.', ''],
        startText: 'Starten',
        stopText: 'Stoppen',
        resetText: 'Zurücksetzen',
        lapText: 'Lap',
        hideText: 'Ausblenden',
        backText: 'Zurück',
        undoText: 'Rückgängig machen',
        offText: 'Aus',
        onText: 'Ein',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['en-GB'] = mobiscroll.i18n['en-UK'] = {
        dateFormat: 'dd/mm/yy',
        timeFormat: 'HH:ii'
    };
}());
(function() {
    mobiscroll.i18n.es = {
        setText: 'Aceptar',
        cancelText: 'Cancelar',
        clearText: 'Borrar',
        selectedText: '{count} seleccionado',
        selectedPluralText: '{count} seleccionados',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Mi&#xE9;rcoles', 'Jueves', 'Viernes', 'S&#xE1;bado'],
        dayNamesShort: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'S&#xE1;'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: 'D&#237;a',
        hourText: 'Horas',
        minuteText: 'Minutos',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        monthText: 'Mes',
        secText: 'Segundos',
        timeFormat: 'HH:ii',
        yearText: 'A&ntilde;o',
        nowText: 'Ahora',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Hoy',
        firstDay: 1,
        dateText: 'Fecha',
        timeText: 'Tiempo',
        calendarText: 'Calendario',
        closeText: 'Cerrar',
        fromText: 'Iniciar',
        toText: 'Final',
        wholeText: 'Entero',
        fractionText: 'Fracción',
        unitText: 'Unidad',
        labels: ['Años', 'Meses', 'Días', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Año', 'Mes', 'Día', 'Hora', 'Min', 'Seg', ''],
        startText: 'Iniciar',
        stopText: 'Deténgase',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'Volver',
        undoText: 'Deshacer',
        offText: 'No',
        onText: 'Sí',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    var a = {
        gDaysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        jDaysInMonth: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29]
    };
    a.jalaliToGregorian = function(j, h, i) {
        j = parseInt(j);
        h = parseInt(h);
        i = parseInt(i);
        var c;
        var f = j - 979;
        var l = h - 1;
        var k = i - 1;
        var g = 365 * f + parseInt(f / 33) * 8 + parseInt((f % 33 + 3) / 4);
        for (c = 0; c < l; ++c) {
            g += a.jDaysInMonth[c];
        }
        g += k;
        var b = g + 79;
        var d = 1600 + 400 * parseInt(b / 146097);
        b = b % 146097;
        var e = true;
        if (b >= 36525) {
            b--;
            d += 100 * parseInt(b / 36524);
            b = b % 36524;
            if (b >= 365) {
                b++;
            } else {
                e = false;
            }
        }
        d += 4 * parseInt(b / 1461);
        b %= 1461;
        if (b >= 366) {
            e = false;
            b--;
            d += parseInt(b / 365);
            b = b % 365;
        }
        for (c = 0; b >= a.gDaysInMonth[c] + (c == 1 && e); c++) {
            b -= a.gDaysInMonth[c] + (c == 1 && e);
        }
        var n = c + 1;
        var m = b + 1;
        return [d, n, m];
    };
    a.checkDate = function(c, b, d) {
        return !(c < 0 || c > 32767 || b < 1 || b > 12 || d < 1 || d > a.jDaysInMonth[b - 1] + (b == 12 && (c - 979) % 33 % 4 === 0));
    };
    a.gregorianToJalali = function(i, f, g) {
        i = parseInt(i);
        f = parseInt(f);
        g = parseInt(g);
        var c;
        var d = i - 1600;
        var h = f - 1;
        var k = g - 1;
        var e = 365 * d + parseInt((d + 3) / 4) - parseInt((d + 99) / 100) + parseInt((d + 399) / 400);
        for (c = 0; c < h; ++c) {
            e += a.gDaysInMonth[c];
        }
        if (h > 1 && (d % 4 === 0 && d % 100 !== 0 || d % 400 === 0)) {
            ++e;
        }
        e += k;
        var b = e - 79;
        var l = parseInt(b / 12053);
        b %= 12053;
        var j = 979 + 33 * l + 4 * parseInt(b / 1461);
        b %= 1461;
        if (b >= 366) {
            j += parseInt((b - 1) / 365);
            b = (b - 1) % 365;
        }
        for (c = 0; c < 11 && b >= a.jDaysInMonth[c]; ++c) {
            b -= a.jDaysInMonth[c];
        }
        var n = c + 1;
        var m = b + 1;
        return [j, n, m];
    };
    mobiscroll.i18n.fa = {
        setText: 'تاييد',
        cancelText: 'انصراف',
        clearText: 'واضح ',
        selectedText: '{count} منتخب',
        dateFormat: 'yy/mm/dd',
        dayNames: ['يکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
        dayNamesShort: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        dayNamesMin: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
        dayText: 'روز',
        hourText: 'ساعت',
        minuteText: 'دقيقه',
        monthNames: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthNamesShort: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthText: 'ماه',
        secText: 'ثانيه',
        timeFormat: 'HH:ii',
        yearText: 'سال',
        nowText: 'اکنون',
        amText: 'ب',
        pmText: 'ص',
        todayText: 'امروز',
        getYear: function(b) {
            return a.gregorianToJalali(b.getFullYear(), b.getMonth() + 1, b.getDate())[0];
        },
        getMonth: function(b) {
            return --a.gregorianToJalali(b.getFullYear(), b.getMonth() + 1, b.getDate())[1];
        },
        getDay: function(b) {
            return a.gregorianToJalali(b.getFullYear(), b.getMonth() + 1, b.getDate())[2];
        },
        getDate: function(d, b, e, f, g, h, i) {
            if (b < 0) {
                d += Math.floor(b / 12);
                b = 12 + b % 12;
            }
            if (b > 11) {
                d += Math.floor(b / 12);
                b = b % 12;
            }
            var c = a.jalaliToGregorian(d, +b + 1, e);
            return new Date(c[0], c[1] - 1, c[2], f || 0, g || 0, h || 0, i || 0);
        },
        getMaxDayOfMonth: function(c, d) {
            var b = 31;
            while (a.checkDate(c, d + 1, b) === false) {
                b--;
            }
            return b;
        },
        firstDay: 6,
        rtl: true,
        dateText: 'تاریخ ',
        timeText: 'زمان ',
        calendarText: 'تقویم',
        closeText: 'نزدیک',
        fromText: 'شروع ',
        toText: 'پایان',
        wholeText: 'تمام',
        fractionText: 'کسر',
        unitText: 'واحد',
        labels: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
        labelsShort: ['سال', 'ماه', 'روز', 'ساعت', 'دقیقه', 'ثانیه', ''],
        startText: 'شروع',
        stopText: 'پايان',
        resetText: 'تنظیم مجدد',
        lapText: 'Lap',
        hideText: 'پنهان کردن',
        backText: 'پشت',
        undoText: 'واچیدن'
    };
}());
(function() {
    mobiscroll.i18n.fr = {
        setText: 'Terminer',
        cancelText: 'Annuler',
        clearText: 'Effacer',
        selectedText: '{count} sélectionné',
        selectedPluralText: '{count} sélectionnés',
        dateFormat: 'dd/mm/yy',
        dayNames: ['&#68;imanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['&#68;im.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        dayNamesMin: ['&#68;', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: 'Jour',
        monthText: 'Mois',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        hourText: 'Heures',
        minuteText: 'Minutes',
        secText: 'Secondes',
        timeFormat: 'HH:ii',
        yearText: 'Année',
        nowText: 'Maintenant',
        pmText: 'après-midi',
        amText: 'avant-midi',
        todayText: "Aujourd'hui",
        firstDay: 1,
        dateText: 'Date',
        timeText: 'Heure',
        calendarText: 'Calendrier',
        closeText: 'Fermer',
        fromText: 'Démarrer',
        toText: 'Fin',
        wholeText: 'Entier',
        fractionText: 'Fraction',
        unitText: 'Unité',
        labels: ['Ans', 'Mois', 'Jours', 'Heures', 'Minutes', 'Secondes', ''],
        labelsShort: ['Ans', 'Mois', 'Jours', 'Hrs', 'Min', 'Sec', ''],
        startText: 'Démarrer',
        stopText: 'Arrêter',
        resetText: 'Réinitialiser',
        lapText: 'Lap',
        hideText: 'Cachez',
        backText: 'Arrière',
        undoText: 'Défaire',
        offText: 'Non',
        onText: 'Oui',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.he = {
        rtl: true,
        setText: 'שמירה',
        cancelText: 'ביטול',
        clearText: 'נקה',
        selectedText: '{count} נבחר',
        selectedPluralText: '{count} נבחרו',
        dateFormat: 'dd/mm/yy',
        dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
        dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
        dayNamesMin: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'],
        dayText: 'יום',
        hourText: 'שעות',
        minuteText: 'דקות',
        monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
        monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
        monthText: 'חודש',
        secText: 'שניות',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH:ii',
        yearText: 'שנה',
        nowText: 'עכשיו',
        firstDay: 0,
        dateText: 'תאריך',
        timeText: 'זמן',
        calendarText: 'תאריכון',
        closeText: 'סגירה',
        todayText: 'היום',
        eventText: 'מִקרֶה',
        eventsText: 'מִקרֶה',
        fromText: 'התחלה',
        toText: 'סיום',
        wholeText: 'כֹּל',
        fractionText: 'שבריר',
        unitText: 'יחידה',
        labels: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
        labelsShort: ['שנים', 'חודשים', 'ימים', 'שעות', 'דקות', 'שניים', ''],
        startText: 'התחל',
        stopText: 'עצור',
        resetText: 'אתחול',
        lapText: 'הקפה',
        hideText: 'הסתר',
        offText: 'כיבוי',
        onText: 'הפעלה',
        backText: 'חזור',
        undoText: 'ביטול פעולה'
    };
}());
(function() {
    mobiscroll.i18n.hu = {
        setText: 'OK',
        cancelText: 'Mégse',
        clearText: 'Törlés',
        selectedText: '{count} kiválasztva',
        dateFormat: 'yy.mm.dd.',
        dayNames: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
        dayNamesShort: ['Va', 'Hé', 'Ke', 'Sze', 'Csü', 'Pé', 'Szo'],
        dayNamesMin: ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'],
        dayText: 'Nap',
        delimiter: '.',
        hourText: 'Óra',
        minuteText: 'Perc',
        monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Hónap',
        secText: 'Másodperc',
        timeFormat: 'H:ii',
        yearText: 'Év',
        nowText: 'Most',
        pmText: 'de',
        amText: 'du',
        firstDay: 1,
        dateText: 'Dátum',
        timeText: 'Idő',
        calendarText: 'Naptár',
        todayText: 'Ma',
        prevMonthText: 'Előző hónap',
        nextMonthText: 'Következő hónap',
        prevYearText: 'Előző év',
        nextYearText: 'Következő év',
        closeText: 'Bezár',
        eventText: 'esemény',
        eventsText: 'esemény',
        fromText: 'Eleje',
        toText: 'Vége',
        wholeText: 'Egész',
        fractionText: 'Tört',
        unitText: 'Egység',
        labels: ['Év', 'Hónap', 'Nap', 'Óra', 'Perc', 'Másodperc', ''],
        labelsShort: ['Év', 'Hó.', 'Nap', 'Óra', 'Perc', 'Mp.', ''],
        startText: 'Indít',
        stopText: 'Megállít',
        resetText: 'Visszaállít',
        lapText: 'Lap',
        hideText: 'Elrejt',
        backText: 'Vissza',
        undoText: 'Visszavon',
        offText: 'Ki',
        onText: 'Be',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.it = {
        setText: 'OK',
        cancelText: 'Annulla',
        clearText: 'Chiarire',
        selectedText: '{count} selezionato',
        selectedPluralText: '{count} selezionati',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domenica', 'Lunedì', 'Mertedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
        dayNamesShort: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'G', 'V', 'S'],
        dayText: 'Giorno',
        hourText: 'Ore',
        minuteText: 'Minuti',
        monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
        monthText: 'Mese',
        secText: 'Secondi',
        timeFormat: 'HH:ii',
        yearText: 'Anno',
        nowText: 'Ora',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Oggi',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Volta',
        calendarText: 'Calendario',
        closeText: 'Chiudere',
        fromText: 'Inizio',
        toText: 'Fine',
        wholeText: 'Intero',
        fractionText: 'Frazione',
        unitText: 'Unità',
        labels: ['Anni', 'Mesi', 'Giorni', 'Ore', 'Minuti', 'Secondi', ''],
        labelsShort: ['Anni', 'Mesi', 'Gio', 'Ore', 'Min', 'Sec', ''],
        startText: 'Inizio',
        stopText: 'Arresto',
        resetText: 'Ripristina',
        lapText: 'Lap',
        hideText: 'Nascondi',
        backText: 'Indietro',
        undoText: 'Annulla',
        offText: 'Via',
        onText: 'Su',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.ja = {
        setText: 'セット',
        cancelText: 'キャンセル',
        clearText: 'クリア',
        selectedText: '{count} 選択',
        dateFormat: 'yy年mm月dd日',
        dayNames: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
        dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
        dayText: '日',
        hourText: '時',
        minuteText: '分',
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthText: '月',
        secText: '秒',
        timeFormat: 'HH:ii',
        yearText: '年',
        nowText: '今',
        pmText: '午後',
        amText: '午前',
        yearSuffix: '年',
        monthSuffix: '月',
        daySuffix: '日',
        todayText: '今日',
        dateText: '日付',
        timeText: '時間',
        calendarText: 'カレンダー',
        closeText: 'クローズ',
        fromText: '開始',
        toText: '終わり',
        wholeText: '全数',
        fractionText: '分数',
        unitText: '単位',
        labels: ['年間', '月間', '日間', '時間', '分', '秒', ''],
        labelsShort: ['年間', '月間', '日間', '時間', '分', '秒', ''],
        startText: '開始',
        stopText: '停止',
        resetText: 'リセット',
        lapText: 'ラップ',
        hideText: '隠す',
        backText: 'バック',
        undoText: 'アンドゥ'
    };
}());
(function() {
    mobiscroll.i18n.lt = {
        setText: 'OK',
        cancelText: 'Atšaukti',
        clearText: 'Išvalyti',
        selectedText: 'Pasirinktas {count}',
        selectedPluralText: 'Pasirinkti {count}',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'],
        dayNamesShort: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
        dayNamesMin: ['S', 'Pr', 'A', 'T', 'K', 'Pn', 'Š'],
        dayText: 'Diena',
        hourText: 'Valanda',
        minuteText: 'Minutes',
        monthNames: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
        monthNamesShort: ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gruo'],
        monthText: 'Mėnuo',
        secText: 'Sekundes',
        amText: 'am',
        pmText: 'pm',
        timeFormat: 'HH:ii',
        yearText: 'Metai',
        nowText: 'Dabar',
        todayText: 'Šiandien',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Laikas',
        calendarText: 'Kalendorius',
        closeText: 'Uždaryti',
        fromText: 'Nuo',
        toText: 'Iki',
        wholeText: 'Visas',
        fractionText: 'Frakcija',
        unitText: 'Vienetas',
        labels: ['Metai', 'Mėnesiai', 'Dienos', 'Valandos', 'Minutes', 'Sekundes', ''],
        labelsShort: ['m', 'mėn.', 'd', 'h', 'min', 's', ''],
        startText: 'Pradėti',
        stopText: 'Sustabdyti',
        resetText: 'Išnaujo',
        lapText: 'Ratas',
        hideText: 'Slėpti',
        backText: 'Atgal',
        undoText: 'Atšaukti veiksmą',
        offText: 'Išj.',
        onText: 'Įj.',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.nl = {
        setText: 'Instellen',
        cancelText: 'Annuleren',
        clearText: 'Duidelijk',
        selectedText: '{count} gekozen',
        dateFormat: 'dd-mm-yy',
        dayNames: ['zondag', 'maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
        dayNamesShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
        dayNamesMin: ['z', 'm', 'd', 'w', 'd', 'v', 'z'],
        dayText: 'Dag',
        hourText: 'Uur',
        minuteText: 'Minuten',
        monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
        monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
        monthText: 'Maand',
        secText: 'Seconden',
        timeFormat: 'HH:ii',
        yearText: 'Jaar',
        nowText: 'Nu',
        pmText: 'pm',
        amText: 'am',
        todayText: 'Vandaag',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Tijd',
        calendarText: 'Kalender',
        closeText: 'Sluiten',
        fromText: 'Start',
        toText: 'Einde',
        wholeText: 'geheel',
        fractionText: 'fractie',
        unitText: 'eenheid',
        labels: ['Jaren', 'Maanden', 'Dagen', 'Uren', 'Minuten', 'Seconden', ''],
        labelsShort: ['j', 'm', 'd', 'u', 'min', 'sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Reset',
        lapText: 'Ronde',
        hideText: 'Verbergen',
        backText: 'Terug',
        undoText: 'Onged. maken',
        offText: 'Uit',
        onText: 'Aan',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.no = {
        setText: 'OK',
        cancelText: 'Avbryt',
        clearText: 'Tømme',
        selectedText: '{count} valgt',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
        dayNamesShort: ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        delimiter: '.',
        hourText: 'Time',
        minuteText: 'Minutt',
        monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
        monthText: 'Måned',
        secText: 'Sekund',
        timeFormat: 'HH:ii',
        yearText: 'År',
        nowText: 'Nå',
        pmText: 'pm',
        amText: 'am',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Dato',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Lukk',
        fromText: 'Start',
        toText: 'End',
        wholeText: 'Hele',
        fractionText: 'Fraksjon',
        unitText: 'Enhet',
        labels: ['År', 'Måneder', 'Dager', 'Timer', 'Minutter', 'Sekunder', ''],
        labelsShort: ['År', 'Mån', 'Dag', 'Time', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stopp',
        resetText: 'Tilbakestille',
        lapText: 'Runde',
        hideText: 'Skjul',
        backText: 'Tilbake',
        undoText: 'Angre',
        offText: 'Av',
        onText: 'På',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.pl = {
        setText: 'Zestaw',
        cancelText: 'Anuluj',
        clearText: 'Oczyścić',
        selectedText: 'Wybór: {count}',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
        dayNamesShort: ['Niedz.', 'Pon.', 'Wt.', 'Śr.', 'Czw.', 'Pt.', 'Sob.'],
        dayNamesMin: ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'],
        dayText: 'Dzień',
        hourText: 'Godziny',
        minuteText: 'Minuty',
        monthNames: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        monthNamesShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'],
        monthText: 'Miesiąc',
        secText: 'Sekundy',
        timeFormat: 'HH:ii',
        yearText: 'Rok',
        nowText: 'Teraz',
        amText: 'rano',
        pmText: 'po południu',
        todayText: 'Dzisiaj',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Czas',
        calendarText: 'Kalendarz',
        closeText: 'Zakończenie',
        fromText: 'Rozpoczęcie',
        toText: 'Koniec',
        wholeText: 'Cały',
        fractionText: 'Ułamek',
        unitText: 'Jednostka',
        labels: ['Lata', 'Miesiąc', 'Dni', 'Godziny', 'Minuty', 'Sekundy', ''],
        labelsShort: ['R', 'M', 'Dz', 'Godz', 'Min', 'Sek', ''],
        startText: 'Rozpoczęcie',
        stopText: 'Zatrzymać',
        resetText: 'Zresetować',
        lapText: 'Zakładka',
        hideText: 'Ukryć',
        backText: 'Z powrotem',
        undoText: 'Cofnij',
        offText: 'Wył',
        onText: 'Wł',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['pt-BR'] = {
        setText: 'Selecionar',
        cancelText: 'Cancelar',
        clearText: 'Claro',
        selectedText: '{count} selecionado',
        selectedPluralText: '{count} selecionados',
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        dayText: 'Dia',
        hourText: 'Hora',
        minuteText: 'Minutos',
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        monthText: 'Mês',
        secText: 'Segundo',
        timeFormat: 'HH:ii',
        yearText: 'Ano',
        nowText: 'Agora',
        pmText: 'da tarde',
        amText: 'da manhã',
        todayText: 'Hoje',
        dateText: 'Data',
        timeText: 'Tempo',
        calendarText: 'Calendário',
        closeText: 'Fechar',
        fromText: 'In&iacute;cio',
        toText: 'Fim',
        wholeText: 'Inteiro',
        fractionText: 'Fração',
        unitText: 'Unidade',
        labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
        startText: 'Começar',
        stopText: 'Pare',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'De volta',
        undoText: 'Desfazer',
        offText: 'Desl',
        onText: 'Lig',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['pt-PT'] = {
        setText: 'Seleccionar',
        cancelText: 'Cancelar',
        clearText: 'Claro',
        selectedText: '{count} selecionado',
        selectedPluralText: '{count} selecionados',
        dateFormat: 'dd-mm-yy',
        dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'S&aacute;bado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&aacute;b'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        dayText: 'Dia',
        hourText: 'Horas',
        minuteText: 'Minutos',
        monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        monthText: 'M&ecirc;s',
        secText: 'Segundo',
        timeFormat: 'HH:ii',
        yearText: 'Ano',
        nowText: 'Actualizar',
        pmText: 'da tarde',
        amText: 'da manhã',
        todayText: 'Hoy',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Tempo',
        calendarText: 'Calend&aacute;rio',
        closeText: 'Fechar',
        fromText: 'In&iacute;cio',
        toText: 'Fim',
        wholeText: 'Inteiro',
        fractionText: 'Frac&ccedil;&atilde;o',
        unitText: 'Unidade',
        labels: ['Anos', 'Meses', 'Dias', 'Horas', 'Minutos', 'Segundos', ''],
        labelsShort: ['Ano', 'M&ecirc;s', 'Dia', 'Hora', 'Min', 'Seg', ''],
        startText: 'Come&ccedil;ar',
        stopText: 'Parar',
        resetText: 'Reinicializar',
        lapText: 'Lap',
        hideText: 'Esconder',
        backText: 'De volta',
        undoText: 'Anular',
        offText: 'Desl',
        onText: 'Lig',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.ro = {
        setText: 'Setare',
        cancelText: 'Anulare',
        clearText: 'Ştergere',
        selectedText: '{count} selectat',
        selectedPluralText: '{count} selectate',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
        dayNamesShort: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        dayText: ' Ziua',
        delimiter: '.',
        hourText: ' Ore ',
        minuteText: 'Minute',
        monthNames: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
        monthNamesShort: ['Ian.', 'Feb.', 'Mar.', 'Apr.', 'Mai', 'Iun.', 'Iul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
        monthText: 'Luna',
        secText: 'Secunde',
        timeFormat: 'HH:ii',
        yearText: 'Anul',
        nowText: 'Acum',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Astăzi',
        firstDay: 1,
        dateText: 'Data',
        timeText: 'Ora',
        calendarText: 'Calendar',
        closeText: 'Închidere',
        fromText: 'Start',
        toText: 'Final',
        wholeText: 'Complet',
        fractionText: 'Parţial',
        unitText: 'Unitate',
        labels: ['Ani', 'Luni', 'Zile', 'Ore', 'Minute', 'Secunde', ''],
        labelsShort: ['Ani', 'Luni', 'Zile', 'Ore', 'Min.', 'Sec.', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetare',
        lapText: 'Tură',
        hideText: 'Ascundere',
        backText: 'Înapoi',
        undoText: 'Anulaţi',
        offText: 'Nu',
        onText: 'Da',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['ru-UA'] = {
        setText: 'Установить',
        cancelText: 'Отменить',
        clearText: 'Очиститьr',
        selectedText: '{count} Вібрать',
        dateFormat: 'dd.mm.yy',
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
        dayText: 'День',
        delimiter: '.',
        hourText: 'Часы',
        minuteText: 'Минуты',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв.', 'Февр.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сент.', 'Окт.', 'Нояб.', 'Дек.'],
        monthText: 'Месяцы',
        secText: 'Сикунды',
        timeFormat: 'HH:ii',
        yearText: 'Год',
        nowText: 'Сейчас',
        amText: 'До полудня',
        pmText: 'После полудня',
        todayText: 'Cегодня',
        firstDay: 1,
        dateText: 'Дата',
        timeText: 'Время',
        calendarText: 'Календарь',
        closeText: 'Закрыть',
        fromText: 'Начало',
        toText: 'Конец',
        wholeText: 'Весь',
        fractionText: 'Часть',
        unitText: 'Единица',
        labels: ['Годы', ' Месяцы ', ' Дни ', ' Часы ', ' Минуты ', ' Секунды', ''],
        labelsShort: ['Год', 'Мес.', 'Дн.', 'Ч.', 'Мин.', 'Сек.', ''],
        startText: 'Старт',
        stopText: 'Стоп',
        resetText: ' Сброс ',
        lapText: ' Этап ',
        hideText: ' Скрыть ',
        backText: 'назад',
        undoText: 'аннулировать',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n['ru-RU'] = mobiscroll.i18n.ru = {
        setText: 'Установить',
        cancelText: 'Отмена',
        clearText: 'Очистить',
        selectedText: '{count} Выбрать',
        dateFormat: 'dd.mm.yy',
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        dayNamesMin: ['в', 'п', 'в', 'с', 'ч', 'п', 'с'],
        dayText: 'День',
        delimiter: '.',
        hourText: 'Час',
        minuteText: 'Минут',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        monthText: 'Месяц',
        secText: 'Секунд',
        timeFormat: 'HH:ii',
        yearText: 'Год',
        nowText: 'Сейчас',
        amText: 'До полудня',
        pmText: 'После полудня',
        todayText: 'Cегодня',
        firstDay: 1,
        dateText: 'Дата',
        timeText: 'Время',
        calendarText: 'Календарь',
        closeText: 'Закрыть',
        fromText: 'Начало',
        toText: 'Конец',
        wholeText: 'Целое',
        fractionText: 'Дробное',
        unitText: 'Единица',
        labels: ['Лет', 'Месяцев', 'Дней', 'Часов', 'Минут', 'Секунд', ''],
        labelsShort: ['Лет', 'Мес', 'Дн', 'Час', 'Мин', 'Сек', ''],
        startText: 'Старт',
        stopText: 'Стоп',
        resetText: 'Сбросить',
        lapText: 'Круг',
        hideText: 'Скрыть',
        backText: 'назад',
        undoText: 'аннулировать',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.sk = {
        setText: 'Zadaj',
        cancelText: 'Zrušiť',
        clearText: 'Vymazať',
        selectedText: 'Označený: {count}',
        dateFormat: 'd.m.yy',
        dayNames: ['Nedeľa', 'Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota'],
        dayNamesShort: ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So'],
        dayNamesMin: ['N', 'P', 'U', 'S', 'Š', 'P', 'S'],
        dayText: 'Ďeň',
        hourText: 'Hodiny',
        minuteText: 'Minúty',
        monthNames: ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Mesiac',
        secText: 'Sekundy',
        timeFormat: 'H:ii',
        yearText: 'Rok',
        nowText: 'Teraz',
        amText: 'am',
        pmText: 'pm',
        todayText: 'Dnes',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Čas',
        calendarText: 'Kalendár',
        closeText: 'Zavrieť',
        fromText: 'Začiatok',
        toText: 'Koniec',
        wholeText: 'Celý',
        fractionText: 'Časť',
        unitText: 'Jednotka',
        labels: ['Roky', 'Mesiace', 'Dni', 'Hodiny', 'Minúty', 'Sekundy', ''],
        labelsShort: ['Rok', 'Mes', 'Dni', 'Hod', 'Min', 'Sec', ''],
        startText: 'Start',
        stopText: 'Stop',
        resetText: 'Resetovať',
        lapText: 'Etapa',
        hideText: 'Schovať',
        backText: 'Späť',
        undoText: 'Späť',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function() {
    mobiscroll.i18n.sv = {
        setText: 'OK',
        cancelText: 'Avbryt',
        clearText: 'Klara',
        selectedText: '{count} vald',
        dateFormat: 'yy-mm-dd',
        dayNames: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
        dayNamesShort: ['Sö', 'Må', 'Ti', 'On', 'To', 'Fr', 'Lö'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        dayText: 'Dag',
        hourText: 'Timme',
        minuteText: 'Minut',
        monthNames: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
        monthText: 'Månad',
        secText: 'Sekund',
        timeFormat: 'HH:ii',
        yearText: 'År',
        nowText: 'Nu',
        pmText: 'pm',
        amText: 'am',
        todayText: 'I dag',
        firstDay: 1,
        dateText: 'Datum',
        timeText: 'Tid',
        calendarText: 'Kalender',
        closeText: 'Stäng',
        fromText: 'Start',
        toText: 'Slut',
        wholeText: 'Hela',
        fractionText: 'Bråk',
        unitText: 'Enhet',
        labels: ['År', 'Månader', 'Dagar', 'Timmar', 'Minuter', 'Sekunder', ''],
        labelsShort: ['År', 'Mån', 'Dag', 'Tim', 'Min', 'Sek', ''],
        startText: 'Start',
        stopText: 'Stopp',
        resetText: 'Återställ',
        lapText: 'Varv',
        hideText: 'Dölj',
        backText: 'Tillbaka',
        undoText: 'Ångra',
        offText: 'Av',
        onText: 'På'
    };
}());
(function() {
    mobiscroll.i18n.tr = {
        setText: 'Seç',
        cancelText: 'İptal',
        clearText: 'Temizleyin',
        selectedText: '{count} seçilmiş',
        dateFormat: 'dd.mm.yy',
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
        dayNamesMin: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
        dayText: 'Gün',
        delimiter: '.',
        hourText: 'Saat',
        minuteText: 'Dakika',
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
        monthText: 'Ay',
        secText: 'Saniye',
        timeFormat: 'HH:ii',
        yearText: 'Yıl',
        nowText: 'Şimdi',
        pmText: 'akşam',
        amText: 'sabah',
        todayText: 'Bugün',
        firstDay: 1,
        dateText: 'Tarih',
        timeText: 'Zaman',
        calendarText: 'Takvim',
        closeText: 'Kapatmak',
        fromText: 'Başla',
        toText: 'Son',
        wholeText: 'Tam',
        fractionText: 'Kesir',
        unitText: 'Birim',
        labels: ['Yıl', 'Ay', 'Gün', 'Saat', 'Dakika', 'Saniye', ''],
        labelsShort: ['Yıl', 'Ay', 'Gün', 'Sa', 'Dak', 'Sn', ''],
        startText: 'Başla',
        stopText: 'Durdur',
        resetText: 'Sıfırla',
        lapText: 'Tur',
        hideText: 'Gizle',
        backText: 'Geri',
        undoText: 'Geri Al',
        offText: 'O',
        onText: 'I',
        decimalSeparator: ',',
        thousandsSeparator: '.'
    };
}());
(function() {
    mobiscroll.i18n.zh = {
        setText: '确定',
        cancelText: '取消',
        clearText: '明确',
        selectedText: '{count} 选',
        dateFormat: 'yy/mm/dd',
        dayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        dayText: '日',
        hourText: '时',
        minuteText: '分',
        monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        monthText: '月',
        secText: '秒',
        timeFormat: 'HH:ii',
        yearText: '年',
        nowText: '当前',
        pmText: '下午',
        amText: '上午',
        todayText: '今天',
        dateText: '日',
        timeText: '时间',
        calendarText: '日历',
        closeText: '关闭',
        fromText: '开始时间',
        toText: '结束时间',
        wholeText: '合计',
        fractionText: '分数',
        unitText: '单位',
        labels: ['年', '月', '日', '小时', '分钟', '秒', ''],
        labelsShort: ['年', '月', '日', '点', '分', '秒', ''],
        startText: '开始',
        stopText: '停止',
        resetText: '重置',
        lapText: '圈',
        hideText: '隐藏',
        backText: '背部',
        undoText: '复原',
        offText: '关闭',
        onText: '开启',
        decimalSeparator: ',',
        thousandsSeparator: ' '
    };
}());
(function(o78, M78, L78) {
	var v78, P78, J78 = mobiscroll,
		y78 = J78.$,
		W78 = J78.platform,
		c78 = J78.util,
		l78 = c78.constrain,
		u78 = c78.isString,
		e78 = c78.getCoord,
		i78 = /(iphone|ipod)/i.test(navigator.userAgent) && W78.majorVersion >= 7,
		m78 = W78.name == 'ios' && W78.majorVersion == 8,
		g78 = 'webkitAnimationEnd.mbsc animationend.mbsc',
		A78 = function() {},
		T78 = function(X78) {
			X78.preventDefault();
		};
	J78.classes.Frame = function(g58, m58, X58) {
		var k58, a78, M58, y58, H78, n58, A58, Y58, B78, e58, D58, z78, E78, p78, F78, N58, G58, x58, s78, d78, Q58, S58, J58, C78, w58, q58, f78, I58, K58, V58, O78, U58, Z58, R78 = this,
			r78 = y78(g58),
			t58 = [],
			b58 = {};
		function i58(R58) {
			if (z78) {
				z78.removeClass('mbsc-fr-btn-a');
			}
			z78 = y78(this);
			if (!z78.hasClass('mbsc-fr-btn-d') && !z78.hasClass('mbsc-fr-btn-nhl')) {
				z78.addClass('mbsc-fr-btn-a');
			}
			if (R58.type === 'mousedown') {
				y78(M78).on('mouseup', j58);
			} else if (R58.type === 'pointerdown') {
				y78(M78).on('pointerup', j58);
			}
		}
		function j58(f58) {
			if (z78) {
				z78.removeClass('mbsc-fr-btn-a');
				z78 = null;
			}
			if (f58.type === 'mouseup') {
				y78(M78).off('mouseup', j58);
			} else if (f58.type === 'pointerup') {
				y78(M78).off('pointerup', j58);
			}
		}
		function P58(H58) {
			if (H58.keyCode == 13) {
				R78.select();
			} else if (H58.keyCode == 27) {
				R78.cancel();
			}
		}
		function v58(r58) {
			if (!r58) {
				J58.focus();
			}
			R78.ariaMessage(f78.ariaMessage);
		}
		function W58(O58) {
			var E58 = v78,
				F58 = f78.focusOnClose;
			R78._markupRemove();
			H78.remove();
			if (F78) {
				y58.removeClass(G58);
				if (S58) {
					a78.css({
						top: '',
						left: ''
					});
					B78.scrollLeft(I58);
					B78.scrollTop(V58);
				}
			}
			if (!O58) {
				if (!E58) {
					E58 = r78;
				}
				setTimeout(function() {
					if (J78.activeInstance) {
						return;
					}
					if (F58 === L78 || F58 === true) {
						P78 = true;
						E58[0].focus();
					} else if (F58) {
						y78(F58)[0].focus();
					}
				}, 200);
			}
			v78 = null;
			R78._isVisible = false;
			N58 = false;
			O78('onHide');
		}
		function L58(B58) {
			clearTimeout(b58[B58.type]);
			b58[B58.type] = setTimeout(function() {
				var p58, a58 = B58.type == 'scroll';
				if (a58 && !K58) {
					return;
				}
				R78.position(!a58);
				if (B58.type == 'orientationchange') {
					C78.style.display = 'none';
					p58 = C78.offsetHeight;
					C78.style.display = '';
				}
			}, 200);
		}
		function l58(z58) {
			if (z58.target.nodeType && !C78.contains(z58.target)) {
				C78.focus();
			}
		}
		function T58() {
			if (y78(M78.activeElement).is('input,textarea')) {
				M78.activeElement.blur();
			}
		}
		function h58(C58, d58) {
			if (C58) {
				C58();
			}
			if (R78.show() !== false) {
				v78 = d58;
				setTimeout(function() {
					P78 = false;
				}, 300);
			}
		}
		function o58() {
			R78._fillValue();
			O78('onSet', {
				valueText: R78._value
			});
		}
		function c58() {
			O78('onCancel', {
				valueText: R78._value
			});
		}
		function u58() {
			R78.setVal(null, true);
		}
		J78.classes.Base.call(this, g58, m58, true);
		R78.position = function(y38) {
			var n38, t38, K38, V38, S38, U38, I38, G38, N38, k38, b38, s58, Y38, Z38, D38, j38, q38 = {},
				Q38 = 0,
				x38 = 0,
				h38 = 0,
				w38 = 0;
			if (q58 || !N58) {
				return;
			}
			R78._position(H78);
			s58 = x58.offsetHeight;
			Y38 = x58.offsetWidth;
			if (U58 === Y38 && Z58 === s58 && y38) {
				return;
			}
			if (R78._isFullScreen || /top|bottom/.test(f78.display)) {
				Y58.width(Y38);
			}
			if (O78('onPosition', {
					target: x58,
					windowWidth: Y38,
					windowHeight: s58
				}) === false || !F78) {
				return;
			}
			y78('.mbsc-comp', H78).each(function() {
				var J38 = J78.instances[this.id];
				if (J38 && J38 !== R78 && J38.position) {
					J38.position();
				}
			});
			if (!R78._isFullScreen && /center|bubble/.test(f78.display)) {
				y78('.mbsc-w-p', H78).each(function() {
					Z38 = this.getBoundingClientRect().width;
					w38 += Z38;
					h38 = Z38 > h38 ? Z38 : h38;
				});
				e58.css({
					'width': w38 > Y38 ? h38 : w38,
					'white-space': w38 > Y38 ? '' : 'nowrap'
				});
			}
			s78 = C78.offsetWidth;
			d78 = C78.offsetHeight;
			R78.scrollLock = K58 = d78 <= s58 && s78 <= Y38;
			if (Q58) {
				Q38 = B78.scrollLeft();
				x38 = B78.scrollTop();
			}
			if (f78.display == 'center') {
				j38 = Math.max(0, Q38 + (Y38 - s78) / 2);
				D38 = Math.max(0, x38 + (s58 - d78) / 2);
			} else if (f78.display == 'bubble') {
				n38 = f78.anchor === L78 ? r78 : y78(f78.anchor);
				I38 = y78('.mbsc-fr-arr-i', H78)[0];
				V38 = n38.offset();
				S38 = V38.top + (p78 ? x38 - a78.offset().top : 0);
				U38 = V38.left + (p78 ? Q38 - a78.offset().left : 0);
				t38 = n38[0].offsetWidth;
				K38 = n38[0].offsetHeight;
				G38 = I38.offsetWidth;
				N38 = I38.offsetHeight;
				j38 = l78(U38 - (s78 - t38) / 2, Q38 + 8, Q38 + Y38 - s78 - 8);
				D38 = S38 - d78 - N38 / 2;
				if (D38 < x38 || S38 > x38 + s58) {
					Y58.removeClass('mbsc-fr-bubble-top').addClass('mbsc-fr-bubble-bottom');
					D38 = S38 + K38 + N38 / 2;
				} else {
					Y58.removeClass('mbsc-fr-bubble-bottom').addClass('mbsc-fr-bubble-top');
				}
				y78('.mbsc-fr-arr', H78).css({
					left: l78(U38 + t38 / 2 - (j38 + (s78 - G38) / 2), 0, G38)
				});
			} else {
				j38 = Q38;
				D38 = f78.display == 'top' ? x38 : Math.max(0, x38 + s58 - d78);
			}
			if (Q58) {
				k38 = Math.max(D38 + d78, p78 ? a78[0].scrollHeight : y78(M78).height());
				b38 = Math.max(j38 + s78, p78 ? a78[0].scrollWidth : y78(M78).width());
				A58.css({
					width: b38,
					height: k38
				});
				if (f78.scroll && f78.display == 'bubble' && (D38 + d78 + 8 > x38 + s58 || S38 > x38 + s58 || S38 + K38 < x38)) {
					q58 = true;
					setTimeout(function() {
						q58 = false;
					}, 300);
					B78.scrollTop(Math.min(S38, D38 + d78 - s58 + 8, k38 - s58));
				}
			}
			q38.top = D38;
			q38.left = j38;
			Y58.css(q38);
			U58 = Y38;
			Z58 = s58;
		};
		R78.attachShow = function(g38, c38) {
			var M38, A38 = y78(g38),
				e38 = A38.prop('readonly');
			if (f78.display !== 'inline') {
				if ((f78.showOnFocus || f78.showOnTap) && A38.is('input,select')) {
					A38.prop('readonly', true).on('mousedown.mbsc', function(o38) {
						o38.preventDefault();
					}).on('focus.mbsc', function() {
						if (R78._isVisible) {
							this.blur();
						}
					});
					M38 = y78('label[for="' + A38.attr('id') + '"]');
					if (!M38.length) {
						M38 = A38.closest('label');
					}
				}
				if (A38.is('select')) {
					return;
				}
				if (f78.showOnFocus) {
					A38.on('focus.mbsc', function() {
						if (!P78) {
							h58(c38, A38);
						}
					});
				}
				if (f78.showOnTap) {
					A38.on('keydown.mbsc', function(u38) {
						if (u38.keyCode == 32 || u38.keyCode == 13) {
							u38.preventDefault();
							u38.stopPropagation();
							h58(c38, A38);
						}
					});
					R78.tap(A38, function() {
						h58(c38, A38);
					});
					if (M38 && M38.length) {
						R78.tap(M38, function() {
							h58(c38, A38);
						});
					}
				}
				t58.push({
					readOnly: e38,
					el: A38,
					lbl: M38
				});
			}
		};
		R78.select = function() {
			if (F78) {
				R78.hide(false, 'set', false, o58);
			} else {
				o58();
			}
		};
		R78.cancel = function() {
			if (F78) {
				R78.hide(false, 'cancel', false, c58);
			} else {
				c58();
			}
		};
		R78.clear = function() {
			R78._clearValue();
			O78('onClear');
			if (F78 && R78._isVisible && !R78.live) {
				R78.hide(false, 'clear', false, u58);
			} else {
				u58();
			}
		};
		R78.enable = function() {
			f78.disabled = false;
			if (R78._isInput) {
				r78.prop('disabled', false);
			}
		};
		R78.disable = function() {
			f78.disabled = true;
			if (R78._isInput) {
				r78.prop('disabled', true);
			}
		};
		R78.show = function(m38, L38) {
			var i38, v38;
			if (f78.disabled || R78._isVisible) {
				return;
			}
			R78._readValue();
			if (O78('onBeforeShow') === false) {
				return false;
			}
			E78 = f78.animate;
			D58 = f78.buttons || [];
			Q58 = p78 || f78.display == 'bubble';
			S58 = i78 && !Q58;
			i38 = D58.length > 0;
			if (E78 !== false) {
				if (f78.display == 'top') {
					E78 = 'slidedown';
				} else if (f78.display == 'bottom') {
					E78 = 'slideup';
				} else if (f78.display == 'center' || f78.display == 'bubble') {
					E78 = f78.animate || 'pop';
				}
			}
			if (F78) {
				G58 = 'mbsc-fr-lock' + (S58 ? ' mbsc-fr-lock-ios' : '') + (p78 ? ' mbsc-fr-lock-ctx' : '');
				V58 = Math.max(0, B78.scrollTop());
				I58 = Math.max(0, B78.scrollLeft());
				U58 = 0;
				Z58 = 0;
				if (S58) {
					a78.css({
						top: -V58 + 'px',
						left: -I58 + 'px'
					});
				}
				y58.addClass(G58);
				T58();
				if (J78.activeInstance) {
					J78.activeInstance.hide();
				}
				J78.activeInstance = R78;
			}

			v38 = '<div lang="' + f78.lang + '" class="mbsc-fr mbsc-no-touch mbsc-' + f78.theme + (f78.baseTheme ? ' mbsc-' + f78.baseTheme : '') + ' mbsc-fr-' + f78.display + ' ' + (f78.cssClass || '') + ' ' + (f78.compClass || '') + (R78._isLiquid ? ' mbsc-fr-liq' : '') + (S58 ? ' mbsc-platform-ios' : '') + (i38 ? D58.length >= 3 ? ' mbsc-fr-btn-block ' : '' : ' mbsc-fr-nobtn') + '">' + (F78 ? '<div class="mbsc-fr-persp"><div class="mbsc-fr-overlay"></div><div role="dialog" tabindex="-1" class="mbsc-fr-scroll">' : '') + '<div class="mbsc-fr-popup' + (f78.rtl ? ' mbsc-rtl' : ' mbsc-ltr') + (f78.headerText ? ' mbsc-fr-has-hdr' : '') + '">' + (f78.display === 'bubble' ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>' : '') + '<div class="mbsc-fr-w">' + '<div aria-live="assertive" class="mbsc-fr-aria mbsc-fr-hdn"></div>' + (f78.headerText ? '<div class="mbsc-fr-hdr">' + (u78(f78.headerText) ? f78.headerText : '') + '</div>' : '') + '<div class="mbsc-fr-c">';
			v38 += R78._generateContent();
			v38 += '</div>';
            if (i38) {
                v38 += '<div class="mbsc-fr-btn-cont">';
                y78.each(D58, function(b, a) {
                    a = u78(a) ? R78.buttons[a] : a;
                    if (a.handler === 'set') {
                        a.parentClass = 'mbsc-fr-btn-s';
                    }
                    if (a.handler === 'cancel') {
                        a.parentClass = 'mbsc-fr-btn-c';
                    }
                    v38 += '<div' + (f78.btnWidth ? ' style="width:' + 100 / D58.length + '%"' : '') + ' class="mbsc-fr-btn-w ' + (a.parentClass || '') + '"><div tabindex="0" role="button" class="mbsc-fr-btn' + b + ' mbsc-fr-btn-e ' + (a.cssClass === L78 ? f78.btnClass : a.cssClass) + (a.icon ? ' mbsc-ic mbsc-ic-' + a.icon : '') + '">' + (a.text || '') + '</div></div>';
                });
                v38 += '</div>';
            }
            v38 += '</div></div></div></div>' + (F78 ? '</div></div>' : '');
			H78 = y78(v38);
			A58 = y78('.mbsc-fr-persp', H78);
			n58 = y78('.mbsc-fr-scroll', H78);
			e58 = y78('.mbsc-fr-w', H78);
			M58 = y78('.mbsc-fr-hdr', H78);
			Y58 = y78('.mbsc-fr-popup', H78);
			k58 = y78('.mbsc-fr-aria', H78);
			x58 = H78[0];
			J58 = n58[0];
			C78 = Y58[0];
			R78._markup = H78;
			R78._header = M58;
			R78._isVisible = true;
			w58 = 'orientationchange resize';
			R78._markupReady(H78);
			O78('onMarkupReady', {
				target: x58
			});
			if (F78) {
				y78(o78).on('keydown', P58);
				if (f78.scrollLock) {
					H78.on('touchmove mousewheel wheel', function(X38) {
						if (K58) {
							X38.preventDefault();
						}
					});
				}
				if (f78.focusTrap) {
					B78.on('focusin', l58);
				}
				if (f78.closeOnOverlayTap) {
					var W38, P38, l38, T38;
					n58.on('touchstart mousedown', function(R38) {
						if (!P38 && R38.target == n58[0]) {
							P38 = true;
							W38 = false;
							l38 = e78(R38, 'X');
							T38 = e78(R38, 'Y');
						}
					}).on('touchmove mousemove', function(f38) {
						if (P38 && !W38 && (Math.abs(e78(f38, 'X') - l38) > 9 || Math.abs(e78(f38, 'Y') - T38) > 9)) {
							W38 = true;
						}
					}).on('touchcancel', function() {
						P38 = false;
					}).on('touchend touchcancel mouseup', function(H38) {
						if (P38 && !W38) {
							R78.cancel();
							if (H38.type != 'mouseup') {
								c78.preventClick();
							}
						}
						P38 = false;
					});
				}
				if (Q58) {
					w58 += ' scroll';
				}
			}
			setTimeout(function() {
				if (F78) {
					H78.appendTo(a78);
				} else if (r78.is('div') && !R78._hasContent) {
					r78.empty().append(H78);
				} else {
					if (r78.hasClass('mbsc-control')) {
						var r38 = r78.closest('.mbsc-control-w');
						H78.insertAfter(r38);
						if (r38.hasClass('mbsc-select')) {
							r38.addClass('mbsc-select-inline');
						}
					} else {
						H78.insertAfter(r78);
					}
				}
				N58 = true;
				R78._markupInserted(H78);
				O78('onMarkupInserted', {
					target: x58
				});
				H78.on('selectstart mousedown', T78).on('click', '.mbsc-fr-btn-e', T78).on('keydown', '.mbsc-fr-btn-e', function(F38) {
					if (F38.keyCode == 32) {
						F38.preventDefault();
						F38.stopPropagation();
						this.click();
					}
				}).on('keydown', function(E38) {
					if (E38.keyCode == 32) {
						E38.preventDefault();
					} else if (E38.keyCode == 9 && F78 && f78.focusTrap) {
						var O38 = H78.find('[tabindex="0"]').filter(function() {
								return this.offsetWidth > 0 || this.offsetHeight > 0;
							}),
							p38 = O38.index(y78(':focus', H78)),
							B38 = O38.length - 1,
							a38 = 0;
						if (E38.shiftKey) {
							B38 = 0;
							a38 = -1;
						}
						if (p38 === B38) {
							O38.eq(a38)[0].focus();
							E38.preventDefault();
						}
					}
				}).on('touchstart mousedown pointerdown', '.mbsc-fr-btn-e', i58).on('touchend', '.mbsc-fr-btn-e', j58).on('touchstart', function() {
					H78.removeClass('mbsc-no-touch');
				});
				y78('input,select,textarea', H78).on('selectstart mousedown', function(z38) {
					z38.stopPropagation();
				}).on('keydown', function(C38) {
					if (C38.keyCode == 32) {
						C38.stopPropagation();
					}
				});
				y78.each(D58, function(s38, d38) {
					R78.tap(y78('.mbsc-fr-btn' + s38, H78), function(x48) {
						d38 = u78(d38) ? R78.buttons[d38] : d38;
						(u78(d38.handler) ? R78.handlers[d38.handler] : d38.handler).call(this, x48, R78);
					}, true);
				});
				R78._attachEvents(H78);
				R78.position();
				B78.on(w58, L58);
				if (F78) {
					if (E78 && !m38) {
						H78.addClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + E78).on(g78, function() {
							H78.off(g78).removeClass('mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-' + E78).find('.mbsc-fr-popup').removeClass('mbsc-anim-' + E78);
							v58(L38);
						}).find('.mbsc-fr-popup').addClass('mbsc-anim-' + E78);
					} else {
						v58(L38);
					}
				}
				O78('onShow', {
					target: x58,
					valueText: R78._tempValue
				});
			}, S58 ? 100 : 0);
		};
		R78.hide = function(Y48, D48, S48, Q48) {
			if (!R78._isVisible || !S48 && !R78._isValid && D48 == 'set' || !S48 && O78('onBeforeClose', {
					valueText: R78._tempValue,
					button: D48
				}) === false) {
				return false;
			}
			if (H78) {
				if (F78 && E78 && !Y48 && !H78.hasClass('mbsc-anim-trans')) {
					H78.addClass('mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-' + E78).on(g78, function() {
						H78.off(g78);
						W58(Y48);
					}).find('.mbsc-fr-popup').addClass('mbsc-anim-' + E78);
				} else {
					W58(Y48);

				}
				R78._detachEvents(H78);
				B78.off(w58, L58).off('focusin', l58);
			}
			if (F78) {
				T58();
				y78(o78).off('keydown', P58);
				delete J78.activeInstance;
			}
			if (Q48) {
				Q48();
			}
			O78('onClose', {
				valueText: R78._value
			});
		};
		R78.ariaMessage = function(j48) {
			k58.html('');
			setTimeout(function() {
				k58.html(j48);
			}, 100);
		};
		R78.isVisible = function() {
			return R78._isVisible;
		};
		R78.setVal = A78;
		R78.getVal = A78;
		R78._generateContent = A78;
		R78._attachEvents = A78;
		R78._detachEvents = A78;
		R78._readValue = A78;
		R78._clearValue = A78;
		R78._fillValue = A78;
		R78._markupReady = A78;
		R78._markupInserted = A78;
		R78._markupRemove = A78;
		R78._position = A78;
		R78.__processSettings = A78;
		R78.__init = A78;
		R78._destroy = function() {
			R78.hide(true, false, true);
			y78.each(t58, function(w48, h48) {
				h48.el.off('.mbsc').prop('readonly', h48.readOnly);
				if (h48.lbl) {
					h48.lbl.off('.mbsc');
				}
			});
		};
		R78._processSettings = function() {
			var n48, Z48;
			f78.buttons = f78.buttons || (f78.display !== 'inline' ? ['set', 'cancel'] : []);
			f78.headerText = f78.headerText === L78 ? f78.display !== 'inline' ? '{value}' : false : f78.headerText;
			D58 = f78.buttons || [];
			F78 = f78.display !== 'inline';
			p78 = f78.context != 'body';
			a78 = y78(f78.context);
			y58 = p78 ? a78 : y78('body,html');
			R78._isLiquid = (f78.layout || (/top|bottom|inline/.test(f78.display) ? 'liquid' : '')) === 'liquid';
			R78._window = B78 = y78(p78 ? f78.context : o78);
			R78._context = a78;
			R78.live = true;
			for (Z48 = 0; Z48 < D58.length; Z48++) {
				n48 = D58[Z48];
				if (n48 == 'ok' || n48 == 'set' || n48.handler == 'set') {
					R78.live = false;
				}
			}
			R78.buttons.set = {
				text: f78.setText,
				handler: 'set'
			};
			R78.buttons.cancel = {
				text: R78.live ? f78.closeText : f78.cancelText,
				handler: 'cancel'
			};
			R78.buttons.clear = {
				text: f78.clearText,
				handler: 'clear'
			};
			R78._isInput = r78.is('input');
			R78.__processSettings();
		};
		R78._init = function() {
			if (R78._isVisible) {
				R78.hide(true, false, true);
			}
			r78.off('.mbsc');
			R78.__init();
			if (F78) {
				R78._readValue();
				if (!R78._hasContent) {
					R78.attachShow(r78);
				}
			} else {
				R78.show();
			}
			r78.on('change.mbsc', function() {
				if (!R78._preventChange) {
					R78.setVal(r78.val(), true, false);
				}
				R78._preventChange = false;
			});
		};
		R78.buttons = {};
		R78.handlers = {
			set: R78.select,
			cancel: R78.cancel,
			clear: R78.clear
		};
		R78._value = null;
		R78._isValid = true;
		R78._isVisible = false;
		f78 = R78.settings;
		O78 = R78.trigger;
		if (!X58) {
			R78.init(m58);
		}
	};
	J78.classes.Frame.prototype._defaults = {
		lang: 'en',
		setText: 'Set',
		selectedText: '{count} selected',
		closeText: 'Close',
		cancelText: 'Cancel',
		clearText: 'Clear',
		context: 'body',
		disabled: false,
		closeOnOverlayTap: true,
		showOnFocus: false,
		showOnTap: true,
		display: 'center',
		scroll: true,
		scrollLock: true,
		tap: true,
		btnClass: 'mbsc-fr-btn',
		btnWidth: true,
		focusTrap: true,
		focusOnClose: !m78
	};
	J78.themes.frame.mobiscroll = {
		headerText: false,
		btnWidth: false
	};
	J78.themes.scroller.mobiscroll = y78.extend({}, J78.themes.frame.mobiscroll, {
		rows: 5,
		showLabel: false,
		selectedLineBorder: 1,
		weekDays: 'min',
		checkIcon: 'ion-ios7-checkmark-empty',
		btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
		btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
		btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
		btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
	});
	y78(o78).on('focus', function() {
		if (v78) {
			P78 = true;
		}
	});
}(window, document));
(function() {
	var K48 = mobiscroll,
		q48 = K48.themes,
		V48 = K48.$;
	q48.frame['android-holo'] = {};
	q48.scroller['android-holo'] = V48.extend({}, q48.frame['android-holo'], {
		dateDisplay: 'Mddyy',
		rows: 5,
		minWidth: 76,
		height: 36,
		showLabel: false,
		selectedLineHeight: true,
		selectedLineBorder: 2,
		useShortLabels: true,
		icon: {
			filled: 'star3',
			empty: 'star'
		},
		btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down6',
		btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up6'
	});
}());
(function() {
	var U48 = mobiscroll,
		k48 = U48.themes,
		I48 = U48.$;
	k48.frame.ios = {
		display: 'bottom',
		headerText: false,
		btnWidth: false,
		deleteIcon: 'ios-backspace',
		scroll3d: true
	};
	k48.scroller.ios = I48.extend({}, k48.frame.ios, {
		rows: 5,
		height: 34,
		minWidth: 55,
		selectedLineHeight: true,
		selectedLineBorder: 1,
		showLabel: false,
		useShortLabels: true,
		btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
		btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
		checkIcon: 'ion-ios7-checkmark-empty',
		dateDisplay: 'MMdyy',
		btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
		btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
	});
}());
(function() {
	var N48 = mobiscroll,
		G48 = N48.$;
	N48.themes.frame.jqm = {
		jqmBody: 'a',
		jqmBorder: 'a',
		jqmLine: 'b',
		jqmSet: 'b',
		jqmCancel: 'c',
		disabledClass: 'ui-disabled',
		activeClass: 'ui-btn-active',
		activeTabInnerClass: 'ui-btn-active',
		onInit: function() {
			G48(this).closest('.ui-field-contain').trigger('create');
		},
		onMarkupInserted: function(y48, J48) {
			var b48 = J48.settings,
				t48 = G48(y48.target);
			G48('.mbsc-np-btn, .mbsc-cal-sc-m-cell .mbsc-cal-sc-cell-i', t48).addClass('ui-btn');
			G48('.mbsc-fr-btn-cont .mbsc-fr-btn, .mbsc-range-btn', t48).addClass('ui-btn ui-mini ui-corner-all');
			G48('.mbsc-cal-prev .mbsc-cal-btn-txt', t48).addClass('ui-btn ui-icon-arrow-l ui-btn-icon-notext ui-shadow ui-corner-all');
			G48('.mbsc-cal-next .mbsc-cal-btn-txt', t48).addClass('ui-btn ui-icon-arrow-r ui-btn-icon-notext ui-shadow ui-corner-all');
			G48('.mbsc-fr-popup', t48).removeClass('dwbg').addClass('ui-selectmenu ui-overlay-shadow ui-corner-all ui-body-' + b48.jqmBorder);
			G48('.mbsc-fr-btn-s .mbsc-fr-btn', t48).addClass('ui-btn-' + b48.jqmSet);
			G48('.mbsc-fr-hdr', t48).addClass('ui-header ui-bar-inherit');
			G48('.mbsc-fr-w', t48).addClass('ui-corner-all ui-body-' + b48.jqmBody);
			G48('.mbsc-sc-btn', t48).addClass('ui-btn ui-mini ui-corner-all ui-btn-icon-top');
			G48('.mbsc-sc-btn-plus', t48).addClass('ui-icon-carat-d');
			G48('.mbsc-sc-btn-minus', t48).addClass('ui-icon-carat-u');
			G48('.mbsc-sc-whl-l', t48).addClass('ui-body-' + b48.jqmLine);
			G48('.mbsc-cal-tabs', t48).attr('data-role', 'navbar');
			G48('.mbsc-cal-prev .mbsc-cal-btn-txt', t48).attr('data-role', 'button').attr('data-icon', 'arrow-l').attr('data-iconpos', 'notext');
			G48('.mbsc-cal-next .mbsc-cal-btn-txt', t48).attr('data-role', 'button').attr('data-icon', 'arrow-r').attr('data-iconpos', 'notext');
			G48('.mbsc-cal-events', t48).attr('data-role', 'page');
			G48('.mbsc-range-btn', t48).attr('data-role', 'button').attr('data-mini', 'true');
			G48('.mbsc-np-btn', t48).attr('data-role', 'button').attr('data-corners', 'false');
			t48.trigger('create');
		}
	};
	N48.themes.scroller.jqm = G48.extend({}, N48.themes.frame.jqm, {
		dateDisplay: 'Mddyy',
		onEventBubbleShow: function(A48) {
			G48('.mbsc-cal-event-list', A48.eventList).attr('data-role', 'listview');
			G48(A48.eventList).page().trigger('create');
		},
		btnCalPrevClass: '',
		btnCalNextClass: '',
		selectedLineHeight: true,
		selectedLineBorder: 1,
		checkIcon: 'none ui-btn-icon-left ui-icon-check',
		onThemeLoad: function(g48) {
			var M48 = g48.settings,
				c48 = M48.jqmBody || 'c',
				e48 = M48.jqmEventBubble || 'a';
			M48.dayClass = 'ui-body-a ui-body-' + c48;
			M48.innerDayClass = 'ui-state-default ui-btn ui-btn-up-' + c48;
			M48.calendarClass = 'ui-body-a ui-body-' + c48;
			M48.weekNrClass = 'ui-body-a ui-body-' + c48;
			M48.eventBubbleClass = 'ui-body-' + e48;
		}
	});
}());
(function() {
	var P48 = mobiscroll,
		o48 = P48.$,
		u48 = P48.themes;
	u48.frame.wp = {
		headerText: false,
		deleteIcon: 'backspace4',
		btnWidth: false,
		onProcessSettings: function(L48, W48) {
			var v48 = W48.buttons;
			if (v48) {
				v48.set.icon = 'checkmark';
				v48.cancel.icon = 'close';
				v48.clear.icon = 'close';
				if (v48.ok) {
					v48.ok.icon = 'checkmark';
				}
				if (v48.close) {
					v48.close.icon = 'close';
				}
				if (v48.now) {
					v48.now.icon = 'loop2';
				}
				if (v48.toggle) {
					v48.toggle.icon = 'play3';
				}
				if (v48.start) {
					v48.start.icon = 'play3';
				}
				if (v48.stop) {
					v48.stop.icon = 'pause2';
				}
				if (v48.reset) {
					v48.reset.icon = 'stop2';
				}
				if (v48.lap) {
					v48.lap.icon = 'loop2';
				}
				if (v48.hide) {
					v48.hide.icon = 'close';
				}
			}
		}
	};
	u48.scroller.wp = o48.extend({}, u48.frame.wp, {
		minWidth: 76,
		height: 76,
		dateDisplay: 'mmMMddDDyy',
		showLabel: false,
		icon: {
			filled: 'star3',
			empty: 'star'
		},
		btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left2',
		btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right2',
		btnPlusClass: 'mbsc-ic mbsc-ic-plus',
		btnMinusClass: 'mbsc-ic mbsc-ic-minus',
		onMarkupInserted: function(R48, f48) {
			var l48, m48, X48, i48 = o48(R48.target),
				T48 = f48.settings;
			function H48(r48) {
				return o48.isArray(T48.readonly) ? T48.readonly[r48] : T48.readonly;
			}
			o48('.mbsc-sc-whl', i48).on('touchstart mousedown wheel mousewheel', function(F48) {
				if (F48.type === 'mousedown' && m48 || H48(o48(this).attr('data-index'))) {
					return;
				}
				m48 = F48.type === 'touchstart';
				l48 = true;
				X48 = o48(this).hasClass('mbsc-sc-whl-wpa');
				o48('.mbsc-sc-whl', i48).removeClass('mbsc-sc-whl-wpa');
				o48(this).addClass('mbsc-sc-whl-wpa');
			}).on('touchmove mousemove', function() {
				l48 = false;
			}).on('touchend mouseup', function(E48) {
				if (l48 && X48 && o48(E48.target).closest('.mbsc-sc-itm').hasClass('mbsc-sc-itm-sel')) {
					o48(this).removeClass('mbsc-sc-whl-wpa');
				}
				if (E48.type === 'mouseup') {
					m48 = false;
				}
				l48 = false;
			});
		}
	});
}());
(function(s48) {
	var z48 = mobiscroll,
		a48 = z48.$,
		d48 = z48.classes,
		O48 = z48.util,
		B48 = O48.constrain,
		S18 = O48.jsPrefix,
		n18 = O48.prefix,
		p48 = O48.getCoord,
		D18 = O48.getPosition,
		Q18 = O48.testTouch,
		C48 = O48.isNumeric,
		j18 = O48.isString,
		h18 = /(iphone|ipod|ipad)/i.test(navigator.userAgent),
		w18 = function() {},
		x18 = window.requestAnimationFrame || function(Z18) {
			Z18();
		},
		Y18 = window.cancelAnimationFrame || w18;
	d48.ScrollView = function(v18, s18, n08) {
		var y18, d18, m18, X18, T18, U18, C18, l18, O18, p18, w08, k18, L18, Z08, J18, g18, A18, i18, o18, W18, r18, u18, P18, D08, R18, G18, t18, N18, Y08, B18, x08, z18, M18, a18, b18, K18, V18 = this,
			I18, c18 = 0,
			f18 = 1,
			q18 = s18,
			e18 = a48(v18);
		function Q08(q08) {
			b18('onStart');
			if (q18.stopProp) {
				q08.stopPropagation();
			}
			if (q18.prevDef || q08.type == 'mousedown') {
				q08.preventDefault();
			}
			if (q18.readonly || q18.lock && o18) {
				return;
			}
			if (Q18(q08, this) && !i18 && mobiscroll.KvAPo) {
				if (y18) {
					y18.removeClass('mbsc-btn-a');
				}
				L18 = false;
				if (!o18) {
					y18 = a48(q08.target).closest('.mbsc-btn-e', this);
					if (y18.length && !y18.hasClass('mbsc-btn-d')) {
						L18 = true;
						d18 = setTimeout(function() {
							y18.addClass('mbsc-btn-a');
						}, 100);
					}
				}
				i18 = true;
				P18 = false;
				W18 = false;
				V18.scrolled = o18;
				B18 = p48(q08, 'X');
				x08 = p48(q08, 'Y');
				p18 = Z08 = B18;
				X18 = 0;
				T18 = 0;
				U18 = 0;
				Y08 = new Date();
				N18 = +D18(M18, K18) || 0;
				if (o18) {
					H18(N18, h18 ? 0 : 1);
				}
				if (q08.type === 'mousedown') {
					a48(document).on('mousemove', E18).on('mouseup', F18);
				}
			}
		}
		function E18(K08) {
			if (i18) {
				if (q18.stopProp) {
					K08.stopPropagation();
				}
				p18 = p48(K08, 'X');
				w08 = p48(K08, 'Y');
				X18 = p18 - B18;
				T18 = w08 - x08;
				U18 = K18 ? T18 : X18;
				if (L18 && (Math.abs(T18) > 5 || Math.abs(X18) > 5)) {
					clearTimeout(d18);
					y18.removeClass('mbsc-btn-a');
					L18 = false;
				}
				if (V18.scrolled || !W18 && Math.abs(U18) > 5) {
					if (!P18) {
						b18('onGestureStart', k18);
					}
					V18.scrolled = P18 = true;
					if (!u18) {
						u18 = true;
						r18 = x18(h08);
					}
				}
				if (K18 || q18.scrollLock) {
					K08.preventDefault();
				} else {
					if (V18.scrolled) {
						K08.preventDefault();
					} else if (Math.abs(T18) > 7) {
						W18 = true;
						V18.scrolled = true;
						e18.trigger('touchend');
					}
				}
			}
		}
		function h08() {
			if (g18) {
				U18 = B48(U18, -G18 * g18, G18 * g18);
			}
			H18(B48(N18 + U18, A18 - O18, J18 + O18));
			u18 = false;
		}
		function F18(U08) {
			if (i18) {
				var V08, k08 = new Date() - Y08;
				if (q18.stopProp) {
					U08.stopPropagation();
				}
				Y18(r18);
				u18 = false;
				if (!W18 && V18.scrolled) {
					if (q18.momentum && k08 < 300) {
						V08 = U18 / k08;
						U18 = Math.max(Math.abs(U18), V08 * V08 / q18.speedUnit) * (U18 < 0 ? -1 : 1);
					}
					S08(U18);
				}
				if (L18) {
					clearTimeout(d18);
					y18.addClass('mbsc-btn-a');
					setTimeout(function() {
						y18.removeClass('mbsc-btn-a');
					}, 100);
					if (!W18 && !V18.scrolled) {
						b18('onBtnTap', {
							target: y18[0]
						});
					}
				}
				if (U08.type == 'mouseup') {

					a48(document).off('mousemove', E18).off('mouseup', F18);
				}
				i18 = false;
			}
		}
		function j08(I08) {
			I08 = I08.originalEvent || I08;
			U18 = K18 ? I08.deltaY || I08.wheelDelta || I08.detail : I08.deltaX;
			b18('onStart');
			if (q18.stopProp) {
				I08.stopPropagation();
			}
			if (U18) {
				I08.preventDefault();
				if (I08.deltaMode && I08.deltaMode == 1) {
					U18 *= 5;
				}
				U18 = B48(-U18, -20, 20);
				N18 = I18;
				if (q18.readonly || N18 + U18 < A18 || N18 + U18 > J18) {
					return;
				}
				if (!P18) {
					k18 = {
						posX: K18 ? 0 : I18,
						posY: K18 ? I18 : 0,
						originX: K18 ? 0 : N18,
						originY: K18 ? N18 : 0,
						direction: U18 > 0 ? K18 ? 270 : 360 : K18 ? 90 : 180
					};
					b18('onGestureStart', k18);
				}
				if (!u18) {
					u18 = true;
					r18 = x18(h08);
				}
				P18 = true;
				clearTimeout(D08);
				D08 = setTimeout(function() {
					Y18(r18);
					u18 = false;
					P18 = false;
					S08(U18);
				}, 200);
			}
		}
		function S08(t08) {
			var G08, b08, N08;
			if (g18) {
				t08 = B48(t08, -G18 * g18, G18 * g18);
			}
			N08 = B48(Math.round((N18 + t08) / G18) * G18, A18, J18);
			c18 = Math.round(N08 / G18);
			if (t18) {
				if (t08 < 0) {
					for (G08 = t18.length - 1; G08 >= 0; G08--) {
						if (Math.abs(N08) + m18 >= t18[G08].breakpoint) {
							c18 = G08;
							f18 = 2;
							N08 = t18[G08].snap2;
							break;
						}
					}
				} else if (t08 >= 0) {
					for (G08 = 0; G08 < t18.length; G08++) {
						if (Math.abs(N08) <= t18[G08].breakpoint) {
							c18 = G08;
							f18 = 1;
							N08 = t18[G08].snap1;
							break;
						}
					}
				}
				N08 = B48(N08, A18, J18);
			}
			b08 = q18.time || (I18 < A18 || I18 > J18 ? 1000 : Math.max(1000, Math.abs(N08 - I18) * q18.timeUnit));
			k18.destinationX = K18 ? 0 : N08;
			k18.destinationY = K18 ? N08 : 0;
			k18.duration = b08;
			k18.transitionTiming = l18;
			b18('onGestureEnd', k18);
			H18(N08, b08);
		}
		function H18(y08, J08, g08, e08) {
			var M08 = y08 != I18,
				c08 = J08 > 1,
				A08 = function() {
					clearInterval(R18);
					clearTimeout(a18);
					o18 = false;
					I18 = y08;
					k18.posX = K18 ? 0 : y08;
					k18.posY = K18 ? y08 : 0;
					if (M08) {
						b18('onMove', k18);
					}
					if (c08) {
						b18('onAnimationEnd', k18);
					}
					if (e08) {
						e08();
					}
				};
			k18 = {
				posX: K18 ? 0 : I18,
				posY: K18 ? I18 : 0,
				originX: K18 ? 0 : N18,
				originY: K18 ? N18 : 0,
				direction: y08 - I18 > 0 ? K18 ? 270 : 360 : K18 ? 90 : 180
			};
			I18 = y08;
			if (c08) {
				k18.destinationX = K18 ? 0 : y08;
				k18.destinationY = K18 ? y08 : 0;
				k18.duration = J08;
				k18.transitionTiming = l18;
				b18('onAnimationStart', k18);
			}
			z18[S18 + 'Transition'] = J08 ? n18 + 'transform ' + Math.round(J08) + 'ms ' + l18 : '';
			z18[S18 + 'Transform'] = 'translate3d(' + (K18 ? '0,' + y08 + 'px,' : y08 + 'px,' + '0,') + '0)';
			if (!M08 && !o18 || !J08 || J08 <= 1) {
				A08();
			} else if (J08) {
				o18 = !g08;
				clearInterval(R18);
				R18 = setInterval(function() {
					var o08 = +D18(M18, K18) || 0;
					k18.posX = K18 ? 0 : o08;
					k18.posY = K18 ? o08 : 0;
					b18('onMove', k18);
					if (Math.abs(o08 - y08) < 2) {
						A08();
					}
				}, 100);
				clearTimeout(a18);
				a18 = setTimeout(function() {
					A08();
				}, J08);
			}
			if (q18.sync) {
				q18.sync(y08, J08, l18);
			}
		}
		d48.Base.call(this, v18, s18, true);
		V18.scrolled = false;
		V18.scroll = function(u08, P08, v08, W08) {
			if (!C48(u08)) {
				u08 = Math.ceil((a48(u08, v18).length ? Math.round(M18.offset()[C18] - a48(u08, v18).offset()[C18]) : I18) / G18) * G18;
			} else {
				u08 = Math.round(u08 / G18) * G18;
			}
			u08 = B48(u08, A18, J18);
			c18 = Math.round(u08 / G18);
			N18 = I18;
			H18(u08, P08, v08, W08);
		};
		V18.refresh = function(l08) {
			var L08;
			m18 = q18.contSize === s48 ? K18 ? e18.height() : e18.width() : q18.contSize;
			A18 = q18.minScroll === s48 ? Math.min(0, K18 ? m18 - M18.height() : m18 - M18.width()) : q18.minScroll;
			J18 = q18.maxScroll === s48 ? 0 : q18.maxScroll;
			t18 = null;
			if (!K18 && q18.rtl) {
				L08 = J18;
				J18 = -A18;
				A18 = -L08;
			}
			if (j18(q18.snap)) {
				t18 = [];
				M18.find(q18.snap).each(function() {
					var T08 = K18 ? this.offsetTop : this.offsetLeft,
						m08 = K18 ? this.offsetHeight : this.offsetWidth;
					t18.push({
						breakpoint: T08 + m08 / 2,
						snap1: -T08,
						snap2: m18 - T08 - m08
					});
				});
			}
			G18 = C48(q18.snap) ? q18.snap : 1;
			g18 = q18.snap ? q18.maxSnapScroll : 0;
			l18 = q18.easing;
			O18 = q18.elastic ? C48(q18.snap) ? G18 : C48(q18.elastic) ? q18.elastic : 0 : 0;
			if (I18 === s48) {
				I18 = q18.initialPos;
				c18 = Math.round(I18 / G18);
			}
			if (!l08) {
				V18.scroll(q18.snap ? t18 ? t18[c18]['snap' + f18] : c18 * G18 : I18);
			}
		};
		V18._processSettings = function() {
			K18 = q18.axis == 'Y';
			C18 = K18 ? 'top' : 'left';
			M18 = q18.moveElement || e18.children().eq(0);
			z18 = M18[0].style;
		};
		V18._init = function() {
			V18.refresh();
			e18.on('touchstart mousedown', Q08).on('touchmove', E18).on('touchend touchcancel', F18);
			if (q18.mousewheel) {
				e18.on('wheel mousewheel', j08);
			}
			if (v18.addEventListener) {
				v18.addEventListener('click', function(i08) {
					if (V18.scrolled) {
						V18.scrolled = false;
						i08.stopPropagation();
						i08.preventDefault();
					}
				}, true);
			}
		};
		V18._destroy = function() {
			clearInterval(R18);
			e18.off('touchstart mousedown', Q08).off('touchmove', E18).off('touchend touchcancel', F18).off('wheel mousewheel', j08);
		};
		q18 = V18.settings;
		b18 = V18.trigger;
		if (!n08) {
			V18.init(s18);
		}
	};
	d48.ScrollView.prototype = {
		_class: 'scrollview',
		_defaults: {
			speedUnit: 0.0022,
			timeUnit: 3,
			initialPos: 0,
			axis: 'Y',
			easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
			stopProp: true,
			momentum: true,
			mousewheel: true,
			elastic: true
		}
	};
	z48.presetShort('scrollview', 'ScrollView', false);
}());
(function(d08, C08, R08) {
	var H08 = mobiscroll,
		X08 = H08.$,
		r08 = X08.extend,
		F08 = H08.classes,
		E08 = H08.platform,
		f08 = H08.util,
		a08 = f08.jsPrefix,
		B08 = f08.prefix,
		O08 = f08.getCoord,
		p08 = f08.testTouch,
		z08 = E08.name == 'wp' || E08.name == 'android' || E08.name == 'ios' && E08.majorVersion < 8;
	H08.presetShort('scroller', 'Scroller', false);
	F08.Scroller = function(K28, i28, z28) {
		var o28, G28, w28, Q28 = 40,
			t28 = 1000,
			e28, S28, Z28, V28, c28, U28, A28, H28, F28, D28, Y28, b28, k28, x28, j28, q28, n28, g28, s08 = this,
			J28 = X08(K28);
		function O28(d28) {
			var s28 = +X08(this).attr('data-index');
			d28.stopPropagation();
			if (d28.type === 'mousedown') {
				d28.preventDefault();
			}
			if (p08(d28, this) && !T28(s28)) {
				G28 = X08(this).addClass('mbsc-sc-btn-a');
				H28 = O08(d28, 'X');
				F28 = O08(d28, 'Y');
				U28 = true;
				A28 = false;
				setTimeout(function() {
					f28(s28, G28.attr('data-dir') == 'inc' ? 1 : -1);
				}, 100);
				if (d28.type === 'mousedown') {
					X08(C08).on('mousemove', P28).on('mouseup', v28);
				}
			}
		}
		function P28(x88) {
			if (Math.abs(H28 - O08(x88, 'X')) > 7 || Math.abs(F28 - O08(x88, 'Y')) > 7) {
				u28(true);
			}
		}
		function v28(Y88) {
			u28();
			Y88.preventDefault();
			if (Y88.type === 'mouseup') {
				X08(C08).off('mousemove', P28).off('mouseup', v28);
			}
		}
		function p28(D88) {
			var j88 = X08(this).attr('data-index'),
				S88, Q88;
			if (D88.keyCode == 38) {
				S88 = true;
				Q88 = -1;
			} else if (D88.keyCode == 40) {
				S88 = true;
				Q88 = 1;
			} else if (D88.keyCode == 32) {
				S88 = true;
				R28(j88);
			}
			if (S88) {
				D88.stopPropagation();
				D88.preventDefault();
				if (Q88 && !U28) {
					U28 = true;
					A28 = false;
					f28(j88, Q88);
				}
			}
		}
		function E28() {
			u28();
		}
		function l28(h88, w88) {
			return (h88._array ? h88._map[w88] : h88.getIndex(w88, s08)) || 0;
		}
		function m28(n88, Z88) {
			var q88 = n88.data;
			if (Z88 >= n88.min && Z88 <= n88.max) {
				return n88._array ? n88.circular ? X08(q88).get(Z88 % n88._length) : q88[Z88] : X08.isFunction(q88) ? q88(Z88, s08) : '';
			}
		}
		function M28(K88) {
			return X08.isPlainObject(K88) ? K88.value !== R08 ? K88.value : K88.display : K88;
		}
		function C28(V88) {
			var k88 = X08.isPlainObject(V88) ? V88.display : V88;
			return k88 === R08 ? '' : k88;
		}
		function I28(U88, I88) {
			return M28(m28(U88, I88));
		}
		function R28(y88, M88) {
			var G88 = n28[y88],
				b88 = M88 || G88._$markup.find('.mbsc-sc-itm[data-val="' + D28[y88] + '"]'),
				J88 = +b88.attr('data-index'),
				N88 = I28(G88, J88),
				t88 = s08._tempSelected[y88],
				A88 = f08.isNumeric(G88.multiple) ? G88.multiple : Infinity;
			if (G88.multiple && !G88._disabled[N88]) {
				if (t88[N88] !== R08) {
					b88.removeClass(Z28).removeAttr('aria-selected');
					delete t88[N88];
				} else if (f08.objectToArray(t88).length < A88) {
					b88.addClass(Z28).attr('aria-selected', 'true');
					t88[N88] = N88;
				}
				return true;
			}
		}
		function f28(c88, e88) {
			if (!A28) {
				r28(c88, e88);
			}
			if (U28 && mobiscroll.KvAPo) {
				clearInterval(c28);
				c28 = setInterval(function() {
					r28(c88, e88);
				}, x28.delay);
			}
		}
		function u28(g88) {
			clearInterval(c28);
			A28 = g88;
			U28 = false;
			if (G28) {
				G28.removeClass('mbsc-sc-btn-a');
			}
		}
		function r28(u88, P88) {
			var o88 = n28[u88];
			L28(o88, u88, o88._current + P88, t28, P88 == 1 ? 1 : 2);
		}
		function T28(v88) {
			return X08.isArray(x28.readonly) ? x28.readonly[v88] : x28.readonly;
		}
		function W28(W88, L88, T88) {
			var l88 = W88._index - W88._batch;
			W88.data = W88.data || [];
			W88.key = W88.key !== R08 ? W88.key : L88;
			W88.label = W88.label !== R08 ? W88.label : L88;
			W88._map = {};
			W88._array = X08.isArray(W88.data);
			if (W88._array) {
				W88._length = W88.data.length;
				X08.each(W88.data, function(m88, i88) {
					W88._map[M28(i88)] = m88;
				});
			}
			W88.circular = x28.circular === R08 ? W88.circular === R08 ? W88._array && W88._length > x28.rows : W88.circular : X08.isArray(x28.circular) ? x28.circular[L88] : x28.circular;
			W88.min = W88._array ? W88.circular ? -Infinity : 0 : W88.min === R08 ? -Infinity : W88.min;
			W88.max = W88._array ? W88.circular ? Infinity : W88._length - 1 : W88.max === R08 ? Infinity : W88.max;
			W88._nr = L88;
			W88._index = l28(W88, D28[L88]);
			W88._disabled = {};
			W88._batch = 0;
			W88._current = W88._index;
			W88._first = W88._index - Q28;
			W88._last = W88._index + Q28;
			W88._offset = W88._first;
			if (T88) {
				W88._offset -= W88._margin / Y28 + (W88._index - l88);
				W88._margin += (W88._index - l88) * Y28;
			} else {
				W88._margin = 0;
			}
			W88._refresh = function(f88) {
				var X88 = -(W88.min - W88._offset + (W88.multiple && !S28 ? Math.floor(x28.rows / 2) : 0)) * Y28,
					R88 = Math.min(X88, -(W88.max - W88._offset - (W88.multiple && !S28 ? Math.floor(x28.rows / 2) : 0)) * Y28);
				r08(W88._scroller.settings, {
					minScroll: R88,
					maxScroll: X88
				});
				W88._scroller.refresh(f88);
			};
			g28[W88.key] = W88;
			return W88;
		}
		function h28(E88, z88, S68, D68, C88) {
			var F88, Y68, H88, r88, d88, a88, x68, p88, B88 = '',
				O88 = s08._tempSelected[z88],
				s88 = E88._disabled || {};
			for (F88 = S68; F88 <= D68; F88++) {
				H88 = m28(E88, F88);
				d88 = C28(H88);
				r88 = M28(H88);
				Y68 = H88 && H88.cssClass !== R08 ? H88.cssClass : '';
				a88 = H88 && H88.label !== R08 ? H88.label : '';
				x68 = H88 && H88.invalid;
				p88 = r88 !== R08 && r88 == D28[z88] && !E88.multiple;
				B88 += '<div role="option" aria-selected="' + (O88[r88] ? true : false) + '" class="mbsc-sc-itm ' + (C88 ? 'mbsc-sc-itm-3d ' : '') + Y68 + ' ' + (p88 ? 'mbsc-sc-itm-sel ' : '') + (O88[r88] ? Z28 : '') + (r88 === R08 ? ' mbsc-sc-itm-ph' : ' mbsc-btn-e') + (x68 ? ' mbsc-sc-itm-inv-h mbsc-btn-d' : '') + (s88[r88] ? ' mbsc-sc-itm-inv mbsc-btn-d' : '') + '" data-index="' + F88 + '" data-val="' + r88 + '"' + (a88 ? ' aria-label="' + a88 + '"' : '') + (p88 ? ' aria-selected="true"' : '') + ' style="height:' + Y28 + 'px;line-height:' + Y28 + 'px;' + (C88 ? B08 + 'transform:rotateX(' + (E88._offset - F88) * e28 % 360 + 'deg) translateZ(' + Y28 * x28.rows / 2 + 'px);' : '') + '">' + (q28 > 1 ? '<div class="mbsc-sc-itm-ml" style="line-height:' + Math.round(Y28 / q28) + 'px;font-size:' + Math.round(Y28 / q28 * 0.8) + 'px;">' : '') + d88 + (q28 > 1 ? '</div>' : '') + '</div>';
			}
			return B88;
		}
		function B28(j68) {
			var Q68 = x28.headerText;
			return Q68 ? typeof Q68 === 'function' ? Q68.call(K28, j68) : Q68.replace(/\{value\}/i, j68) : '';
		}
		function a28(h68, V68, U68) {
			var k68 = Math.round(-U68 / Y28) + h68._offset,
				w68 = k68 - h68._current,
				n68 = h68._first,
				Z68 = h68._last,
				q68 = n68 + Q28 - w28 + 1,
				K68 = Z68 - Q28 + w28;
			if (w68) {
				h68._first += w68;
				h68._last += w68;
				h68._current = k68;
				if (w68 > 0) {
					h68._$scroller.append(h28(h68, V68, Math.max(Z68 + 1, n68 + w68), Z68 + w68));
					X08('.mbsc-sc-itm', h68._$scroller).slice(0, Math.min(w68, Z68 - n68 + 1)).remove();
					if (S28) {
						h68._$3d.append(h28(h68, V68, Math.max(K68 + 1, q68 + w68), K68 + w68, true));
						X08('.mbsc-sc-itm', h68._$3d).slice(0, Math.min(w68, K68 - q68 + 1)).attr('class', 'mbsc-sc-itm-del');
					}
				} else if (w68 < 0) {
					h68._$scroller.prepend(h28(h68, V68, n68 + w68, Math.min(n68 - 1, Z68 + w68)));
					X08('.mbsc-sc-itm', h68._$scroller).slice(Math.max(w68, n68 - Z68 - 1)).remove();
					if (S28) {
						h68._$3d.prepend(h28(h68, V68, q68 + w68, Math.min(q68 - 1, K68 + w68), true));
						X08('.mbsc-sc-itm', h68._$3d).slice(Math.max(w68, q68 - K68 - 1)).attr('class', 'mbsc-sc-itm-del');
					}
				}
				h68._margin += w68 * Y28;
				h68._$scroller.css('margin-top', h68._margin + 'px');
			}
		}
		function X28(e68, I68, c68, g68) {
			var y68, G68 = n28[e68],
				J68 = g68 || G68._disabled,
				t68 = l28(G68, I68),
				M68 = I68,
				A68 = I68,
				N68 = 0,
				b68 = 0;
			if (I68 === R08) {
				I68 = I28(G68, t68);
			}
			if (J68[I68]) {
				y68 = 0;
				while (t68 - N68 >= G68.min && J68[M68] && y68 < 100) {
					y68++;
					N68++;
					M68 = I28(G68, t68 - N68);
				}
				y68 = 0;
				while (t68 + b68 < G68.max && J68[A68] && y68 < 100) {
					y68++;
					b68++;
					A68 = I28(G68, t68 + b68);
				}
				if ((b68 < N68 && b68 && c68 !== 2 || !N68 || t68 - N68 < 0 || c68 == 1) && !J68[A68]) {
					I68 = A68;
				} else {
					I68 = M68;
				}
			}
			return I68;
		}
		function N28(i68, P68, T68, v68, m68) {
			var W68, L68, l68, o68, u68 = s08._isVisible;
			k28 = true;
			o68 = x28.validate.call(K28, {
				values: D28.slice(0),
				index: P68,
				direction: T68
			}, s08) || {};
			k28 = false;
			if (o68.valid) {
				s08._tempWheelArray = D28 = o68.valid.slice(0);
			}
			j28('onValidated');
			X08.each(n28, function(R68, X68) {
				if (u68) {
					X68._$markup.find('.mbsc-sc-itm-inv').removeClass('mbsc-sc-itm-inv mbsc-btn-d');
				}
				X68._disabled = {};
				if (o68.disabled && o68.disabled[R68]) {
					X08.each(o68.disabled[R68], function(r68, H68) {
						X68._disabled[H68] = true;
						if (u68) {
							X68._$markup.find('.mbsc-sc-itm[data-val="' + H68 + '"]').addClass('mbsc-sc-itm-inv mbsc-btn-d');
						}
					});
				}
				D28[R68] = X68.multiple ? D28[R68] : X28(R68, D28[R68], T68);
				if (u68) {
					if (!X68.multiple || P68 === R08) {
						X68._$markup.find('.mbsc-sc-itm-sel').removeClass(Z28).removeAttr('aria-selected');
					}
					if (X68.multiple) {
						if (P68 === R08) {
							for (var f68 in s08._tempSelected[R68]) {
								X68._$markup.find('.mbsc-sc-itm[data-val="' + f68 + '"]').addClass(Z28).attr('aria-selected', 'true');
							}
						}
					} else {
						X68._$markup.find('.mbsc-sc-itm[data-val="' + D28[R68] + '"]').addClass('mbsc-sc-itm-sel').attr('aria-selected', 'true');
					}
					L68 = l28(X68, D28[R68]);
					W68 = L68 - X68._index + X68._batch;
					if (Math.abs(W68) > 2 * Q28 + 1) {
						l68 = W68 + (2 * Q28 + 1) * (W68 > 0 ? -1 : 1);
						X68._offset += l68;
						X68._margin -= l68 * Y28;
						X68._refresh();
					}
					X68._index = L68 + X68._batch;
					X68._scroller.scroll(-(L68 - X68._offset + X68._batch) * Y28, P68 === R68 || P68 === R08 ? i68 : t28, m68);
				}
			});
			s08._tempValue = x28.formatValue(D28, s08);
			if (u68) {
				s08._header.html(B28(s08._tempValue));
			}
			if (s08.live) {
				s08._hasValue = v68 || s08._hasValue;
				y28(v68, v68, 0, true);
				if (v68) {
					j28('onSet', {
						valueText: s08._value
					});
				}
			}
			if (v68) {
				j28('onChange', {
					valueText: s08._tempValue
				});
			}
		}
		function L28(F68, O68, B68, a68, p68, z68) {
			var E68 = I28(F68, B68);
			if (E68 !== R08) {
				D28[O68] = E68;
				F68._batch = F68._array ? Math.floor(B68 / F68._length) * F68._length : 0;
				setTimeout(function() {
					N28(a68, O68, p68, true, z68);
				}, 10);
			}
		}
		function y28(d68, C68, s68, x9S, Y9S) {
			if (!x9S) {
				N28(s68);
			} else {
				s08._tempValue = x28.formatValue(s08._tempWheelArray, s08);
			}
			if (!Y9S) {
				s08._wheelArray = D28.slice(0);
				s08._value = s08._hasValue ? s08._tempValue : null;
				s08._selected = r08(true, {}, s08._tempSelected);
			}
			if (d68) {
				if (s08._isInput) {
					J28.val(s08._hasValue ? s08._tempValue : '');
				}
				j28('onFill', {
					valueText: s08._hasValue ? s08._tempValue : '',
					change: C68
				});
				if (C68) {
					s08._preventChange = true;
					J28.trigger('change');
				}
			}
		}
		F08.Frame.call(this, K28, i28, true);
		s08.setVal = s08._setVal = function(D9S, S9S, Q9S, j9S, h9S) {
			s08._hasValue = D9S !== null && D9S !== R08;
			s08._tempWheelArray = D28 = X08.isArray(D9S) ? D9S.slice(0) : x28.parseValue.call(K28, D9S, s08) || [];
			y28(S9S, Q9S === R08 ? S9S : Q9S, h9S, false, j9S);
		};
		s08.getVal = s08._getVal = function(n9S) {
			var w9S = s08._hasValue || n9S ? s08[n9S ? '_tempValue' : '_value'] : null;
			return f08.isNumeric(w9S) ? +w9S : w9S;
		};
		s08.setArrayVal = s08.setVal;
		s08.getArrayVal = function(Z9S) {
			return Z9S ? s08._tempWheelArray : s08._wheelArray;
		};
		s08.changeWheel = function(V9S, k9S, U9S) {
			var K9S, q9S;
			X08.each(V9S, function(I9S, G9S) {
				q9S = g28[I9S];
				K9S = q9S._nr;
				if (q9S) {
					r08(q9S, G9S);
					W28(q9S, K9S, true);
					if (s08._isVisible) {
						if (S28) {
							q9S._$3d.html(h28(q9S, K9S, q9S._first + Q28 - w28 + 1, q9S._last - Q28 + w28, true));
						}
						q9S._$scroller.html(h28(q9S, K9S, q9S._first, q9S._last)).css('margin-top', q9S._margin + 'px');
						q9S._refresh(k28);
					}
				}
			});
			if (s08._isVisible && !k28) {
				s08.position();
			}
			if (!k28) {
				N28(k9S, R08, R08, U9S);
			}
		};
		s08.getValidValue = X28;
		s08._generateContent = function() {
			var y9S, t9S = '',
				b9S = S28 ? B08 + 'transform: translateZ(' + (Y28 * x28.rows / 2 + 3) + 'px);' : '',
				J9S = '<div class="mbsc-sc-whl-l" style="' + b9S + 'height:' + Y28 + 'px;margin-top:-' + (Y28 / 2 + (x28.selectedLineBorder || 0)) + 'px;"></div>',
				N9S = 0;
			X08.each(x28.wheels, function(M9S, A9S) {
				t9S += '<div class="mbsc-w-p mbsc-sc-whl-gr-c' + (x28.showLabel ? ' mbsc-sc-lbl-v' : '') + '">' + J9S + '<div class="mbsc-sc-whl-gr' + (S28 ? ' mbsc-sc-whl-gr-3d' : '') + (V28 ? ' mbsc-sc-cp' : '') + '">';
				X08.each(A9S, function(e9S, c9S) {
					s08._tempSelected[N9S] = r08({}, s08._selected[N9S]);
					n28[N9S] = W28(c9S, N9S);
					y9S = c9S.label !== R08 ? c9S.label : e9S;
					t9S += '<div class="mbsc-sc-whl-w ' + (c9S.cssClass || '') + (c9S.multiple ? ' mbsc-sc-whl-multi' : '') + '" style="' + (x28.width ? 'width:' + (x28.width[N9S] || x28.width) + 'px;' : (x28.minWidth ? 'min-width:' + (x28.minWidth[N9S] || x28.minWidth) + 'px;' : '') + (x28.maxWidth ? 'max-width:' + (x28.maxWidth[N9S] || x28.maxWidth) + 'px;' : '')) + '">' + '<div class="mbsc-sc-whl-o" style="' + b9S + '"></div>' + J9S + '<div tabindex="0" aria-live="off" aria-label="' + y9S + '"' + (c9S.multiple ? ' aria-multiselectable="true"' : '') + ' role="listbox" data-index="' + N9S + '" class="mbsc-sc-whl"' + ' style="' + 'height:' + x28.rows * Y28 * (S28 ? 1.1 : 1) + 'px;">' + (V28 ? '<div data-index="' + N9S + '" data-dir="inc" class="mbsc-sc-btn mbsc-sc-btn-plus ' + (x28.btnPlusClass || '') + '" style="height:' + Y28 + 'px;line-height:' + Y28 + 'px;"></div>' + '<div data-index="' + N9S + '" data-dir="dec" class="mbsc-sc-btn mbsc-sc-btn-minus ' + (x28.btnMinusClass || '') + '" style="height:' + Y28 + 'px;line-height:' + Y28 + 'px;"></div>' : '') + '<div class="mbsc-sc-lbl">' + y9S + '</div>' + '<div class="mbsc-sc-whl-c"' + ' style="height:' + b28 + 'px;margin-top:-' + (b28 / 2 + 1) + 'px;' + b9S + '">' + '<div class="mbsc-sc-whl-sc" style="top:' + (b28 - Y28) / 2 + 'px;">';
					t9S += h28(c9S, N9S, c9S._first, c9S._last) + '</div></div>';
					if (S28) {
						t9S += '<div class="mbsc-sc-whl-3d" style="height:' + Y28 + 'px;margin-top:-' + Y28 / 2 + 'px;">';
						t9S += h28(c9S, N9S, c9S._first + Q28 - w28 + 1, c9S._last - Q28 + w28, true);
						t9S += '</div>';
					}
					t9S += '</div></div>';
					N9S++;
				});
				t9S += '</div></div>';
			});
			return t9S;
		};
		s08._attachEvents = function(g9S) {
			X08('.mbsc-sc-btn', g9S).on('touchstart mousedown', O28).on('touchmove', P28).on('touchend touchcancel', v28);
			X08('.mbsc-sc-whl', g9S).on('keydown', p28).on('keyup', E28);
		};
		s08._detachEvents = function(o9S) {
			X08('.mbsc-sc-whl', o9S).mobiscroll('destroy');
		};
		s08._markupReady = function(u9S) {
			o28 = u9S;
			X08('.mbsc-sc-whl', o28).each(function(v9S) {
				var l9S, W9S = X08(this),
					P9S = n28[v9S],
					L9S = -(P9S.min - P9S._offset + (P9S.multiple && !S28 ? Math.floor(x28.rows / 2) : 0)) * Y28,
					T9S = Math.min(L9S, -(P9S.max - P9S._offset - (P9S.multiple && !S28 ? Math.floor(x28.rows / 2) : 0)) * Y28);
				P9S._$markup = W9S;
				P9S._$scroller = X08('.mbsc-sc-whl-sc', this);
				P9S._$3d = X08('.mbsc-sc-whl-3d', this);
				P9S._scroller = new H08.classes.ScrollView(this, {
					mousewheel: x28.mousewheel,
					moveElement: P9S._$scroller,
					initialPos: (P9S._first - P9S._index) * Y28,
					contSize: 0,
					snap: Y28,
					minScroll: T9S,
					maxScroll: L9S,
					maxSnapScroll: Q28,
					prevDef: true,
					stopProp: true,
					timeUnit: 3,
					easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
					sync: function(i9S, m9S, X9S) {
						if (S28) {
							P9S._$3d[0].style[a08 + 'Transition'] = m9S ? B08 + 'transform ' + Math.round(m9S) + 'ms ' + X9S : '';
							P9S._$3d[0].style[a08 + 'Transform'] = 'rotateX(' + -i9S / Y28 * e28 + 'deg)';
						}
					},
					onStart: function(f9S, R9S) {
						R9S.settings.readonly = T28(v9S);
					},
					onGestureStart: function() {
						W9S.addClass('mbsc-sc-whl-a mbsc-sc-whl-anim');
						j28('onWheelGestureStart', {
							index: v9S
						});
					},
					onGestureEnd: function(H9S) {
						var r9S = H9S.direction == 90 ? 1 : 2,
							F9S = H9S.duration,
							E9S = H9S.destinationY;
						l9S = Math.round(-E9S / Y28) + P9S._offset;
						L28(P9S, v9S, l9S, F9S, r9S);
					},
					onAnimationStart: function() {
						W9S.addClass('mbsc-sc-whl-anim');
					},
					onAnimationEnd: function() {
						W9S.removeClass('mbsc-sc-whl-a mbsc-sc-whl-anim');
						j28('onWheelAnimationEnd', {
							index: v9S
						});
						P9S._$3d.find('.mbsc-sc-itm-del').remove();
					},
					onMove: function(O9S) {
						a28(P9S, v9S, O9S.posY);
					},
					onBtnTap: function(p9S) {
						var B9S = X08(p9S.target),
							a9S = +B9S.attr('data-index');
						if (R28(v9S, B9S)) {
							a9S = P9S._current;
						}
						if (j28('onItemTap', {
								target: B9S[0],
								selected: B9S.hasClass('mbsc-itm-sel')
							}) !== false) {
							L28(P9S, v9S, a9S, t28, true, true);
							if (s08.live && !P9S.multiple && (x28.setOnTap === true || x28.setOnTap[v9S])) {
								setTimeout(function() {
									s08.select();
								}, 200);
							}

						}
					}
				});
			});
			N28();
		};
		s08._fillValue = function() {
			s08._hasValue = true;
			y28(true, true, 0, true);
		};
		s08._clearValue = function() {
			X08('.mbsc-sc-whl-multi .mbsc-sc-itm-sel', o28).removeClass(Z28).removeAttr('aria-selected');
		};
		s08._readValue = function() {
			var C9S = J28.val() || '',
				z9S = 0;
			if (C9S !== '') {
				s08._hasValue = true;
			}
			s08._tempWheelArray = D28 = s08._hasValue && s08._wheelArray ? s08._wheelArray.slice(0) : x28.parseValue.call(K28, C9S, s08) || [];
			s08._tempSelected = r08(true, {}, s08._selected);
			X08.each(x28.wheels, function(s9S, d9S) {
				X08.each(d9S, function(Y7S, x7S) {
					n28[z9S] = W28(x7S, z9S);
					z9S++;
				});
			});
			y28(false, false, 0, true);
			j28('onRead');
		};
		s08.__processSettings = function() {
			x28 = s08.settings;
			x28.cssClass = (x28.cssClass || '') + ' mbsc-sc';
			j28 = s08.trigger;
			q28 = x28.multiline;
			Z28 = 'mbsc-sc-itm-sel mbsc-ic mbsc-ic-' + x28.checkIcon;
			n28 = [];
			g28 = {};
			if (q28 > 1) {
				x28.cssClass = (x28.cssClass || '') + ' dw-ml';
			}
		};
		s08.__init = function() {
			V28 = x28.showScrollArrows;
			S28 = x28.scroll3d && !z08 && !V28;
			Y28 = x28.height;
			b28 = S28 ? Math.round((Y28 - (Y28 * x28.rows / 2 + 3) * 0.03) / 2) * 2 : Y28;
			w28 = Math.round(x28.rows * 1.8);
			e28 = 360 / (w28 * 2);
			s08._isLiquid = (x28.layout || (/top|bottom/.test(x28.display) && x28.wheels.length == 1 || x28.display == 'inline' ? 'liquid' : '')) === 'liquid';
			if (V28) {
				x28.rows = Math.max(3, x28.rows);
			}
		};
		s08._getItemValue = M28;
		s08._tempSelected = {};
		s08._selected = {};
		if (!z28) {
			s08.init(i28);
		}
	};
	F08.Scroller.prototype = {
		_hasDef: true,
		_hasTheme: true,
		_hasLang: true,
		_hasPreset: true,
		_class: 'scroller',
		_defaults: r08({}, F08.Frame.prototype._defaults, {
			minWidth: 80,
			height: 40,
			rows: 3,
			multiline: 1,
			delay: 300,
			readonly: false,
			showLabel: true,
			setOnTap: false,
			wheels: [],
			preset: '',
			speedUnit: 0.0012,
			timeUnit: 0.08,
			checkIcon: 'checkmark',
			validate: function() {},
			formatValue: function(D7S) {
				return D7S.join(' ');
			},
			parseValue: function(Q7S, S7S) {
				var j7S = [],
					h7S = [],
					w7S = 0,
					n7S, Z7S;
				if (Q7S !== null && Q7S !== R08) {
					j7S = (Q7S + '').split(' ');
				}
				X08.each(S7S.settings.wheels, function(K7S, q7S) {
					X08.each(q7S, function(k7S, V7S) {
						Z7S = V7S.data;
						n7S = S7S._getItemValue(Z7S[0]);
						X08.each(Z7S, function(I7S, U7S) {
							if (j7S[w7S] == S7S._getItemValue(U7S)) {
								n7S = S7S._getItemValue(U7S);
								return false;
							}
						});
						h7S.push(n7S);
						w7S++;
					});
				});
				return h7S;
			}
		})
	};
}(window, document));
(function(b7S) {
	var G7S = mobiscroll,
		N7S = G7S.$;
	function t7S(A7S, M7S, c7S, J7S, e7S, g7S, o7S) {
		var y7S = new Date(A7S, M7S, c7S, J7S || 0, e7S || 0, g7S || 0, o7S || 0);
		if (y7S.getHours() == 23 && (J7S || 0) === 0) {
			y7S.setHours(y7S.getHours() + 2);
		}
		return y7S;
	}
	G7S.util.datetime = {
		defaults: {
			shortYearCutoff: '+10',
			monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			amText: 'am',
			pmText: 'pm',
			getYear: function(u7S) {
				return u7S.getFullYear();
			},
			getMonth: function(P7S) {
				return P7S.getMonth();
			},
			getDay: function(v7S) {
				return v7S.getDate();
			},
			getDate: t7S,
			getMaxDayOfMonth: function(W7S, L7S) {
				return 32 - new Date(W7S, L7S, 32, 12).getDate();
			},
			getWeekNumber: function(l7S) {
				l7S = new Date(l7S);
				l7S.setHours(0, 0, 0);
				l7S.setDate(l7S.getDate() + 4 - (l7S.getDay() || 7));
				var T7S = new Date(l7S.getFullYear(), 0, 1);
				return Math.ceil(((l7S - T7S) / 86400000 + 1) / 7);
			}
		},
		adjustedDate: t7S,
		formatDate: function(H7S, i7S, a7S) {
			if (!i7S) {
				return null;
			}
			var X7S = N7S.extend({}, G7S.util.datetime.defaults, a7S),
				r7S = function(z7S) {
					var p7S = 0;
					while (R7S + 1 < H7S.length && H7S.charAt(R7S + 1) == z7S) {
						p7S++;
						R7S++;
					}
					return p7S;
				},
				f7S = function(d7S, s7S, x5S) {
					var C7S = '' + s7S;
					if (r7S(d7S)) {
						while (C7S.length < x5S) {
							C7S = '0' + C7S;
						}
					}
					return C7S;
				},
				B7S = function(D5S, Y5S, S5S, Q5S) {
					return r7S(D5S) ? Q5S[Y5S] : S5S[Y5S];
				},
				R7S, E7S, m7S = '',
				O7S = false;
			for (R7S = 0; R7S < H7S.length; R7S++) {
				if (O7S) {
					if (H7S.charAt(R7S) == "'" && !r7S("'")) {
						O7S = false;
					} else {
						m7S += H7S.charAt(R7S);
					}
				} else {
					switch (H7S.charAt(R7S)) {
						case 'd':
							m7S += f7S('d', X7S.getDay(i7S), 2);
							break;
						case 'D':

							m7S += B7S('D', i7S.getDay(), X7S.dayNamesShort, X7S.dayNames);
							break;
						case 'o':
							m7S += f7S('o', (i7S.getTime() - new Date(i7S.getFullYear(), 0, 0).getTime()) / 86400000, 3);
							break;
						case 'm':
							m7S += f7S('m', X7S.getMonth(i7S) + 1, 2);
							break;
						case 'M':
							m7S += B7S('M', X7S.getMonth(i7S), X7S.monthNamesShort, X7S.monthNames);
							break;
						case 'y':
							E7S = X7S.getYear(i7S);
							m7S += r7S('y') ? E7S : (E7S % 100 < 10 ? '0' : '') + E7S % 100;
							break;
						case 'h':
							var F7S = i7S.getHours();
							m7S += f7S('h', F7S > 12 ? F7S - 12 : F7S === 0 ? 12 : F7S, 2);
							break;
						case 'H':
							m7S += f7S('H', i7S.getHours(), 2);
							break;
						case 'i':
							m7S += f7S('i', i7S.getMinutes(), 2);
							break;
						case 's':
							m7S += f7S('s', i7S.getSeconds(), 2);
							break;
						case 'a':
							m7S += i7S.getHours() > 11 ? X7S.pmText : X7S.amText;
							break;
						case 'A':
							m7S += i7S.getHours() > 11 ? X7S.pmText.toUpperCase() : X7S.amText.toUpperCase();
							break;
						case "'":
							if (r7S("'")) {
								m7S += "'";
							} else {
								O7S = true;
							}
							break;
						default:
							m7S += H7S.charAt(R7S);
					}
				}
			}
			return m7S;
		},
		parseDate: function(U5S, n5S, o5S) {
			var j5S = N7S.extend({}, G7S.util.datetime.defaults, o5S),
				V5S = j5S.defaultValue && j5S.defaultValue.getTime ? j5S.defaultValue : new Date();
			if (!U5S || !n5S) {
				return V5S;
			}
			if (n5S.getTime) {
				return n5S;
			}
			n5S = typeof n5S == 'object' ? n5S.toString() : n5S + '';
			var y5S = j5S.shortYearCutoff,
				q5S = j5S.getYear(V5S),
				K5S = j5S.getMonth(V5S) + 1,
				k5S = j5S.getDay(V5S),
				M5S = -1,
				h5S = V5S.getHours(),
				g5S = V5S.getMinutes(),
				c5S = 0,
				I5S = -1,
				A5S = false,
				N5S = function(P5S) {
					var u5S = Z5S + 1 < U5S.length && U5S.charAt(Z5S + 1) == P5S;
					if (u5S) {
						Z5S++;
					}
					return u5S;
				},
				w5S = function(v5S) {
					N5S(v5S);
					var L5S = v5S == '@' ? 14 : v5S == '!' ? 20 : v5S == 'y' ? 4 : v5S == 'o' ? 3 : 2,
						l5S = new RegExp('^\\d{1,' + L5S + '}'),
						W5S = n5S.substr(G5S).match(l5S);
					if (!W5S) {
						return 0;
					}
					G5S += W5S[0].length;
					return parseInt(W5S[0], 10);
				},
				b5S = function(i5S, X5S, R5S) {
					var m5S = N5S(i5S) ? R5S : X5S,
						T5S;
					for (T5S = 0; T5S < m5S.length; T5S++) {
						if (n5S.substr(G5S, m5S[T5S].length).toLowerCase() == m5S[T5S].toLowerCase()) {
							G5S += m5S[T5S].length;
							return T5S + 1;
						}
					}
					return 0;
				},
				J5S = function() {
					G5S++;
				},
				G5S = 0,
				Z5S;
			for (Z5S = 0; Z5S < U5S.length; Z5S++) {
				if (A5S) {
					if (U5S.charAt(Z5S) == "'" && !N5S("'")) {
						A5S = false;
					} else {
						J5S();
					}
				} else {
					switch (U5S.charAt(Z5S)) {
						case 'd':
							k5S = w5S('d');
							break;
						case 'D':
							b5S('D', j5S.dayNamesShort, j5S.dayNames);
							break;
						case 'o':
							M5S = w5S('o');
							break;
						case 'm':
							K5S = w5S('m');
							break;
						case 'M':
							K5S = b5S('M', j5S.monthNamesShort, j5S.monthNames);
							break;
						case 'y':
							q5S = w5S('y');
							break;
						case 'H':
							h5S = w5S('H');
							break;
						case 'h':
							h5S = w5S('h');
							break;
						case 'i':
							g5S = w5S('i');
							break;
						case 's':
							c5S = w5S('s');
							break;
						case 'a':
							I5S = b5S('a', [j5S.amText, j5S.pmText], [j5S.amText, j5S.pmText]) - 1;
							break;
						case 'A':
							I5S = b5S('A', [j5S.amText, j5S.pmText], [j5S.amText, j5S.pmText]) - 1;
							break;
						case "'":
							if (N5S("'")) {
								J5S();
							} else {
								A5S = true;
							}
							break;
						default:
							J5S();
					}
				}
			}
			if (q5S < 100) {
				q5S += new Date().getFullYear() - new Date().getFullYear() % 100 + (q5S <= (typeof y5S != 'string' ? y5S : new Date().getFullYear() % 100 + parseInt(y5S, 10)) ? 0 : -100);
			}
			if (M5S > -1) {
				K5S = 1;
				k5S = M5S;
				do {
					var e5S = 32 - new Date(q5S, K5S - 1, 32, 12).getDate();
					if (k5S <= e5S) {
						break;
					}
					K5S++;
					k5S -= e5S;
				} while (true);
			}
			h5S = I5S == -1 ? h5S : I5S && h5S < 12 ? h5S + 12 : !I5S && h5S == 12 ? 0 : h5S;
			var t5S = j5S.getDate(q5S, K5S - 1, k5S, h5S, g5S, c5S);
			if (j5S.getYear(t5S) != q5S || j5S.getMonth(t5S) + 1 != K5S || j5S.getDay(t5S) != k5S) {
				return V5S;
			}
			return t5S;
		}
	};
}());
(function(a) {
    var d = mobiscroll,
        b = d.$,
        c = d.util.datetime,
        e = c.adjustedDate,
        f = new Date(),
        g = {
            startYear: f.getFullYear() - 100,
            endYear: f.getFullYear() + 1,
            separator: ' ',
            dateFormat: 'mm/dd/yy',
            dateDisplay: 'MMddyy',
            timeFormat: 'h:ii A',
            dayText: 'Day',
            monthText: 'Month',
            yearText: 'Year',
            hourText: 'Hours',
            minuteText: 'Minutes',
            ampmText: '&nbsp;',
            secText: 'Seconds',
            nowText: 'Now',
            todayText: 'Today'
        },
        h = function(i) {
            function m(b, a, c, d) {
                return Math.min(d, Math.floor(b / a) * a + c);
            }

            function v(a) {
                return a < 10 ? '0' + a : a;
            }

            function a4(c) {
                var d, b, a, f = [];
                if (c) {
                    for (d = 0; d < c.length; d++) {
                        b = c[d];
                        if (b.start && b.start.getTime) {
                            a = new Date(b.start);
                            while (a <= b.end) {
                                f.push(e(a.getFullYear(), a.getMonth(), a.getDate()));
                                a.setDate(a.getDate() + 1);
                            }
                        } else {
                            f.push(b);
                        }
                    }
                    return f;
                }
                return c;
            }

            function X(a, b, c) {
                return Math.floor((c - b) / a) * a + b;
            }

            function ai(a) {
                return {
                    value: a,
                    display: (/yy/i.test(y) ? a : (a + '').substr(2, 2)) + (f.yearSuffix || '')
                };
            }

            function ad(a) {
                return a;
            }

            function ac(a) {
                return f.getYear(a);
            }

            function aa(a) {
                return f.getMonth(a);
            }

            function a9(a) {
                return f.getDay(a);
            }

            function a8(b) {
                var a = b.getHours();
                a = r && a >= 12 ? a - 12 : a;
                return m(a, u, C, U);
            }

            function a7(a) {
                return m(a.getMinutes(), q, x, V);
            }

            function al(a) {
                return m(a.getSeconds(), z, O, W);
            }

            function aj(a) {
                return a.getMilliseconds();
            }

            function ah(a) {
                return a.getHours() > 11 ? 1 : 0;
            }

            function M(a) {
                return a.getFullYear() + '-' + v(a.getMonth() + 1) + '-' + v(a.getDate());
            }

            function ae(a) {
                return m(Math.round((a.getTime() - new Date(a).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
            }

            function p(e, b, d, f) {
                var c;
                if (h[b] !== a) {
                    c = +e[h[b]];
                    if (!isNaN(c)) {
                        return c;
                    }
                }
                if (d) {
                    return l[b](d);
                }
                if (D[b] !== a) {
                    return D[b];
                }
                return l[b](f);
            }

            function A(c) {
                var b, d = new Date(new Date().setHours(0, 0, 0, 0));
                if (c === null) {
                    return c;
                }
                if (h.dd !== a) {
                    b = c[h.dd].split('-');
                    b = new Date(b[0], b[1] - 1, b[2]);
                }
                if (h.tt !== a) {
                    b = b || d;
                    b = new Date(b.getTime() + c[h.tt] % 86400 * 1000);
                }
                var e = p(c, 'y', b, d),
                    g = p(c, 'm', b, d),
                    j = Math.min(p(c, 'd', b, d), f.getMaxDayOfMonth(e, g)),
                    i = p(c, 'h', b, d);
                return f.getDate(e, g, j, r && p(c, 'a', b, d) ? i + 12 : i, p(c, 'i', b, d), p(c, 's', b, d), p(c, 'u', b, d));
            }

            function F(b, g) {
                var c, d, e = ['y', 'm', 'd', 'a', 'h', 'i', 's', 'u', 'dd', 'tt'],
                    f = [];
                if (b === null || b === a) {
                    return b;
                }
                for (c = 0; c < e.length; c++) {
                    d = e[c];
                    if (h[d] !== a) {
                        f[h[d]] = l[d](b);
                    }
                    if (g) {
                        D[c] = l[d](b);
                    }
                }
                return f;
            }

            function Q(a, b) {
                return b ? Math.floor(new Date(a) / 8.64e7) : a.getMonth() + 12 * (a.getFullYear() - 1970);
            }

            function ak(b) {
                var a = /d/i.test(b);
                return {
                    label: '',
                    cssClass: 'mbsc-dt-whl-date',
                    min: Q(M(j), a),
                    max: Q(M(k), a),
                    data: function(e) {
                        var g = new Date(new Date().setHours(0, 0, 0, 0)),
                            d = a ? new Date(e * 8.64e7) : new Date(1970, e, 1);
                        if (a) {
                            d = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
                        }
                        return {
                            invalid: a && !B(d, true),
                            value: M(d),
                            display: g.getTime() == d.getTime() ? f.todayText : c.formatDate(b, d, f)
                        };
                    },
                    getIndex: function(b) {
                        return Q(b, a);
                    }
                };
            }

            function ab(d) {
                var a, b, g, e = [];
                if (/s/i.test(d)) {
                    b = z;
                } else if (/i/i.test(d)) {
                    b = q * 60;
                } else if (/h/i.test(d)) {
                    b = u * 3600;
                }
                L = o.tt = b;
                for (a = 0; a < 86400; a += b) {
                    g = new Date(new Date().setHours(0, 0, 0, 0) + a * 1000);
                    e.push({
                        value: a,
                        display: c.formatDate(d, g, f)
                    });
                }
                return {
                    label: '',
                    cssClass: 'mbsc-dt-whl-time',
                    data: e
                };
            }

            function a6() {
                var p, s, c, l, b, g, e, n, d = 0,
                    o = [],
                    m = [],
                    i = [];
                if (w.match(/date/i)) {
                    p = S.split(/\|/.test(S) ? '|' : '');
                    for (l = 0; l < p.length; l++) {
                        c = p[l];
                        g = 0;
                        if (c.length) {
                            if (/y/i.test(c)) {
                                g++;
                            }
                            if (/m/i.test(c)) {
                                g++;
                            }
                            if (/d/i.test(c)) {
                                g++;
                            }
                            if (g > 1 && h.dd === a) {
                                h.dd = d;
                                d++;
                                m.push(ak(c));
                                i = m;
                                a2 = true;
                            } else if (/y/i.test(c) && h.y === a) {
                                h.y = d;
                                d++;
								
                                m.push({
                                    cssClass: 'mbsc-dt-whl-y',
                                    label: f.yearText,
                                    min: f.getYear(j),
                                    max: f.getYear(k),
                                    data: ai,
                                    getIndex: ad
                                });
                            } else if (/m/i.test(c) && h.m === a) {
                                h.m = d;
                                e = [];
                                d++;
                                for (b = 0; b < 12; b++) {
                                    n = y.replace(/[dy]/gi, '').replace(/mm/, v(b + 1) + (f.monthSuffix || '')).replace(/m/, b + 1 + (f.monthSuffix || ''));
                                    e.push({
                                        value: b,
                                        display: /MM/.test(n) ? n.replace(/MM/, '<span class="mbsc-dt-month">' + f.monthNames[b] + '</span>') : n.replace(/M/, '<span class="mbsc-dt-month">' + f.monthNamesShort[b] + '</span>')
                                    });
                                }
                                m.push({
                                    cssClass: 'mbsc-dt-whl-m',
                                    label: f.monthText,
                                    data: e
                                });
                            } else if (/d/i.test(c) && h.d === a) {
                                h.d = d;
                                e = [];
                                d++;
                                for (b = 1; b < 32; b++) {
                                    e.push({
                                        value: b,
                                        display: (/dd/i.test(y) ? v(b) : b) + (f.daySuffix || '')
                                    });
                                }
                                m.push({
                                    cssClass: 'mbsc-dt-whl-d',
                                    label: f.dayText,
                                    data: e
                                });
                            }
                        }
                    }
                    o.push(m);
                }
                if (w.match(/time/i)) {

                    s = H.split(/\|/.test(H) ? '|' : '');
                    for (l = 0; l < s.length; l++) {
                        c = s[l];
                        g = 0;
                        if (c.length) {
                            if (/h/i.test(c)) {
                                g++;
                            }
                            if (/i/i.test(c)) {
                                g++;
                            }
                            if (/s/i.test(c)) {
                                g++;
                            }
                            if (/a/i.test(c)) {
                                g++;
                            }
                        }
                        if (g > 1 && h.tt === a) {
                            h.tt = d;
                            d++;
                            i.push(ab(c));
                        } else if (/h/i.test(c) && h.h === a) {
                            e = [];
                            h.h = d;
                            d++;
                            for (b = C; b < (r ? 12 : 24); b += u) {
                                e.push({
                                    value: b,
                                    display: r && b === 0 ? 12 : /hh/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-h',
                                label: f.hourText,
                                data: e
                            });
                        } else if (/i/i.test(c) && h.i === a) {
                            e = [];
                            h.i = d;
                            d++;
                            for (b = x; b < 60; b += q) {
                                e.push({
                                    value: b,
                                    display: /ii/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-i',
                                label: f.minuteText,
                                data: e
                            });
                        } else if (/s/i.test(c) && h.s === a) {
                            e = [];
                            h.s = d;
                            d++;
                            for (b = O; b < 60; b += z) {
                                e.push({
                                    value: b,
                                    display: /ss/i.test(G) ? v(b) : b
                                });
                            }
                            i.push({
                                cssClass: 'mbsc-dt-whl-s',
                                label: f.secText,
                                data: e
                            });
                        } else if (/a/i.test(c) && h.a === a) {
                            h.a = d;
                            d++;
                            i.push({
                                cssClass: 'mbsc-dt-whl-a',
                                label: f.ampmText,
                                data: /A/.test(c) ? [{
                                    value: 0,
                                    display: f.amText.toUpperCase()
                                }, {
                                    value: 1,
                                    display: f.pmText.toUpperCase()
                                }] : [{
                                    value: 0,
                                    display: f.amText
                                }, {
                                    value: 1,
                                    display: f.pmText
                                }]
                            });
                        }
                    }
                    if (i != m) {
                        o.push(i);
                    }
                }
                return o;
            }

            function ag(d) {
                var a, e, f, b = {};
                if (d.is('input')) {
                    switch (d.attr('type')) {
                        case 'date':
                            a = 'yy-mm-dd';
                            break;
                        case 'datetime':
                            a = 'yy-mm-ddTHH:ii:ssZ';
                            break;
                        case 'datetime-local':
                            a = 'yy-mm-ddTHH:ii:ss';
                            break;
                        case 'month':
                            a = 'yy-mm';
                            b.dateOrder = 'mmyy';
                            break;
                        case 'time':
                            a = 'HH:ii:ss';
                            break;
                    }
                    b.format = a;
                    e = d.attr('min');
                    f = d.attr('max');
                    if (e) {
                        b.min = c.parseDate(a, e);
                    }
                    if (f) {
                        b.max = c.parseDate(a, f);
                    }
                }
                return b;
            }

            function af(a, f) {
                var b, c, e = false,
                    d = false,
                    g = 0,
                    h = 0;
                j = A(F(j));
                k = A(F(k));
                if (B(a)) {
                    return a;
                }
                if (a < j) {
                    a = j;
                }
                if (a > k) {
                    a = k;
                }
                b = a;
                c = a;
                if (f !== 2) {
                    e = B(b);
                    while (!e && b < k) {
                        b = new Date(b.getTime() + 1000 * 60 * 60 * 24);
                        e = B(b);
                        g++;
                    }
                }
                if (f !== 1) {
                    d = B(c);
                    while (!d && c > j) {
                        c = new Date(c.getTime() - 1000 * 60 * 60 * 24);
                        d = B(c);
                        h++;
                    }
                }
                if (f === 1 && e) {
                    return b;
                }
                if (f === 2 && d) {
                    return c;
                }
                return h <= g && d ? c : b;
            }

            function B(a, b) {
                if (!b && a < j) {
                    return false;
                }
                if (!b && a > k) {
                    return false;
                }
                if (a3(a, J)) {
                    return true;
                }
                if (a3(a, I)) {
                    return false;
                }
                return true;
            }

            function a3(b, e) {
                var c, d, a;
                if (e) {
                    for (d = 0; d < e.length; d++) {
                        c = e[d];
                        a = c + '';
                        if (!c.start) {
                            if (c.getTime) {
                                if (b.getFullYear() == c.getFullYear() && b.getMonth() == c.getMonth() && b.getDate() == c.getDate()) {
                                    return true;
                                }
                            } else if (!a.match(/w/i)) {
                                a = a.split('/');
                                if (a[1]) {
                                    if (a[0] - 1 == b.getMonth() && a[1] == b.getDate()) {
                                        return true;
                                    }
                                } else if (a[0] == b.getDate()) {
                                    return true;
                                }
                            } else {
                                a = +a.replace('w', '');
                                if (a == b.getDay()) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            }

            function a0(h, l, i, k, j, e, g) {
                var b, d, c, a;
                if (h) {
                    for (d = 0; d < h.length; d++) {
                        b = h[d];
                        a = b + '';
                        if (!b.start) {
                            if (b.getTime) {
                                if (f.getYear(b) == l && f.getMonth(b) == i) {
                                    e[f.getDay(b)] = g;
                                }
                            } else if (!a.match(/w/i)) {
                                a = a.split('/');
                                if (a[1]) {
                                    if (a[0] - 1 == i) {
                                        e[a[1]] = g;
                                    }
                                } else {
                                    e[a[0]] = g;
                                }
                            } else {
                                a = +a.replace('w', '');
                                for (c = a - k; c < j; c += 7) {
                                    if (c >= 0) {
                                        e[c + 1] = g;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function _(x, y, e, M, I, B, N, K) {
                var H, D, k, F, E, C, i, A, z, b, g, d, c, p, v, G, w, l, q, u, J = {},
                    j = f.getDate(M, I, B),
                    h = ['a', 'h', 'i', 's'];
                if (x) {
                    for (i = 0; i < x.length; i++) {
                        g = x[i];
                        if (g.start) {
                            g.apply = false;
                            k = g.d;
                            w = k + '';
                            l = w.split('/');
                            if (k && (k.getTime && M == f.getYear(k) && I == f.getMonth(k) && B == f.getDay(k) || !w.match(/w/i) && (l[1] && B == l[1] && I == l[0] - 1 || !l[1] && B == l[0]) || w.match(/w/i) && j.getDay() == +w.replace('w', ''))) {
                                g.apply = true;
                                J[j] = true;
                            }
                        }
                    }
                    for (i = 0; i < x.length; i++) {
                        g = x[i];
                        H = 0;
                        G = 0;
                        A = s[e];
                        z = n[e];
                        p = true;
                        v = true;
                        D = false;
                        if (g.start && (g.apply || !g.d && !J[j])) {
                            d = g.start.split(':');
                            c = g.end.split(':');
                            for (b = 0; b < 3; b++) {
                                if (d[b] === a) {
                                    d[b] = 0;
                                }
                                if (c[b] === a) {
                                    c[b] = 59;
                                }
                                d[b] = +d[b];
                                c[b] = +c[b];
                            }
                            if (e == 'tt') {
                                A = m(Math.round((new Date(j).setHours(d[0], d[1], d[2]) - new Date(j).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
                                z = m(Math.round((new Date(j).setHours(c[0], c[1], c[2]) - new Date(j).setHours(0, 0, 0, 0)) / 1000), L, 0, 86400);
                            } else {
                                d.unshift(d[0] > 11 ? 1 : 0);
                                c.unshift(c[0] > 11 ? 1 : 0);
                                if (r) {
                                    if (d[1] >= 12) {
                                        d[1] = d[1] - 12;
                                    }
                                    if (c[1] >= 12) {
                                        c[1] = c[1] - 12;
                                    }
                                }
                                for (b = 0; b < y; b++) {
                                    if (t[b] !== a) {
                                        q = m(d[b], o[h[b]], s[h[b]], n[h[b]]);
                                        u = m(c[b], o[h[b]], s[h[b]], n[h[b]]);
                                        F = 0;
                                        E = 0;
                                        C = 0;
                                        if (r && b == 1) {
                                            F = d[0] ? 12 : 0;
                                            E = c[0] ? 12 : 0;
                                            C = t[0] ? 12 : 0;
                                        }
                                        if (!p) {
                                            q = 0;
                                        }
                                        if (!v) {
                                            u = n[h[b]];
                                        }
                                        if ((p || v) && (q + F < t[b] + C && t[b] + C < u + E)) {
                                            D = true;
                                        }
                                        if (t[b] != q) {
                                            p = false;
                                        }
                                        if (t[b] != u) {
                                            v = false;
                                        }
                                    }
                                }
                                if (!K) {
                                    for (b = y + 1; b < 4; b++) {
                                        if (d[b] > 0) {
                                            H = o[e];
                                        }
                                        if (c[b] < n[h[b]]) {
                                            G = o[e];
                                        }
                                    }
                                }
                                if (!D) {
                                    q = m(d[y], o[e], s[e], n[e]) + H;
                                    u = m(c[y], o[e], s[e], n[e]) - G;
                                    if (p) {
                                        A = q;
                                    }
                                    if (v) {
                                        z = u;
                                    }
                                }
                            }
                            if (p || v || D) {
                                for (b = A; b <= z; b += o[e]) {
                                    N[b] = !K;
                                }
                            }
                        }
                    }
                }
            }
            var L, a2, Y, h = {},
                D = {},
                t = [],
                P = ag(b(this)),
                $ = b.extend({}, i.settings),
                f = b.extend(i.settings, d.util.datetime.defaults, g, P, $),
                I = a4(f.invalid),
                J = a4(f.valid),
                w = f.preset,
                K = w == 'datetime' ? f.dateFormat + f.separator + f.timeFormat : w == 'time' ? f.timeFormat : f.dateFormat,
                T = P.format || K,
                S = f.dateWheels || f.dateFormat,
                H = f.timeWheels || f.timeFormat,
                y = f.dateWheels || f.dateDisplay,
                G = H,
                a1 = f.baseTheme || f.theme,
                j = f.min || e(f.startYear, 0, 1),
                k = f.max || e((f.endYear+99), 11, 31, 23, 59, 59),
                R = /time/i.test(w),
                r = /h/.test(G),
                Z = /D/.test(y),
                E = f.steps || {},
                u = E.hour || f.stepHour || 1,
                q = E.minute || f.stepMinute || 1,
                z = E.second || f.stepSecond || 1,
                N = E.zeroBased,
                C = N ? 0 : j.getHours() % u,
                x = N ? 0 : j.getMinutes() % q,
                O = N ? 0 : j.getSeconds() % z,
                U = X(u, C, r ? 11 : 23),
                V = X(q, x, 59),
                W = X(q, x, 59),
                s = {
                    y: j.getFullYear(),
                    m: 0,
                    d: 1,
                    h: C,
                    i: x,
                    s: O,
                    a: 0,
                    tt: 0
                },
                n = {
                    y: k.getFullYear(),
                    m: 11,
                    d: 31,
                    h: U,
                    i: V,
                    s: W,
                    a: 1,
                    tt: 86400
                },
                o = {
                    y: 1,
                    m: 1,
                    d: 1,
                    h: u,
                    i: q,
                    s: z,
                    a: 1,
                    tt: 1
                },
                a5 = {
                    'android-holo': 40,
                    bootstrap: 46,
                    ios: 50,
                    jqm: 46,
                    material: 46,
                    mobiscroll: 46,
                    wp: 50
                },
                l = {
                    y: ac,
                    m: aa,
                    d: a9,
                    h: a8,
                    i: a7,
                    s: al,
                    u: aj,
                    a: ah,
                    dd: M,
                    tt: ae
                };
            i.getDate = i.getVal = function(a) {
                return i._hasValue || a ? A(i.getArrayVal(a)) : null;
            };
            i.setDate = function(a, b, c, d, e) {
                i.setArrayVal(F(a), b, e, d, c);
            };
            Y = a6();
            i.format = K;
            i.order = h;
            i.handlers.now = function() {
                i.setDate(new Date(), i.live, 1000, true, true);
            };
            i.buttons.now = {
                text: f.nowText,
                handler: 'now'
            };
            return {
                minWidth: a2 && R ? a5[a1] : a,
                compClass: 'mbsc-dt',
                wheels: Y,
                headerText: f.headerText ? function() {
                    return c.formatDate(K, A(i.getArrayVal(true)), f);
                } : false,
                formatValue: function(a) {
                    return c.formatDate(T, A(a), f);
                },
                parseValue: function(a) {
                    if (!a) {
                        D = {};
                    }
                    return F(a ? c.parseDate(T, a, f) : f.defaultValue && f.defaultValue.getTime ? f.defaultValue : new Date(), !!a && !!a.getTime);
                },
                validate: function(C) {
                    var c, p, u, E, G = C.values,
                        x = C.index,
                        D = C.direction,
                        m = i.settings.wheels[0][h.d],
                        g = af(A(G), D),
                        z = F(g),
                        q = [],
                        B = {},
                        e = l.y(g),
                        d = l.m(g),
                        r = f.getMaxDayOfMonth(e, d),
                        v = true,
                        w = true;
                    b.each(['dd', 'y', 'm', 'd', 'tt', 'a', 'h', 'i', 's'], function(y, c) {
                        if (h[c] !== a) {
                            var m = s[c],
                                t = n[c],
                                i = l[c](g);
                            q[h[c]] = [];
                            if (v && j) {
                                m = l[c](j);
                            }
                            if (w && k) {
                                t = l[c](k);
                            }
                            if (c != 'y' && c != 'dd') {
                                for (p = s[c]; p <= n[c]; p += o[c]) {
                                    if (p < m || p > t) {
                                        q[h[c]].push(p);
                                    }
                                }
                            }
                            if (i < m) {
                                i = m;
                            }
                            if (i > t) {
                                i = t;
                            }
                            if (v) {
                                v = i == m;
                            }
                            if (w) {
                                w = i == t;
                            }
                            if (c == 'd') {
                                var x = f.getDate(e, d, 1).getDay(),
                                    u = {};
                                a0(I, e, d, x, r, u, 1);
                                a0(J, e, d, x, r, u, 0);
                                b.each(u, function(a, b) {
                                    if (b) {
                                        q[h[c]].push(a);
                                    }
                                });
                            }
                        }
                    });
                    if (R) {
                        b.each(['a', 'h', 'i', 's', 'tt'], function(j, c) {
                            var m = l[c](g),
                                k = l.d(g),
                                f = {};
                            if (h[c] !== a) {
                                _(I, j, c, e, d, k, f, 0);
                                _(J, j, c, e, d, k, f, 1);
                                b.each(f, function(a, b) {
                                    if (b) {
                                        q[h[c]].push(a);
                                    }
                                });
                                t[j] = i.getValidValue(h[c], m, D, f);
                            }
                        });
                    }
                    if (m && (m._length !== r || Z && (x === a || x === h.y || x === h.m))) {
                        B[h.d] = m;
                        m.data = [];
                        for (c = 1; c <= r; c++) {
                            E = f.getDate(e, d, c).getDay();
                            u = y.replace(/[my]/gi, '').replace(/dd/, (c < 10 ? '0' + c : c) + (f.daySuffix || '')).replace(/d/, c + (f.daySuffix || ''));
                            m.data.push({
                                value: c,
                                display: u.match(/DD/) ? u.replace(/DD/, '<span class="mbsc-dt-day">' + f.dayNames[E] + '</span>') : u.replace(/D/, '<span class="mbsc-dt-day">' + f.dayNamesShort[E] + '</span>')
                            });
                        }
                        i._tempWheelArray[h.d] = z[h.d];
                        i.changeWheel(B);
                    }
                    return {
                        disabled: q,
                        valid: z
                    };
                }
            };
        };
    b.each(['date', 'time', 'datetime'], function(b, a) {
        d.presets.scroller[a] = h;
    });
}());
(function() {
	mobiscroll.$.each(['date', 'time', 'datetime'], function(S2S, D2S) {
		mobiscroll.presetShort(D2S);
	});
}());
(function(Q2S) {
	var h2S = mobiscroll,
		j2S = h2S.$,
		w2S = {
			invalid: [],
			showInput: true,
			inputClass: ''
		};
	h2S.presets.scroller.list = function(Z2S) {
		var W2S = j2S.extend({}, Z2S.settings),
			n2S = j2S.extend(Z2S.settings, w2S, W2S),
			J2S = n2S.layout || (/top|bottom/.test(n2S.display) ? 'liquid' : ''),
			N2S = J2S == 'liquid',
			u2S = n2S.readonly,
			U2S = j2S(this),
			V2S, G2S, y2S = this.id + '_dummy',
			q2S = 0,
			b2S = 0,
			K2S, t2S = [],
			k2S = n2S.wheelArray || o2S(U2S),
			A2S = l2S(q2S),
			M2S = m2S(k2S),
			g2S = e2S(M2S, q2S);
		function X2S(H2S, r2S, F2S) {
			var R2S = 0,
				f2S = [];
			while (R2S < H2S) {
				f2S[R2S] = i2S(F2S, R2S, r2S);
				R2S++;
			}
			return f2S;
		}
		function i2S(z2S, C2S, d2S) {
			var E2S = 0,
				B2S, O2S = d2S,
				a2S = [];
			while (E2S < C2S) {
				var p2S = z2S[E2S];
				for (B2S in O2S) {
					if (O2S[B2S].key == p2S) {
						O2S = O2S[B2S].children;
						break;
					}
				}
				E2S++;
			}
			E2S = 0;
			while (E2S < O2S.length) {
				if (O2S[E2S].invalid) {
					a2S.push(O2S[E2S].key);
				}
				E2S++;
			}
			return a2S;
		}
		function T2S(x8S, Y8S) {
			var s2S = [];
			while (x8S) {
				s2S[--x8S] = true;
			}
			s2S[Y8S] = false;
			return s2S;
		}
		function l2S(Q8S) {
			var S8S = [],
				D8S;
			for (D8S = 0; D8S < Q8S; D8S++) {
				S8S[D8S] = n2S.labels && n2S.labels[D8S] ? n2S.labels[D8S] : D8S;
			}
			return S8S;
		}
		function e2S(V8S, k8S, q8S) {
			var j8S = 0,
				h8S, K8S, Z8S, n8S = [
					[]
				],
				w8S = k2S;
			if (k8S) {
				for (h8S = 0; h8S < k8S; h8S++) {
					if (N2S) {
						n8S[0][h8S] = {};
					} else {
						n8S[h8S] = [{}];
					}
				}
			}
			while (j8S < V8S.length) {
				if (N2S) {
					n8S[0][j8S] = v2S(w8S, A2S[j8S]);
				} else {
					n8S[j8S] = [v2S(w8S, A2S[j8S])];
				}
				h8S = 0;
				Z8S = Q2S;
				while (h8S < w8S.length && Z8S === Q2S) {
					if (w8S[h8S].key == V8S[j8S] && (q8S !== Q2S && j8S <= q8S || q8S === Q2S)) {
						Z8S = h8S;
					}
					h8S++;
				}
				if (Z8S !== Q2S && w8S[Z8S].children) {
					j8S++;
					w8S = w8S[Z8S].children;
				} else if ((K8S = I2S(w8S)) && K8S.children) {
					j8S++;
					w8S = K8S.children;
				} else {
					return n8S;
				}
			}
			return n8S;
		}
		function I2S(I8S, N8S) {
			if (!I8S) {
				return false;
			}
			var U8S = 0,
				G8S;
			while (U8S < I8S.length) {
				if (!(G8S = I8S[U8S++]).invalid) {
					return N8S ? U8S - 1 : G8S;
				}
			}
			return false;
		}
		function v2S(b8S, J8S) {
			var y8S = {
					data: [],
					label: J8S
				},
				t8S = 0;
			while (t8S < b8S.length) {
				y8S.data.push({
					value: b8S[t8S].key,
					display: b8S[t8S].value
				});
				t8S++;
			}
			return y8S;
		}
		function P2S(A8S) {
			if (Z2S._isVisible) {
				j2S('.mbsc-sc-whl-w', Z2S._markup).css('display', '').slice(A8S).hide();
			}
		}
		function m2S(u8S) {
			var c8S = [],
				e8S = u8S,
				g8S, M8S = true,
				o8S = 0;
			while (M8S) {
				g8S = I2S(e8S);
				c8S[o8S++] = g8S.key;
				M8S = g8S.children;
				if (M8S) {
					e8S = M8S;
				}
			}
			return c8S;
		}
		function c2S(l8S, X8S) {
			var i8S = [],
				v8S = k2S,
				W8S = 0,
				m8S = false,
				L8S, T8S, P8S;
			if (l8S[W8S] !== Q2S && W8S <= X8S) {
				L8S = 0;
				T8S = l8S[W8S];
				P8S = Q2S;
				while (L8S < v8S.length && P8S === Q2S) {
					if (v8S[L8S].key == l8S[W8S] && !v8S[L8S].invalid) {
						P8S = L8S;
					}
					L8S++;
				}
			} else {
				P8S = I2S(v8S, true);
				T8S = v8S[P8S].key;
			}
			m8S = P8S !== Q2S ? v8S[P8S].children : false;
			i8S[W8S] = T8S;
			while (m8S) {
				v8S = v8S[P8S].children;
				W8S++;
				m8S = false;
				P8S = Q2S;
				if (l8S[W8S] !== Q2S && W8S <= X8S) {
					L8S = 0;
					T8S = l8S[W8S];
					P8S = Q2S;
					while (L8S < v8S.length && P8S === Q2S) {
						if (v8S[L8S].key == l8S[W8S] && !v8S[L8S].invalid) {
							P8S = L8S;
						}
						L8S++;
					}
				} else {
					P8S = I2S(v8S, true);
					P8S = P8S === false ? Q2S : P8S;
					T8S = v8S[P8S].key;
				}
				m8S = P8S !== Q2S && I2S(v8S[P8S].children) ? v8S[P8S].children : false;
				i8S[W8S] = T8S;
			}
			return {
				lvl: W8S + 1,
				nVector: i8S
			};
		}
		function o2S(f8S) {
			var R8S = [];
			q2S = q2S > b2S++ ? q2S : b2S;
			f8S.children('li').each(function(a8S) {
				var H8S = j2S(this),
					r8S = H8S.clone();
				r8S.children('ul,ol').remove();
				var O8S = Z2S._processMarkup ? Z2S._processMarkup(r8S) : r8S.html().replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
					B8S = H8S.attr('data-invalid') ? true : false,
					F8S = {
						key: H8S.attr('data-val') === Q2S || H8S.attr('data-val') === null ? a8S : H8S.attr('data-val'),
						value: O8S,
						invalid: B8S,
						children: null
					},
					E8S = H8S.children('ul,ol');
				if (E8S.length) {
					F8S.children = o2S(E8S);
				}
				R8S.push(F8S);
			});
			b2S--;
			return R8S;
		}
		function L2S(C8S, D6S, s8S) {
			var p8S, z8S = (D6S || 0) + 1,
				x6S = [],
				d8S = {},
				Y6S = {};
			d8S = e2S(C8S, null, D6S);
			for (p8S = 0; p8S < C8S.length; p8S++) {
				Z2S._tempWheelArray[p8S] = C8S[p8S] = s8S.nVector[p8S] || 0;
			}
			while (z8S < s8S.lvl) {
				Y6S[z8S] = N2S ? d8S[0][z8S] : d8S[z8S][0];
				x6S.push(z8S++);
			}
			P2S(s8S.lvl);
			t2S = C8S.slice(0);
			if (x6S.length) {
				G2S = true;
				Z2S.changeWheel(Y6S);
			}
		}
		j2S('#' + y2S).remove();
		if (n2S.showInput) {
			V2S = j2S('<input type="text" id="' + y2S + '" value="" class="' + n2S.inputClass + '" placeholder="' + (n2S.placeholder || '') + '" readonly />').insertBefore(U2S);
			n2S.anchor = V2S;
			Z2S.attachShow(V2S);
		}
		if (!n2S.wheelArray) {
			U2S.hide();
		}
		return {
			wheels: g2S,
			layout: J2S,
			headerText: false,
			setOnTap: q2S == 1,
			formatValue: function(S6S) {
				if (K2S === Q2S) {
					K2S = c2S(S6S, S6S.length).lvl;
				}
				return S6S.slice(0, K2S).join(' ');
			},
			parseValue: function(Q6S) {
				return Q6S ? (Q6S + '').split(' ') : (n2S.defaultValue || M2S).slice(0);
			},
			onBeforeShow: function() {
				var j6S = Z2S.getArrayVal(true);
				t2S = j6S.slice(0);
				n2S.wheels = e2S(j6S, q2S, q2S);
				G2S = true;
			},
			onWheelGestureStart: function(h6S) {
				n2S.readonly = T2S(q2S, h6S.index);
			},
			onWheelAnimationEnd: function(q6S) {
				var w6S = q6S.index,
					n6S = Z2S.getArrayVal(true),
					Z6S = c2S(n6S, w6S);
				K2S = Z6S.lvl;
				n2S.readonly = u2S;
				if (n6S[w6S] != t2S[w6S]) {
					L2S(n6S, w6S, Z6S);
				}
			},
			onFill: function(K6S) {
				K2S = Q2S;
				if (V2S) {
					V2S.val(K6S.valueText);
				}
			},
			validate: function(I6S) {
				var V6S = I6S.values,
					U6S = I6S.index,
					k6S = c2S(V6S, V6S.length);
				K2S = k6S.lvl;
				if (U6S === Q2S) {
					P2S(k6S.lvl);
					if (!G2S) {
						L2S(V6S, U6S, k6S);
					}
				}
				G2S = false;
				return {
					disabled: X2S(K2S, k2S, V6S)
				};
			},
			onDestroy: function() {
				if (V2S) {
					V2S.remove();
				}
				U2S.show();
			}
		};
	};
}());
(function() {
	var G6S = mobiscroll,
		N6S = G6S.$,
		t6S = G6S.presets.scroller;
	G6S.presetShort('image');
	t6S.image = function(b6S) {
		if (b6S.settings.enhance) {
			b6S._processMarkup = function(y6S) {
				var J6S = y6S.attr('data-icon');
				y6S.children().each(function(M6S, A6S) {
					A6S = N6S(A6S);
					if (A6S.is('img')) {
						N6S('<div class="mbsc-img-c"></div>').insertAfter(A6S).append(A6S.addClass('mbsc-img'));
					} else if (A6S.is('p')) {
						A6S.addClass('mbsc-img-txt');
					}
				});
				if (J6S) {
					y6S.prepend('<div class="mbsc-ic mbsc-ic-' + J6S + '"></div');
				}
				y6S.html('<div class="mbsc-img-w">' + y6S.html() + '</div>');
				return y6S.html();
			};
		}
		return t6S.list.call(this, b6S);
	};
}());
(function() {
	var c6S = mobiscroll,
		e6S = c6S.presets.scroller;
	e6S.treelist = e6S.list;
	c6S.presetShort('list');
	c6S.presetShort('treelist');
}());
(function(u6S) {
	var P6S = mobiscroll,
		g6S = P6S.$,
		o6S = P6S.util,
		v6S = o6S.isString,
		W6S = {
			inputClass: '',
			invalid: [],
			rtl: false,
			showInput: true,
			groupLabel: 'Groups',
			dataText: 'text',
			dataValue: 'value',
			dataGroup: 'group',
			dataDisabled: 'disabled'
		};
	P6S.presetShort('select');
	P6S.presets.scroller.select = function(l6S) {
		var O6S, K9F, H6S, Y9F, F6S, R6S, X6S, f6S, i6S, T6S, s6S, j9F = 1000,
			m6S = g6S(this),
			q9F = g6S.extend({}, l6S.settings),
			L6S = g6S.extend(l6S.settings, W6S, q9F),
			I9F = L6S.readonly,
			w9F = L6S.layout || (/top|bottom|inline/.test(L6S.display) ? 'liquid' : ''),
			Q9F = w9F == 'liquid',
			E6S = o6S.isNumeric(L6S.select) ? L6S.select : L6S.select == 'multiple' || m6S.prop('multiple'),
			d6S = this.id + '_dummy',
			S9F = g6S('label[for="' + this.id + '"]').attr('for', d6S),
			n9F = L6S.label !== u6S ? L6S.label : S9F.length ? S9F.text() : m6S.attr('name'),
			D9F = !!L6S.data,
			C6S = D9F ? !!L6S.group : g6S('optgroup', m6S).length,
			B6S = L6S.group,
			r6S = C6S && B6S && B6S.groupWheel !== false,
			p6S = C6S && B6S && r6S && B6S.clustered === true,
			Z9F = C6S && (!B6S || B6S.header !== false && !p6S),
			z6S = m6S.val() || [],
			a6S = [];
		function V9F() {
			var M9F, c9F, J9F, u9F, A9F, g9F = 0,
				e9F = 0,
				o9F = {};
			i6S = {};
			F6S = {};
			f6S = [];
			Y9F = [];
			a6S.length = 0;
			if (D9F) {
				g6S.each(L6S.data, function(v9F, P9F) {
					u9F = P9F[L6S.dataText];
					A9F = P9F[L6S.dataValue];
					c9F = P9F[L6S.dataGroup];
					J9F = {
						value: A9F,
						text: u9F,
						index: v9F
					};
					i6S[A9F] = J9F;
					f6S.push(J9F);
					if (C6S) {
						if (o9F[c9F] === u6S) {
							M9F = {
								text: c9F,
								value: e9F,
								options: [],
								index: e9F
							};
							F6S[e9F] = M9F;
							o9F[c9F] = e9F;
							Y9F.push(M9F);
							e9F++;
						} else {
							M9F = F6S[o9F[c9F]];
						}
						if (p6S) {
							J9F.index = M9F.options.length;
						}
						J9F.group = o9F[c9F];
						M9F.options.push(J9F);
					}
					if (P9F[L6S.dataDisabled]) {
						a6S.push(A9F);
					}
				});
			} else {
				if (C6S) {
					g6S('optgroup', m6S).each(function(W9F) {
						F6S[W9F] = {
							text: this.label,
							value: W9F,
							options: [],
							index: W9F
						};
						Y9F.push(F6S[W9F]);
						g6S('option', this).each(function(L9F) {
							J9F = {
								value: this.value,
								text: this.text,
								index: p6S ? L9F : g9F++,
								group: W9F
							};
							i6S[this.value] = J9F;
							f6S.push(J9F);
							F6S[W9F].options.push(J9F);
							if (this.disabled) {
								a6S.push(this.value);
							}
						});
					});
				} else {
					g6S('option', m6S).each(function(l9F) {
						J9F = {
							value: this.value,
							text: this.text,
							index: l9F
						};
						i6S[this.value] = J9F;
						f6S.push(J9F);
						if (this.disabled) {
							a6S.push(this.value);
						}
					});
				}
			}
			if (f6S.length) {
				K9F = f6S[0].value;
			}
			if (Z9F) {
				f6S = [];
				g9F = 0;
				g6S.each(F6S, function(T9F, m9F) {
					A9F = '__group' + T9F;
					J9F = {
						text: m9F.text,
						value: A9F,
						group: T9F,
						index: g9F++,
						cssClass: 'mbsc-sel-gr'
					};
					i6S[A9F] = J9F;
					f6S.push(J9F);
					a6S.push(J9F.value);
					g6S.each(m9F.options, function(X9F, i9F) {
						i9F.index = g9F++;
						f6S.push(i9F);
					});
				});
			}
		}
		function k9F(f9F, r9F, F9F) {
			var R9F, H9F = [];
			for (R9F = 0; R9F < f9F.length; R9F++) {
				H9F.push({
					value: f9F[R9F].value,
					display: f9F[R9F].text,
					cssClass: f9F[R9F].cssClass
				});
			}
			return {
				circular: false,
				multiple: r9F,
				data: H9F,
				label: F9F
			};
		}
		function U9F() {
			return k9F(Y9F, false, L6S.groupLabel);
		}
		function h9F() {
			return k9F(p6S ? F6S[H6S].options : f6S, E6S, n9F);
		}
		function G9F() {
			var O9F, B9F, E9F = [
				[]
			];
			if (r6S) {
				O9F = U9F();
				if (Q9F) {
					E9F[0][R6S] = O9F;
				} else {
					E9F[R6S] = [O9F];
				}
			}
			B9F = h9F();
			if (Q9F) {
				E9F[0][T6S] = B9F;
			} else {
				E9F[T6S] = [B9F];
			}
			return E9F;
		}
		function x9F(a9F) {
			if (E6S) {
				if (a9F && v6S(a9F)) {
					a9F = a9F.split(',');
				}
				if (g6S.isArray(a9F)) {
					a9F = a9F[0];
				}
			}
			X6S = a9F === u6S || a9F === null || a9F === '' || !i6S[a9F] ? K9F : a9F;
			if (r6S) {
				H6S = i6S[X6S] ? i6S[X6S].group : null;
			}
		}
		function y9F(z9F, C9F) {
			var p9F = z9F ? l6S._tempWheelArray : l6S._hasValue ? l6S._wheelArray : null;
			return p9F ? L6S.group && C9F ? p9F : p9F[T6S] : null;
		}
		function b9F(Y7F) {
			var d9F, s9F, x7F = [];
			if (E6S) {
				for (d9F in l6S._tempSelected[T6S]) {
					x7F.push(i6S[d9F] ? i6S[d9F].text : '');
				}
				return x7F.join(', ');
			}
			s9F = Y7F[T6S];
			return i6S[s9F] ? i6S[s9F].text : '';
		}
		function t9F() {
			var D7F = l6S.getVal(),
				S7F = l6S._tempValue;
			O6S.val(S7F);
			m6S.val(D7F);
		}
		function N9F() {
			var Q7F = {};
			Q7F[T6S] = h9F();
			s6S = true;
			l6S.changeWheel(Q7F);
		}
		l6S.setVal = function(j7F, w7F, n7F, h7F, Z7F) {
			if (E6S) {
				if (j7F && v6S(j7F)) {
					j7F = j7F.split(',');
				}
				l6S._tempSelected[T6S] = o6S.arrayToObject(j7F);
				if (!h7F) {
					l6S._selected[T6S] = o6S.arrayToObject(j7F);
				}
				j7F = j7F ? j7F[0] : null;
			}
			l6S._setVal(j7F, w7F, n7F, h7F, Z7F);
		};
		l6S.getVal = function(q7F, K7F) {
			if (E6S) {
				return o6S.objectToArray(q7F ? l6S._tempSelected[T6S] : l6S._selected[T6S]);
			}
			return y9F(q7F, K7F);
		};
		l6S.refresh = function() {
			var V7F = {};
			V9F();
			L6S.wheels = G9F();
			x9F(X6S);
			V7F[T6S] = h9F();
			l6S._tempWheelArray[T6S] = X6S;
			if (r6S) {
				V7F[R6S] = U9F();
				l6S._tempWheelArray[R6S] = H6S;
			}
			if (l6S._isVisible) {
				l6S.changeWheel(V7F, 0, true);
			}
		};
		if (!L6S.invalid.length) {
			L6S.invalid = a6S;
		}
		if (r6S) {
			R6S = 0;
			T6S = 1;
		} else {
			R6S = -1;
			T6S = 0;
		}
		if (E6S) {
			m6S.prop('multiple', true);
			l6S._selected[T6S] = {};
			if (z6S && v6S(z6S)) {
				z6S = z6S.split(',');
			}
			l6S._selected[T6S] = o6S.arrayToObject(z6S);
		}
		g6S('#' + d6S).remove();
		if (m6S.next().is('input.mbsc-control')) {
			O6S = m6S.off('.mbsc-form').next().removeAttr('tabindex');
		} else {
			O6S = g6S('<input type="text" id="' + d6S + '" class="mbsc-control mbsc-control-ev ' + L6S.inputClass + '" readonly />');
			if (L6S.showInput) {
				O6S.insertBefore(m6S);
			}
		}
		l6S.attachShow(O6S.attr('placeholder', L6S.placeholder || ''));
		m6S.addClass('mbsc-sel-hdn').attr('tabindex', -1);
		V9F();
		x9F(m6S.val());
		return {
			layout: w9F,
			headerText: false,
			anchor: O6S,
			compClass: 'mbsc-sel' + (r6S ? ' mbsc-sel-gr-whl' : '') + (E6S ? ' mbsc-sel-multi' : ''),
			setOnTap: r6S ? [false, true] : true,
			formatValue: b9F,
			parseValue: function(k7F) {
				x9F(k7F === u6S ? m6S.val() : k7F);
				return r6S ? [H6S, X6S] : [X6S];
			},
			validate: function(G7F) {
				var I7F = G7F.index,
					U7F = [];
				U7F[T6S] = L6S.invalid;
				if (p6S && !s6S && I7F === u6S) {
					N9F();
				}
				s6S = false;
				return {
					disabled: U7F
				};
			},
			onRead: t9F,
			onFill: t9F,
			onBeforeShow: function() {
				if (E6S && L6S.counter) {
					L6S.headerText = function() {
						var N7F = 0;
						g6S.each(l6S._tempSelected[T6S], function() {
							N7F++;
						});
						return (N7F > 1 ? L6S.selectedPluralText || L6S.selectedText : L6S.selectedText).replace(/{count}/, N7F);
					};
				}
				x9F(m6S.val());
				l6S.settings.wheels = G9F();
				s6S = true;
			},
			onWheelGestureStart: function(t7F) {
				if (t7F.index == R6S) {
					L6S.readonly = [false, true];
				}
			},
			onWheelAnimationEnd: function(y7F) {
				var b7F = l6S.getArrayVal(true);
				if (y7F.index == R6S) {
					L6S.readonly = I9F;
					if (b7F[R6S] != H6S) {
						H6S = b7F[R6S];
						X6S = F6S[H6S].options[0].value;
						b7F[T6S] = X6S;
						if (p6S) {
							N9F();
						} else {
							l6S.setArrayVal(b7F, false, false, true, j9F);
						}
					}
				} else if (y7F.index == T6S && b7F[T6S] != X6S) {
					X6S = b7F[T6S];
					if (r6S && i6S[X6S].group != H6S) {
						H6S = i6S[X6S].group;
						b7F[R6S] = H6S;
						l6S.setArrayVal(b7F, false, false, true, j9F);
					}
				}
			},
			onDestroy: function() {
				if (!O6S.hasClass('mbsc-control')) {
					O6S.remove();
				}
				m6S.removeClass('mbsc-sel-hdn').removeAttr('tabindex');
			}
		};
	};
}());
(function(M7F) {
	var c7F = function() {},
		J7F = mobiscroll,
		A7F = J7F.$;
	J7F.util.addIcon = function(o7F, v7F) {
		var e7F = {},
			u7F = o7F.parent(),
			P7F = u7F.find('.mbsc-err-msg'),
			W7F = o7F.attr('data-icon-align') || 'left',
			g7F = o7F.attr('data-icon');
		A7F('<span class="mbsc-input-wrap"></span>').insertAfter(o7F).append(o7F);
		if (P7F) {
			u7F.find('.mbsc-input-wrap').append(P7F);
		}
		if (g7F) {
			if (g7F.indexOf('{') !== -1) {
				e7F = JSON.parse(g7F);
			} else {
				e7F[W7F] = g7F;
			}
		}
		if (g7F || v7F) {
			A7F.extend(e7F, v7F);
			u7F.addClass((e7F.right ? 'mbsc-ic-right ' : '') + (e7F.left ? ' mbsc-ic-left' : '')).find('.mbsc-input-wrap').append(e7F.left ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' + e7F.left + '"></span>' : '').append(e7F.right ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' + e7F.right + '"></span>' : '');
		}
	};
	J7F.classes.Progress = function(p7F, d7F, s7F) {
		var r7F, l7F, m7F, z7F, O7F, B7F, f7F, i7F, R7F, T7F, a7F, X7F, E7F, L7F = this;
		function C7F() {
			var x5F = H7F('value', i7F);
			if (x5F !== X7F) {
				F7F(x5F);
			}
		}
		function H7F(D5F, S5F) {
			var Y5F = l7F.attr(D5F);
			return Y5F === M7F || Y5F === '' ? S5F : +Y5F;
		}
		function F7F(Q5F, w5F, j5F, h5F) {
			Q5F = Math.min(R7F, Math.max(Q5F, i7F));
			z7F.css('width', (Q5F - i7F) * 100 / (R7F - i7F) + '%');
			if (j5F === M7F) {
				j5F = true;
			}
			if (h5F === M7F) {
				h5F = j5F;
			}
			if (Q5F !== X7F || w5F) {
				L7F._display(Q5F);
			}
			if (Q5F !== X7F) {
				X7F = Q5F;
				if (j5F) {
					l7F.attr('value', X7F);
				}
				if (h5F) {
					l7F.trigger('change');
				}
			}
		}
		J7F.classes.Base.call(this, p7F, d7F, true);
		L7F._onInit = c7F;
		L7F._onDestroy = c7F;
		L7F._display = function(n5F) {
			E7F = a7F && T7F.returnAffix ? a7F.replace(/\{value\}/, n5F).replace(/\{max\}/, R7F) : n5F;
			if (O7F) {
				O7F.html(E7F);
			}
			if (r7F) {
				r7F.html(E7F);
			}
		};
		L7F._attachChange = function() {
			l7F.on('change', C7F);
		};
		L7F._init = function(q5F) {
			var K5F, V5F, Z5F, k5F;
			T7F = L7F.settings;
			l7F = A7F(p7F);
			k5F = l7F.parent().hasClass('mbsc-input-wrap');
			m7F = L7F._$parent = k5F ? m7F : l7F.parent();
			i7F = L7F._min = q5F.min === M7F ? H7F('min', T7F.min) : q5F.min;
			R7F = L7F._max = q5F.max === M7F ? H7F('max', T7F.max) : q5F.max;
			X7F = H7F('value', i7F);
			K5F = l7F.attr('data-val') || T7F.val;
			Z5F = l7F.attr('data-step-labels');
			Z5F = Z5F ? JSON.parse(Z5F) : T7F.stepLabels;
			a7F = l7F.attr('data-template') || (R7F == 100 && !T7F.template ? '{value}%' : T7F.template);
			if (!k5F) {
				if (L7F._wrap) {
					J7F.util.addIcon(l7F);
				}
				m7F.find('.mbsc-input-wrap').append('<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>');
				z7F = L7F._$progress = m7F.find('.mbsc-progress-bar');
				B7F = L7F._$track = m7F.find('.mbsc-progress-track');
			} else {
				if (K5F) {
					r7F.remove();
					m7F.removeClass('mbsc-progress-value-' + (K5F == 'right' ? 'right' : 'left'));
				}
				if (Z5F) {
					A7F('.mbsc-progress-step-label', B7F).remove();
				}
			}
			if (f7F) {
				m7F.removeClass(f7F);
			}
			f7F = L7F._css + ' mbsc-progress-w mbsc-control-w mbsc-' + T7F.theme + (T7F.baseTheme ? ' mbsc-' + T7F.baseTheme : '') + (T7F.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
			m7F.addClass(f7F);
			l7F.attr('min', i7F).attr('max', R7F);
			if (K5F) {
				r7F = A7F('<span class="mbsc-progress-value"></span>');
				m7F.addClass('mbsc-progress-value-' + (K5F == 'right' ? 'right' : 'left')).find('.mbsc-input-wrap').append(r7F);
			}
			if (Z5F) {
				for (V5F = 0; V5F < Z5F.length; ++V5F) {
					B7F.append('<span class="mbsc-progress-step-label" style="' + (T7F.rtl ? 'right' : 'left') + ': ' + (Z5F[V5F] - i7F) * 100 / (R7F - i7F) + '%" >' + Z5F[V5F] + '</span>');
				}
			}
			O7F = A7F(l7F.attr('data-target') || T7F.target);
			L7F._onInit(q5F);
			if (!k5F) {
				L7F._attachChange();
			}
			L7F.refresh();
		};
		L7F._destroy = function() {
			L7F._onDestroy();
			m7F.find('.mbsc-progress-cont').remove();
			m7F.removeClass(f7F).find('.mbsc-input-wrap').before(l7F).remove();
			l7F.removeClass('mbsc-control').off('change', C7F);
		};
		L7F.refresh = function() {
			F7F(H7F('value', i7F), true, false);
		};
		L7F.getVal = function() {
			return X7F;
		};
		L7F.setVal = function(U5F, I5F, G5F) {
			F7F(U5F, true, I5F, G5F);
		};
		if (!s7F) {
			L7F.init(d7F);
		}
	};
	J7F.classes.Progress.prototype = {
		_class: 'progress',
		_css: 'mbsc-progress',
		_hasTheme: true,
		_hasLang: true,
		_wrap: true,
		_defaults: {
			min: 0,
			max: 100,
			returnAffix: true
		}
	};
	J7F.presetShort('progress', 'Progress');
}());
(function(J5F) {
	var A5F = function() {},
		t5F = mobiscroll,
		N5F = t5F.$,
		y5F = t5F.util,
		b5F = y5F.getCoord,
		M5F = y5F.testTouch;
	t5F.classes.Slider = function(s5F, c3F, e3F) {
		var g5F, Q3F, E5F, m5F, n3F, v5F, r5F, J3F, l5F, f5F, Z3F, K3F, U3F, Y3F, F5F, A3F, T5F, B5F, O5F, w3F, X5F, I3F, L5F, o5F, H5F, i5F, u5F, P5F, d5F, x3F, V3F, D3F, p5F, S3F, e5F, c5F = this,
			h3F = new Date();
		function k3F(g3F) {
			if (M5F(g3F, this) && !f5F && !s5F.disabled) {
				if (P5F.stopProp) {
					g3F.stopPropagation();
				}
				f5F = true;
				H5F = false;
				Z3F = false;
				x3F = b5F(g3F, 'X');
				V3F = b5F(g3F, 'Y');
				F5F = x3F;
				l5F.removeClass('mbsc-progress-anim');
				Q3F = i5F ? N5F('.mbsc-slider-handle', this) : m5F;
				if (E5F) {
					E5F.removeClass('mbsc-handle-curr');
				}
				E5F = Q3F.parent().addClass('mbsc-active mbsc-handle-curr');
				T5F = +Q3F.attr('data-index');
				S3F = l5F[0].offsetWidth;
				Y3F = l5F[0].getBoundingClientRect().left;
				if (g3F.type === 'mousedown') {
					g3F.preventDefault();
					N5F(document).on('mousemove', z5F).on('mouseup', C5F);
				}
			}
		}
		function z5F(o3F) {
			if (f5F) {
				F5F = b5F(o3F, 'X');
				A3F = b5F(o3F, 'Y');
				K3F = F5F - x3F;
				U3F = A3F - V3F;
				if (Math.abs(K3F) > 5 || H5F) {
					H5F = true;
					if (Math.abs(h3F - new Date()) > 50) {
						h3F = new Date();
						M3F(F5F, P5F.round, I3F);
					}
				}
				if (H5F) {
					o3F.preventDefault();
				} else if (Math.abs(U3F) > 7) {
					q3F(o3F);
				}
			}
		}
		function C5F(u3F) {
			if (f5F) {
				u3F.preventDefault();
				if (!i5F) {
					l5F.addClass('mbsc-progress-anim');
				}
				M3F(F5F, true, true);
				if (!H5F && !Z3F) {
					y5F.preventClick();
					c5F._onTap(e5F[T5F]);
				}
				q3F();
			}
		}
		function G3F() {
			if (f5F) {
				q3F();
			}
		}
		function N3F() {
			var P3F = c5F._readValue(N5F(this)),
				v3F = +N5F(this).attr('data-index');
			if (P3F !== e5F[v3F]) {
				e5F[v3F] = P3F;
				R5F(P3F, v3F);
			}
		}
		function t3F(W3F) {
			W3F.stopPropagation();
		}
		function b3F(L3F) {
			L3F.preventDefault();
		}
		function y3F(T3F) {
			var l3F;
			if (!s5F.disabled) {
				switch (T3F.keyCode) {
					case 38:
					case 39:
						l3F = 1;
						break;
					case 40:
					case 37:
						l3F = -1;
						break;
				}
				if (l3F) {
					T3F.preventDefault();
					if (!p5F) {
						T5F = +N5F(this).attr('data-index');
						R5F(e5F[T5F] + u5F * l3F, T5F, true);
						p5F = setInterval(function() {
							R5F(e5F[T5F] + u5F * l3F, T5F, true);
						}, 200);
					}
				}
			}
		}
		function a5F(m3F) {
			m3F.preventDefault();
			clearInterval(p5F);
			p5F = null;
		}
		function q3F() {
			f5F = false;
			E5F.removeClass('mbsc-active');
			N5F(document).off('mousemove', z5F).off('mouseup', C5F);
		}
		function M3F(X3F, R3F, f3F) {
			var i3F = R3F ? Math.min(Math.round(Math.max((X3F - Y3F) * 100 / S3F, 0) / d5F / u5F) * u5F * 100 / (L5F - o5F), 100) : Math.max(0, Math.min((X3F - Y3F) * 100 / S3F, 100));
			if (X5F) {
				i3F = 100 - i3F;
			}
			R5F(Math.round((o5F + i3F / d5F) * D3F) / D3F, T5F, f3F, i3F);
		}
		function W5F(H3F) {
			return (H3F - o5F) * 100 / (L5F - o5F);
		}
		function j3F(F3F, E3F) {
			var r3F = g5F.attr(F3F);
			return r3F === J5F || r3F === '' ? E3F : r3F === 'true';
		}
		function R5F(O3F, B3F, d3F, p3F, s3F, z3F) {
			var C3F = m5F.eq(B3F),
				a3F = C3F.parent();
			O3F = Math.min(L5F, Math.max(O3F, o5F));
			if (z3F === J5F) {
				z3F = d3F;
			}
			if (w3F) {
				if (B3F === 0) {
					O3F = Math.min(O3F, e5F[1]);
					r5F.css({
						width: W5F(e5F[1]) - W5F(O3F) + '%',
						left: X5F ? 'auto' : W5F(O3F) + '%',
						right: X5F ? W5F(O3F) + '%' : 'auto'
					});
				} else {
					O3F = Math.max(O3F, e5F[0]);
					r5F.css({
						width: W5F(O3F) - W5F(e5F[0]) + '%'
					});
				}
			} else if (i5F || !B5F) {
				a3F.css({
					left: X5F ? 'auto' : (p3F || W5F(O3F)) + '%',
					right: X5F ? (p3F || W5F(O3F)) + '%' : 'auto'
				});
			} else {
				r5F.css('width', (p3F || W5F(O3F)) + '%');
			}
			if (O5F) {
				J3F.eq(B3F).html(O3F);
			}
			if (O3F > o5F) {
				a3F.removeClass('mbsc-slider-start');
			} else if (e5F[B3F] > o5F || s3F) {
				a3F.addClass('mbsc-slider-start');
			}
			if (!i5F && (e5F[B3F] != O3F || s3F)) {
				c5F._display(O3F);
			}
			if (d3F && e5F[B3F] != O3F) {
				Z3F = true;
				e5F[B3F] = O3F;
				c5F._fillValue(O3F, B3F, z3F);
			}
			C3F.attr('aria-valuenow', O3F);
		}
		t5F.classes.Progress.call(this, s5F, c3F, true);
		c5F._onTap = A5F;
		c5F.__onInit = A5F;
		c5F._readValue = function(x4F) {
			return +x4F.val();
		};
		c5F._fillValue = function(D4F, Y4F, S4F) {
			g5F.eq(Y4F).val(D4F);
			if (S4F) {
				g5F.eq(Y4F).trigger('change');
			}
		};
		c5F._attachChange = function() {
			g5F.on(P5F.changeEvent, N3F);
		};
		c5F._onInit = function(h4F) {
			var Q4F, j4F, w4F;
			if (v5F) {
				v5F.removeClass('mbsc-slider-has-tooltip');
				if (u5F != 1) {
					N5F('.mbsc-slider-step', l5F).remove();
				}
			}
			c5F.__onInit();
			v5F = c5F._$parent;
			l5F = c5F._$track;
			r5F = c5F._$progress;
			g5F = v5F.find('input');
			P5F = c5F.settings;
			o5F = c5F._min;
			L5F = c5F._max;
			u5F = h4F.step === J5F ? +g5F.attr('step') || P5F.step : h4F.step;
			I3F = j3F('data-live', P5F.live);
			O5F = j3F('data-tooltip', P5F.tooltip);
			B5F = j3F('data-highlight', P5F.highlight) && g5F.length < 3;
			D3F = u5F % 1 !== 0 ? 100 / (+(u5F % 1).toFixed(2) * 100) : 1;
			d5F = 100 / (L5F - o5F) || 100;
			i5F = g5F.length > 1;
			w3F = B5F && g5F.length == 2;
			X5F = P5F.rtl;
			e5F = [];
			if (O5F) {
				v5F.addClass('mbsc-slider-has-tooltip');
			}
			if (u5F != 1) {
				j4F = (L5F - o5F) / u5F;
				for (Q4F = 0; Q4F <= j4F; ++Q4F) {
					l5F.append('<span class="mbsc-slider-step" style="' + (X5F ? 'right' : 'left') + ':' + 100 / j4F * Q4F + '%"></span>');
				}
			}
			if (m5F) {
				w4F = true;
				m5F.parent().remove();
			}
			g5F.each(function(n4F) {
				e5F[n4F] = c5F._readValue(N5F(this));
				N5F(this).attr('data-index', n4F);
				if (this.type == 'range') {
					N5F(this).attr('min', o5F).attr('max', L5F).attr('step', u5F);
				}
				if (P5F.handle) {
					(B5F ? r5F : l5F).append('<span class="mbsc-slider-handle-cont' + (w3F && !n4F ? ' mbsc-slider-handle-left' : '') + '">' + '<span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' + o5F + '" aria-valuemax="' + L5F + '" data-index="' + n4F + '"></span>' + (O5F ? '<span class="mbsc-slider-tooltip"></span>' : '') + '</span>');
				}
			});
			m5F = v5F.find('.mbsc-slider-handle');
			J3F = v5F.find('.mbsc-slider-tooltip');
			n3F = v5F.find(i5F ? '.mbsc-slider-handle-cont' : '.mbsc-progress-cont');
			m5F.on('keydown', y3F).on('keyup', a5F).on('blur', a5F);
			n3F.on('touchstart mousedown', k3F).on('touchmove', z5F).on('touchend touchcancel', C5F).on('pointercancel', G3F);
			if (!w4F) {
				g5F.on('click', t3F);
				v5F.on('click', b3F);
			}
		};
		c5F._onDestroy = function() {
			v5F.off('click', b3F);
			g5F.off(P5F.changeEvent, N3F).off('click', t3F);
			m5F.off('keydown', y3F).off('keyup', a5F).off('blur', a5F);
			n3F.off('touchstart mousedown', k3F).off('touchmove', z5F).off('touchend', C5F).off('touchcancel pointercancel', G3F);
		};
		c5F.refresh = function() {
			g5F.each(function(Z4F) {
				R5F(c5F._readValue(N5F(this)), Z4F, true, false, true, false);
			});
		};
		c5F.getVal = function() {
			return i5F ? e5F.slice(0) : e5F[0];
		};
		c5F.setVal = c5F._setVal = function(q4F, V4F, K4F) {
			if (!N5F.isArray(q4F)) {
				q4F = [q4F];
			}
			N5F.each(q4F, function(k4F, U4F) {
				R5F(U4F, k4F, true, false, true, K4F);
			});
		};
		if (!e3F) {
			c5F.init(c3F);
		}
	};
	t5F.classes.Slider.prototype = {
		_class: 'progress',
		_css: 'mbsc-progress mbsc-slider',
		_hasTheme: true,
		_hasLang: true,
		_wrap: true,
		_defaults: {
			changeEvent: 'change',
			stopProp: true,
			min: 0,
			max: 100,
			step: 1,
			live: true,
			highlight: true,
			handle: true,
			round: true,
			returnAffix: true
		}
	};
	t5F.presetShort('slider', 'Slider');
}());
(function(t4F) {
	var y4F, J4F = function() {},
		G4F = mobiscroll,
		I4F = G4F.$,
		b4F = G4F.util,
		N4F = b4F.getCoord,
		A4F = b4F.testTouch;
	G4F.classes.Form = function(L4F, l4F) {
		var M4F, P4F, u4F, g4F = '',
			c4F = I4F(L4F),
			e4F = this;
		function v4F(i4F) {
			var H4F = {},
				X4F = i4F[0],
				F4F = i4F.parent(),
				r4F = i4F.attr('data-password-toggle'),
				R4F = i4F.attr('data-icon-show') || 'eye',
				f4F = i4F.attr('data-icon-hide') || 'eye-blocked';
			if (r4F) {
				H4F.right = X4F.type == 'password' ? R4F : f4F;
			}
			b4F.addIcon(i4F, H4F);
			if (r4F) {
				e4F.tap(F4F.find('.mbsc-right-ic'), function() {
					if (X4F.type == "text") {
						X4F.type = "password";
						I4F(this).addClass('mbsc-ic-' + R4F).removeClass('mbsc-ic-' + f4F);
					} else {
						X4F.type = "text";
						I4F(this).removeClass('mbsc-ic-' + R4F).addClass('mbsc-ic-' + f4F);
					}
				});
			}
		}
		function m4F() {
			var E4F = this;
			if (!I4F(E4F).hasClass('mbsc-textarea-scroll')) {
				var O4F = E4F.scrollHeight - E4F.offsetHeight,
					B4F = E4F.offsetHeight + O4F;
				E4F.scrollTop = 0;
				E4F.style.height = B4F + 'px';
			}
		}
		function T4F(a4F) {
			var p4F, z4F, C4F, d4F = I4F(a4F).attr('rows') || 6;
			if (a4F.offsetHeight) {
				a4F.style.height = '';
				C4F = a4F.scrollHeight - a4F.offsetHeight;
				p4F = a4F.offsetHeight + (C4F > 0 ? C4F : 0);
				z4F = Math.round(p4F / 24);
				if (z4F > d4F) {
					a4F.scrollTop = p4F;
					p4F = 24 * d4F + (p4F - z4F * 24);
					I4F(a4F).addClass('mbsc-textarea-scroll');
				} else {
					I4F(a4F).removeClass('mbsc-textarea-scroll');
				}
				if (p4F) {
					a4F.style.height = p4F + 'px';
				}
			}
		}
		function W4F() {
			clearTimeout(P4F);
			P4F = setTimeout(function() {
				I4F('textarea.mbsc-control', c4F).each(function() {
					T4F(this);
				});
			}, 100);
		}
		function o4F(s4F) {
			return !!(s4F.id && G4F.instances[s4F.id]);
		}
		G4F.classes.Base.call(this, L4F, l4F, true);
		e4F.refresh = function(x1F) {
			I4F('input,select,textarea,progress,button', c4F).each(function() {
				function U1F() {
					I4F('input', S1F).val(D1F.selectedIndex != -1 ? D1F.options[D1F.selectedIndex].text : '');
				}
				var w1F, n1F, Z1F, j1F, k1F, V1F, D1F = this,
					Y1F = I4F(D1F),
					S1F = Y1F.parent(),
					q1F = Y1F.attr('data-role'),
					Q1F = Y1F.attr('type') || D1F.nodeName.toLowerCase();
				if (Y1F.attr('data-enhance') != 'false' && mobiscroll.KvAPo) {
					if (/(switch|range|segmented|stepper)/.test(q1F)) {
						Q1F = q1F;
					}
					if (Y1F.hasClass('mbsc-control')) {
						if (/(switch|range|progress)/.test(Q1F) && o4F(D1F) && !x1F) {
							G4F.instances[D1F.id].option({
								theme: M4F.theme,
								lang: M4F.lang,
								rtl: M4F.rtl,
								onText: M4F.onText,
								offText: M4F.offText,
								stopProp: M4F.stopProp
							});
						}
					} else {
						if (Y1F.next().hasClass('mbsc-fr')) {
							w1F = Y1F.next();
						}
						if (Q1F != 'button' && Q1F != 'submit' && Q1F != 'segmented') {
							S1F.find('label').addClass('mbsc-label');
							S1F.contents().filter(function() {
								return this.nodeType == 3 && this.nodeValue && /\S/.test(this.nodeValue);
							}).each(function() {
								I4F('<span class="mbsc-label"></span>').insertAfter(this).append(this);
							});
						}
						switch (Q1F) {
							case 'button':
							case 'submit':
								Z1F = Y1F.attr('data-icon');
								Y1F.addClass('mbsc-btn');
								if (Z1F) {
									Y1F.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + Z1F + '"></span>');
									if (Y1F.text() === "") {
										Y1F.addClass('mbsc-btn-icon-only');
									}
								}
								break;
							case 'switch':
								if (!o4F(D1F)) {
									new G4F.classes.Switch(D1F, {
										theme: M4F.theme,
										lang: M4F.lang,
										rtl: M4F.rtl,
										onText: M4F.onText,
										offText: M4F.offText,
										stopProp: M4F.stopProp
									});
								}
								break;
							case 'checkbox':
								S1F.prepend(Y1F).addClass('mbsc-checkbox mbsc-control-w');
								Y1F.after('<span class="mbsc-checkbox-box"></span>');
								break;
							case 'range':
								if (!S1F.hasClass('mbsc-slider') && !o4F(D1F)) {
									new G4F.classes.Slider(D1F, {
										theme: M4F.theme,
										lang: M4F.lang,
										rtl: M4F.rtl,
										stopProp: M4F.stopProp
									});
								}
								break;
							case 'progress':
								if (!o4F(D1F)) {
									new G4F.classes.Progress(D1F, {
										theme: M4F.theme,
										lang: M4F.lang,
										rtl: M4F.rtl
									});
								}
								break;
							case 'radio':
								S1F.addClass('mbsc-radio mbsc-control-w');
								Y1F.after('<span class="mbsc-radio-box"><span></span></span>');
								break;
							case 'select':
							case 'select-one':
							case 'select-multiple':
								if (Y1F.prev().is('input.mbsc-control')) {
									n1F = Y1F.prev();
								} else {
									n1F = I4F('<input tabindex="-1" type="text" class="mbsc-control mbsc-control-ev" readonly>');
								}
								v4F(Y1F);
								S1F.addClass('mbsc-input mbsc-select mbsc-control-w' + (w1F ? ' mbsc-select-inline' : ''));
								Y1F.after(n1F);
								n1F.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');
								break;
							case 'textarea':
								v4F(Y1F);
								S1F.addClass('mbsc-input mbsc-textarea mbsc-control-w');
								break;
							case 'segmented':
								var h1F, K1F;
								if (!Y1F.parent().hasClass('mbsc-segmented-item')) {
									K1F = I4F('<div class="mbsc-segmented"></div>');
									S1F.after(K1F);
									I4F('input[name="' + Y1F.attr('name') + '"]', c4F).each(function(G1F, I1F) {
										h1F = I4F(I1F).parent().addClass('mbsc-segmented-item');
										I4F('<span class="mbsc-segmented-content">' + (I4F(I1F).attr('data-icon') ? ' <span class="mbsc-ic mbsc-ic-' + I4F(I1F).attr('data-icon') + '"></span> ' : '') + '</span>').append(h1F.contents()).appendTo(h1F);
										h1F.prepend(I1F);
										K1F.append(h1F);
									});
								}
								break;
							case 'stepper':
								if (!o4F(D1F)) {
									new G4F.classes.Stepper(D1F, {
										form: e4F
									});
								}
								break;
							case 'hidden':
								return;
							default:
								v4F(Y1F);
								S1F.addClass('mbsc-input mbsc-control-w');
								break;
						}
						Y1F.addClass('mbsc-control');
						if (w1F) {
							w1F.insertAfter(S1F);
						}
					}
					if (!Y1F.hasClass('mbsc-control-ev')) {
						if (/select/.test(Q1F) && !Y1F.hasClass('mbsc-comp')) {
							Y1F.on('change.mbsc-form', U1F);
							U1F();
						}
						if (Q1F == 'textarea') {
							Y1F.on('keydown.mbsc-form input.mbsc-form', function() {
								clearTimeout(P4F);
								P4F = setTimeout(function() {
									T4F(D1F);
								}, 100);
							}).on('scroll.mbsc-form', m4F);
						}
						Y1F.addClass('mbsc-control-ev').on('touchstart.mbsc-form mousedown.mbsc-form', function(N1F) {
							if (A4F(N1F, this)) {
								k1F = N4F(N1F, 'X');
								V1F = N4F(N1F, 'Y');
								if (N1F.type == 'touchstart') {
									c4F.removeClass('mbsc-no-touch');
								}
								if (y4F) {
									y4F.removeClass('mbsc-active');
								}
								if (!D1F.disabled) {
									j1F = true;
									y4F = I4F(this);
									I4F(this).addClass('mbsc-active');
									u4F('onControlActivate', {
										target: this,
										domEvent: N1F
									});
								}
							}
						}).on('touchmove.mbsc-form mousemove.mbsc-form', function(t1F) {
							if (j1F && Math.abs(N4F(t1F, 'X') - k1F) > 9 || Math.abs(N4F(t1F, 'Y') - V1F) > 9) {
								Y1F.removeClass('mbsc-active');
								u4F('onControlDeactivate', {
									target: Y1F[0],
									domEvent: t1F
								});
								j1F = false;
							}
						}).on('touchend.mbsc-form touchcancel.mbsc-form mouseleave.mbsc-form mouseup.mbsc-form', function(b1F) {
							if (j1F && b1F.type == 'touchend' && !D1F.readOnly) {
								D1F.focus();
								if (/(button|submit|checkbox|switch|radio)/.test(Q1F)) {
									b1F.preventDefault();
								}
								if (!/select/.test(Q1F)) {
									var y1F = (b1F.originalEvent || b1F).changedTouches[0],
										J1F = document.createEvent('MouseEvents');
									J1F.initMouseEvent('click', true, true, window, 1, y1F.screenX, y1F.screenY, y1F.clientX, y1F.clientY, false, false, false, false, 0, null);
									J1F.tap = true;
									D1F.dispatchEvent(J1F);
									b4F.preventClick();
								}
							}
							if (j1F) {
								setTimeout(function() {
									Y1F.removeClass('mbsc-active');
									u4F('onControlDeactivate', {
										target: Y1F[0],
										domEvent: b1F
									});
								}, 100);
							}
							j1F = false;
							y4F = null;
						});
					}
				}
			});
			if (!x1F) {
				W4F();
			}
		};
		e4F._init = function() {
			if (!G4F.themes.form[M4F.theme]) {
				M4F.theme = 'mobiscroll';
			}
			if (!c4F.hasClass('mbsc-form')) {
				c4F.on('touchstart', J4F).show();
				I4F(window).on('resize orientationchange', W4F);
			}
			if (g4F) {
				c4F.removeClass(g4F);
			}
			g4F = 'mbsc-form mbsc-no-touch mbsc-' + M4F.theme + (M4F.baseTheme ? ' mbsc-' + M4F.baseTheme : '') + (M4F.rtl ? ' mbsc-rtl' : ' mbsc-ltr');
			c4F.addClass(g4F);
			e4F.refresh();
		};
		e4F._destroy = function() {
			c4F.removeClass(g4F).off('touchstart', J4F);
			I4F(window).off('resize orientationchange', W4F);
			I4F('.mbsc-control', c4F).off('.mbsc-form').removeClass('mbsc-control-ev');
			I4F('.mbsc-progress progress', c4F).mobiscroll('destroy');
			I4F('.mbsc-slider input', c4F).mobiscroll('destroy');
			I4F('.mbsc-stepper input', c4F).mobiscroll('destroy');
			I4F('.mbsc-switch input', c4F).mobiscroll('destroy');
		};
		M4F = e4F.settings;
		u4F = e4F.trigger;
		e4F.init(l4F);
	};
	G4F.classes.Form.prototype = {
		_hasDef: true,
		_hasTheme: true,
		_hasLang: true,
		_class: 'form',
		_defaults: {
			tap: true,
			stopProp: true,
			lang: 'en'
		}
	};
	G4F.themes.form.mobiscroll = {};
	G4F.presetShort('form', 'Form');
	G4F.classes.Stepper = function(v1F, r1F) {
		var W1F, H1F, O1F, B1F, o1F, X1F, h0F, C1F, E1F, D0F, Q0F, L1F, e1F, g1F, c1F, T1F, Y0F, z1F, A1F, u1F = this,
			M1F = I4F(v1F),
			i1F, P1F, F1F = A1F,
			l1F = r1F.form;
		function d1F(w0F) {
			if (w0F.keyCode == 32) {
				w0F.preventDefault();
				if (!o1F && !v1F.disabled) {
					W1F = I4F(this).addClass('mbsc-active');
					j0F(w0F);
				}
			}
		}
		function s1F(n0F) {
			if (o1F) {
				n0F.preventDefault();
				p1F(true);
			}
		}
		function x0F(Z0F) {
			if (A4F(Z0F, this) && !v1F.disabled) {
				W1F = I4F(this).addClass('mbsc-active').trigger('focus');
				if (l1F) {
					l1F.trigger('onControlActivate', {
						target: W1F[0],
						domEvent: Z0F
					});
				}
				j0F(Z0F);
				if (Z0F.type === 'mousedown') {
					I4F(document).on('mousemove', f1F).on('mouseup', R1F);
				}
			}
		}
		function R1F(q0F) {
			if (o1F) {
				q0F.preventDefault();
				p1F(true, q0F);
				if (q0F.type === 'mouseup') {
					I4F(document).off('mousemove', f1F).off('mouseup', R1F);
				}
			}
		}
		function f1F(K0F) {
			if (o1F) {
				D0F = N4F(K0F, 'X');
				Q0F = N4F(K0F, 'Y');
				h0F = D0F - Y0F;
				C1F = Q0F - z1F;
				if (Math.abs(h0F) > 7 || Math.abs(C1F) > 7) {
					p1F();
				}
			}
		}
		function S0F() {
			var V0F;
			if (!v1F.disabled) {
				V0F = parseFloat(I4F(this).val());
				m1F(isNaN(V0F) ? A1F : V0F);
			}
		}
		function m1F(I0F, k0F, U0F) {
			F1F = A1F;
			if (k0F === t4F) {
				k0F = true;
			}
			if (U0F === t4F) {
				U0F = k0F;
			}
			if (I0F !== t4F) {
				A1F = Math.min(e1F, Math.max(Math.round(I0F / c1F) * c1F, g1F));
			} else {
				A1F = Math.min(e1F, Math.max(A1F + (W1F.hasClass('mbsc-stepper-minus') ? -c1F : c1F), g1F));
			}
			X1F = true;
			B1F.removeClass('mbsc-step-disabled');
			if (k0F) {
				M1F.val(A1F);
			}
			if (A1F == g1F) {
				O1F.addClass('mbsc-step-disabled');
			} else if (A1F == e1F) {
				H1F.addClass('mbsc-step-disabled');
			}
			if (A1F !== F1F && U0F) {
				M1F.trigger('change');
			}
		}
		function j0F(G0F) {
			if (!o1F) {
				o1F = true;
				X1F = false;
				Y0F = N4F(G0F, 'X');
				z1F = N4F(G0F, 'Y');
				clearInterval(L1F);
				clearTimeout(L1F);
				L1F = setTimeout(function() {
					m1F();
					L1F = setInterval(function() {
						m1F();
					}, 150);
				}, 300);
			}
		}
		function p1F(N0F, t0F) {
			clearInterval(L1F);
			clearTimeout(L1F);
			if (!X1F && N0F) {
				m1F();
			}
			o1F = false;
			X1F = false;
			W1F.removeClass('mbsc-active');
			if (l1F) {
				setTimeout(function() {
					l1F.trigger('onControlDeactivate', {
						target: W1F[0],
						domEvent: t0F
					});
				}, 100);
			}
		}
		function a1F(y0F, J0F) {
			var b0F = M1F.attr(y0F);
			return b0F === t4F || b0F === '' ? J0F : +b0F;
		}
		G4F.classes.Base.call(this, v1F, r1F, true);
		u1F.getVal = function() {
			var A0F = parseFloat(M1F.val());
			A0F = isNaN(A0F) ? A1F : A0F;
			return Math.min(e1F, Math.max(Math.round(A0F / c1F) * c1F, g1F));
		};
		u1F.setVal = function(M0F, c0F, e0F) {
			M0F = parseFloat(M0F);
			m1F(isNaN(M0F) ? A1F : M0F, c0F, e0F);
		};
		u1F._init = function(g0F) {
			i1F = M1F.parent().hasClass('mbsc-stepper');
			P1F = i1F ? M1F.closest('.mbsc-stepper-cont') : M1F.parent();
			T1F = u1F.settings;
			g1F = g0F.min === t4F ? a1F('min', T1F.min) : g0F.min;
			e1F = g0F.max === t4F ? a1F('max', T1F.max) : g0F.max;
			c1F = g0F.step === t4F ? a1F('step', T1F.step) : g0F.step;
			E1F = M1F.attr('data-val') || T1F.val;
			A1F = Math.min(e1F, Math.max(Math.round(+v1F.value / c1F) * c1F || 0, g1F));
			if (!i1F) {
				P1F.addClass('mbsc-stepper-cont mbsc-control-w').append('<span class="mbsc-segmented mbsc-stepper"></span>').find('.mbsc-stepper').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' + (A1F == g1F ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>').append('<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' + (A1F == e1F ? 'mbsc-step-disabled' : '') + '"  tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span> </span></span>').prepend(M1F);
			}
			O1F = I4F('.mbsc-stepper-minus', P1F);
			H1F = I4F('.mbsc-stepper-plus', P1F);
			if (!i1F) {
				if (E1F == 'left') {
					P1F.addClass('mbsc-stepper-val-left');
					M1F.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
				} else if (E1F == 'right') {
					P1F.addClass('mbsc-stepper-val-right');
					H1F.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>');
				} else {
					O1F.after('<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>');
				}
			}
			M1F.val(A1F).attr('data-role', 'stepper').attr('min', g1F).attr('max', e1F).attr('step', c1F).on('change', S0F);
			B1F = I4F('.mbsc-stepper-control', P1F).on('keydown', d1F).on('keyup', s1F).on('mousedown touchstart', x0F).on('touchmove', f1F).on('touchend touchcancel', R1F);
			M1F.addClass('mbsc-stepper-ready mbsc-control');
		};
		u1F._destroy = function() {
			M1F.removeClass('mbsc-control').off('change', S0F);
			B1F.off('keydown', d1F).off('keyup', s1F).off('mousedown touchstart', x0F).off('touchmove', f1F).off('touchend touchcancel', R1F);
		};
		u1F.init(r1F);
	};
	G4F.classes.Stepper.prototype = {
		_class: 'stepper',
		_defaults: {
			min: 0,
			max: 100,
			step: 1
		}
	};
	G4F.presetShort('stepper', 'Stepper');
	G4F.classes.Switch = function(v0F, P0F) {
		var u0F, W0F, L0F, o0F = this;
		P0F = P0F || {};
		I4F.extend(P0F, {
			changeEvent: 'click',
			min: 0,
			max: 1,
			step: 1,
			live: false,
			round: false,
			handle: false,
			highlight: false
		});
		G4F.classes.Slider.call(this, v0F, P0F, true);
		o0F._readValue = function() {
			return v0F.checked ? 1 : 0;
		};
		o0F._fillValue = function(l0F, m0F, T0F) {
			u0F.prop('checked', !!l0F);
			if (T0F) {
				u0F.trigger('change');
			}
		};
		o0F._onTap = function(i0F) {
			o0F._setVal(i0F ? 0 : 1);
		};
		o0F.__onInit = function() {
			L0F = o0F.settings;
			u0F = I4F(v0F);
			W0F = u0F.parent();
			W0F.find('.mbsc-switch-track').remove();
			W0F.prepend(u0F);
			u0F.attr('data-role', 'switch').after('<span class="mbsc-progress-cont mbsc-switch-track">' + '<span class="mbsc-progress-track mbsc-progress-anim">' + '<span class="mbsc-slider-handle-cont">' + '<span class="mbsc-slider-handle mbsc-switch-handle" data-index="0">' + '<span class="mbsc-switch-txt-off">' + L0F.offText + '</span>' + '<span class="mbsc-switch-txt-on">' + L0F.onText + '</span>' + '</span></span></span></span>');
			o0F._$track = W0F.find('.mbsc-progress-track');
		};
		o0F.getVal = function() {
			return v0F.checked;
		};
		o0F.setVal = function(X0F, R0F, f0F) {
			o0F._setVal(X0F ? 1 : 0, R0F, f0F);
		};
		o0F.init(P0F);
	};
	G4F.classes.Switch.prototype = {
		_class: 'switch',
		_css: 'mbsc-switch',
		_hasTheme: true,
		_hasLang: true,
		_defaults: {
			stopProp: true,
			offText: 'Off',
			onText: 'On'
		}
	};
	G4F.presetShort('switch', 'Switch');
	I4F(function() {
		I4F('[mbsc-enhance]').each(function() {
			I4F(this).mobiscroll().form();
		});
		I4F(document).on('mbsc-enhance', function(H0F, r0F) {
			if (I4F(H0F.target).is('[mbsc-enhance]')) {
				I4F(H0F.target).mobiscroll().form(r0F);
			} else {
				I4F('[mbsc-enhance]', H0F.target).each(function() {
					I4F(this).mobiscroll().form(r0F);
				});
			}
		});
		I4F(document).on('mbsc-refresh', function(F0F) {
			if (I4F(F0F.target).is('[mbsc-enhance]')) {
				I4F(F0F.target).mobiscroll('refresh');
			} else {
				I4F('[mbsc-enhance]', F0F.target).each(function() {
					I4F(this).mobiscroll('refresh');
				});
			}
		});
	});
}());
(function() {
	mobiscroll.themes.form['android-holo'] = {};
}());
(function() {
	mobiscroll.themes.form.ios = {};
}());
(function() {
	var E0F = mobiscroll.$;
	mobiscroll.themes.form.material = {
		onControlActivate: function(a0F) {
			var B0F, O0F = E0F(a0F.target);
			if (O0F[0].type == 'button' || O0F[0].type == 'submit') {
				B0F = O0F;
			}
			if (O0F.attr('data-role') == 'segmented') {
				B0F = O0F.next();
			}
			if (O0F.hasClass('mbsc-stepper-control') && !O0F.hasClass('mbsc-step-disabled')) {
				B0F = O0F.find('.mbsc-segmented-content');
			}
			if (B0F) {
				mobiscroll.themes.material.addRipple(B0F, a0F.domEvent);
			}
		},
		onControlDeactivate: function() {
			mobiscroll.themes.material.removeRipple();
		}
	};
}());
(function() {
	mobiscroll.themes.form.wp = {};
}());
(function() {
	var z0F = mobiscroll,
		p0F = z0F.$;
	z0F.themes.frame.bootstrap = {
		disabledClass: 'disabled',
		activeClass: 'btn-primary',
		activeTabClass: 'active',
		todayClass: 'text-primary',
		onMarkupInserted: function(d0F) {
			var C0F = p0F(d0F.target);
			p0F('.mbsc-fr-popup', C0F).addClass('popover');
			p0F('.mbsc-fr-w', C0F).addClass('popover-content');
			p0F('.mbsc-fr-hdr', C0F).addClass('popover-title');
			p0F('.mbsc-fr-arr-i', C0F).addClass('popover');
			p0F('.mbsc-fr-arr', C0F).addClass('arrow');
			p0F('.mbsc-fr-btn', C0F).addClass('btn btn-default');
			p0F('.mbsc-fr-btn-s .mbsc-fr-btn', C0F).removeClass('btn-default').addClass('btn btn-primary');
			p0F('.mbsc-sc-btn-plus', C0F).addClass('glyphicon glyphicon-chevron-down');
			p0F('.mbsc-sc-btn-minus', C0F).addClass('glyphicon glyphicon-chevron-up');
			p0F('.mbsc-cal-next .mbsc-cal-btn-txt', C0F).prepend('<i class="glyphicon glyphicon-chevron-right"></i>');
			p0F('.mbsc-cal-prev .mbsc-cal-btn-txt', C0F).prepend('<i class="glyphicon glyphicon-chevron-left"></i>');
			p0F('.mbsc-cal-tabs ul', C0F).addClass('nav nav-tabs');
			p0F('.mbsc-cal-sc-c', C0F).addClass('popover');
			p0F('.mbsc-cal-week-nrs-c', C0F).addClass('popover');
			p0F('.mbsc-cal-events', C0F).addClass('popover');
			p0F('.mbsc-cal-events-arr', C0F).addClass('arrow');
			p0F('.mbsc-range-btn', C0F).addClass('btn btn-sm btn-small btn-default');
			p0F('.mbsc-np-btn', C0F).addClass('btn btn-default');
		},
		onPosition: function(s0F) {
			setTimeout(function() {
				p0F('.mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i', s0F.target).removeClass('bottom').addClass('top');
				p0F('.mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i', s0F.target).removeClass('top').addClass('bottom');
			}, 10);
		}
	};
	z0F.themes.scroller.bootstrap = p0F.extend({}, z0F.themes.frame.bootstrap, {
		dateDisplay: 'Mddyy',
		btnCalPrevClass: '',
		btnCalNextClass: '',
		selectedLineHeight: true,
		onEventBubbleShow: function(Y2F) {
			var x2F = p0F(Y2F.eventList);
			p0F('.mbsc-cal-event-list', x2F).addClass('list-group');
			p0F('.mbsc-cal-event', x2F).addClass('list-group-item');
			setTimeout(function() {
				if (x2F.hasClass('mbsc-cal-events-b')) {
					x2F.removeClass('top').addClass('bottom');
				} else {
					x2F.removeClass('bottom').addClass('top');
				}
			}, 10);
		}
	});
}());
(function() {
	var S2F = mobiscroll,
		D2F = S2F.$;
	S2F.themes.frame.material = {
		headerText: false,
		btnWidth: false,
		deleteIcon: 'material-backspace',
		onMarkupReady: function(Q2F) {
			S2F.themes.material.initRipple(D2F(Q2F.target), '.mbsc-fr-btn-e', 'mbsc-fr-btn-d', 'mbsc-fr-btn-nhl');
		}
	};
	S2F.themes.scroller.material = D2F.extend({}, S2F.themes.frame.material, {
		showLabel: false,
		selectedLineBorder: 2,
		weekDays: 'min',
		icon: {
			filled: 'material-star',
			empty: 'material-star-outline'
		},
		checkIcon: 'material-check',
		btnPlusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-down',
		btnMinusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-up',
		btnCalPrevClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-left',
		btnCalNextClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-right',
		onEventBubbleShow: function(n2F) {
			var j2F = D2F(n2F.eventList),
				h2F = D2F(n2F.target).closest('.mbsc-cal-row').index() < 2,
				w2F = D2F('.mbsc-cal-event-color', j2F).eq(h2F ? 0 : -1).css('background-color');
			D2F('.mbsc-cal-events-arr', j2F).css('border-color', h2F ? 'transparent transparent ' + w2F + ' transparent' : w2F + 'transparent transparent transparent');
		}
	});
}());
(function(q2F) {
	var K2F = mobiscroll,
		Z2F = K2F.$,
		U2F = K2F.util,
		G2F = U2F.testTouch,
		V2F = U2F.getCoord,
		N2F = U2F.isNumeric,
		I2F = function() {},
		k2F = K2F.classes;
	k2F.Numpad = function(g2F, D8F, h8F) {
		var e2F, v2F, l2F, M2F, b2F, P2F, d2F, C2F, z2F, a2F, x8F, B2F, m2F, i2F, A2F, X2F, R2F, c2F, T2F, o2F = Z2F(g2F),
			t2F = this,
			E2F = [],
			y2F = [],
			J2F = {},
			r2F = {},
			p2F = {
				107: '+',
				109: '-'
			},
			L2F = {
				48: 0,
				49: 1,
				50: 2,
				51: 3,
				52: 4,
				53: 5,
				54: 6,
				55: 7,
				56: 8,
				57: 9,
				96: 0,
				97: 1,
				98: 2,
				99: 3,
				100: 4,
				101: 5,
				102: 6,
				103: 7,
				104: 8,
				105: 9
			};
		function u2F(Z8F) {
			var w8F, n8F = b2F.validate.call(g2F, {
					values: A2F.slice(0),
					variables: J2F
				}, t2F) || [],
				q8F = n8F && n8F.disabled || [];
			t2F._isValid = n8F.invalid ? false : true;
			t2F._tempValue = b2F.formatValue.call(g2F, A2F.slice(0), J2F, t2F);
			M2F = A2F.length;
			X2F = n8F.length || c2F;
			if (t2F._isVisible && mobiscroll.KvAPo) {
				Z2F('.mbsc-np-ph', e2F).each(function(K8F) {
					Z2F(this).html(b2F.fill == 'ltr' ? K8F >= M2F ? l2F : P2F || A2F[K8F] : K8F >= c2F - X2F ? K8F + M2F < c2F ? l2F : P2F || A2F[K8F + M2F - c2F] : '');
				});
				Z2F('.mbsc-np-cph', e2F).each(function() {
					Z2F(this).html(J2F[Z2F(this).attr('data-var')] || Z2F(this).attr('data-ph'));
				});
				if (M2F === c2F) {
					for (w8F = 0; w8F <= 9; w8F++) {
						q8F.push(w8F);
					}
				}
				Z2F('.mbsc-np-btn', e2F).removeClass(v2F);
				for (w8F = 0; w8F < q8F.length; w8F++) {
					Z2F('.mbsc-np-btn[data-val="' + q8F[w8F] + '"]', e2F).addClass(v2F);
				}
				if (t2F._isValid) {
					Z2F('.mbsc-fr-btn-s .mbsc-fr-btn', e2F).removeClass(v2F);
				} else {
					Z2F('.mbsc-fr-btn-s .mbsc-fr-btn', e2F).addClass(v2F);
				}
				if (t2F.live) {
					t2F._hasValue = Z8F || t2F._hasValue;
					W2F(Z8F, false, Z8F);
					if (Z8F) {
						R2F('onSet', {
							valueText: t2F._value
						});
					}
				}
			}
		}
		function W2F(k8F, U8F, V8F, I8F) {
			if (U8F) {
				u2F();
			}
			if (!I8F) {
				T2F = A2F.slice(0);
				r2F = Z2F.extend({}, J2F);
				E2F = y2F.slice(0);
				t2F._value = t2F._hasValue ? t2F._tempValue : null;
			}
			if (k8F) {
				if (t2F._isInput) {
					o2F.val(t2F._hasValue && t2F._isValid ? t2F._value : '');
				}
				R2F('onFill', {
					valueText: t2F._hasValue ? t2F._tempValue : '',
					change: V8F
				});
				if (V8F) {
					t2F._preventChange = true;
					o2F.trigger('change');
				}
			}
		}
		function s2F(y8F) {
			var G8F, t8F, N8F = y8F || [],
				b8F = [];
			y2F = [];
			J2F = {};
			for (G8F = 0; G8F < N8F.length; G8F++) {
				if (/:/.test(N8F[G8F])) {
					t8F = N8F[G8F].split(':');
					J2F[t8F[0]] = t8F[1];
					y2F.push(t8F[0]);
				} else {
					b8F.push(N8F[G8F]);
					y2F.push('digit');
				}
			}
			return b8F;
		}
		function O2F(J8F, A8F) {
			if (!M2F && !A8F && !b2F.allowLeadingZero || J8F.hasClass('mbsc-fr-btn-d') || J8F.hasClass('mbsc-np-btn-empty')) {
				return;
			}
			if (M2F < c2F) {
				y2F.push('digit');
				A2F.push(A8F);
				u2F(true);
			}
		}
		function Y8F(g8F) {
			var c8F, M8F, e8F = g8F.attr('data-val'),
				u8F = g8F.attr('data-track') !== 'false',
				o8F = g8F.attr('data-var');
			if (!g8F.hasClass('mbsc-fr-btn-d')) {
				if (o8F) {
					M8F = o8F.split(':');
					if (u8F) {
						y2F.push(M8F[0]);
					}
					J2F[M8F[0]] = M8F[2] === q2F ? M8F[1] : J2F[M8F[0]] == M8F[1] ? M8F[2] : M8F[1];
				}
				if (e8F.length + M2F <= X2F) {
					for (c8F = 0; c8F < e8F.length; ++c8F) {
						M8F = N2F(e8F[c8F]) ? +e8F[c8F] : e8F[c8F];
						if (b2F.allowLeadingZero || M2F || M8F) {
							y2F.push('digit');
							A2F.push(M8F);
						}
					}
				}
				u2F(true);
			}
		}
		function H2F() {
			var v8F, W8F, P8F = y2F.pop();
			if (M2F || P8F !== 'digit') {
				if (P8F !== 'digit' && J2F[P8F]) {
					delete J2F[P8F];
					W8F = y2F.slice(0);
					y2F = [];
					for (v8F = 0; v8F < W8F.length; v8F++) {
						if (W8F[v8F] !== P8F) {
							y2F.push(W8F[v8F]);
						}
					}
				} else {
					A2F.pop();
				}
				u2F(true);
			}
		}
		function Q8F(L8F) {
			m2F = true;
			d2F = V2F(L8F, 'X');
			C2F = V2F(L8F, 'Y');
			clearInterval(i2F);
			clearTimeout(i2F);
			H2F();
			i2F = setInterval(function() {
				H2F();
			}, 150);
		}
		function S8F() {
			clearInterval(i2F);
			m2F = false;
		}
		function j8F(l8F) {
			if (G2F(l8F, this)) {
				Q8F(l8F);
				if (l8F.type === 'mousedown') {
					Z2F(document).on('mousemove', f2F).on('mouseup', F2F);
				}
			}
		}
		function f2F(T8F) {
			if (m2F) {
				z2F = V2F(T8F, 'X');
				a2F = V2F(T8F, 'Y');
				x8F = z2F - d2F;
				B2F = a2F - C2F;
				if (Math.abs(x8F) > 7 || Math.abs(B2F) > 7) {
					S8F();
				}
			}
		}
		function F2F(m8F) {
			if (m2F) {
				m8F.preventDefault();
				S8F();
				if (m8F.type === 'mouseup') {
					Z2F(document).off('mousemove', f2F).off('mouseup', F2F);
				}
			}
		}
		k2F.Frame.call(this, g2F, D8F, true);
		t2F.setVal = t2F._setVal = function(i8F, X8F, R8F, f8F) {
			t2F._hasValue = i8F !== null && i8F !== q2F;
			A2F = s2F(Z2F.isArray(i8F) ? i8F.slice(0) : b2F.parseValue.call(g2F, i8F, t2F));
			W2F(X8F, true, R8F === q2F ? X8F : R8F, f8F);
		};
		t2F.getVal = t2F._getVal = function(H8F) {
			return t2F._hasValue || H8F ? t2F[H8F ? '_tempValue' : '_value'] : null;
		};
		t2F.setArrayVal = t2F.setVal;
		t2F.getArrayVal = function(r8F) {
			return r8F ? A2F.slice(0) : t2F._hasValue ? T2F.slice(0) : null;
		};
		t2F._readValue = function() {
			var F8F = o2F.val() || '';
			if (F8F !== '') {
				t2F._hasValue = true;
			}
			if (P2F) {
				J2F = {};
				y2F = [];
				A2F = [];
			} else {
				J2F = t2F._hasValue ? r2F : {};
				y2F = t2F._hasValue ? E2F : [];
				A2F = t2F._hasValue && T2F ? T2F.slice(0) : s2F(b2F.parseValue.call(g2F, F8F, t2F));
				W2F(false, true);
			}
		};
		t2F._fillValue = function() {
			t2F._hasValue = true;
			W2F(true, false, true);
		};
		t2F._generateContent = function() {
			var p8F, z8F, B8F, O8F = 1,
				a8F = '',
				E8F = '';
			E8F += '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + b2F.deleteText + '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' + b2F.deleteIcon + '"></div><div class="mbsc-np-dsp">';
			a8F = b2F.template.replace(/d/g, '<span class="mbsc-np-ph">' + l2F + '</span>').replace(/&#100;/g, 'd');
			a8F = a8F.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>');
			E8F += a8F;
			E8F += '</div></div>';
			E8F += '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">';
			for (p8F = 0; p8F < 4; p8F++) {
				E8F += '<div class="mbsc-np-row">';
				for (z8F = 0; z8F < 3; z8F++) {
					B8F = O8F;
					if (O8F == 10 || O8F == 12) {
						B8F = '';
					} else if (O8F == 11) {
						B8F = 0;
					}
					if (B8F === '') {
						if (O8F == 10 && b2F.leftKey) {
							E8F += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (b2F.leftKey.variable ? 'data-var="' + b2F.leftKey.variable + '"' : '') + ' data-val="' + (b2F.leftKey.value || '') + '" ' + (b2F.leftKey.track !== q2F ? ' data-track="' + b2F.leftKey.track + '"' : '') + '>' + b2F.leftKey.text + '</div>';
						} else if (O8F == 12 && b2F.rightKey) {
							E8F += '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-fr-btn-e" ' + (b2F.rightKey.variable ? 'data-var="' + b2F.rightKey.variable + '"' : '') + ' data-val="' + (b2F.rightKey.value || '') + '" ' + (b2F.rightKey.track !== q2F ? ' data-track="' + b2F.rightKey.track + '"' : '') + ' >' + b2F.rightKey.text + '</div>';
						} else {
							E8F += '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>';
						}
					} else {
						E8F += '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' + B8F + '">' + B8F + '</div>';
					}
					O8F++;
				}
				E8F += '</div>';
			}
			E8F += '</div></div>';
			return E8F;
		};
		t2F._markupReady = function() {
			e2F = t2F._markup;
			u2F();
		};
		t2F._attachEvents = function(C8F) {
			C8F.on('keydown', function(d8F) {
				var s8F;
				if (p2F[d8F.keyCode] !== q2F) {
					s8F = Z2F('.mbsc-np-btn[data-var="sign:-:"]', C8F);
					if (s8F.length) {
						J2F.sign = d8F.keyCode == 107 ? '-' : '';
						Y8F(s8F);
					}
				} else if (L2F[d8F.keyCode] !== q2F) {
					O2F(Z2F('.mbsc-np-btn[data-val="' + L2F[d8F.keyCode] + '"]', C8F), L2F[d8F.keyCode]);
				} else if (d8F.keyCode == 8) {
					d8F.preventDefault();
					H2F();
				}
			});
			t2F.tap(Z2F('.mbsc-np-btn', C8F), function() {
				var x6F = Z2F(this);
				if (x6F.hasClass('mbsc-np-btn-custom')) {
					Y8F(x6F);
				} else {
					O2F(x6F, +x6F.attr('data-val'));
				}
			}, false, 30, true);
			Z2F('.mbsc-np-del', C8F).on('touchstart mousedown keydown', j8F).on('touchmove mousemove', f2F).on('keyup mouseup touchend', F2F);
		};
		t2F.__processSettings = function() {
			b2F = t2F.settings;
			b2F.headerText = (b2F.headerText || '').replace('{value}', '');
			b2F.cssClass = (b2F.cssClass || '') + ' mbsc-np';
		};
		t2F.__init = function() {
			b2F.template = b2F.template.replace(/\\d/, '&#100;');
			l2F = b2F.placeholder;
			c2F = (b2F.template.match(/d/g) || []).length;
			v2F = 'mbsc-fr-btn-d ' + (b2F.disabledClass || '');
			P2F = b2F.mask;
			R2F = t2F.trigger;
			if (P2F && o2F.is('input')) {
				o2F.attr('type', 'password');
			}
		};
		t2F._indexOf = function(D6F, S6F) {
			var Y6F;
			for (Y6F = 0; Y6F < D6F.length; ++Y6F) {
				if (D6F[Y6F].toString() === S6F.toString()) {
					return Y6F;
				}
			}
			return -1;
		};
		if (!h8F) {
			t2F.init(D8F);
		}
	};
	k2F.Numpad.prototype = {
		_hasDef: true,
		_hasTheme: true,
		_hasLang: true,
		_hasPreset: true,
		_class: 'numpad',
		_defaults: Z2F.extend({}, k2F.Frame.prototype._defaults, {
			template: 'dd.dd',
			placeholder: '0',
			deleteIcon: 'backspace',
			allowLeadingZero: false,
			fill: 'rtl',
			deleteText: 'Delete',
			decimalSeparator: '.',
			thousandsSeparator: ',',
			validate: I2F,
			parseValue: I2F,
			formatValue: function(V6F, U6F, k6F) {
				var j6F, w6F = 1,
					q6F = k6F.settings,
					K6F = q6F.placeholder,
					n6F = q6F.template,
					Z6F = V6F.length,
					h6F = n6F.length,
					Q6F = '';
				for (j6F = 0; j6F < h6F; j6F++) {
					if (n6F[h6F - j6F - 1] == 'd') {
						if (w6F <= Z6F) {
							Q6F = V6F[Z6F - w6F] + Q6F;
						} else {
							Q6F = K6F + Q6F;
						}
						w6F++;
					} else {
						Q6F = n6F[h6F - j6F - 1] + Q6F;
					}
				}
				Z2F.each(U6F, function(I6F, G6F) {
					Q6F = Q6F.replace('{' + I6F + '}', G6F);
				});
				return Z2F('<div>' + Q6F + '</div>').text();
			}
		})
	};
	K2F.themes.numpad = K2F.themes.frame;
	K2F.presetShort('numpad', 'Numpad', false);
}());
(function() {
	var N6F = mobiscroll,
		t6F = N6F.$,
		b6F = N6F.presets.numpad,
		y6F = {
			min: 0,
			max: 99.99,
			scale: 2,
			prefix: '',
			suffix: '',
			returnAffix: false
		};
	b6F.decimal = function(A6F) {
		function M6F(v6F, W6F) {
			var u6F, P6F = v6F.slice(0),
				o6F = 0;
			while (P6F.length) {
				o6F = o6F * 10 + P6F.shift();
			}
			for (u6F = 0; u6F < J6F.scale; u6F++) {
				o6F /= 10;
			}
			return W6F ? o6F * -1 : o6F;
		}
		function e6F(l6F) {
			var L6F = M6F(l6F).toFixed(J6F.scale).replace('.', J6F.decimalSeparator).replace(/\B(?=(\d{3})+(?!\d))/g, J6F.thousandsSeparator);
			return L6F;
		}
		var g6F = t6F.extend({}, A6F.settings),
			J6F = t6F.extend(A6F.settings, y6F, g6F),
			c6F = J6F.min < 0;
		A6F.getVal = function(m6F) {
			var T6F = A6F._getVal(m6F);
			return N6F.util.isNumeric(T6F) ? +T6F : T6F;
		};
		return {
			template: (c6F ? '{sign}' : '') + J6F.prefix.replace(/d/g, '\\d') + Array((Math.floor(Math.max(J6F.max, Math.abs(J6F.min))) + '').length + 1).join('d') + (J6F.scale ? '.' + Array(J6F.scale + 1).join('d') : '') + J6F.suffix.replace(/d/g, '\\d'),
			leftKey: c6F ? {
				text: '-/+',
				variable: 'sign:-:',
				track: false
			} : undefined,
			parseValue: function(H6F) {
				var X6F, i6F, f6F = H6F || J6F.defaultValue,
					R6F = [];
				if (f6F) {
					f6F = (f6F + '').replace(J6F.decimalSeparator, '.').replace(J6F.thousandsSeparator, '');
					i6F = f6F.match(/\d+\.?\d*/g);
					if (i6F) {
						i6F = (+i6F[0]).toFixed(J6F.scale);
						for (X6F = 0; X6F < i6F.length; X6F++) {
							if (i6F[X6F] != '.') {
								if (+i6F[X6F]) {
									R6F.push(+i6F[X6F]);
								} else if (R6F.length) {
									R6F.push(0);
								}
							}
						}
					}
				}
				if (H6F < 0) {
					R6F.push('sign:' + '-');
				}
				return R6F;
			},
			formatValue: function(F6F, E6F) {
				var r6F = e6F(F6F),
					O6F = M6F(F6F, E6F && E6F.sign == '-');
				return (O6F < 0 ? '-' : '') + (J6F.returnAffix ? J6F.prefix + r6F + J6F.suffix : r6F);
			},
			validate: function(B6F) {
				var a6F = B6F.values,
					C6F = e6F(a6F),
					p6F = M6F(a6F, B6F.variables && B6F.variables.sign == '-'),
					z6F = [];
				if (!a6F.length && !J6F.allowLeadingZero) {
					z6F.push(0);
				}
				if (A6F.isVisible()) {
					t6F('.mbsc-np-dsp', A6F._markup).html((B6F.variables.sign || '') + J6F.prefix + C6F + J6F.suffix);
				}
				return {
					disabled: z6F,
					invalid: p6F > J6F.max || p6F < J6F.min || (J6F.invalid ? A6F._indexOf(J6F.invalid, p6F) != -1 : false)
				};
			}
		};
	};
}());
(function() {
	function x9L(w9L) {
		var Q9L = 0,
			j9L = 1,
			h9L = 0;
		while (w9L.length) {
			if (Q9L > 3) {
				j9L = 60 * 60;
			} else if (Q9L > 1) {
				j9L = 60;
			}
			h9L = h9L + w9L.pop() * j9L * (Q9L % 2 ? 10 : 1);
			Q9L++;
		}
		return h9L;
	}
	var s6F = mobiscroll,
		d6F = s6F.$,
		D9L = s6F.presets.numpad,
		Y9L = ['h', 'm', 's'],
		S9L = {
			min: 0,
			max: 362439,
			defaultValue: 0,
			hourTextShort: 'h',
			minuteTextShort: 'm',
			secTextShort: 's'
		};
	D9L.timespan = function(Z9L) {
		var k9L = d6F.extend({}, Z9L.settings),
			n9L = d6F.extend(Z9L.settings, S9L, k9L),
			K9L = {
				h: n9L.hourTextShort.replace(/d/g, '\\d'),
				m: n9L.minuteTextShort.replace(/d/g, '\\d'),
				s: n9L.secTextShort.replace(/d/g, '\\d')
			},
			q9L = 'd<span class="mbsc-np-sup mbsc-np-time">' + K9L.s + '</span>';
		function V9L(N9L) {
			var I9L, U9L = '',
				G9L = 60 * 60;
			d6F(Y9L).each(function(b9L, t9L) {
				I9L = Math.floor(N9L / G9L);
				N9L -= I9L * G9L;
				G9L /= 60;
				if (I9L > 0 || t9L == 's' && !U9L) {
					U9L = U9L + (U9L ? ' ' : '') + I9L + K9L[t9L];
				}
			});
			return U9L;
		}
		if (n9L.max > 9) {
			q9L = 'd' + q9L;
		}
		if (n9L.max > 99) {
			q9L = '<span class="mbsc-np-ts-m">' + (n9L.max > 639 ? 'd' : '') + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + K9L.m + '</span>' + q9L;
		}
		if (n9L.max > 6039) {
			q9L = '<span class="mbsc-np-ts-h">' + (n9L.max > 38439 ? 'd' : '') + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + K9L.h + '</span>' + q9L;
		}
		Z9L.setVal = function(y9L, J9L, A9L, M9L) {
			if (s6F.util.isNumeric(y9L)) {
				y9L = V9L(y9L);
			}
			return Z9L._setVal(y9L, J9L, A9L, M9L);
		};
		Z9L.getVal = function(c9L) {
			return Z9L._hasValue || c9L ? x9L(Z9L.getArrayVal(c9L)) : null;
		};
		return {
			template: q9L,
			parseValue: function(u9L) {
				var g9L, o9L = u9L || V9L(n9L.defaultValue),
					e9L = [];
				if (o9L) {
					d6F(Y9L).each(function(v9L, P9L) {
						g9L = new RegExp('(\\d+)' + K9L[P9L], 'gi').exec(o9L);
						if (g9L) {
							g9L = +g9L[1];
							if (g9L > 9) {
								e9L.push(Math.floor(g9L / 10));
								e9L.push(g9L % 10);
							} else {
								if (e9L.length) {
									e9L.push(0);
								}
								if (g9L || e9L.length) {
									e9L.push(g9L);
								}
							}
						} else if (e9L.length) {
							e9L.push(0);
							e9L.push(0);
						}
					});
				}
				return e9L;
			},
			formatValue: function(W9L) {
				return V9L(x9L(W9L));
			},
			validate: function(m9L) {
				var l9L = m9L.values,
					L9L = x9L(l9L.slice(0)),
					T9L = [];
				if (!l9L.length) {
					T9L.push(0);
				}
				return {
					disabled: T9L,
					invalid: L9L > n9L.max || L9L < n9L.min || (n9L.invalid ? Z9L._indexOf(n9L.invalid, +L9L) != -1 : false)
				};
			}
		};
	};
}());
(function() {
	var X9L = mobiscroll,
		i9L = X9L.$,
		R9L = X9L.presets.numpad,
		f9L = {
			timeFormat: 'hh:ii A',
			amText: 'am',
			pmText: 'pm'
		};
	R9L.time = function(x7L) {
		var Y7L = i9L.extend({}, x7L.settings),
			H9L = i9L.extend(x7L.settings, f9L, Y7L),
			p9L = H9L.timeFormat.split(':'),
			r9L = H9L.timeFormat.match(/a/i),
			d9L = r9L ? r9L[0] == 'a' ? H9L.amText : H9L.amText.toUpperCase() : '',
			C9L = r9L ? r9L[0] == 'a' ? H9L.pmText : H9L.pmText.toUpperCase() : '',
			s9L = 0,
			F9L = H9L.min ? '' + H9L.min.getHours() : '',
			E9L = H9L.max ? '' + H9L.max.getHours() : '',
			z9L = H9L.min ? '' + (H9L.min.getMinutes() < 10 ? '0' + H9L.min.getMinutes() : H9L.min.getMinutes()) : '',
			O9L = H9L.max ? '' + (H9L.max.getMinutes() < 10 ? '0' + H9L.max.getMinutes() : H9L.max.getMinutes()) : '',
			a9L = H9L.min ? '' + (H9L.min.getSeconds() < 10 ? '0' + H9L.min.getSeconds() : H9L.min.getSeconds()) : '',
			B9L = H9L.max ? '' + (H9L.max.getSeconds() < 10 ? '0' + H9L.max.getSeconds() : H9L.max.getSeconds()) : '';
		H9L.min ? H9L.min.setFullYear(2014, 7, 20) : '';
		H9L.max ? H9L.max.setFullYear(2014, 7, 20) : '';
		function D7L(j7L, w7L) {
			var Q7L, h7L = '';
			for (Q7L = 0; Q7L < j7L.length; ++Q7L) {
				h7L += j7L[Q7L] + (Q7L % 2 == (j7L.length % 2 == 1 ? 0 : 1) && Q7L != j7L.length - 1 ? ':' : '');
			}
			i9L.each(w7L, function(Z7L, n7L) {
				h7L += ' ' + n7L;
			});
			return h7L;
		}
		function S7L(K7L) {
			var q7L, U7L, k7L, t7L, b7L, A7L, I7L, G7L, y7L, J7L, V7L = [],
				N7L = 2 * p9L.length;
			s9L = N7L;
			if (!K7L.length) {
				if (r9L) {
					V7L.push(0);
					V7L.push(H9L.leftKey.value);
				}
				V7L.push(H9L.rightKey.value);
			}
			if (!r9L && (N7L - K7L.length < 2 || K7L[0] != 1 && (K7L[0] > 2 || K7L[1] > 3) && N7L - K7L.length <= 2)) {
				V7L.push('30');
				V7L.push('00');
			}
			if ((r9L ? K7L[0] > 1 || K7L[1] > 2 : K7L[0] != 1 && (K7L[0] > 2 || K7L[1] > 3)) && K7L[0]) {
				K7L.unshift(0);
				s9L = N7L - 1;
			}
			if (K7L.length == N7L) {
				for (q7L = 0; q7L <= 9; ++q7L) {
					V7L.push(q7L);
				}
			} else if (K7L.length == 1 && r9L && K7L[0] == 1 || K7L.length && K7L.length % 2 === 0 || !r9L && K7L[0] == 2 && K7L[1] > 3 && K7L.length % 2 == 1) {
				for (q7L = 6; q7L <= 9; ++q7L) {
					V7L.push(q7L);
				}
			}
			y7L = K7L[1] !== undefined ? '' + K7L[0] + K7L[1] : '';
			J7L = +O9L == +(K7L[3] !== undefined ? '' + K7L[2] + K7L[3] : '');
			if (H9L.invalid) {
				for (q7L = 0; q7L < H9L.invalid.length; ++q7L) {
					A7L = H9L.invalid[q7L].getHours();
					I7L = H9L.invalid[q7L].getMinutes();
					G7L = H9L.invalid[q7L].getSeconds();
					if (A7L == +y7L) {
						if (p9L.length == 2 && (I7L < 10 ? 0 : +('' + I7L)[0]) == +K7L[2]) {
							V7L.push(I7L < 10 ? I7L : +('' + I7L)[1]);
							break;
						} else if ((G7L < 10 ? 0 : +('' + G7L)[0]) == +K7L[4]) {
							V7L.push(G7L < 10 ? G7L : +('' + G7L)[1]);
							break;
						}
					}
				}
			}
			if (H9L.min || H9L.max) {
				U7L = +F9L == +y7L;
				k7L = +E9L == +y7L;
				b7L = k7L && J7L;
				t7L = U7L && J7L;
				if (K7L.length === 0) {
					for (q7L = r9L ? 2 : F9L > 19 ? F9L[0] : 3; q7L <= (F9L[0] == 1 ? 9 : F9L[0] - 1); ++q7L) {
						V7L.push(q7L);
					}
					if (F9L >= 10) {
						V7L.push(0);
						if (F9L[0] == 2) {
							for (q7L = 3; q7L <= 9; ++q7L) {
								V7L.push(q7L);
							}
						}
					}
					if (E9L && E9L < 10 || F9L && F9L >= 10) {
						for (q7L = E9L && E9L < 10 ? +E9L[0] + 1 : 0; q7L < (F9L && F9L >= 10 ? F9L[0] : 10); ++q7L) {
							V7L.push(q7L);
						}
					}
				}
				if (K7L.length == 1) {
					if (K7L[0] === 0) {
						for (q7L = 0; q7L < F9L[0]; ++q7L) {
							V7L.push(q7L);
						}
					}
					if (F9L && (K7L[0] !== 0 && (r9L ? K7L[0] == 1 : K7L[0] == 2))) {
						for (q7L = r9L ? 3 : 4; q7L <= 9; ++q7L) {
							V7L.push(q7L);
						}
					}
					if (K7L[0] == F9L[0]) {
						for (q7L = 0; q7L < F9L[1]; ++q7L) {
							V7L.push(q7L);
						}
					}
					if (K7L[0] == E9L[0] && !r9L) {
						for (q7L = +E9L[1] + 1; q7L <= 9; ++q7L) {
							V7L.push(q7L);
						}
					}
				}
				if (K7L.length == 2 && (U7L || k7L)) {
					for (q7L = k7L ? +O9L[0] + 1 : 0; q7L < (U7L ? +z9L[0] : 10); ++q7L) {
						V7L.push(q7L);
					}
				}
				if (K7L.length == 3 && (k7L && K7L[2] == O9L[0] || U7L && K7L[2] == z9L[0])) {
					for (q7L = k7L && K7L[2] == O9L[0] ? +O9L[1] + 1 : 0; q7L < (U7L && K7L[2] == z9L[0] ? +z9L[1] : 10); ++q7L) {
						V7L.push(q7L);
					}
				}
				if (K7L.length == 4 && (t7L || b7L)) {
					for (q7L = b7L ? +B9L[0] + 1 : 0; q7L < (t7L ? +a9L[0] : 10); ++q7L) {
						V7L.push(q7L);
					}
				}
				if (K7L.length == 5 && (t7L && K7L[4] == a9L[0] || b7L && K7L[4] == B9L[0])) {
					for (q7L = b7L && K7L[4] == B9L[0] ? +B9L[1] + 1 : 0; q7L < (t7L && K7L[4] == a9L[0] ? +a9L[1] : 10); ++q7L) {
						V7L.push(q7L);
					}
				}
			}
			return V7L;
		}
		return {
			placeholder: '-',
			allowLeadingZero: true,
			template: (p9L.length == 3 ? 'dd:dd:dd' : p9L.length == 2 ? 'dd:dd' : 'dd') + (r9L ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ''),
			leftKey: r9L ? {
				text: d9L,
				variable: 'ampm:' + d9L,
				value: '00'
			} : {
				text: ':00',
				value: '00'
			},
			rightKey: r9L ? {
				text: C9L,
				variable: 'ampm:' + C9L,
				value: '00'
			} : {
				text: ':30',
				value: '30'
			},
			parseValue: function(o7L) {
				var c7L, e7L, M7L = o7L || H9L.defaultValue,
					g7L = [];
				if (M7L) {
					M7L = M7L + '';
					e7L = M7L.match(/\d/g);
					if (e7L) {
						for (c7L = 0; c7L < e7L.length; c7L++) {
							g7L.push(+e7L[c7L]);
						}
					}
					if (r9L) {
						g7L.push('ampm:' + (M7L.match(new RegExp(H9L.pmText, 'gi')) ? C9L : d9L));
					}
				}
				return g7L;
			},
			formatValue: function(u7L, P7L) {
				return D7L(u7L, P7L);
			},
			validate: function(l7L) {
				var v7L = l7L.values,
					T7L = l7L.variables,
					L7L = D7L(v7L, T7L),
					W7L = v7L.length >= 3 ? new Date(2014, 7, 20, '' + v7L[0] + (v7L.length % 2 === 0 ? v7L[1] : ''), '' + v7L[v7L.length % 2 === 0 ? 2 : 1] + v7L[v7L.length % 2 === 0 ? 3 : 2]) : '';
				return {
					disabled: S7L(v7L),
					length: s9L,
					invalid: (r9L ? !new RegExp('^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9])' + ' (?:' + H9L.amText + '|' + H9L.pmText + ')$', 'i').test(L7L) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(L7L)) || (H9L.invalid ? x7L._indexOf(H9L.invalid, W7L) != -1 : false) || !((H9L.min ? H9L.min <= W7L : true) && (H9L.max ? W7L <= H9L.max : true))
				};
			}
		};
	};
}());
(function() {
	var m7L = mobiscroll,
		i7L = m7L.$,
		X7L = m7L.presets.numpad,
		R7L = {
			dateOrder: 'mdy',
			dateFormat: 'mm/dd/yy',
			delimiter: '/'
		};
	X7L.date = function(x5L) {
		var H7L, r7L, E7L, s7L, a7L = [],
			D5L = i7L.extend({}, x5L.settings),
			f7L = i7L.extend(x5L.settings, m7L.util.datetime.defaults, R7L, D5L),
			F7L = f7L.dateOrder,
			p7L = f7L.min ? '' + (f7L.getMonth(f7L.min) + 1) : 0,
			z7L = f7L.max ? '' + (f7L.getMonth(f7L.max) + 1) : 0,
			C7L = f7L.min ? '' + f7L.getDay(f7L.min) : 0,
			d7L = f7L.max ? '' + f7L.getDay(f7L.max) : 0,
			B7L = f7L.min ? '' + f7L.getYear(f7L.min) : 0,
			O7L = f7L.max ? '' + f7L.getYear(f7L.max) : 0;
		F7L = F7L.replace(/y+/gi, 'yyyy');
		F7L = F7L.replace(/m+/gi, 'mm');
		F7L = F7L.replace(/d+/gi, 'dd');
		H7L = F7L.toUpperCase().indexOf('Y');
		r7L = F7L.toUpperCase().indexOf('M');
		E7L = F7L.toUpperCase().indexOf('D');
		F7L = '';
		a7L.push({
			val: H7L,
			n: 'yyyy'
		}, {
			val: r7L,
			n: 'mm'
		}, {
			val: E7L,
			n: 'dd'
		});
		a7L.sort(function(j5L, h5L) {
			return j5L.val - h5L.val;
		});
		i7L.each(a7L, function(n5L, w5L) {
			F7L += w5L.n;
		});
		H7L = F7L.indexOf('y');
		r7L = F7L.indexOf('m');
		E7L = F7L.indexOf('d');
		F7L = '';
		for (s7L = 0; s7L < 8; ++s7L) {
			F7L += 'd';
			if (s7L + 1 == H7L || s7L + 1 == r7L || s7L + 1 == E7L) {
				F7L += f7L.delimiter;
			}
		}
		function S5L(Z5L) {
			return Z5L % 4 === 0 && Z5L % 100 !== 0 || Z5L % 400 === 0;
		}
		function Q5L(K5L) {
			var q5L, k5L, y5L, G5L, N5L, V5L = [],
				U5L = K5L[H7L + 3] !== undefined ? '' + K5L[H7L] + K5L[H7L + 1] + K5L[H7L + 2] + K5L[H7L + 3] : '',
				I5L = K5L[r7L + 1] !== undefined ? '' + K5L[r7L] + K5L[r7L + 1] : '',
				t5L = K5L[E7L + 1] !== undefined ? '' + K5L[E7L] + K5L[E7L + 1] : '',
				A5L = '' + f7L.getMaxDayOfMonth(U5L || 2012, I5L - 1 || 0),
				J5L = B7L === U5L && +p7L === +I5L,
				b5L = O7L === U5L && +z7L === +I5L;
			if (f7L.invalid) {
				for (q5L = 0; q5L < f7L.invalid.length; ++q5L) {
					y5L = f7L.getYear(f7L.invalid[q5L]);
					G5L = f7L.getMonth(f7L.invalid[q5L]);
					N5L = f7L.getDay(f7L.invalid[q5L]);
					if (y5L == +U5L && G5L + 1 == +I5L) {
						if ((N5L < 10 ? 0 : +('' + N5L)[0]) == +K5L[E7L]) {
							V5L.push(N5L < 10 ? N5L : +('' + N5L)[1]);
							break;
						}
					}
					if (G5L + 1 == +I5L && N5L == +t5L) {
						if (('' + y5L).substring(0, 3) == '' + K5L[H7L] + K5L[H7L + 1] + K5L[H7L + 2]) {
							V5L.push(('' + y5L)[3]);
							break;
						}
					}
					if (y5L == +U5L && N5L == +t5L) {
						if ((G5L < 10 ? 0 : +('' + (G5L + 1))[0]) == +K5L[r7L]) {
							V5L.push(G5L < 10 ? G5L : +('' + (G5L + 1))[1]);
							break;
						}
					}
				}
			}
			if (t5L == '31' && (K5L.length == r7L || K5L.length == r7L + 1)) {
				if (K5L[r7L] != 1) {
					V5L.push(2, 4, 6, 9, 11);
				} else {
					V5L.push(1);
				}
			}
			if (t5L == '30' && K5L[r7L] === 0 && K5L.length <= r7L + 1) {
				V5L.push(2);
			}
			if (K5L.length == r7L) {
				for (q5L = O7L === U5L && +z7L < 10 ? 1 : 2; q5L <= 9; ++q5L) {
					V5L.push(q5L);
				}
				if (B7L === U5L && +p7L >= 10) {
					V5L.push(0);
				}
			}
			if (K5L.length == r7L + 1) {
				if (K5L[r7L] == 1) {
					for (q5L = O7L === U5L ? +z7L[1] + 1 : 3; q5L <= 9; ++q5L) {
						V5L.push(q5L);
					}
					if (B7L == U5L) {
						for (q5L = 0; q5L < +p7L[1]; ++q5L) {
							V5L.push(q5L);
						}
					}
				}
				if (K5L[r7L] === 0) {
					V5L.push(0);
					if (O7L === U5L || B7L === U5L) {
						for (q5L = O7L === U5L ? +t5L > +d7L ? +z7L : +z7L + 1 : 0; q5L <= (B7L === U5L ? +t5L < +C7L ? +p7L - 1 : +p7L - 1 : 9); ++q5L) {
							V5L.push(q5L);
						}
					}
				}
			}
			if (K5L.length == E7L) {
				for (q5L = b5L ? (+d7L > 10 ? +d7L[0] : 0) + 1 : +A5L[0] + 1; q5L <= 9; ++q5L) {
					V5L.push(q5L);
				}
				if (J5L) {
					for (q5L = 0; q5L < (+C7L < 10 ? 0 : C7L[0]); ++q5L) {
						V5L.push(q5L);
					}
				}
			}
			if (K5L.length == E7L + 1) {
				if (K5L[E7L] >= 3 || I5L == '02') {
					for (q5L = +A5L[1] + 1; q5L <= 9; ++q5L) {
						V5L.push(q5L);
					}
				}
				if (b5L && +d7L[0] == K5L[E7L]) {
					for (q5L = +d7L[1] + 1; q5L <= 9; ++q5L) {
						V5L.push(q5L);
					}
				}
				if (J5L && C7L[0] == K5L[E7L]) {
					for (q5L = 0; q5L < +C7L[1]; ++q5L) {
						V5L.push(q5L);
					}
				}
				if (K5L[E7L] === 0) {
					V5L.push(0);
					if (b5L || J5L) {
						for (q5L = b5L ? +d7L + 1 : 1; q5L <= (J5L ? +C7L - 1 : 9); ++q5L) {
							V5L.push(q5L);
						}
					}
				}
			}
			if (K5L[H7L + 2] !== undefined && I5L == '02' && t5L == '29') {
				for (k5L = +('' + K5L[H7L] + K5L[H7L + 1] + K5L[H7L + 2] + 0); k5L <= +('' + K5L[H7L] + K5L[H7L + 1] + K5L[H7L + 2] + 9); ++k5L) {
					V5L.push(!S5L(k5L) ? k5L % 10 : '');
				}
			}
			if (K5L.length == H7L) {
				if (f7L.min) {
					for (q5L = 0; q5L < +B7L[0]; ++q5L) {
						V5L.push(q5L);
					}
				}
				if (f7L.max) {
					for (q5L = +O7L[0] + 1; q5L <= 9; ++q5L) {
						V5L.push(q5L);
					}
				}
				V5L.push(0);
			}
			if (f7L.min || f7L.max) {
				for (k5L = 1; k5L < 4; ++k5L) {
					if (K5L.length == H7L + k5L) {
						if (K5L[H7L + k5L - 1] == +B7L[k5L - 1] && (k5L == 3 ? K5L[H7L + k5L - 2] == +B7L[k5L - 2] : true)) {
							for (q5L = 0; q5L < +B7L[k5L] + (k5L == 3 && K5L[r7L + 1] && +p7L > +I5L ? 1 : 0); ++q5L) {
								V5L.push(q5L);
							}
						}
						if (K5L[H7L + k5L - 1] == +O7L[k5L - 1] && (k5L == 3 ? K5L[H7L + k5L - 2] == +O7L[k5L - 2] : true)) {
							for (q5L = +O7L[k5L] + (k5L == 3 && +z7L < +I5L ? 0 : 1); q5L <= 9; ++q5L) {
								V5L.push(q5L);
							}
						}
					}
				}
			}
			return V5L;
		}
		function Y5L(M5L) {
			return new Date(+('' + M5L[H7L] + M5L[H7L + 1] + M5L[H7L + 2] + M5L[H7L + 3]), +('' + M5L[r7L] + M5L[r7L + 1]) - 1, +('' + M5L[E7L] + M5L[E7L + 1]));
		}
		x5L.getVal = function(c5L) {
			return x5L._hasValue || c5L ? Y5L(x5L.getArrayVal(c5L)) : null;
		};
		return {
			placeholder: '-',
			fill: 'ltr',
			allowLeadingZero: true,
			template: F7L,
			parseValue: function(P5L) {
				var o5L, e5L = [],
					u5L = P5L || f7L.defaultValue,
					g5L = m7L.util.datetime.parseDate(f7L.dateFormat, u5L, f7L);
				if (u5L) {
					for (o5L = 0; o5L < a7L.length; ++o5L) {
						if (/m/i.test(a7L[o5L].n)) {
							e5L = e5L.concat(((f7L.getMonth(g5L) < 9 ? '0' : '') + (f7L.getMonth(g5L) + 1)).split(''));
						} else if (/d/i.test(a7L[o5L].n)) {
							e5L = e5L.concat(((f7L.getDay(g5L) < 10 ? '0' : '') + f7L.getDay(g5L)).split(''));
						} else {
							e5L = e5L.concat((f7L.getYear(g5L) + '').split(''));
						}
					}
				}
				return e5L;
			},
			formatValue: function(v5L) {
				return m7L.util.datetime.formatDate(f7L.dateFormat, Y5L(v5L), f7L);
			},
			validate: function(l5L) {
				var L5L = l5L.values,
					W5L = Y5L(L5L);
				return {
					disabled: Q5L(L5L),
					invalid: !(W5L != 'Invalid Date' && (f7L.min ? f7L.min <= W5L : true) && (f7L.max ? W5L <= f7L.max : true)) || (f7L.invalid ? x5L._indexOf(f7L.invalid, W5L) != -1 : false)
				};
			}
		};
	};
}());

(function(p5L, B5L, R5L) {
   
        var i5L = mobiscroll,
            T5L = i5L.$,
            r5L = i5L.presets.scroller,
            X5L = i5L.util,
            m5L = X5L.datetime.adjustedDate,
            a5L = X5L.jsPrefix,
            E5L = X5L.testTouch,
            f5L = X5L.getCoord,
            H5L = 'webkitAnimationEnd animationend',
            F5L = new Date(),
            O5L = {
                startYear: F5L.getFullYear() - 100,
                endYear: F5L.getFullYear() + 1,
                controls: ['calendar'],
                firstDay: 0,
                weekDays: 'short',
                maxMonthWidth: 170,
                months: 1,
                preMonths: 1,
                highlight: true,
                outerMonthChange: true,
                quickNav: true,
                yearChange: true,
                todayClass: 'mbsc-cal-today',
                btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left6',
                btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right6',
                dateText: 'Date',
                timeText: 'Time',
                calendarText: 'Calendar',
                todayText: 'Today',
                prevMonthText: 'Previous Month',
                nextMonthText: 'Next Month',
                prevYearText: 'Previous Year',
                nextYearText: 'Next Year'
            };
        r5L.calbase = function(d5L) {
            function K1L(V1L) {
                var k1L;
                A3L = T5L(this);
                P4L = false;
                if (V1L.type != 'keydown') {
                    s4L = f5L(V1L, 'X');
                    x1L = f5L(V1L, 'Y');
                    k1L = E5L(V1L, this);
                } else {
                    k1L = V1L.keyCode === 32;
                }
                if (!k3L && k1L && !A3L.hasClass('mbsc-fr-btn-d')) {
                    k3L = true;
                    setTimeout(F4L, 100);
                    if (V1L.type == 'mousedown') {
                        T5L(B5L).on('mousemove', i4L).on('mouseup', g4L);
                    }
                }
            }

            function i4L(U1L) {
                if (Math.abs(s4L - f5L(U1L, 'X')) > 7 || Math.abs(x1L - f5L(U1L, 'Y')) > 7) {
                    k3L = false;
                    A3L.removeClass('mbsc-fr-btn-a');
                }
            }

            function g4L(I1L) {
                if (I1L.type == 'touchend') {
                    I1L.preventDefault();
                }
                if (A3L && !P4L) {
                    F4L();
                }
                k3L = false;
                if (I1L.type == 'mouseup') {
                    T5L(B5L).off('mousemove', i4L).off('mouseup', g4L);
                }
            }

            function F4L() {
                P4L = true;
                if (A3L.hasClass('mbsc-cal-prev-m')) {
                    f4L();
                } else if (A3L.hasClass('mbsc-cal-next-m')) {
                    H4L();
                } else if (A3L.hasClass('mbsc-cal-prev-y')) {
                    Q1L(A3L);
                } else if (A3L.hasClass('mbsc-cal-next-y')) {
                    S1L(A3L);
                }
            }

            function q1L(G1L) {
                if (G1L < m5L(p3L.getFullYear(), p3L.getMonth(), p3L.getDate())) {
                    return false;
                }
                if (G1L > o4L) {
                    return false;
                }
                return p4L[G1L] === R5L || a4L[G1L] !== R5L;
            }

            function J4L(e1L, J1L, M1L) {
                var A1L, b1L, N1L, y1L, t1L = {},
                    c1L = Y3L + K4L;
                if (e1L) {
                    T5L.each(e1L, function(v1L, g1L) {
                        A1L = g1L.d || g1L.start || g1L;
                        b1L = A1L + '';
                        if (g1L.start && g1L.end) {
                            y1L = new Date(g1L.start);
                            while (y1L <= g1L.end) {
                                N1L = m5L(y1L.getFullYear(), y1L.getMonth(), y1L.getDate());
                                t1L[N1L] = t1L[N1L] || [];
                                t1L[N1L].push(g1L);
                                y1L.setDate(y1L.getDate() + 1);
                            }
                        } else if (A1L.getTime) {
                            N1L = m5L(A1L.getFullYear(), A1L.getMonth(), A1L.getDate());
                            t1L[N1L] = t1L[N1L] || [];
                            t1L[N1L].push(g1L);
                        } else if (!b1L.match(/w/i)) {
                            b1L = b1L.split('/');
                            if (b1L[1]) {
                                if (M1L + c1L >= 11) {
                                    N1L = z5L.getDate(J1L + 1, b1L[0] - 1, b1L[1]);
                                    t1L[N1L] = t1L[N1L] || [];
                                    t1L[N1L].push(g1L);
                                }
                                if (M1L - c1L <= 1) {
                                    N1L = z5L.getDate(J1L - 1, b1L[0] - 1, b1L[1]);
                                    t1L[N1L] = t1L[N1L] || [];
                                    t1L[N1L].push(g1L);
                                }
                                N1L = z5L.getDate(J1L, b1L[0] - 1, b1L[1]);
                                t1L[N1L] = t1L[N1L] || [];
                                t1L[N1L].push(g1L);
                            } else {
                                for (G3L = 0; G3L < N3L; G3L++) {
                                    N1L = z5L.getDate(J1L, M1L - Y3L - Q3L + G3L, b1L[0]);
                                    if (z5L.getDay(N1L) == b1L[0]) {
                                        t1L[N1L] = t1L[N1L] || [];
                                        t1L[N1L].push(g1L);
                                    }
                                }
                            }
                        } else {
                            var P1L = +b1L.replace('w', ''),
                                o1L = 0,
                                u1L = z5L.getDate(J1L, M1L - Y3L - Q3L, 1).getDay();
                            if (z5L.firstDay - u1L + 1 > 1) {
                                o1L = 7;
                            }
                            for (G3L = 0; G3L < N3L * 5; G3L++) {
                                N1L = z5L.getDate(J1L, M1L - Y3L - Q3L, G3L * 7 - o1L - u1L + 1 + P1L);
                                t1L[N1L] = t1L[N1L] || [];
                                t1L[N1L].push(g1L);
                            }
                        }
                    });
                }
                return t1L;
            }

            function B4L(W1L, L1L) {
                p4L = J4L(z5L.invalid, W1L, L1L);
                a4L = J4L(z5L.valid, W1L, L1L);
                d5L.onGenMonth(W1L, L1L);
            }

            function Y1L(T1L, m1L, f1L, i1L, H1L, X1L, R1L) {
                var l1L = '<div class="mbsc-cal-h mbsc-cal-sc-c mbsc-cal-' + T1L + '-c ' + (z5L.calendarClass || '') + '"><div class="mbsc-cal-sc"><div class="mbsc-cal-sc-p"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
                for (C5L = 1; C5L <= m1L; C5L++) {
                    if (C5L <= 12 || C5L > f1L) {
                        l1L += '<div class="mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-sc-empty"><div class="mbsc-cal-sc-cell-i">&nbsp;</div></div>';
                    } else {
                        l1L += '<div tabindex="0" role="button"' + (X1L ? ' aria-label="' + X1L[C5L - 13] + '"' : '') + ' class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-sc-m-cell mbsc-cal-sc-cell mbsc-cal-' + T1L + '-s" data-val=' + (i1L + C5L - 13) + '><div class="mbsc-cal-sc-cell-i mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-cell">' + (R1L ? R1L[C5L - 13] : i1L + C5L - 13 + H1L) + '</div></div></div>';
                    }
                    if (C5L < m1L) {
                        if (C5L % 12 === 0) {
                            l1L += '</div></div></div><div class="mbsc-cal-sc-p" style="' + (V3L ? 'top' : e3L ? 'right' : 'left') + ':' + Math.round(C5L / 12) * 100 + '%"><div class="mbsc-cal-sc-tbl"><div class="mbsc-cal-sc-row">';
                        } else if (C5L % 3 === 0) {
                            l1L += '</div><div class="mbsc-cal-sc-row">';
                        }
                    }
                }
                l1L += '</div></div></div></div></div>';
                return l1L;
            }

            function V4L(U0L, I0L) {
                var r1L, Q0L, z1L, s1L, x0L, V0L, a1L, j0L, E1L, n0L, C1L, D0L, d1L, k0L, h0L, O1L, B1L = 1,
                    Z0L = 0,
                    q0L = z5L.getDate(U0L, I0L, 1),
                    K0L = z5L.getYear(q0L),
                    Y0L = z5L.getMonth(q0L),
                    F1L = z5L.defaultValue === null && !d5L._hasValue ? null : d5L.getDate(true),
                    S0L = z5L.getDate(K0L, Y0L, 1).getDay(),
                    p1L = '<div class="mbsc-cal-table">',
                    w0L = '<div class="mbsc-cal-week-nr-c">';
                if (z5L.firstDay - S0L + 1 > 1) {
                    Z0L = 7;
                }
                for (O1L = 0; O1L < 42; O1L++) {
                    h0L = O1L + z5L.firstDay - Z0L;
                    r1L = z5L.getDate(K0L, Y0L, h0L - S0L + 1);
                    z1L = r1L.getFullYear();
                    s1L = r1L.getMonth();
                    x0L = r1L.getDate();
                    V0L = z5L.getMonth(r1L);
                    a1L = z5L.getDay(r1L);
                    k0L = z5L.getMaxDayOfMonth(z1L, s1L);
                    j0L = z1L + '-' + s1L + '-' + x0L;
                    E1L = T5L.extend({
                        valid: q1L(r1L),
                        selected: F1L && F1L.getFullYear() === z1L && F1L.getMonth() === s1L && F1L.getDate() === x0L
                    }, d5L.getDayProps(r1L, F1L));
                    n0L = E1L.valid;
                    C1L = E1L.selected;
                    Q0L = E1L.cssClass;
                    D0L = new Date(r1L).setHours(12, 0, 0, 0) === new Date().setHours(12, 0, 0, 0);
                    d1L = V0L !== Y0L;
                    c4L[j0L] = E1L;
                    if (O1L % 7 === 0) {
                        p1L += (O1L ? '</div>' : '') + '<div class="mbsc-cal-row' + (z5L.highlight && F1L && F1L - r1L >= 0 && F1L - r1L < 1000 * 60 * 60 * 24 * 7 ? ' mbsc-cal-week-hl' : '') + '">';
                    }
                    if (r3L && r1L.getDay() == 1) {
                        if (r3L == 'month' && d1L && B1L > 1) {
                            B1L = x0L == 1 ? 1 : 2;
                        } else if (r3L == 'year') {
                            B1L = z5L.getWeekNumber(r1L);
                        }
                        w0L += '<div class="mbsc-cal-week-nr"><div class="mbsc-cal-week-nr-i">' + B1L + '</div></div>';
                        B1L++;
                    }
                    p1L += '<div role="button" tabindex="-1"' + ' aria-label="' + (D0L ? z5L.todayText + ', ' : '') + z5L.dayNames[r1L.getDay()] + ', ' + z5L.monthNames[V0L] + ' ' + a1L + ' ' + (E1L.ariaLabel ? ', ' + E1L.ariaLabel : '') + '"' + (d1L && !U4L ? ' aria-hidden="true"' : '') + (C1L ? ' aria-selected="true"' : '') + (n0L ? '' : ' aria-disabled="true"') + ' data-day="' + h0L % 7 + '"' + ' data-full="' + j0L + '"' + 'class="mbsc-cal-day ' + (z5L.dayClass || '') + (C1L ? ' mbsc-cal-day-sel' : '') + (D0L ? ' ' + z5L.todayClass : '') + (Q0L ? ' ' + Q0L : '') + (a1L == 1 ? ' mbsc-cal-day-first' : '') + (a1L == k0L ? ' mbsc-cal-day-last' : '') + (d1L ? ' mbsc-cal-day-diff' : '') + (n0L ? ' mbsc-cal-day-v mbsc-fr-btn-e mbsc-fr-btn-nhl' : ' mbsc-cal-day-inv') + '"><div class="mbsc-cal-day-i ' + (C1L ? o3L : '') + ' ' + (z5L.innerDayClass || '') + '">' + '<div class="mbsc-cal-day-fg">' + a1L  + '</div>' + (E1L.markup || '') + '<div class="mbsc-cal-day-frame"></div></div></div>';
                }
                p1L += '</div></div>' + w0L + '</div>';
                return p1L;
            }

            function t4L(N0L, t0L, A0L) {
                var b0L = z5L.getDate(N0L, t0L, 1),
                    G0L = z5L.getYear(b0L),
                    J0L = z5L.getMonth(b0L),
                    y0L = G0L + N4L;
                if (c3L) {
                    if (i3L) {
                        i3L.removeClass('mbsc-cal-sc-sel').removeAttr('aria-selected').find('.mbsc-cal-sc-cell-i').removeClass(o3L);
                    }
                    if (w4L) {
                        w4L.removeClass('mbsc-cal-sc-sel').removeAttr('aria-selected').find('.mbsc-cal-sc-cell-i').removeClass(o3L);
                    }
                    i3L = T5L('.mbsc-cal-year-s[data-val="' + G0L + '"]', s5L).addClass('mbsc-cal-sc-sel').attr('aria-selected', 'true');
                    w4L = T5L('.mbsc-cal-month-s[data-val="' + J0L + '"]', s5L).addClass('mbsc-cal-sc-sel').attr('aria-selected', 'true');
                    i3L.find('.mbsc-cal-sc-cell-i').addClass(o3L);
                    w4L.find('.mbsc-cal-sc-cell-i').addClass(o3L);
                    if (I3L) {
                        I3L.scroll(i3L, A0L);
                    }
                    T5L('.mbsc-cal-month-s', s5L).removeClass('mbsc-fr-btn-d');
                    if (G0L === E3L) {
                        for (C5L = 0; C5L < z4L; C5L++) {
                            T5L('.mbsc-cal-month-s[data-val="' + C5L + '"]', s5L).addClass('mbsc-fr-btn-d');
                        }
                    }
                    if (G0L === n4L) {
                        for (C5L = j1L + 1; C5L <= 12; C5L++) {
                            T5L('.mbsc-cal-month-s[data-val="' + C5L + '"]', s5L).addClass('mbsc-fr-btn-d');
                        }
                    }
                }
                if (F3L.length == 1) {
                    F3L.attr('aria-label', G0L).html(y0L);
                }
                for (C5L = 0; C5L < x3L; ++C5L) {
                    b0L = z5L.getDate(N0L, t0L - Q3L + C5L, 1);
                    G0L = z5L.getYear(b0L);
                    J0L = z5L.getMonth(b0L);
                    y0L = G0L + N4L;
                    T5L(W4L[C5L]).attr('aria-label', z5L.monthNames[J0L] + (X3L ? '' : ' ' + G0L)).html((!X3L && j4L < S4L ? y0L + ' ' : '') + C3L[J0L] + (!X3L && j4L > S4L ? ' ' + y0L : ''));
                    if (F3L.length > 1) {
                        T5L(F3L[C5L]).html(y0L);
                    }
                }
                if (z5L.getDate(N0L, t0L - Q3L - 1, 1) < q3L) {
                    s3L(T5L('.mbsc-cal-prev-m', s5L));
                } else {
                    z3L(T5L('.mbsc-cal-prev-m', s5L));
                }
                if (z5L.getDate(N0L, t0L + x3L - Q3L, 1) > Z3L) {
                    s3L(T5L('.mbsc-cal-next-m', s5L));
                } else {
                    z3L(T5L('.mbsc-cal-next-m', s5L));
                }
                if (z5L.getDate(N0L, t0L, 1).getFullYear() <= q3L.getFullYear()) {
                    s3L(T5L('.mbsc-cal-prev-y', s5L));
                } else {
                    z3L(T5L('.mbsc-cal-prev-y', s5L));
                }
                if (z5L.getDate(N0L, t0L, 1).getFullYear() >= Z3L.getFullYear()) {
                    s3L(T5L('.mbsc-cal-next-y', s5L));
                } else {
                    z3L(T5L('.mbsc-cal-next-y', s5L));
                }
            }

            function z3L(M0L) {
                M0L.removeClass(M4L).find('.mbsc-cal-btn-txt').removeAttr('aria-disabled');
            }

            function s3L(c0L) {
                c0L.addClass(M4L).find('.mbsc-cal-btn-txt').attr('aria-disabled', 'true');
            }

            function Z1L(e0L) {
                d5L.trigger('onDayHighlight', {
                    date: e0L
                });
                if (z5L.highlight) {
                    T5L('.mbsc-cal-day-sel .mbsc-cal-day-i', K3L).removeClass(o3L);
                    T5L('.mbsc-cal-day-sel', K3L).removeClass('mbsc-cal-day-sel').removeAttr('aria-selected');
                    T5L('.mbsc-cal-week-hl', K3L).removeClass('mbsc-cal-week-hl');
                    if (z5L.defaultValue !== null || d5L._hasValue) {
                        T5L('.mbsc-cal-day[data-full="' + e0L.getFullYear() + '-' + e0L.getMonth() + '-' + e0L.getDate() + '"]', K3L).addClass('mbsc-cal-day-sel').attr('aria-selected', 'true').find('.mbsc-cal-day-i').addClass(o3L).closest('.mbsc-cal-row').addClass('mbsc-cal-week-hl');
                    }
                }
            }

            function r4L(g0L, W0L) {
                if (U3L && (t3L === 'calendar' || W0L)) {
                    var v0L, u0L, P0L = z5L.getDate(S3L, D3L, 1),
                        o0L = Math.abs((z5L.getYear(g0L) - z5L.getYear(P0L)) * 12 + z5L.getMonth(g0L) - z5L.getMonth(P0L));
                    if (d5L.needsSlide && o0L) {
                        S3L = z5L.getYear(g0L);
                        D3L = z5L.getMonth(g0L);
                        if (g0L > P0L) {
                            u0L = o0L > Y3L - Q3L + x3L - 1;
                            D3L -= u0L ? 0 : o0L - Y3L;
                            v0L = 'next';
                        } else if (g0L < P0L) {
                            u0L = o0L > Y3L + Q3L;
                            D3L += u0L ? 0 : o0L - Y3L;
                            v0L = 'prev';
                        }
                        M3L(S3L, D3L, v0L, Math.min(o0L, Y3L), u0L, true);
                    }
                    if (!W0L) {
                        L3L = g0L;
                        Z1L(g0L);
                    }
                    d5L.needsSlide = true;
                }
            }

            function d3L(L0L, l0L, T0L) {
                if (!T0L) {
                    d5L.trigger('onMonthLoading', {
                        year: L0L,
                        month: l0L
                    });
                }
                B4L(L0L, l0L);
                for (C5L = 0; C5L < N3L; C5L++) {
                    j3L[C5L].html(V4L(L0L, l0L - Q3L - Y3L + C5L));
                }
                D1L();
                k4L = R5L;
                d5L.trigger('onMonthLoaded', {
                    year: L0L,
                    month: l0L
                });
            }

            function m4L(X0L, R0L) {
                var m0L = Y3L,
                    i0L = Y3L;
                while (i0L && z5L.getDate(X0L, R0L + i0L + x3L - Q3L - 1, 1) > Z3L) {
                    i0L--;
                }
                while (m0L && z5L.getDate(X0L, R0L - m0L - Q3L, 1) < q3L) {
                    m0L--;
                }
                T5L.extend(l3L.settings, {
                    contSize: x3L * w3L,
                    snap: w3L,
                    minScroll: y3L - (e3L ? m0L : i0L) * w3L,
                    maxScroll: y3L + (e3L ? i0L : m0L) * w3L
                });
                l3L.refresh();
            }

            function D1L() {
                if (r3L) {
                    O4L.html(T5L('.mbsc-cal-week-nr-c', j3L[Y3L]).html());
                }
                T5L('.mbsc-cal-slide-a .mbsc-cal-day', m3L).attr('tabindex', 0);
            }

            function M3L(f0L, H0L, F0L, r0L, O0L, B0L, a0L) {
                if (f0L) {
                    O3L.push({
                        y: f0L,
                        m: H0L,
                        dir: F0L,
                        slideNr: r0L,
                        load: O0L,
                        active: B0L,
                        callback: a0L
                    });
                }
                if (H3L) {
                    return;
                }
                var E0L = O3L.shift(),
                    p0L;
                f0L = E0L.y;
                H0L = E0L.m;
                F0L = E0L.dir === 'next';
                r0L = E0L.slideNr;
                O0L = E0L.load;
                B0L = E0L.active;
                a0L = E0L.callback || x4L;
                p0L = z5L.getDate(f0L, H0L, 1);
                f0L = z5L.getYear(p0L);
                H0L = z5L.getMonth(p0L);
                H3L = true;
                d5L.changing = true;
                d5L.trigger('onMonthChange', {
                    year: f0L,
                    month: H0L
                });
                d5L.trigger('onMonthLoading', {
                    year: f0L,
                    month: H0L
                });
                B4L(f0L, H0L);
                if (O0L) {
                    for (C5L = 0; C5L < x3L; C5L++) {
                        j3L[F0L ? N3L - x3L + C5L : C5L].html(V4L(f0L, H0L - Q3L + C5L));
                    }
                }
                if (B0L) {
                    B3L.addClass('mbsc-cal-slide-a');
                }
                setTimeout(function() {
                    d5L.ariaMessage(z5L.monthNames[H0L] + ' ' + f0L);
                    t4L(f0L, H0L, 200);
                    y3L = F0L ? y3L - w3L * r0L * v3L : y3L + w3L * r0L * v3L;
                    l3L.scroll(y3L, B0L ? 200 : 0, false, function() {
                        var z0L;
                        if (j3L.length) {
                            B3L.removeClass('mbsc-cal-slide-a').attr('aria-hidden', 'true');
                            if (F0L) {
                                z0L = j3L.splice(0, r0L);
                                for (C5L = 0; C5L < r0L; C5L++) {
                                    j3L.push(z0L[C5L]);
                                    e4L(j3L[j3L.length - 1], +j3L[j3L.length - 2].attr('data-curr') + 100 * v3L);
                                }
                            } else {
                                z0L = j3L.splice(N3L - r0L, r0L);
                                for (C5L = r0L - 1; C5L >= 0; C5L--) {
                                    j3L.unshift(z0L[C5L]);
                                    e4L(j3L[0], +j3L[1].attr('data-curr') - 100 * v3L);
                                }
                            }
                            for (C5L = 0; C5L < r0L; C5L++) {
                                j3L[F0L ? N3L - r0L + C5L : C5L].html(V4L(f0L, H0L - Q3L - Y3L + C5L + (F0L ? N3L - r0L : 0)));
                                if (O0L) {
                                    j3L[F0L ? C5L : N3L - r0L + C5L].html(V4L(f0L, H0L - Q3L - Y3L + C5L + (F0L ? 0 : N3L - r0L)));
                                }
                            }
                            for (C5L = 0; C5L < x3L; C5L++) {
                                j3L[Y3L + C5L].addClass('mbsc-cal-slide-a').removeAttr('aria-hidden');
                            }
                            m4L(f0L, H0L);
                            H3L = false;
                        }
                        if (O3L.length) {
                            setTimeout(function() {
                                M3L();
                            }, 10);
                        } else {
                            S3L = f0L;
                            D3L = H0L;
                            d5L.changing = false;
                            T5L('.mbsc-cal-day', m3L).attr('tabindex', -1);
                            D1L();
                            if (k4L !== R5L) {
                                d3L(f0L, H0L, k4L);
                            } else {
                                d5L.trigger('onMonthLoaded', {
                                    year: f0L,
                                    month: H0L
                                });
                            }
                            a0L();
                        }
                    });
                }, 10);
            }

            function n1L() {
                var d0L = T5L(this),
                    Y2L = d5L.live,
                    s0L = d5L.getDate(true),
                    D2L = d0L.attr('data-full'),
                    x2L = D2L.split('-'),
                    C0L = m5L(x2L[0], x2L[1], x2L[2]),
                    S2L = m5L(C0L.getFullYear(), C0L.getMonth(), C0L.getDate(), s0L.getHours(), s0L.getMinutes(), s0L.getSeconds()),
                    Q2L = d0L.hasClass('mbsc-cal-day-sel');
                if (!U4L && d0L.hasClass('mbsc-cal-day-diff')) {
                    return;
                }
                if (d5L.trigger('onDayChange', T5L.extend(c4L[D2L], {
                        date: S2L,
                        target: this,
                        selected: Q2L
                    })) !== false) {
                    d5L.needsSlide = false;
                    L4L = true;
                    d5L.setDate(S2L, Y2L, 0.2, !Y2L, true);
                    if (z5L.outerMonthChange) {
                        k3L = true;
                        if (C0L < z5L.getDate(S3L, D3L - Q3L, 1)) {
                            f4L();
                        } else if (C0L > z5L.getDate(S3L, D3L - Q3L + x3L, 0)) {
                            H4L();
                        }
                        k3L = false;
                    }
                    if (d5L.live) {
                        d5L.trigger('onSet', {
                            valueText: d5L._value
                        });
                    }
                }
            }

            function e4L(h2L, j2L) {
                h2L.attr('data-curr', j2L);
                h2L[0].style[a5L + 'Transform'] = 'translate3d(' + (V3L ? '0,' + j2L + '%,' : j2L + '%,' + '0,') + '0)';
            }

            function C4L(w2L) {
                if (d5L.isVisible() && U3L) {
                    if (!d5L.changing) {
                        d3L(S3L, D3L, w2L);
                    } else {
                        k4L = w2L;
                    }
                }
            }

            function H4L() {
                if (k3L && z5L.getDate(S3L, D3L + x3L - Q3L, 1) <= Z3L && mobiscroll.KvAPo) {
                    M3L(S3L, ++D3L, 'next', 1, false, true, H4L);
                }
            }

            function f4L() {
                if (k3L && z5L.getDate(S3L, D3L - Q3L - 1, 1) >= q3L) {
                    M3L(S3L, --D3L, 'prev', 1, false, true, f4L);
                }
            }

            function S1L(n2L) {
                if (k3L && z5L.getDate(S3L, D3L, 1) <= z5L.getDate(z5L.getYear(Z3L) - 1, z5L.getMonth(Z3L) - K4L, 1)) {
                    M3L(++S3L, D3L, 'next', Y3L, true, true, function() {
                        S1L(n2L);
                    });
                } else if (k3L && !n2L.hasClass('mbsc-fr-btn-d')) {
                    M3L(z5L.getYear(Z3L), z5L.getMonth(Z3L) - K4L, 'next', Y3L, true, true);
                }
            }

            function Q1L(Z2L) {
                if (k3L && z5L.getDate(S3L, D3L, 1) >= z5L.getDate(z5L.getYear(q3L) + 1, z5L.getMonth(q3L) + Q3L, 1)) {
                    M3L(--S3L, D3L, 'prev', Y3L, true, true, function() {
                        Q1L(Z2L);
                    });
                } else if (k3L && !Z2L.hasClass('mbsc-fr-btn-d')) {
                    M3L(z5L.getYear(q3L), z5L.getMonth(q3L) + Q3L, 'prev', Y3L, true, true);
                }
            }

            function q4L(q2L, K2L) {
                if (!q2L.hasClass('mbsc-cal-v')) {
                    q2L.addClass('mbsc-cal-v' + (K2L ? '' : ' mbsc-cal-p-in')).removeClass('mbsc-cal-p-out mbsc-cal-h');
                    d5L.trigger('onSelectShow');
                }
            }

            function W3L(V2L, k2L) {
                if (V2L.hasClass('mbsc-cal-v')) {
                    V2L.removeClass('mbsc-cal-v mbsc-cal-p-in').addClass('mbsc-cal-h' + (k2L ? '' : ' mbsc-cal-p-out'));
                }
            }

            function Y4L(U2L, I2L) {
                if ((I2L || U2L).hasClass('mbsc-cal-v')) {
                    W3L(U2L);
                } else {
                    q4L(U2L);
                }
            }

            function R4L() {
                T5L(this).removeClass('mbsc-cal-p-out mbsc-cal-p-in');
            }

            function d4L(G2L) {
                return G2L[0].innerWidth || G2L.innerWidth();
            }
            var R3L, C5L, G3L, X4L, D4L, s5L, T4L, K3L, m3L, w3L, y3L, L4L, U3L, u3L, Z4L, O4L, g3L, P3L, C3L, l3L, T3L, W4L, S4L, F3L, j4L, E3L, n4L, z4L, j1L, q3L, Z3L, p3L, o4L, L3L, S3L, D3L, A4L, y4L, a4L, p4L, f3L, t3L, H3L, s4L, x1L, A3L, P4L, k3L, x3L, N3L, K4L, Q3L, k4L, U4L, w1L, I3L, i3L, w4L, b4L = this,
                B3L = [],
                j3L = [],
                O3L = [],
                h3L = {},
                c4L = {},
                x4L = function() {},
                h1L = T5L.extend({}, d5L.settings),
                z5L = T5L.extend(d5L.settings, O5L, h1L),
                E4L = z5L.weekDays == 'full' ? '' : z5L.weekDays == 'min' ? 'Min' : 'Short',
                r3L = z5L.weekCounter,
                u4L = z5L.layout || (/top|bottom|inline/.test(z5L.display) ? 'liquid' : ''),
                J3L = u4L == 'liquid' && z5L.display !== 'bubble',
                v4L = z5L.display == 'center',
                e3L = z5L.rtl,
                v3L = e3L ? -1 : 1,
                l4L = J3L ? null : z5L.calendarWidth,
                V3L = z5L.calendarScroll == 'vertical',
                c3L = z5L.quickNav,
                Y3L = z5L.preMonths,
                X3L = z5L.yearChange,
                Q4L = z5L.controls.join(','),
                a3L = (z5L.tabs === true || z5L.tabs !== false && J3L) && z5L.controls.length > 1,
                G4L = !a3L && z5L.tabs === R5L && !J3L && z5L.controls.length > 1,
                N4L = z5L.yearSuffix || '',
                o3L = z5L.activeClass || '',
                h4L = 'mbsc-cal-tab-sel ' + (z5L.activeTabClass || ''),
                I4L = z5L.activeTabInnerClass || '',
                M4L = 'mbsc-fr-btn-d ' + (z5L.disabledClass || ''),
                b3L = '',
                n3L = '';
            if (Q4L.match(/calendar/)) {
                U3L = true;
            } else {
                c3L = false;
            }
            if (Q4L.match(/date/)) {
                h3L.date = 1;
            }
            if (Q4L.match(/time/)) {
                h3L.time = 1;
            }
            if (U3L && h3L.date) {
                a3L = true;
                G4L = false;
            }
            z5L.layout = u4L;
            z5L.preset = (h3L.date || U3L ? 'date' : '') + (h3L.time ? 'time' : '');
            if (z5L.display == 'inline') {
                T5L(this).closest('[data-role="page"]').on('pageshow', function() {
                    d5L.position();
                });
            }
            d5L.changing = false;
            d5L.needsSlide = true;
            d5L.getDayProps = x4L;
            d5L.onGenMonth = x4L;
            d5L.prepareObj = J4L;
            d5L.refresh = function() {
                C4L(false);
            };
            d5L.redraw = function() {
                C4L(true);
            };
            d5L.navigate = function(b2L, J2L) {
                var N2L, t2L, y2L = d5L.isVisible();
                if (J2L && y2L) {
                    r4L(b2L, true);
                } else {
                    N2L = z5L.getYear(b2L);
                    t2L = z5L.getMonth(b2L);
                    if (y2L && (N2L != S3L || t2L != D3L)) {
                        d5L.trigger('onMonthChange', {
                            year: N2L,
                            month: t2L
                        });
                        t4L(N2L, t2L);
                        d3L(N2L, t2L);
                        m4L(b2L.getFullYear(), b2L.getMonth());
                    }
                    S3L = N2L;
                    D3L = t2L;
                }
            };
            d5L.showMonthView = function() {
                if (c3L && !P3L) {
                    W3L(n3L, true);
                    W3L(b3L, true);
                    q4L(g3L, true);
                    P3L = true;
                }
            };
            d5L.changeTab = function(A2L) {
                if (!d5L._isVisible || !h3L[A2L] || t3L == A2L) {
                    return;
                }
                t3L = A2L;
                T5L('.mbsc-cal-pnl', s5L).removeClass('mbsc-cal-p-in').addClass('mbsc-cal-pnl-h');
                T5L('.mbsc-cal-tab', s5L).removeClass(h4L).removeAttr('aria-selected').find('.mbsc-cal-tab-i').removeClass(I4L);
                T5L('.mbsc-cal-tab[data-control="' + A2L + '"]', s5L).addClass(h4L).attr('aria-selected', 'true').find('.mbsc-cal-tab-i').addClass(I4L);
                h3L[t3L].removeClass('mbsc-cal-pnl-h').addClass('mbsc-cal-p-in');
                if (t3L == 'calendar') {
                    R3L = d5L.getDate(true);
                    if (R3L.getFullYear() !== L3L.getFullYear() || R3L.getMonth() !== L3L.getMonth() || R3L.getDate() !== L3L.getDate()) {
                        r4L(R3L);
                    }
                }
                d5L.showMonthView();
                d5L.trigger('onTabChange', {
                    tab: t3L
                });
            };
            X4L = r5L.datetime.call(this, d5L);
            S4L = z5L.dateFormat.search(/m/i);
            j4L = z5L.dateFormat.search(/y/i);
            T5L.extend(X4L, {
                ariaMessage: z5L.calendarText,
                onMarkupReady: function(g2L) {
                    var c2L, M2L, e2L = '';
                    s5L = T5L(g2L.target);
                    T4L = z5L.display == 'inline' ? T5L(this).is('div') ? T5L(this) : T5L(this).parent() : d5L._window;
                    L3L = d5L.getDate(true);
                    if (!S3L) {
                        S3L = z5L.getYear(L3L);
                        D3L = z5L.getMonth(L3L);
                    }
                    y3L = 0;
                    Z4L = true;
                    H3L = false;
                    C3L = z5L.monthNames;
                    t3L = 'calendar';
                    if (z5L.min) {
                        q3L = m5L(z5L.min.getFullYear(), z5L.min.getMonth(), 1);
                        p3L = z5L.min;
                    } else {
                        q3L = m5L(z5L.startYear, 0, 1);
                        p3L = q3L;
                    }
                    if (z5L.max) {
                        Z3L = m5L(z5L.max.getFullYear(), z5L.max.getMonth(), 1);
                        o4L = z5L.max;
                    } else {
                        Z3L = m5L(z5L.endYear, 11, 31, 23, 59, 59);
                        o4L = Z3L;
                    }
                    s5L.addClass('mbsc-calendar');
                    D4L = T5L('.mbsc-fr-popup', s5L);
                    f3L = T5L('.mbsc-fr-c', s5L);
                    if (h3L.date) {
                        h3L.date = T5L('.mbsc-sc-whl-gr-c', s5L).eq(0);
                    } else if (U3L) {
                        T5L('.mbsc-sc-whl-gr-c', s5L).eq(0).addClass('mbsc-cal-hdn');
                    }
                    if (h3L.time) {
                        h3L.time = T5L('.mbsc-sc-whl-gr-c', s5L).eq(1);
                    }
                    if (U3L) {
                        x3L = z5L.months == 'auto' ? Math.max(1, Math.min(3, Math.floor((l4L || d4L(T4L)) / 280))) : z5L.months;
                        N3L = x3L + 2 * Y3L;
                        K4L = Math.floor(x3L / 2);
                        Q3L = Math.round(x3L / 2) - 1;
                        U4L = z5L.showOuterDays === R5L ? x3L < 2 : z5L.showOuterDays;
                        V3L = V3L && x3L < 2;
                        M2L = '<div class="mbsc-cal-btnw"><div class="' + (e3L ? 'mbsc-cal-next-m' : 'mbsc-cal-prev-m') + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (z5L.btnCalPrevClass || '') + '"' + ' aria-label="' + z5L.prevMonthText + '"></div></div>';
                        for (C5L = 0; C5L < x3L; ++C5L) {
                            M2L += '<div class="mbsc-cal-btnw-m" style="width: ' + 100 / x3L + '%"><span role="button" class="mbsc-cal-month"></span></div>';
                        }
                        M2L += '<div class="' + (e3L ? 'mbsc-cal-prev-m' : 'mbsc-cal-next-m') + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (z5L.btnCalNextClass || '') + '"' + ' aria-label="' + z5L.nextMonthText + '"></div></div></div>';
                        if (X3L) {
                            e2L = '<div class="mbsc-cal-btnw"><div class="' + (e3L ? 'mbsc-cal-next-y' : 'mbsc-cal-prev-y') + ' mbsc-cal-prev mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (z5L.btnCalPrevClass || '') + '"' + ' aria-label="' + z5L.prevYearText + '"></div></div>' + '<span role="button" class="mbsc-cal-year"></span>' + '<div class="' + (e3L ? 'mbsc-cal-prev-y' : 'mbsc-cal-next-y') + ' mbsc-cal-next mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"><div role="button" tabindex="0" class="mbsc-cal-btn-txt ' + (z5L.btnCalNextClass || '') + '"' + ' aria-label="' + z5L.nextYearText + '"></div></div></div>';
                        }
                        if (c3L) {
                            E3L = z5L.getYear(q3L);
                            n4L = z5L.getYear(Z3L);
                            z4L = z5L.getMonth(q3L);
                            j1L = z5L.getMonth(Z3L);
                            y4L = Math.ceil((n4L - E3L + 1) / 12) + 2;
                            b3L = Y1L('month', 36, 24, 0, '', z5L.monthNames, z5L.monthNamesShort);
                            n3L = Y1L('year', y4L * 12, n4L - E3L + 13, E3L, N4L);
                        }
                        u3L = '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal mbsc-cal-hl-now' + (x3L > 1 ? ' mbsc-cal-multi ' : '') + (r3L ? ' mbsc-cal-weeks ' : '') + (V3L ? ' mbsc-cal-vertical' : '') + (U4L ? '' : ' mbsc-cal-hide-diff ') + (z5L.calendarClass || '') + '">' + '<div class="mbsc-cal-header"><div class="mbsc-cal-btnc ' + (X3L ? 'mbsc-cal-btnc-ym' : 'mbsc-cal-btnc-m') + '">' + (j4L < S4L || x3L > 1 ? e2L + M2L : M2L + e2L) + '</div></div><div class="mbsc-cal-body"><div class="mbsc-cal-m-c mbsc-cal-v"><div class="mbsc-cal-days-c">';
                        for (G3L = 0; G3L < x3L; ++G3L) {
                            u3L += '<div aria-hidden="true" class="mbsc-cal-days" style="width: ' + 100 / x3L + '%"><table cellpadding="0" cellspacing="0"><tr>';
                            for (C5L = 0; C5L < 7; C5L++) {
                                u3L += '<th>' + z5L['dayNames' + E4L][(C5L + z5L.firstDay) % 7] + '</th>';
                            }
                            u3L += '</tr></table></div>';
                        }
                        u3L += '</div>' + '<div class="mbsc-cal-week-nrs-c ' + (z5L.weekNrClass || '') + '">' + '<div class="mbsc-cal-week-nrs"></div>' + '</div>' + '<div class="mbsc-cal-anim-c ' + (z5L.calendarClass || '') + '">' + '<div class="mbsc-cal-anim">';
                        for (C5L = 0; C5L < x3L + 2 * Y3L; C5L++) {
                            u3L += '<div class="mbsc-cal-slide" aria-hidden="true"></div>';
                        }
                        u3L += '</div></div></div>' + b3L + n3L + '</div></div></div>';
                        h3L.calendar = T5L(u3L);
                    }
                    T5L.each(z5L.controls, function(u2L, o2L) {
                        h3L[o2L] = T5L('<div class="mbsc-cal-pnl" id="' + (b4L.id + '_dw_pnl_' + u2L) + '"></div>').append(T5L('<div class="mbsc-cal-pnl-i"></div>').append(h3L[o2L])).appendTo(f3L);
                    });
                    c2L = '<div class="mbsc-cal-tabs"><ul role="tablist">';
                    T5L.each(z5L.controls, function(P2L, v2L) {
                        if (h3L[v2L]) {
                            c2L += '<li role="tab" aria-controls="' + (b4L.id + '_dw_pnl_' + P2L) + '" class="mbsc-cal-tab ' + (P2L ? '' : h4L) + '" data-control="' + v2L + '"><a href="#" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-cal-tab-i ' + (!P2L ? I4L : '') + '">' + z5L[v2L + 'Text'] + '</a></li>';
                        }
                    });
                    c2L += '</ul></div>';
                    f3L.before(c2L);
                    K3L = T5L('.mbsc-cal-anim-c', s5L);
                    m3L = T5L('.mbsc-cal-anim', K3L);
                    O4L = T5L('.mbsc-cal-week-nrs', s5L);
                    if (U3L) {
                        P3L = true;
                        B3L = T5L('.mbsc-cal-slide', m3L).each(function(L2L, W2L) {
                            j3L.push(T5L(W2L));
                        });
                        B3L.slice(Y3L, Y3L + x3L).addClass('mbsc-cal-slide-a').removeAttr('aria-hidden');
                        for (C5L = 0; C5L < N3L; C5L++) {
                            e4L(j3L[C5L], 100 * (C5L - Y3L) * v3L);
                        }
                        d3L(S3L, D3L);
                        l3L = new i5L.classes.ScrollView(K3L[0], {
                            axis: V3L ? 'Y' : 'X',
                            easing: '',
                            contSize: 0,
                            snap: 1,
                            maxSnapScroll: Y3L,
                            moveElement: m3L,
                            mousewheel: z5L.mousewheel,
                            time: 200,
                            lock: true,
                            stopProp: false,
                            minScroll: -Infinity,
                            maxScroll: Infinity,
                            onAnimationEnd: function(T2L) {
                                var l2L = Math.round(((V3L ? T2L.posY : T2L.posX) - y3L) / w3L) * v3L;
                                if (l2L) {
                                    M3L(S3L, D3L - l2L, l2L > 0 ? 'prev' : 'next', l2L > 0 ? l2L : -l2L);
                                }
                            }
                        });
                    }
                    W4L = T5L('.mbsc-cal-month', s5L);
                    F3L = T5L('.mbsc-cal-year', s5L);
                    g3L = T5L('.mbsc-cal-m-c', s5L);
                    if (c3L) {
                        g3L.on(H5L, R4L);
                        b3L = T5L('.mbsc-cal-month-c', s5L).on(H5L, R4L);
                        n3L = T5L('.mbsc-cal-year-c', s5L).on(H5L, R4L);
                        w1L = T5L('.mbsc-cal-sc-p', s5L);
                        A4L = {
                            axis: V3L ? 'Y' : 'X',
                            contSize: 0,
                            snap: 1,
                            maxSnapScroll: 1,
                            rtl: z5L.rtl,
                            mousewheel: z5L.mousewheel,
                            time: 200,
                            stopProp: false,
                            minScroll: -Infinity,
                            maxScroll: Infinity
                        };
                        I3L = new i5L.classes.ScrollView(n3L[0], A4L);
                        T3L = new i5L.classes.ScrollView(b3L[0], A4L);
                    }
                    if (J3L) {
                        s5L.addClass('mbsc-cal-liq');
                    } else {
                        T5L('.mbsc-cal', s5L).width(l4L || 280 * x3L);
                    }
                    if (z5L.calendarHeight) {
                        T5L('.mbsc-cal-anim-c', s5L).height(z5L.calendarHeight);
                    }
                    d5L.tap(K3L, function(i2L) {
                        var m2L = T5L(i2L.target);
                        if (!H3L && !l3L.scrolled && z5L.readonly !== true) {
                            m2L = m2L.closest('.mbsc-cal-day', this);
                            if (m2L.hasClass('mbsc-cal-day-v')) {
                                n1L.call(m2L[0]);
                            }
                        }
                    });
                    T5L('.mbsc-cal-btn', s5L).on('touchstart mousedown keydown', K1L).on('touchmove', i4L).on('touchend touchcancel keyup', g4L);
                    T5L('.mbsc-cal-tab', s5L).on('touchstart click', function(X2L) {
                        if (E5L(X2L, this)) {
                            d5L.changeTab(T5L(this).attr('data-control'));
                        }
                    });
                    if (c3L) {
                        d5L.tap(T5L('.mbsc-cal-month', s5L), function() {
                            if (!n3L.hasClass('mbsc-cal-v')) {
                                Y4L(g3L);
                                P3L = g3L.hasClass('mbsc-cal-v');
                            }
                            Y4L(b3L);
                            W3L(n3L);
                        });
                        d5L.tap(T5L('.mbsc-cal-year', s5L), function() {
                            if (!n3L.hasClass('mbsc-cal-v')) {
                                I3L.scroll(i3L);
                            }
                            if (!b3L.hasClass('mbsc-cal-v')) {
                                Y4L(g3L);
                                P3L = g3L.hasClass('mbsc-cal-v');
                            }
                            Y4L(n3L);
                            W3L(b3L);
                        });
                        d5L.tap(T5L('.mbsc-cal-month-s', s5L), function() {
                            if (!T3L.scrolled && !T5L(this).hasClass('mbsc-fr-btn-d')) {
                                d5L.navigate(z5L.getDate(S3L, T5L(this).attr('data-val'), 1));
                            }
                        });
                        d5L.tap(T5L('.mbsc-cal-year-s', s5L), function() {
                            if (!I3L.scrolled) {
                                R3L = z5L.getDate(T5L(this).attr('data-val'), D3L, 1);
                                d5L.navigate(new Date(X5L.constrain(R3L, q3L, Z3L)));
                            }
                        });
                        d5L.tap(n3L, function() {
                            if (!I3L.scrolled) {
                                W3L(n3L);
                                q4L(g3L);
                                P3L = true;
                            }
                        });
                        d5L.tap(b3L, function() {
                            if (!T3L.scrolled) {
                                W3L(b3L);
                                q4L(g3L);
                                P3L = true;
                            }
                        });
                    }
                },
                onShow: function() {
                    if (U3L) {
                        t4L(S3L, D3L);
                    }
                },
                onPosition: function(z2L) {
                    var O2L, F2L, p2L, E2L, H2L, R2L, r2L = 0,
                        f2L = 0,
                        a2L = 0,
                        B2L = z2L.windowHeight;
                    if (J3L) {
                        if (v4L) {
                            K3L.height('');
                        }
                        f3L.height('');
                        m3L.width('');
                    }
                    if (w3L) {
                        H2L = w3L;
                    }
                    if (U3L) {
                        w3L = Math.round(Math.round(K3L[0][V3L ? 'offsetHeight' : 'offsetWidth']) / x3L);
                    }
                    if (w3L) {
                        s5L.removeClass('mbsc-cal-m mbsc-cal-l');
                        if (w3L > 1024) {
                            s5L.addClass('mbsc-cal-l');
                        } else if (w3L > 640) {
                            s5L.addClass('mbsc-cal-m');
                        }
                    }
                    if (a3L && (Z4L || J3L) || G4L) {
                        T5L('.mbsc-cal-pnl', s5L).removeClass('mbsc-cal-pnl-h');
                        T5L.each(h3L, function(d2L, C2L) {
                            O2L = C2L[0].offsetWidth;
                            r2L = Math.max(r2L, O2L);
                            f2L = Math.max(f2L, C2L[0].offsetHeight);
                            a2L += O2L;
                        });
                        if (a3L || G4L && a2L > d4L(T4L)) {
                            F2L = true;
                            t3L = T5L('.mbsc-cal-tabs .mbsc-cal-tab-sel', s5L).attr('data-control');
                            D4L.addClass('mbsc-cal-tabbed');
                        } else {
                            t3L = 'calendar';
                            r2L = '';
                            f2L = '';
                            D4L.removeClass('mbsc-cal-tabbed');
                            f3L.css({
                                width: '',
                                height: ''
                            });
                        }
                    }
                    if (J3L && v4L && U3L) {
                        d5L._isFullScreen = true;
                        if (F2L) {
                            f3L.height(h3L.calendar[0].offsetHeight);
                        }
                        E2L = D4L[0].offsetHeight;
                        if (B2L >= E2L) {
                            K3L.height(B2L - E2L + K3L[0].offsetHeight);
                        }
                        f2L = Math.max(f2L, h3L.calendar[0].offsetHeight);
                    }
                    if (F2L) {
                        f3L.css({
                            width: J3L ? '' : r2L,
                            height: f2L
                        });
                        if (U3L) {
                            w3L = Math.round(Math.round(K3L[0][V3L ? 'offsetHeight' : 'offsetWidth']) / x3L);
                        }
                    }
                    if (w3L) {
                        m3L[V3L ? 'height' : 'width'](w3L);
                        if (w3L !== H2L) {
                            if (X3L) {
                                C3L = z5L.maxMonthWidth > T5L('.mbsc-cal-btnw-m', s5L).width() ? z5L.monthNamesShort : z5L.monthNames;
                                for (C5L = 0; C5L < x3L; ++C5L) {
                                    T5L(W4L[C5L]).text(C3L[z5L.getMonth(z5L.getDate(S3L, D3L - Q3L + C5L, 1))]);
                                }
                            }
                            if (c3L) {
                                R2L = n3L[0][V3L ? 'offsetHeight' : 'offsetWidth'];
                                T5L.extend(I3L.settings, {
                                    contSize: R2L,
                                    snap: R2L,
                                    minScroll: (2 - y4L) * R2L,
                                    maxScroll: -R2L
                                });
                                T5L.extend(T3L.settings, {
                                    contSize: R2L,
                                    snap: R2L,
                                    minScroll: -R2L,
                                    maxScroll: -R2L
                                });
                                I3L.refresh();
                                T3L.refresh();
                                if (n3L.hasClass('mbsc-cal-v')) {
                                    I3L.scroll(i3L);
                                }
                            }
                            if (J3L && !Z4L && H2L) {
                                p2L = y3L / H2L;
                                y3L = p2L * w3L;
                            }
                            m4L(S3L, D3L);
                        }
                    } else {
                        w3L = H2L;
                    }
                    if (F2L) {
                        T5L('.mbsc-cal-pnl', s5L).addClass('mbsc-cal-pnl-h');
                        h3L[t3L].removeClass('mbsc-cal-pnl-h');
                    }
                    d5L.trigger('onCalResize');
                    Z4L = false;
                },
                onHide: function() {
                    O3L = [];
                    j3L = [];
                    t3L = null;
                    S3L = null;
                    D3L = null;
                    H3L = true;
                    w3L = 0;
                    if (l3L) {
                        l3L.destroy();
                    }
                    if (c3L && I3L && T3L) {
                        I3L.destroy();
                        T3L.destroy();
                    }
                },
                onValidated: function(D8L) {
                    var x8L, Y8L, s2L;
                    Y8L = d5L.getDate(true);
                    if (L4L) {
                        x8L = 'calendar';
                    } else {
                        for (s2L in d5L.order) {
                            if (s2L && d5L.order[s2L] === D8L) {
                                x8L = /[mdy]/.test(s2L) ? 'date' : 'time';
                            }
                        }
                    }
                    d5L.trigger('onSetDate', {
                        date: Y8L,
                        control: x8L
                    });
                    r4L(Y8L);
                    L4L = false;
                }
            });
            return X4L;
        };
})(window, document);

(function(V8L, k8L, w8L) {
	var h8L = mobiscroll,
		S8L = h8L.$,
		Q8L = S8L.extend,
		j8L = h8L.util,
		n8L = j8L.datetime,
		q8L = n8L.adjustedDate,
		Z8L = h8L.presets.scroller,
		K8L = {};
	h8L.presetShort('calendar');
	Z8L.calendar = function(G8L) {
		function l8L(T8L) {
			if (T8L) {
				if (e8L[T8L]) {
					return e8L[T8L];
				}
				var m8L = S8L('<div style="background-color:' + T8L + ';"></div>').appendTo('body'),
					R8L = V8L.getComputedStyle ? getComputedStyle(m8L[0]) : m8L[0].style,
					i8L = R8L.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, '').split(','),
					f8L = i8L[0] * 0.299 + i8L[1] * 0.587 + i8L[2] * 0.114,
					X8L = f8L > 130 ? '#000' : '#fff';
				m8L.remove();
				e8L[T8L] = X8L;
				return X8L;
			}
		}
		function b8L(H8L) {
			return q8L(H8L.getFullYear(), H8L.getMonth(), H8L.getDate());
		}
		function L8L(r8L) {
			I8L = {};
			if (r8L && r8L.length) {
				for (t8L = 0; t8L < r8L.length; t8L++) {
					I8L[b8L(r8L[t8L])] = r8L[t8L];
				}
			}
		}
		function J8L() {
			G8L.refresh();
		}
		var A8L, M8L, W8L, t8L, g8L, v8L, c8L, e8L = {},
			P8L = Q8L({}, G8L.settings),
			U8L = Q8L(G8L.settings, K8L, P8L),
			u8L = U8L.activeClass || '',
			N8L = U8L.select == 'multiple' || U8L.select > 1 || U8L.selectType == 'week',
			o8L = j8L.isNumeric(U8L.select) ? U8L.select : Infinity,
			y8L = !!U8L.events,
			I8L = {};
		c8L = Z8L.calbase.call(this, G8L);
		A8L = Q8L({}, c8L);
		W8L = U8L.firstSelectDay === w8L ? U8L.firstDay : U8L.firstSelectDay;
		if (N8L && U8L.defaultValue && U8L.defaultValue.length) {
			for (t8L = 0; t8L < U8L.defaultValue.length; t8L++) {
				I8L[b8L(U8L.defaultValue[t8L])] = U8L.defaultValue[t8L];
			}
		}
		G8L.onGenMonth = function(F8L, E8L) {
			g8L = G8L.prepareObj(U8L.events || U8L.marked, F8L, E8L);
		};
		G8L.getDayProps = function(d8L) {
			var B8L, s8L = N8L ? I8L[d8L] !== w8L : w8L,
				O8L = g8L[d8L] ? g8L[d8L] : false,
				a8L = O8L && O8L[0] && O8L[0].text,
				C8L = O8L && O8L[0] && O8L[0].color,
				x6L = y8L && a8L ? l8L(C8L) : '',
				p8L = '',
				z8L = '';
			if (O8L) {
				for (B8L = 0; B8L < O8L.length; B8L++) {
					if (O8L[B8L].icon) {
						p8L += '<span class="mbsc-ic mbsc-ic-' + O8L[B8L].icon + '"' + (O8L[B8L].text ? '' : O8L[B8L].color ? ' style="color:' + O8L[B8L].color + ';"' : '') + '></span>\n';
					}
				}
				z8L = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
				for (B8L = 0; B8L < O8L.length; B8L++) {
					z8L += '<div class="mbsc-cal-day-m-c"' + (O8L[B8L].color ? ' style="background:' + O8L[B8L].color + ';"' : '') + '></div>';
				}
				z8L += '</div></div>';
			}
			return {
				marked: O8L,
				selected: s8L,
				cssClass: O8L ? 'mbsc-cal-day-marked' : '',
				ariaLabel: y8L ? a8L : '',
				markup: y8L && a8L ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + S8L('<div>' + a8L + '</div>').text() + '"' + (C8L ? ' style="background:' + C8L + ';color:' + x6L + ';text-shadow:none;"' : '') + '>' + p8L + a8L + '</div></div>' : y8L && p8L ? '<div class="mbsc-cal-day-ic-c">' + p8L + '</div>' : O8L ? z8L : ''
			};
		};
		G8L.addValue = function(Y6L) {
			I8L[b8L(Y6L)] = Y6L;
			J8L();
		};
		G8L.removeValue = function(D6L) {
			delete I8L[b8L(D6L)];
			J8L();
		};
		G8L.setVal = function(S6L, Q6L, j6L, h6L, w6L) {
			if (N8L) {
				L8L(S6L);
				S6L = S6L ? S6L[0] : null;
			}
			G8L._setVal(S6L, Q6L, j6L, h6L, w6L);
			J8L();
		};
		G8L.getVal = function(n6L) {
			if (N8L) {
				return j8L.objectToArray(I8L);
			}
			return G8L.getDate(n6L);
		};
		Q8L(c8L, {
			highlight: !N8L,
			outerMonthChange: !N8L,
			parseValue: function(Z6L) {
				var q6L, K6L;
				if (N8L && Z6L && typeof Z6L === 'string') {
					I8L = {};
					Z6L = Z6L.split(',');
					for (q6L = 0; q6L < Z6L.length; q6L++) {
						K6L = n8L.parseDate(G8L.format, Z6L[q6L].replace(/^\s+|\s+$/g, ''), U8L);
						I8L[b8L(K6L)] = K6L;
					}
					Z6L = Z6L[0];
				}
				if (N8L && U8L.defaultValue && U8L.defaultValue.length) {
					U8L.defaultValue = U8L.defaultValue[0];
				}
				return A8L.parseValue.call(this, Z6L);
			},
			formatValue: function(U6L) {
				var k6L, V6L = [];
				if (N8L) {
					for (k6L in I8L) {
						V6L.push(n8L.formatDate(G8L.format, I8L[k6L], U8L));
					}
					return V6L.join(', ');
				}
				return A8L.formatValue.call(this, U6L);
			},
			onClear: function() {
				if (N8L) {
					I8L = {};
					G8L.refresh();
				}
			},
			onBeforeShow: function() {
				if (U8L.setOnDayTap === w8L && (!U8L.buttons || !U8L.buttons.length)) {
					U8L.setOnDayTap = true;
				}
				if (U8L.setOnDayTap && U8L.display != 'inline') {
					U8L.outerMonthChange = false;
				}
				if (U8L.counter && N8L) {
					U8L.headerText = function() {
						var I6L = 0,
							G6L = U8L.selectType == 'week' ? 7 : 1;
						S8L.each(I8L, function() {
							I6L++;
						});
						I6L = Math.round(I6L / G6L);
						return (I6L > 1 ? U8L.selectedPluralText || U8L.selectedText : U8L.selectedText).replace(/{count}/, I6L);
					};
				}
			},
			onMarkupReady: function(N6L) {
				A8L.onMarkupReady.call(this, N6L);
				M8L = S8L(N6L.target);
				if (N8L) {
					S8L('.mbsc-fr-hdr', M8L).attr('aria-live', 'off');
					v8L = Q8L({}, I8L);
				}
				if (y8L) {
					S8L('.mbsc-cal', M8L).addClass('mbsc-cal-ev');
				}
			},
			onDayChange: function(A6L) {
				var M6L = A6L.date,
					t6L = b8L(M6L),
					g6L = S8L(A6L.target),
					c6L = A6L.selected;
				if (N8L) {
					if (U8L.selectType == 'week') {
						var y6L, J6L, b6L = t6L.getDay() - W8L;
						b6L = b6L < 0 ? 7 + b6L : b6L;
						if (U8L.select != 'multiple') {
							I8L = {};
						}
						for (y6L = 0; y6L < 7; y6L++) {
							J6L = q8L(t6L.getFullYear(), t6L.getMonth(), t6L.getDate() - b6L + y6L);
							if (c6L) {
								delete I8L[J6L];
							} else if (j8L.objectToArray(I8L).length / 7 < o8L) {
								I8L[J6L] = J6L;
							}
						}
						J8L();
					} else {
						var e6L = S8L('.mbsc-cal .mbsc-cal-day[data-full="' + g6L.attr('data-full') + '"]', M8L);
						if (c6L) {
							e6L.removeClass('mbsc-cal-day-sel').removeAttr('aria-selected').find('.mbsc-cal-day-i').removeClass(u8L);
							delete I8L[t6L];
						} else if (j8L.objectToArray(I8L).length < o8L) {
							e6L.addClass('mbsc-cal-day-sel').attr('aria-selected', 'true').find('.mbsc-cal-day-i').addClass(u8L);
							I8L[t6L] = t6L;
						}
					}
				}
				if (U8L.setOnDayTap && U8L.select != 'multiple' && U8L.display != 'inline') {
					G8L.needsSlide = false;
					G8L.setDate(M6L);
					G8L.select();
					return false;
				}
			},
			onCancel: function() {
				if (!G8L.live && N8L) {
					I8L = Q8L({}, v8L);
				}
			}
		});
		return c8L;
	};
}(window, document));
(function(i6L, X6L, L6L) {
	var P6L = mobiscroll,
		o6L = P6L.$,
		u6L = o6L.extend,
		T6L = P6L.util,
		v6L = T6L.datetime,
		l6L = v6L.adjustedDate,
		W6L = P6L.presets.scroller,
		m6L = {
			labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs'],
			eventText: 'event',
			eventsText: 'events'
		};
	P6L.presetShort('eventcalendar');
	W6L.eventcalendar = function(R6L) {
		function V9Y(G9Y) {
			if (G9Y) {
				if (x9Y[G9Y]) {
					return x9Y[G9Y];
				}
				var N9Y = o6L('<div style="background-color:' + G9Y + ';"></div>').appendTo('body'),
					y9Y = i6L.getComputedStyle ? getComputedStyle(N9Y[0]) : N9Y[0].style,
					t9Y = y9Y.backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, '').split(','),
					J9Y = t9Y[0] * 0.299 + t9Y[1] * 0.587 + t9Y[2] * 0.114,
					b9Y = J9Y > 130 ? '#000' : '#fff';
				N9Y.remove();
				x9Y[G9Y] = b9Y;
				return b9Y;
			}
		}
		function k9Y(u9Y) {
			var A9Y = f6L.labelsShort,
				c9Y = Math.abs(u9Y) / 1000,
				e9Y = c9Y / 60,
				g9Y = e9Y / 60,
				M9Y = g9Y / 24,
				o9Y = M9Y / 365;
			return c9Y < 45 && Math.round(c9Y) + ' ' + A9Y[5].toLowerCase() || e9Y < 45 && Math.round(e9Y) + ' ' + A9Y[4].toLowerCase() || g9Y < 24 && Math.round(g9Y) + ' ' + A9Y[3].toLowerCase() || M9Y < 30 && Math.round(M9Y) + ' ' + A9Y[2].toLowerCase() || M9Y < 365 && Math.round(M9Y / 30) + ' ' + A9Y[1].toLowerCase() || Math.round(o9Y) + ' ' + A9Y[0].toLowerCase();
		}
		function w9Y(P9Y) {
			return P9Y.sort(function(v9Y, W9Y) {
				var L9Y = v9Y.d || v9Y.start,
					l9Y = W9Y.d || W9Y.start,
					T9Y = !L9Y.getTime ? 0 : v9Y.start && v9Y.end && v9Y.start.toDateString() !== v9Y.end.toDateString() ? 1 : L9Y.getTime(),
					m9Y = !l9Y.getTime ? 0 : W9Y.start && W9Y.end && W9Y.start.toDateString() !== W9Y.end.toDateString() ? 1 : l9Y.getTime();
				return T9Y - m9Y;
			});
		}
		function n9Y(i9Y) {
			var f9Y, H9Y = o6L('.mbsc-cal-c', E6L)[0].offsetHeight,
				r9Y = i9Y[0].offsetHeight,
				F9Y = i9Y[0].offsetWidth,
				R9Y = i9Y.offset().top - o6L('.mbsc-cal-c', E6L).offset().top,
				X9Y = i9Y.closest('.mbsc-cal-row').index() < 2;
			f9Y = H6L.addClass('mbsc-cal-events-t').css({
				top: X9Y ? R9Y + r9Y : '0',
				bottom: X9Y ? '0' : H9Y - R9Y
			}).addClass('mbsc-cal-events-v').height();
			H6L.css(X9Y ? 'bottom' : 'top', 'auto').removeClass('mbsc-cal-events-t');
			s6L.css('max-height', f9Y);
			a6L.refresh();
			a6L.scroll(0);
			if (X9Y) {
				H6L.addClass('mbsc-cal-events-b');
			} else {
				H6L.removeClass('mbsc-cal-events-b');
			}
			o6L('.mbsc-cal-events-arr', H6L).css('left', i9Y.offset().left - H6L.offset().left + F9Y / 2);
		}
		function K9Y(s9Y, d9Y) {
			var E9Y = B6L[s9Y];
			if (E9Y) {
				var p9Y, B9Y, C9Y, O9Y, z9Y, x7Y, a9Y = '<ul class="mbsc-cal-event-list">';
				I9Y = 0;
				F6L = d9Y;
				d9Y.addClass(h9Y).find('.mbsc-cal-day-i').addClass(j9Y);
				if (d9Y.hasClass(d6L)) {
					d9Y.attr('data-hl', 'true').removeClass(d6L);
				}
				w9Y(E9Y);
				o6L.each(E9Y, function(D7Y, Y7Y) {
					O9Y = Y7Y.d || Y7Y.start;
					z9Y = Y7Y.start && Y7Y.end && Y7Y.start.toDateString() !== Y7Y.end.toDateString();
					C9Y = Y7Y.color;
					x7Y = V9Y(C9Y);
					p9Y = '';
					B9Y = '';
					if (O9Y.getTime) {
						p9Y = v6L.formatDate((z9Y ? 'MM d yy ' : '') + f6L.timeFormat, O9Y);
					}
					if (Y7Y.end) {
						B9Y = v6L.formatDate((z9Y ? 'MM d yy ' : '') + f6L.timeFormat, Y7Y.end);
					}
					a9Y += '<li role="button" aria-label="' + Y7Y.text + (p9Y ? ', ' + f6L.fromText + ' ' + p9Y : '') + (B9Y ? ', ' + f6L.toText + ' ' + B9Y : '') + '" class="mbsc-cal-event">' + '<div class="mbsc-cal-event-color" style="' + (C9Y ? 'background:' + C9Y + ';' : '') + '"></div>' + '<div class="mbsc-cal-event-text">' + (O9Y.getTime && !z9Y ? '<div class="mbsc-cal-event-time">' + v6L.formatDate(f6L.timeFormat, O9Y) + '</div>' : '') + Y7Y.text + '</div>' + (Y7Y.start && Y7Y.end ? '<div class="mbsc-cal-event-dur">' + k9Y(Y7Y.end - Y7Y.start) + '</div>' : '') + '</li>';
				});
				a9Y += '</ul>';
				Q9Y.html(a9Y);
				R6L.trigger('onEventBubbleShow', {
					target: F6L[0],
					eventList: H6L[0]
				});
				n9Y(F6L);
				R6L.tap(o6L('.mbsc-cal-event', Q9Y), function(S7Y) {
					if (!a6L.scrolled) {
						R6L.trigger('onEventSelect', {
							domEvent: S7Y,
							event: E9Y[o6L(this).index()],
							date: s9Y
						});
					}
				});
				Y9Y = true;
			}
		}
		function z6L() {
			if (H6L) {
				H6L.removeClass('mbsc-cal-events-v');
			}
			if (F6L) {
				F6L.removeClass(h9Y).find('.mbsc-cal-day-i').removeClass(j9Y);
				if (F6L.attr('data-hl')) {
					F6L.removeAttr('data-hl').addClass(d6L);
				}
			}
			Y9Y = false;
		}
		function S9Y() {
			z6L();
			R6L.redraw();
		}
		function U9Y(Q7Y) {
			return l6L(Q7Y.getFullYear(), Q7Y.getMonth(), Q7Y.getDate());
		}
		var q9Y, E6L, H6L, F6L, B6L, a6L, s6L, Q9Y, Y9Y, I9Y, D9Y, p6L, x9Y = {},
			Z9Y = u6L({}, R6L.settings),
			f6L = u6L(R6L.settings, m6L, Z9Y),
			h9Y = 'mbsc-cal-day-sel mbsc-cal-day-ev',
			d6L = 'mbsc-cal-day-hl',
			j9Y = f6L.activeClass || '',
			O6L = f6L.showEventCount,
			C6L = 0,
			r6L = u6L(true, [], f6L.data);
		D9Y = W6L.calbase.call(this, R6L);
		q9Y = u6L({}, D9Y);
		o6L.each(r6L, function(h7Y, j7Y) {
			if (j7Y._id === L6L) {
				j7Y._id = C6L++;
			}
		});
		R6L.onGenMonth = function(w7Y, n7Y) {
			B6L = R6L.prepareObj(r6L, w7Y, n7Y);
		};
		R6L.getDayProps = function(U7Y) {
			var q7Y, Z7Y = B6L[U7Y] ? B6L[U7Y] : false,
				K7Y = Z7Y ? B6L[U7Y].length + ' ' + (B6L[U7Y].length > 1 ? f6L.eventsText : f6L.eventText) : 0,
				I7Y = Z7Y && Z7Y[0] && Z7Y[0].color,
				G7Y = O6L && K7Y ? V9Y(I7Y) : '',
				V7Y = '',
				k7Y = '';
			if (Z7Y) {
				for (q7Y = 0; q7Y < Z7Y.length; q7Y++) {
					if (Z7Y[q7Y].icon) {
						V7Y += '<span class="mbsc-ic mbsc-ic-' + Z7Y[q7Y].icon + '"' + (Z7Y[q7Y].text ? '' : Z7Y[q7Y].color ? ' style="color:' + Z7Y[q7Y].color + ';"' : '') + '></span>\n';
					}
				}
				k7Y = '<div class="mbsc-cal-day-m"><div class="mbsc-cal-day-m-t">';
				for (q7Y = 0; q7Y < Z7Y.length; q7Y++) {
					k7Y += '<div class="mbsc-cal-day-m-c"' + (Z7Y[q7Y].color ? ' style="background:' + Z7Y[q7Y].color + ';"' : '') + '></div>';
				}
				k7Y += '</div></div>';
			}
			return {
				marked: Z7Y,
				selected: false,
				cssClass: Z7Y ? 'mbsc-cal-day-marked' : '',
				ariaLabel: O6L ? K7Y : '',
				markup: O6L && K7Y ? '<div class="mbsc-cal-day-txt-c"><div class="mbsc-cal-day-txt" title="' + o6L('<div>' + K7Y + '</div>').text() + '"' + (I7Y ? ' style="background:' + I7Y + ';color:' + G7Y + ';text-shadow:none;"' : '') + '>' + V7Y + K7Y + '</div></div>' : O6L && V7Y ? '<div class="mbsc-cal-day-ic-c">' + V7Y + '</div>' : Z7Y ? k7Y : ''
			};
		};
		R6L.addEvent = function(N7Y) {
			var t7Y = [];
			N7Y = u6L(true, [], o6L.isArray(N7Y) ? N7Y : [N7Y]);
			o6L.each(N7Y, function(y7Y, b7Y) {
				if (b7Y._id === L6L) {
					b7Y._id = C6L++;
				}
				r6L.push(b7Y);
				t7Y.push(b7Y._id);
			});
			S9Y();
			return t7Y;
		};
		R6L.removeEvent = function(J7Y) {
			J7Y = o6L.isArray(J7Y) ? J7Y : [J7Y];
			o6L.each(J7Y, function(M7Y, A7Y) {
				o6L.each(r6L, function(c7Y, e7Y) {
					if (e7Y._id === A7Y) {
						r6L.splice(c7Y, 1);
						return false;
					}
				});
			});
			S9Y();
		};
		R6L.getEvents = function(g7Y) {
			var o7Y;
			if (g7Y) {
				g7Y.setHours(0, 0, 0, 0);
				o7Y = R6L.prepareObj(r6L, g7Y.getFullYear(), g7Y.getMonth());
				return o7Y[g7Y] ? w9Y(o7Y[g7Y]) : [];
			}
			return u6L(true, [], r6L);
		};
		R6L.setEvents = function(P7Y) {
			var u7Y = [];
			r6L = u6L(true, [], P7Y);
			o6L.each(r6L, function(W7Y, v7Y) {
				if (v7Y._id === L6L) {
					v7Y._id = C6L++;
				}
				u7Y.push(v7Y._id);
			});
			S9Y();
			return u7Y;
		};
		u6L(D9Y, {
			highlight: false,
			outerMonthChange: false,
			headerText: false,
			buttons: f6L.display !== 'inline' ? ['cancel'] : f6L.buttons,
			onMarkupReady: function(L7Y) {
				q9Y.onMarkupReady.call(this, L7Y);
				E6L = o6L(L7Y.target);
				if (O6L) {
					o6L('.mbsc-cal', E6L).addClass('mbsc-cal-ev');
				}
				E6L.addClass('mbsc-cal-em');
				H6L = o6L('<div class="mbsc-cal-events ' + (f6L.eventBubbleClass || '') + '"><div class="mbsc-cal-events-arr"></div><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div></div></div>').appendTo(o6L('.mbsc-cal-c', E6L));
				s6L = o6L('.mbsc-cal-events-i', H6L);
				Q9Y = o6L('.mbsc-cal-events-sc', H6L);
				a6L = new P6L.classes.ScrollView(s6L[0]);
				Y9Y = false;
				R6L.tap(s6L, function() {
					if (!a6L.scrolled) {
						z6L();
					}
				});
			},
			onMonthChange: function() {
				z6L();
			},
			onSelectShow: function() {
				z6L();
			},
			onMonthLoaded: function() {
				if (p6L) {
					K9Y(p6L.d, o6L('.mbsc-cal-day-v[data-full="' + p6L.full + '"]:not(.mbsc-cal-day-diff)', E6L));
					p6L = false;
				}
			},
			onDayChange: function(m7Y) {
				var i7Y = m7Y.date,
					T7Y = U9Y(i7Y),
					l7Y = o6L(m7Y.target);
				z6L();
				if (!l7Y.hasClass('mbsc-cal-day-ev')) {
					setTimeout(function() {
						if (R6L.changing) {
							p6L = {
								d: T7Y,
								full: l7Y.attr('data-full')
							};
						} else {
							K9Y(T7Y, l7Y);
						}
					}, 10);
				}
				return false;
			},
			onCalResize: function() {
				if (Y9Y) {
					n9Y(F6L);
				}
			}
		});
		return D9Y;
	};
}(window, document));
(function(R7Y) {
	var f7Y = mobiscroll,
		X7Y = f7Y.$,
		F7Y = f7Y.util,
		O7Y = function() {},
		H7Y = f7Y.classes;
	function E7Y(D5Y) {
		var Y5Y = [Math.round(D5Y.r).toString(16), Math.round(D5Y.g).toString(16), Math.round(D5Y.b).toString(16)];
		X7Y.each(Y5Y, function(Q5Y, S5Y) {
			if (S5Y.length == 1) {
				Y5Y[Q5Y] = '0' + S5Y;
			}
		});
		return '#' + Y5Y.join('');
	}
	function r7Y(j5Y) {
		j5Y = parseInt(j5Y.indexOf('#') > -1 ? j5Y.substring(1) : j5Y, 16);
		return {
			r: j5Y >> 16,
			g: (j5Y & 0x00FF00) >> 8,
			b: j5Y & 0x0000FF,
			toString: function() {
				return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
			}
		};
	}
	function a7Y(I5Y) {
		var Z5Y, q5Y, K5Y, n5Y = I5Y.h,
			U5Y = I5Y.s * 255 / 100,
			k5Y = I5Y.v * 255 / 100;
		if (U5Y === 0) {
			Z5Y = q5Y = K5Y = k5Y;
		} else {
			var w5Y = k5Y,
				h5Y = (255 - U5Y) * k5Y / 255,
				V5Y = (w5Y - h5Y) * (n5Y % 60) / 60;
			if (n5Y == 360) {
				n5Y = 0;
			}
			if (n5Y < 60) {
				Z5Y = w5Y;
				K5Y = h5Y;
				q5Y = h5Y + V5Y;
			} else if (n5Y < 120) {
				q5Y = w5Y;
				K5Y = h5Y;
				Z5Y = w5Y - V5Y;
			} else if (n5Y < 180) {
				q5Y = w5Y;
				Z5Y = h5Y;
				K5Y = h5Y + V5Y;
			} else if (n5Y < 240) {
				K5Y = w5Y;
				Z5Y = h5Y;
				q5Y = w5Y - V5Y;
			} else if (n5Y < 300) {
				K5Y = w5Y;
				q5Y = h5Y;
				Z5Y = h5Y + V5Y;
			} else if (n5Y < 360) {
				Z5Y = w5Y;
				q5Y = h5Y;
				K5Y = w5Y - V5Y;
			} else {
				Z5Y = q5Y = K5Y = 0;
			}
		}
		return {
			r: Z5Y,
			g: q5Y,
			b: K5Y,
			toString: function() {
				return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
			}
		};
	}
	function p7Y(G5Y) {
		var N5Y = 0,
			y5Y, J5Y, A5Y = Math.min(G5Y.r, G5Y.g, G5Y.b),
			t5Y = Math.max(G5Y.r, G5Y.g, G5Y.b),
			b5Y = t5Y - A5Y;
		J5Y = t5Y;
		y5Y = t5Y ? 255 * b5Y / t5Y : 0;
		if (y5Y) {
			if (G5Y.r == t5Y) {
				N5Y = (G5Y.g - G5Y.b) / b5Y;
			} else if (G5Y.g == t5Y) {
				N5Y = 2 + (G5Y.b - G5Y.r) / b5Y;
			} else {
				N5Y = 4 + (G5Y.r - G5Y.g) / b5Y;
			}
		} else {
			N5Y = -1;
		}
		N5Y *= 60;
		if (N5Y < 0) {
			N5Y += 360;
		}
		y5Y *= 100 / 255;
		J5Y *= 100 / 255;
		return {
			h: N5Y,
			s: y5Y,
			v: J5Y,
			toString: function() {
				return 'hsv(' + Math.round(this.h) + ',' + Math.round(this.s) + '%,' + Math.round(this.v) + '%)';
			}
		};
	}
	function z7Y(W5Y) {
		var o5Y = W5Y.r / 255,
			c5Y = W5Y.g / 255,
			e5Y = W5Y.b / 255,
			M5Y = Math.max(o5Y, c5Y, e5Y),
			P5Y = Math.min(o5Y, c5Y, e5Y),
			v5Y = (M5Y + P5Y) / 2,
			u5Y, L5Y;
		if (M5Y == P5Y) {
			u5Y = L5Y = 0;
		} else {
			var g5Y = M5Y - P5Y;
			L5Y = v5Y > 0.5 ? g5Y / (2 - M5Y - P5Y) : g5Y / (M5Y + P5Y);
			switch (M5Y) {
				case o5Y:
					u5Y = (c5Y - e5Y) / g5Y + (c5Y < e5Y ? 6 : 0);
					break;
				case c5Y:
					u5Y = (e5Y - o5Y) / g5Y + 2;
					break;
				case e5Y:
					u5Y = (o5Y - c5Y) / g5Y + 4;
					break;
			}
			u5Y /= 6;
		}
		return {
			h: Math.round(u5Y * 360),
			s: Math.round(L5Y * 100),
			l: Math.round(v5Y * 100),
			toString: function() {
				return 'hsl(' + this.h + ',' + this.s + '%,' + this.l + '%)';
			}
		};
	}
	function x5Y(F5Y) {
		var i5Y, X5Y, R5Y, r5Y, T5Y, f5Y, l5Y = F5Y.h,
			H5Y = F5Y.s,
			m5Y = F5Y.l;
		if (!isFinite(l5Y)) {
			l5Y = 0;
		}
		if (!isFinite(H5Y)) {
			H5Y = 0;
		}
		if (!isFinite(m5Y)) {
			m5Y = 0;
		}
		l5Y /= 60;
		if (l5Y < 0) {
			l5Y = 6 - -l5Y % 6;
		}
		l5Y %= 6;
		H5Y = Math.max(0, Math.min(1, H5Y / 100));
		m5Y = Math.max(0, Math.min(1, m5Y / 100));
		T5Y = (1 - Math.abs(2 * m5Y - 1)) * H5Y;
		f5Y = T5Y * (1 - Math.abs(l5Y % 2 - 1));
		if (l5Y < 1) {
			i5Y = T5Y;
			X5Y = f5Y;
			R5Y = 0;
		} else if (l5Y < 2) {
			i5Y = f5Y;
			X5Y = T5Y;
			R5Y = 0;
		} else if (l5Y < 3) {
			i5Y = 0;
			X5Y = T5Y;
			R5Y = f5Y;
		} else if (l5Y < 4) {
			i5Y = 0;
			X5Y = f5Y;
			R5Y = T5Y;
		} else if (l5Y < 5) {
			i5Y = f5Y;
			X5Y = 0;
			R5Y = T5Y;
		} else {
			i5Y = T5Y;
			X5Y = 0;
			R5Y = f5Y;
		}
		r5Y = m5Y - T5Y / 2;
		return {
			r: Math.round((i5Y + r5Y) * 255),
			g: Math.round((X5Y + r5Y) * 255),
			b: Math.round((R5Y + r5Y) * 255),
			toString: function() {
				return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
			}
		};
	}
	function d7Y(E5Y) {
		return z7Y(r7Y(E5Y));
	}
	function s7Y(O5Y) {
		return E7Y(x5Y(O5Y));
	}
	function C7Y(B5Y) {
		return E7Y(a7Y(B5Y));
	}
	function B7Y(a5Y) {
		return p7Y(r7Y(a5Y));
	}
	H7Y.Color = function(t3Y, i3Y, O3Y) {
		var z5Y, m3Y, C5Y, F3Y, W3Y, k3Y, I3Y, V3Y, K3Y, U3Y, r3Y, n3Y, Y3Y, u3Y, q3Y, v3Y, y3Y, d5Y, G3Y, j3Y, o3Y, g3Y, h3Y, Z3Y, D3Y, Q3Y, b3Y, p5Y = this,
			w3Y = X7Y(t3Y),
			s5Y = 0,
			S3Y = {},
			x3Y = {};
		function M3Y(a3Y, B3Y, z3Y, C3Y, p3Y) {
			if (!p3Y) {
				p5Y._value = p5Y._hasValue ? p5Y._tempValue.slice(0) : null;
			}
			if (a3Y) {
				if (p5Y._isInput) {
					w3Y.val(p5Y._hasValue ? p5Y._tempValue : '');
				}
				W3Y('onFill', {
					valueText: p5Y._hasValue ? p5Y._tempValue : '',
					change: B3Y
				});
				if (B3Y) {
					S3Y = X7Y.extend(true, {}, x3Y);
					p5Y._preventChange = true;
					w3Y.trigger('change');
					l3Y(p5Y._value);
				}
			}
		}
		function L3Y(s3Y, d3Y) {
			d3Y = d3Y || c3Y(s3Y);
			return '<div class="mbsc-color-input-item" data-color="' + (d3Y !== R7Y ? d3Y : s3Y) + '" style="background: ' + s3Y + ';">' + (j3Y ? '' : '<div class="mbsc-color-input-item-close mbsc-ic mbsc-ic-material-close"></div>') + '</div>';
		}
		function H3Y(x4Y) {
			u3Y.css('background', F7Y.prefix + 'linear-gradient(left, ' + (z5Y.rtl ? '#000000' : '#FFFFFF') + ' 0%, ' + x4Y + ' 50%, ' + (z5Y.rtl ? '#FFFFFF' : '#000000') + ' 100%)');
		}
		function c3Y(D4Y) {
			if (Object.keys(x3Y).length) {
				return D4Y;
			}
			for (var Y4Y in C5Y) {
				if (D4Y == C5Y[Y4Y].color || D4Y == C5Y[Y4Y].changedColor) {
					return Y4Y;
				}
			}
		}
		function f3Y() {
			if (G3Y) {
				var S4Y, Q4Y = '';
				h3Y.empty();
				if (p5Y._value) {
					if (j3Y) {
						Q4Y += L3Y(p5Y._value, d5Y);
					} else {
						for (S4Y = 0; S4Y < p5Y._value.length; ++S4Y) {
							Q4Y += L3Y(p5Y._value[S4Y], Object.keys(x3Y).length ? x3Y[S4Y].colorIndex : c3Y(p5Y._value[S4Y]));
						}
					}
					h3Y.append(Q4Y);
					p5Y.tap(X7Y('.mbsc-color-input-item', h3Y), function(j4Y) {
						if (X7Y(j4Y.target).hasClass('mbsc-color-input-item-close')) {
							var h4Y = X7Y(this).index();
							j4Y.stopPropagation();
							j4Y.preventDefault();
							if (d5Y === R7Y) {
								d5Y = X7Y(j4Y.target).parent().attr('data-color');
							}
							if (Y3Y) {
								s5Y = C5Y[d5Y].previewInd;
								D3Y.eq(s5Y).parent().removeClass('mbsc-color-active');
								S3Y[h4Y] = {};
								x3Y[h4Y] = {};
							}
							if (s5Y) {
								D3Y.eq(s5Y).parent().addClass('mbsc-color-active');
							}
							p5Y._value.splice(h4Y, 1);
							p5Y.setVal(p5Y._value, true, true);
						} else if (q3Y && z5Y.display !== 'inline') {
							r3Y = true;
							d5Y = X7Y(j4Y.target).attr('data-color');
							if (isNaN(d5Y)) {
								d5Y = c3Y(d5Y);
							}
							if (d5Y) {
								C5Y[d5Y].selected = true;
								s5Y = C5Y[d5Y].previewInd;
								setTimeout(function() {
									k3Y.scroll(Z3Y.eq(d5Y), 400);
									if (Y3Y) {
										I3Y.scroll(D3Y.eq(s5Y), 400);
									}
								}, 200);
							}
						}
					});
				}
			}
		}
		function N3Y(n4Y, q4Y) {
			var Z4Y, w4Y = n4Y.match(/\d+/gmi);
			switch (true) {
				case n4Y.indexOf('rgb') > -1:
					Z4Y = E7Y({
						r: w4Y[0],
						g: w4Y[1],
						b: w4Y[2]
					});
					break;
				case n4Y.indexOf('hsl') > -1:
					Z4Y = s7Y({
						h: w4Y[0],
						s: w4Y[1],
						l: w4Y[2]
					});
					break;
				case n4Y.indexOf('hsv') > -1:
					Z4Y = C7Y({
						h: w4Y[0],
						s: w4Y[1],
						v: w4Y[2]
					});
					break;
				case n4Y.indexOf('#') > -1:
					Z4Y = n4Y;
					break;
			}
			return X3Y(Z4Y, q4Y || z5Y.format);
		}
		function X3Y(K4Y, V4Y) {
			switch (V4Y) {
				case 'rgb':
					return r7Y(K4Y);
				case 'hsl':
					return d7Y(K4Y);
				case 'hsv':
					return B7Y(K4Y);
				default:
					return K4Y;
			}
		}
		function R3Y() {
			var k4Y;
			for (k4Y = 0; k4Y < z5Y.select; ++k4Y) {
				if (x3Y[k4Y].colorIndex === R7Y) {
					return k4Y;
				}
			}
		}
		function e3Y(U4Y, I4Y) {
			X7Y('.mbsc-color-active', I4Y).removeClass('mbsc-color-active');
			if (q3Y) {
				U4Y.parent().addClass('mbsc-color-active');
				if (Y3Y && U4Y) {
					if (s5Y !== R7Y) {
						D3Y.eq(s5Y).parent().addClass('mbsc-color-active');
					}
				}
			}
		}
		function l3Y(t4Y, c4Y) {
			var G4Y, b4Y, N4Y = [],
				A4Y = 0,
				y4Y = X7Y.map(C5Y, function(e4Y) {
					return e4Y.changedColor || e4Y.color;
				});
			if (j3Y) {
				t4Y = X7Y.isArray(t4Y) ? t4Y[0] : t4Y;
				b4Y = y4Y.indexOf(t4Y);
				if (b4Y > -1) {
					N4Y.push(b4Y);
				}
				if (t4Y && !N4Y.length) {
					var J4Y = +X7Y('.mbsc-color-input-item', h3Y).attr('data-color');
					if (!isNaN(J4Y)) {
						N4Y.push(J4Y);
					}
					d5Y = J4Y;
				}
			} else if (t4Y) {
				if (Y3Y && q3Y) {
					for (var M4Y in S3Y) {
						if (S3Y[M4Y].colorIndex !== R7Y) {
							N4Y.push(+S3Y[M4Y].colorIndex);
						}
					}
				} else {
					for (G4Y = 0; G4Y < t4Y.length; ++G4Y) {
						b4Y = y4Y.indexOf(t4Y[G4Y]);
						if (b4Y > -1) {
							N4Y.push(b4Y);
							y4Y[b4Y] = 'temp' + G4Y;
						}
					}
				}
			}
			for (G4Y = 0; G4Y < N4Y.length; ++G4Y) {
				J3Y(true, N4Y[G4Y], A4Y++, C5Y[N4Y[G4Y]].changedColor || C5Y[N4Y[G4Y]].color, true);
			}
			for (G4Y = 0; G4Y < C5Y.length; ++G4Y) {
				if (N4Y.indexOf(G4Y) == -1) {
					J3Y(false, G4Y, R7Y, C5Y[G4Y].changedColor || C5Y[G4Y].color, false);
				}
			}
			if (Y3Y) {
				for (G4Y = A4Y; G4Y < z5Y.select; ++G4Y) {
					x3Y[G4Y] = {};
					if (D3Y) {
						D3Y.eq(G4Y).addClass('mbsc-color-preview-item-empty').css({
							background: 'transparent'
						});
					}
				}
			}
			S3Y = X7Y.extend(true, {}, x3Y);
			if (c4Y !== false) {
				f3Y();
			}
		}
		function J3Y(g4Y, u4Y, o4Y, P4Y, v4Y, W4Y) {
			if (Y3Y && v4Y) {
				x3Y[o4Y].colorIndex = g4Y ? u4Y : R7Y;
				x3Y[o4Y].color = g4Y ? P4Y : R7Y;
				if (D3Y) {
					D3Y.eq(o4Y).toggleClass('mbsc-color-preview-item-empty').css({
						background: g4Y ? P4Y : 'transparent'
					});
					if (!g4Y) {
						D3Y.eq(o4Y).parent().removeClass('mbsc-color-active');
					}
				}
			}
			if (W4Y) {
				if (g4Y) {
					p5Y._tempValue.splice(o4Y, 0, P4Y);
				} else {
					p5Y._tempValue.splice(p5Y._tempValue.indexOf(P4Y), 1);
				}
			}
			if (Z3Y) {
				if (g4Y) {
					Z3Y.eq(u4Y).addClass('mbsc-color-selected');
				} else {
					Z3Y.eq(u4Y).removeClass('mbsc-color-selected').parent().removeClass('mbsc-color-active');
				}
			}
			C5Y[u4Y].previewInd = g4Y ? o4Y : R7Y;
			C5Y[u4Y].selected = g4Y;
		}
		function A3Y(L4Y, l4Y) {
			if (L4Y !== R7Y) {
				d5Y = L4Y;
				K3Y = C5Y[L4Y].changedColor || C5Y[L4Y].color;
				Q3Y = Z3Y.eq(L4Y);
				if (q3Y) {
					e3Y(Z3Y.eq(L4Y), l4Y || '');
					U3Y = N3Y(C5Y[L4Y].color, 'hsl');
					U3Y.l = N3Y(K3Y, 'hsl').l;
					H3Y(C5Y[L4Y].color);
					y3Y.setVal(100 - U3Y.l, false, false);
				}
			}
		}
		function E3Y() {
			var T4Y, m4Y = [];
			for (T4Y = 0; T4Y < C5Y.length; ++T4Y) {
				if (C5Y[T4Y].selected) {
					m4Y.push(C5Y[T4Y]);
				}
			}
			return m4Y;
		}
		function P3Y(X4Y, R4Y) {
			var i4Y = X7Y(X4Y.target).index();
			d5Y = x3Y[i4Y].colorIndex;
			Q3Y = Z3Y.eq(d5Y);
			s5Y = i4Y;
			A3Y(d5Y, R4Y);
			k3Y.scroll(Q3Y, 250);
		}
		function T3Y(F4Y, f4Y) {
			var H4Y = false,
				r4Y = X7Y('.mbsc-color-selected', f4Y);
			Q3Y = X7Y(F4Y.target);
			if (Q3Y.hasClass('mbsc-color-clear-item')) {
				K3Y = '';
				p5Y.clear();
			}
			if ((j3Y || o3Y > +r4Y.length || Q3Y.hasClass('mbsc-color-selected')) && mobiscroll.KvAPo) {
				d5Y = Q3Y.attr('data-index');
				if (Y3Y) {
					s5Y = C5Y[d5Y].previewInd !== R7Y ? C5Y[d5Y].previewInd : R3Y();
					H4Y = q3Y && Q3Y.hasClass('mbsc-color-selected') && !Q3Y.parent().hasClass('mbsc-color-active');
					if (D3Y.length > 6) {
						I3Y.scroll(D3Y.eq(s5Y));
					}
				}
				A3Y(d5Y, f4Y);
				if (j3Y) {
					r4Y.removeClass('mbsc-color-selected');
					p5Y._tempValue = K3Y;
					if (K3Y) {
						Q3Y.toggleClass('mbsc-color-selected');
					}
					e3Y(Q3Y, f4Y);
				} else {
					e3Y(Q3Y, f4Y);
					if (!H4Y) {
						J3Y(!C5Y[d5Y].selected, d5Y, s5Y, K3Y, true, true);
					}
				}
				if (p5Y.live) {
					p5Y._fillValue();
				}
			}
		}
		H7Y.Frame.call(this, t3Y, i3Y, true);
		p5Y.setVal = p5Y._setVal = function(E4Y, O4Y, B4Y, a4Y) {
			p5Y._hasValue = E4Y !== null && E4Y !== R7Y;
			p5Y._tempValue = X7Y.isArray(E4Y) ? E4Y : [E4Y];
			M3Y(O4Y, true, B4Y === R7Y ? O4Y : B4Y, a4Y);
		};
		p5Y.getVal = p5Y._getVal = function(p4Y) {
			return p5Y._hasValue || p4Y ? g3Y ? E3Y() : p5Y[p4Y ? '_tempValue' : '_value'] : null;
		};
		p5Y._readValue = function() {
			var z4Y = w3Y.val() || '';
			p5Y._hasValue = false;
			if (z4Y.length !== 0 && z4Y !== '') {
				p5Y._hasValue = true;
			}
			if (p5Y._hasValue) {
				p5Y._tempValue = j3Y ? z4Y : z5Y.format == 'hex' ? z4Y.split(',') : z4Y.match(/[a-z]{3}\((\d+\.?\d{0,}?),\s*([\d.]+)%{0,},\s*([\d.]+)%{0,}\)/gmi);
				M3Y(true);
			} else {
				p5Y._tempValue = [];
			}
			if (p5Y._hasValue) {
				l3Y(p5Y._tempValue, false);
			}
		};
		p5Y._fillValue = function() {
			p5Y._hasValue = true;
			M3Y(true, true, 0, true);
		};
		p5Y._generateContent = function() {
			var C4Y, d4Y, Y1Y, s4Y = V3Y ? 1 : 0;
			v3Y = n3Y ? Math.ceil((C5Y.length + s4Y) / z5Y.rows) : z5Y.rows;
			d4Y = '<div class="mbsc-color-scroll-cont mbsc-w-p ' + (n3Y ? '' : 'mbsc-color-vertical') + '"><div class="mbsc-color-cont">' + (n3Y ? '<div class="mbsc-color-row">' : '');
			for (C4Y = 0; C4Y < C5Y.length; ++C4Y) {
				Y1Y = C5Y[C4Y].changedColor || C5Y[C4Y].color;
				if (V3Y && C4Y === 0) {
					d4Y += '<div class="mbsc-color-item-c"><div tabindex="0" class="mbsc-color-clear-item mbsc-btn-e mbsc-color-selected"><div class="mbsc-color-clear-cross"></div></div></div>';
				}
				if (C4Y !== 0 && (C4Y + s4Y) % v3Y === 0) {
					d4Y += n3Y ? '</div><div class="mbsc-color-row">' : '';
				}
				d4Y += '<div class="mbsc-color-item-c"><div tabindex="0" data-index="' + C4Y + '" class="mbsc-color-item mbsc-btn-e mbsc-ic mbsc-ic-material-check mbsc-color-btn-e ' + (C5Y[C4Y].selected ? 'mbsc-color-selected' : '') + '"  style="background:' + Y1Y + '"></div></div>';
			}
			d4Y += '</div></div>' + (n3Y ? '</div>' : '');
			if (q3Y) {
				d4Y += '<div class="mbsc-color-slider-cont"><input class="mbsc-color-slider" type="range" data-highlight="false" value="50" min="0" max="100"/></div>';
			}
			if (Y3Y) {
				d4Y += '<div class="mbsc-color-preview-cont"><div class="mbsc-color-refine-preview">';
				for (var x1Y in S3Y) {
					d4Y += '<div class="mbsc-color-preview-item-c mbsc-btn-e mbsc-color-btn-e" tabindex="0"><div class="mbsc-color-preview-item ' + (S3Y[x1Y].color ? '' : 'mbsc-color-preview-item-empty') + '" style="background: ' + (S3Y[x1Y].color || 'initial') + ';"></div></div>';
				}
				d4Y += '</div></div>';
			}
			return d4Y;
		};
		p5Y._position = function(Q1Y) {
			var D1Y, S1Y;
			if (!n3Y) {
				D1Y = Q1Y.find('.mbsc-color-cont');
				S1Y = Math.ceil(D1Y.find('.mbsc-color-item-c')[0].offsetWidth);
				D1Y.width(Math.min(Math.floor(Q1Y.find('.mbsc-fr-c').width() / S1Y), Math.round(C5Y.length / z5Y.rows)) * S1Y);
			}
			if (k3Y) {
				k3Y.refresh();
			}
			if (I3Y) {
				I3Y.refresh();
			}
		};
		p5Y._markupInserted = function(j1Y) {
			if (!n3Y) {
				j1Y.find('.mbsc-color-scroll-cont').css('max-height', j1Y.find('.mbsc-color-item-c')[0].offsetHeight * z5Y.rows);
			}
			k3Y = new H7Y.ScrollView(j1Y.find('.mbsc-color-scroll-cont')[0], {
				axis: n3Y ? 'X' : 'Y',
				rtl: z5Y.rtl,
				elastic: 60,
				stopProp: false,
				mousewheel: z5Y.mousewheel,
				onBtnTap: function(h1Y) {
					T3Y(h1Y, j1Y);
				}
			});
		};
		p5Y._attachEvents = function(w1Y) {
			var n1Y;
			Z3Y = X7Y('.mbsc-color-item', w1Y);
			w1Y.on('keydown', '.mbsc-color-btn-e', function(Z1Y) {
				Z1Y.stopPropagation();
				if (Z1Y.keyCode == 32) {
					if (Z1Y.target.classList.contains('mbsc-color-item')) {
						T3Y(Z1Y, w1Y);
					} else {
						P3Y(Z1Y, w1Y);
					}
				}
			});
			if (Y3Y) {
				D3Y = X7Y('.mbsc-color-preview-item', w1Y);
			}
			if (q3Y) {
				w1Y.addClass('mbsc-color-refine');
				b3Y = X7Y('.mbsc-color-slider', w1Y);
				y3Y = mobiscroll.slider(b3Y, {
					theme: z5Y.theme,
					rtl: z5Y.rtl
				});
				u3Y = w1Y.find('.mbsc-progress-track');
				if (d5Y) {
					A3Y(d5Y, w1Y);
				}
				b3Y.on('change', function() {
					if (d5Y !== R7Y && (j3Y || C5Y[d5Y].selected)) {
						U3Y.l = 100 - this.value;
						n1Y = N3Y(U3Y.toString()).toString();
						if (j3Y) {
							p5Y._tempValue = n1Y;
						} else {
							p5Y._tempValue[s5Y !== R7Y ? s5Y : p5Y._tempValue.length] = n1Y;
						}
						C5Y[d5Y].changedColor = n1Y;
						Z3Y.eq(d5Y).css('background', n1Y);
						if (Y3Y) {
							x3Y[s5Y].color = n1Y;
							D3Y.eq(s5Y).removeClass('mbsc-color-preview-item-empty').css({
								'background': n1Y
							});
						}
						if (p5Y.live) {
							F7Y.throttle(p5Y._fillValue());
						}
					}
				});
			}
			if (Y3Y) {
				I3Y = new H7Y.ScrollView(w1Y.find('.mbsc-color-preview-cont')[0], {
					axis: 'X',
					rtl: z5Y.rtl,
					mousewheel: z5Y.mousewheel,
					onBtnTap: function(q1Y) {
						P3Y(q1Y, w1Y);
					}
				});
			}
		};
		p5Y.__processSettings = function() {
			var K1Y, V1Y;
			z5Y = p5Y.settings;
			z5Y.headerText = z5Y.display != 'inline' ? (z5Y.headerText || '').replace('{value}', '') : '';
			z5Y.cssClass = (z5Y.cssClass || '') + ' mbsc-color';
			F3Y = z5Y.format;
			W3Y = p5Y.trigger;
			n3Y = z5Y.navigation == 'horizontal';
			p5Y._value = [];
			p5Y._tempValue = [];
			j3Y = z5Y.select == 'single';
			V3Y = z5Y.clear ? z5Y.clear : j3Y;
			V1Y = z5Y.data || [];
			if (!V1Y.length) {
				switch (z5Y.format) {
					case 'rgb':
						V1Y = ["rgb(255,235,60)", "rgb(255,153,0)", "rgb(244,68,55)", "rgb(234,30,99)", "rgb(156,38,176)", "rgb(104,58,183)", "rgb(63,81,181)", "rgb(33,150,243)", "rgb(0,151,136)", "rgb(75,175,79)", "rgb(126,93,78)", "rgb(158,158,158)"];
						if (V3Y) {
							V1Y.splice(10, 0, 'rgb(83, 71, 65)');
						}
						break;
					case 'hsl':
						V1Y = ["hsl(54,100%,62%)", "hsl(36,100%,50%)", "hsl(4,90%,59%)", "hsl(340,83%,52%)", "hsl(291,64%,42%)", "hsl(262,52%,47%)", "hsl(231,48%,48%)", "hsl(207,90%,54%)", "hsl(174,100%,30%)", "hsl(122,40%,49%)", "hsl(19,24%,40%)", "hsl(0,0%,62%)"];
						if (V3Y) {
							V1Y.splice(10, 0, 'hsl(20, 12%, 29%)');
						}
						break;
					default:
						V1Y = ['#ffeb3c', '#ff9900', '#f44437', '#ea1e63', '#9c26b0', '#683ab7', '#3f51b5', '#2196f3', '#009788', '#4baf4f', '#7e5d4e', '#9e9e9e'];
						if (V3Y) {
							V1Y.splice(10, 0, '#534741');
						}
				}
			}
			q3Y = z5Y.mode == 'refine';
			Y3Y = !isNaN(z5Y.select);
			o3Y = isNaN(z5Y.select) ? j3Y ? 2 : V1Y.length : z5Y.select;
			g3Y = X7Y.isPlainObject(V1Y[0]);
			if (Y3Y && !Object.keys(S3Y).length) {
				for (K1Y = 0; K1Y < z5Y.select; ++K1Y) {
					S3Y[K1Y] = {};
					x3Y[K1Y] = {};
				}
			}
			if (!C5Y) {
				C5Y = V1Y.slice(0);
				for (K1Y = 0; K1Y < C5Y.length; ++K1Y) {
					if (!X7Y.isPlainObject(V1Y[K1Y])) {
						V1Y[K1Y] = V1Y[K1Y].toLowerCase();
						C5Y[K1Y] = {
							key: K1Y,
							name: V1Y[K1Y],
							color: V1Y[K1Y]
						};
					} else {
						C5Y[K1Y].color = V1Y[K1Y].color;
					}
				}
			}
			m3Y = z5Y.defaultValue || C5Y[0].color;
			K3Y = m3Y;
			U3Y = N3Y(K3Y, 'hsl');
			G3Y = z5Y.enhance && w3Y.is('input');
			if (G3Y) {
				if (w3Y.hasClass('mbsc-color-input-hdn')) {
					h3Y = w3Y.prev();
				} else {
					h3Y = X7Y('<div ' + (t3Y.placeholder ? 'data-placeholder="' + t3Y.placeholder + '"' : '') + ' class="mbsc-control mbsc-color-input mbsc-control-ev ' + (z5Y.inputClass || '') + '" readonly ></div>');
					h3Y.insertBefore(w3Y);
					w3Y.addClass('mbsc-color-input-hdn').attr('tabindex', -1);
				}
				z5Y.anchor = h3Y;
				p5Y.attachShow(h3Y);
			}
		};
		p5Y._onDetachEvents = function() {
			y3Y.destroy();
			k3Y.destroy();
			I3Y.destroy();
			if (G3Y) {
				w3Y.removeClass('mbsc-color-input-hdn');
				h3Y.remove();
			}
		};
		if (!O3Y) {
			p5Y.init(i3Y);
		}
	};
	H7Y.Color.prototype = {
		_hasDef: true,
		_hasTheme: true,
		_hasLang: true,
		_class: 'color',
		_defaults: X7Y.extend({}, H7Y.Frame.prototype._defaults, {
			validate: O7Y,
			parseValue: O7Y,
			enhance: true,
			rows: 2,
			select: 'single',
			format: 'hex',
			navigation: 'horizontal'
		})
	};
	f7Y.themes.color = f7Y.themes.frame;
	f7Y.presetShort('color', 'Color', false);
	F7Y.color = {
		hsv2hex: C7Y,
		hsv2rgb: a7Y,
		rgb2hsv: p7Y,
		rgb2hex: E7Y,
		rgb2hsl: z7Y,
		hex2rgb: r7Y,
		hex2hsv: B7Y,
		hex2hsl: d7Y
	};
}());
(function(g1Y, y1Y, t1Y) {
	var N1Y, b1Y = mobiscroll,
		k1Y = b1Y.$,
		L1Y = k1Y.extend,
		M1Y = b1Y.classes,
		I1Y = b1Y.util,
		c1Y = I1Y.prefix,
		G1Y = I1Y.jsPrefix,
		U1Y = I1Y.getCoord,
		P1Y = I1Y.testTouch,
		o1Y = I1Y.vibrate,
		A1Y = 1,
		J1Y = function() {},
		v1Y = g1Y.requestAnimationFrame || function(l1Y) {
			l1Y();
		},
		W1Y = g1Y.cancelAnimationFrame || J1Y,
		e1Y = 'webkitAnimationEnd animationend',
		u1Y = 'transparent';
	M1Y.ListView = function(s2Y, h8Y) {
		var h0Y, B0Y, P0Y, z1Y, U2Y, q8Y, Z8Y, R1Y, Y0Y, x0Y, K2Y, h2Y, w8Y, C1Y, y0Y, U8Y, m0Y, S8Y, d1Y, b0Y, S0Y, n0Y, M0Y, D8Y, f2Y, a2Y, B2Y, F1Y, R0Y, d0Y, K0Y, b2Y, P8Y, Z0Y, C2Y, z2Y, G0Y, g2Y, Q2Y, c8Y, I8Y, t2Y, i2Y, H0Y, D0Y, H1Y, W0Y, m1Y, E1Y, X1Y, m2Y, u8Y, Y2Y, x2Y, k2Y, s1Y, k0Y, N0Y, u2Y, v2Y, D2Y, S2Y, k8Y, H2Y, j0Y, B1Y, U0Y, t0Y, w2Y, J8Y, n2Y, i1Y, u0Y, c0Y, W2Y, l2Y, X0Y, t8Y, y8Y, G2Y, a0Y, w0Y, V0Y, y2Y, j8Y, M2Y, z0Y, C0Y, f1Y, L0Y, N2Y, s0Y, r1Y, o0Y, f0Y, R2Y, T1Y = this,
			p1Y = s2Y,
			O1Y = k1Y(p1Y),
			q0Y = 0,
			J0Y = 0,
			a1Y = 0,
			r0Y = {},
			j2Y = {},
			Q0Y = {};
		function G8Y() {
			w2Y = false;
			D2Y = false;
			z1Y = 0;
			t8Y = 0;
			y8Y = new Date();
			W0Y = x0Y.width();
			w8Y = O0Y(x0Y);
			X1Y = w8Y.index(m1Y);
			E1Y = m1Y[0].offsetHeight;
			a1Y = m1Y[0].offsetTop;
			f1Y = L0Y[m1Y.attr('data-type') || 'defaults'];
			X0Y = f1Y.stages;
		}
		function o8Y(v8Y) {
			var W8Y;
			if (v8Y.type === 'touchstart') {
				S2Y = true;
				clearTimeout(k8Y);
			}
			if (P1Y(v8Y, this) && !h0Y && !q0Y && !N1Y && !Z2Y && mobiscroll.KvAPo) {
				h0Y = true;
				U2Y = true;
				G2Y = U1Y(v8Y, 'X');
				a0Y = U1Y(v8Y, 'Y');
				d1Y = 0;
				b0Y = 0;
				m1Y = k1Y(this);
				W8Y = m1Y;
				G8Y();
				M2Y = i1Y.onItemTap || f1Y.tap || m1Y.hasClass('mbsc-lv-parent') || m1Y.hasClass('mbsc-lv-back');
				u8Y = O1Y.offset().top;
				m2Y = m1Y.offset().top;
				if (M2Y) {
					P0Y = setTimeout(function() {
						W8Y.addClass('mbsc-lv-item-active');
						F1Y('onItemActivate', {
							target: W8Y[0],
							domEvent: v8Y
						});
					}, 120);
				}
				if (T1Y.sortable && !m1Y.hasClass('mbsc-lv-back')) {
					if (!T1Y.sortable.group) {
						u2Y = m1Y.nextUntil('.mbsc-lv-gr-title').filter('.mbsc-lv-item');
						H2Y = m1Y.prevUntil('.mbsc-lv-gr-title').filter('.mbsc-lv-item');
					}
					x2Y = (!T1Y.sortable.group ? H2Y.length ? H2Y.eq(-1) : m1Y : x0Y.children('li').eq(0))[0].offsetTop - a1Y;
					Y2Y = (!T1Y.sortable.group ? u2Y.length ? u2Y.eq(-1) : m1Y : x0Y.children('li').eq(-1))[0].offsetTop - a1Y;
					if (T1Y.sortable.handle) {
						if (k1Y(v8Y.target).hasClass('mbsc-lv-handle')) {
							clearTimeout(P0Y);
							if (G1Y === 'Moz') {
								v8Y.preventDefault();
								e2Y();
							} else {
								C0Y = setTimeout(function() {
									e2Y();
								}, 100);
							}
						}
					} else {
						C0Y = setTimeout(function() {
							R0Y.appendTo(m1Y);
							R0Y[0].style[G1Y + 'Animation'] = 'mbsc-lv-fill ' + (i1Y.sortDelay - 100) + 'ms linear';
							clearTimeout(f2Y);
							clearTimeout(P0Y);
							U2Y = false;
							C0Y = setTimeout(function() {
								R0Y[0].style[G1Y + 'Animation'] = '';
								e2Y();
							}, i1Y.sortDelay - 80);
						}, 80);
					}
				}
				if (v8Y.type == 'mousedown') {
					k1Y(y1Y).on('mousemove', A2Y).on('mouseup', F0Y);
				}
			}
		}
		function A2Y(l8Y) {
			var T8Y = false,
				m8Y = true;
			if (h0Y) {
				a2Y = U1Y(l8Y, 'X');
				B2Y = U1Y(l8Y, 'Y');
				d1Y = a2Y - G2Y;
				b0Y = B2Y - a0Y;
				clearTimeout(f2Y);
				if (!M0Y && !V0Y && !u0Y && !m1Y.hasClass('mbsc-lv-back')) {
					if (Math.abs(b0Y) > 10) {
						u0Y = true;
						l8Y.type = l8Y.type == 'mousemove' ? 'mouseup' : 'touchend';
						F0Y(l8Y);
						clearTimeout(P0Y);
					} else if (Math.abs(d1Y) > 7) {
						A8Y();
					} else {
						if (l8Y.type === 'touchmove') {
							f2Y = setTimeout(function() {
								l8Y.type = 'touchend';
								F0Y(l8Y);
							}, 300);
						}
					}
				}
				if (V0Y) {
					l8Y.preventDefault();
					z1Y = d1Y / W0Y * 100;
					c2Y();
				} else if (M0Y) {
					l8Y.preventDefault();
					var R8Y, i8Y = r1Y.scrollTop(),
						L8Y = Math.max(x2Y, Math.min(b0Y + f0Y, Y2Y)),
						X8Y = Z0Y ? m2Y - R2Y + i8Y - f0Y : m2Y;
					if (o0Y + i8Y < X8Y + L8Y + E1Y) {
						r1Y.scrollTop(X8Y + L8Y - o0Y + E1Y);
						R8Y = true;
					} else if (X8Y + L8Y < i8Y) {
						r1Y.scrollTop(X8Y + L8Y);
						R8Y = true;
					}
					if (R8Y) {
						f0Y += r1Y.scrollTop() - i8Y;
					}
					if (k0Y) {
						if (T1Y.sortable.multiLevel && s1Y.hasClass('mbsc-lv-parent')) {
							if (a1Y + E1Y / 4 + L8Y > k0Y) {
								T8Y = true;
							} else if (a1Y + E1Y - E1Y / 4 + L8Y > k0Y) {
								S0Y = s1Y.addClass('mbsc-lv-item-hl');
								m8Y = false;
							}
						} else if (a1Y + E1Y / 2 + L8Y > k0Y) {
							if (s1Y.hasClass('mbsc-lv-back')) {
								if (T1Y.sortable.multiLevel) {
									n0Y = s1Y.addClass('mbsc-lv-item-hl');
									m8Y = false;
								}
							} else {
								T8Y = true;
							}
						}
						if (T8Y) {
							j0Y.insertAfter(s1Y);
							B1Y = s1Y;
							s1Y = I2Y(s1Y, 'next');
							U0Y = k0Y;
							k0Y = s1Y.length && s1Y[0].offsetTop;
							Y0Y++;
						}
					}
					if (!T8Y && U0Y) {
						if (T1Y.sortable.multiLevel && B1Y.hasClass('mbsc-lv-parent')) {
							if (a1Y + E1Y - E1Y / 4 + L8Y < U0Y) {
								T8Y = true;
							} else if (a1Y + E1Y / 4 + L8Y < U0Y) {
								S0Y = B1Y.addClass('mbsc-lv-item-hl');
								m8Y = false;
							}
						} else if (a1Y + E1Y / 2 + L8Y < U0Y) {
							if (B1Y.hasClass('mbsc-lv-back')) {
								if (T1Y.sortable.multiLevel) {
									n0Y = B1Y.addClass('mbsc-lv-item-hl');
									m8Y = false;
								}
							} else {
								T8Y = true;
							}
						}
						if (T8Y) {
							j0Y.insertBefore(B1Y);
							s1Y = B1Y;
							B1Y = I2Y(B1Y, 'prev');
							k0Y = U0Y;
							U0Y = B1Y.length && B1Y[0].offsetTop + B1Y[0].offsetHeight;
							Y0Y--;
						}
					}
					if (m8Y) {
						if (S0Y) {
							S0Y.removeClass('mbsc-lv-item-hl');
							S0Y = false;
						}
						if (n0Y) {
							n0Y.removeClass('mbsc-lv-item-hl');
							n0Y = false;
						}
					}
					if (T8Y) {
						F1Y('onSortChange', [m1Y, Y0Y]);
					}
					Q8Y(m1Y, L8Y);
					F1Y('onSort', [m1Y, Y0Y]);
				} else if (Math.abs(d1Y) > 5 || Math.abs(b0Y) > 5) {
					L2Y();
				}
			}
		}
		function F0Y(r8Y) {
			var F8Y, f8Y, H8Y, E8Y, O8Y = m1Y;
			if (h0Y) {
				h0Y = false;
				L2Y();
				if (r8Y.type == 'mouseup') {
					k1Y(y1Y).off('mousemove', A2Y).off('mouseup', F0Y);
				}
				if (!u0Y) {
					k8Y = setTimeout(function() {
						S2Y = false;
					}, 300);
				}
				if (V0Y || u0Y || M0Y) {
					D2Y = true;
				}
				if (V0Y) {
					O2Y();
				} else if (M0Y) {
					H8Y = x0Y;
					if (S0Y) {
						g0Y(m1Y.detach());
						f8Y = Q0Y[S0Y.attr('data-ref')];
						Y0Y = O0Y(f8Y.child).length;
						S0Y.removeClass('mbsc-lv-item-hl');
						if (i1Y.navigateOnDrop) {
							F2Y(S0Y, function() {
								T1Y.add(null, m1Y, null, null, S0Y, true);
								i0Y(m1Y);
								E0Y(m1Y, X1Y, H8Y, true);
							});
						} else {
							T1Y.add(null, m1Y, null, null, S0Y, true);
							E0Y(m1Y, X1Y, H8Y, true);
						}
					} else if (n0Y) {
						g0Y(m1Y.detach());
						f8Y = Q0Y[n0Y.attr('data-back')];
						Y0Y = O0Y(f8Y.parent).index(f8Y.item) + 1;
						n0Y.removeClass('mbsc-lv-item-hl');
						if (i1Y.navigateOnDrop) {
							F2Y(n0Y, function() {
								T1Y.add(null, m1Y, Y0Y, null, x0Y, true);
								i0Y(m1Y);
								E0Y(m1Y, X1Y, H8Y, true);
							});
						} else {
							T1Y.add(null, m1Y, Y0Y, null, f8Y.parent, true);
							E0Y(m1Y, X1Y, H8Y, true);
						}
					} else {
						F8Y = j0Y[0].offsetTop - a1Y;
						Q8Y(m1Y, F8Y, Math.abs(F8Y - Math.max(x2Y, Math.min(b0Y + f0Y, Y2Y))) * 6, function() {
							g0Y(m1Y);
							m1Y.insertBefore(j0Y);
							E0Y(m1Y, X1Y, H8Y, Y0Y !== X1Y);
						});
					}
					M0Y = false;
				} else if (!u0Y && Math.abs(d1Y) < 5 && Math.abs(b0Y) < 5) {
					if (f1Y.tap) {
						E8Y = f1Y.tap.call(p1Y, {
							target: m1Y,
							index: X1Y,
							domEvent: r8Y
						}, T1Y);
					}
					if (M2Y) {
						if (r8Y.type === 'touchend') {
							I1Y.preventClick();
						}
						m1Y.addClass('mbsc-lv-item-active');
						F1Y('onItemActivate', {
							target: m1Y[0],
							domEvent: r8Y
						});
					}
					E8Y = F1Y('onItemTap', {
						target: m1Y[0],
						index: X1Y,
						domEvent: r8Y
					});
					if (E8Y !== false) {
						F2Y(m1Y);
					}
				}
				clearTimeout(P0Y);
				setTimeout(function() {
					O8Y.removeClass('mbsc-lv-item-active');
					F1Y('onItemDeactivate', {
						target: O8Y[0]
					});
				}, 100);
				u0Y = false;
				C1Y = null;
			}
		}
		function A8Y() {
			V0Y = e0Y(f1Y.swipe, {
				target: m1Y[0],
				index: X1Y,
				direction: d1Y > 0 ? 'right' : 'left'
			});
			if (V0Y) {
				L2Y();
				clearTimeout(P0Y);
				if (f1Y.actions) {
					B0Y = b8Y(f1Y, d1Y);
					k2Y.html(f1Y.icons).show().children().css('width', B0Y + '%');
					D0Y.hide();
					k1Y('.mbsc-lv-ic-m', H1Y).removeClass('mbsc-lv-ic-disabled');
					k1Y(f1Y.leftMenu).each(d2Y);
					k1Y(f1Y.rightMenu).each(d2Y);
				} else {
					D0Y.show();
					k2Y.hide();
					y0Y = f1Y.start + (d1Y > 0 ? 0 : 1);
					t0Y = X0Y[y0Y - 1];
					N0Y = X0Y[y0Y];
				}
				m1Y.addClass('mbsc-lv-item-swiping').removeClass('mbsc-lv-item-active');
				z0Y.css('line-height', E1Y + 'px');
				H1Y.css({
					top: a1Y,
					height: E1Y,
					backgroundColor: N8Y(d1Y)
				}).addClass('mbsc-lv-stage-c-v').appendTo(x0Y.parent());
				if (i1Y.iconSlide) {
					m1Y.append(D0Y);
				}
				F1Y('onSlideStart', {
					target: m1Y[0],
					index: X1Y
				});
			}
		}
		function c2Y() {
			var B8Y = false;
			if (!n2Y) {
				if (f1Y.actions) {
					H1Y.attr('class', 'mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-' + (z1Y < 0 ? 'right' : 'left'));
				} else {
					if (t0Y && z1Y <= t0Y.percent) {
						y0Y--;
						N0Y = t0Y;
						t0Y = X0Y[y0Y];
						B8Y = true;
					} else if (N0Y && z1Y >= N0Y.percent) {
						y0Y++;
						t0Y = N0Y;
						N0Y = X0Y[y0Y];
						B8Y = true;
					}
					if (B8Y) {
						C1Y = z1Y > 0 ? t0Y : N0Y;
						if (C1Y) {
							V2Y(C1Y, i1Y.iconSlide);
							F1Y('onStageChange', {
								target: m1Y[0],
								index: X1Y,
								stage: C1Y
							});
						}
					}
				}
				if (!c0Y) {
					n2Y = true;
					J8Y = v1Y(Y8Y);
				}
			}
		}
		function O2Y(a8Y) {
			var C8Y, d8Y, z8Y, p8Y = false,
				s8Y = true;
			W1Y(J8Y);
			n2Y = false;
			if (!c0Y) {
				Y8Y();
			}
			if (f1Y.actions) {
				if (Math.abs(z1Y) > 10 && B0Y) {
					T0Y(m1Y, z1Y < 0 ? -B0Y : B0Y, 200);
					p8Y = true;
					N1Y = true;
					q8Y = m1Y;
					Z8Y = X1Y;
					k1Y(y1Y).on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(x6Y) {
						x6Y.preventDefault();
						q2Y(m1Y, true, a8Y);
					});
				}
			} else if (z1Y) {
				if (i1Y.quickSwipe && !c0Y) {
					z8Y = new Date() - y8Y;
					C8Y = z8Y < 300 && d1Y < -50;
					d8Y = z8Y < 300 && d1Y > 50;
					if (C8Y) {
						w2Y = true;
						C1Y = f1Y.left;
						V2Y(C1Y, i1Y.iconSlide);
					} else if (d8Y) {
						w2Y = true;
						C1Y = f1Y.right;
						V2Y(C1Y, i1Y.iconSlide);
					}
				}
				if (C1Y && C1Y.action) {
					S8Y = e0Y(C1Y.disabled, {
						target: m1Y[0],
						index: X1Y
					});
					if (!S8Y) {
						p8Y = true;
						N1Y = c0Y || e0Y(C1Y.confirm, {
							target: m1Y[0],
							index: X1Y
						});
						if (N1Y) {
							T0Y(m1Y, (z1Y < 0 ? -1 : 1) * D0Y[0].offsetWidth * 100 / W0Y, 200, true);
							x8Y(C1Y, m1Y, X1Y, false, a8Y);
						} else {
							P2Y(C1Y, m1Y, X1Y, a8Y);
						}
					}
				}
			}
			if (!p8Y) {
				q2Y(m1Y, s8Y, a8Y);
			}
			V0Y = false;
		}
		function e2Y() {
			M0Y = true;
			S0Y = false;
			n0Y = false;
			f0Y = 0;
			Y0Y = X1Y;
			if (i1Y.vibrate) {
				o1Y();
			}
			s1Y = I2Y(m1Y, 'next');
			k0Y = s1Y.length && s1Y[0].offsetTop;
			B1Y = I2Y(m1Y, 'prev');
			U0Y = B1Y.length && B1Y[0].offsetTop + B1Y[0].offsetHeight;
			j0Y.height(E1Y).insertAfter(m1Y);
			m1Y.css({
				top: a1Y
			}).addClass('mbsc-lv-item-dragging').removeClass('mbsc-lv-item-active').appendTo(D8Y);
			F1Y('onSortStart', {
				target: m1Y[0],
				index: Y0Y
			});
		}
		function E0Y(Y6Y, D6Y, S6Y, Q6Y) {
			Y6Y.removeClass('mbsc-lv-item-dragging');
			j0Y.remove();
			F1Y('onSortEnd', {
				target: Y6Y[0],
				index: Y0Y
			});
			if (i1Y.vibrate) {
				o1Y();
			}
			if (Q6Y) {
				T1Y.addUndoAction(function(j6Y) {
					T1Y.move(Y6Y, D6Y, null, j6Y, S6Y, true);
				}, true);
				F1Y('onSortUpdate', {
					target: Y6Y[0],
					index: Y0Y
				});
			}
		}
		function p2Y() {
			if (!S2Y) {
				clearTimeout(I8Y);
				if (N1Y) {
					k1Y(y1Y).trigger('touchstart');
				}
				if (g2Y) {
					T1Y.close(G0Y, Q2Y);
					g2Y = false;
					G0Y = null;
				}
			}
		}
		function o2Y() {
			clearTimeout(U8Y);
			U8Y = setTimeout(function() {
				o0Y = r1Y[0].innerHeight || r1Y.innerHeight();
				R2Y = Z0Y ? r1Y.offset().top : 0;
				if (h0Y) {
					a1Y = m1Y[0].offsetTop;
					E1Y = m1Y[0].offsetHeight;
					H1Y.css({
						top: a1Y,
						height: E1Y
					});
				}
			}, 200);
		}
		function g8Y() {
			if (M0Y || !h0Y) {
				var n6Y, Z6Y = r1Y.scrollTop(),
					w6Y = O1Y.offset().top,
					q6Y = O1Y[0].offsetHeight,
					h6Y = Z0Y ? r1Y.offset().top : Z6Y;
				k1Y('.mbsc-lv-gr-title', O1Y).each(function(V6Y, K6Y) {
					if (k1Y(K6Y).offset().top < h6Y) {
						n6Y = K6Y;
					}
				});
				if (w6Y < h6Y && w6Y + q6Y > h6Y) {
					K0Y.show().empty().append(k1Y(n6Y).clone());
				} else {
					K0Y.hide();
				}
			}
		}
		function d2Y(U6Y, k6Y) {
			if (e0Y(k6Y.disabled, {
					target: m1Y[0],
					index: X1Y
				})) {
				k1Y('.mbsc-ic-' + k6Y.icon, H1Y).addClass('mbsc-lv-ic-disabled');
			}
		}
		function P2Y(G6Y, I6Y, N6Y, y6Y) {
			var t6Y, b6Y = {
				icon: 'undo2',
				text: i1Y.undoText,
				color: '#b1b1b1',
				action: function() {
					T1Y.undo();
				}
			};
			if (G6Y.undo) {
				T1Y.startActionTrack();
				if (k1Y.isFunction(G6Y.undo)) {
					T1Y.addUndoAction(function() {
						G6Y.undo.call(p1Y, I6Y, T1Y, N6Y);
					});
				}
				N2Y = I6Y.attr('data-ref');
			}
			t6Y = G6Y.action.call(p1Y, {
				target: I6Y[0],
				index: N6Y
			}, T1Y);
			if (G6Y.undo) {
				T1Y.endActionTrack();
				if (t6Y !== false) {
					T0Y(I6Y, +I6Y.attr('data-pos') < 0 ? -100 : 100, 200);
				}
				j0Y.height(E1Y).insertAfter(I6Y);
				I6Y.css('top', a1Y).addClass('mbsc-lv-item-undo');
				k2Y.hide();
				D0Y.show();
				H1Y.append(D0Y);
				V2Y(b6Y);
				x8Y(b6Y, I6Y, N6Y, true, y6Y);
			} else {
				q2Y(I6Y, t6Y, y6Y);
			}
		}
		function x8Y(g6Y, J6Y, o6Y, A6Y, M6Y) {
			var c6Y, e6Y;
			N1Y = true;
			k1Y(y1Y).off('.mbsc-lv-conf').on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(u6Y) {
				u6Y.preventDefault();
				if (A6Y) {
					n8Y(J6Y);
				}
				q2Y(J6Y, true, M6Y);
			});
			if (!m0Y) {
				D0Y.off('.mbsc-lv-conf').on('touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf', function(P6Y) {
					P6Y.stopPropagation();
					c6Y = U1Y(P6Y, 'X');
					e6Y = U1Y(P6Y, 'Y');
				}).on('touchend.mbsc-lv-conf mouseup.mbsc-lv-conf', function(v6Y) {
					v6Y.preventDefault();
					if (v6Y.type === 'touchend') {
						I1Y.preventClick();
					}
					if (Math.abs(U1Y(v6Y, 'X') - c6Y) < 10 && Math.abs(U1Y(v6Y, 'Y') - e6Y) < 10) {
						P2Y(g6Y, J6Y, o6Y, M6Y);
						if (A6Y) {
							s0Y = null;
							n8Y(J6Y);
						}
					}
				});
			}
		}
		function Y8Y() {
			T0Y(m1Y, t8Y + d1Y * 100 / W0Y);
			n2Y = false;
		}
		function q2Y(W6Y, l6Y, L6Y) {
			k1Y(y1Y).off('.mbsc-lv-conf');
			D0Y.off('.mbsc-lv-conf');
			if (l6Y !== false) {
				T0Y(W6Y, 0, W6Y.attr('data-pos') !== '0' ? 200 : 0, false, function() {
					T2Y(W6Y, L6Y);
					g0Y(W6Y);
				});
			} else {
				T2Y(W6Y, L6Y);
			}
			N1Y = false;
		}
		function T0Y(m6Y, T6Y, i6Y, R6Y, X6Y) {
			T6Y = Math.max(V0Y == 'right' ? 0 : -100, Math.min(T6Y, V0Y == 'left' ? 0 : 100));
			w0Y = m6Y[0].style;
			m6Y.attr('data-pos', T6Y);
			w0Y[G1Y + 'Transform'] = 'translate3d(' + (R6Y ? W0Y * T6Y / 100 + 'px' : T6Y + '%') + ',0,0)';
			w0Y[G1Y + 'Transition'] = c1Y + 'transform ' + (i6Y || 0) + 'ms';
			if (X6Y) {
				q0Y++;
				setTimeout(function() {
					X6Y();
					q0Y--;
				}, i6Y);
			}
			z1Y = T6Y;
		}
		function Q8Y(F6Y, f6Y, H6Y, r6Y) {
			f6Y = Math.max(x2Y, Math.min(f6Y, Y2Y));
			w0Y = F6Y[0].style;
			w0Y[G1Y + 'Transform'] = 'translate3d(0,' + f6Y + 'px,0)';
			w0Y[G1Y + 'Transition'] = c1Y + 'transform ' + (H6Y || 0) + 'ms ease-out';
			if (r6Y) {
				q0Y++;
				setTimeout(function() {
					r6Y();
					q0Y--;
				}, H6Y);
			}
		}
		function L2Y() {
			clearTimeout(C0Y);
			if (!U2Y && T1Y.sortable) {
				U2Y = true;
				R0Y.remove();
			}
		}
		function V2Y(E6Y, B6Y) {
			var O6Y = e0Y(E6Y.text, {
				target: m1Y[0],
				index: X1Y
			}) || '';
			if (e0Y(E6Y.disabled, {
					target: m1Y[0],
					index: X1Y
				})) {
				H1Y.addClass('mbsc-lv-ic-disabled');
			} else {
				H1Y.removeClass('mbsc-lv-ic-disabled');
			}
			H1Y.css('background-color', E6Y.color || (E6Y.percent === 0 ? N8Y(z1Y) : u1Y));
			D0Y.attr('class', 'mbsc-lv-ic-c mbsc-lv-ic-' + (B6Y ? 'move-' : '') + (z1Y < 0 ? 'right' : 'left'));
			H0Y.attr('class', ' mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-' + (E6Y.icon || 'none'));
			z0Y.attr('class', 'mbsc-lv-ic-text' + (E6Y.icon ? '' : ' mbsc-lv-ic-text-only') + (O6Y ? '' : ' mbsc-lv-ic-only')).html(O6Y || '&nbsp;');
			if (i1Y.animateIcons) {
				if (w2Y) {
					H0Y.addClass('mbsc-lv-ic-v');
				} else {
					setTimeout(function() {
						H0Y.addClass('mbsc-lv-ic-a');
					}, 10);
				}
			}
		}
		function T2Y(a6Y, p6Y) {
			if (!h0Y) {
				H0Y.attr('class', 'mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none');
				H1Y.attr('style', '').removeClass('mbsc-lv-stage-c-v');
				z0Y.html('');
			}
			H1Y.removeClass('mbsc-lv-left mbsc-lv-right');
			if (a6Y) {
				F1Y('onSlideEnd', {
					target: a6Y[0],
					index: X1Y
				});
				if (p6Y) {
					p6Y();
				}
			}
		}
		function n8Y(z6Y) {
			z6Y.css('top', '').removeClass('mbsc-lv-item-undo');
			if (s0Y) {
				T1Y.animate(j0Y, 'collapse', function() {
					j0Y.remove();
				});
			} else {
				j0Y.remove();
			}
			T2Y();
			N2Y = null;
			s0Y = null;
		}
		function g0Y(C6Y) {
			w0Y = C6Y[0].style;
			w0Y[G1Y + 'Transform'] = '';
			w0Y[G1Y + 'Transition'] = '';
			w0Y.top = '';
			C6Y.removeClass('mbsc-lv-item-swiping');
		}
		function e0Y(d6Y, s6Y) {
			return k1Y.isFunction(d6Y) ? d6Y.call(this, s6Y, T1Y) : d6Y;
		}
		function K8Y(x96) {
			var Y96;
			if (!x96.attr('data-ref')) {
				Y96 = A1Y++;
				x96.attr('data-ref', Y96);
				Q0Y[Y96] = {
					item: x96,
					child: x96.children('ul,ol'),
					parent: x96.parent(),
					ref: x96.parent()[0] === p1Y ? null : x96.parent().parent().attr('data-ref')
				};
			}
			x96.addClass('mbsc-lv-item');
			if (T1Y.sortable.handle && x96.attr('data-role') != 'list-divider' && !x96.children('.mbsc-lv-handle-c').length) {
				x96.append(C2Y);
			}
			if (i1Y.enhance && !x96.hasClass('mbsc-lv-item-enhanced')) {
				var D96 = x96.attr('data-icon'),
					S96 = x96.find('img').eq(0).addClass('mbsc-lv-img');
				if (S96.is(':first-child')) {
					x96.addClass('mbsc-lv-img-' + (i1Y.rtl ? 'right' : 'left'));
				} else if (S96.length) {
					x96.addClass('mbsc-lv-img-' + (i1Y.rtl ? 'left' : 'right'));
				}
				x96.addClass('mbsc-lv-item-enhanced').children().each(function(j96, Q96) {
					Q96 = k1Y(Q96);
					if (Q96.is('p, h1, h2, h3, h4, h5, h6')) {
						Q96.addClass('mbsc-lv-txt');
					}
				});
				if (D96) {
					x96.addClass('mbsc-lv-item-ic-' + (x96.attr('data-icon-align') || (i1Y.rtl ? 'right' : 'left'))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + D96 + '"></div');
				}
			}
		}
		function V8Y(h96) {
			k1Y('li', h96).not('.mbsc-lv-item').each(function() {
				K8Y(k1Y(this));
			});
			k1Y('li[data-role="list-divider"]', h96).removeClass('mbsc-lv-item').addClass('mbsc-lv-gr-title');
			k1Y('ul,ol', h96).not('.mbsc-lv').addClass('mbsc-lv').prepend(t2Y).parent().addClass('mbsc-lv-parent').prepend(i2Y);
			k1Y('.mbsc-lv-back', h96).each(function() {
				k1Y(this).attr('data-back', k1Y(this).parent().parent().attr('data-ref'));
			});
		}
		function O0Y(w96) {
			return w96.children('li').not('.mbsc-lv-back').not('.mbsc-lv-removed').not('.mbsc-lv-ph');
		}
		function l0Y(n96) {
			if (typeof n96 !== 'object') {
				n96 = k1Y('li[data-id="' + n96 + '"]', R1Y);
			}
			return k1Y(n96);
		}
		function e8Y(K96) {
			var q96 = 0,
				Z96 = Q0Y[K96.attr('data-ref')];
			while (Z96.ref) {
				q96++;
				Z96 = Q0Y[Z96.ref];
			}
			return q96;
		}
		function I2Y(V96, k96) {
			V96 = V96[k96]();
			while (V96.length && (!V96.hasClass('mbsc-lv-item') || V96.hasClass('mbsc-lv-ph') || V96.hasClass('mbsc-lv-item-dragging'))) {
				if (!T1Y.sortable.group && V96.hasClass('mbsc-lv-gr-title')) {
					return false;
				}
				V96 = V96[k96]();
			}
			return V96;
		}
		function N8Y(U96) {
			return (U96 > 0 ? f1Y.right : f1Y.left).color || u1Y;
		}
		function I0Y(I96) {
			return I1Y.isNumeric(I96) ? I96 + '' : 0;
		}
		function b8Y(G96, N96) {
			return +(N96 < 0 ? I0Y((G96.actionsWidth || 0).right) || I0Y(G96.actionsWidth) || I0Y(i1Y.actionsWidth.right) || I0Y(i1Y.actionsWidth) : I0Y((G96.actionsWidth || 0).left) || I0Y(G96.actionsWidth) || I0Y(i1Y.actionsWidth.left) || I0Y(i1Y.actionsWidth));
		}
		function i0Y(y96, A96) {
			if (y96) {
				var b96 = r1Y.scrollTop(),
					J96 = y96.is('.mbsc-lv-item') ? y96[0].offsetHeight : 0,
					t96 = y96.offset().top + (Z0Y ? b96 - R2Y : 0);
				if (A96) {
					if (t96 < b96 || t96 > b96 + o0Y) {
						r1Y.scrollTop(t96);
					}
				} else {
					if (t96 < b96) {
						r1Y.scrollTop(t96);
					} else if (t96 + J96 > b96 + o0Y) {
						r1Y.scrollTop(t96 + J96 - o0Y / 2);
					}
				}
			}
		}
		function r2Y(o96, M96, c96, e96, u96) {
			var P96 = M96.parent(),
				g96 = M96.prev();
			e96 = e96 || J1Y;
			if (g96[0] === D0Y[0]) {
				g96 = D0Y.prev();
			}
			if (x0Y[0] !== M96[0]) {
				F1Y('onNavStart', {
					level: J0Y,
					direction: o96,
					list: M96[0]
				});
				W2Y.prepend(M96.addClass('mbsc-lv-v mbsc-lv-sl-new'));
				i0Y(R1Y);
				M8Y(W2Y, 'mbsc-lv-sl-' + o96, function() {
					x0Y.removeClass('mbsc-lv-sl-curr');
					M96.removeClass('mbsc-lv-sl-new').addClass('mbsc-lv-sl-curr');
					if (K2Y && K2Y.length) {
						x0Y.removeClass('mbsc-lv-v').insertAfter(K2Y);
					} else {
						h2Y.append(x0Y.removeClass('mbsc-lv-v'));
					}
					K2Y = g96;
					h2Y = P96;
					x0Y = M96;
					i0Y(c96, u96);
					e96.call(p1Y, c96);
					F1Y('onNavEnd', {
						level: J0Y,
						direction: o96,
						list: M96[0]
					});
				});
			} else {
				i0Y(c96, u96);
				e96.call(p1Y, c96);
			}
		}
		function F2Y(v96, W96) {
			if (!q0Y) {
				if (v96.hasClass('mbsc-lv-parent')) {
					J0Y++;
					r2Y('r', Q0Y[v96.attr('data-ref')].child, null, W96);
				} else if (v96.hasClass('mbsc-lv-back')) {
					J0Y--;
					r2Y('l', Q0Y[v96.attr('data-back')].parent, Q0Y[v96.attr('data-back')].item, W96);
				}
			}
		}
		function M8Y(L96, T96, l96) {
			var i96;
			function m96() {
				clearTimeout(i96);
				q0Y--;
				L96.off(e1Y, m96).removeClass(T96);
				l96.call(p1Y, L96);
			}
			l96 = l96 || J1Y;
			if (i1Y.animation && T96 !== 'mbsc-lv-item-none') {
				q0Y++;
				L96.on(e1Y, m96).addClass(T96);
				i96 = setTimeout(m96, 500);
			} else {
				l96.call(p1Y, L96);
			}
		}
		function E2Y(X96, R96) {
			var f96, H96 = X96.attr('data-ref');
			f96 = j2Y[H96] = j2Y[H96] || [];
			if (R96) {
				f96.push(R96);
			}
			if (X96.attr('data-action')) {
				return;
			}
			R96 = f96.shift();
			X96.attr('data-action', 1);
			R96(function() {
				X96.removeAttr('data-action');
				if (f96.length) {
					E2Y(X96);
				} else {
					delete j2Y[H96];
				}
			});
		}
		function X2Y(F96, O96, B96) {
			var E96, r96;
			if (F96 && F96.length) {
				E96 = 100 / (F96.length + 2);
				k1Y.each(F96, function(p96, a96) {
					if (a96.key === t1Y) {
						a96.key = l2Y++;
					}
					if (a96.percent === t1Y) {
						a96.percent = O96 * E96 * (p96 + 1);
						if (B96) {
							r96 = L1Y({}, a96);
							r96.key = l2Y++;
							r96.percent = -E96 * (p96 + 1);
							F96.push(r96);
							r0Y[r96.key] = r96;
						}
					}
					r0Y[a96.key] = a96;
				});
			}
		}
		M1Y.Base.call(this, s2Y, h8Y, true);
		T1Y.animate = function(z96, C96, d96) {
			M8Y(z96, 'mbsc-lv-item-' + C96, d96);
		};
		T1Y.add = function(G76, V76, S76, Z76, I76, j76) {
			var K76, h76, q76, U76, Q76, n76, w76 = '',
				x76 = I76 === t1Y ? O1Y : l0Y(I76),
				Y76 = x76,
				s96 = typeof V76 !== 'object' ? k1Y('<li data-ref="' + A1Y++ + '" data-id="' + G76 + '">' + V76 + '</li>') : V76,
				k76 = s96.attr('data-pos') < 0 ? 'left' : 'right',
				D76 = s96.attr('data-ref');
			Z76 = Z76 || J1Y;
			if (!D76) {
				D76 = A1Y++;
				s96.addClass('mbsc-lv-item').attr('data-ref', D76);
			}
			K8Y(s96);
			if (!j76) {
				T1Y.addUndoAction(function(N76) {
					if (U76) {
						T1Y.navigate(x76, function() {
							Y76.remove();
							x76.removeClass('mbsc-lv-parent').children('.mbsc-lv-arr').remove();
							Q76.child = x76.children('ul,ol');
							T1Y.remove(s96, null, N76, true);
						});
					} else {
						T1Y.remove(s96, null, N76, true);
					}
				}, true);
			}
			E2Y(s96, function(t76) {
				g0Y(s96.css('top', '').removeClass('mbsc-lv-item-undo'));
				if (x76.is('li')) {
					n76 = x76.attr('data-ref');
					if (!x76.children('ul,ol').length) {
						U76 = true;
						x76.append('<ul></ul>');
					}
				} else {
					n76 = x76.children('.mbsc-lv-back').attr('data-back');
				}
				Q76 = Q0Y[n76];
				if (Q76) {
					if (!Q76.child.length) {
						x76.addClass('mbsc-lv-parent').prepend(i2Y);
						Y76 = x76.children('ul,ol').prepend(t2Y).addClass('mbsc-lv');
						Q76.child = Y76;
						k1Y('.mbsc-lv-back', x76).attr('data-back', n76);
					} else {
						Y76 = Q76.child;
					}
				}
				Q0Y[D76] = {
					item: s96,
					child: s96.children('ul,ol'),
					parent: Y76,
					ref: n76
				};
				q76 = O0Y(Y76);
				h76 = q76.length;
				if (S76 === t1Y || S76 === null) {
					S76 = h76;
				}
				if (j76) {
					w76 = 'mbsc-lv-item-new-' + (j76 ? k76 : '');
				}
				V8Y(s96.addClass(w76));
				if (S76 !== false) {
					if (!h76) {
						K76 = k1Y('.mbsc-lv-back', Y76);
						if (K76.length) {
							s96.insertAfter(K76);
						} else {
							Y76.append(s96);
						}
					} else if (S76 < h76) {
						s96.insertBefore(q76.eq(S76));
					} else {
						s96.insertAfter(q76.eq(h76 - 1));
					}
				}
				if (Y76.hasClass('mbsc-lv-v')) {
					T1Y.animate(s96.height(s96[0].offsetHeight), j76 && N2Y === D76 ? 'none' : 'expand', function(b76) {
						T1Y.animate(b76.height(''), j76 ? 'add-' + k76 : 'pop-in', function(y76) {
							Z76.call(p1Y, y76.removeClass(w76));
							t76();
						});
					});
				} else {
					Z76.call(p1Y, s96.removeClass(w76));
					t76();
				}
				R1Y.trigger('mbsc-enhance', [{
					theme: i1Y.theme,
					lang: i1Y.lang
				}]);
				F1Y('onItemAdd', {
					target: s96[0]
				});
			});
		};
		T1Y.swipe = function(J76, M76, A76, c76, e76) {
			J76 = l0Y(J76);
			m1Y = J76;
			m0Y = c76;
			c0Y = true;
			h0Y = true;
			A76 = A76 === t1Y ? 300 : A76;
			d1Y = M76 > 0 ? 1 : -1;
			G8Y();
			A8Y();
			T0Y(J76, M76, A76);
			clearTimeout(j8Y);
			clearInterval(y2Y);
			y2Y = setInterval(function() {
				z1Y = I1Y.getPosition(J76) / W0Y * 100;
				c2Y();
			}, 10);
			j8Y = setTimeout(function() {
				clearInterval(y2Y);
				z1Y = M76;
				c2Y();
				O2Y(e76);
				m0Y = false;
				c0Y = false;
				h0Y = false;
			}, A76);
		};
		T1Y.openStage = function(o76, g76, u76, P76) {
			if (r0Y[g76]) {
				T1Y.swipe(o76, r0Y[g76].percent, u76, P76);
			}
		};
		T1Y.openActions = function(v76, L76, l76, T76) {
			v76 = l0Y(v76);
			var W76 = b8Y(L0Y[v76.attr('data-type') || 'defaults'], L76 == 'left' ? -1 : 1);
			T1Y.swipe(v76, L76 == 'left' ? -W76 : W76, l76, T76);
		};
		T1Y.close = function(m76, i76) {
			T1Y.swipe(m76, 0, i76);
		};
		T1Y.remove = function(X76, H76, R76, r76) {
			var F76, f76;
			R76 = R76 || J1Y;
			X76 = l0Y(X76);
			if (X76.length) {
				f76 = X76.parent();
				F76 = O0Y(f76).index(X76);
				if (!r76) {
					if (X76.attr('data-ref') === N2Y) {
						s0Y = true;
					}
					T1Y.addUndoAction(function(E76) {
						T1Y.add(null, X76, F76, E76, f76, true);
					}, true);
				}
				E2Y(X76, function(O76) {
					H76 = H76 || X76.attr('data-pos') < 0 ? 'left' : 'right';
					if (f76.hasClass('mbsc-lv-v')) {
						T1Y.animate(X76.addClass('mbsc-lv-removed'), r76 ? 'pop-out' : 'remove-' + H76, function(B76) {
							T1Y.animate(B76.height(B76[0].offsetHeight), 'collapse', function(a76) {
								g0Y(a76.height('').removeClass('mbsc-lv-removed'));
								if (R76.call(p1Y, a76) !== false) {
									a76.remove();
								}
								O76();
							});
						});
					} else {
						if (R76.call(p1Y, X76) !== false) {
							X76.remove();
						}
						O76();
					}
					F1Y('onItemRemove', {
						target: X76[0]
					});
				});
			}
		};
		T1Y.move = function(p76, C76, d76, s76, x56, z76) {
			p76 = l0Y(p76);
			if (!z76) {
				T1Y.startActionTrack();
			}
			H1Y.append(D0Y);
			T1Y.remove(p76, d76, null, z76);
			T1Y.add(null, p76, C76, s76, x56, z76);
			if (!z76) {
				T1Y.endActionTrack();
			}
		};
		T1Y.navigate = function(Y56, Q56) {
			var D56, S56;
			Y56 = l0Y(Y56);
			D56 = Q0Y[Y56.attr('data-ref')];
			S56 = e8Y(Y56);
			if (D56) {
				r2Y(S56 >= J0Y ? 'r' : 'l', D56.parent, Y56, Q56, true);
				J0Y = S56;
			}
		};
		T1Y._processSettings = function() {
			if (O1Y.is('[mbsc-enhance]')) {
				b2Y = true;
				O1Y.removeAttr('mbsc-enhance');
			}
		};
		T1Y._init = function() {
			var Z56, q56, K56, j56 = 0, p = O1Y.find('ul,ol').length ? 'left' : 'right',
				h56 = '',
				w56 = '',
				n56 = '';
			
			K56 = i1Y.sort || i1Y.sortable;;

			Z56 = 'mbsc-lv-cont mbsc-lv-' + i1Y.theme + (i1Y.rtl ? ' mbsc-lv-rtl' : '') + (i1Y.baseTheme ? ' mbsc-lv-' + i1Y.baseTheme : '') + (i1Y.animateIcons ? ' mbsc-lv-ic-anim' : '') + (i1Y.striped ? ' mbsc-lv-alt-row ' : '') + (i1Y.fixedHeader ? ' mbsc-lv-has-fixed-header ' : '');
			T1Y.sortable = K56 || false;
			if (!R1Y) {
				h56 += '<div class="mbsc-lv-multi-c"></div>';
				h56 += '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>';
				O1Y.addClass('mbsc-lv mbsc-lv-v mbsc-lv-root').show();
				H1Y = k1Y('<div class="mbsc-lv-stage-c">' + h56 + '</div>');
				D0Y = k1Y('.mbsc-lv-ic-c', H1Y);
				k2Y = k1Y('.mbsc-lv-multi-c', H1Y);
				H0Y = k1Y('.mbsc-lv-ic-s', H1Y);
				z0Y = k1Y('.mbsc-lv-ic-text', H1Y);
				j0Y = k1Y('<li class="mbsc-lv-item mbsc-lv-ph"></li>');
				R0Y = k1Y('<div class="mbsc-lv-fill-item"></div>');
				R1Y = k1Y('<div class="' + Z56 + '"><ul class="mbsc-lv mbsc-lv-dummy"></ul><div class="mbsc-lv-sl-c"></div></div>');
				Z0Y = i1Y.context !== 'body';
				r1Y = k1Y(Z0Y ? i1Y.context : g1Y);
				D8Y = k1Y('.mbsc-lv-dummy', R1Y);
				R1Y.insertAfter(O1Y);
				r1Y.on('orientationchange resize', o2Y);
				o2Y();
				R1Y.on('touchstart mousedown', '.mbsc-lv-item', o8Y).on('touchmove', '.mbsc-lv-item', A2Y).on('touchend touchcancel', '.mbsc-lv-item', F0Y);
				if (p1Y.addEventListener) {
					p1Y.addEventListener('click', function(V56) {
						if (D2Y) {
							V56.stopPropagation();
							V56.preventDefault();
							D2Y = false;
						}
					}, true);
				}
				R1Y.on('touchstart mousedown', '.mbsc-lv-ic-m', function(k56) {
					if (!m0Y) {
						k56.stopPropagation();
						k56.preventDefault();
					}
					G2Y = U1Y(k56, 'X');
					a0Y = U1Y(k56, 'Y');
				}).on('touchend mouseup', '.mbsc-lv-ic-m', function(U56) {
					if (!m0Y) {
						if (U56.type === 'touchend') {
							I1Y.preventClick();
						}
						if (N1Y && !k1Y(this).hasClass('mbsc-lv-ic-disabled') && Math.abs(U1Y(U56, 'X') - G2Y) < 10 && Math.abs(U1Y(U56, 'Y') - a0Y) < 10) {
							P2Y((z1Y < 0 ? f1Y.rightMenu : f1Y.leftMenu)[k1Y(this).index()], q8Y, Z8Y);
						}
					}
				});
				W2Y = k1Y('.mbsc-lv-sl-c', R1Y).append(O1Y.addClass('mbsc-lv-sl-curr')).attr('data-ref', A1Y++);
				x0Y = O1Y;
				h2Y = R1Y;
			} else {
				R1Y.attr('class', Z56);
				if (K56.handle) {
					k1Y('.mbsc-lv-handle-c', O1Y).remove();
				}
				k1Y('li:not(.mbsc-lv-back)', O1Y).removeClass('mbsc-lv-item');
			}
			
			t2Y = '<li class="mbsc-lv-item mbsc-lv-back">' + i1Y.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + i1Y.leftArrowClass + '"></div></li>';
			i2Y = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + i1Y.rightArrowClass + '"></div>';
			if (T1Y.sortable.handle) {
				P8Y =  T1Y.sortable.handle === true ? p : T1Y.sortable.handle;
                C2Y = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + P8Y + ' mbsc-lv-handle"><div class="' + i1Y.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + i1Y.handleMarkup + '</div></div>';
            }
			
			V8Y(O1Y);
			l2Y = 0;
			L0Y = i1Y.itemGroups || {};
			L0Y.defaults = {
				swipeleft: i1Y.swipeleft,
				swiperight: i1Y.swiperight,
				stages: i1Y.stages,
				actions: i1Y.actions,
				actionsWidth: i1Y.actionsWidth
			};
			k1Y.each(L0Y, function(G56, I56) {
				I56.swipe = I56.swipe !== t1Y ? I56.swipe : i1Y.swipe;
				I56.stages = I56.stages || [];
				X2Y(I56.stages, 1, true);
				X2Y(I56.stages.left, 1);
				X2Y(I56.stages.right, -1);
				if (I56.stages.left || I56.stages.right) {
					I56.stages = [].concat(I56.stages.left || [], I56.stages.right || []);
				}
				d0Y = false;
				if (!I56.stages.length) {
					if (I56.swipeleft) {
						I56.stages.push({
							percent: -30,
							action: I56.swipeleft
						});
					}
					if (I56.swiperight) {
						I56.stages.push({
							percent: 30,
							action: I56.swiperight
						});
					}
				}
				k1Y.each(I56.stages, function(t56, N56) {
					if (N56.percent === 0) {
						d0Y = true;
						return false;
					}
				});
				if (!d0Y) {
					I56.stages.push({
						percent: 0
					});
				}
				I56.stages.sort(function(b56, y56) {
					return b56.percent - y56.percent;
				});
				k1Y.each(I56.stages, function(J56, A56) {
					if (A56.percent === 0) {
						I56.start = J56;
						return false;
					}
				});
				if (d0Y) {
					I56.left = I56.right = I56.stages[I56.start];
				} else {
					I56.left = I56.stages[I56.start - 1] || {};
					I56.right = I56.stages[I56.start + 1] || {};
				}
				if (I56.actions) {
					I56.leftMenu = I56.actions.left || I56.actions;
					I56.rightMenu = I56.actions.right || I56.leftMenu;
					w56 = '';
					n56 = '';
					for (j56 = 0; j56 < I56.leftMenu.length; j56++) {
						w56 += '<div ' + (I56.leftMenu[j56].color ? 'style="background-color: ' + I56.leftMenu[j56].color + '"' : '') + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + I56.leftMenu[j56].icon + '">' + (I56.leftMenu[j56].text || '') + '</div>';
					}
					for (j56 = 0; j56 < I56.rightMenu.length; ++j56) {
						n56 += '<div ' + (I56.rightMenu[j56].color ? 'style="background-color: ' + I56.rightMenu[j56].color + '"' : '') + ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + I56.rightMenu[j56].icon + '">' + (I56.rightMenu[j56].text || '') + '</div>';
					}
					if (I56.actions.left) {
						I56.swipe = I56.actions.right ? I56.swipe : 'right';
					}
					if (I56.actions.right) {
						I56.swipe = I56.actions.left ? I56.swipe : 'left';
					}
					I56.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + w56 + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + n56 + '</div>';
				}
			});
			if (i1Y.fixedHeader) {
				q56 = 'mbsc-lv-fixed-header' + (Z0Y ? ' mbsc-lv-fixed-header-ctx mbsc-lv-' + i1Y.theme + (i1Y.baseTheme ? ' mbsc-lv-' + i1Y.baseTheme : '') : '');
				if (!K0Y) {
					K0Y = k1Y('<div class="' + q56 + '"></div>');
					if (Z0Y) {
						r1Y.before(K0Y);
					} else {
						R1Y.prepend(K0Y);
					}
					v2Y = I1Y.throttle(g8Y, 200);
					r1Y.on('scroll touchmove', v2Y);
				} else {
					K0Y.attr('class', q56);
				}
			}
			if (i1Y.hover) {
				if (!Q2Y) {
					R1Y.on('mouseover.mbsc-lv', '.mbsc-lv-item', function() {
						if (!G0Y || G0Y[0] != this) {
							p2Y();
							G0Y = k1Y(this);
							if (L0Y[G0Y.attr('data-type') || 'defaults'].actions) {
								I8Y = setTimeout(function() {
									if (!S2Y) {
										g2Y = true;
										T1Y.openActions(G0Y, z2Y, Q2Y, false);
									} else {
										G0Y = null;
									}
								}, c8Y);
							}
						}
					}).on('mouseleave.mbsc-lv', p2Y);
				}
				Q2Y = i1Y.hover.time || 200;
				c8Y = i1Y.hover.timeout || 200;
				z2Y = i1Y.hover.direction || i1Y.hover || 'right';
			}
			if (b2Y) {
				R1Y.attr('mbsc-enhance', '');
			}
			R1Y.trigger('mbsc-enhance', [{
				theme: i1Y.theme,
				lang: i1Y.lang
			}]);
		};
		T1Y._destroy = function() {
			h2Y.append(x0Y);
			if (Z0Y && K0Y) {
				K0Y.remove();
			}
			if (b2Y) {
				O1Y.attr('mbsc-enhance', '');
			}
			R1Y.find('.mbsc-lv-txt,.mbsc-lv-img').removeClass('mbsc-lv-txt mbsc-lv-img');
			R1Y.find('ul,ol').removeClass('mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr').find('li').removeClass('mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right').removeAttr('data-ref');
			k1Y('.mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic', R1Y).remove();
			O1Y.insertAfter(R1Y);
			R1Y.remove();
			H1Y.remove();
			r1Y.off('scroll touchmove', v2Y).off('orientationchange resize', o2Y);
		};
		var Z2Y, J2Y = [],
			A0Y = [],
			p0Y = [],
			v0Y = 0;
		T1Y.startActionTrack = function() {
			if (!v0Y) {
				p0Y = [];
			}
			v0Y++;
		};
		T1Y.endActionTrack = function() {
			v0Y--;
			if (!v0Y) {
				A0Y.push(p0Y);
			}
		};
		T1Y.addUndoAction = function(c56, e56) {
			var M56 = {
				action: c56,
				async: e56
			};
			if (v0Y) {
				p0Y.push(M56);
			} else {
				A0Y.push([M56]);
				if (A0Y.length > i1Y.undoLimit) {
					A0Y.shift();
				}
			}
		};
		T1Y.undo = function() {
			var g56, o56, u56;
			function P56() {
				if (o56 < 0) {
					Z2Y = false;
					v56();
				} else {
					g56 = u56[o56];
					o56--;
					if (g56.async) {
						g56.action(P56);
					} else {
						g56.action();
						P56();
					}
				}
			}
			function v56() {
				u56 = J2Y.shift();
				if (u56) {
					Z2Y = true;
					o56 = u56.length - 1;
					P56();
				}
			}
			if (A0Y.length) {
				J2Y.push(A0Y.pop());

			}
			if (!Z2Y) {
				v56();
			}
		};
		i1Y = T1Y.settings;
		F1Y = T1Y.trigger;
		T1Y.init(h8Y);
	};
	M1Y.ListView.prototype = {
		_class: 'listview',
		_hasDef: true,
		_hasTheme: true,
		_hasLang: true,
		_defaults: {
			context: 'body',
			actionsWidth: 90,
			sortDelay: 250,
			undoLimit: 10,
			swipe: true,
			quickSwipe: true,
			animateIcons: true,
			animation: true,
			revert: true,
			vibrate: true,
			handleClass: '',
			handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
			leftArrowClass: 'mbsc-ic-arrow-left4',
			rightArrowClass: 'mbsc-ic-arrow-right4',
			backText: 'Back',
			undoText: 'Undo',
			stages: []
		}
	};
	b1Y.themes.listview.mobiscroll = {
		leftArrowClass: 'mbsc-ic-arrow-left5',
		rightArrowClass: 'mbsc-ic-arrow-right5'
	};
	b1Y.presetShort('listview', 'ListView');
}(window, document));
(function() {
	mobiscroll.themes.listview.ios = {
		leftArrowClass: 'mbsc-ic-ion-ios7-arrow-back',
		rightArrowClass: 'mbsc-ic-ion-ios7-arrow-forward'
	};
}());
(function() {
	mobiscroll.themes.listview.jqm = {
		handleClass: 'ui-btn ui-icon-bars ui-btn-up-c ui-btn-icon-notext ui-icon-shadow ui-corner-all ui-btn-corner-all',
		handleMarkup: '<span class="ui-btn-inner mbsc-lv-handle"><span class="ui-icon ui-icon-bars ui-icon-shadow mbsc-lv-handle">&nbsp;</span></span>',
		leftArrowClass: 'ui-btn-icon-left ui-icon-carat-l',
		rightArrowClass: 'ui-btn-icon-right ui-icon-carat-r',
		onInit: function() {
			$(this).closest('.mbsc-lv-cont').addClass($(this).data('inset') ? 'mbsc-lv-jqm-inset' : '').find('.mbsc-lv-dummy, .mbsc-lv-fixed-header').addClass('ui-listview');
			$('ul,ol', this).listview('refresh');
		},
		onItemAdd: function(L56) {
			var W56 = $(L56.target).parent();
			if (W56.hasClass('ui-listview')) {
				W56.listview('refresh');
			} else {
				W56.listview();
			}
		},
		onSortUpdate: function(l56) {
			$(l56.target).parent().listview('refresh');
		}
	};
}());
(function() {
	var T56 = mobiscroll,
		m56 = T56.$;
	T56.themes.listview.material = {
		leftArrowClass: 'mbsc-ic-material-keyboard-arrow-left',
		rightArrowClass: 'mbsc-ic-material-keyboard-arrow-right',
		onItemActivate: function(i56) {
			T56.themes.material.addRipple(m56(i56.target), i56.domEvent);
		},
		onItemDeactivate: function() {
			T56.themes.material.removeRipple();
		},
		onSlideStart: function(X56) {
			m56('.mbsc-ripple', X56.target).remove();
		},
		onSortStart: function(R56) {
			m56('.mbsc-ripple', R56.target).remove();
		}
	};
}());
(function(E56, B56, O56) {
	var H56 = mobiscroll,
		f56 = H56.$,
		F56 = f56.extend,
		r56 = H56.classes;
	r56.MenuStrip = function(t36, M36) {
		var s56, d56, I36, K36, V36, z56, A36, J36, Y36, S36, y36, b36, h36, Z36, D36, N36, C56, n36, x36, q36 = 1000,
			a56 = this,
			p56 = f56(t36);
		function U36(e36) {
			clearTimeout(b36);
			b36 = setTimeout(function() {
				k36(e36.type !== 'load');
			}, 200);
		}
		function j36(g36, o36) {
			if (!g36.length) {
				return;
			}
			var v36 = g36.offset().left,
				u36 = g36[0].offsetLeft,
				P36 = g36[0].offsetWidth,
				W36 = d56.offset().left;
			s56 = g36;
			if (o36 === O56) {
				o36 = !S36;
			}
			if (h36 && o36) {
				if (S36) {
					if (g36.attr('data-selected')) {
						w36(g36);
					} else {
						G36(g36);
					}
				} else {
					w36(f56('.mbsc-ms-item-sel', p56));
					G36(g36);
				}
			}
			if (N36 == 'a') {
				if (v36 < W36) {
					D36.scroll(-u36, q36, true);
				} else if (v36 + P36 > W36 + z56) {
					D36.scroll(z56 - u36 - P36, q36, true);
				}
			} else {
				D36.scroll(z56 / 2 - u36 - P36 / 2, q36, true);
			}
			if (o36) {
				x36('onItemTap', {
					target: g36[0]
				});
			}
		}
		function G36(L36) {
			L36.addClass(Z36).attr('data-selected', 'true').attr('aria-selected', 'true');
		}
		function w36(l36) {
			l36.removeClass(Z36).removeAttr('data-selected').removeAttr('aria-selected');
		}
		function Q36(T36) {
			if (typeof T36 !== 'object') {
				T36 = p56.children('[data-id="' + T36 + '"]');
			}
			return f56(T36);
		}
		function c36() {
			x36('onMarkupInit');
			p56.children().each(function(r36) {
				var f36, i36, m36 = f56(this),
					X36 = h36 && m36.attr('data-selected') == 'true',
					H36 = m36.attr('data-disabled') == 'true',
					R36 = m36.attr('data-icon');
				if (r36 === 0) {
					I36 = m36;
				}
				if (h36 && !S36 && X36) {
					s56 = m36;
				}
				if (m36.children().length !== 1) {
					f56('<span></span>').append(m36.contents()).appendTo(m36);
				}
				i36 = m36.children().eq(0);
				if (R36) {
					A36 = true;
				}
				if (i36.hasClass('mbsc-ms-item-i')) {
					return;
				}
				if (i36.html()) {
					J36 = true;
				}
				f36 = f56('<span class="mbsc-ms-item-i-t"><span class="mbsc-ms-item-i-c"></span></span>');
				f36.find('.mbsc-ms-item-i-c').append(i36.contents());
				i36.addClass('mbsc-ms-item-i' + (R36 ? ' mbsc-ms-ic mbsc-ic mbsc-ic-' + R36 : '')).append(f36);
				m36.attr('data-role', 'button').attr('aria-selected', X36 ? 'true' : null).attr('aria-disabled', H36 ? 'true' : null).addClass('mbsc-ms-item mbsc-btn-e ' + (C56.itemClass || '') + (X36 ? Z36 : '') + (H36 ? ' mbsc-btn-d ' + (C56.disabledClass || '') : ''));
			});
			if (A36) {
				d56.addClass('mbsc-ms-icons');
			}
			if (J36) {
				d56.addClass('mbsc-ms-txt');
			}
		}
		function k36(O36, B36) {
			var F36 = C56.itemWidth,
				E36 = C56.layout;
			a56.contWidth = z56 = d56.width();
			if (O36 && y36 === z56 || !z56) {
				return;
			}
			y36 = z56;
			if (H56.util.isNumeric(E36)) {
				Y36 = z56 ? z56 / E36 : F36;
				if (Y36 < F36) {
					E36 = 'liquid';
				}
			}
			if (F36) {
				if (E36 == 'liquid') {
					Y36 = z56 ? z56 / Math.min(Math.floor(z56 / F36), p56.children().length) : F36;
				} else if (E36 == 'fixed') {
					Y36 = F36;
				}
			}
			if (Y36) {
				p56.children().css('width', Y36 + 'px');
			}
			p56.contents().filter(function() {
				return this.nodeType == 3 && !/\S/.test(this.nodeValue);
			}).remove();
			a56.totalWidth = n36 = p56.width();
			F56(D36.settings, {
				contSize: z56,
				maxSnapScroll: C56.paging ? 1 : false,
				maxScroll: 0,
				minScroll: n36 > z56 ? z56 - n36 : 0,
				snap: C56.paging ? z56 : C56.snap ? Y36 || '.mbsc-ms-item' : false,
				elastic: n36 > z56 ? Y36 || z56 : false
			});
			D36.refresh(B36);
		}
		r56.Base.call(this, t36, M36, true);
		a56.navigate = function(a36, p36) {
			j36(Q36(a36), p36);
		};
		a56.next = function(C36) {
			var z36 = s56 ? s56.next() : I36;
			if (z36.length) {
				s56 = z36;
				j36(s56, C36);
			}
		};
		a56.prev = function(s36) {
			var d36 = s56 ? s56.prev() : I36;
			if (d36.length) {
				s56 = d36;
				j36(s56, s36);
			}
		};
		a56.select = function(x46) {
			if (!S36) {
				w36(f56('.mbsc-ms-item-sel', p56));
			}
			G36(Q36(x46));
		};
		a56.deselect = function(Y46) {
			w36(Q36(Y46));
		};
		a56.enable = function(D46) {
			Q36(D46).removeClass('mbsc-btn-d').removeAttr('data-disabled').removeAttr('aria-disabled');
		};
		a56.disable = function(S46) {
			Q36(S46).addClass('mbsc-btn-d').attr('data-disabled', 'true').attr('aria-disabled', 'true');
		};
		a56.refresh = a56.position = function(Q46) {
			p56.height('');
			c36();
			k36(false, Q46);
			p56.height(p56.height());
		};
		a56._init = function() {
			K36 = f56(C56.context == 'body' ? E56 : C56.context);
			if (C56.type == 'tabs') {
                C56.select = C56.select || 'single';
                C56.variant = C56.variant || 'b';
            } else if (g.type == 'options') {
                C56.select = C56.select || 'multiple';
                C56.variant = C56.variant || 'a';
            } else if (g.type == 'menu') {
                C56.select = C56.select || 'off';
                C56.variant = C56.variant || 'a';
            }
            if (C56.itemWidth && C56.snap === O56) {
                C56.snap = true;
            }
			N36 = C56.variant;
			h36 = C56.select != 'off';
			S36 = C56.select == 'multiple';
			Z36 = ' mbsc-ms-item-sel ' + (C56.activeClass || '');
			V36 = 'mbsc-ms-c' + ' mbsc-ms-' + N36 + ' mbsc-ms-' + C56.display + ' mbsc-' + C56.theme + ' ' + (C56.baseTheme ? ' mbsc-' + C56.baseTheme : '') + ' ' + (C56.cssClass || '') + ' ' + (C56.wrapperClass || '') + (C56.rtl ? ' mbsc-ms-rtl' : ' mbsc-ms-ltr') + (C56.itemWidth ? ' mbsc-ms-hasw' : '') + (C56.context == 'body' ? '' : ' mbsc-ms-ctx') + (h36 ? '' : ' mbsc-ms-nosel');
			if (!d56) {
				d56 = f56('<div class="' + V36 + '"><div class="mbsc-ms-sc"></div></div>').insertAfter(p56);
				d56.find('.mbsc-ms-sc').append(p56);
				D36 = new H56.classes.ScrollView(d56[0], {
					axis: 'X',
					contSize: 0,
					maxScroll: 0,
					maxSnapScroll: 1,
					minScroll: 0,
					snap: 1,
					elastic: 1,
					rtl: C56.rtl,
					mousewheel: C56.mousewheel,
					onBtnTap: function(j46) {
						j36(f56(j46.target), true);
					},
					onGestureStart: function(h46) {
						x36('onGestureStart', h46);
					},
					onGestureEnd: function(w46) {
						x36('onGestureEnd', w46);
					},
					onMove: function(n46) {
						x36('onMove', n46);
					},
					onAnimationStart: function(Z46) {
						x36('onAnimationStart', Z46);
					},
					onAnimationEnd: function(q46) {
						x36('onAnimationEnd', q46);
					}
				});
			} else {
				p56.height('');
				d56.attr('class', V36);
			}
			p56.css('display', '').addClass('mbsc-ms ' + (C56.groupClass || ''));
			c36();
			x36('onMarkupReady', {
				target: d56[0]
			});
			p56.height(p56.height());
			k36();
			d56.find('img').on('load', U36);
			K36.on('orientationchange resize', U36);
		};
		a56._destroy = function() {
			K36.off('orientationchange resize', U36);
			p56.height('').insertAfter(d56).find('.mbsc-ms-item').width('');
			d56.remove();
			D36.destroy();
		};
		C56 = a56.settings;
		x36 = a56.trigger;
		a56.init(M36);
	};
	r56.MenuStrip.prototype = {
		_class: 'menustrip',
		_hasDef: true,
		_hasTheme: true,
		_defaults: {
			context: 'body',
			type: 'options',
			display: 'inline',
			layout: 'liquid'
		}
	};
	H56.presetShort('menustrip', 'MenuStrip');
}(window, document));
(function() {
	mobiscroll.themes.menustrip['android-holo'] = {};
}());
(function() {
	mobiscroll.themes.menustrip.bootstrap = {
		wrapperClass: 'popover panel panel-default',
		groupClass: 'btn-group',
		activeClass: 'btn-primary',
		disabledClass: 'disabled',
		itemClass: 'btn btn-default'
	};
}());
(function() {
	mobiscroll.themes.menustrip.ios = {};
}());
(function() {
	var K46 = mobiscroll.$,
		V46 = K46.mobile && K46.mobile.version && K46.mobile.version.match(/1\.4/);
	mobiscroll.themes.menustrip.jqm = {
		activeClass: 'ui-btn-active',
		disabledClass: 'ui-state-disabled',
		onThemeLoad: function(I46) {
			var k46 = I46.settings,
				U46 = k46.jqmSwatch || (V46 ? 'a' : 'c');
			k46.itemClass = 'ui-btn ui-btn-up-' + U46;
			k46.wrapperClass = 'ui-bar-' + U46;
		}
	};
}());
(function() {
	var G46 = mobiscroll.$;
	mobiscroll.themes.menustrip.material = {
		onInit: function() {
			mobiscroll.themes.material.initRipple(G46(this), '.mbsc-ms-item', 'mbsc-btn-d', 'mbsc-btn-nhl');
		},
		onMarkupInit: function() {
			G46('.mbsc-ripple', this).remove();
		}
	};
}());
(function() {
	mobiscroll.themes.menustrip.wp = {};
}());
(function(t46) {
	var b46 = mobiscroll,
		N46 = b46.$,
		y46 = {
			batch: 50,
			min: 0,
			max: 100,
			defaultUnit: '',
			units: null,
			unitNames: null,
			invalid: [],
			sign: false,
			step: 0.05,
			scale: 2,
			convert: function(J46) {
				return J46;
			},
			signText: '&nbsp;',
			wholeText: 'Whole',
			fractionText: 'Fraction',
			unitText: 'Unit'
		};
	b46.presets.scroller.measurement = function(f46) {
		var U16 = N46.extend({}, f46.settings),
			A46 = N46.extend(f46.settings, y46, U16),
			z46 = {},
			O46 = [
				[]
			],
			m46 = {},
			r46 = {},
			p46 = {},
			D16 = [],
			c46 = A46.sign,
			W46 = A46.units && A46.units.length,
			R46 = W46 ? A46.defaultUnit || A46.units[0] : '',
			a46 = [],
			e46 = A46.step < 1,
			u46 = A46.step > 1 ? A46.step : 1,
			Y16 = e46 ? Math.max(A46.scale, (A46.step + '').split('.')[1].length) : 1,
			E46 = Math.pow(10, Y16),
			T46 = Math.round(e46 ? A46.step * E46 : A46.step),
			K16, g46, H46, Z16 = -1,
			X46, o46, B46, l46, L46, P46, i46, w16, Q16, d46 = 0,
			s46 = 0,
			x16, M46, v46 = 0;
		function k16(G16) {
			return Math.max(P46, Math.min(i46, e46 ? G16 < 0 ? Math.ceil(G16) : Math.floor(G16) : j16(Math.round(G16 - d46), T46) + d46));
		}
		function S16(N16) {
			return e46 ? j16((Math.abs(N16) - Math.abs(k16(N16))) * E46 - s46, T46) + s46 : 0;
		}
		function C46(t16) {
			var b16 = k16(t16),
				y16 = S16(t16),
				J16 = t16 < 0 ? '-' : '+';
			if (y16 >= E46) {
				if (t16 < 0) {
					b16--;
				} else {
					b16++;
				}
				y16 = 0;
			}
			return [J16, b16, y16];
		}
		function q16(A16) {
			var M16 = +A16[o46],
				c16 = e46 ? A16[X46] / E46 * (M16 < 0 ? -1 : 1) : 0;
			return (c46 && A16[0] == '-' ? -1 : 1) * (M16 + c16);
		}
		function j16(g16, e16) {
			return Math.round(g16 / e16) * e16;
		}
		function I16(o16, u16) {
			o16 = o16 + '';
			while (o16.length < u16) {
				o16 = '0' + o16;
			}
			return o16;
		}
		function F46(P16, v16, W16) {
			if (v16 === W16 || !A46.convert) {
				return P16;
			}
			return A46.convert.call(this, P16, v16, W16);
		}
		function n16(L16, l16, T16) {
			L16 = L16 > T16 ? T16 : L16;
			L16 = L16 < l16 ? l16 : L16;
			return L16;
		}
		function h16(X16) {
			var m16, i16;
			l46 = F46(A46.min, R46, X16);
			L46 = F46(A46.max, R46, X16);
			if (e46) {
				P46 = l46 < 0 ? Math.ceil(l46) : Math.floor(l46);
				i46 = L46 < 0 ? Math.ceil(L46) : Math.floor(L46);
				w16 = S16(l46);
				Q16 = S16(L46);
			} else {
				P46 = Math.round(l46);
				i46 = Math.round(L46);
				i46 = P46 + Math.floor((i46 - P46) / T46) * T46;
				d46 = P46 % T46;
			}
			m16 = P46;
			i16 = i46;
			if (c46) {
				i16 = Math.abs(m16) > Math.abs(i16) ? Math.abs(m16) : Math.abs(i16);
				m16 = m16 < 0 ? 0 : m16;
			}
			r46.min = m16 < 0 ? Math.ceil(m16 / u46) : Math.floor(m16 / u46);
			r46.max = i16 < 0 ? Math.ceil(i16 / u46) : Math.floor(i16 / u46);
		}
		function V16(R16) {
			return q16(R16).toFixed(e46 ? Y16 : 0) + (W46 ? ' ' + a46[R16[B46]] : '');
		}
		f46.setVal = function(f16, H16, r16, F16, E16) {
			f46._setVal(N46.isArray(f16) ? V16(f16) : f16, H16, r16, F16, E16);
		};
		if (A46.units) {
			for (M46 = 0; M46 < A46.units.length; ++M46) {
				x16 = A46.units[M46];
				a46.push(A46.unitNames ? A46.unitNames[x16] || x16 : x16);
			}
		}
		if (c46) {
			c46 = false;
			if (W46) {
				for (M46 = 0; M46 < A46.units.length; M46++) {
					if (F46(A46.min, R46, A46.units[M46]) < 0) {
						c46 = true;
					}
				}
			} else {
				c46 = A46.min < 0;
			}
		}
		if (c46) {
			O46[0].push({
				data: ['-', '+'],
				label: A46.signText
			});
			Z16 = v46++;
		}
		r46 = {
			label: A46.wholeText,
			data: function(O16) {
				return P46 % u46 + O16 * u46;
			},
			getIndex: function(B16) {
				return Math.round((B16 - P46 % u46) / u46);
			}
		};
		O46[0].push(r46);
		o46 = v46++;
		h16(R46);
		if (e46) {
			O46[0].push(p46);
			p46.data = [];
			p46.label = A46.fractionText;
			for (M46 = s46; M46 < E46; M46 += T46) {
				D16.push(M46);
				p46.data.push({
					value: M46,
					display: '.' + I16(M46, Y16)
				});
			}
			X46 = v46++;
			K16 = Math.ceil(100 / T46);
			if (A46.invalid && A46.invalid.length) {
				N46.each(A46.invalid, function(z16, p16) {
					var a16 = p16 > 0 ? Math.floor(p16) : Math.ceil(p16);
					if (a16 === 0) {
						a16 = p16 <= 0 ? -0.001 : 0.001;
					}
					m46[a16] = (m46[a16] || 0) + 1;
					if (p16 === 0) {
						a16 = 0.001;
						m46[a16] = (m46[a16] || 0) + 1;
					}
				});
				N46.each(m46, function(C16, d16) {
					if (d16 < K16) {
						delete m46[C16];
					} else {
						m46[C16] = C16;
					}
				});
			}
		}
		if (W46) {
			z46 = {
				data: [],
				label: A46.unitText,
				circular: false
			};
			for (M46 = 0; M46 < A46.units.length; M46++) {
				z46.data.push({
					value: M46,
					display: a46[M46]
				});
			}
			O46[0].push(z46);
		}
		B46 = v46;
		return {
			wheels: O46,
			minWidth: c46 && e46 ? 70 : 80,
			showLabel: false,
			formatValue: V16,
			parseValue: function(S06) {
				var j06 = (typeof S06 === 'number' ? S06 + '' : S06) || A46.defaultValue,
					Q06 = (j06 + '').split(' '),
					x06 = +Q06[0],
					D06 = [],
					Y06, s16 = '';
				if (W46) {
					s16 = N46.inArray(Q06[1], a46);
					s16 = s16 == -1 ? N46.inArray(R46, A46.units) : s16;
					s16 = s16 == -1 ? 0 : s16;

				}
				H46 = W46 ? A46.units[s16] : '';
				h16(H46);
				x06 = isNaN(x06) ? 0 : x06;
				x06 = n16(x06, l46, L46);
				Y06 = C46(x06);
				Y06[1] = n16(Y06[1], P46, i46);
				g46 = x06;
				if (c46) {
					D06[0] = Y06[0];
					Y06[1] = Math.abs(Y06[1]);
				}
				D06[o46] = Y06[1];
				if (e46) {
					D06[X46] = Y06[2];
				}
				if (W46) {
					D06[B46] = s16;
				}
				return D06;
			},
			onCancel: function() {
				g46 = t46;
			},
			validate: function(I06) {
				var K06, w06, N06, V06, U06, h06 = I06.values,
					q06 = I06.index,
					b06 = I06.direction,
					k06 = {},
					n06 = [],
					G06 = {},
					Z06 = W46 ? A46.units[h06[B46]] : '';
				if (c46 && q06 === 0) {
					g46 = Math.abs(g46) * (h06[0] == '-' ? -1 : 1);
				}
				if (q06 === o46 || q06 === X46 && e46 || g46 === t46 || q06 === t46) {
					g46 = q16(h06);
					H46 = Z06;
				}
				if (W46 && (q06 === B46 && H46 !== Z06) || q06 === t46) {
					h16(Z06);
					g46 = F46(g46, H46, Z06);
					H46 = Z06;
					w06 = C46(g46);
					if (q06 !== t46) {
						G06[o46] = r46;
						f46.changeWheel(G06);
					}
					if (c46) {
						h06[0] = w06[0];
					}
				}
				n06[o46] = [];
				if (c46) {
					n06[0] = [];
					if (l46 > 0) {
						n06[0].push('-');
						h06[0] = '+';
					}
					if (L46 < 0) {
						n06[0].push('+');
						h06[0] = '-';
					}
					U06 = Math.abs(h06[0] == '-' ? P46 : i46);
					for (v46 = U06 + u46; v46 < U06 + 20 * u46; v46 += u46) {
						n06[o46].push(v46);
						k06[v46] = true;
					}
				}
				g46 = n16(g46, l46, L46);
				w06 = C46(g46);
				N06 = c46 ? Math.abs(w06[1]) : w06[1];
				K06 = c46 ? h06[0] == '-' : g46 < 0;
				h06[o46] = N06;
				if (K06) {
					w06[0] = '-';
				}
				if (e46) {
					h06[X46] = w06[2];
				}
				N46.each(e46 ? m46 : A46.invalid, function(M06, A06) {
					if (c46 && K06) {
						if (A06 <= 0) {
							A06 = Math.abs(A06);
						} else {
							return;
						}
					}
					A06 = j16(F46(A06, R46, Z06), e46 ? 1 : T46);
					k06[A06] = true;
					n06[o46].push(A06);
				});
				h06[o46] = f46.getValidValue(o46, N06, b06, k06);
				w06[1] = h06[o46] * (c46 && K06 ? -1 : 1);
				if (e46) {
					n06[X46] = [];
					var t06 = c46 ? h06[0] + h06[1] : (g46 < 0 ? '-' : '+') + Math.abs(w06[1]),
						J06 = (l46 < 0 ? '-' : '+') + Math.abs(P46),
						y06 = (L46 < 0 ? '-' : '+') + Math.abs(i46);
					if (t06 === J06) {
						N46(D16).each(function(e06, c06) {
							if (K06 ? c06 > w16 : c06 < w16) {
								n06[X46].push(c06);
							}
						});
					}
					if (t06 === y06) {
						N46(D16).each(function(o06, g06) {
							if (K06 ? g06 < Q16 : g06 > Q16) {
								n06[X46].push(g06);
							}
						});
					}
					N46.each(A46.invalid, function(P06, u06) {
						V06 = C46(F46(u06, R46, Z06));
						if ((w06[0] === V06[0] || w06[1] === 0 && V06[1] === 0 && V06[2] === 0) && w06[1] === V06[1]) {
							n06[X46].push(V06[2]);
						}
					});
				}
				return {
					disabled: n06,
					valid: h06
				};
			}
		};
	};
	b46.presetShort('measurement');
}());
(function() {
	var v06 = mobiscroll,
		W06 = v06.$,
		L06 = v06.presets.scroller,
		T06 = {
			min: 0,
			max: 100,
			defaultUnit: 'km',
			units: ['m', 'km', 'in', 'ft', 'yd', 'mi']
		},
		l06 = {
			mm: 0.001,
			cm: 0.01,
			dm: 0.1,
			m: 1,
			dam: 10,
			hm: 100,
			km: 1000,
			'in': 0.0254,
			ft: 0.3048,
			yd: 0.9144,
			ch: 20.1168,
			fur: 201.168,
			mi: 1609.344,
			lea: 4828.032
		};
	v06.presetShort('distance');
	L06.distance = function(m06) {
		var i06 = W06.extend({}, T06, m06.settings);
		W06.extend(m06.settings, i06, {
			sign: false,
			convert: function(X06, R06, f06) {
				return X06 * l06[R06] / l06[f06];
			}
		});
		return L06.measurement.call(this, m06);
	};
}());
(function() {
	var H06 = mobiscroll,
		r06 = H06.$,
		F06 = H06.presets.scroller,
		O06 = {
			min: 0,
			max: 100,
			defaultUnit: 'N',
			units: ['N', 'kp', 'lbf', 'pdl']
		},
		E06 = {
			N: 1,
			kp: 9.80665,
			lbf: 4.448222,
			pdl: 0.138255
		};
	H06.presetShort('force');
	F06.force = function(B06) {
		var a06 = r06.extend({}, O06, B06.settings);
		r06.extend(B06.settings, a06, {
			sign: false,
			convert: function(p06, z06, C06) {
				return p06 * E06[z06] / E06[C06];
			}
		});
		return F06.measurement.call(this, B06);
	};
}());
(function() {
	var d06 = mobiscroll,
		s06 = d06.$,
		x26 = d06.presets.scroller,
		D26 = {
			min: 0,
			max: 1000,
			defaultUnit: 'kg',
			units: ['g', 'kg', 'oz', 'lb'],
			unitNames: {
				tlong: 't (long)',
				tshort: 't (short)'
			}
		},
		Y26 = {
			mg: 0.001,
			cg: 0.01,
			dg: 0.1,
			g: 1,
			dag: 10,
			hg: 100,
			kg: 1000,
			t: 1000000,
			drc: 1.7718452,
			oz: 28.3495,
			lb: 453.59237,
			st: 6350.29318,
			qtr: 12700.58636,
			cwt: 50802.34544,
			tlong: 1016046.9088,
			tshort: 907184.74
		};
	d06.presetShort('mass');
	x26.mass = function(S26) {
		var Q26 = s06.extend({}, D26, S26.settings);
		s06.extend(S26.settings, Q26, {
			sign: false,
			convert: function(j26, h26, w26) {
				return j26 * Y26[h26] / Y26[w26];
			}
		});
		return x26.measurement.call(this, S26);
	};
}());
(function() {
	var n26 = mobiscroll,
		Z26 = n26.$,
		q26 = n26.presets.scroller,
		V26 = {
			min: 0,
			max: 100,
			defaultUnit: 'kph',
			units: ['kph', 'mph', 'mps', 'fps', 'knot'],
			unitNames: {
				kph: 'km/h',
				mph: 'mi/h',
				mps: 'm/s',
				fps: 'ft/s',
				knot: 'knot'
			}
		},
		K26 = {
			kph: 1,
			mph: 1.60934,
			mps: 3.6,
			fps: 1.09728,
			knot: 1.852
		};
	n26.presetShort('speed');
	q26.speed = function(k26) {
		var U26 = Z26.extend({}, V26, k26.settings);
		Z26.extend(k26.settings, U26, {
			sign: false,
			convert: function(I26, G26, N26) {
				return I26 * K26[G26] / K26[N26];
			}
		});
		return q26.measurement.call(this, k26);
	};
}());
(function() {
	var t26 = mobiscroll,
		b26 = t26.$,
		y26 = t26.presets.scroller,
		J26 = {
			min: -20,
			max: 40,
			defaultUnit: 'c',
			units: ['c', 'k', 'f', 'r'],
			unitNames: {
				c: 'Â°C',
				k: 'K',
				f: 'Â°F',
				r: 'Â°R'
			}
		},
		A26 = {
			c2k: function(M26) {
				return M26 + 273.15;
			},
			c2f: function(c26) {
				return c26 * 9 / 5 + 32;
			},
			c2r: function(e26) {
				return (e26 + 273.15) * 9 / 5;
			},
			k2c: function(g26) {
				return g26 - 273.15;
			},
			k2f: function(o26) {
				return o26 * 9 / 5 - 459.67;
			},
			k2r: function(u26) {
				return u26 * 9 / 5;
			},
			f2c: function(P26) {
				return (P26 - 32) * 5 / 9;
			},
			f2k: function(v26) {
				return (v26 + 459.67) * 5 / 9;
			},
			f2r: function(W26) {
				return W26 + 459.67;
			},
			r2c: function(L26) {
				return (L26 - 491.67) * 5 / 9;
			},
			r2k: function(l26) {
				return l26 * 5 / 9;
			},
			r2f: function(T26) {
				return T26 - 459.67;
			}
		};
	t26.presetShort('temperature');
	y26.temperature = function(m26) {
		var i26 = b26.extend({}, J26, m26.settings);
		b26.extend(m26.settings, i26, {
			sign: true,
			convert: function(X26, R26, f26) {
				return A26[R26 + '2' + f26](X26);
			}
		});
		return y26.measurement.call(this, m26);
	};
}());
(function() {
	var H26 = mobiscroll,
		r26 = H26.presets.scroller;
	r26.number = r26.measurement;
	H26.presetShort('number');
}());
(function(B26) {
	var O26 = mobiscroll,
		F26 = O26.$,
		a26 = O26.presets.scroller,
		E26 = O26.util.datetime,
		p26 = O26.util,
		z26 = p26.testTouch,
		C26 = {
			autoCorrect: true,
			showSelector: true,
			minRange: 1,
			rangeTap: true,
			fromText: 'Start',
			toText: 'End'
		};
	O26.presetShort('range');
	a26.range = function(s26) {
		function e86(l86, T86) {
			if (l86) {
				l86.setFullYear(T86.getFullYear());
				l86.setMonth(T86.getMonth());
				l86.setDate(T86.getDate());
			}
		}
		function W86(m86) {
			s26._startDate = h86 = D86;
			s26._endDate = w86 = Y86;
			if (d26.startInput) {
				F26(d26.startInput).val(Z86);
				if (m86) {
					F26(d26.startInput).trigger('change');
				}
			}
			if (d26.endInput) {
				F26(d26.endInput).val(n86);
				if (m86) {
					F26(d26.endInput).trigger('change');
				}
			}
		}
		function y86(X86, R86) {
			var i86 = true;
			if (X86 && D86 && Y86) {
				if (Y86 - D86 > d26.maxRange - 1) {
					if (x86) {
						D86 = new Date(Y86 - d26.maxRange + 1);
					} else {
						Y86 = new Date(+D86 + d26.maxRange - 1);
					}
				}
				if (Y86 - D86 < d26.minRange - 1) {
					if (x86) {
						D86 = new Date(Y86 - d26.minRange + 1);
					} else {
						Y86 = new Date(+D86 + d26.minRange - 1);
					}
				}
			}
			if (!D86 || !Y86) {
				i86 = false;
			}
			if (R86) {
				v86();
			}
			return i86;
		}
		function L86() {
			return D86 && Y86 ? Math.max(1, Math.round((new Date(Y86).setHours(0, 0, 0, 0) - new Date(D86).setHours(0, 0, 0, 0)) / 86400000) + 1) : 0;
		}
		function P86(f86) {
			f86.addClass('mbsc-range-btn-sel').attr('aria-checked', 'true').find('.mbsc-range-btn').addClass(I86);
		}
		function A86() {
			if (J86 && S86) {
				F26('.mbsc-range-btn-c', S86).removeClass('mbsc-range-btn-sel').removeAttr('aria-checked').find('.mbsc-range-btn', S86).removeClass(I86);
				P86(F26('.mbsc-range-btn-c', S86).eq(x86));
			}
		}
		function v86() {
			var H86, O86, r86, B86, F86, E86 = 0,
				a86 = Q86 || !x86 ? ' mbsc-cal-day-hl mbsc-cal-sel-start' : ' mbsc-cal-sel-start',
				p86 = Q86 || x86 ? ' mbsc-cal-day-hl mbsc-cal-sel-end' : ' mbsc-cal-sel-end';
			Z86 = D86 ? E26.formatDate(j86, D86, d26) : '';
			n86 = Y86 ? E26.formatDate(j86, Y86, d26) : '';
			if (S86) {
				F26('.mbsc-range-btn-v-start', S86).html(Z86 || '&nbsp;');
				F26('.mbsc-range-btn-v-end', S86).html(n86 || '&nbsp;');
				H86 = D86 ? new Date(D86) : null;
				r86 = Y86 ? new Date(Y86) : null;
				if (!H86 && r86) {
					H86 = new Date(r86);
				}
				if (!r86 && H86) {
					r86 = new Date(H86);
				}
				F86 = x86 ? r86 : H86;
				F26('.mbsc-cal-table .mbsc-cal-day-sel .mbsc-cal-day-i', S86).removeClass(I86);
				F26('.mbsc-cal-table .mbsc-cal-day-hl', S86).removeClass(N86);
				F26('.mbsc-cal-table .mbsc-cal-day-sel', S86).removeClass('mbsc-cal-day-sel mbsc-cal-sel-start mbsc-cal-sel-end').removeAttr('aria-selected');
				if (H86 && r86) {
					O86 = H86.setHours(0, 0, 0, 0);
					B86 = r86.setHours(0, 0, 0, 0);
					while (r86 >= H86 && E86 < 84) {
						F26('.mbsc-cal-day[data-full="' + F86.getFullYear() + '-' + F86.getMonth() + '-' + F86.getDate() + '"]', S86).addClass('mbsc-cal-day-sel' + (F86.getTime() === O86 ? a86 : '') + (F86.getTime() === B86 ? p86 : '')).attr('aria-selected', 'true').find('.mbsc-cal-day-i ').addClass(I86);
						F86.setDate(F86.getDate() + (x86 ? -1 : 1));
						E86++;
					}
				}
			}
		}
		var U86, S86, V86, j86, t86, K86, k86, Z86, n86, D86, Y86, g86, o86, c86, J86, h86 = s26._startDate,
			w86 = s26._endDate,
			x86 = 0,
			G86 = new Date(),
			u86 = F26.extend({}, s26.settings),
			d26 = F26.extend(s26.settings, C26, u86),
			b86 = d26.anchor,
			Q86 = d26.rangeTap,
			I86 = d26.activeClass || '',
			M86 = 'mbsc-fr-btn-d ' + (d26.disabledClass || ''),
			N86 = 'mbsc-cal-day-hl',
			q86 = d26.defaultValue === null ? [] : d26.defaultValue || [new Date(G86.setHours(0, 0, 0, 0)), new Date(G86.getFullYear(), G86.getMonth(), G86.getDate() + 6, 23, 59, 59, 999)];
		if (Q86) {
			d26.tabs = true;
		}
		t86 = a26.calbase.call(this, s26);
		U86 = F26.extend({}, t86);
		j86 = s26.format;
		g86 = d26.controls.join('') === 'time';
		J86 = d26.controls.length == 1 && d26.controls[0] == 'calendar' ? d26.showSelector : true;
		if (d26.startInput) {
			o86 = F26(d26.startInput).prop('readonly');
			s26.attachShow(F26(d26.startInput).prop('readonly', true), function() {
				x86 = 0;
				d26.anchor = b86 || F26(d26.startInput);
			});
		}
		if (d26.endInput) {
			c86 = F26(d26.endInput).prop('readonly');
			s26.attachShow(F26(d26.endInput).prop('readonly', true), function() {
				x86 = 1;
				d26.anchor = b86 || F26(d26.endInput);
			});
		}
		s26.setVal = function(d86, x66, Y66, s86, D66) {
			var z86 = d86 || [],
				C86 = d86;
			if (z86[0] === B26 || z86[0] === null || z86[0].getTime) {
				k86 = true;
				D86 = z86[0] || null;
				Z86 = D86 ? E26.formatDate(j86, D86, d26) : '';
				if (!x86) {
					C86 = U86.parseValue(Z86, s26);
				}
			}
			if (z86[1] === B26 || z86[1] === null || z86[1].getTime) {
				k86 = true;
				Y86 = z86[1] || null;
				n86 = Y86 ? E26.formatDate(j86, Y86, d26) : '';
				if (x86) {
					C86 = U86.parseValue(n86, s26);
				}
			}
			if (!s86) {
				s26._startDate = h86 = D86;
				s26._endDate = w86 = Y86;
			}
			s26._setVal(C86, x66, Y66, s86, D66);
		};
		s26.getVal = function(S66) {
			return S66 ? [D86, Y86] : s26._hasValue ? [h86, w86] : null;
		};
		s26.getDayProps = function(j66) {
			var Q66 = D86 ? new Date(D86.getFullYear(), D86.getMonth(), D86.getDate()) : null,
				h66 = Y86 ? new Date(Y86.getFullYear(), Y86.getMonth(), Y86.getDate()) : null;
			return {
				selected: Q66 && h66 && j66 >= Q66 && j66 <= Y86,
				cssClass: ((Q86 || !x86) && Q66 && Q66.getTime() === j66.getTime() || (Q86 || x86) && h66 && h66.getTime() === j66.getTime() ? N86 : '') + (Q66 && Q66.getTime() === j66.getTime() ? ' mbsc-cal-sel-start' : '') + (h66 && h66.getTime() === j66.getTime() ? ' mbsc-cal-sel-end' : '')
			};
		};
		s26.setActiveDate = function(n66) {
			var w66;
			x86 = n66 == 'start' ? 0 : 1;
			w66 = n66 == 'start' ? D86 : Y86;
			if (s26.isVisible()) {
				A86();
				if (!Q86) {
					F26('.mbsc-cal-table .mbsc-cal-day-hl', S86).removeClass(N86);
					if (w66) {
						F26('.mbsc-cal-day[data-full="' + w66.getFullYear() + '-' + w66.getMonth() + '-' + w66.getDate() + '"]', S86).addClass(N86);
					}
				}
				if (w66) {
					K86 = true;
					s26.setDate(w66, false, 1000, true);
				}
			}
		};
		s26.getValue = s26.getVal;
		F26.extend(t86, {
			highlight: false,
			outerMonthChange: false,
			formatValue: function() {
				return Z86 + (d26.endInput ? '' : n86 ? ' - ' + n86 : '');
			},
			parseValue: function(q66) {
				var Z66 = q66 ? q66.split(' - ') : [];
				d26.defaultValue = q86[1];
				if (d26.endInput) {
					w86 = F26(d26.endInput).val() ? E26.parseDate(j86, F26(d26.endInput).val(), d26) : q86[1];
				} else {
					w86 = Z66[1] ? E26.parseDate(j86, Z66[1], d26) : q86[1];
				}
				d26.defaultValue = q86[0];
				if (d26.startInput) {
					h86 = F26(d26.startInput).val() ? E26.parseDate(j86, F26(d26.startInput).val(), d26) : q86[0];
				} else {
					h86 = Z66[0] ? E26.parseDate(j86, Z66[0], d26) : q86[0];
				}
				d26.defaultValue = q86[x86];
				Z86 = h86 ? E26.formatDate(j86, h86, d26) : '';
				n86 = w86 ? E26.formatDate(j86, w86, d26) : '';
				s26._startDate = h86;
				s26._endDate = w86;
				return U86.parseValue(x86 ? n86 : Z86, s26);
			},
			onFill: function(K66) {
				W86(K66.change);
			},
			onBeforeClose: function(V66) {
				if (V66.button === 'set' && !y86(true, true)) {
					s26.setActiveDate(x86 ? 'start' : 'end');
					return false;
				}
			},
			onHide: function() {
				U86.onHide.call(s26);
				x86 = 0;
				S86 = null;
				d26.anchor = b86;
			},
			onClear: function() {
				if (Q86) {
					x86 = 0;
				}
			},
			onBeforeShow: function() {
				d26.headerText = false;
				D86 = h86;
				Y86 = w86;
				if (d26.counter) {
					d26.headerText = function() {
						var k66 = L86();
						return (k66 > 1 ? d26.selectedPluralText || d26.selectedText : d26.selectedText).replace(/{count}/, k66);
					};
				}
				k86 = true;
			},
			onMarkupReady: function(U66) {
				var I66;
				S86 = F26(U66.target);
				if (D86) {
					K86 = true;
					s26.setDate(D86, false, 0, true);
					D86 = s26.getDate(true);
				}
				if (Y86) {
					K86 = true;
					s26.setDate(Y86, false, 0, true);
					Y86 = s26.getDate(true);
				}
				if (x86 && Y86 || !x86 && D86) {
					K86 = true;
					s26.setDate(x86 ? Y86 : D86, false, 0, true);
				}
				U86.onMarkupReady.call(this, U66);
				S86.addClass('mbsc-range');
				if (J86) {
					I66 = '<div class="mbsc-range-btn-t" role="radiogroup">' + '<div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + d26.fromText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' + (Z86 || '&nbsp;') + '</div></div></div>' + '<div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' + d26.toText + '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' + (n86 || '&nbsp;') + '</div></div></div>' + '</div>';
					F26('.mbsc-cal-tabs', S86).before(I66);
					A86();
				}
				F26('.mbsc-range-btn-c', S86).on('touchstart click', function(G66) {
					if (z26(G66, this)) {
						s26.showMonthView();
						s26.setActiveDate(F26(this).index() ? 'end' : 'start');
					}
				});
			},
			onDayChange: function(N66) {
				N66.active = x86 ? 'end' : 'start';
				V86 = true;
			},
			onSetDate: function(y66) {
				var t66 = y66.date,
					b66 = s26.order;
				if (!K86) {
					if (b66.h === B26) {
						t66.setHours(x86 ? 23 : 0);
					}
					if (b66.i === B26) {
						t66.setMinutes(x86 ? 59 : 0);
					}
					if (b66.s === B26) {
						t66.setSeconds(x86 ? 59 : 0);
					}
					t66.setMilliseconds(x86 ? 999 : 0);
					if (!k86 || V86) {
						if (Q86 && V86) {
							if (x86 == 1 && t66 < D86) {
								x86 = 0;
							}
							if (x86) {
								t66.setHours(23, 59, 59, 999);
							} else {
								t66.setHours(0, 0, 0, 0);
							}
						}
						if (x86) {
							Y86 = new Date(t66);
						} else {
							D86 = new Date(t66);
						}
						if (g86) {
							e86(D86, t66);
							e86(Y86, t66);
						}
						if (Q86 && V86 && !x86) {
							Y86 = null;
						}
					}
				}
				s26._isValid = y86(k86 || V86 || d26.autoCorrect, !K86);
				y66.active = x86 ? 'end' : 'start';
				if (!K86 && Q86) {
					if (V86) {
						x86 = x86 ? 0 : 1;
					}
					A86();
				}
				if (s26.isVisible()) {
					if (s26._isValid) {
						F26('.mbsc-fr-btn-s .mbsc-fr-btn', s26._markup).removeClass(M86);
					} else {
						F26('.mbsc-fr-btn-s .mbsc-fr-btn', s26._markup).addClass(M86);
					}
				}
				V86 = false;
				k86 = false;
				K86 = false;
			},
			onTabChange: function(J66) {
				if (J66.tab != 'calendar') {
					s26.setDate(x86 ? Y86 : D86, false, 1000, true);
				}
				y86(true, true);
			},
			onDestroy: function() {
				F26(d26.startInput).prop('readonly', o86);
				F26(d26.endInput).prop('readonly', c86);
			}
		});
		return t86;
	};
}());
(function(c66) {
	var M66 = mobiscroll,
		A66 = M66.$,
		e66 = {
			inputClass: '',
			values: 5,
			order: 'desc',
			style: 'icon',
			invalid: [],
			icon: {
				filled: 'star3',
				empty: 'star3'
			}
		};
	M66.presetShort('rating');
	M66.presets.scroller.rating = function(l66) {
		var p66 = A66.extend({}, l66.settings),
			g66 = A66.extend(l66.settings, e66, p66),
			P66 = A66(this),
			H66 = this.id + '_dummy',
			O66 = A66('label[for="' + this.id + '"]').attr('for', H66),
			z66 = g66.label !== c66 ? g66.label : O66.length ? O66.text() : P66.attr('name'),
			X66 = g66.defaultValue,
			E66 = [
				[]
			],
			B66 = {
				data: [],
				label: z66,
				circular: false
			},
			m66 = {},
			u66 = [],
			v66, f66 = false,
			o66, L66, i66, r66, F66, a66, W66, R66, C66, T66 = g66.style === 'grade' ? 'circle' : 'icon';
		if (P66.is('select')) {
			g66.values = {};
			A66('option', P66).each(function() {
				g66.values[A66(this).val()] = A66(this).text();
			});
			A66('#' + H66).remove();
		}
		if (A66.isArray(g66.values)) {
			for (o66 = 0; o66 < g66.values.length; o66++) {
				W66 = +g66.values[o66];
				if (isNaN(W66)) {
					W66 = o66 + 1;
					f66 = true;
				}
				u66.push({
					order: W66,
					key: g66.values[o66],
					value: g66.values[o66]
				});
			}
		} else if (A66.isPlainObject(g66.values)) {
			o66 = 1;
			f66 = true;
			for (R66 in g66.values) {
				W66 = +R66;
				if (isNaN(W66)) {
					W66 = o66;
				}
				u66.push({
					order: W66,
					key: R66,
					value: g66.values[R66]
				});
				o66++;
			}
		} else {
			for (o66 = 1; o66 <= g66.values; o66++) {
				u66.push({
					order: o66,
					key: o66,
					value: o66
				});
			}
		}
		if (g66.showText === c66 && f66) {
			g66.showText = true;
		}
		if (g66.icon.empty === c66) {
			g66.icon.empty = g66.icon.filled;
		}
		u66.sort(function(d66, s66) {
			return g66.order == 'desc' ? s66.order - d66.order : d66.order - s66.order;
		});
		C66 = g66.order == 'desc' ? u66[0].order : u66[u66.length - 1].order;
		for (o66 = 0; o66 < u66.length; o66++) {
			a66 = u66[o66].order;
			r66 = u66[o66].key;
			F66 = u66[o66].value;
			i66 = '';
			for (L66 = 1; L66 < a66 + 1; L66++) {
				i66 += '<span class="mbsc-rating-' + T66 + (T66 === 'circle' ? '' : ' mbsc-ic mbsc-ic-' + g66.icon.filled) + ' ">' + (T66 == 'circle' ? L66 : ' ') + '</span>';
			}
			for (L66 = a66 + 1; L66 <= C66; L66++) {
				i66 += '<span class="mbsc-rating-' + T66 + (T66 === 'circle' ? ' mbsc-rating-circle-unf' : ' mbsc-ic mbsc-ic-' + (g66.icon.empty ? g66.icon.empty + ' mbsc-rating-icon-unf' : '') + (g66.icon.empty === g66.icon.filled ? ' mbsc-rating-icon-same' : '')) + '"></span>';
			}
			if (X66 === c66) {
				X66 = r66;
			}
			i66 += g66.showText ? '<span class="mbsc-rating-txt">' + F66 + '</span>' : '';
			B66.data.push({
				value: r66,
				display: i66,
				label: F66
			});
			m66[r66] = F66;
		}
		if (P66.is('select')) {
			v66 = A66('<input type="text" id="' + H66 + '" value="' + m66[P66.val()] + '" class="' + g66.inputClass + '" placeholder="' + (g66.placeholder || '') + '" readonly />').insertBefore(P66);
		}
		E66[0].push(B66);
		if (v66) {
			l66.attachShow(v66);
		}
		if (P66.is('select')) {
			P66.hide().closest('.ui-field-contain').trigger('create');
		}
		l66.getVal = function(Y95) {
			var x95 = l66._hasValue ? l66[Y95 ? '_tempWheelArray' : '_wheelArray'][0] : null;
			return M66.util.isNumeric(x95) ? +x95 : x95;
		};
		return {
			anchor: v66,
			wheels: E66,
			headerText: false,
			compClass: 'mbsc-rating',
			setOnTap: true,
			formatValue: function(D95) {
				return m66[D95[0]];
			},
			parseValue: function(Q95) {
				var S95;
				for (S95 in m66) {
					if (v66 && S95 == Q95 || !v66 && m66[S95] == Q95) {
						return [S95];
					}
				}
				return [X66];
			},
			validate: function() {
				return {
					disabled: [g66.invalid]
				};
			},
			onFill: function(j95) {
				if (v66) {
					v66.val(j95.valueText);
					P66.val(l66._tempWheelArray[0]);
				}
			},
			onDestroy: function() {
				if (v66) {
					v66.remove();
				}
				P66.show();
			}
		};
	};
}());
(function(n95) {
	var w95 = mobiscroll,
		h95 = w95.$,
		Z95 = {
			autostart: false,
			step: 1,
			useShortLabels: false,
			labels: ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds', ''],
			labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs', ''],
			startText: 'Start',
			stopText: 'Stop',
			resetText: 'Reset',
			lapText: 'Lap',
			hideText: 'Hide'
		};
	w95.presetShort('timer');
	w95.presets.scroller.timer = function(q95) {
		function r95(p95) {
			return new Date(p95.getUTCFullYear(), p95.getUTCMonth(), p95.getUTCDate(), p95.getUTCHours(), p95.getUTCMinutes(), p95.getUTCSeconds(), p95.getUTCMilliseconds());
		}
		function a95(S75) {
			var z95 = {};
			if (m95 && I95[b95].index > I95.days.index) {
				var x75, s95, Q75, Y75, D75 = new Date(),
					C95 = N95 ? D75 : t95,
					d95 = N95 ? t95 : D75;
				d95 = r95(d95);
				C95 = r95(C95);
				z95.years = C95.getFullYear() - d95.getFullYear();
				z95.months = C95.getMonth() - d95.getMonth();
				z95.days = C95.getDate() - d95.getDate();
				z95.hours = C95.getHours() - d95.getHours();
				z95.minutes = C95.getMinutes() - d95.getMinutes();
				z95.seconds = C95.getSeconds() - d95.getSeconds();
				z95.fract = (C95.getMilliseconds() - d95.getMilliseconds()) / 10;
				for (x75 = G95.length; x75 > 0; x75--) {
					s95 = G95[x75 - 1];
					Q75 = I95[s95];
					Y75 = G95[h95.inArray(s95, G95) - 1];
					if (I95[Y75] && z95[s95] < 0) {
						z95[Y75]--;
						z95[s95] += Y75 == 'months' ? 32 - new Date(C95.getFullYear(), C95.getMonth(), 32).getDate() : Q75.until + 1;
					}
				}
				if (b95 == 'months') {
					z95.months += z95.years * 12;
					delete z95.years;
				}
			} else {
				h95(G95).each(function(h75, j75) {
					if (I95[j75].index <= I95[b95].index) {
						z95[j75] = Math.floor(S75 / I95[j75].limit);
						S75 -= z95[j75] * I95[j75].limit;
					}
				});
			}
			return z95;
		}
		function B95(Z75) {
			var q75 = 1,
				w75 = I95[Z75],
				n75 = w75.wheel,
				K75 = w75.prefix,
				k75 = 0,
				U75 = w75.until,
				V75 = I95[G95[h95.inArray(Z75, G95) - 1]];
			if (w75.index <= I95[b95].index && (!V75 || V75.limit > v95)) {
				if (!A95[Z75]) {
					H95[0].push(n75);
				}
				A95[Z75] = 1;
				n75.data = [];
				n75.label = w75.label || '';
				n75.cssClass = 'mbsc-timer-whl-' + Z75;
				if (v95 >= w75.limit) {
					q75 = Math.max(Math.round(v95 / w75.limit), 1);
					u95 = q75 * w75.limit;
				}
				if (Z75 == b95) {
					n75.min = 0;
					n75.data = function(I75) {
						return {
							value: I75,
							display: E95(I75, K75, w75.label)
						};
					};
					n75.getIndex = function(G75) {
						return G75;
					};
				} else {
					for (W95 = k75; W95 <= U75; W95 += q75) {
						n75.data.push({
							value: W95,
							display: E95(W95, K75, w75.label)
						});
					}
				}
			}
		}
		function E95(N75, t75, b75) {
			return (t75 || '') + (N75 < 10 ? '0' : '') + N75 + '<span class="mbsc-timer-lbl">' + b75 + '</span>';
		}
		function c95(M75) {
			var y75 = [],
				J75, A75 = a95(M75);
			h95(G95).each(function(e75, c75) {
				if (A95[c75]) {
					J75 = Math.max(Math.round(v95 / I95[c75].limit), 1);
					y75.push(Math.round(A75[c75] / J75) * J75);
				}
			});
			return y75;
		}
		function f95(g75) {
			if (m95) {
				k95 = t95 - new Date();
				if (k95 < 0) {
					k95 *= -1;
					N95 = true;
				} else {
					N95 = false;
				}
				V95 = 0;
				g95 = true;
			} else if (t95 !== n95) {
				g95 = false;
				k95 = t95 * 1000;
				N95 = K95.mode != 'countdown';
				if (g75) {
					V95 = 0;
				}
			} else {
				k95 = 0;
				N95 = K95.mode != 'countdown';
				g95 = N95;
				if (g75) {
					V95 = 0;
				}
			}
		}
		function R95() {
			if (y95) {
				h95('.mbsc-fr-w', U95).addClass('mbsc-timer-running mbsc-timer-locked');
				h95('.mbsc-timer-btn-toggle-c > div', U95).text(K95.stopText);
				if (q95.buttons.start.icon) {
					h95('.mbsc-timer-btn-toggle-c > div', U95).removeClass('mbsc-ic-' + q95.buttons.start.icon);
				}
				if (q95.buttons.stop.icon) {
					h95('.mbsc-timer-btn-toggle-c > div', U95).addClass('mbsc-ic-' + q95.buttons.stop.icon);
				}
				if (K95.mode == 'stopwatch') {
					h95('.mbsc-timer-btn-resetlap-c > div', U95).text(K95.lapText);
					if (q95.buttons.reset.icon) {
						h95('.mbsc-timer-btn-resetlap-c > div', U95).removeClass('mbsc-ic-' + q95.buttons.reset.icon);
					}
					if (q95.buttons.lap.icon) {
						h95('.mbsc-timer-btn-resetlap-c > div', U95).addClass('mbsc-ic-' + q95.buttons.lap.icon);
					}
				}
			} else {
				h95('.mbsc-fr-w', U95).removeClass('mbsc-timer-running');
				h95('.mbsc-timer-btn-toggle-c > div', U95).text(K95.startText);
				if (q95.buttons.start.icon) {
					h95('.mbsc-timer-btn-toggle-c > div', U95).addClass('mbsc-ic-' + q95.buttons.start.icon);
				}
				if (q95.buttons.stop.icon) {
					h95('.mbsc-timer-btn-toggle-c > div', U95).removeClass('mbsc-ic-' + q95.buttons.stop.icon);
				}
				if (K95.mode == 'stopwatch') {
					h95('.mbsc-timer-btn-resetlap-c > div', U95).text(K95.resetText);
					if (q95.buttons.reset.icon) {
						h95('.mbsc-timer-btn-resetlap-c > div', U95).addClass('mbsc-ic-' + q95.buttons.reset.icon);
					}
					if (q95.buttons.lap.icon) {
						h95('.mbsc-timer-btn-resetlap-c > div', U95).removeClass('mbsc-ic-' + q95.buttons.lap.icon);
					}
				}
			}
		}
		var W95, i95, u95, e95, o95, P95, k95, V95, N95, U95, O95, F95 = h95.extend({}, q95.settings),
			K95 = h95.extend(q95.settings, Z95, F95),
			J95 = K95.useShortLabels ? K95.labelsShort : K95.labels,
			X95 = ['toggle', 'resetlap'],
			G95 = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'fract'],
			I95 = {
				'years': {
					index: 6,
					until: 10,
					limit: 1000 * 60 * 60 * 24 * 365,
					label: J95[0],
					wheel: {}
				},
				'months': {
					index: 5,
					until: 11,
					limit: 1000 * 60 * 60 * 24 * 30,
					label: J95[1],
					wheel: {}
				},
				'days': {
					index: 4,
					until: 31,
					limit: 1000 * 60 * 60 * 24,
					label: J95[2],
					wheel: {}
				},
				'hours': {
					index: 3,
					until: 23,
					limit: 1000 * 60 * 60,
					label: J95[3],
					wheel: {}
				},
				'minutes': {
					index: 2,
					until: 59,
					limit: 1000 * 60,
					label: J95[4],
					wheel: {}
				},
				'seconds': {
					index: 1,
					until: 59,
					limit: 1000,
					label: J95[5],
					wheel: {}
				},
				'fract': {
					index: 0,
					until: 99,
					limit: 10,
					label: J95[6],
					prefix: '.',
					wheel: {}
				}
			},
			A95 = {},
			l95 = [],
			T95 = 0,
			y95 = false,
			M95 = true,
			g95 = false,
			v95 = Math.max(10, K95.step * 1000),
			b95 = K95.maxWheel,
			L95 = K95.mode == 'stopwatch' || m95,
			t95 = K95.targetTime,
			m95 = t95 && t95.getTime !== n95,
			H95 = [
				[]
			];
		q95.start = function() {
			if (M95) {
				q95.reset();
			}
			if (!y95) {
				f95();
				if (!g95 && V95 >= k95) {
					return;
				}
				y95 = true;
				M95 = false;
				o95 = new Date();
				e95 = V95;
				K95.readonly = true;
				q95.setVal(c95(N95 ? V95 : k95 - V95), true, true, false, 100);
				i95 = setInterval(function() {
					V95 = new Date() - o95 + e95;
					q95.setVal(c95(N95 ? V95 : k95 - V95), true, true, false, Math.min(100, u95 - 10));
					if (!g95 && V95 + u95 >= k95) {
						clearInterval(i95);
						setTimeout(function() {
							q95.stop();
							V95 = k95;
							q95.setVal(c95(N95 ? V95 : 0), true, true, false, 100);
							q95.trigger('onFinish', {
								time: k95
							});
							M95 = true;
						}, k95 - V95);
					}
				}, u95);
				R95();
				q95.trigger('onStart');
			}
		};
		q95.stop = function() {
			if (y95) {
				y95 = false;
				clearInterval(i95);
				V95 = new Date() - o95 + e95;
				R95();
				q95.trigger('onStop', {
					ellapsed: V95
				});
			}
		};
		q95.toggle = function() {
			if (y95) {
				q95.stop();
			} else {
				q95.start();
			}
		};
		q95.reset = function() {
			q95.stop();
			V95 = 0;
			l95 = [];
			T95 = 0;
			q95.setVal(c95(N95 ? 0 : k95), true, true, false, 100);
			q95.settings.readonly = L95;
			M95 = true;
			if (!L95) {
				h95('.mbsc-fr-w', U95).removeClass('mbsc-timer-locked');
			}
			q95.trigger('onReset');
		};
		q95.lap = function() {
			if (y95) {
				P95 = new Date() - o95 + e95;
				O95 = P95 - T95;
				T95 = P95;
				l95.push(P95);
				q95.trigger('onLap', {
					ellapsed: P95,
					lap: O95,
					laps: l95
				});
			}
		};
		q95.resetlap = function() {
			if (y95 && K95.mode == 'stopwatch') {
				q95.lap();
			} else {
				q95.reset();
			}
		};
		q95.getTime = function() {
			return k95;
		};
		q95.setTime = function(o75) {
			t95 = o75 / 1000;
			k95 = o75;
		};
		q95.getEllapsedTime = function() {
			return y95 ? new Date() - o95 + e95 : 0;
		};
		q95.setEllapsedTime = function(u75, P75) {
			if (!M95) {
				e95 = V95 = u75;
				o95 = new Date();
				q95.setVal(c95(N95 ? V95 : k95 - V95), true, P75, false, 100);
			}
		};
		f95(true);
		if (!b95 && !k95) {
			b95 = 'minutes';
		}
		if (K95.display !== 'inline') {
			X95.push('hide');
		}
		if (!b95) {
			h95(G95).each(function(W75, v75) {
				if (!b95 && k95 >= I95[v75].limit) {
					b95 = v75;
					return false;
				}
			});
		}
		h95(G95).each(function(l75, L75) {
			B95(L75);
		});
		u95 = Math.max(87, u95);
		if (K95.autostart) {
			setTimeout(function() {
				q95.start();
			}, 0);
		}
		q95.handlers.toggle = q95.toggle;
		q95.handlers.start = q95.start;
		q95.handlers.stop = q95.stop;
		q95.handlers.resetlap = q95.resetlap;
		q95.handlers.reset = q95.reset;
		q95.handlers.lap = q95.lap;
		q95.buttons.toggle = {
			parentClass: 'mbsc-timer-btn-toggle-c',
			text: K95.startText,
			handler: 'toggle'
		};
		q95.buttons.start = {
			text: K95.startText,
			handler: 'start'
		};
		q95.buttons.stop = {
			text: K95.stopText,
			handler: 'stop'
		};
		q95.buttons.reset = {
			text: K95.resetText,
			handler: 'reset'
		};
		q95.buttons.lap = {
			text: K95.lapText,
			handler: 'lap'
		};
		q95.buttons.resetlap = {
			parentClass: 'mbsc-timer-btn-resetlap-c',
			text: K95.resetText,
			handler: 'resetlap'
		};
		q95.buttons.hide = {
			parentClass: 'mbsc-timer-btn-hide-c',
			text: K95.hideText,
			handler: 'cancel'
		};
		return {
			wheels: H95,
			headerText: false,
			readonly: L95,
			buttons: X95,
			mode: 'countdown',
			compClass: 'mbsc-timer',
			parseValue: function() {
				return c95(N95 ? 0 : k95);
			},
			formatValue: function(i75) {
				var m75 = '',
					T75 = 0;
				h95(G95).each(function(R75, X75) {
					if (X75 == 'fract') {
						return;
					}
					if (A95[X75]) {
						m75 += i75[T75] + (X75 == 'seconds' && A95.fract ? '.' + i75[T75 + 1] : '') + ' ' + J95[R75] + ' ';
						T75++;
					}
				});
				return m75;
			},
			validate: function(H75) {
				var r75 = H75.values,
					F75 = H75.index,
					f75 = 0;
				if (M95 && F75 !== n95) {
					t95 = 0;
					h95(G95).each(function(O75, E75) {
						if (A95[E75]) {
							t95 += I95[E75].limit * r75[f75];
							f75++;
						}
					});
					t95 /= 1000;
					f95(true);
				}
			},
			onBeforeShow: function() {
				K95.showLabel = true;
			},
			onMarkupReady: function(B75) {
				U95 = h95(B75.target);
				R95();
				if (L95) {
					h95('.mbsc-fr-w', U95).addClass('mbsc-timer-locked');
				}
			},
			onPosition: function(a75) {
				h95('.mbsc-fr-w', a75.target).css('min-width', 0).css('min-width', h95('.mbsc-fr-btn-cont', a75.target)[0].offsetWidth);
			},
			onDestroy: function() {
				clearInterval(i95);
			}
		};
	};
}());
(function(d75) {
	var z75 = mobiscroll,
		p75 = z75.$,
		C75 = {
			wheelOrder: 'hhiiss',
			useShortLabels: false,
			min: 0,
			max: Infinity,
			labels: ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds'],
			labelsShort: ['Yrs', 'Mths', 'Days', 'Hrs', 'Mins', 'Secs']
		};
	z75.presetShort('timespan');
	z75.presets.scroller.timespan = function(S55) {
		function Z55(M55) {
			var A55 = {};
			p75(q55).each(function(e55, c55) {
				A55[c55] = Q55[c55] ? Math.floor(M55 / x55[c55].limit) : 0;
				M55 -= A55[c55] * x55[c55].limit;
			});
			return A55;
		}
		function J55(u55) {
			var P55 = false,
				v55 = k55[Q55[u55] - 1] || 1,
				o55 = x55[u55],
				W55 = o55.label,
				g55 = o55.wheel;
			g55.data = [];
			g55.label = o55.label;
			if (K55.match(new RegExp(o55.re + o55.re, 'i'))) {
				P55 = true;
			}
			if (u55 == h55) {
				g55.min = n55[u55];
				g55.max = w55[u55];
				g55.data = function(L55) {
					return {
						value: L55,
						display: N55(L55 * v55, P55, W55)
					};
				};
				g55.getIndex = function(l55) {
					return Math.round(l55 / v55);
				};
			} else {
				for (j55 = 0; j55 <= o55.until; j55 += v55) {
					g55.data.push({
						value: j55,
						display: N55(j55, P55, W55)
					});
				}
			}
		}
		function N55(T55, m55, i55) {
			return (T55 < 10 && m55 ? '0' : '') + T55 + '<span class="mbsc-ts-lbl">' + i55 + '</span>';
		}
		function b55(R55) {
			var f55 = 0,
				X55 = 0;
			p75.each(Y55, function(H55, r55) {
				if (!isNaN(+R55[f55])) {
					X55 += x55[r55.v].limit * R55[H55];
				}
			});
			return X55;
		}
		function y55(E55, F55) {
			return Math.floor(E55 / F55) * F55;
		}
		var j55, V55, t55, n55, w55, I55 = p75.extend({}, S55.settings),
			s75 = p75.extend(S55.settings, C75, I55),
			K55 = s75.wheelOrder,
			D55 = s75.useShortLabels ? s75.labelsShort : s75.labels,
			q55 = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
			x55 = {
				'years': {
					ord: 0,
					index: 6,
					until: 10,
					limit: 1000 * 60 * 60 * 24 * 365,
					label: D55[0],
					re: 'y',
					wheel: {}
				},
				'months': {
					ord: 1,
					index: 5,
					until: 11,
					limit: 1000 * 60 * 60 * 24 * 30,
					label: D55[1],
					re: 'm',
					wheel: {}
				},
				'days': {
					ord: 2,
					index: 4,
					until: 31,
					limit: 1000 * 60 * 60 * 24,
					label: D55[2],
					re: 'd',
					wheel: {}
				},
				'hours': {
					ord: 3,
					index: 3,
					until: 23,
					limit: 1000 * 60 * 60,
					label: D55[3],
					re: 'h',
					wheel: {}
				},
				'minutes': {
					ord: 4,
					index: 2,
					until: 59,
					limit: 1000 * 60,
					label: D55[4],
					re: 'i',
					wheel: {}
				},
				'seconds': {
					ord: 5,
					index: 1,
					until: 59,
					limit: 1000,
					label: D55[5],
					re: 's',
					wheel: {}
				}
			},
			Y55 = [],
			k55 = s75.steps || [],
			Q55 = {},
			h55 = 'seconds',
			G55 = s75.defaultValue || Math.max(s75.min, Math.min(0, s75.max)),
			U55 = [
				[]
			];
		p75(q55).each(function(B55, O55) {
			V55 = K55.search(new RegExp(x55[O55].re, 'i'));
			if (V55 > -1) {
				Y55.push({
					o: V55,
					v: O55
				});
				if (x55[O55].index > x55[h55].index) {
					h55 = O55;
				}
			}
		});
		Y55.sort(function(a55, p55) {
			return a55.o > p55.o ? 1 : -1;
		});
		p75.each(Y55, function(C55, z55) {
			Q55[z55.v] = C55 + 1;
			U55[0].push(x55[z55.v].wheel);
		});
		n55 = Z55(s75.min);
		w55 = Z55(s75.max);
		p75.each(Y55, function(s55, d55) {
			J55(d55.v);
		});
		S55.getVal = function(x35, Y35) {
			return Y35 ? S55._getVal(x35) : S55._hasValue || x35 ? b55(S55.getArrayVal(x35)) : null;
		};
		return {
			showLabel: true,
			wheels: U55,
			compClass: 'mbsc-ts',
			parseValue: function(S35) {
				var D35 = [],
					Q35;
				if (z75.util.isNumeric(S35) || !S35) {
					t55 = Z55(S35 || G55);
					p75.each(Y55, function(h35, j35) {
						D35.push(t55[j35.v]);
					});
				} else {
					p75.each(Y55, function(n35, w35) {
						Q35 = new RegExp('(\\d+)\\s?(' + s75.labels[x55[w35.v].ord] + '|' + s75.labelsShort[x55[w35.v].ord] + ')', 'gi').exec(S35);
						D35.push(Q35 ? Q35[1] : 0);
					});
				}
				p75(D35).each(function(Z35, q35) {
					D35[Z35] = y55(q35, k55[Z35] || 1);
				});
				return D35;
			},
			formatValue: function(V35) {
				var K35 = '';
				p75.each(Y55, function(k35, U35) {
					K35 += +V35[k35] ? V35[k35] + ' ' + x55[U35.v].label + ' ' : '';
				});
				return K35 ? K35.replace(/\s+$/g, '') : 0;
			},
			validate: function(c35) {
				var A35, I35, G35, N35, J35 = c35.values,
					M35 = c35.direction,
					y35 = [],
					b35 = true,
					t35 = true;
				p75(q55).each(function(g35, e35) {
					if (Q55[e35] !== d75) {
						G35 = Q55[e35] - 1;
						y35[G35] = [];
						N35 = {};
						if (e35 != h55) {
							if (b35) {
								for (I35 = w55[e35] + 1; I35 <= x55[e35].until; I35++) {
									N35[I35] = true;
								}
							}
							if (t35) {
								for (I35 = 0; I35 < n55[e35]; I35++) {
									N35[I35] = true;
								}
							}
						}
						J35[G35] = S55.getValidValue(G35, J35[G35], M35, N35);
						A35 = Z55(b55(J35));
						b35 = b35 && A35[e35] == w55[e35];
						t35 = t35 && A35[e35] == n55[e35];
						p75.each(N35, function(o35) {
							y35[G35].push(o35);
						});
					}
				});
				return {
					disabled: y35
				};
			}
		};
	};
}());
(function(W35) {
	var P35 = mobiscroll,
		u35 = P35.$,
		v35 = P35.classes;
	v35.Widget = function(X35, R35, H35) {
		function f35(r35) {
			if (!u35('.mbsc-fr-c', r35).hasClass('mbsc-wdg-c') && mobiscroll.KvAPo) {
				u35('.mbsc-fr-c', r35).addClass('mbsc-wdg-c').append(T35.show());
				if (!u35('.mbsc-w-p', r35).length) {
					u35('.mbsc-fr-c', r35).addClass('mbsc-w-p');
				}
			}
		}
		var L35, m35, i35, T35 = u35(X35),
			l35 = this;
		v35.Frame.call(this, X35, R35, true);
		l35._generateContent = function() {
			return '';
		};
		l35._markupReady = function(F35) {
			if (L35.display != 'inline') {
				f35(F35);
			}
		};
		l35._markupInserted = function(E35) {
			if (L35.display == 'inline') {
				f35(E35);
			}
			E35.trigger('mbsc-enhance', [{
				theme: L35.theme,
				lang: L35.lang
			}]);
		};
		l35._markupRemove = function() {
			T35.hide();
			if (m35) {
				m35.prepend(T35);
			} else {
				i35.after(T35);
			}
		};
		l35.__processSettings = function() {
			L35 = l35.settings;
			l35.buttons.close = {
				text: L35.closeText,
				handler: 'cancel'
			};
			l35.buttons.ok = {
				text: L35.okText,
				handler: 'set'
			};
			L35.buttons = L35.buttons || (L35.display == 'inline' ? [] : ['ok']);
			L35.cssClass = (L35.cssClass || '') + ' mbsc-wdg';
			if (!m35 && !i35) {
				i35 = T35.prev();
				if (!i35.length) {
					m35 = T35.parent();
				}
			}
			T35.hide();
		};
		if (!H35) {
			l35.init(R35);
		}
	};
	v35.Widget.prototype = {
		_hasDef: true,
		_hasTheme: true,
		_hasContent: true,
		_class: 'widget',
		_defaults: u35.extend({}, v35.Frame.prototype._defaults, {
			okText: 'OK',
			headerText: false
		})
	};
	P35.themes.widget = P35.themes.frame;
	P35.presetShort('widget', 'Widget', false);
}());
(function() {
	var O35, a35, p35 = mobiscroll,
		C35 = p35.$,
		d35 = p35.util,
		s35 = d35.testTouch,
		B35 = d35.getCoord;
	function x45(S45, n45) {
		var Q45 = B35(n45, 'X', true),
			j45 = B35(n45, 'Y', true),
			Y45 = S45.offset(),
			h45 = Q45 - Y45.left,
			w45 = j45 - Y45.top,
			Z45 = Math.max(h45, S45[0].offsetWidth - h45),
			q45 = Math.max(w45, S45[0].offsetHeight - w45),
			D45 = 2 * Math.sqrt(Math.pow(Z45, 2) + Math.pow(q45, 2));
		z35(a35);
		a35 = C35('<span class="mbsc-ripple"></span>').css({
			width: D45,
			height: D45,
			top: j45 - Y45.top - D45 / 2,
			left: Q45 - Y45.left - D45 / 2
		}).appendTo(S45);
		setTimeout(function() {
			a35.addClass('mbsc-ripple-scaled mbsc-ripple-visible');
		}, 10);
	}
	function z35(K45) {
		setTimeout(function() {
			if (K45) {
				K45.removeClass('mbsc-ripple-visible');
				setTimeout(function() {
					K45.remove();
				}, 2000);
			}
		}, 100);
	}
	p35.themes.material = {
		addRipple: x45,
		removeRipple: function() {
			z35(a35);
		},
		initRipple: function(I45, V45, G45, N45) {
			var k45, U45;
			I45.off('.mbsc-ripple').on('touchstart.mbsc-ripple mousedown.mbsc-ripple', V45, function(t45) {
				if (s35(t45, this)) {
					k45 = B35(t45, 'X');
					U45 = B35(t45, 'Y');
					O35 = C35(this);
					if (!O35.hasClass(G45) && !O35.hasClass(N45)) {
						x45(O35, t45);
					} else {
						O35 = null;
					}
				}
			}).on('touchmove.mbsc-ripple mousemove.mbsc-ripple', V45, function(b45) {
				if (O35 && Math.abs(B35(b45, 'X') - k45) > 9 || Math.abs(B35(b45, 'Y') - U45) > 9) {
					z35(a35);
					O35 = null;
				}
			}).on('touchend.mbsc-ripple touchcancel.mbsc-ripple mouseleave.mbsc-ripple mouseup.mbsc-ripple', V45, function() {
				if (O35) {
					setTimeout(function() {
						z35(a35);
					}, 100);
					O35 = null;
				}
			});
		}
	};
}());
(function() {
	var J45 = mobiscroll,
		y45 = J45.themes,
		A45 = J45.$;
	y45.frame['ios-dark'] = {
		baseTheme: 'ios',
		display: 'bottom',
		headerText: false,
		btnWidth: false,
		deleteIcon: 'ios-backspace',
		scroll3d: true
	};
	y45.scroller['ios-dark'] = A45.extend({}, y45.frame['ios-dark'], {
		rows: 5,
		height: 34,
		minWidth: 55,
		selectedLineHeight: true,
		selectedLineBorder: 1,
		showLabel: false,
		useShortLabels: true,
		btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
		btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
		checkIcon: 'ion-ios7-checkmark-empty',
		dateDisplay: 'MMdyy',
		btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
		btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
	});
	mobiscroll.themes.listview['ios-dark'] = {
		baseTheme: 'ios'
	};
	mobiscroll.themes.menustrip['ios-dark'] = {
		baseTheme: 'ios'
	};
	mobiscroll.themes.form['ios-dark'] = {
		baseTheme: 'ios'
	};
	mobiscroll.themes.progress['ios-dark'] = {
		baseTheme: 'ios'
	};
}());
(function() {
	var c45 = mobiscroll,
		M45 = c45.$;
	c45.themes.frame['material-dark'] = {
		baseTheme: 'material',
		headerText: false,
		btnWidth: false,
		deleteIcon: 'material-backspace',
		onMarkupReady: function(e45) {
			c45.themes.material.initRipple(M45(e45.target), '.mbsc-fr-btn-e', 'mbsc-fr-btn-d', 'mbsc-fr-btn-nhl');
		}
	};
	c45.themes.scroller['material-dark'] = M45.extend({}, c45.themes.frame['material-dark'], {
		showLabel: false,
		selectedLineBorder: 2,
		weekDays: 'min',
		icon: {
			filled: 'material-star',
			empty: 'material-star-outline'
		},
		checkIcon: 'material-check',
		btnPlusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-down',
		btnMinusClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-up',
		btnCalPrevClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-left',
		btnCalNextClass: 'mbsc-ic mbsc-ic-material-keyboard-arrow-right',
		onEventBubbleShow: function(P45) {
			var g45 = M45(P45.eventList),
				o45 = M45(P45.target).closest('.mbsc-cal-row').index() < 2,
				u45 = M45('.mbsc-cal-event-color', g45).eq(o45 ? 0 : -1).css('background-color');
			M45('.mbsc-cal-events-arr', g45).css('border-color', o45 ? 'transparent transparent ' + u45 + ' transparent' : u45 + 'transparent transparent transparent');
		}
	});
	mobiscroll.themes.listview['material-dark'] = {
		baseTheme: 'material',
		onItemActivate: function(v45) {
			mobiscroll.themes.material.addRipple(M45(v45.target), v45.domEvent);
		},
		onItemDeactivate: function() {
			mobiscroll.themes.material.removeRipple();
		},
		onSlideStart: function(W45) {
			M45('.mbsc-ripple', W45.target).remove();
		},
		onSortStart: function(L45) {
			M45('.mbsc-ripple', L45.target).remove();
		}
	};
	mobiscroll.themes.menustrip['material-dark'] = {
		baseTheme: 'material',
		onInit: function() {
			mobiscroll.themes.material.initRipple(M45(this), '.mbsc-ms-item', 'mbsc-btn-d', 'mbsc-btn-nhl');
		}
	};
	mobiscroll.themes.form['material-dark'] = {
		baseTheme: 'material',
		onControlActivate: function(m45) {
			var T45, l45 = M45(m45.target);
			if (l45[0].type == 'button' || l45[0].type == 'submit') {
				T45 = l45;
			}
			if (l45.attr('data-role') == 'segmented') {
				T45 = l45.next();
			}
			if (l45.hasClass('mbsc-stepper-control') && !l45.hasClass('mbsc-step-disabled')) {
				T45 = l45.find('.mbsc-segmented-content');
			}
			if (T45) {
				mobiscroll.themes.material.addRipple(T45, m45.domEvent);
			}
		},
		onControlDeactivate: function() {
			mobiscroll.themes.material.removeRipple();
		}
	};
	mobiscroll.themes.progress['material-dark'] = {
		baseTheme: 'material'
	};
}());
(function() {
	var X45 = mobiscroll,
		i45 = X45.themes,
		R45 = X45.$;
	i45.frame['android-holo-light'] = {
		baseTheme: 'android-holo'
	};
	i45.scroller['android-holo-light'] = R45.extend({}, i45.frame['android-holo-light'], {
		dateDisplay: 'Mddyy',
		rows: 5,
		minWidth: 76,
		height: 36,
		showLabel: false,
		selectedLineBorder: 2,
		useShortLabels: true,
		icon: {
			filled: 'star3',
			empty: 'star'
		},
		btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down6',
		btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up6'
	});
	mobiscroll.themes.listview['android-holo-light'] = {
		baseTheme: 'android-holo'
	};
	mobiscroll.themes.menustrip['android-holo-light'] = {
		baseTheme: 'android-holo'
	};
	mobiscroll.themes.form['android-holo-light'] = {
		baseTheme: 'android-holo'
	};
	mobiscroll.themes.progress['android-holo-light'] = {
		baseTheme: 'android-holo'
	};
}());
(function() {
	var r45 = mobiscroll,
		f45 = r45.$,
		H45 = r45.themes;
	H45.frame['wp-light'] = {
		baseTheme: 'wp',
		headerText: false,
		deleteIcon: 'backspace4',
		btnWidth: false,
		onProcessSettings: function(O45, E45) {
			var F45 = E45.buttons;
			if (F45) {
				F45.set.icon = 'checkmark';
				F45.cancel.icon = 'close';
				F45.clear.icon = 'close';
				if (F45.ok) {
					F45.ok.icon = 'checkmark';
				}
				if (F45.close) {
					F45.close.icon = 'close';
				}
				if (F45.now) {
					F45.now.icon = 'loop2';
				}
				if (F45.toggle) {
					F45.toggle.icon = 'play3';
				}
				if (F45.start) {
					F45.start.icon = 'play3';
				}
				if (F45.stop) {
					F45.stop.icon = 'pause2';
				}
				if (F45.reset) {
					F45.reset.icon = 'stop2';
				}
				if (F45.lap) {
					F45.lap.icon = 'loop2';
				}
				if (F45.hide) {
					F45.hide.icon = 'close';
				}
			}
		}
	};
	H45.scroller['wp-light'] = f45.extend({}, H45.frame['wp-light'], {
		minWidth: 76,
		height: 76,
		dateDisplay: 'mmMMddDDyy',
		showLabel: false,
		icon: {
			filled: 'star3',
			empty: 'star'
		},
		btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left2',
		btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right2',
		btnPlusClass: 'mbsc-ic mbsc-ic-plus',
		btnMinusClass: 'mbsc-ic mbsc-ic-minus',
		onMarkupInserted: function(d45, s45) {
			var B45, p45, C45, z45 = f45(d45.target),
				a45 = s45.settings;
			function x15(Y15) {
				return f45.isArray(a45.readonly) ? a45.readonly[Y15] : a45.readonly;
			}
			f45('.mbsc-sc-whl', z45).on('touchstart mousedown wheel mousewheel', function(D15) {
				if (D15.type === 'mousedown' && p45 || x15(f45(this).attr('data-index'))) {
					return;
				}
				p45 = D15.type === 'touchstart';
				B45 = true;
				C45 = f45(this).hasClass('mbsc-sc-whl-wpa');
				f45('.mbsc-sc-whl', z45).removeClass('mbsc-sc-whl-wpa');
				f45(this).addClass('mbsc-sc-whl-wpa');
			}).on('touchmove mousemove', function() {
				B45 = false;
			}).on('touchend mouseup', function(S15) {
				if (B45 && C45 && f45(S15.target).closest('.mbsc-sc-itm').hasClass('mbsc-sc-itm-sel')) {
					f45(this).removeClass('mbsc-sc-whl-wpa');
				}
				if (S15.type === 'mouseup') {
					p45 = false;
				}
				B45 = false;
			});
		}
	});
	mobiscroll.themes.listview['wp-light'] = {
		baseTheme: 'wp'
	};
	mobiscroll.themes.menustrip['wp-light'] = {
		baseTheme: 'wp'
	};
	mobiscroll.themes.form['wp-light'] = {
		baseTheme: 'wp'
	};
	mobiscroll.themes.progress['wp-light'] = {
		baseTheme: 'wp'
	};
}());
(function() {
	var Q15 = mobiscroll.$;
	mobiscroll.themes.frame['mobiscroll-dark'] = {
		baseTheme: 'mobiscroll',
		headerText: false,
		btnWidth: false
	};
	mobiscroll.themes.scroller['mobiscroll-dark'] = Q15.extend({}, mobiscroll.themes.frame['mobiscroll-dark'], {
		rows: 5,
		showLabel: false,
		selectedLineBorder: 1,
		weekDays: 'min',
		checkIcon: 'ion-ios7-checkmark-empty',
		btnPlusClass: 'mbsc-ic mbsc-ic-arrow-down5',
		btnMinusClass: 'mbsc-ic mbsc-ic-arrow-up5',
		btnCalPrevClass: 'mbsc-ic mbsc-ic-arrow-left5',
		btnCalNextClass: 'mbsc-ic mbsc-ic-arrow-right5'
	});
	mobiscroll.themes.listview['mobiscroll-dark'] = {
		baseTheme: 'mobiscroll'
	};
	mobiscroll.themes.menustrip['mobiscroll-dark'] = {
		baseTheme: 'mobiscroll'
	};
	mobiscroll.themes.form['mobiscroll-dark'] = {
		baseTheme: 'mobiscroll'
	};
	mobiscroll.themes.progress['mobiscroll-dark'] = {
		baseTheme: 'mobiscroll'
	};
}());
(function() {
	var h15, Z15, j15 = mobiscroll,
		w15 = j15.platform,
		q15 = j15.themes,
		n15 = j15.$;
	if (w15.name == 'android') {
		h15 = w15.majorVersion >= 5 ? 'material' : 'android-holo';
	} else if (w15.name == 'ios') {
		h15 = 'ios';
	} else if (w15.name == 'wp') {
		h15 = 'wp';
	}
	n15.each(q15, function(V15, K15) {
		n15.each(K15, function(k15, U15) {
			if (U15.baseTheme == h15 && k15 != 'android-holo-light' && k15 != 'material-dark' && k15 != 'wp-light' && k15 != 'ios-dark') {
				j15.autoTheme = k15;
				Z15 = true;
				return false;
			} else if (k15 == h15) {
				j15.autoTheme = k15;
			}
		});
		if (Z15) {
			return false;
		}
	});
}());
var angular = angular || {
		module: function() {
			return this;
		},
		directive: function() {
			return this;
		},
		animation: function() {
			return this;
		}
	},
	mobiscroll = mobiscroll || {};
mobiscroll.ng = {};
(function() {
	var I15 = mobiscroll.$,
		G15 = mobiscroll.instances;
	mobiscroll.ng = {
		getDDO: function(J15, A15, M15, N15, t15, b15, y15, c15) {
			t15 = t15 || mobiscroll.ng.read;
			N15 = N15 || mobiscroll.ng.render;
			b15 = b15 || mobiscroll.ng.parse;
			y15 = y15 || mobiscroll.ng.format;
			return {
				restrict: 'A',
				require: '?ngModel',
				priority: angular.version && angular.version.major == 1 && angular.version.minor == 2 ? 1 : undefined,
				link: function(o15, P15, g15, u15) {
					var e15 = I15(P15[0]);
					mobiscroll.ng.addWatch(J15, o15, u15, e15, g15, A15, N15, t15, b15, y15);
					e15.mobiscroll(angular.extend(mobiscroll.ng.getOpt(o15, g15, A15, u15, c15, e15), M15 || {}));
					if (g15.mobiscrollInstance) {
						J15(g15.mobiscrollInstance).assign(o15, e15.mobiscroll('getInst'));
					}
				}
			};
		},
		getOpt: function(W15, L15, m15, i15, l15, X15) {
			var v15 = W15.$eval(L15.mobiscrollOptions || '{}'),
				T15 = l15 ? X15.closest('[mbsc-form-opt]') : null;
			if (l15) {
				v15 = angular.extend({}, mobiscroll.ng.formOptions[T15.attr('id')] || {}, v15);
			}
			if (i15) {
				angular.extend(v15, W15.$eval(L15[m15] || '{}'));
			}
			return v15;
		},
		read: function(O15, H15, r15, B15, F15, E15, a15) {
			var R15, f15 = G15[r15.attr('id')];
			if (f15) {
				R15 = a15(r15, f15.getVal());
				if (E15) {
					E15.$setViewValue(R15);
				} else if (F15[H15]) {
					O15(F15[H15]).assign(B15, R15);
				}
			}
		},
		render: function(C15, z15) {
			var p15 = G15[C15.attr('id')];
			if (p15 && !angular.equals(p15.getVal(), z15)) {
				p15.setVal(z15, true, false);
			}
		},
		parse: function(s15) {
			var d15 = I15(s15[0]).mobiscroll('getVal');
			return I15.isArray(d15) && !d15.length ? null : d15;
		},
		format: function(Y05, x05) {
			return I15.isArray(x05) && !x05.length ? null : x05;
		},
		addWatch: function(w05, S05, D05, Q05, q05, n05, Z05, h05, K05, j05) {
			Z05 = Z05 || mobiscroll.ng.render;
			h05 = h05 || mobiscroll.ng.read;
			K05 = K05 || mobiscroll.ng.parse;
			j05 = j05 || mobiscroll.ng.format;
			if (D05) {
				D05.$render = function() {};
				D05.$parsers.unshift(function(V05) {
					return K05(Q05, V05);
				});
				D05.$formatters.push(function(k05) {
					return j05(Q05, k05);
				});
			}
			S05.$watch(function() {
				return D05 ? D05.$modelValue : w05(q05[n05])(S05);
			}, function(U05) {
				Z05(Q05, U05);
			}, true);
			Q05.on('change', function() {
				if (!S05.$$phase) {
					S05.$apply(function() {
						h05(w05, n05, Q05, S05, q05, D05, j05);
					});
				} else {
					h05(w05, n05, Q05, S05, q05, D05, j05);
				}
			});
		},
		formOptions: {}
	};
	angular.module('mobiscroll-scroller', []).directive('mobiscrollScroller', ['$parse', function(I05) {
		return mobiscroll.ng.getDDO(I05, 'mobiscrollScroller');
	}]);
}());
(function() {
	angular.module('mobiscroll-calendar', []).directive('mobiscrollCalendar', ['$parse', function(G05) {
		return mobiscroll.ng.getDDO(G05, 'mobiscrollCalendar', {
			preset: 'calendar'
		});
	}]);
}());
(function() {
	angular.module('mobiscroll-color', []).directive('mobiscrollColor', ['$parse', function(N05) {
		return mobiscroll.ng.getDDO(N05, 'mobiscrollColor', {
			component: 'Color'
		});
	}]);
}());
(function() {
	angular.module('mobiscroll-datetime', []).directive('mobiscrollDatetime', ['$parse', function(t05) {
		return mobiscroll.ng.getDDO(t05, 'mobiscrollDatetime', {
			preset: 'datetime'
		});
	}]).directive('mobiscrollDate', ['$parse', function(b05) {
		return mobiscroll.ng.getDDO(b05, 'mobiscrollDate', {
			preset: 'date'
		});
	}]).directive('mobiscrollTime', ['$parse', function(y05) {
		return mobiscroll.ng.getDDO(y05, 'mobiscrollTime', {
			preset: 'time'
		});
	}]);
}());
(function() {
	var J05 = mobiscroll.$;
	angular.module('mobiscroll-eventcalendar', []).directive('mobiscrollEventcalendar', ['$parse', function(A05) {
		return {
			restrict: 'A',
			link: function(M05, o05, c05) {
				var g05 = J05(o05[0]);
				var e05 = g05.mobiscroll(angular.extend({}, M05.$eval(c05.mobiscrollEventcalendar || '{}'), {
					preset: 'eventcalendar',
					data: []
				})).mobiscroll('getInst');
				if (c05.mobiscrollInstance) {
					A05(c05.mobiscrollInstance).assign(M05, e05);
				}
				M05.$watch(function() {
					return A05(c05.mobiscrollData)(M05);
				}, function(u05) {
					if (u05 !== undefined && !angular.equals(e05.getEvents(), u05)) {
						e05.setEvents(u05);
					}
				}, true);
			}
		};
	}]);
}());
(function() {
	var P05 = +new Date(),
		v05 = mobiscroll.$;
	angular.module('mobiscroll-form', []).directive('mobiscrollForm', ['$parse', function(W05) {
		return {
			restrict: 'A',
			compile: function() {
				return {
					pre: function(i05, T05, m05) {
						var l05 = mobiscroll.ng.getOpt(i05, m05, 'mobiscrollForm', true),
							L05 = m05.id;
						if (!L05) {
							L05 = 'mbsc-form-' + P05++;
							T05.attr('id', L05);
						}
						T05.attr('mbsc-form-opt', '');
						mobiscroll.ng.formOptions[L05] = {
							theme: l05.theme,
							lang: l05.lang
						};
					},
					post: function(R05, H05, f05) {
						var X05 = v05(H05[0]);
						X05.mobiscroll().form(mobiscroll.ng.getOpt(R05, f05, 'mobiscrollForm', true));
						if (f05.mobiscrollInstance) {
							W05(f05.mobiscrollInstance).assign(R05, X05.mobiscroll('getInst'));
						}
						R05.$on('mbscFormRefresh', function() {
							X05.mobiscroll('refresh');
						});
					}
				};
			}
		};
	}]).directive('mobiscrollSwitch', ['$parse', function(r05) {
		return mobiscroll.ng.getDDO(r05, 'mobiscrollSwitch', {
			component: 'Switch'
		}, undefined, undefined, undefined, undefined, true);
	}]).directive('mobiscrollStepper', ['$parse', function(F05) {
		return mobiscroll.ng.getDDO(F05, 'mobiscrollStepper', {
			component: 'Stepper'
		});
	}]);
}());
(function() {
	var O05 = mobiscroll.$,
		E05 = 'mobiscrollImage',
		B05 = ['ng-repeat', 'ng:repeat', 'data-ng-repeat', 'x-ng-repeat', 'ng_repeat'];
	angular.module('mobiscroll-image', []).directive('mobiscrollRepeatRender', function() {
		return function(a05) {
			a05.$emit('mbscRepeatRender');
		};
	}).directive(E05, ['$parse', function(p05) {
		var z05 = mobiscroll.ng.getDDO(p05, E05, {
			preset: 'image'
		});
		z05.link = undefined;
		z05.compile = function(x25) {
			var d05, s05 = O05(x25[0]),
				C05;
			s05.find('li').each(function() {
				for (C05 = 0; C05 < B05.length; C05++) {
					if (O05(this).attr(B05[C05])) {
						d05 = true;
						return false;
					}
				}
			});
			if (d05) {
				s05.children().attr('mobiscroll-repeat-render', '');
			}
			return function(S25, w25, D25, j25) {
				var h25, Y25 = O05(w25[0]),
					Q25 = mobiscroll.ng.getOpt(S25, D25, E05, j25);
				mobiscroll.ng.addWatch(p05, S25, j25, Y25, D25, E05);
				if (d05) {
					S25.$on('mbscRepeatRender', function() {
						clearTimeout(h25);
						h25 = setTimeout(function() {
							Y25.mobiscroll().image(Q25);
							if (D25.mobiscrollInstance) {
								p05(D25.mobiscrollInstance).assign(S25, Y25.mobiscroll('getInst'));
							}
						}, 1);
					});
				} else if (Y25.children().length) {
					Y25.mobiscroll().image(Q25);
					if (D25.mobiscrollInstance) {
						p05(D25.mobiscrollInstance).assign(S25, Y25.mobiscroll('getInst'));
					}
				}
			};
		};
		return z05;
	}]);
}());
(function() {
	var Z25 = mobiscroll.$,
		n25 = 'mobiscrollList',
		q25 = ['ng-repeat', 'ng:repeat', 'data-ng-repeat', 'x-ng-repeat', 'ng_repeat'];
	angular.module('mobiscroll-list', []).directive('mobiscrollRepeatRender', function() {
		return function(K25) {
			K25.$emit('mbscRepeatRender');
		};
	}).directive(n25, ['$parse', function(V25) {
		var k25 = mobiscroll.ng.getDDO(V25, n25, {
			preset: 'list'
		});
		k25.link = undefined;
		k25.compile = function(N25) {
			var I25, G25 = Z25(N25[0]),
				U25;
			G25.find('li').each(function() {
				for (U25 = 0; U25 < q25.length; U25++) {
					if (Z25(this).attr(q25[U25])) {
						I25 = true;
						return false;
					}
				}
			});
			if (I25) {
				G25.children().attr('mobiscroll-repeat-render', '');
			}
			return function(y25, c25, b25, A25) {
				var M25, t25 = Z25(c25[0]),
					J25 = mobiscroll.ng.getOpt(y25, b25, n25, A25);
				mobiscroll.ng.addWatch(V25, y25, A25, t25, b25, n25);
				if (I25) {
					y25.$on('mbscRepeatRender', function() {
						clearTimeout(M25);
						M25 = setTimeout(function() {
							t25.mobiscroll().treelist(J25);
							if (b25.mobiscrollInstance) {
								V25(b25.mobiscrollInstance).assign(y25, t25.mobiscroll('getInst'));
							}
						}, 1);
					});
				} else if (t25.children().length) {
					t25.mobiscroll().treelist(J25);
					if (b25.mobiscrollInstance) {
						V25(b25.mobiscrollInstance).assign(y25, t25.mobiscroll('getInst'));
					}
				}
			};
		};
		return k25;
	}]);
}());
(function() {
	var g25, e25 = mobiscroll.$,
		v25 = +new Date(),
		o25 = [],
		u25 = {},
		P25 = {};
	function W25(l25, m25, i25) {
		var T25;
		l25 = e25(e25.parseHTML ? e25.parseHTML(l25) : l25);
		if (l25.length == 1 && l25.is('li') || e25(l25[0]).is('li')) {
			T25 = l25.clone();
			e25(T25[0]).attr('ng-repeat-start', 'item in ' + m25);
			e25(T25).filter('li').eq(-1).attr('ng-repeat-end', '').attr('mobiscroll-listview-item', i25);
		} else {
			T25 = e25('<li></li>').append(l25.clone());
			T25.attr('ng-repeat', 'item in ' + m25).attr('mobiscroll-listview-item', i25);
		}
		return T25;
	}
	function L25(R25) {
		var X25, f25 = 0;
		if (!R25) {
			return f25;
		}
		for (X25 = 0; X25 < R25.length; X25++) {
			f25++;
			if (R25[X25].children && R25[X25].children.length) {
				f25 += L25(R25[X25].children);
			}
		}
		return f25;
	}
	try {
		g25 = angular.module('ngAnimate');
	} catch (H25) {}
	if (g25) {
		o25.push('ngAnimate');
	}
	angular.module('mobiscroll-listview', o25).directive('mobiscrollListviewItem', ['$compile', '$timeout', function(F25, r25) {
		return {
			link: function(d25, x85, s25) {
				var p25, a25, O25 = e25(x85[0]),
					E25 = O25.parent('ul'),
					C25 = s25.mobiscrollListviewItem,
					B25 = u25[C25],
					z25 = O25.parents('.mbsc-lv-cont').length;
				B25.nodesLeft--;
				if (E25 && (z25 || B25.nodesLeft === 0)) {
					if (!z25) {
						d25.$emit('mbscLvLastItemAdded', B25.rootNode);
					} else {
						p25 = E25.children('li').not('.mbsc-lv-back').index(O25);
						O25.addClass('mbsc-lv-item').hide();
						if (E25.hasClass('mbsc-lv-root')) {
							r25(function() {
								E25.mobiscroll('add', null, O25.show(), p25, undefined, E25);
							});
						} else {
							r25(function() {
								E25.prepend(E25.children('.mbsc-lv-back'));
								a25 = E25.parent('li');
								e25(B25.rootNode).mobiscroll('add', null, O25.show(), p25, undefined, a25.length ? a25 : E25);
							});
						}
					}
				}
				O25.append(F25('<div style="display:none;"><ul><li mobiscroll-listview-hitem="' + C25 + '" ng-repeat="item in item.children"></li></ul></div>')(d25)[0]);
			}
		};
	}]).directive('mobiscrollListviewHitem', ['$compile', '$timeout', function(Y85) {
		return {
			link: function(Q85, w85, n85) {
				var j85 = e25(w85[0]),
					D85 = j85.parent(),
					h85 = D85.parent().hasClass('mbsc-lv-ng-init'),
					S85 = n85.mobiscrollListviewHitem;
				if (D85.children('li').not('.mbsc-lv-back').length <= 1 && !h85) {
					D85.parent().addClass('mbsc-lv-ng-init').parent().append(Y85(e25('<ul></ul>').append(W25(P25[S85], 'item.children', S85)))(Q85.$parent)[0]);
				}
				Q85.$on('$destroy', function() {
					if (D85) {
						if (!D85.children('li').length) {
							D85 = D85.parent().parent().children('ul');
							D85.remove();
						}
					}
				});
			}
		};
	}]).directive('mobiscrollListview', ['$compile', '$parse', '$timeout', function(Z85, K85, q85) {
		return {
			restrict: 'A',
			require: '?ngModel',
			compile: function(I85) {
				var U85, V85 = v25++,
					k85 = I85.html().replace(/(mbsc-ng-)|(ms-ng-)/g, 'ng-').trim();
				return function(N85, A85, G85, M85) {
					var J85, b85, t85 = e25(A85[0]);
					if (M85 || G85.mobiscrollData) {
						J85 = N85.$eval(G85.mobiscrollListview || '{}');
						b85 = G85.mobiscrollData || G85.ngModel;
					} else {
						J85 = N85.$eval(G85.mobiscrollOptions || '{}');
						b85 = G85.mobiscrollListview;
					}
					var y85 = L25(N85.$eval(b85));
					u25[V85] = {
						rootNode: t85,
						allNodes: y85,
						nodesLeft: y85
					};
					P25[V85] = k85;
					U85 = e25('<div></div>').append(W25(k85, b85, V85));
					t85.empty().append(e25(Z85(U85)(N85)[0]).contents());
					N85.$on('mbscLvLastItemAdded', function(e85, c85) {
						if (t85[0] == c85[0]) {
							q85(function() {
								t85.mobiscroll().listview(J85);
								if (G85.mobiscrollInstance) {
									N85[G85.mobiscrollInstance] = t85.mobiscroll('getInst');
								}
							});
						}
					});
					if (y85 === 0) {
						N85.$emit('mbscLvLastItemAdded', t85);
					}
				};
			}
		};
	}]);
	if (g25) {
		angular.module('mobiscroll-listview').animation('.mbsc-lv-item', function() {
			return {
				leave: function(o85, u85) {
					var g85 = e25(o85[0]);
					g85.closest('.mbsc-lv-cont').find('.mbsc-lv-root').mobiscroll('remove', g85, 'right', u85);
				}
			};
		});
	}
}());
(function() {
	angular.module('mobiscroll-measurement', []).directive('mobiscrollTemperature', ['$parse', function(P85) {
		return mobiscroll.ng.getDDO(P85, 'mobiscrollTemperature', {
			preset: 'temperature'
		});
	}]).directive('mobiscrollSpeed', ['$parse', function(v85) {
		return mobiscroll.ng.getDDO(v85, 'mobiscrollSpeed', {
			preset: 'speed'
		});
	}]).directive('mobiscrollMass', ['$parse', function(W85) {
		return mobiscroll.ng.getDDO(W85, 'mobiscrollMass', {
			preset: 'mass'
		});
	}]).directive('mobiscrollForce', ['$parse', function(L85) {
		return mobiscroll.ng.getDDO(L85, 'mobiscrollForce', {
			preset: 'force'
		});
	}]).directive('mobiscrollDistance', ['$parse', function(l85) {
		return mobiscroll.ng.getDDO(l85, 'mobiscrollDistance', {
			preset: 'distance'
		});
	}]);
}());
(function() {
	var T85 = mobiscroll.$,
		m85 = 'mobiscrollMenustrip',
		i85 = ['ng-repeat', 'ng:repeat', 'data-ng-repeat', 'x-ng-repeat', 'ng_repeat'];
	angular.module('mobiscroll-menustrip', []).directive('mobiscrollRepeatRender', function() {
		return function(X85) {
			X85.$emit('mbscRepeatRender');
		};
	}).directive(m85, ['$parse', '$timeout', function(R85, H85) {
		var f85 = mobiscroll.ng.getDDO(R85, m85, {
			component: 'MenuStrip'
		}, function() {}, function() {});
		f85.compile = function(O85) {
			var F85, r85, E85 = T85(O85[0]);
			E85.find('li').each(function() {
				for (r85 = 0; r85 < i85.length; r85++) {
					if (T85(this).attr(i85[r85])) {
						F85 = true;
						return false;
					}
				}
			});
			if (F85) {
				E85.children().attr('mobiscroll-repeat-render', '');
			}
			return function(p85, d85, a85) {
				var C85, B85 = T85(d85[0]),
					z85 = p85.$eval(a85[m85] || '{}');
				if (F85) {
					p85.$on('mbscRepeatRender', function() {
						clearTimeout(C85);
						C85 = setTimeout(function() {
							B85.mobiscroll().menustrip(z85);
							if (a85.mobiscrollInstance) {
								var s85 = R85(a85.mobiscrollInstance).assign;
								s85(p85, B85.mobiscroll('getInst'));
							}
						}, 1);
					});
				} else if (B85.children().length) {
					H85(function() {
						B85.mobiscroll().menustrip(z85);
						if (a85.mobiscrollInstance) {
							var x65 = R85(a85.mobiscrollInstance).assign;
							x65(p85, B85.mobiscroll('getInst'));
						}
					});
				}
			};
		};
		return f85;
	}]);
}());
(function() {
	angular.module('mobiscroll-number', []).directive('mobiscrollNumber', ['$parse', function(Y65) {
		return mobiscroll.ng.getDDO(Y65, 'mobiscrollNumber', {
			preset: 'number'
		});
	}]);
}());
(function() {
	angular.module('mobiscroll-numpad', []).directive('mobiscrollNumpad', ['$parse', function(D65) {
		return mobiscroll.ng.getDDO(D65, 'mobiscrollNumpad', {
			component: 'Numpad'
		});
	}]);
}());
(function() {
	angular.module('mobiscroll-progress', []).directive('mobiscrollProgress', ['$parse', function(S65) {
		return mobiscroll.ng.getDDO(S65, 'mobiscrollProgress', {
			component: 'Progress'
		}, undefined, undefined, undefined, undefined, true);
	}]);
}());
(function() {
	angular.module('mobiscroll-range', []).directive('mobiscrollRange', ['$parse', function(Q65) {
		return mobiscroll.ng.getDDO(Q65, 'mobiscrollRange', {
			preset: 'range'
		});
	}]);
}());
(function() {
	angular.module('mobiscroll-rating', []).directive('mobiscrollRating', ['$parse', function(j65) {
		return mobiscroll.ng.getDDO(j65, 'mobiscrollRating', {
			preset: 'rating'
		});
	}]);
}());
(function() {
	var w65 = ['ng-repeat', 'ng:repeat', 'data-ng-repeat', 'x-ng-repeat', 'ng_repeat'],
		h65 = mobiscroll.$;
	angular.module('mobiscroll-select', []).directive('mobiscrollSelectOption', function() {
		return {
			link: function(n65, q65, K65) {
				var Z65 = h65(q65[0]).closest('select');
				n65.$watch(K65.ngValue, function() {
					n65.$emit('mbscSelectRefresh', Z65);
				});
				n65.$on('$destroy', function() {
					n65.$emit('mbscSelectRefresh', Z65);
				});
			}
		};
	}).directive('mobiscrollSelect', ['$parse', function(V65) {
		var k65 = mobiscroll.ng.getDDO(V65, 'mobiscrollSelect', {
			preset: 'select'
		});
		k65.link = undefined;
		k65.compile = function(N65) {
			var I65, U65, G65 = h65(N65[0]);
			G65.find('option').each(function() {
				for (U65 = 0; U65 < w65.length; U65++) {
					if (h65(this).attr(w65[U65])) {
						h65(this).attr('mobiscroll-select-option', '');
						I65 = true;
						return false;
					}
				}
			});
			return function(b65, c65, t65, J65) {
				var A65 = mobiscroll.ng.getOpt(b65, t65, 'mobiscrollSelect', J65),
					y65 = h65(c65[0]),
					M65;
				if (t65.mobiscrollData) {
					angular.extend(A65, {
						data: b65.$eval(t65.mobiscrollData) || []
					});
					b65.$watchCollection(t65.mobiscrollData, function() {
						var e65 = y65.mobiscroll('getInst'),
							g65 = b65.$eval(t65.mobiscrollData);
						if (!angular.equals(e65.settings.data, g65)) {
							e65.settings.data = g65;
							e65.refresh();
						}
					});
				}
				mobiscroll.ng.addWatch(V65, b65, J65, y65, t65, 'mobiscrollSelect');
				if (I65) {
					b65.$on('mbscSelectRefresh', function(u65, o65) {
						if (y65[0] == o65[0]) {
							clearTimeout(M65);
							M65 = setTimeout(function() {
								y65.mobiscroll().select(A65);
								mobiscroll.ng.render(y65, J65 ? J65.$modelValue : V65(t65.mobiscrollSelect)(b65));
								if (t65.mobiscrollInstance) {
									V65(t65.mobiscrollInstance).assign(b65, y65.mobiscroll('getInst'));
								}
							}, 10);
						}
					});
				} else {
					y65.mobiscroll().select(A65);
					if (t65.mobiscrollInstance) {
						V65(t65.mobiscrollInstance).assign(b65, y65.mobiscroll('getInst'));
					}
				}
			};
		};
		return k65;
	}]);
}());
(function() {
	angular.module('mobiscroll-slider', []).directive('mobiscrollSlider', ['$parse', function(P65) {
		return mobiscroll.ng.getDDO(P65, 'mobiscrollSlider', {
			component: 'Slider'
		}, undefined, undefined, undefined, undefined, true);
	}]);
}());
(function() {
	var v65 = mobiscroll.$;
	angular.module('mobiscroll-timer', []).directive('mobiscrollTimer', ['$parse', function(T65) {
		return mobiscroll.ng.getDDO(T65, 'mobiscrollTimer', {
			preset: 'timer'
		}, L65, W65, l65);
	}]);
	function W65(X65, R65, f65, H65, r65, i65) {
		var m65 = v65(f65[0]);
		if (i65) {
			i65.$setViewValue(m65.mobiscroll('getEllapsedTime'));
		} else {
			X65(r65[R65]).assign(H65, m65.mobiscroll('getEllapsedTime'));
		}
	}
	function L65(E65, O65) {
		var F65 = v65(E65[0]);
		F65.mobiscroll('setEllapsedTime', O65, false).val(F65.mobiscroll('getInst')._value);
	}
	function l65(B65) {
		return v65(B65[0]).mobiscroll('getEllapsedTime');
	}
}());
(function() {
	angular.module('mobiscroll-timespan', []).directive('mobiscrollTimespan', ['$parse', function(a65) {
		return mobiscroll.ng.getDDO(a65, 'mobiscrollTimespan', {
			preset: 'timespan'
		});
	}]);
}());
(function() {
	angular.module('mobiscroll-widget', []).directive('mobiscrollWidget', ['$parse', function(p65) {
		return mobiscroll.ng.getDDO(p65, 'mobiscrollWidget', {
			component: 'Widget'
		});
	}]);
}());
