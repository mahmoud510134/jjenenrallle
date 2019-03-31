<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:version='5' class='v5' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>




  <head>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'/>
    <b:include data='blog' name='all-head-content'/>
    <title>
		<b:if cond='data:blog.pageType == &quot;index&quot;'>
			<data:blog.pageTitle/>
		<b:else/>
			<b:if cond='data:blog.pageType != &quot;error_page&quot;'>
				<data:blog.pageName/> - <data:blog.title/>
			<b:else/>
				خطأ 404 - <data:blog.title/> 
			</b:if>
		</b:if>
    </title>
    <!-- Description and Keywords (start) -->
    <b:if cond='data:blog.pageType == &quot;index&quot;'>
    <meta content='' name='description'/>
    </b:if>
    <meta content='مدونة عربية تهتم باخبار التكنلوجيا والتقنيات الحديثة اول باول مع قراءها ومتابعيها' name='keywords'/>
    <!-- Description and Keywords (end) -->
    <b:if cond='data:blog.pageType == &quot;item&quot;'>
        <meta expr:content='data:blog.pageName' property='og:title'/>
        <meta expr:content='data:blog.canonicalUrl' property='og:url'/>
        <meta content='تكنولوجيا' property='og:type'/>
    </b:if>
    <b:if cond='data:blog.postImageUrl'>
        <meta expr:content='data:blog.postImageUrl' property='og:image'/>
    <b:else/>
    <b:if cond='data:blog.postImageThumbnailUrl'>
        <meta expr:content='data:blog.postImageThumbnailUrl' property='og:image'/>
    </b:if></b:if>
    <b:if cond='data:blog.metaDescription != &quot;&quot;'>
        <meta expr:content='data:blog.metaDescription' name='og:description'/>
    </b:if>
    <meta expr:content='data:blog.title' property='og:site_name'/>
    <meta expr:content='data:blog.homepageUrl' name='twitter:domain'/>
    <meta expr:content='data:blog.pageName' name='twitter:title'/>
    <b:if cond='data:blog.postImageUrl'>
      <meta content='summary_large_image' name='twitter:card'/>
      <meta expr:content='data:blog.postImageUrl' name='twitter:image'/>
    <b:else/>
      <meta content='summary' name='twitter:card'/>
      <b:if cond='data:blog.postImageThumbnailUrl'>
        <meta expr:content='data:blog.postImageThumbnailUrl' name='twitter:image'/> 
      </b:if>
    </b:if>
    <meta expr:content='data:blog.pageName' name='twitter:title'/>
    <b:if cond='data:blog.metaDescription'>
      <meta expr:content='data:blog.metaDescription' name='twitter:description'/>
    </b:if>
    <!-- Social Media meta tag need customer customization -->
    <meta content='Facebook App ID here' property='fb:app_id'/> 
    <meta content='Facebook Admin ID here' property='fb:admins'/> 
    <meta content='@username' name='twitter:site'/>
    <meta content='@username' name='twitter:creator'/>   
  <b:skin><![CDATA[/* 
-----------------------------------------------
Name:        https://aljjenerale.blogspot.com/
Author :     https://aljjenerale.blogspot.com/
License:     Pro Version
----------------------------------------------- */
/* Variable definitions
-----------------------
<Variable name="maincolor" description="Primary Color" type="color" default="#f1284e"  value="#ff2a52"/>
<Variable name="maindarkcolor" description="Primary Dark Color" type="color" default="#19232d"  value="#19232d"/>
-----------------------
*/
 html, body, .section, .widget, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, figure {margin: 0;padding: 0;}html {overflow-x: hidden;}a {text-decoration:none;color:#000;}article,aside,details,figcaption,figure, footer,header,hgroup,menu,nav,section {display:block;}table {border-collapse: separate;border-spacing: 0;}caption, th, td {text-align: right;font-weight: normal;}blockquote:before, blockquote:after, q:before, q:after {content: "";}.quickedit, .home-link{display:none;}blockquote, q {quotes: "" "";}sup{vertical-align: super;font-size:smaller;}code{font-family: 'Droid Arabic Kufi', Courier, monospace;font-size:12px;color:#272727;}::selection {background:transparent;text-shadow:#000 0 0 2px;}::-moz-selection {background:transparent;text-shadow:#000 0 0 2px;}::-webkit-selection {background:transparent;text-shadow:#000 0 0 2px;}::-o-selection {background:transparent;text-shadow:#000 0 0 2px;}a img{border: none;}ol, ul {padding:0;margin:0;text-align: right;}ol li {list-style-type: decimal;padding:0 0 5px;}ul li {list-style-type: disc;padding: 0 0 5px;}ul ul, ol ol {padding: 0;}#navbar-iframe, .navbar {height:0px;visibility:hidden;display:none }.Attribution, .feed-links, .post-footer-line.post-footer-line-1, .post-footer-line.post-footer-line-2 , .post-footer-line.post-footer-line-3 {display: none;}.item-control {display: none !important;}abbr.published.timeago {text-decoration: none;}.post-body a, .post-body a:link, .post-body a:visited {color:$maincolor;font-weight:bold;}h2.date-header, h4.date-header {display:none;margin:1.5em 0 .5em}h1, h2, h3, h4, h5, h6 {font-family: 'Droid Arabic Kufi', sans-serif;font-weight: 400;color: #151515;}blockquote {padding: 8px;background-color: #faebbc;border-top: 1px solid #e1cc89;border-bottom: 1px solid #e1cc89;margin: 5px;background-image: url(http://1.bp.blogspot.com/-siy6EKYCLtM/U6X4AdKrr0I/AAAAAAAANDs/HCjRvuedDro/s1600/openquote1.gif);background-position: top right;background-repeat: no-repeat;text-indent: 23px;}blockquote p{display: block;background-image: url(http://3.bp.blogspot.com/-UjppXQI-ww0/U6X4IpheNiI/AAAAAAAAND0/PJhRvvhAWGU/s1600/closequote1.gif);background-repeat: no-repeat;background-position: bottom left;}img {max-width: 100%;vertical-align: middle;}* {outline: 0;transition: all .3s ease;-webkit-transition: all .3s ease;-moz-transition: all .3s ease;-o-transition: all .3s ease;}.item #blog-pager {display: none;height: 0;opacity: 0;visibility: hidden;}.widget iframe, .widget img {max-width: 100%;}.status-msg-wrap {display: none;}a:hover {color:$maincolor;}body {color: #2e2e2e;font-family: 'Droid Arabic Kufi', sans-serif;font-size: 14px;font-weight: normal;line-height: 21px;background-repeat: no-repeat;background-size: cover;background-attachment: fixed;background-position: center bottom;background-image: url(//3.bp.blogspot.com/-2LZz0E7Nsnw/WlivHtqfvfI/AAAAAAAAEg8/i303nvWo2sQtRFXYbBqp_yprAushZ2u-wCLcBGAs/s1600/box-background.jpg);}#outer-wrapper{max-width:1180px;margin:30px auto;background-color:#FFF;box-shadow:0 0 0 1px rgba(0,0,0,0.05)}.row{width:1150px}#content-wrapper {margin: 0 auto;padding: 20px 0 40px;overflow: hidden;}#main-wrapper {float: right;width: 68%;max-width: 800px;}#sidebar-wrapper {float: left;width: 30%;max-width: 330px;}.top-bar {background: $maincolor;}.top-bar-wrapper {position: relative;overflow: hidden;min-height:40px;color: #fff;margin:0 auto;}.top-bar-social, .bottom-bar-social {float: left;padding: 5px 0;}.bottom-bar-social {padding:0 0;}.top-bar-social li, .bottom-bar-social li {display: inline;padding: 0;float: right;margin-left: 5px;;}.top-bar-social .widget ul, .bottom-bar-social .widget ul {padding: 0;}.top-bar-social .LinkList ul, .bottom-bar-social .LinkList ul {text-align: center;}.top-bar-social #social a {display: block;width: 30px;height: 30px;line-height: 30px;font-size: 12px;color: #fff;-webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;transition: background 0.3s linear;-moz-transition: background 0.3s linear;-webkit-transition: background 0.3s linear;-o-transition: background 0.3s linear;}.bottom-bar-social #social a {display: block;width: 30px;height: 30px;line-height: 30px;font-size: 15px;color: #fff;transition: color 0.3s linear;-moz-transition: color 0.3s linear;-webkit-transition: color 0.3s linear;-o-transition: color 0.3s linear;-webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;}.top-bar-social #social a:before, .bottom-bar-social #social a:before {display: inline-block;font: normal normal normal 22px/1 FontAwesome;font-size: inherit;font-style: normal;font-weight: 400;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}.top-bar-social .bloglovin:before, .bottom-bar-social .bloglovin:before{content:"\f004"}.top-bar-social .facebook:before, .bottom-bar-social .facebook:before{content:"\f09a"}.top-bar-social .twitter:before, .bottom-bar-social .twitter:before{content:"\f099"}.top-bar-social .gplus:before, .bottom-bar-social .gplus:before{content:"\f0d5"}.top-bar-social .rss:before, .bottom-bar-social .rss:before{content:"\f09e"}.top-bar-social .youtube:before, .bottom-bar-social .youtube:before{content:"\f167"}.top-bar-social .skype:before, .bottom-bar-social .skype:before{content:"\f17e"}.top-bar-social .stumbleupon:before, .bottom-bar-social .stumbleupon:before{content:"\f1a4"}.top-bar-social .tumblr:before, .bottom-bar-social .tumblr:before{content:"\f173"}.top-bar-social .vine:before, .bottom-bar-social .vine:before{content:"\f1ca"}.top-bar-social .stack-overflow:before, .bottom-bar-social .stack-overflow:before{content:"\f16c"}.top-bar-social .linkedin:before, .bottom-bar-social .linkedin:before{content:"\f0e1"}.top-bar-social .dribbble:before, .bottom-bar-social .dribbble:before{content:"\f17d"}.top-bar-social .soundcloud:before, .bottom-bar-social .soundcloud:before{content:"\f1be"}.top-bar-social .behance:before, .bottom-bar-social .behance:before{content:"\f1b4"}.top-bar-social .digg:before, .bottom-bar-social .digg:before{content:"\f1a6"}.top-bar-social .instagram:before, .bottom-bar-social .instagram:before{content:"\f16d"}.top-bar-social .pinterest:before, .bottom-bar-social .pinterest:before{content:"\f0d2"}.top-bar-social .delicious:before, .bottom-bar-social .delicious:before{content:"\f1a5"}.top-bar-social .codepen:before, .bottom-bar-social .codepen:before{content:"\f1cb"}.top-bar-social .email:before, .bottom-bar-social .email:before{content:"\f0e0"}.top-bar-social ul#social a:hover {color: $maindarkcolor;opacity: 1;}.bottom-bar-social ul#social a:hover {color: $maincolor;opacity: 1;}.top-bar-menu {float: right;}.top-menu ul {overflow: hidden;list-style: none;padding: 0;margin: 0;}.top-menu ul li {float: right;display: inline-block;list-style: none;padding:0;}.top-menu ul li a {padding: 12px 16px;display: block;border: none !important;text-decoration: none;line-height: inherit;font-size: 14px;font-weight: normal;color:#fff;}.top-menu ul li:first-child a {padding-right:0;}.selectnav {display:none}#header-wrapper {background: #fff;}#header-wrappers {color: $maindarkcolor;padding: 20px 0 20px;margin: 0 auto;}#header-inner {background-position: right;background-repeat: no;}.headerright img {height: auto;margin: 0 0 0;}.headerright h1, .headerright h1 a, .headerright h1 a:hover, .headerright h1 a:visited {font-family: 'Droid Arabic Kufi', cursive;color: #151515;font-size: 55px;font-weight: bold;line-height: 68px;margin: 0;padding: 0 0 5px;text-decoration: none;text-transform: uppercase;}.headerright h3 {font-weight: 400;margin: 0;padding: 0;}.headerright .description {color: #000000;font: normal 14px 'Lato', sans-serif;margin: 0;padding: 10px 0;text-transform: uppercase;text-align: center;}.headerright {float: right;margin: 0;padding: 0;max-width: 320px;}.headerleft {float: left;margin: 0;padding: 1px 0 0;width: 730px;}.selectnav {display:none;}.tm-menu {font-weight: 400;margin: 0 auto;height:50px;}ul#nav {list-style: none;margin: 0;padding: 0;}#menu .widget {display: none;}#menu {height: 50px;position: relative;text-align: center;z-index: 15;margin:0 auto;background: $maindarkcolor;padding-left:50px;}.menu-wrap {margin:0 auto;position: relative;}#menu ul > li {position: relative;vertical-align: middle;display: inline-block;padding: 0;margin: 0;}#menu ul > li.hub-home {background:$maincolor;}#menu ul > li.hub-home a:before {content: "\f015";font-family: Fontawesome;text-align: center;margin-left: 5px;}#menu ul > li:hover > a {}#menu ul > li > a {color: #fff;font-size: 14px;font-weight: 600;line-height: 50px;display: inline-block;text-transform: uppercase;text-decoration: none;letter-spacing: 1px;margin: 0;padding: 0 12px;font-family: 'Droid Arabic Kufi', sans-serif;}#menu ul > li > ul > li:first-child > a {padding-right: 12px }#menu ul > li > ul {position: absolute;background: #4d4d4d;top: 100%;right: 0;min-width: 180px;padding: 0;z-index: 99;margin-top: 0;visibility: hidden;opacity: 0;-webkit-transform: translateY(10px);-moz-transform: translateY(10px);transform: translateY(10px) }#menu ul > li > ul > li > ul {position: absolute;top: 0;right: 180px;width: 180px;background: #5d5d5d;z-index: 99;margin-top: 0;margin-right: 0;padding: 0;border-right: 1px solid #6d6d6d;visibility: hidden;opacity: 0;-webkit-transform: translateY(10px);-moz-transform: translateY(10px);transform: translateY(10px) }#menu ul > li > ul > li {display: block;float: none;text-align: right;position: relative;border-bottom: 1px solid;border-top: none;border-color: #8d8d8d;}#menu ul > li > ul > li:last-child {border: 0;}#menu ul li.parent ul li:after, #menu ul li:last-child:after {display:none;}#menu ul > li:hover {background-color: $maincolor }#menu ul > li > ul > li a {font-size: 11px;display: block;color: #fff;line-height: 35px;text-transform: uppercase;text-decoration: none;margin: 0;padding: 0 12px;border-left: 0;border: 0 }#menu ul > li.parent > a:after {content: '\f107';font-family: FontAwesome;float: left;margin-right: 5px }#menu ul > li:hover > ul, #menu ul > li > ul > li:hover > ul {opacity: 1;visibility: visible;-webkit-transform: translateY(0);-moz-transform: translateY(0);transform: translateY(0) }#menu ul > li > ul > li.parent > a:after {content: '\f105';float: left }#menu ul ul {}.ty-ran-yard {position: absolute;left: 0;top: 0;z-index: 99;}.ty-ran-yard span {list-style: none;}.ty-ran-yard a.ran-sym {background-color: $maincolor;cursor: pointer;display: block;height: 50px;text-align: center;position: relative;left: 0;top: 0;width: 50px;border-radius: 0;box-sizing: border-box;}.ty-ran-yard a.ran-sym:hover {background-color:#6d6d6d;}.ty-ran-yard a.ran-sym:before {color: #fff;content: '\f074';font-family: FontAwesome;font-size: 16px;text-rendering: auto;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;line-height: 50px;}.news-tick-wrap {margin:15px 0 0;}.news-tick-bar {margin:0 auto;position:relative;background-color: #f7f7f7;}.ticker .title {float: right;height: 40px;font-size: 15px;line-height: 40px;font-weight: 400;overflow: hidden;padding: 0 10px;color:#fff;font-family: 'Droid Arabic Kufi', sans-serif;text-transform:uppercase;background:$maindarkcolor;}.ticker .title .fa {margin-left: 10px;background: #fff;padding: 5px 6px;border-radius: 100%;color: $maincolor;}.ticker .widget-content {height: 40px;box-sizing: border-box;overflow: hidden;padding: 0 4px;}.ticker .widget-content li {float: right;margin-right: 30px;display: inline-block;height: 38px;line-height: 38px;padding: 0 }.ticker .widget {height: 40px;overflow: hidden;}.tk-thumb {float: right;margin:4px 0 0 10px}.tk-img {position: relative;display: block;width: 35px;height: 30px;overflow: hidden }.ticker .post-tag {display: inline-block;background-color: $maincolor;color: #fff;margin-left: 10px;font-weight: 400;border-radius: 2px;height: 18px;line-height: 18px;padding: 0 6px;font-size: 10px;text-transform: uppercase;position: relative;margin-top: 10px;float: right }.ticker .tyard-title {font-size: 14px;font-weight: 400;display: inline-block }.ticker .tyard-title a {color: $darkcolor;}.ticker .tyard-title a:hover {color: $maincolor;}.tickercontainer, .tickercontainer .mask, ul.newsticker {-webkit-transition: all 0 linear;-moz-transition: all 0 linear;-o-transition: all 0 linear;transition: all 0 linear;list-style: none;margin: 0 }.tickercontainer {margin: 0;padding: 0;overflow: hidden }.tickercontainer .mask {position: relative;overflow: hidden }.newsticker {position: relative;list-style-type: none;margin: 0;padding: 0 }ul.newsticker {-webkit-transition: all 0s linear;-moz-transition: all 0s linear;-o-transition: all 0s linear;transition: all 0s linear;position: relative;list-style-type: none;margin: 0;padding: 0 }.tickeroverlay-right {display: none }.tickeroverlay-left {display: none }.sidebar .widget, .mini-sidebar .widget {margin-bottom: 20px;position: relative;clear: both;}.sidebar .widget-title {background: $maindarkcolor;margin:0 0 10px 0;padding: 0;position: relative;transition: all .5s ease-out;}.sidebar .widget-title h2 {font-size: 16px;font-weight: 700;text-transform: uppercase;padding: 12px 8px;display: inline-block;background: $maincolor;color: #fff;font-family: "Droid Arabic Kufi","Droid Arabic Kufi",Arial,sans-serif;}.sidebar ul,.sidebar li, .mini-sidebar ul,.mini-sidebar li {list-style-type:none;margin:0;padding: 0;}.sidebar .LinkList li, .mini-sidebar .LinkList li {padding:0 0 6px 0;margin:0 0 6px 0;text-transform:capitalize;}.menu-tab li a, .sidetabs .section {transition: all 0s ease;-webkit-transition: all 0s ease;-moz-transition: all 0s ease;-o-transition: all 0s ease;-ms-transition: all 0s ease }.menu-tab {overflow: hidden;clear: both;padding: 0;margin: 0 }.sidetabs .widget-content {padding: 10px 0;}.sidetabs .widget h2 {display: none }.menu-tab li {width: 33.33%;float: right;display: inline-block;padding: 0 }.menu-tab li a {font-family: 'Droid Arabic Kufi', sans-serif;height: 32px;text-align: center;padding: 0;font-weight: 400;display: block;color: #fff;background-color:#192b33;font-size: 14px;line-height: 32px;letter-spacing: 1.5px;text-transform: uppercase }.menu-tab li.active a {color: #fff;background-color:$maincolor;}.menu-tab li {display: none }.hide-tab {display: inline-block!important }#tabside2 {margin-bottom: 15px;}article {padding:0;overflow: hidden;}.post {display: block;overflow: hidden;word-wrap: break-word;}.index .post, .archive .post {margin:0 0 15px 0;}.post-head h1 {color: #000;font-size: 32px;font-weight: 400;line-height: 44px;}.index .post h2, .archive .post h2 {margin-bottom: 10px;line-height: 30px;font-size: 24px;font-weight: 700;}.post h2 a {color:#1b1d25;letter-spacing: 1.3px;}.index .post h2, .archive .post h2 {margin: 0 0 10px;padding: 0;text-transform:capitalize;}.retitle h2 {display: block;}.post-body {margin: 0px;padding:10px;font-size: 14px;line-height: 26px;box-sizing: border-box;}.widget .post-body ul, .widget .post-body ol {padding-right: 15px;}.block-image {float:right;width: auto;height: auto;margin-left: 15px;position:relative;}.block-image .thumb {width: auto;height: auto;position: relative;display: block;overflow: hidden;}.block-image .thumb img {width: 360px;height: 250px;display: block;object-fit:cover;transition: all .3s ease-out!important;-webkit-transition: all .3s ease-out!important;-moz-transition: all .3s ease-out!important;-o-transition: all .3s ease-out!important;}.block-image .thumb > a:before {position: absolute;content: '';width: 100%;height: 100%;background-color: #000;opacity: 0;right: 0;top: 0;-webkit-transition: all 0.35s ease-in-out;-moz-transition: all 0.35s ease-in-out;-ms-transition: all 0.35s ease-in-out;-o-transition: all 0.35s ease-in-out;transition: all 0.35s ease-in-out;}.block-image .thumb:hover > a:before {opacity: 0.3;}.date-header-post {color: #bdbdbd;display: block;font-size: 12px;font-weight: 400;line-height: 1.3em;margin: 0!important;padding: 0;}.date-header-post a {color: #bdbdbd;}.post-head {padding:20px 10px;}.index .post-head, .archive .post-head {padding:0;}#meta-post .fa-calendar-o {margin-right: 8px;}.breadcrumbs .fa-angle-left:before{margin:0 5px}.breadcrumbs{margin:0;font-size:13px;padding: 10px 10px;background: #fafafa;border-bottom: 1px solid rgba(0,0,0,0.12);}.breadcrumbs span a.bhome{color:$maincolor}.breadcrumbs span,.breadcrumbs span a{color:#010101;padding: 0 2px;}.breadcrumbs span a:hover{color:$maincolor}.post-meta {color: #bdbdbd;display: block;font-size: 13px;font-weight: 400;line-height: 21px;margin: 0;padding: 0 10px;}.post-meta-wrap {padding:10px 0;border-bottom: 1px solid rgba(0,0,0,0.12);border-top: 1px solid rgba(0,0,0,0.12);}.post-meta a {color: #CBCBCB;}.post-meta i {color: $maindarkcolor;}.post-timestamp {margin-right: 5px;}.label-head {margin-right: 5px;}.label-head a {padding-right: 2px;}.resumo {margin-top: 10px;color: #666666;}.resumo span {display: block;margin-bottom: 8px;font-size: 12px;line-height: 19px;text-align: right;}.post-body img {max-width: 100%;padding: 10px 0;position: relative;margin:0 auto;}.second-meta {padding:10px 0 0;display: block;overflow: hidden;border-top: 3px Solid #eee;font-weight: 700;font-size: 12px;text-transform: uppercase;line-height: 1.5;color: #A0A0A0;}.second-meta .read-more {}#meta-post {margin-bottom: 10px;font-size: 11px;font-weight: 700;text-transform: uppercase;letter-spacing: 0.5px;color: #2c2f34;}#meta-post .post-labels {padding: 3px 8px;background: $maincolor;color: #fff;font-size: 12px;text-transform: uppercase;display: inline-block;z-index: 9;}#meta-post .post-labels a {color: #fff;height: auto;width: auto;font-weight: 700;font-size: 11px;}.comment-link {white-space: normal;}#blog-pager {clear: both;text-align: center;margin: 0;font-family: 'Droid Arabic Kufi', sans-serif;}.index .pagenavi, .archive .pagenavi {display: inline-block;border: 2px solid #151515;}.index .blog-pager, .index #blog-pager {display: block }.index .blog-pager, .index #blog-pager, .archive .blog-pager, .archive #blog-pager {-webkit-border-radius: 0;-moz-border-radius: 0;border-radius: 0;padding: 0;text-align: center;}.showpageNum a, .showpage a, #blog-pager-newer-link a, #blog-pager-older-link a {color: $maindarkcolor;font-size: 14px;font-weight: 700;overflow: hidden;padding: 10px 15px;text-decoration: none;float:right;}.item #blog-pager-older-link a {float:none;}.showpageNum:last-child a {border:0;}.showpageNum a:hover, .showpage a:hover, #blog-pager-newer-link a:hover, #blog-pager-older-link a:hover {decoration: none;color: $maincolor }.showpageOf {color: #151515;font-size: 14px;font-weight: 700;overflow: hidden;padding: 10px 15px;text-decoration: none;float:right;}.showpagePoint {color: #151515;font-size: 14px;font-weight: 700;overflow: hidden;padding: 10px 15px;text-decoration: none;float:right;}#post-pager .blog-pager-older-link:hover, #post-pager .blog-pager-newer-link:hover {color:$maincolor;background:inherit;}#post-pager {clear:both;float: right;display: block;width: 100%;box-sizing: border-box;margin: 15px 0;padding:10px 10px 0;border-top: 1px solid rgba(0,0,0,0.12);}#post-pager .blog-pager-older-link, #post-pager .blog-pager-newer-link {border:0;text-align:left;background:none;color:$maindarkcolor;}#post-pager .blog-pager-newer-link {border: 0;text-align:right;}#post-pager #blog-pager-newer-link, #post-pager #blog-pager-older-link {width: 50%;}#post-pager a b {display: block;padding: 0 0 5px;font-weight: 900;letter-spacing: 1px;font-size: 13px;color:$maincolor;font-family: 'Droid Arabic Kufi', sans-serif;text-transform:uppercase;}#post-pager a span {text-transform:capitalize;}#post-pager .blog-pager-older-link, #post-pager .blog-pager-newer-link {padding:0;display: block;}.item .post-footer .share-box .post-labels {float: right;}.item .post-footer .share-box .post-labels .label-title {color: #fff;padding: 3px 8px;font-size: 13px;background-color: $maincolor;}.item .post-footer .share-box .post-labels a {color: $textcolor;padding: 3px 8px;font-size: 13px;background-color: #f8f8f8;}.post-footer .share-box {position: relative;padding: 10px 10px;text-align: center;overflow:hidden;}.post-footer .share-title {border-bottom: 2px solid #eee;color: #010101;display: inline-block;padding-bottom: 7px;font-size: 15px;font-weight: 500;clear: both;margin: 0 0 10px;position: relative;float: right;}.sora-author-box {overflow: hidden;margin: 10px 0;}.sora-author-box img {float: right;margin-left: 10px;object-fit:cover;}.sora-author-box p {padding: 0 10px 10px;-webkit-margin-before: 0;-webkit-margin-after: 0;}.sora-author-box b {font-weight: 700;font-style: normal;letter-spacing: 1px;font-size: 20px;}.Related-title {padding: 0;margin: 0 0 20px;position:relative;display: block;}.Related-title:before {position: absolute;content: '';width: 100%;height: 2px;background-color: $maindarkcolor;top: 10px;z-index: 0;}.Related-title span {position: relative;display: inline-block;font-size: 14px;font-weight: 700;text-transform: uppercase;letter-spacing: 2px;background-color: #fff;padding:0 0 0 10px;z-index: 1;color:#000;}.share-box {position: relative;padding: 10px;}.share-title {border-bottom: 2px solid #777;color: #010101;display: inline-block;padding-bottom: 7px;font-size: 15px;font-weight: 500;position: relative;top: 2px;}.share-art {float: left;padding: 0;padding-top: 0;font-size: 13px;font-weight: 400;text-transform: capitalize;}.share-art a {color: #fff;padding: 3px 8px;margin-right: 4px;border-radius: 2px;display: inline-block;margin-left: 0;background: #010101;}.share-art a span {}.share-art a:hover{color:#fff}.share-art .fac-art{background:#3b5998}.share-art .fac-art:hover{background:rgba(49,77,145,0.7)}.share-art .twi-art{background:#00acee}.share-art .twi-art:hover{background:rgba(7,190,237,0.7)}.share-art .goo-art{background:#db4a39}.share-art .goo-art:hover{background:rgba(221,75,56,0.7)}.share-art .pin-art{background:#CA2127}.share-art .pin-art:hover{background:rgba(202,33,39,0.7)}.share-art .lin-art{background:#0077B5}.share-art .lin-art:hover{background:rgba(0,119,181,0.7)}.share-art .wat-art{background:#25d266;display:none;}.share-art .wat-art:hover{background:rgba(37, 210, 102, 0.73)}@media only screen and (max-width: 768px) {.share-art .wat-art{display:inline-block;}}.comments {clear: both;margin: 0;color: #48494d;margin-top:10px;background: #FFF;border: 1px solid rgba(0,0,0,0.12);border-top: 0;}.comments .comments-content {box-sizing: border-box;padding: 10px;border-top:0;}.post-feeds .feed-links {display: none;}iframe.blogger-iframe-colorize, iframe.blogger-comment-from-post {height: 260px!important;background: #fff;}.comment-form {overflow:hidden;}.comments h3 {line-height:normal;text-transform:uppercase;color:#333;font-weight:bold;margin:0 0 20px 0;font-size:14px;padding:0 0 0 0;}h4#comment-post-message {display:none;margin:0 0 0 0;}.comments h4{color: #fff;background: #f8695f;font-size: 16px;padding: 12px 10px;margin: 0;font-weight: 700;letter-spacing: 1.5px;text-transform: uppercase;position: relative;text-align: right;}.comments h4:after {display: inline-block;content: "\f075";font-family: fontAwesome;font-style: normal;font-weight: normal;font-size: 16px;background-color: #e85e54;color: #fff;top: 0;left: 0;padding: 12px 20px;position: absolute;}.comments .comments-content{font-size:13px;}.comments .comments-content .comment-thread ol{list-style:none;text-align:right;margin:13px 0;padding:0 }.comments .comments-content .comment-thread ol li{list-style:none;}.comments .avatar-image-container {background:#fff;border:1px solid #DDD;overflow:hidden;padding:0;border-radius: 50%;}.comments .avatar-image-container img {border-radius:50%;}.comments .comment-block{position:relative;background:#fff;padding:15px;margin-right:60px;border: 1px solid #efefef;}.comments .comment-block:before {content:"";width:0px;height:0px;position:absolute;left:100%;top:14px;border-width:10px;border-style:solid;border-color:transparent #DDD transparent transparent;display:block;}.comments .comments-content .comment-replies{margin:8px 0;margin-right:60px }.comments .comments-content .comment-thread:empty{display:none }.comments .comment-replybox-single {background:#f0f0f0;padding:0;margin:8px 0;margin-right:60px }.comments .comment-replybox-thread {background:#f0f0f0;margin:8px 0 0 0;padding:0;}.comments .comments-content .comment{margin-bottom:6px;padding:0 }.comments .comments-content .comment:first-child {padding:0;margin:0 }.comments .comments-content .comment:last-child {padding:0;margin:0 }.comments .comment-thread.inline-thread .comment, .comments .comment-thread.inline-thread .comment:last-child {margin:0px 30% 5px 0px}.comment .comment-thread.inline-thread .comment:nth-child(6) {margin:0px 25% 5px 0px;}.comment .comment-thread.inline-thread .comment:nth-child(5) {margin:0px 20% 5px 0px;}.comment .comment-thread.inline-thread .comment:nth-child(4) {margin:0px 15% 5px 0px;}.comment .comment-thread.inline-thread .comment:nth-child(3) {margin:0px 10% 5px 0px;}.comment .comment-thread.inline-thread .comment:nth-child(2) {margin:0px 5% 5px 0px;}.comment .comment-thread.inline-thread .comment:nth-child(1) {margin:0px 0 5px 0px;}.comments .comments-content .comment-thread{margin:0;padding:0 }.comments .comments-content .inline-thread{background: #fff;padding:15px;box-sizing:border-box;margin:0 }.comments .comments-content .inline-thread .comment-block {border-color: $maincolor;}.comments .comments-content .inline-thread .comment-block:before {border-color: transparent $maincolor transparent transparent;}.comments .comments-content .user {font-family: "Droid Arabic Kufi","Droid Arabic Kufi",Arial,sans-serif;letter-spacing: 0.5px;font-weight: 600;}.comments .comments-content .icon.blog-author {display:inline;}.comments .comments-content .icon.blog-author:after {content: "Author";background:$maincolor;font-family:"Droid Arabic Kufi","Droid Arabic Kufi",Arial,sans-serif;color: #fff;font-size: 11px;padding: 2px 5px;text-transform:Capitalize;font-style:italic;letter-spacing: 0.3px;}.comment-header {text-transform:uppercase;font-size:12px;}.comments .comments-content .datetime {margin-right: 6px;}.comments .comments-content .datetime a {color:#888;}.comments .comment .comment-actions a {display:inline-block;color:#333;font-weight:bold;font-size:10px;line-height:15px;margin:4px 0 0 8px;}.comments .continue a {color:#333;display:inline-block;font-size:10px;}.comments .comment .comment-actions a:hover, .comments .continue a:hover{text-decoration:underline;}#related-posts {}h4.related-title {font-size: 14px;margin:0 0 10px 0;background: #4f93c5;color: #fff;padding: 15px 20px;font-weight: 700;position: relative;text-align: right;text-transform: uppercase;overflow: hidden;}#related-posts ul.related {padding: 0 10px;}.related li {display: block;overflow: hidden;position: relative;}.related li h3 {margin-bottom:5px;}.related-thumb {width: 90px;height: 70px;overflow: hidden;position: relative;vertical-align: middle;float: right;margin:0 0 0 10px;}.related li .related-img {width: 90px;height: 70px;display: block;transition: all .3s ease-out!important;-webkit-transition: all .3s ease-out!important;-moz-transition: all .3s ease-out!important;-o-transition: all .3s ease-out!important;}.related li .related-img:hover {-webkit-transform: scale(1.1) rotate(-1.5deg)!important;-moz-transform: scale(1.1) rotate(-1.5deg)!important;transform: scale(1.1) rotate(-1.5deg)!important;transition: all .3s ease-out!important;-webkit-transition: all .3s ease-out!important;-moz-transition: all .3s ease-out!important;-o-transition: all .3s ease-out!important;}.related-title a {font-size: 15px;line-height: 1.4em;padding: 0;font-family: 'Droid Arabic Kufi', sans-serif;font-weight: 700;font-style: normal;letter-spacing: 0.5px;color: #151515;display: block;}.recent-summary {color: #666;font-size: 13px;letter-spacing: 0.3px;line-height: 1.6;}.related .related-tag {display:none;}.related-overlay {position: absolute;right: 0;top: 0;z-index: 1;width: 100%;height: 100%;background-color: rgba(40,35,40,0.05);}.related-content {display: block;bottom: 0;padding: 0px 0px 11px;width: 100%;line-height: 1.2em;box-sizing: border-box;z-index: 2;}.related .related-content .recent-date {display:none;}.recent-date:before, .p-date:before {content: '\f017';font-family: fontawesome;margin-left: 5px;}#lower {margin:auto;padding:0px 0px 10px 0px;width: 100%;background:#19232d;}#lower-wrapper {margin:auto;padding:20px 0px 20px 0px;}#lowerbar-wrapper {float: right;margin: 0px 5px auto;padding-bottom: 20px;width: 32%;text-align: justify;color:#ddd;line-height: 1.6em;word-wrap: break-word;overflow: hidden;max-width: 375px;}.lowerbar {margin: 0;padding: 0;}.lowerbar .widget {margin: 0;padding:10px 20px 0px 20px;box-sizing:border-box;clear:both;}.lowerbar .widget .widget-title {margin:0 0 10px 0;padding: 0;position: relative;border-bottom: 1px solid #ddd;transition: all .5s ease-out;}.lowerbar h2 {padding: 12px 0;display: inline-block;color: #fff;font-size: 16px;letter-spacing:0.5px;font-weight: 700;text-transform: uppercase;}.lowerbar ul {margin: 0 auto;padding: 0;list-style-type: none;}.lowerbar li {display:block;line-height: 1.6em;margin-right: 0 !important;list-style-type: none;}.lowerbar li a {text-decoration:none;color: #DBDBDB;}.lowerbar li a:hover {}.lowerbar li:hover {}.lowerbar .PopularPosts ul li a, .lowerbar, .lowerbar .ty-bonus .ty-bonos-entry a, .lowerbar .tyard-komet a {color:#fff;}.lowerbar .PopularPosts .widget-content ul li {border-bottom: 1px solid rgb(51, 51, 51);border-top: 0;}.lowerbar .ty-bonus .ty-wow {border-bottom: 1px solid rgb(51, 51, 51);border-top: 0;}.lowerbar .PopularPosts .widget-content ul li:last-child {border: 0;}.lowerbar .widget-content {padding: 10px 0;}.lowerbar .list-label-widget-content li a {color:#fff;}.lowerbar .list-label-widget-content li {border-bottom: 1px solid rgb(51, 51, 51);border-top: 0;}.lowerbar .list-label-widget-content li:last-child {border: 0;}.contact-form-name, .contact-form-email, .contact-form-email-message, .contact-form-widget {max-width: none;}.contact-form-name, .contact-form-email, .contact-form-email-message {background-color: #EBEBEB;border: 1px solid #ccc;}.contact-form-widget .form {}.contact-form-button-submit {max-width: none;width: 100%;height: 35px;border:0;background-image: none;background-color: $maincolor !important;cursor: pointer;font-style: normal;font-weight: 400;margin-top: 10px;}.contact-form-name:focus, .contact-form-email:focus, .contact-form-email-message:focus {border: 0;box-shadow: none;}.contact-form-name:hover, .contact-form-email:hover, .contact-form-email-message:hover {border: 0;}.contact-form-button-submit:hover {background-color: #2de09f;background-image: none;border: 0;}#jugas_footer {background: #111;color: #BABABA;font-family: 'Droid Arabic Kufi', sans-serif;font-weight: 400;padding: 20px 0px;}.copy-container {margin: 0 auto;overflow: hidden;}.jugas_footer_copyleft a {color: #f4f4f4;}.jugas_footer_copyleft {text-align: right;display:inline-block;line-height: 30px;}select#BlogArchive1_ArchiveMenu {width: 100%;padding: 10px;border-color: #777;}.ty-bonus .ty-wow {overflow: hidden;border-bottom: 1px solid #F5F5F5;padding: 10px 0;}.ty-bonus .ty-wow:first-child {padding-top: 0;}.ty-bonus .ty-wow:last-child {border-bottom: none;}.ty-bonus .ty-thumb-bonos {position: relative;float: right;margin: 0!important;width: 80px;height: 60px;overflow: hidden;display: block;vertical-align: middle;}.ty-bonus .ty-bonus-con {padding-right: 10px;display: table-cell;}.ty-bonus .ty-bonos-entry {overflow: hidden;line-height: 0;margin: 0 0 2px;padding: 0;}.ty-bonus .ty-bonos-entry a {color: $maindarkcolor;font-weight: 400;font-size: 14px;line-height: 1.5em;}.ty-bonus .ty-bonos-entry a:hover {color: $maincolor;}.ty-bonus .ty-thumb-bonos:hover .tyimg-lay {background-color: rgba(40, 35, 40, 0.3);}.yard-auth-ty {margin-left: 10px;}.yard-auth-ty::before {content: '\f007';font-family: fontawesome;color: #bbb;margin-left: 5px;}.yard-auth-ty, .ty-time {color: #bdbdbd;font-size: 12px;font-weight: 400;}.ty-time:before {content: '\f133';font-family: fontawesome;color: #bbb;margin-left: 5px;}.sidebar .PopularPosts .widget-content ul li:first-child, .sidebar .ty-bonus .ty-wow:first-child {padding-top: 0;border-top: 0;}.sidebar .PopularPosts .widget-content ul li:last-child, .sidebar .ty-bonus .ty-wow:last-child {padding-bottom: 0;}.tyard-komet .ty-komet .ty-komet-tar {position: relative;overflow: hidden;padding: 0;width: 55px;height: 55px;float: right;margin:0 0 0 10px;}.tyard-komet .ty-komet {background: none!important;clear: both;list-style: none;word-break: break-all;display: block;border-top: 1px solid #F5F5F5;border-bottom: 0 !important;overflow: hidden;margin: 0;padding: 10px 0;}.tyard-komet .ty-komet:first-child {padding-top: 0;border-top: 0;}.tyard-komet .ty-komet:last-child {padding-bottom: 0;}.tyard-komet .ty-komet span {color: #bdbdbd;display: block;line-height: 1.2em;text-transform: lowercase;font-size: 12px;font-style: italic;font-weight: 400;overflow: hidden;background: #f9f9f9;height: 38px;margin-top: 5px;box-sizing: border-box;padding: 5px 8px;}.yardimg-komet {width: 55px;height: 55px;float: right;margin:0 0 0 10px;}.tyard-komet a {color: $darkcolor;position: relative;font-size: 13px;text-transform: capitalize;display: block;overflow: hidden;font-weight: 400;}.tyard-komet a:hover {color:$maincolor;}.tyard-komet {list-style: none;padding: 0;}.sidebar .PopularPosts .widget-content ul li:first-child, #sidetabs .PopularPosts .widget-content ul li:first-child {padding-top: 0;border-top: 0 }.sidebar .PopularPosts .widget-content ul li:last-child, .sidebar .ty-bonus .ty-wow:last-child, .tab-widget .PopularPosts .widget-content ul li:last-child, .tab-widget .ty-bonus .ty-wow:last-child {padding-bottom: 0 }.sidebar .FollowByEmail > h3.title, .sidebar .FollowByEmail .title-wrap {margin-bottom: 0 }.FollowByEmail td {width: 100%;float: right;box-sizing: border-box }.FollowByEmail .follow-by-email-inner .follow-by-email-submit {margin-right: 0;width: 100%;border-radius: 0;height: 30px;font-size: 11px;color: #fff;background-color: $maincolor;font-family: inherit;text-transform: uppercase;font-weight: 700;letter-spacing: 1px }.FollowByEmail .follow-by-email-inner .follow-by-email-submit:hover {opacity:0.8;}.FollowByEmail .follow-by-email-inner .follow-by-email-address {padding-right: 10px;height: 30px;border: 1px solid #FFF;margin-bottom: 5px;box-sizing: border-box;font-size: 11px;font-family: inherit }.FollowByEmail .follow-by-email-inner .follow-by-email-address:focus {border: 1px solid #FFF }.FollowByEmail .widget-content {background-color: $maindarkcolor;box-sizing: border-box;padding: 10px }.FollowByEmail .widget-content:before {content: "أدخل بريدك الإلكتروني للإشتراك بأحدث المواضيع.";font-size: 11px;color: #f2f2f2;line-height: 1.4em;margin-bottom: 5px;display: block;padding: 0 2px }.list-label-widget-content li {display: block;padding: 8px 0;border-bottom: 1px solid #f2f2f2;position: relative }.list-label-widget-content li:first-child {padding: 0 0 8px }.list-label-widget-content li:last-child {padding-bottom: 0;border-bottom: 0 }.list-label-widget-content li a:before {content: '\f02c';font-size: 13px;color: $maindarkcolor;font-family: fontawesome;margin-left: 5px;}.lowerbar .list-label-widget-content li a:before {color:$maincolor;}.list-label-widget-content li a {color: $maindarkcolor;font-size: 11px;font-weight: 700;text-transform: uppercase;transition: color .3s }.list-label-widget-content li a:hover {color: $maincolor }.list-label-widget-content li span:last-child {color: $maindarkcolor;font-size: 11px;font-weight: 700;position: absolute;top: 8px;left: 0 }.list-label-widget-content li:first-child span:last-child {top: 2px }.cloud-label-widget-content {text-align: right }.cloud-label-widget-content .label-count {background: $maincolor;color: #fff!important;margin-right: -3px;white-space: nowrap;border-radius: 0;padding: 1px 4px!important;font-size: 12px!important;margin-left: 5px;transition: background .3s }.cloud-label-widget-content .label-size {background: #f5f5f5;display: block;float: right;font-size: 11px;margin:0 0 5px 5px;transition: background .3s }.cloud-label-widget-content .label-size a, .cloud-label-widget-content .label-size span {height: 18px!important;color: $maindarkcolor;display: inline-block;font-size: 11px;font-weight: 700!important;text-transform: uppercase;padding: 6px 8px;transition: color .3s }.cloud-label-widget-content .label-size a {padding: 6px 10px }.cloud-label-widget-content .label-size a:hover {color: #fff!important }.cloud-label-widget-content .label-size, .cloud-label-widget-content .label-count {height: 30px!important;line-height: 19px!important }.cloud-label-widget-content .label-size:hover {background: $maincolor;color: #fff!important }.cloud-label-widget-content .label-size:hover a {color: #fff!important }.cloud-label-widget-content .label-size:hover span {background: $maindarkcolor;color: #fff!important;cursor: pointer }.cloud-label-widget-content .label-size-1, .label-size-2, .label-size-3, .label-size-4, .label-size-5 {font-size: 100%;opacity: 10 }.label-size-1, .label-size-2 {opacity: 100 }#ads-blog .widget {width: 728px;max-height: 90px;padding:0;margin: 0px auto 15px !important;max-width: 100%;box-sizing: border-box;}#ads-blog-bottom .widget {width: 728px;max-height: 90px;padding:0;margin: 0px auto 15px !important;max-width: 100%;box-sizing: border-box;}#ads-blog-content {margin:0 auto;}#ads-blog-content .widget {margin: 15px auto 0 !important;display: block !important;width: 100%;max-height: 100%;padding: 0;max-width: 100%;box-sizing: border-box;}.ads-blog-post-top, .ads-blog-post-bottom {display:none;visibility:hidden;}.PopularPosts .widget-content ul li:first-child {border-top:0;}.PopularPosts .item-thumbnail{margin:0 15px 0 0 !important;width:80px;height:60px;float:right;overflow:hidden;position: relative}.PopularPosts .item-thumbnail a{position:relative;display:block;overflow:hidden;line-height:0}.PopularPosts ul li img{width:90px;height:65px;object-fit:cover;padding:0;transition:all .3s ease}.PopularPosts .widget-content ul li{overflow:hidden;padding:10px 0;border-top:1px solid #f2f2f2}.sidebar .PopularPosts .widget-content ul li:first-child,.sidebar .custom-widget li:first-child,.tab-widget .PopularPosts .widget-content ul li:first-child,.tab-widget .custom-widget li:first-child{padding-top:0;border-top:0}.sidebar .PopularPosts .widget-content ul li:last-child,.sidebar .custom-widget li:last-child,.tab-widget .PopularPosts .widget-content ul li:last-child,.tab-widget .custom-widget li:last-child{padding-bottom:0}.PopularPosts ul li a{color:#333333;font-weight:400;font-size:14px;line-height:1.4em;transition:color .3s;font-family: 'Droid Arabic Kufi', sans-serif;}.PopularPosts ul li a:hover{color:$maincolor}.PopularPosts .item-title{margin:0 0 4px;padding:0;line-height:0}.item-snippet{display:none;font-size:0;padding-top:0}.PopularPosts ul {counter-reset: popularcount;margin: 0;padding: 0;}.PopularPosts .item-thumbnail::before {background: rgba(0, 0, 0, 0.3);bottom: 0px;content: "";height: 100px;width: 100px;right: 0px;left: 0px;margin: 0px auto;position: absolute;z-index: 3;}@media only screen and (max-width: 1150px) {.row {width: 96% !important;margin: 0 auto;float: none;}.headerleft, .headerright {float: none;width: 100%;text-align: center;height: auto;margin: 0 auto;clear: both;}.headerright img {margin: auto;padding-bottom: 15px;}.headerleft {margin: 10px auto 0;}.headerright .description {text-align:center;}}@media only screen and (max-width: 1050px) {#outer-wrapper {margin:0 auto;}}@media only screen and (max-width: 980px) {#main-wrapper, #sidebar-wrapper {float: none;clear: both;width: 100%;margin: 0 auto;}.post-body {padding:8px;}#main-wrapper {max-width: 100%;}#sidebar-wrapper {padding-top: 20px;}#lowerbar-wrapper {width: 100%;max-width: 375px;margin: 0 auto;float: none;clear: both;}.overlay a {float: left;margin: 30px 0;}.overlay h3 {float: right;}}@media screen and (max-width: 880px) {#nav1, #nav {display: none;}.home #header-wrapper {margin-bottom: 10px;}#nav {display:none;}.selectnav {width: auto;color: $maindarkcolor;background: #f4f4f4;border: 1px solid rgba(255,255,255,0.1);position: relative;border: 0;padding: 6px 10px!important;margin: 5px 0;}.selectnav {display: block;width: 100%;max-width:200px;}.tm-menu .selectnav {display:inline-block;margin:10px 10px 0 0;}#menu {text-align:right;}.item #content-wrapper {padding: 10px 0 30px;}#label_with_thumbs li {width: 100%;clear:both;float:none;margin-bottom:10px;}}@media only screen and (max-width: 768px) {#post-pager #blog-pager-newer-link {margin: 0 auto 10px;}#post-pager #blog-pager-older-link, #post-pager #blog-pager-newer-link {float: none;clear: both;margin: 0 auto;display: block;width:100%;}.share-art span {display: none;}.ops-404 {width: 80%!important;}.title-404 {font-size: 160px!important;}.overlay {display:none;visibility:hidden;}.post-labels {margin-bottom: 10px;}}@media screen and (max-width: 680px) {}@media only screen and (max-width: 480px) {.block-image, .block-image .thumb img {float:none;margin:0 auto;clear:both;width:100%;height:auto;}.block-image{margin-bottom:10px;}.ticker .title, .ticker .tk-thumb {display: none;}.item .post-footer .share-box .post-labels {float: none;}.post-footer .share-title {display: block;text-align: center;float: none;}.post-footer .share-art {float: none;margin-top: 10px;}#header-inner {max-width:100%;}.index .post h2, .archive .post h2 {line-height: 1.4em;font-size: 19px;}.jugas_footer_copyleft {text-align: center;display: block;clear: both;}.top-bar-social, .bottom-bar-social {float: none;width: 100%;clear: both;overflow: hidden;}.top-bar-menu {float: none;width: 100%;clear: both;margin-top: 0;margin-bottom: 10px;text-align:center;}.top-bar-menu .selectnav {display: inline-block;}.top-bar-social li, .bottom-bar-social li {display: inline-block;float: none;}.top-bar-social #social a, .bottom-bar-social #social a {width: 20px;height: 20px;line-height: 20px;font-size: 9px;}.top-bar-menu .selectnav {width: 100%;}h1.post-title {font-size: 22px;margin-bottom: 10px;line-height: 1.4em;}.breadcrumbs {display:none;}#sidebar-wrapper {max-width: 100%;}.about-widget-image {overflow: hidden;}.share-art {float: none;margin: 0 auto;text-align: center;clear: both;}.share-title{display:none;}.blog-pager-newer-link .pager-title, .blog-pager-newer-link .pager-heading, .blog-pager-older-link .pager-title, .blog-pager-older-link .pager-heading {display: none;}.blog-pager-older-link .post-nav-icon, .blog-pager-newer-link .post-nav-icon {line-height: 40px;width: 100%;}}@media only screen and (max-width: 360px) {#header-inner img {max-width: 100%;margin: 0 auto;float: none;height: auto;}#meta-post {position: relative;overflow: hidden;display: block;border-bottom: 1px solid #f2f2f2;}#meta-post:after {display: none;}.index .post h2, .archive .post h2 {font-size: 16px;}.share-art {float: none;clear: both;margin: 0 auto;text-align: center;}}@media only screen and (max-width: 300px) {#sidebar-wrapper {display:none}.top-bar-menu,.selectnav{width:100%}.ty-ran-yard {display: none;}#menu {text-align: center;padding: 0;}.archive .post h2,.index .post h2 {line-height: 1.4em !important;font-size: 14px!important;}.index .snippets,.archive .snippets,.sora-author-box img,.share-box .post-author {display: none;}.share-art, .share-box .post-author {float: none;margin: 0 auto;text-align: center;clear: both;}.read-more-wrap, .post-labels {float: none !important;clear: both;display: block;text-align: center;}.ops-404 {font-size: 18px!important;}.title-404 {font-size: 110px !important;}h1.post-title {font-size: 17px;}.share-box {overflow: hidden;}.top-bar-social #social a {width: 24px;height: 24px;line-height: 24px;}}
===================================================================================================
سياسة الخصوصية
.copyright a{color:#ff8400}
.copyleft{float:left; margin-left:10px; color:#595959; font-family:Web-Ponto}
.copyleft a{color:#ff8400}
.btnfooter{float:left; margin-right:10px; text-align:center}
.btnfooter a{color:#315270; margin-right:5px; border:1px solid #315270; padding:0 8px; font-size:15px; display:inline-block; height:40px}
.btnfooter a:hover{color:#fff; background:#315270}
======================================================================================================================

]]></b:skin>
<style>
/*-------Typography and ShortCodes-------*/
.firstcharacter{float:right;color:#27ae60;font-size:75px;line-height:60px;padding-top:4px;padding-left:8px;padding-right:3px}.post-body h1,.post-body h2,.post-body h3,.post-body h4,.post-body h5,.post-body h6{margin-bottom:15px;color:#2c3e50}blockquote{font-style:italic;color:#888;border-right:5px solid #27ae60;margin-right:0;padding:10px 15px}blockquote:before{content:&#39;\f10d&#39;;display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin-left:10px;color:#888}blockquote:after{content:&#39;\f10e&#39;;display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin-right:10px;color:#888}.button{background-color:#2c3e50;float:right;padding:5px 12px;margin:5px;color:#fff;text-align:center;border:0;cursor:pointer;border-radius:3px;display:block;text-decoration:none;font-weight:400;transition:all .3s ease-out !important;-webkit-transition:all .3s ease-out !important}a.button{color:#fff!important}.button:hover{background-color:#27ae60;color:#fff}.button.small{font-size:12px;padding:5px 12px}.button.medium{font-size:16px;padding:6px 15px}.button.large{font-size:18px;padding:8px 18px}.small-button{width:100%;overflow:hidden;clear:both}.medium-button{width:100%;overflow:hidden;clear:both}.large-button{width:100%;overflow:hidden;clear:both}.demo:before{content:&quot;\f06e&quot;;margin-left:5px;display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:400;line-height:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.download:before{content:&quot;\f019&quot;;margin-left:5px;display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:400;line-height:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.buy:before{content:&quot;\f09d&quot;;margin-left:5px;display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:400;line-height:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.visit:before{content:&quot;\f14c&quot;;margin-left:5px;display:inline-block;font-family:FontAwesome;font-style:normal;font-weight:400;line-height:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.widget .post-body ul,.widget .post-body ol{line-height:1.5;font-weight:400}.widget .post-body li{margin:5px 0;padding:0;line-height:1.5}.post-body ul li:before{content:&quot;\f105&quot;;margin-left:5px;font-family:fontawesome}pre{font-family:Monaco, &quot;Andale Mono&quot;, &quot;Courier New&quot;, Courier, monospace;background-color:#2c3e50;background-image:-webkit-linear-gradient(rgba(0, 0, 0, 0.05) 50%, transparent 50%, transparent);background-image:-moz-linear-gradient(rgba(0, 0, 0, 0.05) 50%, transparent 50%, transparent);background-image:-ms-linear-gradient(rgba(0, 0, 0, 0.05) 50%, transparent 50%, transparent);background-image:-o-linear-gradient(rgba(0, 0, 0, 0.05) 50%, transparent 50%, transparent);background-image:linear-gradient(rgba(0, 0, 0, 0.05) 50%, transparent 50%, transparent);-webkit-background-size:100% 50px;-moz-background-size:100% 50px;background-size:100% 50px;line-height:25px;color:#f1f1f1;position:relative;padding:0 7px;margin:15px 0 10px;overflow:hidden;word-wrap:normal;white-space:pre;position:relative}pre:before{content:&#39;Code&#39;;display:block;background:#F7F7F7;margin-right:-7px;margin-left:-7px;color:#2c3e50;padding-right:7px;font-weight:400;font-size:14px}pre code,pre .line-number{display:block}pre .line-number a{color:#27ae60;opacity:0.6}pre .line-number span{display:block;float:right;clear:both;width:20px;text-align:center;margin-right:-7px;margin-left:7px}pre .line-number span:nth-child(odd){background-color:rgba(0, 0, 0, 0.11)}prhttps://www.blogger.com/statice .line-number span:nth-child(even){background-color:rgba(255, 255, 255, 0.05)}pre .cl{display:block;clear:both}#contact{background-color:#fff;margin:30px 0 !important}#contact .contact-form-widget{max-width:100% !important}#contact .contact-form-name,#contact .contact-form-email,#contact .contact-form-email-message{background-color:#FFF;border:1px solid #eee;border-radius:3px;padding:10px;margin-bottom:10px !important;max-width:100% !important}#contact .contact-form-name{width:47.7%;height:50px}#contact .contact-form-email{width:49.7%;height:50px}#contact .contact-form-email-message{height:150px}#contact .contact-form-button-submit{max-width:100%;width:100%;z-index:0;margin:4px 0 0;padding:10px !important;text-align:center;cursor:pointer;background:#27ae60;border:0;height:auto;-webkit-border-radius:2px;-moz-border-radius:2px;-ms-border-radius:2px;-o-border-radius:2px;border-radius:2px;text-transform:uppercase;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-o-transition:all .2s ease-out;-ms-transition:all .2s ease-out;transition:all .2s ease-out;color:#FFF}#contact .contact-form-button-submit:hover{background:#2c3e50}#contact .contact-form-email:focus,#contact .contact-form-name:focus,#contact .contact-form-email-message:focus{box-shadow:none !important}.alert-message{position:relative;display:block;background-color:#FAFAFA;padding:20px;margin:20px 0;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;color:#2f3239;border:1px solid}.alert-message p{margin:0 !important;padding:0;line-height:22px;font-size:13px;color:#2f3239}.alert-message span{font-size:14px !important}.alert-message i{font-size:16px;line-height:20px}.alert-message.success{background-color:#f1f9f7;border-color:#e0f1e9;color:#1d9d74}.alert-message.success a,.alert-message.success span{color:#1d9d74}.alert-message.alert{background-color:#DAEFFF;border-color:#8ED2FF;color:#378FFF}.alert-message.alert a,.alert-message.alert span{color:#378FFF}.alert-message.warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}.alert-message.warning a,.alert-message.warning span{color:#8a6d3b}.alert-message.error{background-color:#FFD7D2;border-color:#FF9494;color:#F55D5D}.alert-message.error a,.alert-message.error span{color:#F55D5D}.fa-check-circle:before{content:&quot;\f058&quot;}.fa-info-circle:before{content:&quot;\f05a&quot;}.fa-exclamation-triangle:before{content:&quot;\f071&quot;}.fa-exclamation-circle:before{content:&quot;\f06a&quot;}.post-table table{border-collapse:collapse;width:100%}.post-table th{background-color:#eee;font-weight:bold}.post-table th,.post-table td{border:0.125em solid #333;line-height:1.5;padding:0.75em;text-align:right}@media (max-width: 30em){.post-table thead tr{position:absolute;top:-9999em;right:-9999em}.post-table tr{border:0.125em solid #333;border-bottom:0}.post-table tr + tr{margin-top:1.5em}.post-table tr,.post-table td{display:block}.post-table td{border:none;border-bottom:0.125em solid #333;padding-right:50%}.post-table td:before{content:attr(data-label);display:inline-block;font-weight:bold;line-height:1.5;margin-right:-100%;width:100%}}@media (max-width: 20em){.post-table td{padding-right:0.75em}.post-table td:before{display:block;margin-bottom:0.75em;margin-right:0}}
.FollowByEmail {
    clear: both;
}
</style>
<b:template-skin><![CDATA[
/*------Layout (No Edit)----------*/
body#layout .theme-opt {
display : block !important;
}
body#layout .option {
background-color: #2c3e50!important;
overflow: hidden!important;
}
body#layout .option h4 {
font-size: 16px;
padding: 4px 0 7px;
color: #fff!important;
}
body#layout .option .widget {
float : none;
width :  100%;
}
body#layout .option .widget.locked-widget .widget-content {
background-color: #34495e !important;
border-color: #455668 !important;
color: #fff!important;
}
body#layout .option .widget.locked-widget .widget-content a.editlink {
color: #fff !important;
border: 1px solid #233648;
border-radius: 2px;
padding: 2px 5px;
background-color: #233648;
}
body#layout #outer-wrapper {
padding: 0;
width :  800px
}
body#layout .ticker .widget {
height: auto;
overflow: visible;
}
body#layout .ticker .widget-content {
height: auto;
}
body#layout .section h4 {
color: #333;
text-align:center;
text-transform:uppercase;
}
body#layout .tm-menu {
height: auto;
}
body#layout #menu {
display : block;
visibility:visible;
height: auto;
}
body#layout #menu .widget {
display : block;
visibility:visible;
}
body#layout #ads-blog-content .widget .widget-content {
display : block;
}
body#layout #content-wrapper {
margin: 0 auto
}
body#layout .headerleft {
width :  395px;
}
body#layout #main-wrapper {
float : right;
width :  70%;
margin: 0;
padding: 0
}
body#layout #sidebar-wrapper {
float : left;
width :  30%;
margin: 0;
padding: 5px 0 0;
}
body#layout #sidebar-wrapper .section {
background-color: #f8e244 !important;
border: 1px solid #fff
}
body#layout #sidebar-wrapper .section h4 {
color:#000;
}
body#layout #sidebar-wrapper .section .widget-content {
border-color: #5a7ea2!important
}
body#layout #sidebar-wrapper .section .draggable-widget .widget-wrap2 {
background-color: #0080ce !important
}
body#layout #main-wrapper #main {
margin-left: 4px;
background-color: #5a7ea2;
border-color: #34495e
}
body#layout #main-wrapper #main h4 {
color: #fff!important
}
body#layout .layout-widget-description {
display : none!important
}
body#layout #lowerbar-wrapper {
width :  33.33%;
float : right;
}
body#layout #Blog1 .widget-content {
border-color: #34495e
}
body#layout .ads-blog-post-top, body#layout .ads-blog-post-bottom {
display : block;
visibility: visible;
}
body#layout .feat-slider-wrap .section {
background-color: #a0d3db !important;
border: 1px solid #a2dbeb
}
body#layout .FollowByEmail .widget-content:before {
display : none;
}
body#layout .top-bar-social, body#layout .top-bar-menu {
width : 47%;
}
body#layout .bottom-bar-social {
display :block;
}
/*------Layout (end)----------*/

]]></b:template-skin>

