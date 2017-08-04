<template>
  <div id="app">
    <header>
			<button class="js-menu-show header__menu-toggle material-icons" title="open the navigation menu">menu</button>
			<div class="nav-right">
				<a class="logo-link" href="/">
					<span class="logo-name">Matt Shull</span> 
					<img src="~assets/img/logo-head.jpg" class="logo-head">
				</a>
			</div>
		</header>

		<aside class="js-side-nav side-nav">
			<nav class="js-side-nav-container side-nav__container">
				<button class="js-menu-hide side-nav__hide material-icons" title="close the navigation menu">close</button>
				<div class="side-nav__header">
					<a class="logo-link js-side-nav__link" href="/">
						<span class="logo-name">Matt Shull</span> 
						<img src="~assets/img/logo-head.jpg" class="logo-head">
					</a>
				</div>
				<ul class="side-nav__content">
					<li><a class="js-side-nav__link" href="/blog" title="go to matt's blog">Blog</a></li>
					<li><a class="js-side-nav__link" href="/talks" title="see all of matt's talks">Talks</a></li>
					<!--<li><a class="js-side-nav__link" href="/courses" title="see matt's work">Courses</a></li>-->
					<!--<li><a class="js-side-nav__link" href="/contact" title="contact matt">Contact</a></li>-->
				</ul>
			</nav>
		</aside>
    <nuxt/>
  </div>
</template>

<script>
/* eslint-disable */
import MyFooter from '~/components/Footer.vue'
import MsPost from '~/components/MsPost.vue'

export default {
  components: {
    MyFooter,
		MsPost,
  },
  mounted() {
	  class Detabinator {
      constructor(element) {
        if (!element) {
          throw new Error("Missing required argument. new Detabinator needs an element reference");
        }
        this._inert = false;
        this._focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]";
        this._focusableElements = Array.from(
          element.querySelectorAll(this._focusableElementsString),
        );
      }

      get inert() {
        return this._inert;
      }

      set inert(isInert) {
        if (this._inert === isInert) {
          return;
        }

        this._inert = isInert;

        this._focusableElements.forEach((child) => {
          if (isInert) {
            // If the child has an explict tabindex save it
            if (child.hasAttribute("tabindex")) {
              child.__savedTabindex = child.tabIndex;
            }
            // Set ALL focusable children to tabindex -1
            return child.setAttribute("tabindex", -1);

            // If the child has a saved tabindex, restore it
            // Because the value could be 0, explicitly check that it's not false
          } else if (child.__savedTabindex === 0 || child.__savedTabindex) {
            return child.setAttribute("tabindex", child.__savedTabindex);
          }

          return child.removeAttribute("tabindex");
        });
      }
    }

    class SideNav {
      constructor() {
        this.showButtonEl = document.querySelector(".js-menu-show");
        this.hideButtonEl = document.querySelector(".js-menu-hide");
        this.sideNavEl = document.querySelector(".js-side-nav");
        this.sideNavContainerEl = document.querySelector(".js-side-nav-container");
        this.sideNavLinkEl = document.querySelectorAll(".js-side-nav__link");
        // Control whether the container's children can be focused
        // Set initial state to inert since the drawer is offscreen
        this.detabinator = new Detabinator(this.sideNavContainerEl);
        this.detabinator.inert = true;

        this.showSideNav = this.showSideNav.bind(this);
        this.hideSideNav = this.hideSideNav.bind(this);
        this.blockClicks = this.blockClicks.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTransitionEnd = this.onTransitionEnd.bind(this);
        this.update = this.update.bind(this);

        this.startX = 0;
        this.currentX = 0;
        this.touchingSideNav = false;

        this.supportsPassive = undefined;
        this.addEventListeners();
      }

      // apply passive event listening if it's supported
      applyPassive() {
        if (this.supportsPassive !== undefined) {
          return this.supportsPassive ? { passive: true } : false;
        }
        // feature detect
        let isSupported = false;
        try {
          document.addEventListener("test", null, {
            get passive() {
              isSupported = true;
            },
          });
        } catch (e) {
          // not supported
        }
        this.supportsPassive = isSupported;
        return this.applyPassive();
      }

      addEventListeners() {
        this.showButtonEl.addEventListener("click", this.showSideNav);
        this.hideButtonEl.addEventListener("click", this.hideSideNav);
        this.sideNavEl.addEventListener("click", this.hideSideNav);
        this.sideNavContainerEl.addEventListener("click", this.blockClicks);
        for (let i = 0; i < this.sideNavLinkEl.length; i += 1) {
          this.sideNavLinkEl[i].addEventListener("click", this.hideSideNav);
        }

        this.sideNavEl.addEventListener("touchstart", this.onTouchStart, this.applyPassive());
        this.sideNavEl.addEventListener("touchmove", this.onTouchMove, this.applyPassive());
        this.sideNavEl.addEventListener("touchend", this.onTouchEnd);
      }

      onTouchStart(evt) {
        if (!this.sideNavEl.classList.contains("side-nav--visible")) {
          return;
        }

        this.startX = evt.touches[0].pageX;
        this.currentX = this.startX;

        this.touchingSideNav = true;
        requestAnimationFrame(this.update);
      }

      onTouchMove(evt) {
        if (!this.touchingSideNav) {
          return;
        }

        this.currentX = evt.touches[0].pageX;
        const translateX = Math.min(0, this.currentX - this.startX);

        if (translateX < 0) {
          evt.preventDefault();
        }
      }

      onTouchEnd() {
        if (!this.touchingSideNav) {
          return;
        }

        this.touchingSideNav = false;

        const translateX = Math.min(0, this.currentX - this.startX);
        this.sideNavContainerEl.style.transform = "";

        if (translateX < 0) {
          this.hideSideNav();
        }
      }

      update() {
        if (!this.touchingSideNav) {
          return;
        }

        requestAnimationFrame(this.update);

        const translateX = Math.min(0, this.currentX - this.startX);
        this.sideNavContainerEl.style.transform = `translateX(${translateX}px)`;
      }

      blockClicks(evt) {
        evt.stopPropagation();
      }

      onTransitionEnd() {
        this.sideNavEl.classList.remove("side-nav--animatable");
        this.sideNavEl.removeEventListener("transitionend", this.onTransitionEnd);
      }

      showSideNav() {
        this.sideNavEl.classList.add("side-nav--animatable");
        this.sideNavEl.classList.add("side-nav--visible");
        this.detabinator.inert = false;
        this.sideNavEl.addEventListener("transitionend", this.onTransitionEnd);
      }

      hideSideNav() {
        this.sideNavEl.classList.add("side-nav--animatable");
        this.sideNavEl.classList.remove("side-nav--visible");
        this.detabinator.inert = true;
        this.sideNavEl.addEventListener("transitionend", this.onTransitionEnd);
      }
    }

    new SideNav();
  },
}
</script>

