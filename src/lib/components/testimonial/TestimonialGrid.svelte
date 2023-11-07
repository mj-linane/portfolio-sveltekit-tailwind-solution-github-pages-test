<script>
	import Testimonial from './Testimonial.svelte';
	import example1 from '$lib/assets/example1.jpg';
	import example2 from '$lib/assets/example2.jpg';
	import example3 from '$lib/assets/example3.jpg';
	import example4 from '$lib/assets/example4.jpg';
	import example5 from '$lib/assets/example5.jpg';
</script>

<section class='bg-neutral-100 w-full flex place-content-center py-10'>
	<div class='grid grid-cols-4 gap-4 w-3/4'>
		<Testimonial
			company='Company'
			logo={example1}
			name='John Doe'
			quote='Quote Placeholder'
			role='CEO'
		/>
		<Testimonial
			company='Company'
			logo={example2}
			name='John Doe'
			quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu
		odio rutrum aliquam. Nullam eget massa euismod, ullamcorper massa quis,
		ultricies quam. Sed ac libero eu odio rutrum aliquam. Nullam eget massa
		euismod, ullamcorper massa quis, ultricies quam.'
			role='CEO'
		/>
		<Testimonial
			company='Company'
			logo={example3}
			name='John Doe'
			quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu
		odio rutrum aliquam. Nullam eget massa euismod, ullamcorper massa quis,
		ultricies quam. Sed ac libero eu odio rutrum aliquam. Nullam eget massa
		euismod, ullamcorper massa quis, ultricies quam.'
			role='CEO'
		/>
		<Testimonial
			company='Company'
			logo={example4}
			name='John Doe'
			quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu
		odio rutrum aliquam. Nullam eget massa euismod, ullamcorper massa quis,
		ultricies quam. Sed ac libero eu odio rutrum aliquam. Nullam eget massa
		euismod, ullamcorper massa quis, ultricies quam.'
			role='CEO'
		/>
		<Testimonial
			company='Company'
			logo={example5}
			name='John Doe'
			quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu
		odio rutrum aliquam. Nullam eget massa euismod, ullamcorper massa quis,
		ultricies quam. Sed ac libero eu odio rutrum aliquam. Nullam eget massa
		euismod, ullamcorper massa quis, ultricies quam.'
			role='CEO'
		/>

	</div>
</section>
