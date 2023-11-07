<script>
	import Logo from '$lib/assets/portfolio-logo.svg';
	import NavBar from '$lib/components/NavBar.svelte';
	import NavBrand from '$lib/components/NavBrand.svelte';
	import NavHamburger from '$lib/components/NavHamburger.svelte';
	import NavUl from '$lib/components/NavUl.svelte';
	import NavLi from '$lib/components/NavLi.svelte';
</script>

<header id="responsive-header">
	<NavBar
		let:hidden
		let:toggle
	>
		<NavBrand href="/">
			<img
				src={Logo}
				class="h-8 mr-3"
				alt="MJ Linane Logo"
			/>
		</NavBrand>
		<div class="flex items-center lg:order-2">
			<NavHamburger
				on:click={toggle}
				btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			/>
		</div>
		<NavUl
			{hidden}
			divClass="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
			ulClass="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
		>
			<NavLi
				href="/"
				active={true}>Home</NavLi
			>
			<NavLi href="/">Company</NavLi>
			<NavLi href="/">Marketplace</NavLi>
			<NavLi href="/">Features</NavLi>
			<NavLi href="/">Team</NavLi>
			<NavLi href="/">Contact</NavLi>
		</NavUl>
	</NavBar>
</header>
