This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

See more info here: https://nextjs.org/docs/messages/react-hydration-error

...
<ScrollAndFocusHandler segmentPath={[...]}>
<InnerScrollAndFocusHandler segmentPath={[...]} focusAndScrollRef={{apply:false, ...}}>
<ErrorBoundary errorComponent={undefined} errorStyles={undefined} errorScripts={undefined}>
<LoadingBoundary loading={null}>
<HTTPAccessFallbackBoundary notFound={[...]} forbidden={undefined} unauthorized={undefined}>
<HTTPAccessFallbackErrorBoundary pathname="/" notFound={[...]} forbidden={undefined} ...>
<RedirectBoundary>
<RedirectErrorBoundary router={{...}}>
<InnerLayoutRouter url={"/#access..."} tree={[...]} cacheNode={{lazyData:null, ...}} ...>
<ClientPageRoot Component={function LandingPage} searchParams={{}} params={{}}>
<LandingPage params={Promise} searchParams={Promise}>
<div className="min-h-scre...">
<div>
<div>
<div>
<div className="absolute i...">
<div
className="absolute w-1 h-1 bg-white/30 rounded-full"
style={{

-                                 left: "33.86026506611404%"

*                                 left: "65.9078%"

-                                 top: "69.1415575000044%"

*                                 top: "20.3562%"

-                                 animation: "float 6.321113681678245s ease-in-out infinite"
-                                 animationDelay: "2.096502815500364s"

*                                 animation-duration: "6.1835s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.232092s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "7.169898483137748%"

*                                 left: "5.05968%"

-                                 top: "77.67667471626305%"

*                                 top: "73.5532%"

-                                 animation: "float 5.334817055476288s ease-in-out infinite"
-                                 animationDelay: "2.2654474533379076s"

*                                 animation-duration: "4.74104s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.54751s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "32.30796699156356%"

*                                 left: "37.6952%"

-                                 top: "14.505028930376485%"

*                                 top: "92.3733%"

-                                 animation: "float 5.845291530597001s ease-in-out infinite"
-                                 animationDelay: "4.7493168655794165s"

*                                 animation-duration: "4.35487s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.35673s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "16.341989343117636%"

*                                 left: "3.6984%"

-                                 top: "74.87963909783247%"

*                                 top: "96.7868%"

-                                 animation: "float 4.976991610395569s ease-in-out infinite"
-                                 animationDelay: "0.8270745990634609s"

*                                 animation-duration: "4.85457s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.57823s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "47.97845101213925%"

*                                 left: "80.0278%"

-                                 top: "19.588546579721168%"

*                                 top: "35.4849%"

-                                 animation: "float 5.862427711053984s ease-in-out infinite"
-                                 animationDelay: "4.561635508667098s"

*                                 animation-duration: "4.82391s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.62551s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "27.16328032362473%"

*                                 left: "2.44352%"

-                                 top: "33.166098262895396%"

*                                 top: "79.4256%"

-                                 animation: "float 3.2846007409457165s ease-in-out infinite"
-                                 animationDelay: "1.0350587642440163s"

*                                 animation-duration: "3.81386s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.529416s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "61.54299654383307%"

*                                 left: "67.2848%"

-                                 top: "92.23441208823965%"

*                                 top: "95.7423%"

-                                 animation: "float 4.687811906618981s ease-in-out infinite"
-                                 animationDelay: "3.3064366349004697s"

*                                 animation-duration: "3.12717s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.330911s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "86.0281598499944%"

*                                 left: "55.8559%"

-                                 top: "31.089880825016248%"

*                                 top: "80.2145%"

-                                 animation: "float 3.638528219319339s ease-in-out infinite"
-                                 animationDelay: "4.26682933521682s"

*                                 animation-duration: "4.04554s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.18418s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "86.02229573814468%"

*                                 left: "72.3063%"

-                                 top: "35.84599930431305%"

*                                 top: "54.0799%"

-                                 animation: "float 4.777224999487455s ease-in-out infinite"
-                                 animationDelay: "0.7459587145012286s"

*                                 animation-duration: "5.93015s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.448448s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "66.54778708826382%"

*                                 left: "87.0855%"

-                                 top: "31.951103995118235%"

*                                 top: "50.3504%"

-                                 animation: "float 5.032521474197479s ease-in-out infinite"
-                                 animationDelay: "3.4136006168544415s"

*                                 animation-duration: "5.49855s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.47203s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "9.945788497212593%"

*                                 left: "99.1417%"

-                                 top: "95.26015838733156%"

*                                 top: "70.4738%"

-                                 animation: "float 5.580378203763731s ease-in-out infinite"
-                                 animationDelay: "2.2183812582599334s"

*                                 animation-duration: "3.39786s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.88265s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "40.013035520443864%"

*                                 left: "5.70169%"

-                                 top: "89.21405019235576%"

*                                 top: "53.6355%"

-                                 animation: "float 5.0359797482424185s ease-in-out infinite"
-                                 animationDelay: "3.1531499497843414s"

*                                 animation-duration: "6.15686s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.13185s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "13.922095327578333%"

*                                 left: "41.1629%"

-                                 top: "37.38633233129699%"

*                                 top: "7.04057%"

-                                 animation: "float 6.583096789714277s ease-in-out infinite"
-                                 animationDelay: "2.5168068572464968s"

*                                 animation-duration: "3.31071s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.85564s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "54.05384227300692%"

*                                 left: "77.3925%"

-                                 top: "94.35274578717463%"

*                                 top: "18.9364%"

-                                 animation: "float 3.396995251094982s ease-in-out infinite"
-                                 animationDelay: "0.9405230562398598s"

*                                 animation-duration: "5.48012s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.37173s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "21.981418926301888%"

*                                 left: "36.9668%"

-                                 top: "17.149950727845397%"

*                                 top: "78.5756%"

-                                 animation: "float 4.283812168135491s ease-in-out infinite"
-                                 animationDelay: "1.756360605671519s"

*                                 animation-duration: "6.8702s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.78901s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "26.687089334269597%"

*                                 left: "46.5238%"

-                                 top: "53.744287237449285%"

*                                 top: "79.8303%"

-                                 animation: "float 4.732152765846314s ease-in-out infinite"
-                                 animationDelay: "3.2514758436400837s"

*                                 animation-duration: "3.05501s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.94728s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "82.48038420062296%"

*                                 left: "67.0961%"

-                                 top: "26.852848468402822%"

*                                 top: "21.2654%"

-                                 animation: "float 3.239986704223461s ease-in-out infinite"
-                                 animationDelay: "0.4723705812185136s"

*                                 animation-duration: "4.52363s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.3385s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "36.585858969993076%"

*                                 left: "66.3875%"

-                                 top: "19.16096753173665%"

*                                 top: "81.4528%"

-                                 animation: "float 3.7265254312291813s ease-in-out infinite"
-                                 animationDelay: "0.7854558324208827s"

*                                 animation-duration: "5.01804s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.88146s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "79.50956587504007%"

*                                 left: "23.426%"

-                                 top: "12.141632878241548%"

*                                 top: "24.1778%"

-                                 animation: "float 5.632947376000578s ease-in-out infinite"
-                                 animationDelay: "3.1476025657785405s"

*                                 animation-duration: "4.49078s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.84501s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "86.96141053032368%"

*                                 left: "16.1439%"

-                                 top: "84.15954898913802%"

*                                 top: "75.931%"

-                                 animation: "float 5.541769823536623s ease-in-out infinite"
-                                 animationDelay: "1.614872905055142s"

*                                 animation-duration: "4.042s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.539906s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "36.05322448011231%"

*                                 left: "88.9236%"

-                                 top: "34.9252264737962%"

*                                 top: "2.52315%"

-                                 animation: "float 4.964370475350378s ease-in-out infinite"
-                                 animationDelay: "1.614586390733193s"

*                                 animation-duration: "6.31941s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.87779s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "2.8443832115085943%"

*                                 left: "47.2732%"

-                                 top: "89.93389251874444%"

*                                 top: "83.7055%"

-                                 animation: "float 5.3719112700646106s ease-in-out infinite"
-                                 animationDelay: "0.9135236572542704s"

*                                 animation-duration: "5.12113s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.252625s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "85.00237914625764%"

*                                 left: "18.5889%"

-                                 top: "72.48142132657695%"

*                                 top: "50.1455%"

-                                 animation: "float 3.454782718889774s ease-in-out infinite"
-                                 animationDelay: "3.688442167614884s"

*                                 animation-duration: "6.36416s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.94397s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "12.258669670616108%"

*                                 left: "21.1915%"

-                                 top: "89.1472253743175%"

*                                 top: "19.5887%"

-                                 animation: "float 3.431498469403085s ease-in-out infinite"
-                                 animationDelay: "2.3767951273062082s"

*                                 animation-duration: "6.33337s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.691342s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "22.847906887387705%"

*                                 left: "38.2438%"

-                                 top: "21.913426920528867%"

*                                 top: "26.2533%"

-                                 animation: "float 6.271521484509744s ease-in-out infinite"
-                                 animationDelay: "3.197288091275798s"

*                                 animation-duration: "6.47844s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.08924s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "22.589865840497858%"

*                                 left: "52.1024%"

-                                 top: "94.18192410309835%"

*                                 top: "16.8981%"

-                                 animation: "float 3.635532797107653s ease-in-out infinite"
-                                 animationDelay: "3.8210130345137094s"

*                                 animation-duration: "3.98085s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.22516s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "24.8613098947714%"

*                                 left: "14.7649%"

-                                 top: "66.60266325472239%"

*                                 top: "49.8989%"

-                                 animation: "float 3.6778534618504963s ease-in-out infinite"
-                                 animationDelay: "3.2591391523531636s"

*                                 animation-duration: "4.09843s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.50212s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "16.3769917714195%"

*                                 left: "60.6595%"

-                                 top: "73.32262045348655%"

*                                 top: "50.4655%"

-                                 animation: "float 5.862958500879199s ease-in-out infinite"
-                                 animationDelay: "0.7525284076977851s"

*                                 animation-duration: "4.20776s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.25468s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "32.785615433219064%"

*                                 left: "97.9161%"

-                                 top: "41.230536852715204%"

*                                 top: "55.127%"

-                                 animation: "float 3.929429533144758s ease-in-out infinite"
-                                 animationDelay: "3.373658653108602s"

*                                 animation-duration: "6.65823s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.78513s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "35.502550617509364%"

*                                 left: "17.8894%"

-                                 top: "46.893686723615424%"

*                                 top: "24.3245%"

-                                 animation: "float 3.5536289243061083s ease-in-out infinite"
-                                 animationDelay: "3.0407296139836553s"

*                                 animation-duration: "3.01566s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.83817s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "56.8166990624175%"

*                                 left: "43.3873%"

-                                 top: "30.84670622695289%"

*                                 top: "20.4367%"

-                                 animation: "float 6.679736711117339s ease-in-out infinite"
-                                 animationDelay: "4.675729447213504s"

*                                 animation-duration: "5.78357s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.16519s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "70.78523271788684%"

*                                 left: "3.24876%"

-                                 top: "9.526744587339275%"

*                                 top: "42.2581%"

-                                 animation: "float 5.5815744557071225s ease-in-out infinite"
-                                 animationDelay: "1.9952952010778673s"

*                                 animation-duration: "5.03739s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.17844s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "92.9938814137404%"

*                                 left: "84.0729%"

-                                 top: "41.24574520070043%"

*                                 top: "23.6633%"

-                                 animation: "float 4.516240072530524s ease-in-out infinite"
-                                 animationDelay: "4.210635346912422s"

*                                 animation-duration: "4.77219s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.64563s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "12.146385457829712%"

*                                 left: "39.4235%"

-                                 top: "83.83095404550613%"

*                                 top: "32.2701%"

-                                 animation: "float 4.114441183980048s ease-in-out infinite"
-                                 animationDelay: "4.560607355751612s"

*                                 animation-duration: "3.67905s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.44715s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "36.0779636800667%"

*                                 left: "26.9419%"

-                                 top: "22.135168940824425%"

*                                 top: "37.6058%"

-                                 animation: "float 3.441355854107174s ease-in-out infinite"
-                                 animationDelay: "2.6161754734135596s"

*                                 animation-duration: "5.50869s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.05127s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "9.524756748573825%"

*                                 left: "36.8688%"

-                                 top: "83.12851532242392%"

*                                 top: "43.6564%"

-                                 animation: "float 6.26696449093776s ease-in-out infinite"
-                                 animationDelay: "1.6291185251954539s"

*                                 animation-duration: "5.81774s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.89942s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "67.54336574042972%"

*                                 left: "17.0388%"

-                                 top: "0.6529449564374734%"

*                                 top: "15.0042%"

-                                 animation: "float 3.927085679197949s ease-in-out infinite"
-                                 animationDelay: "1.297717375126528s"

*                                 animation-duration: "5.58042s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.947422s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "57.45721953921541%"

*                                 left: "1.1403%"

-                                 top: "17.37381206406232%"

*                                 top: "7.81564%"

-                                 animation: "float 6.851050036224166s ease-in-out infinite"
-                                 animationDelay: "2.868391444949152s"

*                                 animation-duration: "6.96512s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.60715s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "63.5467383091523%"

*                                 left: "31.5058%"

-                                 top: "28.035300583775236%"

*                                 top: "57.6311%"

-                                 animation: "float 5.997919251598928s ease-in-out infinite"
-                                 animationDelay: "1.0090898249742226s"

*                                 animation-duration: "4.10834s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.78354s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "57.064928039093246%"

*                                 left: "96.5832%"

-                                 top: "42.30211740196579%"

*                                 top: "53.0439%"

-                                 animation: "float 6.246571633227317s ease-in-out infinite"
-                                 animationDelay: "1.6091388136540958s"

*                                 animation-duration: "3.76605s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.06646s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "67.23956100300451%"

*                                 left: "85.3978%"

-                                 top: "31.882198894071102%"

*                                 top: "29.667%"

-                                 animation: "float 5.786266952622197s ease-in-out infinite"
-                                 animationDelay: "4.029686557168841s"

*                                 animation-duration: "5.75168s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.47113s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "80.7199322923179%"

*                                 left: "18.0236%"

-                                 top: "37.799792000633445%"

*                                 top: "82.3035%"

-                                 animation: "float 6.47211715642767s ease-in-out infinite"
-                                 animationDelay: "2.8545875401020453s"

*                                 animation-duration: "4.55347s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.71211s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "45.89467316057131%"

*                                 left: "25.5708%"

-                                 top: "14.683172237094844%"

*                                 top: "0.329825%"

-                                 animation: "float 5.552087284144546s ease-in-out infinite"
-                                 animationDelay: "0.23823591634475727s"

*                                 animation-duration: "5.16621s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.73796s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "86.96529202975087%"

*                                 left: "14.9387%"

-                                 top: "47.53564201011348%"

*                                 top: "81.8938%"

-                                 animation: "float 5.933123641949126s ease-in-out infinite"
-                                 animationDelay: "2.256197150679396s"

*                                 animation-duration: "6.98179s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.75402s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "23.920940840723894%"

*                                 left: "19.9277%"

-                                 top: "7.9671306007749525%"

*                                 top: "85.9226%"

-                                 animation: "float 5.418006754662615s ease-in-out infinite"
-                                 animationDelay: "0.21573693882813216s"

*                                 animation-duration: "4.70644s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.08683s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "47.34766376179873%"

*                                 left: "15.1786%"

-                                 top: "62.524960291571915%"

*                                 top: "9.64138%"

-                                 animation: "float 4.962370225596189s ease-in-out infinite"
-                                 animationDelay: "2.859208173790459s"

*                                 animation-duration: "4.72886s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.76095s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "38.677663213629685%"

*                                 left: "55.2336%"

-                                 top: "67.56667334702483%"

*                                 top: "38.2171%"

-                                 animation: "float 6.457323109258889s ease-in-out infinite"
-                                 animationDelay: "3.7706885875708833s"

*                                 animation-duration: "6.77552s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.84487s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "58.07477873168967%"

*                                 left: "94.7393%"

-                                 top: "45.29621779542394%"

*                                 top: "17.7173%"

-                                 animation: "float 4.233973819119733s ease-in-out infinite"
-                                 animationDelay: "4.342839651129122s"

*                                 animation-duration: "6.5836s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.0493507s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "8.60953958054721%"

*                                 left: "89.063%"

-                                 top: "22.53744536472554%"

*                                 top: "63.4098%"

-                                 animation: "float 4.686631329893592s ease-in-out infinite"
-                                 animationDelay: "1.9450862375872258s"

*                                 animation-duration: "6.14358s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.47928s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "50.048464931138746%"

*                                 left: "1.92348%"

-                                 top: "57.16095500903325%"

*                                 top: "20.3019%"

-                                 animation: "float 6.5077304583132065s ease-in-out infinite"
-                                 animationDelay: "4.535769582877375s"

*                                 animation-duration: "3.40197s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.03052s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "66.4993600207904%"

*                                 left: "68.5157%"

-                                 top: "85.0575877224958%"

*                                 top: "82.1332%"

-                                 animation: "float 4.790236864957503s ease-in-out infinite"
-                                 animationDelay: "1.206613334332682s"

*                                 animation-duration: "6.18351s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.67947s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "66.9324385025215%"

*                                 left: "72.9774%"

-                                 top: "17.830404417073954%"

*                                 top: "67.8977%"

-                                 animation: "float 4.026694668985222s ease-in-out infinite"
-                                 animationDelay: "1.7504246289816383s"

*                                 animation-duration: "5.42332s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.933709s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "93.81475336851125%"

*                                 left: "10.4687%"

-                                 top: "9.111091443283303%"

*                                 top: "33.6087%"

-                                 animation: "float 4.058867761380792s ease-in-out infinite"
-                                 animationDelay: "2.2669959825601955s"

*                                 animation-duration: "4.18736s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.72058s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "0.8027101800611391%"

*                                 left: "15.1307%"

-                                 top: "2.031629680392477%"

*                                 top: "30.5532%"

-                                 animation: "float 4.153435854099529s ease-in-out infinite"
-                                 animationDelay: "1.1486574778711738s"

*                                 animation-duration: "3.96632s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.70702s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "84.92031891274979%"

*                                 left: "39.0539%"

-                                 top: "52.52957818219568%"

*                                 top: "33.4403%"

-                                 animation: "float 6.002782641335701s ease-in-out infinite"
-                                 animationDelay: "2.2461373855633764s"

*                                 animation-duration: "4.95306s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.367099s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "92.07805807620447%"

*                                 left: "15.4467%"

-                                 top: "48.592828440692024%"

*                                 top: "31.4336%"

-                                 animation: "float 6.23717229242954s ease-in-out infinite"
-                                 animationDelay: "4.371931209748261s"

*                                 animation-duration: "4.05894s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.36325s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "18.556550120981086%"

*                                 left: "27.1419%"

-                                 top: "92.3521174229597%"

*                                 top: "43.1022%"

-                                 animation: "float 4.1971671869166745s ease-in-out infinite"
-                                 animationDelay: "3.93836582386156s"

*                                 animation-duration: "6.17706s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.48792s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "95.78275010262409%"

*                                 left: "35.765%"

-                                 top: "4.879810704513076%"

*                                 top: "93.7121%"

-                                 animation: "float 4.00765358138049s ease-in-out infinite"
-                                 animationDelay: "1.932225932663178s"

*                                 animation-duration: "6.60207s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.03587s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "91.68947675115925%"

*                                 left: "60.8176%"

-                                 top: "49.68937595324845%"

*                                 top: "32.9084%"

-                                 animation: "float 3.1022804137790416s ease-in-out infinite"
-                                 animationDelay: "1.5088797849478826s"

*                                 animation-duration: "5.12088s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.207651s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "84.19955504502035%"

*                                 left: "75.1925%"

-                                 top: "38.54089939965344%"

*                                 top: "35.6255%"

-                                 animation: "float 4.379219497338215s ease-in-out infinite"
-                                 animationDelay: "3.8486593959004516s"

*                                 animation-duration: "4.84895s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.23147s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "0.28746863612207907%"

*                                 left: "13.2257%"

-                                 top: "58.568135666079066%"

*                                 top: "79.9636%"

-                                 animation: "float 3.4257204801258476s ease-in-out infinite"
-                                 animationDelay: "4.990895058370775s"

*                                 animation-duration: "3.76737s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.384564s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "96.4106091517264%"

*                                 left: "94.1972%"

-                                 top: "43.15193180210072%"

*                                 top: "80.0117%"

-                                 animation: "float 6.155912550730592s ease-in-out infinite"
-                                 animationDelay: "1.8038248919146016s"

*                                 animation-duration: "5.30681s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.49032s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "27.35559733826435%"

*                                 left: "97.2597%"

-                                 top: "35.57346171250367%"

*                                 top: "21.6393%"

-                                 animation: "float 6.709881276765837s ease-in-out infinite"
-                                 animationDelay: "3.1236399187916035s"

*                                 animation-duration: "6.17083s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.58057s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "39.22757017072269%"

*                                 left: "9.20977%"

-                                 top: "46.817321160106026%"

*                                 top: "27.7469%"

-                                 animation: "float 3.1678715218476086s ease-in-out infinite"
-                                 animationDelay: "1.465529926177707s"

*                                 animation-duration: "6.00832s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.89542s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "61.50653198171566%"

*                                 left: "12.518%"

-                                 top: "87.539425045117%"

*                                 top: "15.4961%"

-                                 animation: "float 3.1301028528148915s ease-in-out infinite"
-                                 animationDelay: "3.30633715030594s"

*                                 animation-duration: "4.54038s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.62078s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "82.5096302728711%"

*                                 left: "78.5484%"

-                                 top: "63.28730399011053%"

*                                 top: "13.7367%"

-                                 animation: "float 5.545519746516398s ease-in-out infinite"
-                                 animationDelay: "2.755168410901352s"

*                                 animation-duration: "4.38321s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.984813s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "82.8124044475264%"

*                                 left: "21.0156%"

-                                 top: "50.06381118557365%"

*                                 top: "21.3832%"

-                                 animation: "float 5.023857106262438s ease-in-out infinite"
-                                 animationDelay: "0.14361501488150297s"

*                                 animation-duration: "4.19468s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.79511s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "51.641917364205334%"

*                                 left: "62.7878%"

-                                 top: "89.68230965403687%"

*                                 top: "34.1897%"

-                                 animation: "float 5.835018077536959s ease-in-out infinite"
-                                 animationDelay: "0.3508462036589932s"

*                                 animation-duration: "4.69199s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.21997s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "37.12559917703444%"

*                                 left: "68.7417%"

-                                 top: "31.60610339063661%"

*                                 top: "36.5494%"

-                                 animation: "float 5.43100623127512s ease-in-out infinite"
-                                 animationDelay: "0.6473475190474909s"

*                                 animation-duration: "6.95642s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.839087s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "30.66589777301677%"

*                                 left: "56.3813%"

-                                 top: "56.719016963087654%"

*                                 top: "37.8601%"

-                                 animation: "float 6.848387796388116s ease-in-out infinite"
-                                 animationDelay: "2.673924527182192s"

*                                 animation-duration: "3.87843s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.56091s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "63.66066766582694%"

*                                 left: "47.9833%"

-                                 top: "73.97906293589388%"

*                                 top: "88.3643%"

-                                 animation: "float 3.079391052124187s ease-in-out infinite"
-                                 animationDelay: "2.0449911448128866s"

*                                 animation-duration: "3.69284s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.531943s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "28.07946401930723%"

*                                 left: "14.0215%"

-                                 top: "70.9863377239795%"

*                                 top: "84.2549%"

-                                 animation: "float 4.8107388051644016s ease-in-out infinite"
-                                 animationDelay: "4.9736715689888005s"

*                                 animation-duration: "5.66452s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.579627s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "4.3578568093813%"

*                                 left: "9.94467%"

-                                 top: "47.229368119105175%"

*                                 top: "63.0843%"

-                                 animation: "float 5.193614005430165s ease-in-out infinite"
-                                 animationDelay: "1.346342974308281s"

*                                 animation-duration: "4.45925s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.609412s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "74.31765155821931%"

*                                 left: "42.335%"

-                                 top: "82.79295160270169%"

*                                 top: "52.0832%"

-                                 animation: "float 4.0959106303103s ease-in-out infinite"
-                                 animationDelay: "1.8000541859666237s"

*                                 animation-duration: "5.35409s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.32107s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "66.43566713201473%"

*                                 left: "48.0455%"

-                                 top: "56.01653425772582%"

*                                 top: "21.05%"

-                                 animation: "float 4.992147613396462s ease-in-out infinite"
-                                 animationDelay: "3.256662689713216s"

*                                 animation-duration: "5.0605s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.33629s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "55.77713656395281%"

*                                 left: "28.6371%"

-                                 top: "66.64391173625653%"

*                                 top: "70.4526%"

-                                 animation: "float 4.516829142830463s ease-in-out infinite"
-                                 animationDelay: "1.0670268469552602s"

*                                 animation-duration: "6.2415s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.23121s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "44.66191706733932%"

*                                 left: "77.1713%"

-                                 top: "78.96894881799652%"

*                                 top: "39.0559%"

-                                 animation: "float 3.6105483163833125s ease-in-out infinite"
-                                 animationDelay: "2.573389669375615s"

*                                 animation-duration: "3.62709s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.67615s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "78.16727667981343%"

*                                 left: "10.3812%"

-                                 top: "5.013612241560372%"

*                                 top: "47.3442%"

-                                 animation: "float 3.863213516659409s ease-in-out infinite"
-                                 animationDelay: "1.2407267196722171s"

*                                 animation-duration: "6.28207s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.14347s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "63.48923045168171%"

*                                 left: "48.7697%"

-                                 top: "92.67949388815357%"

*                                 top: "31.9637%"

-                                 animation: "float 3.9427692659396754s ease-in-out infinite"
-                                 animationDelay: "1.3029435734064392s"

*                                 animation-duration: "3.25661s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.491017s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "54.402923102115096%"

*                                 left: "40.2754%"

-                                 top: "61.936609050858294%"

*                                 top: "43.0663%"

-                                 animation: "float 5.949082213384395s ease-in-out infinite"
-                                 animationDelay: "0.35722803434817707s"

*                                 animation-duration: "4.90723s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.49869s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "23.834867214416565%"

*                                 left: "28.5652%"

-                                 top: "88.86892557186276%"

*                                 top: "85.1999%"

-                                 animation: "float 5.162983575686367s ease-in-out infinite"
-                                 animationDelay: "0.3607842223537383s"

*                                 animation-duration: "4.08365s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.35475s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "25.340090355918132%"

*                                 left: "33.1421%"

-                                 top: "50.93337077517478%"

*                                 top: "18.211%"

-                                 animation: "float 5.227377556616714s ease-in-out infinite"
-                                 animationDelay: "3.066506725588038s"

*                                 animation-duration: "4.52665s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.38134s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "68.49542543444267%"

*                                 left: "42.8058%"

-                                 top: "6.116512321913447%"

*                                 top: "16.5432%"

-                                 animation: "float 6.2040608306228s ease-in-out infinite"
-                                 animationDelay: "2.6255535103847896s"

*                                 animation-duration: "3.24334s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.672433s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "55.001971482989084%"

*                                 left: "93.2088%"

-                                 top: "35.30501503315402%"

*                                 top: "44.0033%"

-                                 animation: "float 4.0943291497423875s ease-in-out infinite"
-                                 animationDelay: "4.572868324552895s"

*                                 animation-duration: "3.52705s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.93144s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "81.03417620784096%"

*                                 left: "25.8279%"

-                                 top: "15.02031102433371%"

*                                 top: "86.7625%"

-                                 animation: "float 4.46447167679921s ease-in-out infinite"
-                                 animationDelay: "3.2356863431109106s"

*                                 animation-duration: "5.50752s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.219209s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "71.71512020366492%"

*                                 left: "49.8656%"

-                                 top: "17.296722460455115%"

*                                 top: "84.7476%"

-                                 animation: "float 4.200429363199552s ease-in-out infinite"
-                                 animationDelay: "4.394889179536695s"

*                                 animation-duration: "6.7625s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.91118s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "30.577944385139034%"

*                                 left: "75.1779%"

-                                 top: "70.3479302734772%"

*                                 top: "82.76%"

-                                 animation: "float 6.543623970082727s ease-in-out infinite"
-                                 animationDelay: "3.7636599466954297s"

*                                 animation-duration: "4.50837s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.55264s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "90.0609108139119%"

*                                 left: "97.6671%"

-                                 top: "29.653840411033162%"

*                                 top: "37.5921%"

-                                 animation: "float 4.268523209324827s ease-in-out infinite"
-                                 animationDelay: "3.1324224049586435s"

*                                 animation-duration: "4.50631s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.7372s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "68.07461227493458%"

*                                 left: "7.8339%"

-                                 top: "91.23933202185216%"

*                                 top: "19.844%"

-                                 animation: "float 4.836089227971705s ease-in-out infinite"
-                                 animationDelay: "3.273494382255598s"

*                                 animation-duration: "6.63437s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "0.187743s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "52.876464522946954%"

*                                 left: "61.0705%"

-                                 top: "32.61442723331134%"

*                                 top: "38.1403%"

-                                 animation: "float 3.4470304413653663s ease-in-out infinite"
-                                 animationDelay: "2.5013213231012483s"

*                                 animation-duration: "4.20704s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.36885s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "82.14192757253824%"

*                                 left: "61.7464%"

-                                 top: "38.8129614769287%"

*                                 top: "74.8821%"

-                                 animation: "float 3.124818665744016s ease-in-out infinite"
-                                 animationDelay: "4.09231764533218s"

*                                 animation-duration: "5.70792s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.55764s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "22.477864471267715%"

*                                 left: "3.30412%"

-                                 top: "10.696064840241593%"

*                                 top: "49.4042%"

-                                 animation: "float 4.200024809979128s ease-in-out infinite"
-                                 animationDelay: "4.886131690649181s"

*                                 animation-duration: "6.35683s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "2.57221s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "53.35655503171118%"

*                                 left: "58.065%"

-                                 top: "68.50988705971011%"

*                                 top: "16.2247%"

-                                 animation: "float 4.9328052332158645s ease-in-out infinite"
-                                 animationDelay: "0.7199948654738569s"

*                                 animation-duration: "6.45501s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.96299s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "22.589259162894958%"

*                                 left: "9.49383%"

-                                 top: "93.26496067425597%"

*                                 top: "20.2172%"

-                                 animation: "float 3.4556664419346546s ease-in-out infinite"
-                                 animationDelay: "2.6006540441863786s"

*                                 animation-duration: "6.90934s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.78418s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "34.3625761556714%"

*                                 left: "0.296774%"

-                                 top: "28.105456621376234%"

*                                 top: "74.6002%"

-                                 animation: "float 4.569555976366027s ease-in-out infinite"
-                                 animationDelay: "1.4128872282732914s"

*                                 animation-duration: "3.0189s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.34757s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "38.371077837596076%"

*                                 left: "70.6831%"

-                                 top: "89.88704441297484%"

*                                 top: "10.0836%"

-                                 animation: "float 3.0399487142587454s ease-in-out infinite"
-                                 animationDelay: "1.2074195436734465s"

*                                 animation-duration: "6.4168s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "3.95927s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "80.83734445662499%"

*                                 left: "59.9889%"

-                                 top: "44.08896584030867%"

*                                 top: "92.346%"

-                                 animation: "float 6.758868364142286s ease-in-out infinite"
-                                 animationDelay: "2.1276980190214214s"

*                                 animation-duration: "6.75639s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.81432s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "83.72390615775768%"

*                                 left: "12.8752%"

-                                 top: "95.64779170296212%"

*                                 top: "19.0926%"

-                                 animation: "float 5.731119417150933s ease-in-out infinite"
-                                 animationDelay: "0.5667711959353083s"

*                                 animation-duration: "6.63962s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "1.36041s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "99.23289184361929%"

*                                 left: "10.8412%"

-                                 top: "52.310483479197515%"

*                                 top: "18.6107%"

-                                 animation: "float 6.100616831103713s ease-in-out infinite"
-                                 animationDelay: "0.9859001095070674s"

*                                 animation-duration: "3.05951s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.2963s"
                                }}
                              >
                              <div
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{

-                                 left: "35.41838743864437%"

*                                 left: "90.5048%"

-                                 top: "64.1637301341315%"

*                                 top: "10.3227%"

-                                 animation: "float 4.087697855118362s ease-in-out infinite"
-                                 animationDelay: "1.9928220096938216s"

*                                 animation-duration: "4.0749s"
*                                 animation-timing-function: "ease-in-out"
*                                 animation-iteration-count: "infinite"
*                                 animation-direction: "normal"
*                                 animation-fill-mode: "none"
*                                 animation-play-state: "running"
*                                 animation-name: "float"
*                                 animation-timeline: "auto"
*                                 animation-range-start: "normal"
*                                 animation-range-end: "normal"
*                                 animation-delay: "4.53409s"
                                }}
                              >
                            <Navigation>
                            ...
                              <div className="relative t...">
                                <div className="relative w...">
                                  <div>
                                  <Card>
                                  <Card>
                                  <Card>
                                  <Card>
                                  <Card className="absolute w..." style={{left:"calc...", ...}}>
                                    <div
                                      data-slot="card"
                                      className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shado..."
                                      style={{

-                                       left: "calc(50% + -100.00000000000009px - 96px)"

*                                       left: "calc(50% - 196px)"

-                                       top: "calc(50% + -173.20508075688767px - 64px)"

*                                       top: "calc(50% - 237.205px)"

-                                       transform: "rotate(3deg)"

*                                       transform: "rotate(3deg)"
                                      }}
                                    >
                                  ...
                                  <svg className="absolute i...">
                                    <line>
                                    <line>
                                    <line>
                                    <line>
                                    <line
                                      x1="41.99999999999999%"
                                      y1="36.143593539448986%"
                                      x2="33.333333333333314%"

