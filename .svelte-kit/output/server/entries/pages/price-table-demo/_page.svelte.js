import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index.js";
const PricingCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { planName } = $$props;
  let { storage } = $$props;
  let { price } = $$props;
  let { buttonClass = "" } = $$props;
  if ($$props.planName === void 0 && $$bindings.planName && planName !== void 0)
    $$bindings.planName(planName);
  if ($$props.storage === void 0 && $$bindings.storage && storage !== void 0)
    $$bindings.storage(storage);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.buttonClass === void 0 && $$bindings.buttonClass && buttonClass !== void 0)
    $$bindings.buttonClass(buttonClass);
  return `<div class="bg-slate-700 rounded-xl text-white">
	<div class="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800"><div class="text-center uppercase">${escape(planName)}</div>
		<h2 class="mt-10 font-serif text-5xl text-center">${escape(storage)}</h2>
		<h3 class="mt-2 text-center">${escape(price)}/Month</h3>
		<div class="flex justify-center">
			<a href="#" class="${"inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 " + escape(buttonClass, true)}">Purchase</a></div></div>

	
	<div class="border-t border-slate-700"></div>

	
	<div class="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
		<div class="flex flex-col space-y-2">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
const FeatureItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<div class="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
  <span class="text-sm ml-1">${escape(text)}</span></div>`;
});
const PriceTable2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>
  <div class="flex items-center justify-center min-h-screen bg-slate-800">
    <div class="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">${validate_component(PricingCard, "PricingCard").$$render(
    $$result,
    {
      planName: "Basic",
      storage: "100GB",
      price: "$1.99",
      buttonClass: "hover:bg-violet-800 hover:border-violet-800"
    },
    {},
    {
      default: () => {
        return `${validate_component(FeatureItem, "FeatureItem").$$render($$result, { text: "100 GB of storage" }, {}, {})}
        ${validate_component(FeatureItem, "FeatureItem").$$render($$result, { text: "Option to add members" }, {}, {})}
        ${validate_component(FeatureItem, "FeatureItem").$$render($$result, { text: "Extra member benefits" }, {}, {})}`;
      }
    }
  )}

      ${validate_component(PricingCard, "PricingCard").$$render(
    $$result,
    {
      planName: "Standard",
      storage: "200GB",
      price: "$3.99",
      buttonClass: "bg-violet-600 hover:bg-violet-800 hover:border-violet-800"
    },
    {},
    {
      default: () => {
        return `${validate_component(FeatureItem, "FeatureItem").$$render($$result, { text: "200 GB of storage" }, {}, {})}
        ${validate_component(FeatureItem, "FeatureItem").$$render($$result, { text: "Option to add members" }, {}, {})}
        ${validate_component(FeatureItem, "FeatureItem").$$render($$result, { text: "Extra member benefits" }, {}, {})}`;
      }
    }
  )}

      ${validate_component(PricingCard, "PricingCard").$$render(
    $$result,
    {
      planName: "Premium",
      storage: "2 TB",
      price: "$8.99",
      buttonClass: "hover:bg-violet-800 hover:border-violet-800"
    },
    {},
    {
      default: () => {
        return `${validate_component(FeatureItem, "FeatureItem").$$render($$result, { text: "2 TB of storage" }, {}, {})}
        ${validate_component(FeatureItem, "FeatureItem").$$render($$result, { text: "Option to add members" }, {}, {})}
        ${validate_component(FeatureItem, "FeatureItem").$$render($$result, { text: "Extra member benefits" }, {}, {})}`;
      }
    }
  )}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PriceTable2, "PriceTable2").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
