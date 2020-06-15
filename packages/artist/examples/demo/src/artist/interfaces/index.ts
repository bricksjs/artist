// core应用
export interface Core {
  name: string;
  status: string;

  start?(): boolean;
  stop?(): boolean;

  load?(apps: []): void;
  reload?(): boolean;

  active?(): boolean;
  deactive?(): boolean;

  get?(): void;
  list?(): void;
  remove?(): void;
}

// 微应用生命周期
export interface Application {
  type: string;
  name: string;
  status?: string;
  entry: string;
  config: object;

  beforeLoad?(): void;
  loaded?(): void;

  beforeMount?(): void;
  mounted?(): void;

  beforeActive?(): void;
  actived?(): void;

  beforeDeacitve?(): void;
  deactived?(): void;

  beforeDestroy?(): void;
  destroyed?(): void;
}

declare global {
  interface Window {
    artist: Core;
  }
}

export type VM = Window
