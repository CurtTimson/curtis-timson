jQuery(function(s){var i=s("html"),o=s("body");o.on("click",'[data-action="menu"], [data-action="toc"]',function(){s(this).data("action");a(s('[data-target="'+s(this).data("target")+'"]').not("[data-action]"))});var t=!1;function a(a){t?(a.removeClass("active"),i.removeClass("menu-active"),setTimeout(function(){a.removeClass("initial"),i.removeClass("menu-initial")},300),t=!1):(i.addClass("menu-initial"),a.addClass("initial"),setTimeout(function(){i.addClass("menu-active"),a.addClass("active")},1),t=!0)}function d(){s(".menu-list-item a").each(function(){var a=s(this);a.removeClass("current"),a.attr("href")==window.location.href&&a.addClass("current")})}function c(){var a=s(".post-list .post .post-image img").length,e=0;s(".post-list .post .post-image img").each(function(){var a=s(this),t=new Image;t.src=s(this).attr("src"),t.onload=function(){e++},a.load(function(){a.parents(".post-image").css({height:"0","padding-bottom":100/a.width()*a.height()+"%"})})});var t=window.setInterval(function(){a<=e&&(window.clearInterval(t),n())},100),n=function(){var a=s(".post-list").masonry({itemSelector:".post",isAnimated:!1,gutter:0,columnWidth:1,transitionDuration:0}).imagesLoaded().always(function(){a.masonry("layout")})}}function r(){s("#wrapper").fitVids()}function l(){s("[data-gist-id]").gist()}function u(){s('a[href^="'+window.location.origin+'"], .post-image a, .post-title a, .post-more a, .post-meta a, .post-tags a, #pagination a').each(function(){var a=s(this);a.hasClass("rss")||(a.addClass("js-ajax-link"),-1<a.attr("href").indexOf("page")&&a.addClass("js-archive-index"),a.attr("href")==window.location.origin&&a.addClass("js-show-index"),-1<a.attr("href").indexOf("tag")&&a.addClass("js-tag-index"),-1<a.attr("href").indexOf("author")&&a.addClass("js-author-index"))})}function m(){s(".blured-image").each(function(){var a=s(this),t=new Image;t.onload=function(){a.css("background-image","url("+t.src+")").addClass("blurUp").removeClass("filter-blur-15")},t.src=a.data("src")})}o.on("click","#menu a",function(){i.hasClass("menu-active")&&a(s('[data-target="menu"]').not("[data-action]"))}),o.on("click","#tocMenu a",function(){i.hasClass("menu-active")&&a(s('[data-target="toc"]').not("[data-action]"))}),o.on("click",".overlay",function(){i.hasClass("menu-active")&&a(s('[data-target="menu"].active,[data-target="toc"].active').not("[data-action]"))}),d(),c(),r(),l(),u(),m();var e=window.History,f=s("#ajax-container");if(s(document).ready(function(){var a=document.createElement("link");a.href=config.baseUrl+"css/main.css",a.rel="stylesheet",a.type="text/css",a.media="bogus",a.onload=function(){a.media="all"},document.getElementsByTagName("head")[0].appendChild(a),s("#loader-wrapper").fadeOut(300),s("#wrapper").fadeIn(800)}),!e.enabled)return!1;e.Adapter.bind(window,"statechange",function(){i.addClass("loading");var a=e.getState();s.get(a.url,function(a){var t=s(a),e=s("#ajax-container",t).contents(),n=a.match(/<title>(.*?)<\/title>/)[1];f.fadeOut(500,function(){i.hasClass("push-next")&&(i.removeClass("push-next"),i.addClass("pushed-next")),i.hasClass("push-prev")&&(i.removeClass("push-prev"),i.addClass("pushed-prev")),document.title=s("<textarea/>").html(n).text(),f.html(e),o.removeClass(),o.addClass(s("#body-class").attr("class")),NProgress.done(),f.fadeIn(500),s(document).scrollTop(0),setTimeout(function(){i.removeClass("loading")},50),c(),u(),r(),l(),d(),m(),!1})})}),s("body").on("click",".js-ajax-link",function(a){}),s("body").on("click","#post-index .post .js-ajax-link",function(){var a=s(this).parents(".post");a.addClass("initial"),setTimeout(function(){a.addClass("active")},1)})});