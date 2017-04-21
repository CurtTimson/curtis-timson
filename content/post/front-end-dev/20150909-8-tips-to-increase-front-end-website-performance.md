+++
tags = ["bundling", "cdn", "css", "data-uri", "feo", "front-end", "minification", "optimisation", "performance", "sprites"]
featured = false
description = ""
date = "2015-09-09T00:00:00"
share = true
image = "images/post/wi-5.png"
title = "8 Tips to increase front end website performance"
slug = "8-tips-to-increase-front-end-website-performance"
author = "Curtis Timson"
draft = false
menu = ""
comments = true
+++
Recently I've been working on front-end performance improvements for a large web application and would like to share with you my findings. The following, in no particular order, are simple tips for achieving greater website performance:

<h3>1. Use a Content Delivery Network</h3>

<a href="http://en.wikipedia.org/wiki/Content_delivery_network" target="_blank">Content Delivery Networks</a> (CDN) can be used to serve data to your clients. Not only do they provide caching abilities, reducing load on your web servers, they also usually have servers distributed across the globe in order to send responses from nearer servers to your clients.

<a href="https://www.cloudflare.com/" target="_blank">CloudFlare</a> provide free options for CDN use.

<h3>2. Optimise Images</h3>

In browser, images can be resized on-the-fly using CSS properties.

    img {
       width:200px;
       height:200px;
    }

However doing this means that the larger image has to be downloaded to the users device before being resized. This will result in a larger file size than required. Therefore image resize should be done server-side. This can either be done physically by editing the file in photoshop, or if you intend to use the same image in different sizes across your website, an on-the-fly image resizer solution may be more appropriate.

However it's also worth noting that it's best for browser rendering to include the `width` and `height` of the image in CSS as this allows the browser to paint elements onto the page beneath the image without having to re-paint once it has loaded the image and knows the width/height that this will occupy.

<h3>3. Use CSS Sprites</h3>

Each image used on your web pages requires an additional HTTP request which results in extra overhead to your page load.

This can be reduced by grouping several images together into a CSS Sprite.

This is done by adding the contents of multiple images into one image, then use it as a background image with a particular position to show each image.

Here is an example of one of Google's current sprite images:

<img src="../../images/post/google-sprite-2015.png" alt="google-sprite-2015" width="167" height="410" class="alignnone size-full wp-image-287" />

This can then be used in CSS such as:

    .logo {
       width:50px;
       height:50px;
       background-image:url('sprite.png');
       background-repeat:no-repeat;
       background-position: -100px -100px;
    }

There are several online CSS sprite generators available, such as <a href="http://css.spritegen.com/" target="_blank">SpriteGen</a> which can make creating sprites easier.

For more information on CSS sprites see CSS Tricks in-depth article:

<a href="https://css-tricks.com/css-sprites/">https://css-tricks.com/css-sprites</a>

<h3>4. Minification of CSS and Javascript</h3>

<blockquote>Minification is the process of removing unnecessary or redundant data without affecting how the resource is processed by the browser - e.g. code comments and formatting, removing unused code, using shorter variable and function names, and so on.</blockquote>
<em>Source: <a href="https://developers.google.com/speed/docs/insights/MinifyResources">https://developers.google.com/speed/docs/insights/MinifyResources</a></em>

As the above quote states, minification reduces the code in your files, which results in a smaller file size.

There are various online tools to do this, such as <a href="http://jscompress.com/" target="_blank">JSCompress.com</a>, however this is often best automated by tools like <a href="http://vswebessentials.com/" target="_blank">Web Essentials</a> or programatically like <a href="http://www.asp.net/mvc/overview/performance/bundling-and-minification" target="_blank">ASP.NET's Bundling and Minification</a>.

<h3>5. Bundle CSS and Javascript</h3>

Just like with images, each CSS and javascript file results in an additional HTTP request.

This can be reduced by bundling multiple CSS and javascript files together into 1 single larger file.

Some frameworks have this feature built in, such as ASP.NET 4.5's <a href="http://www.asp.net/mvc/overview/performance/bundling-and-minification" target="_blank">ASP.NET's Bundling and Minification</a>.

However, bundling isn't as simple as converting all your javascript into a single file. This can sometimes hinder performance as you are no longer taking advantage of <a href="http://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser">parallel http connections</a>. Therefore it's important to analysis the best strategy, ideally breaking a bundle into multiple equal(ish) sized chunks.

General rule of thumb that I follow for seperate bundles:

<ul>
<li>JS frameworks (jQuery, Angular JS etc)</li>
<li>Core JS files (Header/Footer/Analytics logic for example)</li>
<li>Page-specific files (Homepage only files for example)</li>
</ul>


<h3>6. Reduce Render-Blocking Javascript</h3>

Before the browser can render HTML onto the screen it must first parse the HTML line by line. If the browser encounters a <code>script</code> element while doing this it must stop and execute the script. If the script is stored in an external Javascript file then it must download this file before it can execute it.

Therefore moving javascript references further down the page reduces render blocking of the initial elements at the top.

Ideally javascript references should be placed just before the end body tag, <code></body></code>, if for whatever reason this is not possible, aim to have them referenced at least <a href="http://en.wikipedia.org/wiki/Above_the_fold#Below_the_fold" target="_blank">below the fold</a>.

<strong>BAD:</strong>
<img src="../../images/post/js-bad.jpg" alt="js-bad" width="518" height="158" class="alignnone size-full wp-image-224" />

<strong>GOOD:</strong>
<img src="../../images/post/js-good.jpg" alt="js-good" width="518" height="154" class="alignnone size-full wp-image-223" />


<h3>7. Use data-uri in CSS for small images</h3>

Small images, such as icons/logos etc, can be optimised by being included in the CSS in a <a href="https://en.wikipedia.org/wiki/Data_URI_scheme">Data-URI</a> format which will reduce HTTP requests.

For example lets say you have the following site logo CSS:

    .logo
    {
        width:100px;
        height:40px;
        background-image:url('https://placeholdit.imgix.net/~text?txt=logo&w=100&h=40');
        display:block;
    }

<a target="_blank" href="http://jsfiddle.net/xrn0m0fd/">http://jsfiddle.net/xrn0m0fd/</a>

With this example the browser would detect the image URL and create a HTTP request to download the image. With small icons the biggest performance cost is the <a href="https://en.wikipedia.org/wiki/Time_To_First_Byte">Time To First Byte (TTFB)</a>. By using a Data URI format the data for the image is included within the size of the CSS request and therefore omits the TTFB for the image specifically.


<h3>8. Use Performance Test Tools</h3>

Finally you can use performance test tools to identify areas of improvement.

<ul>
<li><a href="https://developer.chrome.com/devtools" target="_blank">Google Chrome - Developer Tools</a> - This is a great tool for viewing your HTTP Waterfall in the Network tab. There's also the ability to throttle the bandwidth network so that you can emulate users on slower connections. The Audits tab will also give you suggestions on how your site could be further optimised.</li>
<li><a href="http://yslow.org/" target="_blank">YSlow</a> - A browser extension which can be installed and ran to give performance suggestions on your website.</li>
<li><a href="http://gtmetrix.com/" target="_blank">GTmetrix</a> - Similar to Chrome Developer Tools, this tool will report the waterfall of the page request, and also include information on YSlow. Furthermore it'll record reports for up to 30 days allowing you to judge page speed before and after performance changes.
</ul>