<b:include data='blog' name='google-analytics'/>
<script async='async' src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js' type='text/javascript'/>


<script type='text/javascript'>
          //<![CDATA[
function bp_thumbnail_resize(image_url, post_title) {
    image_tag = '<img src="' + image_url.replace('/s72-c/', '/s600/') + '" alt="' + post_title.replace(/"/g, "") + '" title="' + post_title.replace(/"/g, "") + '"/>';
    if (post_title != "") return image_tag;
    else return ""
}
$(document).ready(function() {
$(".block-image .thumb").each(function() {
        $(this).find("img").attr("src", function(e, t) {
            return t.replace("/default.jpg", "/mqdefault.jpg")
        })
    });
  });
          //]]>
        </script>
<script type='text/javascript'>
snippet_count = 150;

//<![CDATA[
function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}
function createSnippet(pID){
var div = document.getElementById(pID);
var summ = snippet_count;
var summary = '<div class="snippets">' + removeHtmlTag(div.innerHTML,summ) + '</div>';
div.innerHTML = summary;
}

//]]>
</script>
<script type='text/javascript'> 
//<![CDATA[
var no_image = "https://2.bp.blogspot.com/-tsNAkNN9x-U/Wz54M8C2XEI/AAAAAAAAAds/8T7HZvVXfhABrKLPYN0LImb8PQqJ6Zb2ACLcBGAs/s1600/11111111111111111111111umb.png";
var month_format = [, "يناير", "فبراير", "مايو", "أبريل", "مارس", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
var more_text = "View More";
var comments_text = "<span>موضوع </span>تعليق";
var POSTPAGER_OLDER = "المواضيع الاقدم <i class='fa fa-chevron-circle-left' aria-hidden='true'></i>"; // post nav text "previous post"
var POSTPAGER_NEWER = "<i class='fa fa-chevron-circle-right' aria-hidden='true'></i>مواضيع أحدث"; // post nav text "next post"
//]]>
</script>
<style>
.post-labels {display: none;}
</style>

</head>


<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'/>

<body expr:class='data:blog.pageType'>
<div class='theme-opt' style='display:none'>
    <b:section class='option' id='option' maxwidgets='1' name=' خيارات القالب' showaddelement='yes'>
      <b:widget id='HTML910' locked='true' title='عدد المشاركات بالصفحة الرئيسية اضف الرقم' type='HTML' version='1'>
        <b:widget-settings>
          <b:widget-setting name='content'/>
        </b:widget-settings>
        <b:includable id='main'>  
          <b:if cond='data:content == &quot;&quot;'>       
            <script type='text/javascript'>
              //<![CDATA[
              var perPage = 7;
              //]]>
            </script>
            <b:else/>
            &lt;script type=&#39;text/javascript&#39;&gt;
            //&lt;![CDATA[
                var perPage = <data:content/>;
            //]]&gt;
            &lt;/script&gt;
          </b:if>
        </b:includable>
      </b:widget>
      <b:widget id='HTML912' locked='true' title='عدد مواضيع ذات الصلة' type='HTML' version='1'>
        <b:widget-settings>
          <b:widget-setting name='content'>5</b:widget-setting>
        </b:widget-settings>
        <b:includable id='main'>  
          <b:if cond='data:content == &quot;&quot;'>       
            <script type='text/javascript'>
              //<![CDATA[
             var related_number = 4;
              //]]>
            </script>
            <b:else/>
            &lt;script type=&#39;text/javascript&#39;&gt;
            //&lt;![CDATA[
                var related_number = <data:content/>;
            //]]&gt;
            &lt;/script&gt;
          </b:if>
        </b:includable>
      </b:widget>
    </b:section>
  </div>
&lt;div id=&quot;outer-wrapper&quot; class=&quot;<data:blog.pageType/><b:if cond='data:blog.url == data:blog.homepageUrl'> الرئيسية</b:if><b:if cond='data:blog.pageType == &quot;static_page&quot;'> item</b:if><b:if cond='data:blog.pageType == &quot;archive&quot;'> index</b:if>&quot;&gt;
<div class='top-bar'>

		<div class='top-bar-wrapper row'>

			<b:section class='top-bar-social blue' id='header social widget' maxwidgets='1' name='أيقونات الصفحات الإجتماعية أعلى' showaddelement='no'>
<b:widget id='LinkList230' locked='true' title='ايقونات الصفحات الإجتماعية' type='LinkList' version='1'>
  <b:widget-settings>
    <b:widget-setting name='link-3'>https://aljenerale.blogspot.com</b:widget-setting>
    <b:widget-setting name='sorting'>NONE</b:widget-setting>
    <b:widget-setting name='text-1'>facebook</b:widget-setting>
    <b:widget-setting name='link-1'>https://www.facebook.com/aljjeneral/</b:widget-setting>
    <b:widget-setting name='text-0'>twitter</b:widget-setting>
    <b:widget-setting name='link-2'>https://aljjenerale.blogspot.com/</b:widget-setting>
    <b:widget-setting name='text-3'>rss</b:widget-setting>
    <b:widget-setting name='link-0'>https://twitter.com/aljjenerale</b:widget-setting>
    <b:widget-setting name='text-2'>rss</b:widget-setting>
  </b:widget-settings>
  <b:includable id='main'>
            <div class='widget-content'>
              <ul id='social'>
                <b:loop values='data:links' var='link'>
                  <li><a expr:class='data:link.name' expr:href='data:link.target' expr:title='data:link.name'/></li>
                </b:loop>
              </ul>
            </div>
          </b:includable>
</b:widget>
</b:section>
	<div class='top-bar-menu'>


<div class='top-menu'>
  <b:section class='top-menu' id='top-menu' maxwidgets='1' showaddelement='yes'>
    <b:widget id='LinkList940' locked='true' title='القائمة الفرعية' type='LinkList' version='1'>
      <b:widget-settings>
        <b:widget-setting name='link-5'>https://aljjenerale.blogspot.com/p/css-contact-qaisi1web.html</b:widget-setting>
        <b:widget-setting name='link-6'>https://tawk.to/chat/593287744374a471e7c51381/default</b:widget-setting>
        <b:widget-setting name='link-3'>https://aljjenerale.blogspot.com/p/blog-page_41.html</b:widget-setting>
        <b:widget-setting name='link-4'>https://aljjenerale.blogspot.com/p/blog-page_71.html</b:widget-setting>
        <b:widget-setting name='text-1'>فهرسة المدونة</b:widget-setting>
        <b:widget-setting name='text-0'>الرئيسية</b:widget-setting>
        <b:widget-setting name='text-3'>لماذا احب التدوين</b:widget-setting>
        <b:widget-setting name='text-2'>عن المدونة</b:widget-setting>
        <b:widget-setting name='text-5'>اتصل بنا</b:widget-setting>
        <b:widget-setting name='text-4'>التحق بفريق المحررين</b:widget-setting>
        <b:widget-setting name='text-6'>تواصل معنا مباشر</b:widget-setting>
        <b:widget-setting name='sorting'>NONE</b:widget-setting>
        <b:widget-setting name='link-1'>https://aljjenerale.blogspot.com/p/httpsaljjeneraleblogspotcom.html</b:widget-setting>
        <b:widget-setting name='link-2'>https://aljjenerale.blogspot.com/p/blog-page_92.html</b:widget-setting>
        <b:widget-setting name='link-0'>/</b:widget-setting>
      </b:widget-settings>
      <b:includable id='main'>
          <div class='widget-content'>
            <ul id='nav1' itemscope='' itemtype='http://schema.org/SiteNavigationElement'> 
              <b:loop values='data:links' var='link'>
                <li itemprop='name'><a expr:href='data:link.target' itemprop='url'><data:link.name/></a></li>
              </b:loop>
           </ul>
         

          </div>
        </b:includable>
    </b:widget>
  </b:section>
</div></div>
		</div>

	</div>
<div style='clear: both;'/>
<div id='header-wrapper'> 
<div class='row' id='header-wrappers'>
    <div class='headerright'> 
      <b:section class='headerright' id='headerright' maxwidgets='1' showaddelement='no'>
         <b:widget id='Header1' locked='true' title='مدونة الجنرال طريقك للاحتراف (رأس الصفحة)' type='Header' version='1'>
           <b:widget-settings>
             <b:widget-setting name='displayUrl'>http://4.bp.blogspot.com/-2b7voP8If5k/XJnphyU5EHI/AAAAAAAAALk/sLPE1kjOt7c4fhxvx0PXKU6VANylGjqBgCK4BGAYYCw/s1600/%25D8%25B1%25D8%25A7%25D8%25B3-%25D8%25A7%25D9%2584%25D8%25B5%25D9%2581%25D8%25AD%25D8%25A9.png</b:widget-setting>
             <b:widget-setting name='displayHeight'>106</b:widget-setting>
             <b:widget-setting name='sectionWidth'>150</b:widget-setting>
             <b:widget-setting name='useImage'>true</b:widget-setting>
             <b:widget-setting name='shrinkToFit'>false</b:widget-setting>
             <b:widget-setting name='imagePlacement'>REPLACE</b:widget-setting>
             <b:widget-setting name='displayWidth'>300</b:widget-setting>
           </b:widget-settings>
           <b:includable id='main'>

  <b:if cond='data:useImage'>
    <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
      <!--
      Show image as background to text. You can't really calculate the width
      reliably in JS because margins are not taken into account by any of
      clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
      width if the user is using shrink to fit.
      This results in a margin-width's worth of pixels being cropped. If the
      user is not using shrink to fit then we expand the header.
      -->
      <b:if cond='data:mobile'>
        <div id='header-inner'>
          <div class='titlewrapper' style='background: transparent'>
            <h1 class='title' style='background: transparent; border-width: 0px'>
              <b:include name='title'/>
            </h1>
          </div>
          <b:include name='description'/>
        </div>
      <b:else/>
        <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                      + &quot;background-position: &quot;                      + data:backgroundPositionStyleStr + &quot;; &quot;                      + data:widthStyleStr                      + &quot;min-height: &quot; + data:height                      + &quot;_height: &quot; + data:height                      + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
          <div class='titlewrapper' style='background: transparent'>
            <h1 class='title' style='background: transparent; border-width: 0px'>
              <b:include name='title'/>
            </h1>
          </div>
          <b:include name='description'/>
        </div>
      </b:if>
    <b:else/>
      <!--Show the image only-->
      <div id='header-inner'>
        <a expr:href='data:blog.homepageUrl' style='display: block'><h1 style='display:none'/>
          <img expr:alt='data:title' expr:height='data:height' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' expr:width='data:width' style='display: block'/>
        </a>
        <!--Show the description-->
        <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
          <b:include name='description'/>
        </b:if>
      </div>
    </b:if>
  <b:else/>
    <!--No header image -->
    <div id='header-inner'>
      <div class='titlewrapper'>
        <h1 class='title'>
          <b:include name='title'/>
        </h1>
      </div>
      <b:include name='description'/>
    </div>
  </b:if>
</b:includable>
           <b:includable id='description'>
  <div class='descriptionwrapper'>
    <p class='description'><span><data:description/></span></p>
  </div>
</b:includable>
           <b:includable id='title'>
  <b:if cond='data:blog.url == data:blog.homepageUrl'>
    <data:title/>
  <b:else/>
    <a expr:href='data:blog.homepageUrl'><data:title/></a>
  </b:if>
</b:includable>
         </b:widget>
       </b:section> 
</div>
<div class='headerleft'> 
<b:section class='headerleft' id='headerleft' maxwidgets='1' showaddelement='yes'>
   <b:widget id='HTML2' locked='false' title='' type='HTML'>
     <b:widget-settings>
       <b:widget-setting name='content'>&lt;center&gt;&lt;a href=&quot;https://aljjenerale.blogspot.com/p/blog-page_71.html&quot;&gt;&lt;img alt=&quot;LightBlog&quot; src=&quot;https://3.bp.blogspot.com/-hPZKtqqaPkY/XJBuWpFwiUI/AAAAAAAAAKM/zsvXhh670qIy-lwI84xwCTZH4jQ0iF_FgCLcBGAs/s1600/2019-02-06_200708.jpg
&quot; /&gt;&lt;/a&gt;&lt;/center&gt;</b:widget-setting>
     </b:widget-settings>
     <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
   </b:widget>
 </b:section> 
</div>
<div style='clear: both;'/>
  </div>
<div class='tm-menu'>
<div class='row menu-wrap'>
        <b:section class='menu' id='menu' maxwidgets='1' name='Main Menu' showaddelement='yes'>
          <b:widget id='LinkList210' locked='true' title='القائمة' type='LinkList' version='1'>
            <b:widget-settings>
              <b:widget-setting name='text-22'>_شاهد المشاكل الشائعة</b:widget-setting>
              <b:widget-setting name='text-23'>_تواصل معنا مباشر</b:widget-setting>
              <b:widget-setting name='text-9'>_هاتف LG</b:widget-setting>
              <b:widget-setting name='text-8'>_هاتف نوكيا</b:widget-setting>
              <b:widget-setting name='text-20'>معلومات تقنية</b:widget-setting>
              <b:widget-setting name='text-21'>مشاكل وحلول</b:widget-setting>
              <b:widget-setting name='text-1'>تواصل</b:widget-setting>
              <b:widget-setting name='text-0'>اخبار</b:widget-setting>
              <b:widget-setting name='text-3'>_سناب شات</b:widget-setting>
              <b:widget-setting name='text-2'>_واتساب</b:widget-setting>
              <b:widget-setting name='text-5'>_تويتر</b:widget-setting>
              <b:widget-setting name='text-4'>_انستغرام</b:widget-setting>
              <b:widget-setting name='text-7'>الهواتف الذكية</b:widget-setting>
              <b:widget-setting name='text-6'>_فيسبوك</b:widget-setting>
              <b:widget-setting name='text-19'>_جوجل</b:widget-setting>
              <b:widget-setting name='text-15'>_سامسونج</b:widget-setting>
              <b:widget-setting name='text-16'>_ابل</b:widget-setting>
              <b:widget-setting name='text-17'>_امازون</b:widget-setting>
              <b:widget-setting name='text-18'>_مايكورسوفت</b:widget-setting>
              <b:widget-setting name='text-11'>_هاتف هواوي</b:widget-setting>
              <b:widget-setting name='text-12'>_هاتف ايفون</b:widget-setting>
              <b:widget-setting name='text-13'>_هاتف جلاكسي </b:widget-setting>
              <b:widget-setting name='text-14'>شركات عالمية</b:widget-setting>
              <b:widget-setting name='text-10'>_هاتف HTC</b:widget-setting>
              <b:widget-setting name='link-17'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D8%A7%D9%85%D8%A7%D8%B2%D9%88%D9%86?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-16'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D8%A7%D8%A8%D9%84?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-19'><![CDATA[https://aljjenerale.blogspot.com/search/label/جوجل?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='sorting'>NONE</b:widget-setting>
              <b:widget-setting name='link-18'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D9%85%D8%A7%D9%8A%D9%83%D8%B1%D9%88%D8%B3%D9%88%D9%81%D8%AA?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-1'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D8%AA%D9%88%D8%A7%D8%B5%D9%84?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-13'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D9%87%D8%A7%D8%AA%D9%81%20%D8%AC%D9%84%D8%A7%D9%83%D8%B3%D9%8A?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-2'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D9%88%D8%A7%D8%AA%D8%B3%20%D8%A7%D8%A8?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-12'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D9%87%D8%A7%D8%AA%D9%81%20%D8%A7%D9%8A%D9%81%D9%88%D9%86?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-15'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D8%B3%D8%A7%D9%85%D8%B3%D9%88%D9%86%D8%AC?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-0'><![CDATA[https://aljjenerale.blogspot.com/search/label/اخبار?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-14'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D8%B4%D8%B1%D9%83%D8%A7%D8%AA%20%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A9?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-11'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D9%87%D8%A7%D8%AA%D9%81%20%D9%87%D9%88%D8%A7%D9%88%D9%8A?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-10'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D9%88%D8%A7%D8%AA%D8%B3%20%D8%A7%D8%A8?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-9'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D9%87%D8%A7%D8%AA%D9%81%20LG?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-7'><![CDATA[https://aljjenerale.blogspot.com/search/label/الهواتف%20الذكية?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-8'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D9%87%D8%A7%D8%AA%D9%81%20%D9%86%D9%88%D9%83%D9%8A%D8%A7?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-5'><![CDATA[https://aljjenerale.blogspot.com/search/label/تويتر?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-6'><![CDATA[https://aljjenerale.blogspot.com/search/label/فيس%20بوك?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-3'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D8%B3%D9%86%D8%A7%D8%A8%20%D8%B4%D8%A7%D8%AA?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-4'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D8%A7%D9%86%D8%B3%D8%AA%D8%BA%D8%B1%D8%A7%D9%85?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-23'>https://tawk.to/chat/593287744374a471e7c51381/default</b:widget-setting>
              <b:widget-setting name='link-20'><![CDATA[https://aljjenerale.blogspot.com/search/label/معلومات%20تقنية?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-22'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D9%85%D8%B4%D8%A7%D9%83%D9%84%20%D9%88%D8%AD%D9%84%D9%88%D9%84?&max-results=7]]></b:widget-setting>
              <b:widget-setting name='link-21'><![CDATA[https://aljjenerale.blogspot.com/search/label/%D9%85%D8%B4%D8%A7%D9%83%D9%84%20%D9%88%D8%AD%D9%84%D9%88%D9%84?&max-results=7]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
            <div class='widget-content'>
              <ul itemscope='' itemtype='http://schema.org/SiteNavigationElement'> 
                <li><a expr:href='data:blog.homepageUrl'>الرئيسية</a></li>
                <b:loop values='data:links' var='link'>
                  <li itemprop='name'><a expr:href='data:link.target' itemprop='url'><data:link.name/></a></li>
                </b:loop>
              </ul>
            </div>
          </b:includable>
          </b:widget>
        </b:section>
<div class='ty-ran-yard'><span><a class='ran-sym'/></span></div>
  </div>
      </div>
<link href='http://fonts.googleapis.com/earlyaccess/droidarabickufi.css' rel='stylesheet' type='text/css'/>
    <link href='//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'/>
		</div>

 <div style='clear: both;'/>
<div class='news-tick-wrap'>
<div class='news-tick-bar row'>
 <b:section class='ticker' id='ticker' maxwidgets='1' name='شريط أحدث المشاركات' showaddelement='yes'>
   <b:widget id='HTML13' locked='false' title='آخر المواضيع' type='HTML' version='1'>
     <b:widget-settings>
       <b:widget-setting name='content'><![CDATA[<span data-type="recent" data-no="5"></span>]]></b:widget-setting>
     </b:widget-settings>
     <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

 <!--<b:include name='quickedit'/>-->
</b:includable>
   </b:widget>
 </b:section>

    </div>
  </div>
 <div style='clear: both;'/>
    <div class='row' id='content-wrapper'>

    <div id='main-wrapper'>
   <b:section class='main' id='main' showaddelement='yes'>
     <b:widget id='Blog1' locked='true' title='رسائل المدونة الإلكترونية' type='Blog' version='1'>
       <b:widget-settings>
         <b:widget-setting name='showDateHeader'>true</b:widget-setting>
         <b:widget-setting name='style.textcolor'>#000000</b:widget-setting>
         <b:widget-setting name='showShareButtons'>false</b:widget-setting>
         <b:widget-setting name='authorLabel'>الكاتب</b:widget-setting>
         <b:widget-setting name='showCommentLink'>true</b:widget-setting>
         <b:widget-setting name='style.urlcolor'>#008000</b:widget-setting>
         <b:widget-setting name='showAuthor'>true</b:widget-setting>
         <b:widget-setting name='disableGooglePlusShare'>true</b:widget-setting>
         <b:widget-setting name='style.linkcolor'>#0000ff</b:widget-setting>
         <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
         <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
         <b:widget-setting name='timestampLabel'>-12333</b:widget-setting>
         <b:widget-setting name='showAuthorProfile'>true</b:widget-setting>
         <b:widget-setting name='style.layout'>1x1</b:widget-setting>
         <b:widget-setting name='showLabels'>false</b:widget-setting>
         <b:widget-setting name='showLocation'>false</b:widget-setting>
         <b:widget-setting name='showTimestamp'>true</b:widget-setting>
         <b:widget-setting name='postsPerAd'>1</b:widget-setting>
         <b:widget-setting name='showBacklinks'>false</b:widget-setting>
         <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
         <b:widget-setting name='showInlineAds'>false</b:widget-setting>
         <b:widget-setting name='showReactions'>false</b:widget-setting>
       </b:widget-settings>
       <b:includable id='main' var='top'>
  <b:if cond='!data:mobile'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>
 <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isDateStart and not data:post.isFirstPost'>
          &lt;/div&gt;&lt;/div&gt;
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-outer&quot;&gt;
        </b:if>
        <b:if cond='data:post.dateHeader'>
          <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-posts&quot;&gt;
        </b:if>
        <div class='post-outer'>
          <b:include data='post' name='post'/>
          <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
        </div>

        <!-- Ad -->
        <b:if cond='data:post.includeAd'>
          <div class='inline-ad'>
            <data:adCode/>
          </div>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;&lt;/div&gt;
      </b:if>
    </div>

    <!-- navigation -->
    <b:include name='nextprev'/>

    <!-- feed links -->
    <b:include name='feedLinks'/>

  <b:else/>
    <b:include name='mobile-main'/>
  </b:if>

  <b:if cond='data:top.showPlusOne'>
    <data:top.googlePlusBootstrap/>
  </b:if>

</b:includable>
       <b:includable id='backlinkDeleteIcon' var='backlink'>
  <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
    <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
      <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
    </a>
  </span>
</b:includable>
       <b:includable id='backlinks' var='post'>
  <a name='links'/><h4><data:post.backlinksLabel/></h4>
  <b:if cond='data:post.numBacklinks != 0'>
    <dl class='comments-block' id='comments-block'>
      <b:loop values='data:post.backlinks' var='backlink'>
        <div class='collapsed-backlink backlink-control'>
          <dt class='comment-title'>
            <span class='backlink-toggle-zippy'>&#160;</span>
            <a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
            <b:include data='backlink' name='backlinkDeleteIcon'/>
          </dt>
          <dd class='comment-body collapseable'>
            <data:backlink.snippet/>
          </dd>
          <dd class='comment-footer collapseable'>
            <span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
            <span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
          </dd>
        </div>
      </b:loop>
    </dl>
  </b:if>
  <p class='comment-footer'>
    <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
  </p>
</b:includable>
       <b:includable id='comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <h4 id='comment-post-message'>
        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
       <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
        <img src='https://resources.blogblog.com/img/icon_delete13.gif'/>
      </a>
    </b:if>
  </span>
</b:includable>
       <b:includable id='comment_count_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.url.canonical.http'>
    </span>
  <b:else/>
    <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
      <data:post.commentLabelFull/>:
    </a>
  </b:if>
</b:includable>
       <b:includable id='comment_picker' var='post'>
  <b:if cond='data:post.commentSource == 1'>
    <b:include data='post' name='iframe_comments'/>
  <b:elseif cond='data:post.showThreadedComments'/>
    <b:include data='post' name='threaded_comments'/>
  <b:else/>
    <b:include data='post' name='comments'/>
  </b:if>
</b:includable>
       <b:includable id='comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <b:if cond='data:post.allowComments'>
      <h4><data:post.commentLabelFull/>:</h4>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <b:if cond='data:post.hasOlderLinks'>
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'><data:post.oldestLinkText/></a>
              &#160;
            <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'><data:post.olderLinkText/></a>
              &#160;
          </b:if>

          <data:post.commentRangeText/>

          <b:if cond='data:post.hasNewerLinks'>
            &#160;
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'><data:post.newerLinkText/></a>
            &#160;
            <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'><data:post.newestLinkText/></a>
          </b:if>
        </span>
      </b:if>

      <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
        <dl expr:class='data:post.avatarIndentClass' id='comments-block'>
          <b:loop values='data:post.comments' var='comment'>
            <dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'>
              <b:if cond='data:comment.favicon'>
                <img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/>
              </b:if>
              <a expr:name='data:comment.anchorName'/>
              <b:if cond='data:blog.enabledCommentProfileImages'>
                <data:comment.authorAvatarImage/>
              </b:if>
              <b:if cond='data:comment.authorUrl'>
                <a expr:href='data:comment.authorUrl' rel='nofollow'><data:comment.123/></a>
              <b:else/>
                <data:comment.author/>
              </b:if>
              <data:commentPostedByMsg/>
            </dt>
            <dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'>
              <b:if cond='data:comment.isDeleted'>
                <span class='deleted-comment'><data:comment.body/></span>
              <b:else/>
                <p>
                  <data:comment.body/>
                </p>
              </b:if>
            </dd>
            <dd class='comment-footer'>
              <span class='comment-timestamp'>
                <a expr:href='data:comment.url' title='comment permalink'>
                  <data:comment.timestamp/>
                </a>
                <b:include data='comment' name='commentDeleteIcon'/>
              </span>
            </dd>
          </b:loop>
        </dl>
      </div>

      <b:if cond='data:post.commentPagingRequired'>
        <span class='paging-control-container'>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
            <data:post.oldestLinkText/>
          </a>
          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
            <data:post.olderLinkText/>
          </a>
          &#160;
          <data:post.commentRangeText/>
          &#160;
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
            <data:post.newerLinkText/>
          </a>
          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
            <data:post.newestLinkText/>
          </a>
        </span>
      </b:if>

      <p class='comment-footer'>
        <b:if cond='data:post.embedCommentForm'>
          <b:if cond='data:post.allowNewComments'>
            <b:include data='post' name='comment-form'/>
          <b:else/>
            <data:post.noNewCommentsText/>
          </b:if>
        <b:elseif cond='data:post.allowComments'/>
          <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
        </b:if>
      </p>
    </b:if>
    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
       <b:include cond='data:post.showBacklinks' data='post' name='backlinks'/>
    </div>
    </div>
  </div>
</b:includable>
       <b:includable id='feedLinks'>
  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
    <b:if cond='data:feedLinks'>
      <div class='blog-feeds'>
      </div>
    </b:if>

  <b:else/> <!--Post feed links -->
    <div class='post-feeds'>
      <b:loop values='data:posts' var='post'>
        <b:include cond='data:post.allowComments and data:post.feedLinks' data='post.feedLinks' name='feedLinksBody'/>
      </b:loop>
    </div>
  </b:if>
</b:includable>
       <b:includable id='feedLinksBody' var='links'>
  <div class='feed-links'>
  <data:feedLinksMsg/>
  <b:loop values='data:links' var='f'>
     <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
  </b:loop>
  </div>
</b:includable>
       <b:includable id='iframe_comments' var='post'>

  <b:if cond='data:post.allowIframeComments'>
    <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
    <div class='cmt_iframe_holder' expr:data-href='data:post.url.canonical' expr:data-viewtype='data:post.viewType'/>

    <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
      <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
    </b:if>
  </b:if>
</b:includable>
       <b:includable id='mobile-index-post' var='post'>
  <div class='mobile-date-outer date-outer'>
    <b:if cond='data:post.dateHeader'>
      <div class='date-header'>
        <span><data:post.dateHeader/></span>
      </div>
    </b:if>

    <div class='mobile-post-outer'>
      <a expr:href='data:post.url'>
        <h3 class='mobile-index-title entry-title' itemprop='name'>
          <data:post.title/>
        </h3>

        <div class='mobile-index-arrow'>&amp;rsaquo;</div>

        <div class='mobile-index-contents'>
          <b:if cond='data:post.thumbnailUrl'>
            <div class='mobile-index-thumbnail'>
              <div class='Image'>
                <img expr:src='data:post.thumbnailUrl'/>
              </div>
            </div>
          </b:if>

          <div class='post-body'>
            <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
          </div>
        </div>

        <div style='clear: both;'/>
      </a>

      <div class='mobile-index-comment'>
        <b:include cond='data:blog.pageType != &quot;static_page&quot;                          and data:post.allowComments                          and data:post.numComments != 0' data='post' name='comment_count_picker'/>
      </div>
    </div>
  </div>
</b:includable>
       <b:includable id='mobile-main' var='top'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-index-post'/>
        </b:loop>
      <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-post'/>
        </b:loop>
      </b:if>
    </div>

   <b:include name='mobile-nextprev'/>
</b:includable>
       <b:includable id='mobile-nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <div class='mobile-link-button' id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>&amp;lsaquo;</a>
      </div>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <div class='mobile-link-button' id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>&amp;rsaquo;</a>
      </div>
    </b:if>

    <div class='mobile-link-button' id='blog-pager-home-link'>
    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
    </div>

    <div class='mobile-desktop-link'>
      <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
    </div>

  </div>
  <div class='clear'/>
</b:includable>
       <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
          <b:if cond='data:post.thumbnailUrl'>
            <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
          </b:if>
          <meta expr:content='data:blog.blogId' itemprop='blogId'/>
          <meta expr:content='data:post.id' itemprop='postId'/>

          <a expr:name='data:post.id'/>
        <b:if cond='data:post.title'> 
                     <b:if cond='data:blog.pageType == &quot;index&quot;'> 
    <h2 class='post-title entry-title' itemprop='name'> 
     <b:if cond='data:post.link'> 
       <a expr:href='data:post.link' itemprop='url'><data:post.title/></a> 
     <b:else/> 
        <b:if cond='data:post.url'> 
<a expr:href='data:post.url' itemprop='url'><data:post.title/></a> 
<b:else/> 
          <data:post.title/> 
        </b:if> 
     </b:if> 
     </h2>
                       <b:elseif cond='data:blog.pageType == &quot;archive&quot;'/> 
<h2 class='post-title entry-title' itemprop='name'> 
     <b:if cond='data:post.link'> 
       <a expr:href='data:post.link' itemprop='url'><data:post.title/></a> 
     <b:else/> 
        <b:if cond='data:post.url'> 
<a expr:href='data:post.url' itemprop='url'><data:post.title/></a> 
<b:else/> 
          <data:post.title/> 
        </b:if> 
     </b:if> 
      </h2>
<b:else/> 
<h1 class='post-title entry-title' itemprop='name'> 
     <b:if cond='data:post.link'> 
       <data:post.title/> 
     <b:else/> 
        <b:if cond='data:post.url'> 
         <data:post.title/> 
<b:else/> 
          <data:post.title/> 
        </b:if> 
     </b:if> 
      </h1> 
</b:if> 
                    </b:if> 

          <div class='post-header'>
            <div class='post-header-line-1'/>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
            <data:post.body/>
            <div style='clear: both;'/> <!-- clear for photos floats -->
          </div>
          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <span itemprop='name'><data:post.author/></span>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                      <span itemprop='name'><data:post.author/></span>
                    </span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <meta expr:content='data:post.canonicalUrl' itemprop='url'/>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                                  and data:post.allowComments' data='post' name='comment_count_picker'/>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
              <b:if cond='data:top.showDummy'>
                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
              </b:if>
            </div>

          </div>
        </div>

        <b:include cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}' data='post' name='comment_picker'/>
      </div>
    </div>
  </div>
</b:includable>
       <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </span>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </span>
    </b:if>

    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clear'/>
</b:includable>
       <b:includable id='post' var='post'>
  <div class='post hentry'> 
  <b:if cond='data:blog.pageType != &quot;item&quot;'>
                          <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                            <b:if cond='data:post.thumbnailUrl'>
                            
                                <div class='block-image'>
                                   <div class='thumb'>
  <a expr:href='data:post.url'>
                                  <script type='text/javascript'>
                                    document.write(bp_thumbnail_resize(&quot;<data:post.thumbnailUrl/>&quot;,&#39;<data:post.title/>&#39;));
                                  </script>
                                     </a>
                                  </div>

                                </div>
                             
                              <b:else/>
                                
                                   <div class='block-image'>
                                   <div class='thumb'>
<a expr:href='data:post.url'>
                                    <img expr:alt='data:post.title' expr:title='data:post.title' src='https://2.bp.blogspot.com/-tsNAkNN9x-U/Wz54M8C2XEI/AAAAAAAAAds/8T7HZvVXfhABrKLPYN0LImb8PQqJ6Zb2ACLcBGAs/s1600/11111111111111111111111umb.png'/>
                                     </a>
</div>

                                  </div>
                               
                              </b:if>
                            </b:if>
                          </b:if>
    <b:if cond='data:blog.pageType == &quot;item&quot;'>
    &lt;div itemprop=&#39;blogPost&#39; itemscope=&#39;itemscope&#39; itemtype=&#39;http://schema.org/BlogPosting&#39;&gt;
      <meta expr:content='data:post.firstImageUrl' itemprop='image'/>
    </b:if>
    <div class='post-header'>
 <b:if cond='data:blog.pageType == &quot;item&quot;'>
<div class='breadcrumbs' xmlns:v='http://rdf.data-vocabulary.org/#'>
    <span typeof='v:Breadcrumb'><a class='bhome' expr:href='data:blog.homepageUrl' property='v:title' rel='v:url'><i class='fa fa-home'/></a></span> <brc><i class='fa fa-caret-left'/></brc>
    <b:loop values='data:posts' var='post'>
      <b:if cond='data:post.labels'>
      <b:loop values='data:post.labels' var='label'>
        <span typeof='v:Breadcrumb'>
        <a expr:href='data:label.url' property='v:title' rel='v:url'><data:label.name/></a></span>
        <b:if cond='data:label.isLast != &quot;true&quot;'><brc><i class='fa fa-caret-left'/></brc></b:if>
      </b:loop>
      <b:else/>
         Unlabelled
      </b:if>
      <brc><i class='fa fa-caret-left'/></brc> <span><data:post.title/></span>
    </b:loop>
  </div>
        <b:if cond='data:post.title'>
      <div class='post-head'><h1 class='post-title entry-title' itemprop='name headline'>
      <b:if cond='data:post.link'>
        <a expr:href='data:post.link'><data:post.title/></a>
      <b:else/>
        <b:if cond='data:post.url'>
          <b:if cond='data:blog.url != data:post.url'>
            <a expr:href='data:post.url'><data:post.title/></a>
          <b:else/>
            <data:post.title/>
          </b:if>
        <b:else/>
          <data:post.title/>
        </b:if>
      </b:if>
        </h1></div>
    </b:if>
        <div class='post-meta'>
<div class='post-meta-wrap'>
<span class='post-author vcard'>
        <b:if cond='data:top.showAuthor'>
          <i>بواسطة</i>
            <b:if cond='data:post.authorProfileUrl'>
              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                <a class='g-profile' expr:href='data:post.authorProfileUrl' expr:title='data:post.author' rel='author'>
                  <span itemprop='name'><data:post.author/></span>
                </a>
              </span>
            <b:else/>
              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                <a class='g-profile' expr:href='data:post.authorProfileUrl' expr:title='data:post.author' rel='author'>
                  <span itemprop='name'><data:post.author/></span></a>
              </span>
            </b:if>
        </b:if>
      </span>
 <span class='post-timestamp'>
        <b:if cond='data:top.showTimestamp'>
          <i>في</i>
        <b:if cond='data:post.url'>
          <meta expr:content='data:post.canonicalUrl' itemprop='url'/>
          <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published timeago' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
        </b:if>
        </b:if>
      </span>
<span class='label-head'>
        <b:if cond='data:post.labels'>
          <i>من</i>
          <b:loop values='data:post.labels' var='label'>
            <a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
          </b:loop>
        </b:if>
      </span>
        </div></div>
   </b:if>
  <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
    <b:if cond='data:post.title'>
      <div class='post-head'><h1 class='post-title entry-title' itemprop='name'>
      <b:if cond='data:post.link'>
        <a expr:href='data:post.link'><data:post.title/></a>
      <b:else/>
        <b:if cond='data:post.url'>
          <b:if cond='data:blog.url != data:post.url'>
            <a expr:href='data:post.url'><data:post.title/></a>
          <b:else/>
            <data:post.title/>
          </b:if>
        <b:else/>
          <data:post.title/>
        </b:if>
      </b:if>
        </h1></div>
    </b:if>
    </b:if>
   
    </div>

    <!-- Then use the post body as the schema.org description, for good G+/FB snippeting. -->
    <article>
         <b:if cond='data:blog.pageType != &quot;item&quot;'>
         <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
 <div id='meta-post'>
<span class='post-labels'>
        <b:if cond='data:post.labels'>
         
         <b:loop values='data:post.labels' var='label'>
                                  <b:if cond='data:label.isLast == &quot;true&quot;'>
                                    <a expr:href='data:label.url' rel='tag'><data:label.name/></a>
                                  </b:if>
                                </b:loop>
        </b:if>
       </span>
                     <i aria-hidden='true' class='fa  fa-ellipsis-h' style='font-size: 8px;margin: 0 5px;'/>
<abbr class='published timeago' expr:title='data:post.timestampISO8601'><data:post.timestamp/></abbr></div>
 <div style='clear: both;'/>
          <b:if cond='data:post.title'>
              <font class='retitle'>
                <h2 class='post-title entry-title'>
                   <b:if cond='data:post.link'>
                    <a expr:href='data:post.link'>
                       <data:post.title/>
                      </a>
                      <b:else/>
                      <b:if cond='data:post.url'>
                       <a expr:href='data:post.url'>
                       <data:post.title/>
                      </a>
                      <b:else/>
                     <data:post.title/>
                     </b:if>
                   </b:if>
                  </h2>
                    </font>
                </b:if>
 <div style='clear: both;'/>
                  <div class='date-header-post'>
                    <div class='resumo'><span><div expr:id='&quot;summary&quot; + data:post.id'><data:post.body/></div>
<script type='text/javascript'>createSnippet(&quot;summary<data:post.id/>&quot;);</script></span></div>
                     <div style='clear: both;'/>
<div class='second-meta'>
  <i class='fa fa-user-circle-o' style='margin:0 0 0 2px;'/> <a class='g-profile' expr:href='data:post.authorProfileUrl' expr:title='data:post.author' rel='author'>
                  <span itemprop='name'><data:post.author/></span></a><span class='post-comment-link'>
                           <i class='fa fa-commenting-o' style='margin: 0 2px;'/>
                           <b:if cond='data:post.allowComments'>
            <a class='comment-bubble' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
                <data:post.numComments/>
            </a>
        </b:if>
                          </span>

      </div>
                      </div>
            <b:else/>
       <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
         <meta expr:content='data:post.snippet' name='twitter:description'/>
         <data:post.body/>
       </div>
          </b:if>
          <b:else/>
       <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
         <meta expr:content='data:post.snippet' name='twitter:description'/>
         <data:post.body/>
       </div>
         </b:if>
     </article>

   

    <div class='post-footer'>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div class='share-box'>
          
              
             <div class='share-box'>
 
          <h8 class='share-title'>شارك على:</h8>
               <div class='share-art'> 
<a class='fac-art' expr:href='&quot;http://www.facebook.com/sharer.php?u=&quot; + data:post.url + &quot;&amp;title=&quot;+ data:post.title' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=600, height=400, left=24, top=24, scrollbars, resizable&apos;); return false;' rel='nofollow' target='_blank'><i class='fa fa-facebook'/><span class='resp_del'> Facebook</span></a>

<a class='twi-art' expr:href='&quot;http://twitter.com/share?url=&quot; + data:post.url + &quot;&amp;title=&quot; + data:post.title' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=600, height=400, left=24, top=24, scrollbars, resizable&apos;); return false;' rel='nofollow' target='_blank'><i class='fa fa-twitter'/><span class='resp_del2'> Twitter</span></a>


<a class='pin-art' expr:href='&quot;http://pinterest.com/pin/create/button/?url=&quot; + data:post.url + &quot;&amp;media=&quot; + data:post.firstImageUrl + &quot;&amp;description=&quot; + data:post.snippet' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=600, height=400, left=24, top=24, scrollbars, resizable&apos;); return false;' rel='nofollow' target='_blank'><i class='fa fa-pinterest'/><span class='resp_del4'> Pinterest</span></a>  

<a class='lin-art' expr:href='&quot;http://www.linkedin.com/shareArticle?url=&quot; + data:post.url + &quot;&amp;title=&quot;+ data:post.title' onclick='window.open(this.href, &apos;windowName&apos;, &apos;width=600, height=400, left=24, top=24, scrollbars, resizable&apos;); return false;' rel='nofollow' target='_blank'><i class='fa fa-linkedin-square'/><span class='resp_del5'> Linkedin</span></a>

<whatsapp expr:href='data:post.url' expr:text='data:post.title'/>
<a class='wat-art' expr:href='&quot;whatsapp://send?text=&quot; + data:post.title + &quot; &gt;&gt; &quot; + data:post.url' rel='nofollow' target='_blank'><i class='fa fa-whatsapp'/><span class='واتساب'> Whatsapp</span></a>

</div>
         </div>
         </div>
            
     
             
  
      <div style='clear:both'/>  
 
<div id='related-posts'>

        <b:if cond='data:post.labels'>
          <b:loop values='data:post.labels' var='label'>
            <b:if cond='data:label.isLast == &quot;true&quot;'>
              <data:label.name/>
            </b:if>
          </b:loop>
        </b:if>
      </div>
 <div style='clear:both'/>    
<div class='post-pager' id='post-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'/>
      </span>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'/>
      </span>
    </b:if>

  </div>  
   </b:if>
    <div class='post-footer-line post-footer-line-1'>
      <span class='post-author vcard'>
        <b:if cond='data:top.showAuthor'>
          <data:top.authorLabel/>
            <b:if cond='data:post.authorProfileUrl'>
              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                <meta expr:content='data:post.authorProfileUrl' itemprop='url'/>
                <a class='g-profile' expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                  <span itemprop='name'><data:post.author/></span>
                </a>
              </span>
            <b:else/>
              <span class='fn' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
                <span itemprop='name'><data:post.author/></span>
              </span>
            </b:if>
        </b:if>
      </span>

      <span class='post-timestamp'>
        <b:if cond='data:top.showTimestamp'>
          <data:top.timestampLabel/>
          <b:if cond='data:post.url'>
            <meta expr:content='data:post.canonicalUrl' itemprop='url'/>
            <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601' itemprop='datePublished'><data:post.timestamp/></abbr></a>
          </b:if>
        </b:if>
      </span>

      <span class='reaction-buttons'>
        <b:if cond='data:top.showReactions'>
          <table border='0' cellpadding='0' cellspacing='0' width='100%'><tr>
            <td class='reactions-label-cell' nowrap='nowrap' valign='top' width='1%'>
              <span class='reactions-label'>
              <data:top.reactionsLabel/></span>&#160;</td>
            <td><iframe allowtransparency='true' class='reactions-iframe' expr:src='data:post.reactionsUrl' frameborder='0' name='reactions' scrolling='no'/></td>
           </tr></table>
        </b:if>
      </span>

      <span class='post-comment-link'>
        <b:include cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                          and data:post.allowComments' data='post' name='comment_count_picker'/>
      </span>

       <!-- backlinks -->
       <span class='post-backlinks post-comment-link'>
         <b:if cond='data:blog.pageType not in {&quot;item&quot;,&quot;static_page&quot;}                      and data:post.showBacklinks'>
           <a class='comment-link' expr:href='data:post.url + &quot;#links&quot;'><data:top.backlinkLabel/></a>
         </b:if>
       </span>

      <span class='post-icons'>
        <!-- email post links -->
        <b:if cond='data:post.emailPostUrl'>
          <span class='item-action'>
          <a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'>
            <img alt='' class='icon-action' height='13' src='//img1.blogblog.com/img/icon18_email.gif' width='18'/>
          </a>
          </span>
        </b:if>

        <!-- quickedit pencil -->
        <b:include data='post' name='postQuickEdit'/>
      </span>

      <!-- share buttons -->
      <div class='post-share-buttons goog-inline-block'>
        <b:include cond='data:post.sharePostUrl' data='post' name='shareButtons'/>
      </div>

      </div>

      <div class='post-footer-line post-footer-line-2'>
      <span class='post-labels'>
        <b:if cond='data:post.labels'>
          <data:postLabelsLabel/>
          <b:loop values='data:post.labels' var='label'>
            <a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='not data:label.isLast'>,</b:if>
          </b:loop>
        </b:if>
      </span>
      </div>

      <div class='post-footer-line post-footer-line-3'>
      <span class='post-location'>
        <b:if cond='data:top.showLocation'>
          <b:if cond='data:post.location'>
            <data:postLocationLabel/>
            <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
          </b:if>
        </b:if>
      </span>
      </div>
      <b:if cond='data:post.authorAboutMe'>
        <div class='author-profile' itemprop='author' itemscope='itemscope' itemtype='http://schema.org/Person'>
          <b:if cond='data:post.authorPhoto.url'>
            <img expr:src='data:post.authorPhoto.url' itemprop='image' width='50px'/>
          </b:if>
          <div>
            <a class='g-profile' expr:href='data:post.authorProfileUrl' itemprop='url' rel='author' title='author profile'>
              <span itemprop='name'><data:post.author/></span>
            </a>
          </div>
          <span itemprop='description'><data:post.authorAboutMe/></span>
        </div>
      </b:if>
    </div>
   <b:if cond='data:blog.pageType == &quot;item&quot;'>
      &lt;/div&gt;
    </b:if>
  </div>
</b:includable>
       <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
        <img alt='' class='icon-action' height='18' src='https://resources.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
      </a>
    </span>
  </b:if>
</b:includable>
       <b:includable id='shareButtons' var='post'>
  <b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showPinterestButton'><a class='goog-inline-block share-button sb-pinterest' expr:href='data:post.sharePostUrl + &quot;&amp;target=pinterest&quot;' expr:title='data:top.shareToPinterestMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToPinterestMsg/></span></a></b:if><b:if cond='data:top.showPlusOne'><div class='goog-inline-block google-plus-share-container'><data:post.googlePlusShareTag/></div></b:if>
</b:includable>
       <b:includable id='status-message'>
  <b:if cond='data:navMessage'>
  <div class='status-msg-wrap'>
    <div class='status-msg-body'>
      <data:navMessage/>
    </div>
    <div class='status-msg-border'>
      <div class='status-msg-bg'>
        <div class='status-msg-hidden'><data:navMessage/></div>
      </div>
    </div>
  </div>
  <div style='clear: both;'/>
<b:if cond='data:blog.pageType == &quot;error_page&quot;'>
  <div class='post-404'>
<div class='actions-404'>
<div class='ops-404'><span>خطأ;</span> عذرا&#1611; يبدو أن الصفحة التي تبحث عنها غير موجودة او تمت إزالتها.
                        </div>
<div class='title-404'>404</div>
<div class='link-404'>
<a href='/'><i class='fa fa-car'/>
<trans>العودة للصفحة الرئيسية</trans></a>
</div></div>
</div>
<style>
.post-404 {
    padding-top: 40px;
    padding-bottom: 60px;
}
.actions-404 {
    width: 100%;
    float: left;
    text-align: center;
}
.ops-404 {
    width: 50%;
    margin: 0 auto;
    font-size: 26px;
    font-weight: 400;
font-family: &#39;Droid Arabic Kufi&#39;, sans-serif;
}
.ops-404 span {
    font-weight: 700;
}
.title-404 {
    font-size: 200px;
    font-weight: 700;
    line-height: 1.1;
    color:$maincolor;
}
.link-404 {
    font-size: 18px;
    padding-top: 20px;
    padding-bottom: 50px;
}
#blog-pager, #sidebar-wrapper,.status-msg-wrap {
    display: none;
}
.status-msg-border {
         border: 0 !important;
       }

       .status-msg-bg {
         background-color: #fff;
       }
#main-wrapper {
width: 100%;
    max-width: 100%;
}
#main-post-sec {
    max-width: 100%;
}
#mini-sidebar-wrapper {
    display: none;
}
</style>
      </b:if>
  </b:if>
</b:includable>
       <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
       <b:includable id='threaded_comment_js' var='post'>
  <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>

  <script type='text/javascript'>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var config = <data:post.commentConfig/>;

// <![CDATA[
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + entry.content.$t + '</span>';
            }
          }
        }
        return entry.content.$t;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                  comment.displayTime = entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == config.authorName
              && comment.author.profileUrl == config.authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return config.baseUri + '/delete-comment.g?blogID='
               + config.blogId + '&postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };

      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;

      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          replybox.src = '';
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };

      var hash = (window.location.hash || '#').substring(1);
      var startThread, targetComment;
      if (/^comment-form_/.test(hash)) {
        startThread = hash.substring('comment-form_'.length);
      } else if (/^c[0-9]+$/.test(hash)) {
        targetComment = hash.substring(1);
      }

      // Configure commenting API:
      var configJso = {
        'maxDepth': config.maxThreadDepth
      };
      var provider = {
        'id': config.postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initComment': targetComment,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };

      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };

      // render now, or queue to render when library loads:
      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
       <b:includable id='threaded_comments' var='post'>
  <div class='comments' id='comments'>
    <a name='comments'/>
    <h4><data:post.commentLabelFull/>:</h4>

    <div class='comments-content'>
      <b:include cond='data:post.embedCommentForm' data='post' name='threaded_comment_js'/>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>

    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>

    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
      <b:include cond='data:post.showBacklinks' data='post' name='backlinks'/>
    </div>
    </div>
  </div>
