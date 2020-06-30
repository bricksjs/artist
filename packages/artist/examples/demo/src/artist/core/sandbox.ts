export interface VM {
  (window: Window): void;
}

// 沙箱环境
class Sandbox {
  box: Function;

  constructor(box: VM) {
    this.box = box.bind(this, window);
  }

  run(app: Function) {
    // app(this.box);
    this.box.call(this, app);
  }
}

// 沙箱环境
// class Sandbox {
//   box: Function;

//   constructor(window: Window) {
//     const vm = window;
//     this.box = (vm) => {

//     };
//   }

//   run(app: Function) {
//     // app(this.box);
//     this.box.call(this, app);
//   }
// }

export default Sandbox;

// function Sandbox() {
//   // 将参数转换成一个数组
//   const args = Array.prototype.slice.call(arguments);
//   // 最后一个参数是回调函数
//   const callback = args.pop();
//   // 模块可以作为一个数组传递，或作为单独的参数传递
//   let modules = (args[0] && typeof args[0] === 'String') ? args : args[0];
//   let i;

//   // 确保该函数作为构造函数被调用
//   if (!(this instanceof Sandbox)) {
//     return new Sandbox(modules, callback);
//   }

//   // 需要向this添加的属性
//   this.a = 1;
//   this.b = 2;

//   // 向在向该核心“this”对象添加模块
//   // 不指定模块名称或指定“*” 都表示“使用所有模块”
//   if (!modules || modules === '*') {
//     modules = [];
//     for (i in Sandbox.modules) {
//       if (Sandbox.modules.hasOwnProperty(u)) {
//         modules.push(i);
//       }
//     }
//   }

//   // 初始化所需的模块
//   for (i = 0; i < modules.length; i += 1) {
//     Sandbox.modules[modules[i]](this);
//   }

//   // call the callback

//   callback(this);
// }
