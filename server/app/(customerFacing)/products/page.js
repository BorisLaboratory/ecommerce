(()=>{var e={};e.id=314,e.ids=[314],e.modules={3524:e=>{"use strict";e.exports=require("@prisma/client")},7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3293:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>l}),t(8499),t(2205),t(5866),t(2029);var s=t(3191),n=t(8716),o=t(7922),a=t.n(o),i=t(5231),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);t.d(r,c);let l=["",{children:["(customerFacing)",{children:["products",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8499)),"C:\\Users\\Coder\\Documents\\DEV\\PortfolioGithub\\ecomercem15\\ecommerce\\nextstore\\src\\app\\(customerFacing)\\products\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,2205)),"C:\\Users\\Coder\\Documents\\DEV\\PortfolioGithub\\ecomercem15\\ecommerce\\nextstore\\src\\app\\(customerFacing)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,2029)),"C:\\Users\\Coder\\Documents\\DEV\\PortfolioGithub\\ecomercem15\\ecommerce\\nextstore\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\Coder\\Documents\\DEV\\PortfolioGithub\\ecomercem15\\ecommerce\\nextstore\\src\\app\\(customerFacing)\\products\\page.tsx"],u="/(customerFacing)/products/page",m={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(customerFacing)/products/page",pathname:"/products",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4415:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},5284:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2481,23)),Promise.resolve().then(t.t.bind(t,9404,23))},7031:()=>{},559:(e,r,t)=>{Promise.resolve().then(t.bind(t,7600))},7600:(e,r,t)=>{"use strict";t.d(r,{NavLink:()=>c,default:()=>i});var s=t(326),n=t(1223),o=t(434),a=t(5047);function i({children:e}){return s.jsx("nav",{className:"bg-primary text-primary-foreground   flex justify-center px-4",children:e})}function c(e){let r=(0,a.usePathname)();return s.jsx(o.default,{...e,className:(0,n.cn)("p-4 bg-black-500 hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",r===e.href&&"bg-background text-foreground")})}t(7577)},1223:(e,r,t)=>{"use strict";t.d(r,{cn:()=>o});var s=t(1135),n=t(1009);function o(...e){return(0,n.m6)((0,s.W)(e))}},2205:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a,dynamic:()=>o});var s=t(9510),n=t(6029);t(1159);let o="force-dynamic";function a({children:e}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ZP,{children:[s.jsx(n.OL,{href:"/",children:" Home "}),s.jsx(n.OL,{href:"/products",children:" Products "}),s.jsx(n.OL,{href:"/orders",children:" My Orders "})]}),(0,s.jsxs)("div",{className:"container my-6",children:[e," "]})]})}},8499:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(9510),n=t(6155),o=t(9548),a=t(1159);let i=(0,t(281).F)(()=>o.Z.product.findMany({where:{isAvailableForPurchase:!0},orderBy:{name:"asc"}}),["/products","getProducts"]);function c(){return s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:s.jsx(a.Suspense,{fallback:(0,s.jsxs)(s.Fragment,{children:[s.jsx(n.m,{}),s.jsx(n.m,{}),s.jsx(n.m,{}),s.jsx(n.m,{}),s.jsx(n.m,{}),s.jsx(n.m,{})]}),children:s.jsx(l,{})})})}async function l(){return(await i()).map(e=>s.jsx(n.I,{...e},e.id))}},2029:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c,metadata:()=>i});var s=t(9510),n=t(4481),o=t.n(n);t(5023);var a=t(644);let i={title:"e-commerce",description:"The powers of Next-js14,TypeScript,Tailwind css,shadcn,prisma Database"};function c({children:e}){return s.jsx("html",{children:s.jsx("body",{className:(0,a.cn)("min-h-screen  bg-background font-sans antialiased",o().variable),children:e})})}},6029:(e,r,t)=>{"use strict";t.d(r,{OL:()=>c,ZP:()=>i});var s=t(8570);let n=(0,s.createProxy)(String.raw`C:\Users\Coder\Documents\DEV\PortfolioGithub\ecomercem15\ecommerce\nextstore\src\components\Nav.tsx`),{__esModule:o,$$typeof:a}=n;n.default;let i=(0,s.createProxy)(String.raw`C:\Users\Coder\Documents\DEV\PortfolioGithub\ecomercem15\ecommerce\nextstore\src\components\Nav.tsx#default`),c=(0,s.createProxy)(String.raw`C:\Users\Coder\Documents\DEV\PortfolioGithub\ecomercem15\ecommerce\nextstore\src\components\Nav.tsx#NavLink`)},6155:(e,r,t)=>{"use strict";t.d(r,{I:()=>l,m:()=>d});var s=t(9510),n=t(5971),o=t(3804),a=t(7371),i=t(7039),c=t(7710);function l({id:e,name:r,priceInCents:t,description:l,imagePath:d}){return(0,s.jsxs)(o.Zb,{className:"flex overflow-hidden flex-col",children:[(0,s.jsxs)("div",{className:"relative w-full h-auto aspect-video",children:[s.jsx(c.default,{src:d,alt:r,fill:!0})," "]}),(0,s.jsxs)(o.Ol,{children:[s.jsx(o.ll,{children:r}),s.jsx(o.SZ,{children:(0,n.x)(t/100)})]}),s.jsx(o.aY,{className:"flex grow",children:s.jsx("p",{className:"line-clamp-4",children:l})}),s.jsx(o.eW,{children:s.jsx(i.z,{asChild:!0,size:"lg",className:"w-full",children:s.jsx(a.default,{href:`/products/${e}/purchase`,children:"Purchase"})})})]})}function d(){return s.jsx(o.Zb,{className:"overflow-hidden flex flex-col animate-pulse",children:(0,s.jsxs)("div",{className:"w-full aspect-video bg-gray-300",children:[(0,s.jsxs)(o.Ol,{children:[s.jsx(o.ll,{children:s.jsx("div",{className:"w-3/4 h-6 rounded-full bg-gray-300"})}),s.jsx(o.SZ,{children:s.jsx("div",{className:"w-1/2 h-4 rounded-full bg-gray-300"})})]}),(0,s.jsxs)(o.aY,{className:"space-y-2",children:[s.jsx("div",{className:"w-full h-4 rounded-full bg-gray-300"}),s.jsx("div",{className:"w-full h-4 rounded-full bg-gray-30"}),s.jsx("div",{className:"w-full h-4 rounded-full bg-gray-300"})]}),s.jsx(o.eW,{children:s.jsx(i.z,{className:"w-full",disabled:!0,size:"lg"})})]})})}},7039:(e,r,t)=>{"use strict";t.d(r,{z:()=>l});var s=t(9510),n=t(1159),o=t(6758),a=t(791),i=t(644);let c=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef(({className:e,variant:r,size:t,asChild:n=!1,...a},l)=>{let d=n?o.g7:"button";return s.jsx(d,{className:(0,i.cn)(c({variant:r,size:t,className:e})),ref:l,...a})});l.displayName="Button"},3804:(e,r,t)=>{"use strict";t.d(r,{Ol:()=>i,SZ:()=>l,Zb:()=>a,aY:()=>d,eW:()=>u,ll:()=>c});var s=t(9510),n=t(1159),o=t(644);let a=n.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));a.displayName="Card";let i=n.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",e),...r}));i.displayName="CardHeader";let c=n.forwardRef(({className:e,...r},t)=>s.jsx("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));c.displayName="CardTitle";let l=n.forwardRef(({className:e,...r},t)=>s.jsx("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",e),...r}));l.displayName="CardDescription";let d=n.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,o.cn)("p-6 pt-0",e),...r}));d.displayName="CardContent";let u=n.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",e),...r}));u.displayName="CardFooter"},9548:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var s=t(3524);let n=globalThis.prisma??new s.PrismaClient},281:(e,r,t)=>{"use strict";t.d(r,{F:()=>o});var s=t(7708),n=t(1159);function o(e,r,t={}){return(0,s.unstable_cache)((0,n.cache)(e),r,t)}},5971:(e,r,t)=>{"use strict";t.d(r,{A:()=>a,x:()=>n});let s=new Intl.NumberFormat("en-US",{currency:"USD",style:"currency",minimumFractionDigits:0});function n(e){return s.format(e)}let o=new Intl.NumberFormat("en-US");function a(e){return o.format(e)}},644:(e,r,t)=>{"use strict";t.d(r,{cn:()=>o});var s=t(5761),n=t(2386);function o(...e){return(0,n.m6)((0,s.W)(e))}},5023:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,410,332,481,160],()=>t(3293));module.exports=s})();