</b:includable>
     </b:widget>
   </b:section>    
      </div>

  <div id='sidebar-wrapper'>
    <b:section class='sidebar ty-trigger' id='sidebar' preferred='yes'>
      <b:widget id='BlogSearch1' locked='false' title='بحث هذه المدونة الإلكترونية' type='BlogSearch'>
        <b:includable id='main'>
    <!-- only display title if it's non-empty -->
    <b:if cond='data:title != &quot;&quot;'>
      <h2 class='title'><data:title/></h2>
    </b:if>

    <div class='widget-content'>
      <div expr:id='data:widget.instanceId + &quot;_form&quot;'>
        <form class='gsc-search-box' expr:action='data:blog.searchUrl'>
          <b:attr cond='not data:view.isPreview' name='target' value='_top'/>
          <table cellpadding='0' cellspacing='0' class='gsc-search-box'>
            <tbody>
              <tr>
                <td class='gsc-input'>
                  <input autocomplete='off' class='gsc-input' expr:value='data:view.isSearch ? data:view.search.query.escaped : &quot;&quot;' name='q' size='10' title='search' type='text'/>
                </td>
                <td class='gsc-search-button'>
                  <input class='gsc-search-button' expr:value='data:messages.search' title='search' type='submit'/>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>

    <b:include name='quickedit'/>
  </b:includable>
      </b:widget>
      <b:widget id='Attribution1' locked='false' title='' type='Attribution'>
        <b:widget-settings>
          <b:widget-setting name='copyright'/>
        </b:widget-settings>
        <b:includable id='main'>
    <div class='widget-content' style='text-align: center;'>
      <b:if cond='data:attribution != &quot;&quot;'>
       <data:attribution/>
      </b:if>
    </div>

    <b:include name='quickedit'/>
  </b:includable>
      </b:widget>
    </b:section>
