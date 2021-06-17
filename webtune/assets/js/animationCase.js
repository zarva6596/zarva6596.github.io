//wow
(function () {
    var n, t, i, l, r, a = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }, s = [].indexOf || function (e) {
        for (var t = 0, i = this.length; t < i; t++) {
            if (t in this && this[t] === e) return t
        }
        return -1
    };
    t = function () {
        function e() {
        }

        e.prototype.extend = function (e, t) {
            var i, n;
            for (i in t) {
                n = t[i];
                if (e[i] == null) {
                    e[i] = n
                }
            }
            return e
        };
        e.prototype.isMobile = function (e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        };
        e.prototype.createEvent = function (e, t, i, n) {
            var r;
            if (t == null) {
                t = false
            }
            if (i == null) {
                i = false
            }
            if (n == null) {
                n = null
            }
            if (document.createEvent != null) {
                r = document.createEvent("CustomEvent");
                r.initCustomEvent(e, t, i, n)
            } else if (document.createEventObject != null) {
                r = document.createEventObject();
                r.eventType = e
            } else {
                r.eventName = e
            }
            return r
        };
        e.prototype.emitEvent = function (e, t) {
            if (e.dispatchEvent != null) {
                return e.dispatchEvent(t)
            } else if (t in (e != null)) {
                return e[t]()
            } else if ("on" + t in (e != null)) {
                return e["on" + t]()
            }
        };
        e.prototype.addEvent = function (e, t, i) {
            if (e.addEventListener != null) {
                return e.addEventListener(t, i, false)
            } else if (e.attachEvent != null) {
                return e.attachEvent("on" + t, i)
            } else {
                return e[t] = i
            }
        };
        e.prototype.removeEvent = function (e, t, i) {
            if (e.removeEventListener != null) {
                return e.removeEventListener(t, i, false)
            } else if (e.detachEvent != null) {
                return e.detachEvent("on" + t, i)
            } else {
                return delete e[t]
            }
        };
        e.prototype.innerHeight = function () {
            if ("innerHeight" in window) {
                return window.innerHeight
            } else {
                return document.documentElement.clientHeight
            }
        };
        return e
    }();
    i = this.WeakMap || this.MozWeakMap || (i = function () {
        function e() {
            this.keys = [];
            this.values = []
        }

        e.prototype.get = function (e) {
            var t, i, n, r, a;
            a = this.keys;
            for (t = n = 0, r = a.length; n < r; t = ++n) {
                i = a[t];
                if (i === e) {
                    return this.values[t]
                }
            }
        };
        e.prototype.set = function (e, t) {
            var i, n, r, a, s;
            s = this.keys;
            for (i = r = 0, a = s.length; r < a; i = ++r) {
                n = s[i];
                if (n === e) {
                    this.values[i] = t;
                    return
                }
            }
            this.keys.push(e);
            return this.values.push(t)
        };
        return e
    }());
    n = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (n = function () {
        function e() {
            if (typeof console !== "undefined" && console !== null) {
                console.warn("MutationObserver is not supported by your browser.")
            }
            if (typeof console !== "undefined" && console !== null) {
                console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
        }

        e.notSupported = true;
        e.prototype.observe = function () {
        };
        return e
    }());
    l = this.getComputedStyle || function (i, e) {
        this.getPropertyValue = function (e) {
            var t;
            if (e === "float") {
                e = "styleFloat"
            }
            if (r.test(e)) {
                e.replace(r, function (e, t) {
                    return t.toUpperCase()
                })
            }
            return ((t = i.currentStyle) != null ? t[e] : void 0) || null
        };
        return this
    };
    r = /(\-([a-z]){1})/g;


    this.WOW = function () {
        e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
            callback: null,
            scrollContainer: null
        };

        function e(e) {
            if (e == null) {
                e = {}
            }
            this.scrollCallback = a(this.scrollCallback, this);
            this.scrollHandler = a(this.scrollHandler, this);
            this.resetAnimation = a(this.resetAnimation, this);
            this.start = a(this.start, this);
            this.scrolled = true;
            this.config = this.util().extend(e, this.defaults);
            if (e.scrollContainer != null) {
                this.config.scrollContainer = document.querySelector(e.scrollContainer)
            }
            this.animationNameCache = new i;
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        e.prototype.init = function () {
            var e;
            this.element = window.document.documentElement;
            if ((e = document.readyState) === "interactive" || e === "complete") {
                this.start()
            } else {
                this.util().addEvent(document, "DOMContentLoaded", this.start)
            }
            return this.finished = []
        };
        e.prototype.start = function () {
            var r, e, t, i;
            this.stopped = false;
            this.boxes = function () {
                var e, t, i, n;
                i = this.element.querySelectorAll("." + this.config.boxClass);
                n = [];
                for (e = 0, t = i.length; e < t; e++) {
                    r = i[e];
                    n.push(r)
                }
                return n
            }.call(this);
            this.all = function () {
                var e, t, i, n;
                i = this.boxes;
                n = [];
                for (e = 0, t = i.length; e < t; e++) {
                    r = i[e];
                    n.push(r)
                }
                return n
            }.call(this);
            if (this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle()
                } else {
                    i = this.boxes;
                    for (e = 0, t = i.length; e < t; e++) {
                        r = i[e];
                        this.applyStyle(r, true)
                    }
                }
            }
            if (!this.disabled()) {
                this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler);
                this.util().addEvent(window, "resize", this.scrollHandler);
                this.interval = setInterval(this.scrollCallback, 50)
            }
            if (this.config.live) {
                return new n(function (s) {
                    return function (e) {
                        var t, i, r, a, n;
                        n = [];
                        for (t = 0, i = e.length; t < i; t++) {
                            a = e[t];
                            n.push(function () {
                                var e, t, i, n;
                                i = a.addedNodes || [];
                                n = [];
                                for (e = 0, t = i.length; e < t; e++) {
                                    r = i[e];
                                    n.push(this.doSync(r))
                                }
                                return n
                            }.call(s))
                        }
                        return n
                    }
                }(this)).observe(document.body, {childList: true, subtree: true})
            }
        };
        e.prototype.stop = function () {
            this.stopped = true;
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler);
            this.util().removeEvent(window, "resize", this.scrollHandler);
            if (this.interval != null) {
                return clearInterval(this.interval)
            }
        };
        e.prototype.sync = function (e) {
            if (n.notSupported) {
                return this.doSync(this.element)
            }
        };
        e.prototype.doSync = function (e) {
            var t, i, n, r, a;
            if (e == null) {
                e = this.element
            }
            if (e.nodeType !== 1) {
                return
            }
            e = e.parentNode || e;
            r = e.querySelectorAll("." + this.config.boxClass);
            a = [];
            for (i = 0, n = r.length; i < n; i++) {
                t = r[i];
                if (s.call(this.all, t) < 0) {
                    this.boxes.push(t);
                    this.all.push(t);
                    if (this.stopped || this.disabled()) {
                        this.resetStyle()
                    } else {
                        this.applyStyle(t, true)
                    }
                    a.push(this.scrolled = true)
                } else {
                    a.push(void 0)
                }
            }
            return a
        };
        e.prototype.show = function (e) {
            this.applyStyle(e);
            e.className = e.className + " " + this.config.animateClass;
            if (this.config.callback != null) {
                this.config.callback(e)
            }
            this.util().emitEvent(e, this.wowEvent);
            this.util().addEvent(e, "animationend", this.resetAnimation);
            this.util().addEvent(e, "oanimationend", this.resetAnimation);
            this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation);
            this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation);
            return e
        };
        e.prototype.applyStyle = function (t, i) {
            var n, r, a;
            r = t.getAttribute("data-wow-duration");
            n = t.getAttribute("data-wow-delay");
            a = t.getAttribute("data-wow-iteration");
            return this.animate(function (e) {
                return function () {
                    return e.customStyle(t, i, r, n, a)
                }
            }(this))
        };
        e.prototype.animate = function () {
            if ("requestAnimationFrame" in window) {
                return function (e) {
                    return window.requestAnimationFrame(e)
                }
            } else {
                return function (e) {
                    return e()
                }
            }
        }();
        e.prototype.resetStyle = function () {
            var e, t, i, n, r;
            n = this.boxes;
            r = [];
            for (t = 0, i = n.length; t < i; t++) {
                e = n[t];
                r.push(e.style.visibility = "visible")
            }
            return r
        };
        e.prototype.resetAnimation = function (e) {
            var t;
            if (e.type.toLowerCase().indexOf("animationend") >= 0) {
                t = e.target || e.srcElement;
                if (t.getAttribute("class")) {
                    return t.setAttribute("class", t.getAttribute("class").replace(this.config.animateClass).trim())
                }
            }
        };
        e.prototype.customStyle = function (e, t, i, n, r) {
            if (t) {
                this.cacheAnimationName(e)
            }
            e.style.visibility = t ? "hidden" : "visible";
            if (i) {
                this.vendorSet(e.style, {animationDuration: i})
            }
            if (n) {
                this.vendorSet(e.style, {animationDelay: n})
            }
            if (r) {
                this.vendorSet(e.style, {animationIterationCount: r})
            }
            this.vendorSet(e.style, {animationName: t ? "none" : this.cachedAnimationName(e)});
            return e
        };
        e.prototype.vendors = ["moz", "webkit"];
        e.prototype.vendorSet = function (r, e) {
            var a, t, s, o;
            t = [];
            for (a in e) {
                s = e[a];
                r["" + a] = s;
                t.push(function () {
                    var e, t, i, n;
                    i = this.vendors;
                    n = [];
                    for (e = 0, t = i.length; e < t; e++) {
                        o = i[e];
                        n.push(r["" + o + a.charAt(0).toUpperCase() + a.substr(1)] = s)
                    }
                    return n
                }.call(this))
            }
            return t
        };
        e.prototype.vendorCSS = function (e, t) {
            var i, n, r, a, s, o;
            s = l(e);
            a = s.getPropertyCSSValue(t);
            r = this.vendors;
            for (i = 0, n = r.length; i < n; i++) {
                o = r[i];
                a = a || s.getPropertyCSSValue("-" + o + "-" + t)
            }
            return a
        };
        e.prototype.animationName = function (e) {
            var t, i;
            try {
                t = this.vendorCSS(e, "animation-name").cssText
            } catch (i) {
                t = l(e).getPropertyValue("animation-name")
            }
            if (t === "none") {
                return ""
            } else {
                return t
            }
        };
        e.prototype.cacheAnimationName = function (e) {
            return this.animationNameCache.set(e, this.animationName(e))
        };
        e.prototype.cachedAnimationName = function (e) {
            return this.animationNameCache.get(e)
        };
        e.prototype.scrollHandler = function () {
            return this.scrolled = true
        };
        e.prototype.scrollCallback = function () {
            var r;
            if (this.scrolled) {
                this.scrolled = false;
                this.boxes = function () {
                    var e, t, i, n;
                    i = this.boxes;
                    n = [];
                    for (e = 0, t = i.length; e < t; e++) {
                        r = i[e];
                        if (!r) {
                            continue
                        }
                        if (this.isVisible(r)) {
                            this.show(r);
                            continue
                        }
                        n.push(r)
                    }
                    return n
                }.call(this);
                if (!(this.boxes.length || this.config.live)) {
                    return this.stop()
                }
            }
        };
        e.prototype.offsetTop = function (e) {
            var t;
            while (e.offsetTop === void 0) {
                e = e.parentNode
            }
            t = e.offsetTop;
            while (e = e.offsetParent) {
                t += e.offsetTop
            }
            return t
        };
        e.prototype.isVisible = function (e) {
            var t, i, n, r, a;
            i = e.getAttribute("data-wow-offset") || this.config.offset;
            a = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
            r = a + Math.min(this.element.clientHeight, this.util().innerHeight()) - i;
            n = this.offsetTop(e);
            t = n + e.clientHeight;
            return n <= r && t >= a
        };
        e.prototype.util = function () {
            return this._util != null ? this._util : this._util = new t
        };
        e.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        };
        return e
    }()
}).call(this);
//wow