-                                     y2="21.13248654051872%"

*                                     y2="21.132486540518716%"
                                      stroke="#374151"
                                      strokeWidth="2"
                                      className="transition-all duration-500"
                                      opacity="0.3"
                                    >
                                    ...
                                  ...
                            <FeatureSection>
                            ...
                              <div className="relative">
                                <div className="absolute i...">
                                  <div className="grid grid-...">
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.1956170539914477s ease-in-out infinite"
-                                       animationDelay: "1.414193991966232s"

*                                       animation-duration: "3.29968s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.0845357s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.39430672498143s ease-in-out infinite"
-                                       animationDelay: "1.0922568137132826s"

*                                       animation-duration: "2.26803s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.771342s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.2552357013475164s ease-in-out infinite"
-                                       animationDelay: "0.7939505536660889s"

*                                       animation-duration: "2.23805s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.91082s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.211890029973103s ease-in-out infinite"
-                                       animationDelay: "1.3424452420222246s"

*                                       animation-duration: "4.3445s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.699038s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.4821723975223944s ease-in-out infinite"
-                                       animationDelay: "1.1449039644937562s"

*                                       animation-duration: "3.71582s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.90562s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.455210533161288s ease-in-out infinite"
-                                       animationDelay: "0.67029478285547s"

*                                       animation-duration: "4.74713s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.74907s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.278200713852071s ease-in-out infinite"
-                                       animationDelay: "1.2016732353989639s"