<div class='sidetabs' id='sidetabs'>
      <ul class='menu-tab'>
        <li class='item-1'><a href='#tabside1'/></li>
        <li class='item-2'><a href='#tabside2'/></li>
<li class='item-3'><a href='#tabside3'/></li>
      </ul>
      <b:section class='sidebar ty-trigger' id='tabside1' maxwidgets='1' name='Tab 01' showaddelement='yes'>
        <b:widget id='HTML6' locked='false' title='الأحدث' type='HTML' version='1'>
          <b:widget-settings>
            <b:widget-setting name='content'><![CDATA[<span class="latestposts" data-no="5"></span>]]></b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <div class='clear'/>
 <!--b:include name='quickedit'/-->
</b:includable>
        </b:widget>
      </b:section>
      <b:section class='sidebar ty-trigger' id='tabside2' maxwidgets='1' name='Tab 02' showaddelement='yes'>
        <b:widget id='PopularPosts1' locked='false' title='شائعة' type='PopularPosts' version='1'>
          <b:widget-settings>
            <b:widget-setting name='numItemsToShow'>5</b:widget-setting>
            <b:widget-setting name='showThumbnails'>true</b:widget-setting>
            <b:widget-setting name='showSnippets'>true</b:widget-setting>
            <b:widget-setting name='timeRange'>LAST_MONTH</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
  <div class='widget-content popular-posts'>
    <ul>
      <b:loop values='data:posts' var='post'>
      <li>
        <b:if cond='!data:showThumbnails'>
          <b:if cond='!data:showSnippets'>
            <!-- (1) No snippet/thumbnail -->
            <a expr:href='data:post.href'><data:post.title/></a>
          <b:else/>
            <!-- (2) Show only snippets -->
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <div class='item-snippet'><data:post.snippet/></div>
          </b:if>
        <b:else/>
          <!-- (3) Show only thumbnails or (4) Snippets and thumbnails. -->
          <div expr:class='data:showSnippets ? &quot;item-content&quot; : &quot;item-thumbnail-only&quot;'>
            <b:if cond='data:post.featuredImage.isResizable or data:post.thumbnail'>
              <div class='item-thumbnail'>
                <a expr:href='data:post.href' target='_blank'>
                  <b:with value='data:post.featuredImage.isResizable                                  ? resizeImage(data:post.featuredImage, 72, &quot;1:1&quot;)                                  : data:post.thumbnail' var='image'>
                    <img border='0' expr:alt='data:post.title' expr:src='data:image'/>
                  </b:with>
                </a>
              </div>
            </b:if>
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <b:if cond='data:showSnippets'>
              <div class='item-snippet'><data:post.snippet/></div>
            </b:if>
          </div>
          <div style='clear: both;'/>
        </b:if>
      </li>
      </b:loop>
    </ul>
   <!--b:include name='quickedit'/-->
  </div>
