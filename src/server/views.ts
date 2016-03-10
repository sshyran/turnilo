export interface ViewOptions {
  version: string;
  title: string;
  config?: any;
}

function favicon(options: ViewOptions): string {
  const { version, title } = options;
  return `
<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-touch-icon-57x57.png?v=${version}">
<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon-60x60.png?v=${version}">
<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-touch-icon-72x72.png?v=${version}">
<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon-76x76.png?v=${version}">
<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-touch-icon-114x114.png?v=${version}">
<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png?v=${version}">
<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-touch-icon-144x144.png?v=${version}">
<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png?v=${version}">
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png?v=${version}">
<link rel="icon" type="image/png" href="/favicon/favicon-32x32.png?v=${version}" sizes="32x32">
<link rel="icon" type="image/png" href="/favicon/favicon-194x194.png?v=${version}" sizes="194x194">
<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png?v=${version}" sizes="96x96">
<link rel="icon" type="image/png" href="/favicon/android-chrome-192x192.png?v=${version}" sizes="192x192">
<link rel="icon" type="image/png" href="/favicon/favicon-16x16.png?v=${version}" sizes="16x16">
<link rel="manifest" href="/favicon/manifest.json?v=${version}">
<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=${version}" color="#5bbad5">
<link rel="shortcut icon" href="/favicon/favicon.ico?v=${version}">
<meta name="apple-mobile-web-app-title" content="${title}">
<meta name="application-name" content="${title}">
<meta name="msapplication-TileColor" content="#2b5797">
<meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png?v=${version}">
<meta name="msapplication-config" content="/favicon/browserconfig.xml?v=${version}">
<meta name="theme-color" content="#ffffff">
`;
}

export function layout(options: ViewOptions, content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="description" content="Data Explorer">
  <meta name="author" content="Imply">
  <meta name="google" value="notranslate">
  ${favicon(options)}
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <title>${options.title}</title>
</head>
<body>
${content}
</body>
</html>
`;
  }

export function pivotLayout(options: ViewOptions): string {
  const { version, config } = options;
  return layout(options, `<div class="app-container"></div>
<script>var __CONFIG__ = ${JSON.stringify(config)};</script>
<script charset="UTF-8" src="/pivot.js?v=${version}"></script>`
  );
}

export function noDataSourcesLayout(options: ViewOptions): string {
  const { version } = options;
  return layout(options, `<div class="no-data-sources">
  <div class="icon">
    <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="#888888">
          <g transform="translate(8.000000, 4.000000)">
            <path d="M28.9681047,20.032976
              C28.9681047,19.6865607 28.7698491,19.3699088 28.4558863,19.2152889 L19.4283348,14.7661309
              C19.1682989,14.6379417 18.862364,14.6379417 18.6022699,14.7661309 L9.57460207,19.2152889
              C9.26081375,19.3699088 9.0625,19.6684614 9.0625,20.0439505 L9.0625,29.9388209
              C9.0625,30.2836274 9.25912672,30.5990727 9.57070444,30.754497 L18.5983141,35.2568038
              C18.7297282,35.322421 18.8726026,35.3548849 19.015186,35.3548849
              C19.2398524,35.3548849 19.4697544,35.2375553 19.4696962,35.2381299 L28.4599003,30.7544395
              C28.7715362,30.5990152 28.9681047,30.2835699 28.9681047,29.9387635
              C28.9681047,29.9388784 28.9681047,20.0418246 28.9681047,20.032976 L28.9681047,20.032976
              Z M19.0153024,16.6050794 L25.9706526,20.032976 L19.0153024,23.4608152 L12.0599522,20.032976 L19.0153024,16.6050794 L19.0153024,16.6050794
              Z M10.9128854,21.5101679 L18.0901097,25.04735 L18.0901097,32.956064 L10.9128854,29.3765928 L10.9128854,21.5101679 L10.9128854,21.5101679
              Z M27.1177193,29.3765928 L19.9404951,32.956064 L19.9404951,25.04735 L27.1177775,21.5101679 L27.1177775,29.3765928 L27.1177193,29.3765928
              Z" id="Shape" sketch:type="MSShapeGroup"></path>
            <path d="M16.9480085,15.5807816 L17.1403996,15.574277
              C17.4543624,15.7288969 19.958659,15.2278617 19.958659,15.574277
              C19.958659,15.5831255 19.958659,25.4801793 19.958659,25.4800644
              C19.958659,25.8248708 19.7620905,26.1403162 19.4504546,26.2957405 L10.4602505,30.7794308
              C10.4603087,30.7788563 10.2304067,30.8961858 10.0057403,30.8961858
              C9.86315687,30.8961858 9.72028254,30.863722 9.58886841,30.7981047 L0.561258751,26.2957979
              C0.249681028,26.1403736 0.0530543098,25.8249283 0.0530543098,25.4801219 L0.0530543098,15.5852515
              C0.0530543098,15.2097624 3.32632048,16.1853343 3.6401088,16.0307144 L3.95504778,16.0200665 L10.0058567,19.0021161 L16.9480085,15.5807816
              Z M1.90343971,17.0514689 L9.08066397,20.5886509 L9.08066397,28.497365 L1.90343971,24.9178937 L1.90343971,17.0514689 L1.90343971,17.0514689
              Z M18.1082736,24.9178937 L10.9310494,28.497365 L10.9310494,20.5886509 L18.1083318,17.0514689 L18.1083318,24.9178937 L18.1082736,24.9178937
              Z" id="Shape" sketch:type="MSShapeGroup"></path>
            <path d="M19.958659,5.4204308
              C19.958659,5.07401553 19.7604035,4.75736359 19.4464406,4.60274367 L10.4188891,0.153585672
              C10.1588532,0.0253965084 9.85291831,0.0253965084 9.59282421,0.153585672 L0.565156381,4.60274367
              C0.251368062,4.75736359 0.0530543098,5.05591621 0.0530543098,5.43140531 L0.0530543098,15.3262757
              C0.0530543098,15.6710821 0.249681028,15.9865275 0.561258751,16.1419518 L9.58886841,20.6442586
              C9.72028254,20.7098758 9.86315687,20.7423397 10.0057403,20.7423397
              C10.2304067,20.7423397 10.4603087,20.6250101 10.4602505,20.6255847 L19.4504546,16.1418943
              C19.7620905,15.98647 19.958659,15.6710247 19.958659,15.3262182
              C19.958659,15.3263332 19.958659,5.42927936 19.958659,5.4204308 L19.958659,5.4204308
              Z M10.0058567,1.9925342 L16.9612069,5.4204308 L10.0058567,8.84826994 L3.05050647,5.4204308 L10.0058567,1.9925342 L10.0058567,1.9925342
              Z M1.90343971,6.89762273 L9.08066397,10.4348048 L9.08066397,18.3435188 L1.90343971,14.7640476 L1.90343971,6.89762273 L1.90343971,6.89762273
              Z M18.1082736,14.7640476 L10.9310494,18.3435188 L10.9310494,10.4348048 L18.1083318,6.89762273 L18.1083318,14.7640476 L18.1082736,14.7640476
              Z" id="Shape" sketch:type="MSShapeGroup"></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
  <p>There are no data sources configured</p>
</div>
<script charset="UTF-8" src="/no-data-sources.js?v=${version}"></script>`
  );
}

export function errorLayout(options: ViewOptions, message: string, error: any = {}): string {
  return layout(options, `<h1>{{message}}</h1>
<h2>{{error.status}}</h2>
<pre>{{error.stack}}</pre>`
  );
}
