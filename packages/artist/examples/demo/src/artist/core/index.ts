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
    this.apps.concat(apps);
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