var windowWidth = $(window).outerWidth();

var frontEndApp = {
    detectBrowser: function () {
        var e = window.navigator.userAgent;
        if (e.toLowerCase().indexOf("safari") != -1) {
            if (!(e.toLowerCase().indexOf("chrome") > -1)) {
                $("body").addClass("safari")
            }
        } else if (e.toLowerCase().indexOf("firefox") > -1) {
            $("body").addClass("firefox")
        } else if (e.indexOf("MSIE ") > 0) {
            $("body").addClass("ie")
        } else if (e.indexOf("Trident/") > 0) {
            $("body").addClass("ie")
        } else if (e.indexOf("Edge/") > 0) {
            $("body").addClass("edge")
        }
    },
    detectMob: function () {
        var e = window.navigator.userAgent;
        if (e.match(/Android/i) || e.match(/webOS/i) || e.match(/iPhone/i) || e.match(/iPad/i) || e.match(/iPod/i) || e.match(/BlackBerry/i) || e.match(/Windows Phone/i)) {
            $("body").addClass("mobile")
        }
    },
    bodyClass: function () {
        if ($(".main-block").length) {
            $(".body").addClass("home-page")
        }
    },

    disableScroll: function (e) {
        e.on("mousewheel.scrolldisabler DOMMouseScroll.scrolldisabler", function (e) {
            var t = e.originalEvent;
            var i = t.wheelDelta || -t.detail;
            this.scrollTop += (i < 0 ? 1 : -1) * 30;
            e.preventDefault()
        })
    },
    enableScroll: function (e) {
        e.off("mousewheel.scrolldisabler DOMMouseScroll.scrolldisabler")
    },
    wow: function () {
        // if (windowWidth > 760) {
        var e = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 150,
            mobile: false,
            live: true,
            callback: function (e) {
            },
            scrollContainer: null
        });
        e.init()
        // }
    },
    scrollAnimation: function () {
        // if (windowWidth > 760) {
        window.requestAnimationFrame(frontEndApp.scrollAnimation);
        $(".wow").each(function () {
            var e = $(this), t = e[0].getBoundingClientRect().top, i = 100;
            if (t < $(window).outerHeight() - i && t >= 0) {
                e.addClass("animated")
            }
        })
        // }
    },
    mainAnimation: function (e) {
        /// if (windowWidth > 760) {

        e.each(function () {


            let iconCircleL = $(this).find('.circle__md');
            let jsRight = $(this).find(".js-right"), jsLeft = $(this).find(".js-left")
                , t = 900;

            jsRight.css({
                "transition-delay": t + "ms"
            });
            jsLeft.css({
                "transition-delay": t + "ms"
            });
            iconCircleL.css({
                "transition-delay": t  + 400 + "ms"
            });
        })
        // }
    },


    loadMainPage: function () {
        frontEndApp.wow();
    },
    loadInnerPage: function () {
        var e = $(".inside-preloader");
        frontEndApp.disableScroll(e);
        setTimeout(function () {
            e.addClass("close");
            setTimeout(function () {
                e.hide();
                frontEndApp.enableScroll(e);
                frontEndApp.wow()
            }, 700)
        }, 200)
    },

    init: function () {

        this.detectBrowser();
        this.detectMob();
        this.bodyClass();
        this.mainAnimation($(".case-primary-screen"));
        if (windowWidth > 760) {

        }
    }
};