</b:includable>
        </b:widget>
      </b:section>
 <b:section class='sidebar ty-trigger' id='tabside3' maxwidgets='1' name='Tab 03' showaddelement='yes'>
   <b:widget id='HTML3' locked='false' title='تعليقات' type='HTML' version='1'>
     <b:widget-settings>
       <b:widget-setting name='content'><![CDATA[<span class="latestcomments" data-no="5"></span>]]></b:widget-setting>
     </b:widget-settings>
     <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <div class='clear'/>
 <!--b:include name='quickedit'/-->
</b:includable>
   </b:widget>
 </b:section>
     </div>
<div style='clear: both;'/>
  <b:section class='sidebar ty-trigger' id='sidebar1' preferred='yes'>
    <b:widget id='Label1' locked='false' title='اقسام مدونتنا الفرعية' type='Label'>
      <b:widget-settings>
        <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
        <b:widget-setting name='display'>CLOUD</b:widget-setting>
        <b:widget-setting name='selectedLabelsList'>ابل,اخبار,امازون,انسغرام,تلجرام,تويتر,جوجل,فيسبوك,مايكروسوف,مشاكل وحلول,معلومات تقنية,هاتف Google,هاتف LG,هاتف هواوي,واتساب</b:widget-setting>
        <b:widget-setting name='showType'>USER_SELECTED</b:widget-setting>
        <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
      </b:widget-settings>
      <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <h2><data:title/></h2>
  </b:if>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <b:if cond='data:blog.url == data:label.url'>
              <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
            <b:else/>
              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
            </b:if>
            <b:if cond='data:showFreqNumbers'>
              <span dir='ltr'>(<data:label.count/>)</span>
            </b:if>
          </li>
        </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
    </b:widget>
  </b:section>



    </div>
 <div style='clear: both;'/>
    </div>
    <!-- end content-wrapper -->
