<!--Single testimonial card with company logo, product review, reviewer name-->
<script>
	export let quote =
		'Quote placeholder.';
	export let name = 'John Doe';
	export let role = 'CEO';
	export let company = 'Company Name';
	export let logo = 'https://via.placeholder.com/150';

</script>

<!--testimonial card styled with tailwind with shadow-->
<div class='w-full p-2'>
	<div class='bg-white rounded-lg shadow-lg p-4'>
		<div class='flex flex-col md:flex-row'>
			<div class='md:w-1/3'>
				<img alt='company logo'
						 class='rounded-full w-24 h-24 mx-auto md:mx-0 md:mr-6'
						 src={logo} />
			</div>
			<div class='md:w-2/3'>
				<p class='leading-tight text-justify'>{quote}</p>
				<p class='text-right mt-2'>{name}</p>
				<p class='text-right'>{role} at {company}</p>
			</div>
		</div>
	</div>
</div>