*                                       animation-duration: "4.69594s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.381396s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.939944072466163s ease-in-out infinite"
-                                       animationDelay: "1.2221753590290378s"

*                                       animation-duration: "2.8794s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.468357s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.9030239949289993s ease-in-out infinite"
-                                       animationDelay: "0.5695303594195269s"

*                                       animation-duration: "4.2267s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.30955s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.583601074702862s ease-in-out infinite"
-                                       animationDelay: "1.795037375131814s"

*                                       animation-duration: "3.29913s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.40543s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.409163513268915s ease-in-out infinite"
-                                       animationDelay: "0.5661386394595003s"

*                                       animation-duration: "4.13105s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.235304s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.328842202159839s ease-in-out infinite"
-                                       animationDelay: "0.8616474488237751s"

*                                       animation-duration: "3.86109s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.172242s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.932994447746399s ease-in-out infinite"
-                                       animationDelay: "0.9863974845512267s"

*                                       animation-duration: "2.00949s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.583458s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.25646755738374s ease-in-out infinite"
-                                       animationDelay: "1.0789228970519613s"

*                                       animation-duration: "4.15857s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.48999s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.3969453884497334s ease-in-out infinite"
-                                       animationDelay: "1.7612903813892693s"

*                                       animation-duration: "2.06496s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.9025s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.26424908727677s ease-in-out infinite"
-                                       animationDelay: "0.03506387670034239s"