<div id='lower'> 
<div class='row' id='lower-wrapper'>

<div id='lowerbar-wrapper'> 
<b:section class='lowerbar ty-trigger' id='فوتر رقم(1)' preferred='yes'>
   <b:widget id='PageList1' locked='false' title='الصفحات' type='PageList'>
     <b:widget-settings>
       <b:widget-setting name='pageListJson'><![CDATA[{'home': {'href': 'https://aljjenerale.blogspot.com/', 'title': 'الصفحة الرئيسية', 'position': 0}, '6174661445697331870': {'href': 'https://aljjenerale.blogspot.com/p/blog-page_5.html', 'title': 'اتفاقية الاستخدام', 'position': 1}, '2072768899931166505': {'href': 'https://aljjenerale.blogspot.com/p/blog-page.html', 'title': 'ساسية الخصوصية', 'position': 2}}]]></b:widget-setting>
       <b:widget-setting name='homeTitle'>الصفحة الرئيسية</b:widget-setting>
     </b:widget-settings>
     <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
  <div class='widget-content'>
    <b:if cond='data:mobile'>
      <select expr:id='data:widget.instanceId + &quot;_select&quot;'>
        <b:loop values='data:links' var='link'>
          <option expr:value='data:link.href'>
            <b:attr cond='data:link.isCurrentPage' name='selected' value='selected'/>
            <data:link.title/>
          </option>
        </b:loop>
      </select>
      <span class='pagelist-arrow'>&amp;#9660;</span>
    <b:else/>
      <ul>
        <b:loop values='data:links' var='link'>
          <li>
            <b:class cond='data:link.isCurrentPage' name='selected'/>
            <a expr:href='data:link.href'><data:link.title/></a>
          </li>
        </b:loop>
      </ul>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
   </b:widget>
 </b:section> 
</div>

<div id='lowerbar-wrapper'> 
<b:section class='lowerbar ty-trigger' id='فوتر رقم (2)' preferred='yes'>
   <b:widget id='Label2' locked='false' title='اقسام مدونتنا الرئسية' type='Label'>
     <b:widget-settings>
       <b:widget-setting name='sorting'>ALPHA</b:widget-setting>
       <b:widget-setting name='display'>CLOUD</b:widget-setting>
       <b:widget-setting name='selectedLabelsList'>الهواتف الذكية,تواصل,شركات عالمية</b:widget-setting>
       <b:widget-setting name='showType'>USER_SELECTED</b:widget-setting>
       <b:widget-setting name='showFreqNumbers'>false</b:widget-setting>
     </b:widget-settings>
     <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <h2><data:title/></h2>
  </b:if>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <b:if cond='data:blog.url == data:label.url'>
              <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
            <b:else/>
              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
            </b:if>
            <b:if cond='data:showFreqNumbers'>
              <span dir='ltr'>(<data:label.count/>)</span>
            </b:if>
          </li>
        </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
   </b:widget>
   <b:widget id='FollowByEmail1' locked='false' title='أنت هنا لأنك مهتم بمتابعة اخبار مدونتنا' type='FollowByEmail' version='1'>
     <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2 class='title'><data:title/></h2></b:if>
  <div class='widget-content'>
    <div class='follow-by-email-inner'>
      <form action='https://feedburner.google.com/fb/a/mailverify' expr:onsubmit='&quot;window.open(\&quot;https://feedburner.google.com/fb/a/mailverify?uri=&quot; + data:feedPath + &quot;\&quot;, \&quot;popupwindow\&quot;, \&quot;scrollbars=yes,width=550,height=520\&quot;); return true&quot;' method='post' target='popupwindow'>
        <table width='100%'>
          <tr>
            <td>
              <input class='follow-by-email-address' name='email' placeholder='ادخل بريدك الالكتروني الان ...' type='text'/>
            </td>
            <td width='64px'>
              <input class='follow-by-email-submit' type='submit' value='إشتراك'/>
            </td>
          </tr>
        </table>
        <input expr:value='data:feedPath' name='uri' type='hidden'/>
        <input name='loc' type='hidden' value='en_US'/>
      </form>
    </div>
  </div>
  <span class='item-control blog-admin'>
    <b:include name='quickedit'/>
  </span>
</b:includable>
   </b:widget>
 </b:section> 
</div>

<div id='lowerbar-wrapper'> 
<b:section class='lowerbar ty-trigger' id='فوتر رقم (3)' preferred='yes'>
   <b:widget id='ContactForm1' locked='false' title='نموذج الاتصال' type='ContactForm'>
     <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='contact-form-widget'>
    <div class='form'>
      <form name='contact-form'>
        <p/>
        <data:contactFormNameMsg/>
        <br/>
        <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' name='name' size='30' type='text' value=''/>
        <p/>
        <data:contactFormEmailMsg/> <span style='font-weight: bolder;'>*</span>
        <br/>
        <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' name='email' size='30' type='text' value=''/>
        <p/>
        <data:contactFormMessageMsg/> <span style='font-weight: bolder;'>*</span>
        <br/>
        <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' name='email-message' rows='5'/>
        <p/>
        <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
        <p/>
        <div style='text-align: center; max-width: 222px; width: 100%'>
          <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
          <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
        </div>
      </form>
    </div>
  </div>
  <b:include name='quickedit'/>
</b:includable>
   </b:widget>
 </b:section> 
</div>
<div style='clear: both;'/> 
</div>
 </div>
<div id='jugas_footer'>
        <div class='copy-container row'>
         
                    <div class='jugas_footer_copyleft'>
                          جميع الحقوق محفوظة لـ <i aria-hidden='true' class='fa fa-heart' style='color: red;'/>  <a href='https://www.facebook.com/mahmoud.elnajjjar' id='mycontent' rel='dofollow' title='Blogger Templates'>Mahmoud EL-Najjar</a><div class='copyleft'>
صمم وكود بكل     
<i class='fa fa-heart' style='color: #e82727;'/> 
من طرف
<a href='https://www.facebook.com/mahmoud.elnajjjar' id='mahmoud el najjar-Copy' rel='dofollow' title='mahmoud el najjar'>mahmoud el najjar</a>
</div>
   
                 
<div class='btnfooter'>
<a href='https://aljjenerale.blogspot.com/p/blog-page.html'>سياسة الخصوصية</a>
<a href='https://aljjenerale.blogspot.com/p/blog-page_5.html'>إتفاقية الإستخدام</a>
</div>
</div>
               <b:section class='bottom-bar-social blue' id='Footer social widget' maxwidgets='1' name='الصفحات الاجتماعية اسفل' showaddelement='no'>
                 <b:widget id='LinkList236' locked='true' title='أيقونات الصفحات الإجتماعية' type='LinkList' version='1'>
                   <b:widget-settings>
                     <b:widget-setting name='link-3'>#</b:widget-setting>
                     <b:widget-setting name='sorting'>NONE</b:widget-setting>
                     <b:widget-setting name='text-1'>facebook</b:widget-setting>
                     <b:widget-setting name='link-1'>#</b:widget-setting>
                     <b:widget-setting name='text-0'>twitter</b:widget-setting>
                     <b:widget-setting name='link-2'>#</b:widget-setting>
                     <b:widget-setting name='text-3'>rss</b:widget-setting>
                     <b:widget-setting name='link-0'>#</b:widget-setting>
                     <b:widget-setting name='text-2'>gplus</b:widget-setting>
                   </b:widget-settings>
                   <b:includable id='main'>
            <div class='widget-content'>
              <ul id='social'>
                <b:loop values='data:links' var='link'>
                  <li><a expr:class='data:link.name' expr:href='data:link.target' expr:title='data:link.name'/></li>
                </b:loop>
              </ul>
            </div>
          </b:includable>
                 </b:widget>
               </b:section>
                    
        </div>
    </div>
&lt;/div&gt;
<script type='text/javascript'>
//<![CDATA[

// Plugin: SelectNav.js ~ url: https://github.com/lukaszfiszer/selectnav.js
window.selectnav=function(){"use strict";var e=function(e,t){function c(e){var t;if(!e)e=window.event;if(e.target)t=e.target;else if(e.srcElement)t=e.srcElement;if(t.nodeType===3)t=t.parentNode;if(t.value)window.location.href=t.value}function h(e){var t=e.nodeName.toLowerCase();return t==="ul"||t==="ol"}function p(e){for(var t=1;document.getElementById("selectnav"+t);t++);return e?"selectnav"+t:"selectnav"+(t-1)}function d(e){a++;var t=e.children.length,n="",l="",c=a-1;if(!t){return}if(c){while(c--){l+=o}l+=" "}for(var v=0;v<t;v++){var m=e.children[v].children[0];if(typeof m!=="undefined"){var g=m.innerText||m.textContent;var y="";if(r){y=m.className.search(r)!==-1||m.parentNode.className.search(r)!==-1?f:""}if(i&&!y){y=m.href===document.URL?f:""}n+='<option value="'+m.href+'" '+y+">"+l+g+"</option>";if(s){var b=e.children[v].children[1];if(b&&h(b)){n+=d(b)}}}}if(a===1&&u){n='<option value="">'+u+"</option>"+n}if(a===1){n='<select class="selectnav" id="'+p(true)+'">'+n+"</select>"}a--;return n}e=document.getElementById(e);if(!e){return}if(!h(e)){return}if(!("insertAdjacentHTML"in window.document.documentElement)){return}document.documentElement.className+=" js";var n=t||{},r=n.activeclass||"active",i=typeof n.autoselect==="boolean"?n.autoselect:true,s=typeof n.nested==="boolean"?n.nested:true,o=n.indent||"-",u=n.label||"Menu",a=0,f=" selected ";e.insertAdjacentHTML("afterend",d(e));var l=document.getElementById(p());if(l.addEventListener){l.addEventListener("change",c)}if(l.attachEvent){l.attachEvent("onchange",c)}return l};return function(t,n){e(t,n)}}();

// JQuery hover event with timeout by Taufik Nurrohman - https://aljjenerale.blogspot.com/
(function(c){c.fn.hoverTimeout=function(d,e,f,g){return this.each(function(){var a=null,b=c(this);b.hover(function(){clearTimeout(a);a=setTimeout(function(){e.call(b)},d)},function(){clearTimeout(a);a=setTimeout(function(){g.call(b)},f)})})}})(jQuery);

