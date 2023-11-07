<!--This is your header-->
<script>
	import Logo from '$lib/assets/portfolio-logo.svg';
</script>

<header class="bg-gray-900 text-white flex place-content-center min-w-full sm:px-5">
	<div class="container flex items-center justify-between py-4">
		<a href="/">
			<!-- Add svg image -->
			<img
				src={Logo}
				alt="Logo"
				class="max-h-12"
			/>
		</a>
		<nav>
			<ul class="flex items-center justify-center">
				<li>
					<a
						href="/"
						class="px-4 py-2 hover:text-gray-400 text-yellow-400">Home</a
					>
				</li>
				<li>
					<a
						href="/form"
						class="px-4 py-2 hover:text-gray-400">Form</a
					>
				</li>
				<li>
					<a
						href="/tribute"
						class="px-4 py-2 hover:text-gray-400">Tribute</a
					>
				</li>
				<li>
					<a
						href="/product"
						class="px-4 py-2 hover:text-gray-400">Product</a
					>
				</li>
			</ul>
		</nav>
	</div>
</header>
