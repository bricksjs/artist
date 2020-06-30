import importHTML from 'import-html-entry';
import { Core, Application } from '../interfaces';
import Sandbox from './sandbox';

function load(apps: string) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <link rel="icon" href="/favicon.ico">
      <link rel="stylesheet" type="text/css" href="my.css">
      <title>demo</title>
      <style type="text/css">
        .test {
          color: black;
        }
      </style>
      <script>
        let test = 1;
        console.log('script-test',test)
      </script>
    <link href="/js/about.js" rel="prefetch"><link href="/js/app.js" rel="preload" as="script"><link href="/js/chunk-vendors.js" rel="preload" as="script"></head>
    <body>
      <style type="text/css">
        .test1 {
          color: black;
        }
      </style>
      <noscript>
        <strong>We're sorry but demo doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
      </noscript>
      <div id="app"></div>
      <!-- built files will be auto injected -->
    <script type="text/javascript" src="/js/chunk-vendors.js"></script><script type="text/javascript" src="/js/app.js"></script></body>
  </html>`;

  console.log('document.stylesheet', document.styleSheets);

  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(html, 'text/html');
  console.log({ htmlDoc });
  const {
    scripts, styleSheets, location,
    baseURI, namespaceURI,
  } = htmlDoc;
}
export class Artist implements Core {
  name = ''

  // 状态
  status = ''

  private apps: Application[] = []

  private loaded = []

  private failed = []

  private config = {}

  load(apps: Application[]): void {
    this.apps = this.apps.concat(apps);

    const url = apps[0].entry;
    const host = new URL(url);
    console.log('host', host);

    // importHTML(url)
    //   .then((res) => {
    //     console.log({ res });
    //   });

    // fetch(url).then((response) => response.text())
    //   .then((html) => {
    //     console.log('html', html);
    //     const parser = new DOMParser();
    //     const htmlDoc = parser.parseFromString(html, 'text/html');
    //     console.log('sheet', htmlDoc.styleSheets);
    //     const {
    //       scripts, styleSheets,
    //     } = htmlDoc;

    //     console.log({
    //       scripts, styleSheets,
    //     });

    //     // const htmlDoc = parser.parseFromString(html, 'text/xml');
    //     console.log('htmlDoc', htmlDoc);
    //   });
  }

  start() {
    this.status = 'running';
    return true;
  }

  init() {
    const code = (vm: Window) => {
      console.log('code was run', vm);
    };

    const vm = (window: Window, ...rest: []) => {
      console.log('vm cb', window);
      console.log('rest', rest);
    };

    const sandbox = new Sandbox(vm);
    sandbox.run(code);
    this.apps = [];
  }

  get() {
    return this.apps;
  }
}

export default Artist;