*                                       animation-duration: "2.35087s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.979319s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.361697116427543s ease-in-out infinite"
-                                       animationDelay: "0.6424815975576241s"

*                                       animation-duration: "3.63921s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.493243s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.511470789494968s ease-in-out infinite"
-                                       animationDelay: "0.7124763819893949s"

*                                       animation-duration: "2.91508s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.816227s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.885793391900079s ease-in-out infinite"
-                                       animationDelay: "0.8023826589609988s"

*                                       animation-duration: "2.13966s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.78299s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.962067993654915s ease-in-out infinite"
-                                       animationDelay: "1.0686490710289493s"

*                                       animation-duration: "2.81036s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.12191s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.591666081639609s ease-in-out infinite"
-                                       animationDelay: "1.8773487312462493s"

*                                       animation-duration: "4.56216s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.918308s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.2020081845841286s ease-in-out infinite"
-                                       animationDelay: "1.6744759596379577s"

*                                       animation-duration: "4.98763s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.207179s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.575483600637989s ease-in-out infinite"
-                                       animationDelay: "0.6989663437881575s"

*                                       animation-duration: "3.95641s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.168123s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.7237829260281066s ease-in-out infinite"
-                                       animationDelay: "1.5438229154649825s"

*                                       animation-duration: "3.85381s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.788538s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.693200742127153s ease-in-out infinite"
-                                       animationDelay: "0.44752378012623373s"

