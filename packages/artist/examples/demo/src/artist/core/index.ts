import importHTML from 'import-html-entry';
import { Core, Application } from '../interfaces';

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

    fetch(url).then((response) => response.text())
      .then((html) => {
        console.log('html', html);
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(html, 'text/html');
        const {
          scripts, styleSheets, links, baseURI,
        } = htmlDoc;
        // htmlDoc.baseURI = 'a';
        // htmlDoc.baseURI;

        console.log({
          scripts, styleSheets, links, baseURI,
        });

        // const htmlDoc = parser.parseFromString(html, 'text/xml');
        console.log('htmlDoc', htmlDoc);
      });
  }

  start() {
    this.status = 'running';
    return true;
  }

  get() {
    return this.apps;
  }
}

export default Artist;
