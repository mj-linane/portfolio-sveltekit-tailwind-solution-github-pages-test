<script>
	import SubscribeImage from '$lib/assets/email-subscribe.jpg';
</script>

<!-- Background container -->
<section class="flex items-center justify-center h-full p-10 bg-zinc-700">
	<!-- Card -->
	<div class="bg-zinc-800 p-2 mx-6 rounded-2xl">
		<!--Flex Container-->
		<div class="flex flex-col md:flex-row rounded-l-xl">
			<!-- Image -->
			<img
				src={SubscribeImage}
				alt="boat on a lake"
				class="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
			/>
			<!-- Content -->
			<div class="p-6 md:p-12">
				<h2 class="font-serif text-xl font-medium text-center text-white md:text-left">
					Get travel tips in your inbox.
				</h2>
				<p class="max-w-xs text-xs leading-5 tracking-wide text-center text-white md:text-left">
					Travel tips, deals, and inspiration to help you plan your next trip. Sign up for the Travel & Tour newsletter.
				</p>
				<div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
					<input
						type="text"
						placeholder="Enter your email address"
						class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
					/>
					<button
						class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500"
					>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