*                                       animation-duration: "3.63003s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.90065s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.003785851749581s ease-in-out infinite"
-                                       animationDelay: "1.3790279716236011s"

*                                       animation-duration: "4.46466s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.660557s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.428462712612439s ease-in-out infinite"
-                                       animationDelay: "1.4682376830729766s"

*                                       animation-duration: "2.33907s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.30491s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.243012711448316s ease-in-out infinite"
-                                       animationDelay: "0.24460532868150509s"

*                                       animation-duration: "3.75524s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.86542s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.407955441609163s ease-in-out infinite"
-                                       animationDelay: "1.3868204091798049s"

*                                       animation-duration: "2.79572s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.08558s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.492631693187986s ease-in-out infinite"
-                                       animationDelay: "1.7150102870061996s"

*                                       animation-duration: "3.1475s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.51674s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.3774843868257607s ease-in-out infinite"
-                                       animationDelay: "0.9855763466690162s"

*                                       animation-duration: "3.76423s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.0598415s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.493818565498491s ease-in-out infinite"
-                                       animationDelay: "0.38824014452418387s"

*                                       animation-duration: "3.0319s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.569636s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.0367606774636213s ease-in-out infinite"
-                                       animationDelay: "0.3100724417117191s"

*                                       animation-duration: "3.77975s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.58356s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.013918797605884s ease-in-out infinite"
-                                       animationDelay: "1.8933373721585165s"