// News Ticker plugin ~ URL: http://jonmifsud.com/open-source/jquery/jquery-webticker
(function(e){function n(e,t){var s=e.data("settings");if(typeof t==="undefined")t=false;if(t){i(e)}var o=r(e);e.animate(o.css,o.time,"linear",function(){e.css(s.direction,"0");n(e,true)})}function r(e){var t=e.data("settings");var n=e.children().first();var r=Math.abs(-e.css(t.direction).replace("px","").replace("auto","0")-n.outerWidth(true));var t=e.data("settings");var i=r*1e3/t.speed;var s={};s[t.direction]=e.css(t.direction).replace("px","").replace("auto","0")-r;return{css:s,time:i}}function i(e){var t=e.data("settings");e.css("transition-duration","0s").css(t.direction,"0");var n=e.children().first();if(n.hasClass("webticker-init"))n.remove();else e.children().last().after(n)}function s(e,t){if(typeof t==="undefined")t=false;if(t){i(e)}var n=r(e);var s=n.time/1e3;s+="s";e.css(n.css).css("transition-duration",s)}function o(t,n,r){var i;e.get(t,function(t){var s=e(t);s.find("item").each(function(){var t=e(this),n={title:t.find("title").text(),link:t.find("link").text()};listItem="<li><a href='"+n.link+"'>"+n.title+"</a></li>";i+=listItem});r.webTicker("update",i,n)})}function u(t){var n=t.data("settings");t.width("auto");var r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});if(r<t.parent().width()||t.children().length==1){if(n.duplicate){itemWidth=Math.max.apply(Math,t.children().map(function(){return e(this).width()}).get());while(r-itemWidth<t.parent().width()||t.children().length==1){var i=t.children().clone();t.append(i);r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});itemWidth=Math.max.apply(Math,t.children().map(function(){return e(this).width()}).get())}}else{var s=t.parent().width()-r;s+=t.find("li:first").width();var o=t.find("li:first").height();t.append('<li class="ticker-spacer" style="width:'+s+"px;height:"+o+'px;"></li>')}}if(n.startEmpty){var o=t.find("li:first").height();t.prepend('<li class="webticker-init" style="width:'+t.parent().width()+"px;height:"+o+'px;"></li>')}r=0;t.children("li").each(function(){r+=e(this).outerWidth(true)});t.width(r+200);widthCompare=0;t.children("li").each(function(){widthCompare+=e(this).outerWidth(true)});while(widthCompare>=t.width()){t.width(t.width()+200);widthCompare=0;t.children("li").each(function(){widthCompare+=e(this).outerWidth(true)})}}var t=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(e["transition"]=="")return true;while(t.length)if(t.pop()+"Transition"in e)return true;return false}();var a={init:function(r){r=jQuery.extend({speed:50,direction:"right",moving:true,startEmpty:true,duplicate:false,rssurl:false,hoverpause:true,rssfrequency:0,updatetype:"reset"},r);return this.each(function(){jQuery(this).data("settings",r);var i=jQuery(this);i.addClass("newsticker");var a=i.wrap("<div class='mask'></div>");a.after("<span class='tickeroverlay-right'>&nbsp;</span><span class='tickeroverlay-left'>&nbsp;</span>");var f=i.parent().wrap("<div class='tickercontainer'></div>");u(i);if(r.rssurl){o(r.rssurl,r.type,i);if(r.rssfrequency>0){window.setInterval(function(){o(r.rssurl,r.type,i)},r.rssfrequency*1e3*60)}}if(t){i.css("transition-duration","0s").css(r.direction,"0");s(i,false);i.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(t){if(!i.is(t.target)){return false}s(e(this),true)})}else{n(e(this))}if(r.hoverpause){i.hover(function(){if(t){var n=e(this).css(r.direction);e(this).css("transition-duration","0s").css(r.direction,n)}else jQuery(this).stop()},function(){if(jQuery(this).data("settings").moving){if(t){s(e(this),false)}else{n(i)}}})}})},stop:function(){var n=e(this).data("settings");if(n.moving){n.moving=false;return this.each(function(){if(t){var r=e(this).css(n.direction);e(this).css("transition-duration","0s").css(n.direction,r)}else e(this).stop()})}},cont:function(){var r=e(this).data("settings");if(!r.moving){r.moving=true;return this.each(function(){if(t){s(e(this),false)}else{n(e(this))}})}},update:function(t,n,r,i){n=n||"reset";if(typeof r==="undefined")r=true;if(typeof i==="undefined")i=false;if(typeof t==="string"){t=e(t)}var s=e(this);s.webTicker("stop");var o=e(this).data("settings");if(n=="reset"){s.html(t);s.css(o.direction,"0");u(s)}else if(n=="swap"){s.children("li").addClass("old");for(var a=0;a<t.length;a++){id=e(t[a]).data("update");match=s.find('[data-update="'+id+'"]');if(match.length<1){if(r){if(s.find(".ticker-spacer:first-child").length==0&&s.find(".ticker-spacer").length>0){s.children("li.ticker-spacer").before(t[a])}else{s.append(t[a])}}}else s.find('[data-update="'+id+'"]').replaceWith(t[a]);}s.children("li.webticker-init, li.ticker-spacer").removeClass("old");if(i)s.children("li").remove(".old");stripWidth=0;s.children("li").each(function(){stripWidth+=e(this).outerWidth(true)});s.width(stripWidth+200)}s.webTicker("cont")}};e.fn.webTicker=function(t){if(a[t]){return a[t].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof t==="object"||!t){return a.init.apply(this,arguments)}else{e.error("Method "+t+" does not exist on jQuery.webTicker")}}})(jQuery);


// Tabslet jQuery plugin -  http://vdw.staytuned.gr
(function($,window,undefined){$.fn.tabslet=function(options){var defaults={mouseevent:"click",attribute:"href",animation:false,autorotate:false,pauseonhover:true,delay:2000,active:1,controls:{prev:".prev",next:".next"}};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);options.mouseevent=$this.data("mouseevent")||options.mouseevent;options.attribute=$this.data("attribute")||options.attribute;options.animation=$this.data("animation")||options.animation;options.autorotate=$this.data("autorotate")||options.autorotate;options.pauseonhover=$this.data("pauseonhover")||options.pauseonhover;options.delay=$this.data("delay")||options.delay;options.active=$this.data("active")||options.active;$this.find("> div").hide();$this.find("> div").eq(options.active-1).show();$this.find("> ul li").eq(options.active-1).addClass("active");var fn=eval(function(){$(this).trigger("_before");$this.find("> ul li").removeClass("active");$(this).addClass("active");$this.find("> div").hide();var currentTab=$(this).find("a").attr(options.attribute);if(options.animation){$this.find(currentTab).animate({opacity:"show"},"slow",function(){$(this).trigger("_after")})}else{$this.find(currentTab).show();$(this).trigger("_after")}return false});var init=eval("$this.find('> ul li')."+options.mouseevent+"(fn)");init;var elements=$this.find("> ul li"),i=options.active-1;function forward(){i=++i%elements.length;options.mouseevent=="hover"?elements.eq(i).trigger("mouseover"):elements.eq(i).click();var t=setTimeout(forward,options.delay);$this.mouseover(function(){if(options.pauseonhover){clearTimeout(t)}})}if(options.autorotate){setTimeout(forward,0);if(options.pauseonhover){$this.on("mouseleave",function(){setTimeout(forward,1000)})}}function move(direction){if(direction=="forward"){i=++i%elements.length}if(direction=="backward"){i=--i%elements.length}elements.eq(i).click()}$this.find(options.controls.next).click(function(){move("forward")});$this.find(options.controls.prev).click(function(){move("backward")});$this.on("destroy",function(){$(this).removeData()})})};$(document).ready(function(){$('[data-toggle="tabslet"]').tabslet()})})(jQuery);

// jquery replacetext plugin https://github.com/cowboy/jquery-replacetext
(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);


