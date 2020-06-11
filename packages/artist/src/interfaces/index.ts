// core应用
export interface Engine {
  name: string;
  status: string;

  start(): boolean;
  stop(): boolean;

  load(): object;
  reload(): boolean;

  active(): boolean;
  deactive(): boolean;

  get(): void;
  list(): void;
  remove(): void;
  clear(): boolean;
}

// 微应用
export interface Application {
  name: string;
  status: string;
  entry: object;
  shared: object;

  beforeStart(): void;
  started(): void;

  beforeLoad(): void;
  loaded(): void;

  beforeMount(): void;
  mounted(): void;

  beforeActive(): void;
  actived(): void;

  beforeDestroy(): void;
  destroyed(): void;
}

export type VM = Window