*                                       animation-duration: "4.05676s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.12074s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.490663685366869s ease-in-out infinite"
-                                       animationDelay: "0.10921267715180139s"

*                                       animation-duration: "4.28086s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.257923s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.299304861117606s ease-in-out infinite"
-                                       animationDelay: "0.12186751955770214s"

*                                       animation-duration: "2.42434s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.55441s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.2714475855702707s ease-in-out infinite"
-                                       animationDelay: "0.36561875649229614s"

*                                       animation-duration: "3.20834s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.17705s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.0752895057485445s ease-in-out infinite"
-                                       animationDelay: "1.9615372550799057s"

*                                       animation-duration: "3.87438s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.22603s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.228902471274756s ease-in-out infinite"
-                                       animationDelay: "0.6769756658341535s"

*                                       animation-duration: "3.68262s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.89449s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.886187327189674s ease-in-out infinite"
-                                       animationDelay: "0.6109506924309975s"

*                                       animation-duration: "4.09464s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.814742s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.283498824553275s ease-in-out infinite"
-                                       animationDelay: "0.025168926038446005s"

*                                       animation-duration: "4.75618s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.44591s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.7268966372013654s ease-in-out infinite"
-                                       animationDelay: "0.48208808949491466s"

*                                       animation-duration: "2.46828s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.65737s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.920307863355644s ease-in-out infinite"
-                                       animationDelay: "0.14863619230081082s"