$(document)['ready'](function() {
    setInterval(function() {
        if (!$('#mycontent:visible')['length']) {
            window['location']['href'] = 'http://www.madad2.com/'
        }
    }, 3000)
});
window['onload'] = function() {
    var _0x3035x1 = document['getElementById']('mycontent');
    _0x3035x1['setAttribute']('href', 'https://aljjenerale.blogspot.com/');
    _0x3035x1['setAttribute']('rel', 'dofollow');
    _0x3035x1['setAttribute']('title', 'مدونة الجنرال');
    _0x3035x1['setAttribute']('style', 'display: inline-block!important; font-size: inherit!important; color: #f1284e!important; visibility: visible!important;z-index:99!important; opacity: 1!important;');
    _0x3035x1['innerHTML'] = 'مدونة الجنرال'
};
$(document)['ready'](function(_0x3035x2) {
    var _0x3035x3 = -1,
        o = '',
        _0x3035x5 = '';
    _0x3035x2('#menu')['find']('ul')['find']('li')['each'](function() {
        for (var _0x3035x6 = _0x3035x2(this)['text'](), _0x3035x7 = _0x3035x2(this)['find']('a')['attr']('href'), _0x3035x8 = 0, _0x3035x9 = 0; _0x3035x9 < _0x3035x6['length'] && (_0x3035x8 = _0x3035x6['indexOf']('_', _0x3035x8), -1 != _0x3035x8); _0x3035x9++) {
            _0x3035x8++
        };
        if (level = _0x3035x9, level > _0x3035x3 && (o += '<ul>', _0x3035x5 += '<ul>'), level < _0x3035x3) {
            offset = _0x3035x3 - level;
            for (var _0x3035x9 = 0; _0x3035x9 < offset; _0x3035x9++) {
                o += '</ul></li>', _0x3035x5 += '</ul></li>'
            }
        };
        _0x3035x6 = _0x3035x6['replace'](/_/gi, ''), o += '<li><a href=\'' + _0x3035x7 + '\'>' + _0x3035x6 + '</a>', _0x3035x5 += '<li><a href=\'' + _0x3035x7 + '\'>';
        for (var _0x3035x9 = 0; _0x3035x9 < level; _0x3035x9++) {
            _0x3035x5 += ''
        };
        _0x3035x5 += _0x3035x6 + '</a>', _0x3035x3 = level
    });
    for (var _0x3035x8 = 0; _0x3035x3 >= _0x3035x8; _0x3035x8++) {
        o += '</ul>', _0x3035x5 += '</ul>', 0 != _0x3035x8 && (o += '</li>', _0x3035x5 += '</li>')
    };
    _0x3035x2('#menu .LinkList')['html'](_0x3035x5), _0x3035x2('#menu > .LinkList > ul')['attr']('id', 'nav'), selectnav('nav'), _0x3035x2('#menu ul > li > ul')['parent']('li')['addClass']('parent'), _0x3035x2('#menu .widget')['attr']('style', 'display:block!important;'), _0x3035x2('#menu ul > li')['first']()['addClass']('hub-home')
});
$('.ticker .HTML .widget-content')['each'](function() {
    var _0x3035xa = $(this)['find']('span')['attr']('data-no') || '',
        _0x3035xb = $(this)['find']('span')['attr']('data-label') || '',
        _0x3035xc = $(this)['find']('span')['attr']('data-type') || '';
    if (_0x3035xc != undefined && _0x3035xc['match']('recent')) {
        $['ajax']({
            url: '/feeds/posts/default?alt=json-in-script&max-results=' + _0x3035xa,
            type: 'get',
            dataType: 'jsonp',
            success: function(_0x3035x1) {
                var _0x3035xd = '';
                var _0x3035xe = '<ul>';
                for (var _0x3035xf = 0; _0x3035xf < _0x3035x1['feed']['entry']['length']; _0x3035xf++) {
                    for (var _0x3035x10 = 0; _0x3035x10 < _0x3035x1['feed']['entry'][_0x3035xf]['link']['length']; _0x3035x10++) {
                        if (_0x3035x1['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['rel'] == 'alternate') {
                            _0x3035xd = _0x3035x1['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['href'];
                            break
                        }
                    };
                    var _0x3035x11 = _0x3035x1['feed']['entry'][_0x3035xf]['title']['$t'];
                    var s = _0x3035x1['feed']['entry'][_0x3035xf]['category'][0]['term'];
                    var _0x3035x13 = _0x3035x1['feed']['entry'][_0x3035xf]['content']['$t'];
                    var _0x3035x14 = $('<div>')['html'](_0x3035x13);
                    if (_0x3035x13['indexOf']('//www.youtube.com/embed/') > -1) {
                        var _0x3035x5 = _0x3035x1['feed']['entry'][_0x3035xf]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                        var _0x3035x3 = _0x3035x5
                    } else {
                        if (_0x3035x13['indexOf']('<img') > -1) {
                            var _0x3035x15 = _0x3035x14['find']('img:first')['attr']('src')['replace']('s72-c', 's1600');
                            var _0x3035x3 = _0x3035x15
                        } else {
                            var _0x3035x3 = no_image
                        }
                    };
                    _0x3035xe += '<li><div class="tk-thumb"><a class="tk-img" href="' + _0x3035xd + '" style="background:url(' + _0x3035x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><h3 class="tyard-title"><a href="' + _0x3035xd + '">' + _0x3035x11 + '</a></h3></li>'
                };
                _0x3035xe += '</ul>';
                $('.ticker .widget-content')['each'](function() {
                    $(this)['html'](_0x3035xe);
                    $(this)['prev']('h2')['wrapInner']('<span></span>');
                    $(this)['prev']('h2')['prepend']('<i class="fa fa-fire"></i>');
                    $(this)['find']('ul')['webTicker']()
                })
            }
        })
    } else {
        if (_0x3035xc['match']('label')) {
            $['ajax']({
                url: '/feeds/posts/default/-/' + _0x3035xb + '?alt=json-in-script&max-results=' + _0x3035xa,
                type: 'get',
                dataType: 'jsonp',
                success: function(_0x3035x1) {
                    var _0x3035xd = '';
                    var _0x3035xe = '<ul>';
                    for (var _0x3035xf = 0; _0x3035xf < _0x3035x1['feed']['entry']['length']; _0x3035xf++) {
                        for (var _0x3035x10 = 0; _0x3035x10 < _0x3035x1['feed']['entry'][_0x3035xf]['link']['length']; _0x3035x10++) {
                            if (_0x3035x1['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['rel'] == 'alternate') {
                                _0x3035xd = _0x3035x1['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['href'];
                                break
                            }
                        };
                        var _0x3035x11 = _0x3035x1['feed']['entry'][_0x3035xf]['title']['$t'];
                        var s = _0x3035x1['feed']['entry'][_0x3035xf]['category'][0]['term'];
                        var _0x3035x13 = _0x3035x1['feed']['entry'][_0x3035xf]['content']['$t'];
                        var _0x3035x14 = $('<div>')['html'](_0x3035x13);
                        if (_0x3035x13['indexOf']('//www.youtube.com/embed/') > -1) {
                            var _0x3035x5 = _0x3035x1['feed']['entry'][_0x3035xf]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                            var _0x3035x3 = _0x3035x5
                        } else {
                            if (_0x3035x13['indexOf']('<img') > -1) {
                                var _0x3035x15 = _0x3035x14['find']('img:first')['attr']('src')['replace']('s72-c', 's100');
                                var _0x3035x3 = _0x3035x15
                            } else {
                                var _0x3035x3 = no_image
                            }
                        };
                        _0x3035xe += '<li><div class="tk-thumb"><a class="tk-img" href="' + _0x3035xd + '" style="background:url(' + _0x3035x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><a href="/search/label/' + s + '" class="post-tag icon ' + s + '">' + s + '</a><h3 class="tyard-title"><a href="' + _0x3035xd + '">' + _0x3035x11 + '</a></h3></li>'
                    };
                    _0x3035xe += '</ul>';
                    $('.ticker .HTML .widget-content')['each'](function() {
                        $(this)['html'](_0x3035xe);
                        $(this)['prev']('h2')['wrapInner']('<span></span>');
                        $(this)['prev']('h2')['prepend']('<i class="fa fa-fire"></i>');
                        $(this)['find']('ul')['webTicker']()
                    })
                }
            })
        } else {
            $('.news-tick-wrap')['remove']()
        }
    }
});
$(document)['ready'](function() {
    $('.sidebar h2,.lowerbar h2')['wrap']('<div class="widget-title"></div>')
});
$(function() {
    selectnav('nav1');
    $('.post-body img')['parent']('a')['css']('margin', '0 auto!important')
});
$('.PopularPosts ul li img')['attr']('src', function(_0x3035x16, _0x3035x17) {
    if (_0x3035x17['match']('hqdefault.jpg')) {
        return _0x3035x17['replace']('/hqdefault.jpg', '/mqdefault.jpg')
    } else {
        if (_0x3035x17['match']('default.jpg')) {
            return _0x3035x17['replace']('/default.jpg', '/mqdefault.jpg')
        } else {
            if (_0x3035x17['match']('s72-c')) {
                return _0x3035x17['replace']('/s72-c', '/s100-c')
            } else {
                if (_0x3035x17['match']('w72-h72-p-nu')) {
                    return _0x3035x17['replace']('/w72-h72-p-nu', '/s100-c')
                } else {
                    if (_0x3035x17['match']('w72-h72-p-k-no-nu')) {
                        return _0x3035x17['replace']('/w72-h72-p-k-no-nu', '/s100-c')
                    } else {
                        return _0x3035x17['replace']('https://2.bp.blogspot.com/-tsNAkNN9x-U/Wz54M8C2XEI/AAAAAAAAAds/8T7HZvVXfhABrKLPYN0LImb8PQqJ6Zb2ACLcBGAs/s1600/11111111111111111111111umb.png')
                    }
                }
            }
        }
    }
});
$('.comments .avatar-image-container img')['attr']('src', function(_0x3035x16, _0x3035x17) {
    if (_0x3035x17['match']('hqdefault.jpg')) {
        return _0x3035x17['replace']('/hqdefault.jpg', '/mqdefault.jpg')
    } else {
        if (_0x3035x17['match']('default.jpg')) {
            return _0x3035x17['replace']('/default.jpg', '/mqdefault.jpg')
        } else {
            if (_0x3035x17['match']('s35-c')) {
                return _0x3035x17['replace']('/s35-c', '/s100-c')
            } else {
                if (_0x3035x17['match']('s72-c')) {
                    return _0x3035x17['replace']('/s72-c', '/s100-c')
                } else {
                    if (_0x3035x17['match']('w72-h72-p-nu')) {
                        return _0x3035x17['replace']('/w72-h72-p-nu', '/s100-c')
                    } else {
                        return _0x3035x17['replace']('https://2.bp.blogspot.com/-tsNAkNN9x-U/Wz54M8C2XEI/AAAAAAAAAds/8T7HZvVXfhABrKLPYN0LImb8PQqJ6Zb2ACLcBGAs/s1600/11111111111111111111111umb.png')
                    }
                }
            }
        }
    }
});
$(document)['ready'](function() {
    var _0x3035x18 = $('#sidetabs #tabside1 .widget h2')['text']();
    $('.menu-tab .item-1 a')['text'](_0x3035x18);
    var _0x3035xd = $('#sidetabs #tabside2 .widget h2')['text']();
    $('.menu-tab .item-2 a')['text'](_0x3035xd);
    var _0x3035x5 = $('#sidetabs #tabside3 .widget h2')['text']();
    $('.menu-tab .item-3 a')['text'](_0x3035x5);
    $('#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title')['remove']();
    $(this)['find']('.menu-tab li')['addClass']('hide-tab');
    $('.sidetabs')['tabslet']({
        mouseevent: 'click',
        attribute: 'href',
        animation: true
    });
    if (0 === $('.sidetabs .widget')['length']) {
        $('.sidetabs')['remove']()
    }
});
$(document)['ready'](function() {
    $('.ty-ran-yard span')['each'](function() {
        $['ajax']({
            url: '/feeds/posts/default?alt=json-in-script',
            type: 'get',
            dataType: 'jsonp',
            success: function(_0x3035x19) {
                _0x3035x19 = _0x3035x19['feed']['entry']['length'] - 3, _0x3035x19 = Math['floor'](Math['random']() * (_0x3035x19 - 0 + 1)) + 0, 0 == _0x3035x19 && (_0x3035x19 = Math['floor'](Math['random']() * (_0x3035x19 - 0 + 1)) + 1), _0x3035x19 == 0 && (_0x3035x19 == 1), $['ajax']({
                    url: '/feeds/posts/default?alt=json-in-script&start-index=' + _0x3035x19 + '&max-results=1',
                    type: 'get',
                    dataType: 'jsonp',
                    success: function(_0x3035x1a) {
                        var _0x3035x7 = '';
                        var _0x3035x1b = '';
                        for (var _0x3035xf = 0; _0x3035xf < _0x3035x1a['feed']['entry']['length']; _0x3035xf++) {
                            for (var _0x3035x10 = 0; _0x3035x10 < _0x3035x1a['feed']['entry'][_0x3035xf]['link']['length']; _0x3035x10++) {
                                if (_0x3035x1a['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['rel'] == 'alternate') {
                                    _0x3035x7 = _0x3035x1a['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['href'];
                                    break
                                }
                            };
                            _0x3035x1b += '<a class="ran-sym" href="' + _0x3035x7 + '"></a>'
                        };
                        $('.ty-ran-yard span')['html'](_0x3035x1b)
                    }
                })
            }
        })
    })
});
$('.Label a,.post-labels a,.breadcrumbs span a,.label-head a')['attr']('href', function(_0x3035x16, _0x3035x1c) {
    return _0x3035x1c['replace'](_0x3035x1c, _0x3035x1c + '?&max-results=' + perPage)
});
var s = '[full_width]';
var o = '[left_sidebar]';
$('.post *')['replaceText'](s, '<style>@media screen and (min-width: 980px){.item #main-wrapper{width:100% !important;max-width:100%!important;float:none!important;border-right:0!important;border-left:0!important}.item #sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}}</style>');
$('.post-body *')['replaceText'](o, '<style>@media screen and (min-width: 980px){.item #main-wrapper{float:right!important;border-right:0!important;margin-right: 0px !important;}.item #sidebar-wrapper{float:left!important;padding-left:0!important;}}</style>');
$('.ty-trigger .HTML .widget-content span.latestcomments')['each'](function() {
    var _0x3035xa = $(this)['attr']('data-no');
    $['ajax']({
        url: '/feeds/comments/default?alt=json-in-script&max-results=' + _0x3035xa,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0x3035x1) {
            var _0x3035xd = '';
            var _0x3035xe = '<div class="tyard-komet">';
            for (var _0x3035xf = 0; _0x3035xf < _0x3035x1['feed']['entry']['length']; _0x3035xf++) {
                if (_0x3035xf == _0x3035x1['feed']['entry']['length']) {
                    break
                };
                for (var _0x3035x10 = 0; _0x3035x10 < _0x3035x1['feed']['entry'][_0x3035xf]['link']['length']; _0x3035x10++) {
                    if (_0x3035x1['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['rel'] == 'alternate') {
                        _0x3035xd = _0x3035x1['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['href'];
                        break
                    }
                };
                if ('content' in _0x3035x1['feed']['entry'][_0x3035xf]) {
                    var _0x3035x13 = _0x3035x1['feed']['entry'][_0x3035xf]['content']['$t']
                } else {
                    if ('summary' in b_rc) {
                        var _0x3035x13 = _0x3035x1['feed']['entry'][_0x3035xf]['summary']['$t']
                    } else {
                        var _0x3035x13 = ''
                    }
                };
                var _0x3035x1d = /<\S[^>]*>/g;
                _0x3035x13 = _0x3035x13['replace'](_0x3035x1d, '');
                if (_0x3035x13['length'] > 70) {
                    _0x3035x13 = '' + _0x3035x13['substring'](0, 50) + '...'
                };
                var _0x3035x1e = _0x3035x1['feed']['entry'][_0x3035xf]['author'][0]['name']['$t'];
                var _0x3035x1f = _0x3035x1['feed']['entry'][_0x3035xf]['author'][0]['gd$image']['src'];
                if (_0x3035x1f['match']('http://img1.blogblog.com/img/blank.gif')) {
                    var _0x3035x3 = 'http://img1.blogblog.com/img/anon36.png'
                } else {
                    if (_0x3035x1f['match']('http://img2.blogblog.com/img/b16-rounded.gif')) {
                        var _0x3035x3 = 'http://img1.blogblog.com/img/anon36.png'
                    } else {
                        var _0x3035x3 = _0x3035x1f
                    }
                };
                _0x3035xe += '<div class="ty-komet"><div class="ty-komet-tar"><img class="yardimg-komet" src="' + _0x3035x3 + '"/></div><a href="' + _0x3035xd + '">' + _0x3035x1e + '</a><span>"' + _0x3035x13 + '"</span></div>'
            };
            _0x3035xe += '</div><div class="clear"/>';
            $('.ty-trigger .HTML .widget-content span.latestcomments')['each'](function() {
                var _0x3035x6 = $(this)['attr']('data-no');
                if (_0x3035x6 == _0x3035xa) {
                    $(this)['parent']()['html'](_0x3035xe)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.latestposts')['each'](function() {
    var _0x3035xa = $(this)['attr']('data-no');
    $['ajax']({
        url: '/feeds/posts/default?alt=json-in-script&max-results=' + _0x3035xa,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0x3035x1) {
            var _0x3035xd = '';
            var _0x3035xe = '<div class="ty-bonus">';
            for (var _0x3035xf = 0; _0x3035xf < _0x3035x1['feed']['entry']['length']; _0x3035xf++) {
                for (var _0x3035x10 = 0; _0x3035x10 < _0x3035x1['feed']['entry'][_0x3035xf]['link']['length']; _0x3035x10++) {
                    if (_0x3035x1['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['rel'] == 'alternate') {
                        _0x3035xd = _0x3035x1['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['href'];
                        break
                    }
                };
                var _0x3035x11 = _0x3035x1['feed']['entry'][_0x3035xf]['title']['$t'];
                var s = _0x3035x1['feed']['entry'][_0x3035xf]['category'][0]['term'];
                var _0x3035x1e = _0x3035x1['feed']['entry'][_0x3035xf]['author'][0]['name']['$t'];
                var _0x3035x20 = _0x3035x1['feed']['entry'][_0x3035xf]['published']['$t'],
                    _0x3035x19 = _0x3035x20['substring'](0, 4),
                    _0x3035x21 = _0x3035x20['substring'](5, 7),
                    _0x3035x22 = _0x3035x20['substring'](8, 10),
                    _0x3035x23 = month_format[parseInt(_0x3035x21, 10)] + ' ' + _0x3035x22 + ', ' + _0x3035x19;
                var _0x3035x13 = _0x3035x1['feed']['entry'][_0x3035xf]['content']['$t'];
                var _0x3035x14 = $('<div>')['html'](_0x3035x13);
                if (_0x3035x13['indexOf']('//www.youtube.com/embed/') > -1) {
                    var _0x3035x5 = _0x3035x1['feed']['entry'][_0x3035xf]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                    var _0x3035x3 = _0x3035x5
                } else {
                    if (_0x3035x13['indexOf']('<img') > -1) {
                        var _0x3035x15 = _0x3035x14['find']('img:first')['attr']('src')['replace']('s72-c', 's1600');
                        var _0x3035x3 = _0x3035x15
                    } else {
                        var _0x3035x3 = no_image
                    }
                };
                _0x3035xe += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + _0x3035xd + '" style="background:url(' + _0x3035x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + _0x3035xd + '">' + _0x3035x11 + '</a></h3><span class="yard-auth-ty">' + _0x3035x1e + '</span><span class="ty-time">' + _0x3035x23 + '</span></div></div>'
            };
            _0x3035xe += '</div>';
            $('.ty-trigger .HTML .widget-content span.latestposts')['each'](function() {
                var _0x3035x6 = $(this)['attr']('data-no');
                if (_0x3035x6 == _0x3035xa) {
                    $(this)['parent']()['html'](_0x3035xe)
                }
            })
        }
    })
});
$('.ty-trigger .HTML .widget-content span.tagpost')['each'](function() {
    var _0x3035xb = $(this)['attr']('data-label'),
        _0x3035xa = $(this)['attr']('data-no');
    $['ajax']({
        url: '/feeds/posts/default/-/' + _0x3035xb + '?alt=json-in-script&max-results=' + _0x3035xa,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0x3035x1) {
            var _0x3035xd = '';
            var _0x3035xe = '<div class="ty-bonus">';
            for (var _0x3035xf = 0; _0x3035xf < _0x3035x1['feed']['entry']['length']; _0x3035xf++) {
                for (var _0x3035x10 = 0; _0x3035x10 < _0x3035x1['feed']['entry'][_0x3035xf]['link']['length']; _0x3035x10++) {
                    if (_0x3035x1['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['rel'] == 'alternate') {
                        _0x3035xd = _0x3035x1['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['href'];
                        break
                    }
                };
                var _0x3035x11 = _0x3035x1['feed']['entry'][_0x3035xf]['title']['$t'];
                var s = _0x3035x1['feed']['entry'][_0x3035xf]['category'][0]['term'];
                var _0x3035x1e = _0x3035x1['feed']['entry'][_0x3035xf]['author'][0]['name']['$t'];
                var _0x3035x20 = _0x3035x1['feed']['entry'][_0x3035xf]['published']['$t'],
                    _0x3035x19 = _0x3035x20['substring'](0, 4),
                    _0x3035x21 = _0x3035x20['substring'](5, 7),
                    _0x3035x22 = _0x3035x20['substring'](8, 10),
                    _0x3035x23 = month_format[parseInt(_0x3035x21, 10)] + ' ' + _0x3035x22 + ', ' + _0x3035x19;
                var _0x3035x13 = _0x3035x1['feed']['entry'][_0x3035xf]['content']['$t'];
                var _0x3035x14 = $('<div>')['html'](_0x3035x13);
                if (_0x3035x13['indexOf']('//www.youtube.com/embed/') > -1) {
                    var _0x3035x5 = _0x3035x1['feed']['entry'][_0x3035xf]['media$thumbnail']['url']['replace']('/default.jpg', '/mqdefault.jpg');
                    var _0x3035x3 = _0x3035x5
                } else {
                    if (_0x3035x13['indexOf']('<img') > -1) {
                        var _0x3035x15 = _0x3035x14['find']('img:first')['attr']('src')['replace']('s72-c', 's1600');
                        var _0x3035x3 = _0x3035x15
                    } else {
                        var _0x3035x3 = no_image
                    }
                };
                _0x3035xe += '<div class="ty-wow"><a class="ty-thumb-bonos" href="' + _0x3035xd + '" style="background:url(' + _0x3035x3 + ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' + _0x3035xd + '">' + _0x3035x11 + '</a></h3><span class="yard-auth-ty">' + _0x3035x1e + '</span><span class="ty-time">' + _0x3035x23 + '</span></div></div>'
            };
            _0x3035xe += '</div>';
            $('.ty-trigger .HTML .widget-content span.tagpost')['each'](function() {
                var _0x3035x6 = $(this)['attr']('data-label');
                if (_0x3035x6 == _0x3035xb) {
                    $(this)['parent']()['html'](_0x3035xe)
                }
            })
        }
    })
});
$(document)['ready'](function(_0x3035x24) {
    var _0x3035xa = _0x3035x24('#post-pager .blog-pager-newer-link');
    var _0x3035x13 = _0x3035x24('#post-pager .blog-pager-older-link');
    _0x3035x24['get'](_0x3035xa['attr']('href'), function(_0x3035x13) {
        _0x3035xa['html']('<b>' + POSTPAGER_NEWER + '</b><span>' + _0x3035x24(_0x3035x13)['find']('.post h1.post-title')['text']() + '</span>')
    }, 'html');
    _0x3035x24['get'](_0x3035x13['attr']('href'), function(_0x3035xa) {
        _0x3035x13['html']('<b>' + POSTPAGER_OLDER + '</b><span>' + _0x3035x24(_0x3035xa)['find']('.post h1.post-title')['text']() + '</span>')
    }, 'html')
});
$('#related-posts')['each'](function() {
    var _0x3035x11 = $(this)['html']();
    $['ajax']({
        url: '/feeds/posts/default/-/' + _0x3035x11 + '?alt=json-in-script&max-results=' + related_number,
        type: 'get',
        dataType: 'jsonp',
        success: function(_0x3035x1a) {
            var _0x3035x25 = '';
            var _0x3035x26 = '<h4 class="related-title">مواضيع ذات صلة</h4><ul class="related">';
            for (var _0x3035xf = 0; _0x3035xf < _0x3035x1a['feed']['entry']['length']; _0x3035xf++) {
                for (var _0x3035x10 = 0; _0x3035x10 < _0x3035x1a['feed']['entry'][_0x3035xf]['link']['length']; _0x3035x10++) {
                    if (_0x3035x1a['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['rel'] == 'alternate') {
                        _0x3035x25 = _0x3035x1a['feed']['entry'][_0x3035xf]['link'][_0x3035x10]['href'];
                        break
                    }
                };
                if ('content' in _0x3035x1a['feed']['entry'][_0x3035xf]) {
                    var _0x3035x27 = _0x3035x1a['feed']['entry'][_0x3035xf]['content']['$t']
                } else {
                    if ('summary' in b_rc) {
                        var _0x3035x27 = _0x3035x1a['feed']['entry'][_0x3035xf]['summary']['$t']
                    } else {
                        var _0x3035x27 = ''
                    }
                };
                var _0x3035x28 = /<\S[^>]*>/g;
                _0x3035x27 = _0x3035x27['replace'](_0x3035x28, ''), _0x3035x27['length'] > 170 && (_0x3035x27 = '' + _0x3035x27['substring'](0, 150) + '...');
                var _0x3035x29 = _0x3035x1a['feed']['entry'][_0x3035xf]['title']['$t'];
                var _0x3035x2a = _0x3035x1a['feed']['entry'][_0x3035xf]['category'][0]['term'];
                var _0x3035x2b = _0x3035x1a['feed']['entry'][_0x3035xf]['published']['$t'],
                    _0x3035x2c = _0x3035x2b['substring'](0, 4),
                    _0x3035x2d = _0x3035x2b['substring'](5, 7),
                    _0x3035x2e = _0x3035x2b['substring'](8, 10),
                    _0x3035x2f = month_format[parseInt(_0x3035x2d, 10)] + ' ' + _0x3035x2e + ', ' + _0x3035x2c;
                var _0x3035x28 = _0x3035x1a['feed']['entry'][_0x3035xf]['content']['$t'];
                var _0x3035x30 = $('<div>')['html'](_0x3035x28);
                if (_0x3035x28['indexOf']('http://www.youtube.com/embed/') > -1 || _0x3035x28['indexOf']('https://www.youtube.com/embed/') > -1) {
                    var _0x3035x31 = _0x3035x1a['feed']['entry'][_0x3035xf]['media$thumbnail']['url'];
                    var _0x3035x32 = '<a class="related-img" href="' + _0x3035x25 + '" style="background:url(' + _0x3035x31 + ') no-repeat center center;background-size: cover"/>'
                } else {
                    if (_0x3035x28['indexOf']('<img') > -1) {
                        var _0x3035x33 = _0x3035x30['find']('img:first')['attr']('src');
                        var _0x3035x32 = '<a class="related-img" href="' + _0x3035x25 + '" style="background:url(' + _0x3035x33 + ') no-repeat center center;background-size: cover"><span class="related-overlay"></span></a>'
                    } else {
                        var _0x3035x32 = '<a class="related-img" href="' + _0x3035x25 + '" style="background:url(' + no_image + ') no-repeat center center;background-size: cover"><span class="related-overlay"></span></a>'
                    }
                };
                _0x3035x26 += '<li><span class="related-tag">' + _0x3035x2a + '</span><div class="related-thumb">' + _0x3035x32 + '</div><div class="related-content"><h3 class="related-title"><a href="' + _0x3035x25 + '">' + _0x3035x29 + '</a><span class="recent-date">' + _0x3035x2f + '</span></h3><p class="recent-summary">' + _0x3035x27 + '</p></div></li>'
            };
            _0x3035x26 += '</ul><div class="clear"/>';
            $('#related-posts')['html'](_0x3035x26);
            $('.related-img')['each'](function() {
                $(this)['attr']('style', function(_0x3035xf, _0x3035x33) {
                    return _0x3035x33['replace']('/default.jpg', '/mqdefault.jpg')
                })['attr']('style', function(_0x3035xf, _0x3035x33) {
                    return _0x3035x33['replace']('s72-c', 's100')
                })['attr']('style', function(_0x3035xf, _0x3035x33) {
                    return _0x3035x33['replace']('s200', 's100')
                })['attr']('style', function(_0x3035xf, _0x3035x33) {
                    return _0x3035x33['replace']('s320', 's100')
                })['attr']('style', function(_0x3035xf, _0x3035x33) {
                    return _0x3035x33['replace']('s400', 's100')
                })['attr']('style', function(_0x3035xf, _0x3035x33) {
                    return _0x3035x33['replace']('s640', 's100')
                })['attr']('style', function(_0x3035xf, _0x3035x33) {
                    return _0x3035x33['replace']('s1600', 's100')
                })
            })
        }
    })
})
 //]]>
</script>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType!= &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;error_page&quot;'>
<!--Page Navigation Starts-->
<script type='text/javascript'>
var postperpage= perPage;
var numshowpage=3;
var upPageWord =&#39;السابق&#39;;
var downPageWord =&#39;التالي&#39;;
var urlactivepage=location.href;
var home_page=&quot;/&quot;;
</script>
<script type='text/javascript'>
//<![CDATA[
var nopage;var jenis;var nomerhal;var lblname1;halamanblogger();function loophalaman(banyakdata){var html='';nomerkiri=parseInt(numshowpage/2);if(nomerkiri==numshowpage-nomerkiri){numshowpage=nomerkiri*2+1}mulai=nomerhal-nomerkiri;if(mulai<1)mulai=1;maksimal=parseInt(banyakdata/postperpage)+1;if(maksimal-1==banyakdata/postperpage)maksimal=maksimal-1;akhir=mulai+numshowpage-1;if(akhir>maksimal)akhir=maksimal;html+="<div class='pagenavi'><span class='showpageOf'>صفحة "+nomerhal+' من '+maksimal+"</span>";var prevnomer=parseInt(nomerhal)-1;if(nomerhal>1){if(nomerhal==2){if(jenis=="page"){html+='<span class="showpage"><a href="'+home_page+'">'+upPageWord+'</a></span>'}else{html+='<span class="showpageNum"><a href="/search/label/'+lblname1+'?&max-results='+postperpage+'">'+upPageWord+'</a></span>'}}else{if(jenis=="page"){html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+prevnomer+');return false">'+upPageWord+'</a></span>'}else{html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+prevnomer+');return false">'+upPageWord+'</a></span>'}}}if(mulai>1){if(jenis=="page"){html+='<span class="showpageNum"><a href="'+home_page+'">1</a></span>'}else{html+='<span class="showpageNum"><a href="/search/label/'+lblname1+'?&max-results='+postperpage+'">1</a></span>'}}if(mulai>2){html+='  '}for(var jj=mulai;jj<=akhir;jj++){if(nomerhal==jj){html+='<span class="showpagePoint">'+jj+'</span>'}else if(jj==1){if(jenis=="page"){html+='<span class="showpageNum"><a href="'+home_page+'">1</a></span>'}else{html+='<span class="showpageNum"><a href="/search/label/'+lblname1+'?&max-results='+postperpage+'">1</a></span>'}}else{if(jenis=="page"){html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+jj+');return false">'+jj+'</a></span>'}else{html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+jj+');return false">'+jj+'</a></span>'}}}if(akhir<maksimal-1){html+=''}if(akhir<maksimal){if(jenis=="page"){html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+maksimal+');return false">'+maksimal+'</a></span>'}else{html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+maksimal+');return false">'+maksimal+'</a></span>'}}var nextnomer=parseInt(nomerhal)+1;if(nomerhal<maksimal){if(jenis=="page"){html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+nextnomer+');return false">'+downPageWord+'</a></span>'}else{html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+nextnomer+');return false">'+downPageWord+'</a></span></div>'}}var pageArea=document.getElementsByName("pageArea");var blogPager=document.getElementById("blog-pager");for(var p=0;p<pageArea.length;p++){pageArea[p].innerHTML=html}if(pageArea&&pageArea.length>0){html=''}if(blogPager){blogPager.innerHTML=html}}function hitungtotaldata(root){var feed=root.feed;var totaldata=parseInt(feed.openSearch$totalResults.$t,10);loophalaman(totaldata)}function halamanblogger(){var thisUrl=urlactivepage;if(thisUrl.indexOf("/search/label/")!=-1){if(thisUrl.indexOf("?updated-max")!=-1){lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?updated-max"))}else{lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?&max"))}}if(thisUrl.indexOf("?q=")==-1&&thisUrl.indexOf(".html")==-1){if(thisUrl.indexOf("/search/label/")==-1){jenis="page";if(urlactivepage.indexOf("#PageNo=")!=-1){nomerhal=urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length)}else{nomerhal=1}document.write("<script src=\""+home_page+"feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata\"><\/script>")}else{jenis="label";if(thisUrl.indexOf("&max-results=")==-1){postperpage=20}if(urlactivepage.indexOf("#PageNo=")!=-1){nomerhal=urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length)}else{nomerhal=1}document.write('<script src="'+home_page+'feeds/posts/summary/-/'+lblname1+'?alt=json-in-script&callback=hitungtotaldata&max-results=1" ><\/script>')}}}function redirectpage(numberpage){jsonstart=(numberpage-1)*postperpage;nopage=numberpage;var nBody=document.getElementsByTagName('head')[0];var newInclude=document.createElement('script');newInclude.type='text/javascript';newInclude.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");nBody.appendChild(newInclude)}function redirectlabel(numberpage){jsonstart=(numberpage-1)*postperpage;nopage=numberpage;var nBody=document.getElementsByTagName('head')[0];var newInclude=document.createElement('script');newInclude.type='text/javascript';newInclude.setAttribute("src",home_page+"feeds/posts/summary/-/"+lblname1+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");nBody.appendChild(newInclude)}function finddatepost(root){post=root.feed.entry[0];var timestamp1=post.published.$t.substring(0,19)+post.published.$t.substring(23,29);var timestamp=encodeURIComponent(timestamp1);if(jenis=="page"){var alamat="/search?updated-max="+timestamp+"&max-results="+postperpage+"#PageNo="+nopage}else{var alamat="/search/label/"+lblname1+"?updated-max="+timestamp+"&max-results="+postperpage+"#PageNo="+nopage}location.href=alamat}
//]]>
</script>
</b:if>
</b:if>
</b:if>
<!--Page Navigation Ends -->
<script async='async' type='text/javascript'>
//<![CDATA[
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ar_AR/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
//]]>
</script>
<script type='text/javascript'>
$(document).ready(function(){$(&quot;.blanternotif&quot;).click(function(){$(&quot;.notifbox,#notif-wrapper&quot;).toggleClass(&quot;aktif&quot;);});});
</script>

&lt;noscript&gt;


</body>
&lt;/noscript&gt;
&lt;/body&gt;
<div id='notif-wrapper'>
</div>
</html>