<style>
	* {box-sizing: border-box;}

	html, body {
		padding:0;
		margin:0;
		box-sizing: border-box;
	}

	.feed {
			padding: 50px 0px;
		}

	#app {
		font-family: "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #212121;
	}

	.nav-right {
		display:flex;
		align-items: center;
		justify-content: flex-end;
		width:100%;
		margin-right:10px;
	}

	.nav-right a {
		display:flex;
		align-items: center;
		justify-content:center;
		color:inherit;
		text-decoration:none;
	}

	.logo-name {
		font-size: 24px;
	}

	.logo-head {
		border-radius: 50px;
		width:40px;
		height:40px;
		margin-left:10px;
	}

	.iframe-container {
		text-align:center;
		position: relative;
		padding-bottom: 56.25%;
		padding-top: 35px;
		height: 0;
		overflow: hidden;
		margin-bottom:20px;
	}

	.iframe-container iframe {
		position: absolute;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	header {
		width: 100%;
		height: 56px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.4);
		background: #333;
		color: #FFF;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.header__menu-toggle {
		background: none;
		border: none;
		width: 50px;
		height: 50px;
		padding: 0;
		margin: 0;
		color: #FFF;
	}

	.side-nav {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		pointer-events: none;
		z-index:1;
	}

	.side-nav--visible {
		pointer-events: auto;
	}

	.side-nav::before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.4);
		opacity: 0;
		will-change: opacity;
		transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
	}

	.side-nav__container {
		position: relative;
		width: 90%;
		max-width: 400px;
		background: #FFF;
		height: 100%;
		box-shadow: 2px 0 12px rgba(0,0,0,0.4);
		transform: translateX(-102%);
		display: flex;
		flex-direction: column;
		will-change: transform;
	}

	.side-nav--animatable .side-nav__container {
		transition: transform 0.13s cubic-bezier(0,0,0.3,1);
	}

	.side-nav--visible.side-nav--animatable .side-nav__container {
		transition: transform 0.33s cubic-bezier(0,0,0.3,1);
	}

	.side-nav--visible::before {
		opacity: 1;
	}

	.side-nav--visible .side-nav__container {
		transform: none;
	}

	.side-nav__hide {
		position: absolute;
		left: 16px;
		top: 16px;
		background: none;
		border: none;
		color: #FFF;
		width: 24px;
		height: 24px;
		padding: 0;
		margin: 0;
	}

	.side-nav__header {
		height: 75px;
		background: #2196F3;
		color: #FFF;
		display: flex;
		padding: 16px;
		align-items: flex-end;
		justify-content:center;
		font-size: 24px;
	}

	.side-nav__header a {
		display:flex;
		align-items: center;
		justify-content:center;
		color:inherit;
		text-decoration:none;
	}

	.side-nav__content {
		padding-top: 32px;
		flex: 1;
		list-style: none;
		padding: 0;
		margin: 0;
		overflow-x: hidden;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}

	.side-nav__content a {
		text-decoration: none;
		color:black;
	}

	.side-nav__content li {
		height: 48px;
		line-height: 48px;
		padding: 0 16px;
		font-size:20px;
	}

	.side-nav__content li:hover {
		background: #CCC;
	}

	.bg-gray {
			background:#f8f8f8;
		}

	.cta {
		background: #03a9f4;
		font-size: 20px;
		color: white;
		font-weight: bold;
		border: 0px;
		border-radius: 5px;
		padding: 7px 20px;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
		text-decoration: none;
		display:block;
		cursor:pointer;
	}

	.cta:visited {
		text-decoration: none;
		color: white;
	}

	.cta:hover {
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}

	.cards {
		padding:0px;
		margin:0px;
		list-style:none;
		display:flex;
		flex-wrap:wrap;
		justify-content: space-around;
	}

	.card {
		width: 100%;
		max-width:500px;
		padding:20px 10px;
	}

	.card-container {
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
		border-radius: 5px;
		margin: 10px 0px;
		background:white;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		height:100%;
	}

	.card-container:hover {
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}

	.card .card-photo {
		font-size: 26px;
		font-weight: 500;
		padding: 30px 15px;
		-webkit-animation: slide 30s linear infinite;
	}

	.card .card-photo.inverted {
		color:white;
	}

	.card .card-text {
		padding:0px 15px;
	text-align:left;
	}

	.card .card-cta-container {
		padding:10px;
		border-top: 1px solid #e2e2e2;
		text-align:left;
		display:flex;
		align-items:center;
	}

	.card .card-tags {
		display:flex;
		justify-content: flex-end;
		width:70%;
		flex-wrap: wrap;
	}

	.card .card-tag {
		padding: 5px 15px;
		background: #03a9f4;
		color: white;
		border-radius: 15px;
		margin:5px 10px;
	}

	.card .card-cta {
		color: #ffab40;
		text-decoration: none;
		font-size:21px;
	font-weight: 600;
		display: block;
	width: 35%;
	}

	.card .card-cta:hover {
		color: #ffd8a6;
		text-decoration: none;
	}

	@media(min-width:1101px) {
		.card {
			width: calc(100% / 3);
		}
	}

	/*MESAGE BOX*/
	.message-box {
		font-size:16px;
		background:#ffea00;
		display:none;
		padding:10px 0px;
	}

	.message-box a {
		color:#0D47A1;
		font-weight:500;
	}

	.message-box.show {
		display:flex;
	}

	.message-box .column {
		width:50%;
		display:flex;
		align-items: center;
		justify-content: center;
	}

	.message-box .column.flex-column {
		flex-direction:column;
	}

	.message-box h3 {
		font-size:20px;
		margin:10px 0px;
	}

	.message-box .call-to-action {
		background: #03a9f4;
		font-size: 24px;
		color: white;
		font-weight: bold;
		border: 0px;
		border-radius: 5px;
		padding: 15px 30px;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
		text-decoration: none;
	}

	.message-box .call-to-action:visited {
		text-decoration: none;
		color: white;
	}

	.message-box .call-to-action:hover {
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}

	.post-body {
		text-align: justify;
		line-height: 1.5;
		letter-spacing: 0.01rem;
		font-weight: 400;
		margin:0 auto;
		max-width:920px;
		padding:20px 20px;
	}

	.post-body img {
		display:block;
		margin:0 auto;
		max-width:100%;
	}

	.post-body h3 {
		margin-bottom:0px;
	}

	.post-body h3 + p {
		margin-top:0px;
	}

	.post-body p {
		font-size: 18px;
	}

	.post-body .resource-container {
		margin-bottom:200px; 
		margin-top:15px;
		display:flex;
		font-size: 22px;
		flex-direction:column;
		text-align:left;
	}

	.post-body .resource-container .column {
		width:100%;
	}

	@media(min-width:768px) {
		.post-body .resource-container {
			flex-direction:row;
		}
		.post-body .resource-container .column {
			width:50%;
			padding:0px 20px;
		}
	}

	h1 {
		font-size: 38px;
		margin: 10px 0px;
	}

	h2 {
		font-size: 30px;
		margin: 10px 0px;
	}

	h3 {
		font-size: 26px;
		margin: 10px 0px;
	}

	h4 {
		font-size: 22px;
		margin: 5px 0px;
	}
</style>