*                                       animation-duration: "3.91898s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.494009s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.2356228664293676s ease-in-out infinite"
-                                       animationDelay: "0.46324449436490944s"

*                                       animation-duration: "4.47664s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.947885s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.4700949147362774s ease-in-out infinite"
-                                       animationDelay: "0.008424348361605105s"

*                                       animation-duration: "4.80239s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.0297884s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.334925436438825s ease-in-out infinite"
-                                       animationDelay: "1.3895562812383018s"

*                                       animation-duration: "3.30662s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.34592s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.675656784493623s ease-in-out infinite"
-                                       animationDelay: "0.017462072070214107s"

*                                       animation-duration: "4.76447s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.87754s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.7806683949251685s ease-in-out infinite"
-                                       animationDelay: "1.0123821337523664s"

*                                       animation-duration: "4.74895s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.64047s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.757534574119262s ease-in-out infinite"
-                                       animationDelay: "1.8747924614143805s"

*                                       animation-duration: "3.84131s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.81407s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.5577483907655925s ease-in-out infinite"
-                                       animationDelay: "0.8998087109907091s"

*                                       animation-duration: "3.27597s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.536034s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.300937452948647s ease-in-out infinite"
-                                       animationDelay: "1.7427811056731248s"

*                                       animation-duration: "3.11975s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.141035s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.3611641287098393s ease-in-out infinite"
-                                       animationDelay: "1.0979802978642648s"

