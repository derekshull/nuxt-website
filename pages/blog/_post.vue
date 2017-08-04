<template>
  <div class="hello">
		<section class="post-header">
			<h1 style="margin-top:0px;">{{post.title}}</h1>
			<p style="font-size:18px;">
				{{post.description}}
			</p>
		</section>

		<section class="post-body" v-html="post.body">
		</section>
	</div>
</template>

<script>
/* eslint-disable */
import axios from '~/plugins/axios.js'

export default {
  asyncData({ req, params }) {
		return axios.get(`/api/posts/blog/${params.post}`)
		.then((res) => {
			return { post: res.data };
		});
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        { hid: 'description', name: 'description', content: this.post.description },
				{ name: 'twitter:card', content: 'article' },
				{ name: 'twitter:site', content: '@themattshull' },
				{ name: 'twitter:title', content: this.post.title },
				{ name: 'twitter:description', content: this.post.description },
				{ name: 'twitter:image', content: '~/assets/img/logo-head.jpg' },
				{ name: 'twitter:image:alt', content: 'Image of Matt Shull' },
				{ property: 'og:type', content: 'article' },
				{ property: 'og:title', content: this.post.title },
				{ property: 'og:description', content: this.post.description },
				{ property: 'og:image', content: '~/assets/img/logo-head.jpg' },
      ]
    }
  },
}
</script>

<style scoped>
  .post-header {
		background: #efefef url("https://www.toptal.com/designers/subtlepatterns/patterns/black_linen_v2.png") repeat 0 0;
		padding:50px 20px;
		color:white;
	}

	.post-header p {
		padding:0 20px;
		max-width: 900px;
		margin:0 auto;
	}
</style>
