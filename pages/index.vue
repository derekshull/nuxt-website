<template>
  <div class="hello">
		<div class="hero-bkg-animated">
			<img src="../assets/img/headshot.jpg" class="header-headshot" alt="headshot of Matt">
			<h1>I'm a developer and entrepreneur creating delightful products and services on the web.</h1>
		</div>

		<section class="message-box">
			<div class="column flex-column">
				<h3>This is an important announcement!</h3>
				<div>This is some detail about the special announcement.  It will have a <a href="#">call to action</a>!</div>
			</div>
			<div class="column">
				<a href="#" class="call-to-action">Learn More</a>
			</div>
		</section>

		<section class="thirds-area" data-aos="fade-up" data-aos-once="true">
			<div class="a-third">
				<img class="third-icon" src="../static/icons/world.svg" alt="icon of the world">
				<h3>Web Apps</h3>
				<p>I build awesome web apps with tech like push notifications, web components, and responsive design.</p>
				<a class="cta" href="/blog">Learn More</a>
			</div>
			<div class="a-third" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
				<img class="third-icon" src="../static/icons/speedometer.svg"  alt="icon of speedometer">
				<h3>Web Performance</h3>
				<p>#webperf is important for your users and your companies bottom line.  Let me help your team analyze and fix issues.</p>
				<a class="cta" href="mailto:derekshull@gmail.com?Subject=Web%20Performance%20Consulting&Body=I%27m%20interested%20in%20discussing%20web%20performance%20consulting.%0A%0AMy%20website%20URL%20is%20%3Cinsert%20URL%20here%3E">Schedule Consulting</a>
			</div>
			<div class="a-third" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
				<img class="third-icon" src="../static/icons/man.svg"  alt="icon of a person">
				<h3>Training / Speaking</h3>
				<p>I love sharing what I've learned by speaking at conferences or teaching teams.  Get in touch for more info!</p>
				<a class="cta" href="mailto:derekshull@gmail.com?Subject=Web%20Performance%20Consulting&Body=I%27m%20interested%20in%20discussing%20a%20training%20or%20speaking%20opportunity.%0A%0AThe%20company/event%20website%20is%20%3Cinsert%20URL%20here%3E">Let's Chat</a>
			</div>
		</section>

		<section class="bg-gray feed">
			<h2>Latest Content</h2>
			<ul class="cards">
				<li v-for="(post, index) in posts" class="card">
					<article class="card-container">
						<div class="card-photo" style="background: white url('https://www.toptal.com/designers/subtlepatterns/patterns/denim.png') repeat 0 0; color:white;">
							{{post.title}}
						</div>
						<p class="card-text">
							{{post.description}}
						</p>
						<div class="card-cta-container">
							<a class="card-cta" target="_blank" v-if="post.openInNewWindow" v-bind:href="post.url">Read More</a>
							<a class="card-cta" v-else v-bind:href="post.url">Read More</a>
						</div>
					</article>
				</li>
			</ul>
			<p>
				View all <a href="/talks">videos</a> and <a href="/blog">articles</a>.
			</p>
		</section>
	</div>
</template>

<script>
/* eslint-disable */
import { getThreeLatest } from '../plugins/posts.js'

export default {
  head () {
    return {
      title: 'Matt Shull',
			meta: [
				{ hid: 'description', name: 'description', content: "A collection of services, articles, and talks by Matt Shull.  Learn about web performance, the Physical Web, proximity beacons, and more." },
				{ name: 'twitter:card', content: 'article' },
				{ name: 'twitter:site', content: '@themattshull' },
				{ name: 'twitter:title', content: "Matt Shull" },
				{ name: 'twitter:description', content: "A collection of services, articles, and talks by Matt Shull.  Learn about web performance, the Physical Web, proximity beacons, and more." },
				{ name: 'twitter:image', content: '~/assets/img/logo-head.jpg' },
				{ name: 'twitter:image:alt', content: 'Image of Matt Shull' },
				{ property: 'og:type', content: 'article' },
				{ property: 'og:title', content: "Matt Shull" },
				{ property: 'og:description', content: "A collection of services, articles, and talks by Matt Shull.  Learn about web performance, the Physical Web, proximity beacons, and more." },
				{ property: 'og:image', content: '~/assets/img/logo-head.jpg' },
			],
    }
  },
  data() {
    return {
      loading: false,
      posts: null,
      featuredPost: null,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = null;
      this.post = null;
      this.loading = true;
      getThreeLatest(null, (err, posts) => {
        this.loading = false;
        if (err) {
          this.error = err.toString();
        } else {
          this.featuredPost = posts[0];
          this.posts = posts;
        }
      });
    },
  },
}
</script>

<style scoped>
  	.hero-bkg-animated {
		background: white url("../assets/img/witewall_3.png") repeat 0 0;
		width: 100%;
		margin: 0;
		text-align: center;
		height: 300px;
		display:flex;
		box-sizing: border-box;
		-webkit-animation: slide 30s linear infinite;
		box-shadow: 0 11px 7px -11px #000000;
	}

	.hero-bkg-animated h1 {
		display: flex;
		justify-content: center;
		align-items: center;
		padding:0px 20px;
	}

	.hero-bkg-animated img {
		max-height: 300px;
		display:none;
	}

	@media(min-width:768px) {
		.hero-bkg-animated img {
			display:inline-block;
		}
	}

	@-webkit-keyframes slide {
		from { background-position: 0 0; }
		to { background-position: -400px 0; }
	}

	/*THIRDS AREA*/
	.thirds-area {
		display:block;
		padding:50px 0px;
	}

	.a-third {
		width: 100%;
		padding:5px 20px;
		max-width:450px;
		margin:0 auto;
	}

	.a-third:not(:first-of-type) {
		margin-top:15px;
	}

	.a-third h3 {
		font-size:20px;
	}

	.third-icon {
		display:block;
		margin:0 auto;
		max-width:100px;
	}

	@media(min-width:768px) {
		.thirds-area {
			display:flex;
		}

		.a-third {
			width: calc(100% / 3);
			margin:0px;
			max-width:100%;
		}

		.a-third:not(:first-of-type) {
			margin-top:0px;
		}
	}
</style>
