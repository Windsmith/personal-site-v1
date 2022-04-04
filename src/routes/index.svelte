<script>
	import { fly } from 'svelte/transition';
</script>

<div class="hero z-10 mb-20 xl:mb-10">
	<div class="hero-content text-center">
		<div>
			<h1
				class="font-bold dark:text-gray-200 text-gray-900 text-5xl mx-auto font-worksans mx-10 md:text-7xl 2xl:text-9xl"
				in:fly
			>
				Hi There!
			</h1>
			<h2
				in:fly={{ y: -20, duration: 500 }}
				class="font-bold dark:text-gray-200 text-gray-900 text-5xl mb-5 font-worksans mx-2 md:mb-16 md:text-7xl 2xl:text-9xl 2xl:mb-8"
			>
				I am Shriram
			</h2>
			<p
				class="font-semibold text-xl dark:text-gray-200 text-gray-900 font-worksans mx-5 mt-10 md:text-3xl md:mx-16 md:mt-14 xl:mx-44 2xl:mx-52 2xl:text-5xl"
			>
				I am a Frontend Developer and am currently exploring Backend and Devops at my own pace to
				learn how to build a complete application. I'm very curious and hold an interest in various
				topics!
			</p>
			<p
				class="text-2xl my-5 mt-8 dark:text-gray-200 text-gray-900 font-semibold font-worksans md:mt-12 md:text-4xl 2xl:mt-16 2xl:text-6xl"
			>
				Do check my work out :)
			</p>
			<div>
				<a
					class="btn font-worksans mr-8 bg-zinc-900 dark:bg-gray-100 dark:text-zinc-900 text-base md:text-2xl 2xl:text-4xl shadow-xl"
					href="https://blog.shriramsekar.tech"
					target="_blank"
					rel="noopener noreferrer"
					>Blog
				</a>
				<a
					class="btn font-worksans bg-zinc-900 dark:bg-gray-100 dark:text-zinc-900 text-base md:text-2xl 2xl:text-4xl shadow-xl"
					href="https://github.com/Windsmith"
					target="_blank"
					rel="noopener noreferrer"
					>Github
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.font-worksans {
		font-family: 'Work Sans', sans-serif;
	}
</style>
