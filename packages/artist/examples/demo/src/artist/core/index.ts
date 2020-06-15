import { Core } from '../interfaces';

export class Artist implements Core {
  name = ''

  // 状态
  status = ''

  private apps = []

  private loaded = []

  private failed = []

  load(apps: []): void {
    this.apps = apps;
  }
}

// export default Artist;
