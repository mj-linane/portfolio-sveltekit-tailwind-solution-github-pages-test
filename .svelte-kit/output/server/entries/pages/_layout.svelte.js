import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer class="w-full bg-violet-800 py-4">
	<div class="flex place-content-center"><p class="text-center text-gray-500 dark:text-gray-400">© ${escape(currentYear)} | MJ Linane
		</p></div></footer>`;
});
const Logo = "/_app/immutable/assets/portfolio-logo.131fb937.svg";
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex place-content-center">${slots.default ? slots.default({}) : ``}</div>`;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)} class="flex items-center">${slots.default ? slots.default({}) : ``}</a>`;
});
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toggle } = $$props;
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  return `<button aria-expanded="false"></button>`;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divClass } = $$props;
  let { ulClass } = $$props;
  let { hidden } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  return `${hidden ? `<div id="nav-ul"${add_attribute("class", divClass, 0)}><ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>` : ``}`;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { active } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${add_attribute("href", href, 0)} class="${"px-4 py-2 hover:text-gray-400 " + escape(active ? "text-yellow-400" : "", true)}">${slots.default ? slots.default({}) : ``}</a></li>`;
});
const HeaderResponsive = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header id="responsive-header">${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {
    default: ({ hidden, toggle }) => {
      return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
        default: () => {
          return `<img${add_attribute("src", Logo, 0)} class="h-8 mr-3" alt="MJ Linane Logo">`;
        }
      })}
		<div class="flex items-center lg:order-2">${validate_component(NavHamburger, "NavHamburger").$$render(
        $$result,
        {
          btnClass: "inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        },
        {},
        {}
      )}</div>
		${validate_component(NavUl, "NavUl").$$render(
        $$result,
        {
          hidden,
          divClass: "justify-between items-center w-full lg:flex lg:w-auto lg:order-1",
          ulClass: "flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
        },
        {},
        {
          default: () => {
            return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/", active: true }, {}, {
              default: () => {
                return `Home`;
              }
            })}
			${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
              default: () => {
                return `Company`;
              }
            })}
			${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
              default: () => {
                return `Marketplace`;
              }
            })}
			${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
              default: () => {
                return `Features`;
              }
            })}
			${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
              default: () => {
                return `Team`;
              }
            })}
			${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
              default: () => {
                return `Contact`;
              }
            })}`;
          }
        }
      )}`;
    }
  })}</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<div id="page-layout" class="flex flex-col min-h-screen">
	${`${validate_component(HeaderResponsive, "HeaderResponsive").$$render($$result, {}, {}, {})}`}
	
	<main class="flex-grow">${slots.default ? slots.default({}) : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
