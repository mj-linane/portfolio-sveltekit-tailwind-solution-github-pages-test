<!-- This is a wrapper around all other content on your website. Things here
should be on every page, such as a header, footer, or the loading of global
styles.-->
<script>
	import '../app.css';

	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import HeaderResponsive from '$lib/components/HeaderResponsive.svelte';
	let responsiveMenuFlag = true;
</script>

<div
	id="page-layout"
	class="flex flex-col min-h-screen"
>
	<!-- Toggle between the header and responsive header for testing using a flag -->
	{#if responsiveMenuFlag}
		<HeaderResponsive />
	{:else}
		<Header />
	{/if}
	<!--This is the main content on every page-->
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