*                                       animation-duration: "2.10546s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.83652s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.895848756771663s ease-in-out infinite"
-                                       animationDelay: "0.4401436048623615s"

*                                       animation-duration: "4.4404s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.52829s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.619850614272469s ease-in-out infinite"
-                                       animationDelay: "1.2191077431886232s"

*                                       animation-duration: "4.27489s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.588591s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.4661709944679275s ease-in-out infinite"
-                                       animationDelay: "1.9083445270792396s"

*                                       animation-duration: "2.84348s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.85294s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.840631895574436s ease-in-out infinite"
-                                       animationDelay: "0.1975326830685986s"

*                                       animation-duration: "3.62853s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.164871s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.5852611387274926s ease-in-out infinite"
-                                       animationDelay: "1.359771057974223s"

*                                       animation-duration: "4.33987s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.568453s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.8495176004487126s ease-in-out infinite"
-                                       animationDelay: "0.981042768703343s"

*                                       animation-duration: "4.44508s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.197861s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.326953632048876s ease-in-out infinite"
-                                       animationDelay: "0.47202242110771553s"

*                                       animation-duration: "2.774s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.8734s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.671974463860425s ease-in-out infinite"
-                                       animationDelay: "1.5036085720113626s"

*                                       animation-duration: "4.9657s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.46897s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 3.5790710864545208s ease-in-out infinite"
-                                       animationDelay: "0.6435926152933873s"

*                                       animation-duration: "4.66301s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.31888s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 4.585416138761394s ease-in-out infinite"
-                                       animationDelay: "0.40867897791014096s"

*                                       animation-duration: "2.88946s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.443847s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.121578056215919s ease-in-out infinite"
-                                       animationDelay: "0.729759070530686s"

*                                       animation-duration: "2.42151s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "0.178107s"
                                      }}
                                    >
                                    <div
                                      className="w-full aspect-square bg-gradient-to-br from-emerald-500 to-blue-500 r..."
                                      style={{

-                                       animation: "pulse 2.859318656457987s ease-in-out infinite"
-                                       animationDelay: "1.0635577702124663s"

*                                       animation-duration: "2.1982s"
*                                       animation-timing-function: "ease-in-out"
*                                       animation-iteration-count: "infinite"
*                                       animation-direction: "normal"
*                                       animation-fill-mode: "none"
*                                       animation-play-state: "running"
*                                       animation-name: "pulse"
*                                       animation-timeline: "auto"
*                                       animation-range-start: "normal"
*                                       animation-range-end: "normal"
*                                       animation-delay: "1.86912s"
                                        }}
                                      >
                                  ...
                              ...
                        ...

  app\page.tsx (66:6) @ eval

  64 | <div className="absolute inset-0">
  65 | {[...Array(100)].map((\_, i) => (

  > 66 | <div

       | 					^

  67 | key={i}
  68 | className="absolute w-1 h-1 bg-white/30 rounded-full"
  69 | style={{
  Call Stack
