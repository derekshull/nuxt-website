import { Router } from 'express'

const router = Router()

// Mock Users
/* eslint-disable */

const posts = [
  {
    id: 1,
    type: "blog",
    url: "http://aristotlebuzz.com/every-second-counts-the-culture-of-web-performance/",
    openInNewWindow: true,
    title: "The Culture of Performance",
    titleColor: "#212121",
    description: "Web performance isn't a one person job, it's up to everyone to make sure their work is optimized. In this article I talk about why it's important for everyone to care about web performance and share a few tips to how you can start doing your part to ensure your website is performing at high speeds.",
    pattern: "/static/bgphotos/witewall_3.png",
    tags: ["performance", "#webperf"],
    date: "2016-05-01",
  },
  {
    id: 2,
    type: "blog",
    url: "https://davidwalsh.name/webp-images-performance",
    openInNewWindow: true,
    title: "WebP Images & Performance",
    titleColor: "#ffffff",
    description: "It’s said that a picture is worth a thousand words, but online, a picture can be worth a thousand kilobytes or more! In this article Adrian and I look into WebP images, it's image quality, and how to implement them today on the web. If you're a performance geek and want to seriously cut down page size, you've got to check out this article.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/pink%20dust.png",
    tags: ["webp", "images", "#webperf", "performance"],
    date: "2015-04-20",
  },
  {
    id: 3,
    type: "blog",
    url: "http://www.skilledup.com/articles/thinkful-review-learn-coding-with-mentors",
    openInNewWindow: true,
    title: "Thinkful Review: Learn Coding with Mentors",
    titleColor: "#ffffff",
    description: "Anna Cherry was a student of mine at Thinkful who writes for Skilled Up. She did a review on Thinkful and published the article on SkilledUp.com. I wish Thinkful was around when I was learning to code. Having someone to bounce ideas off of and keep me motivated would have made me learn a lot faster!",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/crissXcross.png",
    tags: ["thinkful", "mentoring", "learning"],
    date: "2015-01-13",
  },
  {
    id: 4,
    type: "blog",
    url: "https://www.thinkful.com/blog/optimizing-your-images-make-your-website-load/",
    openInNewWindow: true,
    title: "Optimizing your images: Make your website load faster",
    titleColor: "#212121",
    description: "Images take up the majority of page size today. In this article I talk about optimizing images to ensure they are optimized to the best of their ability. We take a look at the different types of images and the tools available to help optimze them.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/roughcloth.png",
    tags: ["images", "performance", "#webperf"],
    date: "2014-11-26",
  },
  {
    id: 5,
    type: "blog",
    url: "http://aristotlebuzz.com/physical-web/",
    openInNewWindow: true,
    title: "Solving Big Challenges of the Physical Web",
    titleColor: "#ffffff",
    description: "The Physical Web and beacon technology is changing the way people interact with the things around them. This post is a response to IBM's blog post on the challenges of the physical web.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/denim.png",
    tags: ["physical web", "eddystone", "beacons", "IoT"],
    date: "2015-11-15",
  },
  {
    id: 6,
    type: "blog",
    url: "https://www.smashingmagazine.com/2015/10/webp-images-and-performance/",
    openInNewWindow: true,
    title: "WebP Images and Performance",
    titleColor: "#212121",
    description: "It’s said that a picture is worth a thousand words, but online, a picture can be worth a thousand kilobytes or more! In this article Adrian and I look into WebP images, it's image quality, and how to implement them today on the web. If you're a performance geek and want to seriously cut down page size, you've got to check out this article.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/whitediamond.png",
    tags: ["images", "performance", "#webperf", "webp"],
    date: "2015-10-24",
  },
  {
    id: 7,
    type: "blog",
    url: "https://davidwalsh.name/questions-google-amp",
    openInNewWindow: true,
    title: "Questions for Google AMP",
    titleColor: "#ffffff",
    description: "There's a lot of buzz about the new Google AMP spec, which allows developers to create fast sites with special markup. But after looking into this trend I had a few questions that needed to be answered. The main question: couldn't we accomplish the same result with standard markup and services?",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/dark_dotted.png",
    tags: ["performance", "#webperf", "google amp"],
    date: "2016-03-21",
  },
  {
    id: 8,
    type: "blog",
    url: "http://aristotlebuzz.com/beautiful-design-and-groundbreaking-performance-aspsf-org/",
    openInNewWindow: true,
    title: "Design and Performance: ASPSF.org",
    titleColor: "#212121",
    description: "Many believe you have to sacrafice design and/or functionality for performance. That's just not true! Here we proved that when our team redesigned Arkansas Single Parent Scholarship.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/large_leather.png",
    tags: ["performance", "#webperf"],
    date: "2016-01-15",
  },
  {
    id: 9,
    type: "blog",
    url: "https://davidwalsh.name/measuring-performance",
    openInNewWindow: true,
    title: "Measuring Performance",
    titleColor: "#ffffff",
    description: "People care deeply about web performance and they depend on us to articulate and measure how well their website is performing. There are great paid products on the market that can keep track of a website's performance, but there are plenty of websites and JavaScript APIs that can help you measure these metrics free of charge.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/outlets.png",
    tags: ["performance", "#webperf", "javascript"],
    date: "2015-04-12",
  },
  {
    id: 10,
    type: "blog",
    url: "https://www.keycdn.com/blog/web-performance-experts/",
    openInNewWindow: true,
    title: "60 Web Performance Experts to Follow",
    titleColor: "#212121",
    description: "KeyCDN created a list of top web performance experts to follow on Twitter. I was extremely excited to see my name (#22) on this list full of incredible designers and developers that I've been following for years!",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/blizzard.png",
    tags: ["performance", "#webperf"],
    date: "2015-05-10",
  },
  {
    id: 11,
    type: "talk",
    url: "/talks/web-performance-past-present-and-future",
    openInNewWindow: false,
    title: "Web Performance: Past, Present and Future",
    titleColor: "#ffffff",
    description: "Deep dive into what metrics are important for measuring web peformance and what best practices to use ",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/tex2res4.png",
    tags: ["performance", "#webperf", "javascript"],
    date: "2015-02-10",
    body: `
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/kAb_uYXeQBc" frameborder="0" allowfullscreen></iframe>
      </div>

      <div class="iframe-container">
        <iframe class="speakerdeck-iframe" frameborder="0" src="//speakerdeck.com/player/4693418d1c954144af77bb2c8f4af2f0?" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
      <p>
        The above slides and links are from my presentation about web performance, including optimizing code and images, how to measure performance and UX, what tools we can use to measure, and future technologies that will help measure data more granularly from the browser. A version of this presentation was given at <a href="http://lrdnug.org/" target="_blank">Little Rock .NET User Group</a>.
      </p>

      <section class="resource-container" style="margin-bottom:200px; margin-top:15px;">
        <div class="column">
          <h3 class="text-center">References</h3>
          <ul>
            <li><a href="http://www.webperformancetoday.com/2010/09/14/site-speed-what-vcs-like/" target="_blank">Fred Wilson Quote</a></li>
            <li><a href="http://www.mcrinc.com/Documents/Newsletters/201110_why_web_performance_matters.pdf" target="_blank">"40% of users leave over 3 secs" Study</a></li>
            <li><a href="http://googleresearch.blogspot.com/2009/06/speed-matters.html" target="_blank">2009 Google Survey</a></li>
            <li><a href="http://stevesouders.com/hpws/rules.php" target="_blank">Steve Souders 14 Rules</a></li>
            <li><a href="http://www.thesempost.com/new-google-mobile-algo-google-begins-reducing-visibility-non-mobile-friendly-sites-received-warnings/" target="_blank">Google Dropping Mobile Unfriendly Sites from Mobile Search</a></li>
            <li><a href="http://www.websiteoptimization.com/speed/tweak/speed-and-seo/" target="_blank">TTFB Correlation for Google SEO</a></li>
            <li><a href="http://www.google.com/patents/US8626909" target="_blank">Mircrosoft Page Phase Time</a></li>
            <li><a href="http://radar.oreilly.com/2013/10/page-phase-time.html" target="_blank">Page Phase Time Article</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon" target="_blank">Javascript Beacons</a></li>
            <li><a href="http://w3c.github.io/resource-hints/" target="_blank">Resource Hints</a></li>
          </ul>
        </div>
        <div class="column">
          <h3 class="text-center">Resources</h3>
          <ul>
            <li><a href="https://github.com/derekshull/nines" target="_blank">Nines Performance Tool</a></li>
            <li><a href="http://mattshull.com/perf/" target="_blank">Nines Demo</a></li>
            <li><a href="http://mattshull.com/perf/report.html" target="_blank">Nines Reporting</a></li>
            <li><a href="http://webpagetest.org" target="_blank">WebPageTest.org</a></li>
            <li><a href="https://twitter.com/lara_hogan" target="_blank">Lara Hogan Twitter</a></li>
            <li><a href="https://twitter.com/Souders" target="_blank">Stever Souders Twitter</a></li>
            <li><a href="http://www.amazon.com/Designing-Performance-Weighing-Aesthetics-Speed/dp/1491902515" target="_blank">Designing for Performance by Lara Hogan</a></li>
            <li><a href="http://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1423599319&amp;sr=1-1&amp;keywords=high+performance+websites" target="_blank">High Performance Websites by Steve Souders</a></li>
            <li><a href="http://www.amazon.com/Even-Faster-Web-Sites-Performance/dp/0596522304/ref=pd_sim_b_1?ie=UTF8&amp;refRID=15WF156M77BMR4MFV9CJ" target="_blank">Even Faster Websites by Steve Souders</a></li>
            <li><a href="http://www.webperformancetoday.com/" target="_blank">Incredible Performance Blog</a></li>
          </ul>
        </div>
      </section>
    `,
  },
  {
    id: 12,
    type: "talk",
    url: "https://pathtoperf.com/2015/06/19/06-with-matt-shull.html",
    openInNewWindow: true,
    title: "Path to Perf Podcast with Matt Shull",
    titleColor: "#212121",
    description: "The Path to Perf podcast where I discuss all things performance with the hosts.  Everything from optimizing images to creating a culture of performance at an agency.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/arches.png",
    tags: ["performance", "#webperf"],
    date: "2015-06-19",
  },
  {
    id: 13,
    type: "talk",
    url: "/talks/future-insights-2015",
    openInNewWindow: false,
    title: "Web Components and Polymer",
    titleColor: "#ffffff",
    description: "At Future Insights 2015 I spoke on how to start using web components and Polymer in production.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/black_mamba.png",
    tags: ["polymer", "web components"],
    date: "2015-05-01",
    body: `
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/xPwqgwIjrN8" frameborder="0" allowfullscreen></iframe>
      </div>

      <p>
        <a href="http://www.mattshull.com/webcomponents/slides/#1" target="_blank">These slides</a> and the links below are from my presentation about Web Components and Polymer. A version of this presentation was given at Future Insights Live. Quick note about the slides: since they are done using web components the screen size can affect how the slides appear. Best viewing ratio is 16:9. To go through the slides press the up and down arrows.
      </p>

      <section class="resource-container">
        <div class="column">
          <h3 class="text-center">References</h3>
          <ul>
            <li><a href="https://github.com/derekshull/webcomponents" target="_blank">GitHub repo of slides and examples</a></li>
            <li><a href="https://html.spec.whatwg.org/multipage/scripting.html#the-template-element" target="_blank">Template Spec</a></li>
            <li><a href="http://w3c.github.io/webcomponents/spec/custom/" target="_blank">Custom Elements Spec</a></li>
            <li><a href="http://w3c.github.io/webcomponents/spec/shadow/" target="_blank">Shadow DOM Spec</a></li>
            <li><a href="http://w3c.github.io/webcomponents/spec/imports/" target="_blank">HTML Imports Spec</a></li>
            <li><a href="http://www.polymer-project.org" target="_blank">Polymer Project Site</a></li>
            <li><a href="https://elements.polymer-project.org/" target="_blank">Polymer Element Catalog</a></li>
            <li><a href="https://events.google.com/io2015/" target="_blank">Google I/O</a></li>
            <li><a href="http://jonrimmer.github.io/are-we-componentized-yet/" target="_blank">Browser Support</a></li>
            <li><a href="https://elements.polymer-project.org/browse?package=iron-elements" target="_blank">Accessibility Polymer Goodies (First 3 Iron Elements)</a></li>
            <li><a href="https://wpdev.uservoice.com/forums/257854-internet-explorer-platform/suggestions/6261273-template-element" target="_blank">Vote for Template Element IE Support</a></li>
            <li><a href="https://wpdev.uservoice.com/forums/257854-internet-explorer-platform/suggestions/6261298-custom-elements" target="_blank">Vote for Custom Element IE Support</a></li>
            <li><a href="https://wpdev.uservoice.com/forums/257854-internet-explorer-platform/suggestions/6263785-shadow-dom-unprefixed" target="_blank">Vote for Shadow DOM IE Support</a></li>
            <li><a href="https://wpdev.uservoice.com/forums/257854-internet-explorer-platform/suggestions/6261318-html-imports" target="_blank">Vote for HTML Imports IE Support</a></li>
          </ul>
        </div>
        <div class="column">
          <h3 class="text-center">Resources</h3>
          <ul>
            <li><a href="http://www.mattshull.com/webcomponents/examples/img-slider/" target="_blank">Vanilla JS Image Slider</a></li>
            <li><a href="http://www.mattshull.com/webcomponents/slides/example/button/" target="_blank">Vanilla JS Cool Button</a></li>
            <li><a href="http://www.mattshull.com/webcomponents/examples/polymer-slider/" target="_blank">Polymer Image Slider</a></li>
            <li><a href="http://www.mattshull.com/webcomponents/examples/cool-button/" target="_blank">Polymer Cool Button</a></li>
            <li><a href="http://www.mattshull.com/webcomponents/examples/lorem-pixel/" target="_blank">Polymer Lorem Pixel</a></li>
            <li><a href="http://www.mattshull.com/webcomponents/examples/youtube/" target="_blank">Polymer Youtube</a></li>
            <li><a href="http://webcomponents.org" target="_blank">WebComponents.org</a></li>
            <li><a href="http://customelements.io" target="_blank">CustomElements.io</a></li>
            <li><a href="http://www.twitter.com/TheMattShull" target="_blank">@themattshull</a></li>
            <li><a href="http://mattshull.com/" target="_blank">mattshull.com</a></li>
            <li><a href="http://www.aristotle.net" target="_blank">aristotle.net</a></li>
            <li><a href="http://thinkful.com/" target="_blank">thinkful.com</a></li>
          </ul>
        </div>
      </section>
    `,
  },
  {
    id: 14,
    type: "talk",
    url: "/talks/uwestfest-2016",
    openInNewWindow: false,
    title: "Umbraco and the Need for Speed",
    titleColor: "#212121",
    description: "Umbraco is one of the fastest CMSs on the market.  In this talk I show how to optimize content to keep an Umbraco website running at top speed.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/diamond_upholstery.png",
    tags: ["performance", "#webperf", "javascript"],
    date: "2016-04-12",
    body: `
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/jJEVguTHbEE" frameborder="0" allowfullscreen></iframe>
      </div>

      <div class="iframe-container">
        <iframe frameborder="0" src="//speakerdeck.com/player/9d3ca55ab8ce43de87da51a0aabdf736?" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>

      <p>
        The slides above and links below are from my presentation about web performance using Umbraco, including optimizing code and images, how to measure performance and UX, what tools developers can use to measure, and future technologies that will help measure data more granularly from the browser. This presentation was given at <a href="http://www.uwestfest.com/" target="_blank">uWestFest 2016</a>.
      </p>

      <section class="resource-container">
        <div class="column">
          <h3 class="text-center">References</h3>
          <ul>
            <li><a href="http://www.webperformancetoday.com/2010/09/14/site-speed-what-vcs-like/" target="_blank">Fred Wilson Quote</a></li>
            <li><a href="http://www.mcrinc.com/Documents/Newsletters/201110_why_web_performance_matters.pdf" target="_blank">"40% of users leave over 3 secs" Study</a></li>
            <li><a href="https://wpostats.com/2015/11/04/walmart-revenue.html" target="_blank">Walmart Revenue Stat</a></li>
            <li><a href="https://wpostats.com/2015/10/29/aberdeen-1-percent.html" target="_blank">Alberdeen Group Page Views</a></li>
            <li><a href="https://wpostats.com/2015/10/29/mozilla-2point2.html" target="_blank">Mozilla Conversion Stat</a></li>
            <li><a href="https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index" target="_blank">Speed Index Definition</a></li>
            <li><a href="http://www.stucox.com/blog/using-webp-with-modernizr/" target="_blank">Using WebP with Modernizr</a></li>
            <li><a href="https://github.com/aristotle-labs/umbraco/blob/master/Umbraco%20Forms.md" target="_blank">Moving Scripts in Umbraco Forms</a></li>
            <li><a href="https://github.com/aristotle-labs/umbraco/blob/master/AJAX%20a%20Partial%20View.md" target="_blank">Using AJAX to call Partials</a></li>
            <li><a href="https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/" target="_blank">Font Loading Article</a></li>
            <li><a href="https://css-tricks.com/prefetching-preloading-prebrowsing/" target="_blank">Browser Hints Article</a></li>
            <li><a href="https://w3c.github.io/resource-hints/" target="_blank">Browser Hints Spec</a></li>
            <li><a href="http://www.html5rocks.com/en/tutorials/webperformance/basics/" target="_blank">Navigation Timing API Article</a></li>
            <li><a href="http://www.stevesouders.com/blog/2014/08/21/resource-timing-practical-tips/" target="_blank">Resource Timing API Article</a></li>
            <li><a href="http://www.html5rocks.com/en/tutorials/webperformance/usertiming/" target="_blank">User Timing API Article</a></li>
          </ul>
        </div>
        <div class="column">
          <h3 class="text-center">Resources</h3>
          <ul>
            <li><a href="http://httparchive.org/interesting.php" target="_blank">HTTP Archive</a></li>
            <li><a href="http://caniuse.com/" target="_blank">CanIUse.com Browser Support</a></li>
            <li><a href="https://www.smashingmagazine.com/2015/10/webp-images-and-performance/" target="_blank">Smashing Magazine: Using WebP</a></li>
            <li><a href="http://picture.responsiveimages.org/" target="_blank">Picturefill</a></li>
            <li><a href="https://modernizr.com/" target="_blank">Modernizr</a></li>
            <li><a href="https://github.com/aristotle-labs/css-splitter/" target="_blank">CSS Split Tool</a></li>
            <li><a href="https://github.com/filamentgroup/loadCSS" target="_blank">LoadCSS</a></li>
            <li><a href="http://www.sitepoint.com/you-dont-need-javascript-for-that/" target="_blank">No Javascript Image Slider and Tabs</a></li>
            <li><a href="http://codepen.io/collection/mDfbp/" target="_blank">No Javascript Modal and Responsive Navigation</a></li>
            <li><a href="https://github.com/derekshull/nines" target="_blank">Nines Performance Tool</a></li>
            <li><a href="http://www.webpagetest.org/" target="_blank">WebPageTest.org</a></li>
            <li><a href="https://www.ampproject.org/" target="_blank">Google AMP</a></li>
            <li><a href="https://developers.facebook.com/docs/instant-articles" target="_blank">Facebook Instant Articles</a></li>
            <li>
              Follow on Twitter
              <ul>
                <li><a href="https://twitter.com/lara_hogan" target="_blank">Lara Hogan</a></li>
                <li><a href="https://twitter.com/Souders" target="_blank">Steve Souders</a></li>
                <li><a href="https://twitter.com/tameverts" target="_blank">Tammy Everts</a></li>
                <li><a href="https://www.keycdn.com/blog/web-performance-experts/" target="_blank">60 Web Performance Experts to Follow</a></li>
              </ul>
            </li>
            <li>
              Further Reading
              <ul>
                <li><a href="http://shop.oreilly.com/product/0636920033578.do" target="_blank">Designing for Performance by Lara Hogan</a></li>
                <li><a href="http://larahogan.me/blog/" target="_blank">Lara Hogan Blog</a></li>
                <li><a href="https://stevesouders.com/" target="_blank">Steve Souders Books and Blog</a></li>
                <li><a href="https://www.soasta.com/blog/author/teverts/" target="_blank">Tammy Everts Blog</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    `,
  },
  {
    id: 15,
    type: "talk",
    url: "/talks/codegarden-2016",
    openInNewWindow: false,
    title: "#webPerf and Umbraco",
    titleColor: "#ffffff",
    description: "Understanding performance best practices and how to implement them in Umbraco is key for creating fast websites.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/use_your_illusion.png",
    tags: ["performance", "#webperf", "javascript"],
    date: "2016-05-12",
    body: `
      <div class="iframe-container">
        <iframe src="https://player.vimeo.com/video/183622182" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>

      <div class="iframe-container">
        <iframe class="speakerdeck-iframe" frameborder="0" src="//speakerdeck.com/player/ce8c22f9f9b24c16b64c9355a21eff14?" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>

      <p>
        The slides above and links below are from my presentation about web performance and Umbraco. In the talk I discuss optimizing code, identifying performance issues, how to measure performance and UX, what tools developers can use to measure, and future technologies that will help measure data more granularly from the browser. This presentation was given at <a href="http://www.codegarden16.com/" target="_blank">Codegarden 2016</a>.
      </p>

      <section class="resource-container">
        <div class="column">
          <h3 class="text-center">References</h3>
          <ul>
            <li><a href="http://www.webperformancetoday.com/2010/09/14/site-speed-what-vcs-like/" target="_blank">Fred Wilson Quote</a></li>
            <li><a href="http://www.mcrinc.com/Documents/Newsletters/201110_why_web_performance_matters.pdf" target="_blank">"40% of users leave over 3 secs" Study</a></li>
            <li><a href="https://wpostats.com/2015/11/04/walmart-revenue.html" target="_blank">Walmart Revenue Stat</a></li>
            <li><a href="https://wpostats.com/2015/10/29/aberdeen-1-percent.html" target="_blank">Alberdeen Group Page Views</a></li>
            <li><a href="https://wpostats.com/2015/10/29/mozilla-2point2.html" target="_blank">Mozilla Conversion Stat</a></li>
            <li><a href="https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index" target="_blank">Speed Index Definition</a></li>
            <li><a href="http://www.stucox.com/blog/using-webp-with-modernizr/" target="_blank">Using WebP with Modernizr</a></li>
            <li><a href="https://github.com/aristotle-labs/umbraco/blob/master/Umbraco%20Forms.md" target="_blank">Moving Scripts in Umbraco Forms</a></li>
            <li><a href="https://github.com/aristotle-labs/umbraco/blob/master/AJAX%20a%20Partial%20View.md" target="_blank">Using AJAX to call Partials</a></li>
            <li><a href="https://css-tricks.com/loading-web-fonts-with-the-web-font-loader/" target="_blank">Font Loading Article</a></li>
            <li><a href="https://css-tricks.com/prefetching-preloading-prebrowsing/" target="_blank">Browser Hints Article</a></li>
            <li><a href="https://w3c.github.io/resource-hints/" target="_blank">Browser Hints Spec</a></li>
            <li><a href="http://www.html5rocks.com/en/tutorials/webperformance/basics/" target="_blank">Navigation Timing API Article</a></li>
            <li><a href="http://www.stevesouders.com/blog/2014/08/21/resource-timing-practical-tips/" target="_blank">Resource Timing API Article</a></li>
            <li><a href="http://www.html5rocks.com/en/tutorials/webperformance/usertiming/" target="_blank">User Timing API Article</a></li>
          </ul>
        </div>
        <div class="column">
          <h3 class="text-center">Resources</h3>
          <ul>
            <li><a href="http://httparchive.org/interesting.php" target="_blank">HTTP Archive</a></li>
            <li><a href="http://caniuse.com/" target="_blank">CanIUse.com Browser Support</a></li>
            <li><a href="https://www.smashingmagazine.com/2015/10/webp-images-and-performance/" target="_blank">Smashing Magazine: Using WebP</a></li>
            <li><a href="http://picture.responsiveimages.org/" target="_blank">Picturefill</a></li>
            <li><a href="https://modernizr.com/" target="_blank">Modernizr</a></li>
            <li><a href="https://github.com/aristotle-labs/css-splitter/" target="_blank">CSS Split Tool</a></li>
            <li><a href="https://github.com/filamentgroup/loadCSS" target="_blank">LoadCSS</a></li>
            <li><a href="http://www.sitepoint.com/you-dont-need-javascript-for-that/" target="_blank">No Javascript Image Slider and Tabs</a></li>
            <li><a href="http://codepen.io/collection/mDfbp/" target="_blank">No Javascript Modal and Responsive Navigation</a></li>
            <li><a href="https://github.com/derekshull/nines" target="_blank">Nines Performance Tool</a></li>
            <li><a href="http://www.webpagetest.org/" target="_blank">WebPageTest.org</a></li>
            <li><a href="https://www.ampproject.org/" target="_blank">Google AMP</a></li>
            <li><a href="https://developers.facebook.com/docs/instant-articles" target="_blank">Facebook Instant Articles</a></li>
            <li>
              Follow on Twitter
              <ul>
                <li><a href="https://twitter.com/lara_hogan" target="_blank">Lara Hogan</a></li>
                <li><a href="https://twitter.com/Souders" target="_blank">Steve Souders</a></li>
                <li><a href="https://twitter.com/tameverts" target="_blank">Tammy Everts</a></li>
                <li><a href="https://www.keycdn.com/blog/web-performance-experts/" target="_blank">60 Web Performance Experts to Follow</a></li>
              </ul>
            </li>
            <li>
              Further Reading
              <ul>
                <li><a href="http://shop.oreilly.com/product/0636920033578.do" target="_blank">Designing for Performance by Lara Hogan</a></li>
                <li><a href="http://larahogan.me/blog/" target="_blank">Lara Hogan Blog</a></li>
                <li><a href="https://stevesouders.com/" target="_blank">Steve Souders Books and Blog</a></li>
                <li><a href="https://www.soasta.com/blog/author/teverts/" target="_blank">Tammy Everts Blog</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    `,
  },
  {
    id: 16,
    type: "talk",
    url: "/talks/lift-the-rock-2016",
    openInNewWindow: false,
    title: "Proximity Marketing with BeaconSage",
    titleColor: "#212121",
    description: "The way we connect with customers is changing and our businesses should change with them.  Using beacons businesses can send content to customers, even without an app.  BeaconSage allows businesses to create great content and manage beacons in one place.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/retina_dust.png",
    tags: ["beacons", "eddystone", "proximity marketing"],
    date: "2016-11-12",
    body: `
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/BTwxJ6lDs7I" frameborder="0" allowfullscreen></iframe>
      </div>
    `,
  },
  {
    id: 17,
    type: "talk",
    url: "/talks/wcrc-2017",
    openInNewWindow: false,
    title: "A Tale of Creativity, ES2015, and Using Native Components in Production",
    titleColor: "#ffffff",
    description: "A team set out to create a design language for their SaaS products learns what it means to use native Web Components in production. Through battles with ES2015, browser compatibility, and polyfills, to victories of designers using HTML to prototype.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/hexabump.png",
    tags: ["es2015", "web components", "design"],
    date: "2017-02-16",
    body: `
      <div class="iframe-container">
        <iframe src="https://www.youtube.com/embed/kfYYdJvqSA4?list=PLRkchWaHaapd13dkBeOnDDcnPRe7_MWwJ" frameborder="0" allowfullscreen></iframe>
      </div>
    `,
  },
  {
    id: 18,
    type: "blog",
    url: "/blog/leaving-aristotle",
    title: "You're Leaving Aristotle?!",
    titleColor: "#ffffff",
    description: "I'm excited to announce that I have a new job!  A few people have been asking some questions and I want to make sure we clarify a few things.",
    pattern: "https://www.toptal.com/designers/subtlepatterns/patterns/pink%20dust.png",
    tags: ["my work", "life"],
    date: "2017-08-02",
    body: `
      <p>
        In a recent Facebook post, I announced that as of August 14th I will be working for Thinkful as the Data Science Program Manager.  I'm very excited about this new role and to be a part of the Thinkful team.  I'll soon be writing a post about this new opportunity and what it entails, but first I wanted to discuss a couple of things for clarification.
      </p>

      <p>
        Since I posted the news on Monday, I've received a number of text messages, emails, and social media messages.  Everyone has been very positive about my new role, but I've noticed a trend of people asking me why I left and what my thoughts are about Aristotle.  It appears that most people who ask these questions tend to want some juicy gossip or horrific story about my experience at Aristotle.  Fortunately though, I'm going to have to disappoint those people.  Let's talk through some frequently asked questions.
      </p>

      <h3>You're leaving Aristotle Labs?</h3>
      <p>
        Yes and no.  As many of you know, I helped create Aristotle Labs under the direction of Elizabeth Bowles.  The story of how all that came to be is a great one, but we'll have to tell it another time.  What you should know is: Yes, I'm no longer going to be an employee of Aristotle Labs.  Also, no, I am not leaving entirely.  I will still be doing web performance, product/feature ideation, IoT/Beacon, and other forms of consulting as needed with Aristotle.  I love the products and services we created together over the last few years!  Completely cutting myself off from Aristotle would be like abandoning my children.  Which is why I'm excited that Elizabeth and the team have asked to have me come in occasionally and consult on products and services in the future.
      </p>

      <h3>What Happened?</h3>
      <p>
        Nothing.  In fact, things are going so well with BeaconSage and other services and plans that I felt that taking the Thinkful opportunity was doable for both Aristotle Labs and myself.  Sorry to disappoint, but there's no crazy story or hurt feelings.  Before I came on at Aristotle, I worked with Thinkful as a part-time mentor.  I always told the team at Thinkful that I would love to do what I did there full time.  At the time Thinkful wasn't able to bring anyone like that on full-time.  Now they are able to, and so we began discussing the opportunity.
      </p>

      <h3>So is Aristotle ramping down Labs?  Are the products gonna go away?</h3>
      <p>
        Actually just the opposite.  There's two things here that I want to address.  The first is that Elizabeth and I have been very careful through the creation of Aristotle Labs not to have the company or its products hinge on one single person.  Aristotle Labs and its products aren't MY brainchild.  They are the result of the hard work of the whole team.  Secondly, this isn't Aristotle's first rodeo.  The company has been around for 20+ years and in that time, has reinvented itself multiple times to fit the needs of the industry and their customers.
      </p>

      <p>
        In the last couple of years, Aristotle's executive team made a conscious decision to move into the software as a service industry.  This shouldn't come as a huge surprise.  Many agencies are beginning to start SaaS product divisions.  Many startups and businesses don't make it to 20+ years in this industry.  Most are here today, gone tomorrow.  Aristotle has been through this process of reinventing or adding new services to its lineup in the past.  That's why they do online media marketing, web development, voice over IP, internet service provision, and other services.
      </p>

      <h3>So What Now?</h3>
      <p>
        I'm extremely proud of the work I accomplished at Aristotle Labs with the team.  I've learned a lot about leadership, product creation, sales, marketing, etc.  Personally, Elizabeth has been an incredible mentor to me and will continue to be.  Labs and BeaconSage are just getting started.  The product is already out in the market. There's a clear year and a half roadmap of new features and products, and more importantly, there's a dedicated team to growing these products.  I'm looking forward to seeing all the different ways these products continue to bring value to customers!
      </p>
    `,
  },
];

function sortByDate(jsObj, type) {
	let sortedArray = [];
	Object.keys(jsObj).forEach((key, i) => {
		// Push each JSON Object entry in array by [value, key]
		if (!type) {
			sortedArray.push([jsObj[i].date, jsObj[i]]);
		} else if (jsObj[i].type === type) {
			sortedArray.push([jsObj[i].date, jsObj[i]]);
		}
	});

	sortedArray = sortedArray.sort().reverse();

	const sortedJSON = {};
	for (let i = 0; i < sortedArray.length; i += 1) {
		// Push each JSON Object entry in array by [value, key]
		sortedJSON[i] = sortedArray[i][1];
	}

	return sortedJSON;
}


router.get('/posts', function (req, res, next) {
  const sortedArray = sortByDate(posts, type);

	if (sortedArray) {
		res.json(posts)
	} else {
		res.status(500).json({"message": "Couldn't created sorted array."})
	}
})


router.get('/posts/:type/:url', function (req, res, next) {
  let url = "/" + req.params.type + "/" + req.params.url;
  for (let i = 0; i < posts.length; i += 1) {
		if (posts[i].url === url) {
      res.json(posts[i]);
      break;
		}
	}
})

export default router
