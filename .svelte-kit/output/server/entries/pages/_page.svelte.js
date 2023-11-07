import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index.js";
let bgImage = "https://mdbcdn.b-cdn.net/img/new/slides/146.webp";
const HeroImageButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "This is my title!" } = $$props;
  let { subtitle = "for your business" } = $$props;
  let { buttonText = "Get started" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  return `<section class="mb-40"><div class="relative overflow-hidden bg-no-repeat bg-cover" style="${"background-image: url(" + escape(bgImage, true) + "); height: 500px;"}"><div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style="background-color: rgba(0, 0, 0, 0.75);"><div class="flex justify-center items-center h-full"><div class="text-center text-white px-6 md:px-12"><h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">${escape(title)} <br><span>${escape(subtitle)}</span></h1>
          <button type="button" class="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">${escape(buttonText)}</button></div></div></div></div></section>`;
});
const HeroSectionPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
 <section class="mb-40"><div class="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left"><div class="container mx-auto xl:px-32"><div class="grid lg:grid-cols-2 flex items-center"><div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0"><div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px);"><h1 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">The best offer <br><span class="text-blue-600">for your business</span></h1>
            <a class="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
            <a class="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a></div></div>
        <div class="md:mb-12 lg:mb-0"><img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-full rounded-lg shadow-lg" alt=""></div></div></div></div></section>`;
});
const Testimonial = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quote = "Quote placeholder." } = $$props;
  let { name = "John Doe" } = $$props;
  let { role = "CEO" } = $$props;
  let { company = "Company Name" } = $$props;
  let { logo = "https://via.placeholder.com/150" } = $$props;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  return `



<div class="w-full p-2"><div class="bg-white rounded-lg shadow-lg p-4"><div class="flex flex-col md:flex-row"><div class="md:w-1/3"><img alt="company logo" class="rounded-full w-24 h-24 mx-auto md:mx-0 md:mr-6"${add_attribute("src", logo, 0)}></div>
			<div class="md:w-2/3"><p class="leading-tight text-justify">${escape(quote)}</p>
				<p class="text-right mt-2">${escape(name)}</p>
				<p class="text-right">${escape(role)} at ${escape(company)}</p></div></div></div></div>`;
});
const example1 = "/_app/immutable/assets/example1.57ca09de.jpg";
const example2 = "/_app/immutable/assets/example2.25946f0d.jpg";
const example3 = "/_app/immutable/assets/example3.d99228f0.jpg";
const example4 = "/_app/immutable/assets/example4.386252cc.jpg";
const example5 = "/_app/immutable/assets/example5.d6269d1b.jpg";
const TestimonialGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="bg-neutral-100 w-full flex place-content-center py-10"><div class="grid grid-cols-4 gap-4 w-3/4">${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      company: "Company",
      logo: example1,
      name: "John Doe",
      quote: "Quote Placeholder",
      role: "CEO"
    },
    {},
    {}
  )}
		${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      company: "Company",
      logo: example2,
      name: "John Doe",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu\r\n		odio rutrum aliquam. Nullam eget massa euismod, ullamcorper massa quis,\r\n		ultricies quam. Sed ac libero eu odio rutrum aliquam. Nullam eget massa\r\n		euismod, ullamcorper massa quis, ultricies quam.",
      role: "CEO"
    },
    {},
    {}
  )}
		${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      company: "Company",
      logo: example3,
      name: "John Doe",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu\r\n		odio rutrum aliquam. Nullam eget massa euismod, ullamcorper massa quis,\r\n		ultricies quam. Sed ac libero eu odio rutrum aliquam. Nullam eget massa\r\n		euismod, ullamcorper massa quis, ultricies quam.",
      role: "CEO"
    },
    {},
    {}
  )}
		${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      company: "Company",
      logo: example4,
      name: "John Doe",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu\r\n		odio rutrum aliquam. Nullam eget massa euismod, ullamcorper massa quis,\r\n		ultricies quam. Sed ac libero eu odio rutrum aliquam. Nullam eget massa\r\n		euismod, ullamcorper massa quis, ultricies quam.",
      role: "CEO"
    },
    {},
    {}
  )}
		${validate_component(Testimonial, "Testimonial").$$render(
    $$result,
    {
      company: "Company",
      logo: example5,
      name: "John Doe",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero eu\r\n		odio rutrum aliquam. Nullam eget massa euismod, ullamcorper massa quis,\r\n		ultricies quam. Sed ac libero eu odio rutrum aliquam. Nullam eget massa\r\n		euismod, ullamcorper massa quis, ultricies quam.",
      role: "CEO"
    },
    {},
    {}
  )}</div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(HeroImageButton, "HeroImageButton").$$render(
    $$result,
    {
      title: "Hero Section 1",
      subtitle: "A custom subtitle",
      buttonText: "A custom button text"
    },
    {},
    {}
  )}

${validate_component(HeroImageButton, "HeroImageButton").$$render(
    $$result,
    {
      title: "Hero Section 2",
      subtitle: "A custom subtitle",
      buttonText: "A custom button text"
    },
    {},
    {}
  )}

${validate_component(HeroSectionPage, "HeroSectionPage").$$render($$result, {}, {}, {})}

${validate_component(TestimonialGrid, "TestimonialGrid").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
