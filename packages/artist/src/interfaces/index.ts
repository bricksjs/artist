// core应用
export interface Core {
  name: string;
  status: string;

  // start(): boolean;
  // stop(): boolean;

  // load(): object;
  // reload(): boolean;

  // active(): boolean;
  // deactive(): boolean;

  // get(): void;
  // list(): void;
  // remove(): void;
}

// 引擎状态
export enum ENGINE_STATUS {
  READY = 'ready',
  RUNNING = 'running',
  STOPPED = 'stopped'
}

// 微应用状态
export enum APP_STATUS {
  UNLOAD = 'unload',
  LOADED = 'loaded',
  ACTIVED = 'actived',
  DEACTIVED = 'deactived',
  DESTROYED = 'destoryed'
}

export interface Application {
  name: string;
  status: string;
  entry: object;
  config: object;

  beforeLoad(): void;
  loaded(): void;

  beforeMount(): void;
  mounted(): void;

  beforeActive(): void;
  actived(): void;

  beforeDeacitve(): void;
  deactived(): void;

  beforeDestroy(): void;
  destroyed(): void;
}

//
export interface Entry {
  index: string;
  config: object;
}

export type VM = Window
