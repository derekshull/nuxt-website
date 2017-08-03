<template>
  <div class="hello">
		<section class="featured">
			<h1 style="margin-top:0px;">Latest Talk:</h1>
			<h2>{{featuredPost.title}}</h2>
			<p style="font-size:18px;">
				{{featuredPost.description}}
				<a class="cta" style="max-width:400px; margin:15px auto 0px;" target="_blank" v-if="featuredPost.openInNewWindow" :href="featuredPost.url">Read More</a>
				<a class="cta" style="max-width:400px; margin:15px auto 0px;" v-else :href="featuredPost.url">Read More</a>
			</p>
		</section>

		<section>
			<div class="cards">
				<ms-post v-for="(post, index) in posts" v-if="index > 0" :post-data="post" :key="post.id"></ms-post>
			</div>
		</section>
	</div>
</template>

<script>
/* eslint-disable */
import { getAllPosts } from '~/plugins/posts.js'
import MsPost from '~/components/MsPost.vue'

export default {
	head () {
    return {
      title: 'Talks by Matt Shull',
      meta: [
        { hid: 'description', name: 'description', content: 'Matt Shull has spoken at many conferences over the years and continues to speak on web performance and development.  This is a collection of those talks.' },
		{ name: 'twitter:card', content: 'article' },
		{ name: 'twitter:site', content: '@themattshull' },
		{ name: 'twitter:title', content: "Talks by Matt Shull" },
		{ name: 'twitter:description', content: "Matt Shull has spoken at many conferences over the years and continues to speak on web performance and development.  This is a collection of those talks." },
		{ name: 'twitter:image', content: '~/assets/img/logo-head.jpg' },
		{ name: 'twitter:image:alt', content: 'Image of Matt Shull' },
		{ property: 'og:type', content: 'article' },
		{ property: 'og:title', content: "Talks by Matt Shull" },
		{ property: 'og:description', content: "Matt Shull has spoken at many conferences over the years and continues to speak on web performance and development.  This is a collection of those talks." },
		{ property: 'og:image', content: '~/assets/img/logo-head.jpg' },
      ]
    }
  },
  data() {
    return {
      posts: null,
      featuredPost: null,
    };
  },
  created() {
    getAllPosts("talk", (err, posts) => {
      this.featuredPost = posts[0];
      this.posts = posts;
    });
  },
  components: {
    MsPost,
  },
}
</script>

<style scoped>
	.featured {
		background: #efefef url("https://www.toptal.com/designers/subtlepatterns/patterns/whitey.png") repeat 0 0;
		padding:50px 20px;
	}

	.featured p {
		margin:0 auto;
		max-width:900px;
		padding:0px 20px;
	}

	.hero-bkg-animated {
		background: white url("../../assets/img/witewall_3.png") repeat 0 0;
		width: 100%;
		margin: 0;
		text-align: center;
		height: 150px;
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

	.posts {
		padding:0px;
		margin:0px;
		list-style:none;
		display:flex;
		flex-wrap:wrap;
		justify-content: space-around;
	}

	.post {
		width: 100%;
		max-width:500px;
		padding:20px 10px;
	}

	.post-container {
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

	.post-container:hover {
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	}

	.post .post-photo {
		font-size: 26px;
		font-weight: 500;
		padding: 30px 15px;
		-webkit-animation: slide 30s linear infinite;
	}

	.post .post-photo.inverted {
		color:white;
	}

	.post .post-text {
		padding:0px 15px;
		text-align:justify;
	}

	.post .post-cta-container {
		padding:10px;
		border-top: 1px solid #e2e2e2;
		text-align:left;
		display:flex;
		align-items:center;
	}

	.post .post-tags {
		display:flex;
		justify-content: flex-end;
		width:65%;
		flex-wrap: wrap;
	}

	.post .post-tag {
		padding: 5px 15px;
		background: #BBDEFB;
		color: black;
		border-radius: 15px;
		margin:5px 10px;
	}

	.post .post-cta {
		color: #ffab40;
		text-decoration: none;
		font-size:21px;
    	font-weight: 600;
		display: block;
    	width: 35%;
	}

	.post .post-cta:hover {
		color: #ffd8a6;
		text-decoration: none;
	}

	@media(min-width:768px) {
		.post {
			width: calc(100% / 2);
		}
	}

	@media(min-width:1101px) {
		.post {
			width: calc(100% / 3);
		}
	}
</style>