frontEndApp.blog = {
    itemAnimation: function (e) {
        // if (windowWidth > 760) {

        e.each(function () {
            let jsTitle = $(this).find(".js-title")
                , t = 600;
            jsTitle.each(function () {
                $(this).css({
                    "transition-delay": t + "ms"
                });
            });

            let jsText = $(this).find(".js-text");
            jsText.css({
                "transition-delay": t + 200 + "ms"
            });

            let jsBtn = $(this).find(".js-btn");
            jsBtn.css({
                "transition-delay": t + 400 + "ms"
            })
        });


        //}
    },
    keyAnimation: function (e) {
        // if (windowWidth > 760) {
        let t = 600;
        $(e).find(".js-item").each(function () {
            $(this).css({
                "transition-delay": t + "ms"
            });
            t += 200;

        });

        setTimeout(function () {
            e.find('.progressBar').each(function () {
                $(this).bekeyProgressbar({
                    animate: true,
                });
            });
        }, 2000);
        //}
    },
    screenAnimation: function (e) {
        racknstack();

    },
    init: function () {
        var r = this;
        r.itemAnimation($(".js-section"));
        r.keyAnimation($(".js-objectives"));
        r.screenAnimation($(".case-grid"));
    }
};
$(document).ready(function () {
    frontEndApp.blog.init()
});

$(document).ready(function () {
    frontEndApp.init();


});
$(window).on("load", function () {
    frontEndApp.loadMainPage()
});



