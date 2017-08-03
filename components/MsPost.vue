<template>
	<div class="post">
		<article class="post-container">
			<div class="post-photo inverted" style="background: white url('https://www.toptal.com/designers/subtlepatterns/patterns/denim.png') repeat 0 0; color:white;">
				{{postData.title}}
			</div>
			<p class="post-text">
				{{postData.description}}
			</p>
			<div class="post-cta-container">
				<a class="post-cta" target="_blank" v-if="postData.openInNewWindow" v-bind:href="postData.url">Read More</a>
				<a class="post-cta" v-else v-bind:href="postData.url">Read More</a>
				<div class="post-tags">
					<div v-for="tag in postData.tags" class="post-tag">
						{{tag}}
					</div>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
	/* eslint-disable */
	export default {
		props: ["postData"],
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
