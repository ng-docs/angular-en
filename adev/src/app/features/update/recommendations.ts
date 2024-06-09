export enum ApplicationComplexity {
  Basic = 1,
  Medium = 2,
  Advanced = 3,
}

export interface Step {
  step: string;
  action: string;
  possibleIn: number;
  necessaryAsOf: number;
  level: ApplicationComplexity;
  angularCLI?: boolean;
  ngUpgrade?: boolean;
  pwa?: boolean;
  material?: boolean;
  renderedStep?: string;
  windows?: boolean;
}

export const RECOMMENDATIONS: Step[] = [
  {
    possibleIn: 200,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Basic,
    step: '扩展 OnInit',
    action:
      "确保不要使用 `extends OnInit`，或者将 `extends` 与任何生命周期事件合用。而应该使用 `implements <生命周期事件>`。",
  },
  {
    possibleIn: 200,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: '深层导入',
    action:
      '停止使用深度导入，这些符号现在已标记为 ɵ，并不是我们公共 API 的一部分。',
  },
  {
    possibleIn: 200,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: 'invokeElementMethod',
    action:
      '停止使用 `Renderer.invokeElementMethod`，因为该方法已被移除。目前没有替代方法。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Basic,
    step: '非动画模块',
    action:
      '如果你的应用中使用了动画，请在你的应用 `NgModule` 中从 `@angular/platform-browser/animations` 导入 `BrowserAnimationsModule`。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Medium,
    step: '原生表单验证',
    action:
      '当你包含 `FormsModule` 时，Angular 开始向表单元素添加 `novalidate` 属性。要重新启用原生表单行为，请使用 `ngNoForm` 或添加 `ngNativeValidate`。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: 'RootRenderer',
    action: '用 `RendererFactoryV2` 替换 `RootRenderer`。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    ngUpgrade: true,
    step: 'downgradeInjectable',
    action: '`upgrade/static/downgradeInjectable` 的返回值已更改。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 400,
    level: ApplicationComplexity.Advanced,
    step: '动画测试',
    action:
      '如果你使用了动画和测试，请在你的 `TestBed.initTestEnvironment` 调用中添加 `mods[1].NoopAnimationsModule`。',
  },
  {
    possibleIn: 200,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: 'DefaultIterableDiffer',
    action:
      '停止使用 `DefaultIterableDiffer`、`KeyValueDiffers#factories` 或 `IterableDiffers#factories`。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Basic,
    step: '模板标签',
    action: '将你的 `template` 标签重命名为 `ng-template`。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Medium,
    step: 'OpaqueToken',
    action: '用 `InjectionToken` 替换任何 `OpaqueToken`。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: 'DifferFactory',
    action: '如果调用了 `DifferFactory.create(...)`，移除 `ChangeDetectorRef` 参数。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: 'ErrorHandler 参数',
    action: '停止向 ErrorHandler 构造函数传递任何参数。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: 'ngProbeToken',
    action:
      '如果使用了 ngProbeToken，请确保从 @angular/core 而不是 @angular/platform-browser 导入它。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: 'TrackByFn',
    action: '如果使用了 TrackByFn，改用 TrackByFunction。',
  },
  {
    possibleIn: 500,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Basic,
    step: 'i18n 管道更改',
    action:
      '如果依赖于日期、货币、小数或百分比管道，在 5 中将看到格式的轻微更改。对于使用其他区域设置而不是 en-us 的应用程序，你需要导入它，可选择从 `@angular/common/i18n_data/locale_fr` 导入 `locale_extended_fr` 并注册 locale。',
  },
  {
    possibleIn: 500,
    necessaryAsOf: 500,
    level: ApplicationComplexity.Advanced,
    step: 'gendir',
    action:
      '不要依赖于 `gendir`，而是考虑使用 `skipTemplateCodeGen`。 <a href=https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank">阅读更多</a>',
  },
  {
    possibleIn: 220,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    ngUpgrade: true,
    step: '动态 ngUpgrade',
    action:
      '用 `@angular/upgrade/static` 中的新版本替换从 `@angular/upgrade` 导入的 `downgradeComponent`、`downgradeInjectable`、`UpgradeComponent` 和 `UpgradeModule`。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: '核心中的动画',
    action:
      '如果从 @angular/core 导入了任何动画服务或工具，应该从 @angular/animations 导入。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: 'ngOutletContext',
    action: '用 `ngTemplateOutletContext` 替换 `ngOutletContext`。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: 'collectionChangeRecord',
    action: '用 `IterableChangeRecord` 替换 `CollectionChangeRecord`。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: 'Renderer',
    action: '任何使用 Renderer 的地方，现在使用 Renderer2。',
  },
  {
    possibleIn: 400,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: '路由器查询参数',
    action: '如果使用 preserveQueryParams，改用 queryParamsHandling。',
  },
  {
    possibleIn: 430,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: 'Http',
    action:
      '如果使用传统的 `HttpModule` 和 `Http` 服务，请切换到 `HttpClientModule` 和 `HttpClient` 服务。HttpClient 简化了默认的人体工程学（你不再需要映射到 JSON），现在支持类型化返回值和拦截器。在 [angular.dev](https://angular.io/guide/http) 上阅读更多。',
  },
  {
    possibleIn: 430,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: '@angular/platform-browser 中的 DOCUMENT',
    action:
      '如果使用 @angular/platform-browser 中的 DOCUMENT，请开始从 @angular/common 导入。'
  },
  {
    possibleIn: 500,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: 'ReflectiveInjector',
    action: '任何使用 ReflectiveInjector 的地方，现在使用 StaticInjector。'
  },
  {
    possibleIn: 500,
    necessaryAsOf: 550,
    level: ApplicationComplexity.Medium,
    step: '空白符',
    action:
      '在你的 `tsconfig.json` 的 `angularCompilerOptions` 键下选择 `off` 作为 `preserveWhitespaces` 的值，以获得此设置的好处，该设置在 v6 中默认设置为 `off`。'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    step: 'Node 8',
    action:
      '确保你正在使用<a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 8或更高版本</a>。'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: '更新到 CLI v6',
    action:
      '更新你的 Angular CLI，并将配置迁移到<a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">新的 angular.json 格式</a>，方法如下：<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/cli@6`<br/>'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: '更新到 CLI v6',
    action:
      '更新你的 Angular CLI，并将配置迁移到<a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">新的 angular.json 格式</a>，方法如下：<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/cli@6 @angular/core@6"`<br/>'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: 'CLI v6 脚本',
    action:
      '更新你在 `package.json` 中可能有的任何 `scripts`，以使用最新的 Angular CLI 命令。所有 CLI 命令现在使用两个短横线作为标志（例如 `ng build --prod --source-map`）以符合 POSIX 规范。'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: '更新到 Angular v6',
    action:
      '将你的所有 Angular 框架包更新到 v6，并正确安装 RxJS 和 TypeScript 的版本。<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/core@6`<br/><br/>更新后，TypeScript 和 RxJS 将更准确地流经你的应用程序的类型，这可能会暴露出应用程序类型的现有错误'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: '更新到 Angular v6',
    action:
      '将你的所有 Angular 框架包更新到 v6，并正确安装 RxJS 和 TypeScript 的版本。<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/cli@6 @angular/core@6"`<br/><br/>更新后，TypeScript 和 RxJS 将更准确地流经你的应用程序的类型，这可能会暴露出应用程序类型的现有错误'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: 'forms v6',
    action:
      '在 Angular Forms 中，当调用 `AbstractControl#markAsPending` 时，`AbstractControl#statusChanges` 现在会发出 `PENDING` 事件。确保如果你在调用 `markAsPending` 时过滤或检查 `statusChanges` 事件，你要考虑到调用 `markAsPending` 时的新事件。'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Advanced,
    step: '动画时序',
    action:
      '如果在禁用的 Zone 中使用 `AnimationEvent` 的 `totalTime`，它将不再报告为 0。要检测动画事件是否报告为禁用的动画，则可以使用 `event.disabled` 属性。'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Advanced,
    step: '表单控件上的 ngModel',
    action:
      '在 v6 中已弃用并在 v7 中删除了对使用 ngModel 输入属性和 ngModelChange 事件与响应式表单指令一起使用的支持。'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: 'ngModelChange 顺序',
    action:
      '现在，在更新控件的值/有效性后，`ngModelChange` 被发出，而不是之前，以更好地匹配预期。如果你依赖于这些事件的顺序，你需要开始在你的组件中跟踪旧值。'
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: '更新到 v6 的依赖项',
    action:
      '将 Angular Material 更新到最新版本。<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/material@6`<br/><br/>这也将自动迁移已弃用的 API。',
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: '更新到 v6 的依赖项',
    action:
      '将 Angular Material 更新到最新版本。<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/material@6"`<br/><br/>这也将自动迁移已弃用的 API。',
  },
  {
    possibleIn: 600,
    necessaryAsOf: 600,
    level: ApplicationComplexity.Medium,
    step: 'strictPropertyInitializer',
    action:
      '如果 TypeScript 配置为严格模式（如果你在 `tsconfig.json` 文件中将 `strict` 设置为 `true`），请更新你的 `tsconfig.json` 以禁用 `strictPropertyInitialization` 或将属性初始化从 `ngOnInit` 移动到你的构造函数。你可以在<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization">TypeScript 2.7 发布说明</a>中了解更多关于此标志的信息。',
  },
  {
    possibleIn: 600,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    step: '更新到 RxJS 6',
    action:
      '使用<a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank">rxjs-tslint 自动更新规则</a>删除已弃用的 RxJS 5 特性<br/><br/>对于大多数应用程序，这意味着运行以下两个命令：<br/><br/>`npx rxjs-tslint`<br/>`rxjs-5-to-6-migrate -p src/tsconfig.app.json`',
  },
  {
    possibleIn: 600,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Medium,
    step: '移除 rxjs-compat',
    action: '一旦你和你所有的依赖项都已更新到 RxJS 6，请移除 `rxjs-compat`。',
  },
  {
    possibleIn: 610,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Medium,
    step: '使用文件而不是 versionedFiles',
    action:
      '如果你使用 Angular Service Worker，请将任何 `versionedFiles` 迁移到 `files` 数组中。行为是一样的。',
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    step: 'TypeScript 3.1',
    action:
      'Angular 现在使用 TypeScript 3.1，请阅读有关任何潜在的破坏性变化：<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html">TypeScript 3.1 发布说明</a>',
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    step: 'Node 10',
    action:
      'Angular 现在添加了对 Node 10 的支持：<a href="https://nodejs.org/en/blog/release/v10.0.0/" target="_blank">Node 10 发布说明</a>',
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: '更新到 v7',
    action:
      '在终端中运行`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@7 update @angular/cli@7 @angular/core@7`来更新核心框架和 CLI 到 v7。',
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: '更新到 v7',
    action:
      '在终端中运行`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@7 update @angular/cli@7 @angular/core@7"`来更新核心框架和 CLI 到 v7。',
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: '更新到 v7 的 Material',
    action:
      '在终端中运行`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@7 update @angular/material@7`来更新 Angular Material 到 v7。你应该测试你的应用程序是否有大小和布局的变化。',
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: '更新到 v7 的 Material',
    action:
      '在终端中运行`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@7 update @angular/material@7"`来更新 Angular Material 到 v7。你应该测试你的应用程序是否有大小和布局的变化。',
  },
  {
    possibleIn: 700,
    necessaryAsOf: 700,
    level: ApplicationComplexity.Medium,
    material: true,
    step: 'v7 的 Material 变化',
    action:
      '如果你使用屏幕截图测试，你需要重新生成你的屏幕截图黄金文件，因为许多次要的视觉调整已经完成。',
  },
  {
    possibleIn: 700,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: 'v7 的 Material 弃用',
    action:
      '停止使用 `matRippleSpeedFactor` 和 `baseSpeedFactor` 来进行涟漪，改用动画配置。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: '更新到 v8',
    action:
      '在终端中运行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/cli@8 @angular/core@8`，然后查看并提交更改。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: '更新到 v8',
    action:
      '在终端中运行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8"`，然后查看并提交更改。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: '使用 ::ng-deep 替代 /deep/',
    action:
      '在你的样式中用 `::ng-deep` 替换 `/deep/`，[了解更多关于 Angular 组件样式和 ::ng-deep](https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep)。 `/deep/` 和 `::ng-deep` 都已弃用，但在完全从浏览器和工具中移除影子穿透后，使用 `::ng-deep` 更可取。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: 'TypeScript 3.4',
    action:
      'Angular 现在使用 TypeScript 3.4，[了解更多可能由改进的类型检查引起的错误](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html)。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: 'node 10',
    action:
      '确保你正在使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10 或更高版本</a>。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: '差异化加载',
    action:
      'CLI 的构建命令现在会自动创建一个现代的 ES2015 构建，带有最小的 polyfills，并为旧版浏览器创建兼容的 ES5 构建，并根据浏览器加载适当的文件。 你可以通过将 `tsconfig.json` 中的 `target` 设置回 `es5` 来选择退出此更改。在 [angular.io](https://angular.io/guide/deployment#differential-loading) 上了解更多。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: 'CLI 遥测',
    action:
      '使用 CLI 的新版本时，你将被询问是否要选择加入共享 CLI 使用数据。你也可以添加自己的 Google Analytics 帐户。这样我们可以更好地决定优先考虑哪些 CLI 功能，并衡量我们改进的影响。在 [angular.io](https://angular.io/analytics) 上了解更多。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    step: '静态查询时机',
    action:
      '如果你使用 `ViewChild` 或 `ContentChild`，我们正在更新解析这些查询的方式，以给开发者更多控制。你现在必须指定变更检测应该在设置结果之前运行。示例：`@ContentChild(\'foo\', {static: false}) foo !: ElementRef;`。 `ng update` 将自动更新你的查询，但它会倾向于使你的查询为 `static`，以保证兼容性。在 [angular.io](https://angular.io/guide/static-query-migration) 上了解更多。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: '更新到 v8 的 Material',
    action:
      '在终端中运行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/material@8`。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 800,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: '更新到 v8 的 Material',
    action:
      '在终端中运行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/material@8"`。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    material: true,
    step: '深度导入',
    action:
      '不要直接从 `@angular/material` 导入，而是从特定组件进行深度导入。例如 `@angular/material/button`。`ng update` 将为你自动完成此操作。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: '新的 loadChildren',
    action:
      '对于通过路由器进行的惰性加载的模块，请确保你正在[使用动态导入](https://angular.io/guide/deprecations#loadchildren-string-syntax)。在 v9 中，通过字符串进行导入已被移除。`ng update` 应该会自动处理这个。在 [angular.io](https://angular.io/guide/deprecations#loadchildren-string-syntax) 上了解更多。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: '平台废弃',
    action:
      "我们正在废弃对 `@angular/platform-webworker` 的支持，因为它与 CLI 不兼容。在 Web Worker 中运行 Angular 的渲染架构不符合开发者的需求。你仍然可以在 Angular 中使用 Web Worker。在我们的 [Web Worker 指南](https://v9.angular.io/guide/web-worker) 中了解更多。如果你有需要这方面的用例，请通过 devrel@angular.io 与我们联系！",
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: 'node-sass',
    action:
      '我们已经从本地 Sass 编译器切换到 JavaScript 编译器。要切换回本地版本，请将其安装为 devDependency：`npm install node-sass --save-dev`。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: 'schematics 异步',
    action:
      '如果你正在构建自己的 Schematics，它们之前*可能*是异步的。从 8.0 开始，所有的 Schematics 都将是异步的。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: 'node 10.13',
    action:
      '确保你正在使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10.13 或更高版本</a>。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: '更新到 CLI v8 最新版本',
    action:
      '在你的工作空间目录中运行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/core@8 @angular/cli@8`，以更新到最新的 8.x 版本的 `@angular/core` 和 `@angular/cli` 并提交这些更改。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: '更新到 CLI v8 最新版本',
    action:
      '在你的工作空间目录中运行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8`，以更新到最新的 8.x 版本的 `@angular/core` 和 `@angular/cli` 并提交这些更改。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: '创建提交',
    action:
      '你可以选择向 [ng update](https://angular.io/cli/update) 命令传递 `--create-commits`（或 `-C`）标志，以每个独立迁移创建一个 git 提交。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: false,
    step: 'ng update v9',
    action:
      '运行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @angular/core@9 @angular/cli@9`，应该将你升级到 Angular 的 9 版本。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: true,
    step: 'ng update v9',
    action:
      '运行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/cli@9 @angular/core@9"`，应该将你升级到 Angular 的 9 版本。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: 'typescript 3.8',
    action:
      '你的项目现在已更新到 TypeScript 3.8，请阅读有关新编译器检查和可能需要修复代码中问题的错误的更多信息，可在 [TypeScript 3.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html) 或 [TypeScript 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html) 公告中了解更多。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: false,
    material: true,
    step: '更新 @angular/material',
    action: '运行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @angular/material@9`。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    windows: true,
    material: true,
    step: '更新 @angular/material',
    action:
      '运行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/material@9"`。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    windows: false,
    step: '更新 @nguniversal/hapi-engine',
    action:
      '如果你使用 Angular Universal，请运行 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @nguniversal/hapi-engine@9` 或 `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @nguniversal/express-engine@9`，具体取决于你使用的引擎。如果你的任何第三方依赖项未更新其对等依赖项的 Angular 版本，则此步骤可能需要 `--force` 标志。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    windows: true,
    step: '更新 @nguniversal/hapi-engine',
    action:
      '如果你使用 Angular Universal，请运行 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @nguniversal/hapi-engine@9"` 或 `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @nguniversal/express-engine@9"`，具体取决于你使用的引擎。如果你的任何第三方依赖项未更新其对等依赖项的 Angular 版本，则此步骤可能需要 `--force` 标志。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: '更新依赖项',
    action:
      '如果你的项目依赖于其他 Angular 库，我们建议你考虑更新到它们的最新版本。在某些情况下，此更新可能是必需的，以解决 API 不兼容性。查阅 `ng update` 或 `npm outdated` 以了解你过时的库。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Basic,
    step: '更新 Ivy',
    action:
      '在升级到 9 版本期间，通过代码迁移必要地转换了你的项目，以从代码库中移除任何不兼容或已废弃的 API 调用。现在你可以查看这些更改，并查阅 [升级到 9 版本指南](https://v9.angular.io/guide/updating-to-version-9) 以了解更多详情。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: '更新样式',
    action:
      '以前，绑定的 CSS 样式和类是采用“最后一次更改获胜”的策略应用的，但现在遵循一个定义好的优先级。了解更多关于 [样式优先级](https://angular.io/guide/attribute-binding#styling-precedence)。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: 'ModuleWithProviders',
    action:
      '如果你是库的作者，并且有一个返回 `ModuleWithProviders` 的方法（通常是通过名为 `forRoot()` 的方法），则需要指定泛型类型。了解更多 [angular.io](https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic)',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: 'wtf',
    action:
      '在 Angular 8 中，支持 Web 追踪框架已废弃。你应该停止使用任何 `wtf*` API。为了进行性能追踪，我们建议使用 [浏览器性能工具](https://developers.google.com/web/tools/lighthouse/audits/user-timing)。',
  },
  {
    possibleIn: 800,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: 'es5 浏览器',
    action:
      '在你的 `angular.json` 中删除任何 `es5BrowserSupport` 标志，并将你的 `tsconfig.json` 中的 `target` 设置为 `es2015`。Angular 现在使用你的 browserslist 来确定是否需要 ES5 构建。`ng update` 将自动迁移你。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Medium,
    step: 'ngForm 选择器',
    action:
      '如果你使用 `ngForm` 元素选择器创建 Angular 表单，你应该改用 `ng-form`。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: 'typings 编译',
    action:
      '我们已更新 `tsconfig.app.json` 以限制编译的文件。如果你依赖于其他文件被包含在编译中，比如一个 `typings.d.ts` 文件，你需要手动将其添加到编译中。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: '调试',
    action:
      '随着 Angular 9，Ivy 现在是默认的渲染引擎，针对可能出现的任何兼容性问题，阅读 [Ivy 兼容性指南](https://v9.angular.io/guide/ivy-compatibility)。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 900,
    level: ApplicationComplexity.Advanced,
    step: 'express-universal-server',
    action:
      '如果你使用 Angular Universal 与 `@nguniversal/express-engine` 或 `@nguniversal/hapi-engine`，将会创建几个备份文件。其中一个是用于 `server.ts` 的。如果此文件与默认文件不同，你可能需要手动将一些更改从 `server.ts.bak` 复制到 `server.ts`。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Basic,
    step: 'ivy i18n',
    action:
      "Angular 9 引入了一个全局的 `$localize()` 函数，如果你依赖于 Angular 的国际化（i18n），则需要加载它。运行 `ng add @angular/localize` 来添加必要的包和代码修改。查阅 [$localize 全局导入迁移指南](https://v9.angular.io/guide/migration-localize) 以了解更多变化。",
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: 'entryComponents',
    action:
      '在你的应用项目中，你可以删除 `entryComponents` NgModules 和任何使用 `ANALYZE_FOR_ENTRY_COMPONENTS` 的地方。它们在 Ivy 编译器和运行时中不再需要。如果构建的是一个将被 View Engine 应用程序消费的库，可能需要保留这些。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: 'testbed-get',
    action:
      '如果你使用 `TestBed.get`，你应该改用 `TestBed.inject`。这个新方法具有相同的行为，但是类型安全。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: '$localize',
    action:
      "如果你使用 [Angular 的国际化支持](http://angular.io/guide/i18n)，你将需要开始使用 `@angular/localize`。了解更多关于 [$localize 全局导入迁移](https://v9.angular.io/guide/migration-localize)。",
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Basic,
    step: 'v10 NodeJS 12',
    action:
      '确保你正在使用 <a href="https://nodejs.org/dist/latest-v12.x/" target="_blank">Node 12 或更高版本</a>。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Basic,
    step: 'ng update v10',
    action:
      '运行 `npx @angular/cli@10 update @angular/core@10 @angular/cli@10`，这将使你的 Angular 版本升级到 10。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Basic,
    material: true,
    step: '更新 @angular/material',
    action: '运行 `npx @angular/cli@10 update @angular/material@10`。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Basic,
    step: 'browserlist',
    action:
      '新项目使用文件名 `.browserslistrc`，而不是 `browserslist`。`ng update` 将自动迁移你。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: 'v10-versions',
    action:
      'Angular 现在需要 `tslint` v6、`tslib` v2 和 [TypeScript 3.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html)。`ng update` 将自动迁移你。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Advanced,
    step: 'styleext',
    action:
      '停止在你的 Angular schematics 中使用 `styleext` 或 `spec`。`ng update` 将自动迁移你。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: 'classes-without-decorators',
    action:
      '在 10 版本中，不带有 Angular 装饰器的类不再受支持。[了解更多](https://v10.angular.io/guide/migration-undecorated-classes)。`ng update` 将自动迁移你。',
  },
  {
    possibleIn: 900,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: 'injectable-definitions',
    action:
      '从 Angular 9 开始，对于 DI，@Injectable 装饰器的执行更加严格，不完整的提供程序定义的行为会有所不同。[了解更多](https://v9.angular.io/guide/migration-injectable)。`ng update` 将自动迁移你。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Advanced,
    step: 'closure-jsdoc-comments',
    action:
      "Angular 的 NPM 包不再包含 jsdoc 注释，这在与闭包编译器的使用中是必需的（极其罕见）。此支持是实验性的，并且只在一些情况下起作用。很快将宣布替代推荐路径。",
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: 'forms-number-input',
    action:
      '如果你使用 Angular 表单，`number` 类型的输入不再监听 [change 事件](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)（这些事件不一定会在每次更改值时触发），而是监听 [input 事件](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: 'forms-length-input',
    action:
      "对于 Angular 表单验证，`minLength` 和 `maxLength` 验证器现在验证表单控件的值是否具有数字长度属性，并且仅在这种情况下验证长度。",
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: 'esm5-bundles',
    action:
      "Angular 包格式已更新，删除了 `esm5` 和 `fesm5` 格式。这些不再分发在我们的 npm 包中。如果你不使用 CLI，你可能需要自行将 Angular 代码降级到 ES5。",
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: 'console-errors',
    action:
      "有关未知元素的警告现在记录为错误。这不会破坏你的应用程序，但可能会使期望 `console.error` 不记录任何内容的工具受到影响。",
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Advanced,
    step: 'router-resolver-empty',
    action:
      '任何返回 `EMPTY` 的解析器将取消导航。如果你想要允许导航继续，你需要更新解析器以发出一些值（例如 `defaultIfEmpty(...)`、`of(...)` 等）。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Advanced,
    step: 'sw-vary-headers',
    action:
      '如果你使用 Angular 服务工作器并依赖于带有 [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) 标头的资源，这些标头现在被忽略，以避免在各个浏览器之间出现不可预测的行为。为了避免这种情况，[配置](https://angular.io/guide/service-worker-config) 你的服务工作器以避免缓存这些资源。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Medium,
    step: 'expression-changed-after-checked-new',
    action:
      '当使用 `async` 管道时，你可能会看到之前未检测到的 `ExpressionChangedAfterItHasBeenChecked` 错误。以前的错误可能未被检测到，因为两个 `WrappedValues` 在检查目的上被认为是“相等的”，即使它们各自的未包装值不相等。在版本 10 中，`WrappedValue` 已被移除。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Advanced,
    step: 'property-binding-change-detection',
    action:
      '如果你有一个属性绑定，例如 `[val]=(observable | async).someProperty`，如果 `someProperty` 的值与之前的发射值相同，这将不再触发变更检测。如果你依赖于此行为，要么手动订阅并根据需要调用 `markForCheck`，要么更新绑定以确保引用更改。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Advanced,
    step: 'day-periods-crossing-midnight',
    action:
      '如果你使用 `formatDate()` 或 `DatePipe`，并且使用了任何 `b` 或 `B` 格式代码，逻辑已更新，使其匹配跨越午夜的一天时段内的时间，因此现在将渲染正确的输出，例如在英文环境中的 `night`。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Advanced,
    step: 'urlmatcher-null',
    action:
      '如果你使用 `UrlMatcher`，现在其类型反映了它可以始终返回 `null`。',
  },
  {
    possibleIn: 1000,
    necessaryAsOf: 1000,
    level: ApplicationComplexity.Basic,
    step: 'v10-more-details',
    action:
      '有关停用、自动迁移和更改的更多详细信息，请访问 [guide angular.io](https://v10.angular.io/guide/updating-to-version-10)',
  },
  {
    possibleIn: 1020,
    necessaryAsOf: 1020,
    level: ApplicationComplexity.Medium,
    step: 'universal-baseurl',
    action:
      '对于 Angular Universal 用户，如果你使用 `useAbsoluteUrl` 来设置 `platform-server`，现在还需要指定 `baseUrl`。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    step: 'v11 ng update',
    action:
      '运行 `ng update @angular/core@11 @angular/cli@11` 将把你的 Angular 版本升级到 11。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    material: true,
    step: 'update @angular/material',
    action: '运行 `ng update @angular/material@11`。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    step: 'v11 versions',
    action:
      'Angular 现在需要 [TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/)。`ng update` 将自动迁移你的项目。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Basic,
    step: 'v11 browser support',
    action:
      '不再支持 IE9、IE10 和 IE 移动版。这在 [v10 更新](http://blog.angular.io/version-10-of-angular-now-available-78960babd41#c357) 中已经宣布。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: 'webpack5 optin',
    action:
      '你现在可以选择使用 webpack 5，使用 Yarn 并将 `"resolutions": {"webpack": "^5.0.0"}` 添加到你的 `package.json`。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: 'ng new strict prompt',
    action:
      '当生成新项目时，你将被询问是否要启用严格模式。这将为 TypeScript 和 Angular 编译器配置更严格的类型检查，并默认应用更小的捆绑预算。你可以使用 `--strict=true` 或 `--strict=false` 来跳过提示。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 router relativeLinkResolution',
    action:
      "如果你使用路由器，`relativeLinkResolution` 的默认值从 `legacy` 改为 `corrected`。如果你的应用程序以前使用默认值而未在 `ExtraOptions` 中指定值，并且在从空路径路由的子路由导航时使用相对链接，你需要更新你的 `RouterModule` 配置，明确为 `relativeLinkResolution` 指定 `legacy`。参见 [文档](https://v11.angular.io/api/router/ExtraOptions#relativeLinkResolution) 以获取更多详细信息。",
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 router initialNavigation',
    action:
      '在 Angular 路由器中，v4 中已弃用的 `initialNavigation` 选项已被移除。如果你以前使用了 `enabled` 或 `true`，现在请选择 `enabledNonBlocking` 或 `enabledBlocking`。如果你以前使用了 `false` 或 `legacy_disabled`，现在使用 `disabled`。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: 'routerlink preserveQueryParams',
    action:
      '在 Angular 路由器的 `routerLink` 中，已删除了 `preserveQueryParams`，请使用 `queryParamsHandling="preserve"`。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'routerlink queryParams typing',
    action:
      '如果你正在访问 `routerLink` 的 `queryParams`、`fragment` 或 `queryParamsHandling` 值，你可能需要放宽类型以接受 `undefined` 和 `null`。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'viewencapsulation native removed',
    action:
      '组件视图封装选项 `ViewEncapsulation.Native` 已被移除。请使用 `ViewEncapsulation.ShadowDom`。`ng update` 将自动迁移你。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'ICU expressions typechecked',
    action:
      '如果你使用 i18n，在 International Components for Unicode (ICUs) 表达式中的表达式现在再次进行类型检查。如果在 ICU 中的表达式中发现错误，可能会导致编译失败。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'forms validators asyncValidators typing',
    action:
      "在 `@angular/forms` 包中的指令构造函数中，预期的 `validators` 和 `asyncValidators` 参数的类型曾经是 `any[]`。现在这些参数已经被正确地类型化，因此如果你的代码依赖于表单指令构造函数类型，可能需要一些更新来提高类型安全性。",
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'forms AbstractFormControl',
    action:
      "如果你使用 Angular Forms，`AbstractFormControl.parent` 的类型现在包括 null。`ng update` 将自动迁移你，但在一个不太可能的情况下，如果你的代码使用严格相等将父级与 undefined 进行比较，你需要改为使用 `=== null`，因为父级现在明确初始化为 `null`，而不是保留为 undefined。",
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'platform-webworker',
    action:
      '很少使用的 `@angular/platform-webworker` 和 `@angular/platform-webworker-dynamic` 在 v8 中已被弃用并移除。在 web worker 中运行 Angular 的部分是一个从未对常见用例产生良好效果的实验。Angular 对 [Web Workers](https://angular.io/guide/web-worker) 仍然有很好的支持。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 slice pipe typing',
    action:
      '现在 `slice` 管道对于未定义的输入值返回 null，这与大多数管道的行为一致。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 keyvalue typing',
    action:
      '修复了 `keyvalue` 管道，对于具有数字键的输入对象，结果类型将包含键的字符串表示形式。这已经是现实，代码已经更新以反映这一点。如果管道输出的使用方依赖于不正确的类型，请更新。请注意，这不会影响输入值为 `Map` 的用例，因此如果你需要保留 `number`，这是一种有效的方法。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 number pipe typing',
    action:
      '数字管道（`decimal`、`percent`、`currency` 等）现在明确指定接受的类型。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 date pipe typing',
    action: '日期管道现在明确指定接受的类型。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 datetime rounding',
    action:
      '当将带有毫秒分数的日期时间格式的字符串传递给 `DatePipe` 时，毫秒现在总是向下舍入，而不是舍入到最近的毫秒。大多数应用程序不会受到此更改的影响。如果这不是预期的行为，考虑在将字符串传递给 `DatePipe` 之前预处理毫秒部分以舍入。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 async pipe typing',
    action:
      '`async` 管道不再声称对于类型为 undefined 的输入返回 undefined。请注意，代码实际上对于未定义的输入返回 null。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: 'v11 case pipe update',
    action:
      '`uppercase` 和 `lowercase` 管道不再通过假值。它们现在将 `null` 和 `undefined` 都映射到 `null`，并在无效输入（`0`、`false`、`NaN`）时引发异常。这与其他 Angular 管道的行为相匹配。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 router NavigationExtras typing',
    action:
      '如果你使用带有 `NavigationExtras` 的路由器，新的类型允许传递类型为 `NavigationExtras` 的变量，但不允许对象字面量，因为它们只能指定已知属性。它们也不接受与 `Pick` 中的属性没有共同属性的类型。如果你受到此更改的影响，请仅指定在相应函数调用中实际使用的 NavigationExtras 中的属性，或在对象或变量上使用类型断言：`as NavigationExtras`。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: 'v11 TestBed.overrideProvider',
    action:
      '如果在 TestBed 初始化之后调用 `TestBed.overrideProvider`，则不再应用提供者覆盖。这种行为与其他覆盖方法（如 `TestBed.overrideDirective` 等）一致，但会引发错误以指示。之前在 TestBed.overrideProvider 函数中缺少此检查。如果看到此错误，请确保在 TestBed 初始化完成之前移动 `TestBed.overrideProvider` 调用。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: 'v11 router RouteReuseStrategy',
    action:
      '如果你使用路由器的 RouteReuseStrategy，参数顺序已更改。在调用 `RouteReuseStrategy#shouldReuseRoute` 时，以前在评估子路由时，会调用 `future` 和 `current` 参数的顺序已更改。如果你的 `RouteReuseStrategy` 专门依赖于将来或当前快照状态，可能需要更新 `shouldReuseRoute` 实现对 `future` 和 `current` `ActivateRouteSnapshots` 的使用。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 locale data readonly',
    action:
      '如果你使用区域设置数据数组，此 API 现在将返回只读数组。如果你对其进行了更改（例如调用 `sort()`、`push()`、`splice()` 等），那么你的代码将不再编译。如果你需要更改数组，则现在应该复制它（例如通过调用 `slice()`）并更改副本。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Advanced,
    step: 'v11 CollectionChangeRecord',
    action:
      '在变更检测中，已移除了 `CollectionChangeRecord`，请改用 `IterableChangeRecord`。',
  },
  {
    possibleIn: 1100,
    necessaryAsOf: 1100,
    level: ApplicationComplexity.Medium,
    step: 'v11 forms async validators',
    action:
      '如果你在 `FormControl`、`FormGroup` 或 `FormArray` 的类实例的初始化时间上使用异步验证器来定义，则在异步验证器完成后先前未发出状态更改事件。已更改为将状态事件发出到 `statusChanges` 可观察对象中。如果你的代码依赖于旧行为，你可以过滤/忽略此额外的状态更改事件。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: 'v12 ng update',
    action:
      '运行 `ng update @angular/core@12 @angular/cli@12`，这将把你的 Angular 版本升级到 12。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    material: true,
    step: 'update @angular/material',
    action: '运行 `ng update @angular/material@12`。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: 'v12 versions',
    action:
      'Angular 现在要求 [TypeScript 4.2](https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/)。`ng update` 将自动更新你的 TypeScript。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: 'v12 browser support',
    action:
      'IE11 支持已弃用。在 [IE11 删除 RFC](https://github.com/angular/angular/issues/41840) 中找到详细信息。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Basic,
    step: 'v12 minimum  Node.js version',
    action: '你不能再使用 Node.js 版本 10 或更早的版本。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: 'v12 `XhrFactory` relocation',
    action: '将 `XhrFactory` 的导入从 `@angular/common/http` 改为 `@angular/common`。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: 'v12 i18n message ids',
    action:
      '如果你依赖于旧版 i18n 消息 ID，请使用 `localize-migrate` 工具[迁移至新版](https://angular.io/guide/migration-legacy-message-id)。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: 'v12 deprecates `emitDistinctChangesOnly`',
    action:
      '如果你正在使用 `emitDistinctChangesOnly` 来配置 `@ContentChildren` 和 `@ViewChildren` 查询，可能需要将其值更新为 `false` 以与其先前行为对齐。在 v12 中，`emitDistinctChangesOnly` 的默认值为 `true`，在将来的版本中，我们将删除此配置选项，以防止触发不必要的更改。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Medium,
    step: 'v12 prod by default',
    action:
      '你可以运行可选的迁移以将默认启用生产构建 `ng update @angular/cli@12 --migrate-only production-by-default`。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: 'v12 min and max form attributes',
    action:
      '如果你使用 Angular 表单，在 `<input type="number">` 上使用 `min` 和 `max` 属性现在将触发验证逻辑。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: 'v12 `emitEvent` in `FormArray` and `FormGroup`',
    action:
      '如果你的应用程序具有自定义类，它们扩展了 `FormArray` 或 `FormGroup` 类，并覆盖了上述方法，则可能需要更新你的实现。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: 'v12 zone.js minimum version',
    action:
      '将 zone.js 更新到版本 0.11.4。`ng update` 将自动更新此依赖项。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: 'v12 `HttpParams` method params update',
    action:
      '如果你扩展了 `HttpParams` 类，你可能需要更新其方法的签名以反映参数类型的更改。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: 'v12 `routerLinkActiveOptions`',
    action:
      '`RouterLinkActive` 的 `routerLinkActiveOptions` 属性现在具有更具体的类型。你可能需要更新访问此属性的代码以与更改保持一致。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: 'v12 `APP_INITIALIZER` callback types',
    action:
      '初始化回调现在具有更具体的返回类型，如果你通过 `Injector.get` 或 `TestBed.inject` 获取 `APP_INITIALIZER` 实例，则可能需要更新你的代码。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: 'v12 fragment typings',
    action:
      '路由器片段现在可能是 `null`。添加 `null` 检查以避免 TypeScript 产生类型错误。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: 'v12 `ng.getDirectives`',
    action:
      '确保不依赖于 `ng.getDirectives` 如果找不到与特定 DOM 节点相关联的指令，则引发错误。',
  },
  {
    possibleIn: 1200,
    necessaryAsOf: 1200,
    level: ApplicationComplexity.Advanced,
    step: 'v12 `optimization.styles.inlineCritical`',
    action:
      '检查你的 angular.json 文件中的 `optimization.styles.inlineCritical` 选项。现在默认为 `true`。请记住，整个 `optimization` 选项可以设置为布尔值，这将将所有子选项设置为默认值。',
  },

  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    step: 'v13 ng update',
    action:
      '运行 `ng update @angular/core@13 @angular/cli@13` 将你的 Angular 版本更新至 13。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    material: true,
    step: 'update @angular/material',
    action: '运行 `ng update @angular/material@13`。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    step: 'TypeScript 4.4',
    action:
      'Angular 现在使用 TypeScript 4.4，请阅读有关任何潜在变更的更多信息：[TypeScript 4.4 发布说明](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html)',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Basic,
    step: 'v13 node',
    action:
      '确保你使用的是 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 12.20.0 或更高版本</a>。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: 'v13 routerLink',
    action:
      '现在可以通过传递 `undefined` 和 `null` 来禁用 `routerLink` 的导航。之前，`routerLink` 指令接受这两个值等同于空字符串。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: 'v13 router loadChildren',
    action:
      '不能再通过将字符串值设置为 `loadChildren` 来指定惰性加载的路由。确保切换到动态 ESM 导入语句。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: 'v13 service worker activated',
    action:
      '`SwUpdate` 的 `activated` 可观察对象现已弃用。要检查服务工作器的激活状态，请改用 `activatedUpdate` 方法。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: 'v13 service worker available',
    action:
      '`SwUpdate` 的 `available` 可观察对象现已弃用。要获取相同的信息，请使用 `versionUpdates` 并仅过滤 `VersionReadyEvent` 事件。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Medium,
    step: 'v13 renderModuleFactory',
    action:
      '`@angular/platform-server` 中的 `renderModuleFactory` 不再与 Ivy 一起使用。改用 `renderModule`。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: 'v13 forms status',
    action:
      '我们将 `AbstractControl.status` 的类型缩小为 `FormControlStatus`，并将 `AbstractControl.status` 的类型缩小为 `Observable<FormControlStatus>`。 `FormControlStatus` 是表单控件的所有可能状态字符串的联合。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: 'v13 router serializer',
    action:
      '现在，URL 序列化程序遵守 URI 规范，会考虑查询参数中的问号。例如，`/path?q=hello?&q2=2` 现在将解析为 `{ q: `hello?`, q2: 2 }`。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: 'v13 host binding',
    action:
      "`href` 现在是属性绑定。这意味着 `DebugElement.properties['href']` 现在返回原生元素返回的 `href` 值，而不是 `routerLink` 的 `href` 属性的内部值。",
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: 'v13 spy location',
    action:
      '`SpyLocation` 在调用 `location.go` 时不再触发 `popstate` 事件。此外，`simulateHashChange` 现在触发 `haschange` 和 `popstate`。依赖于 `location.go` 的测试现在可能需要使用 `simulateHashChange` 来捕获 `popstate`。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    ngUpgrade: true,
    step: 'v13 router URL replacement',
    action:
      '当新导航取消正在进行的导航时，路由器将不再替换浏览器 URL。依赖于 Angular 路由器处理的初始导航上存在 `navigationId` 的混合应用程序应该订阅 `NavigationCancel` 事件，并执行 `location.replaceState` 以将 `navigationId` 添加到 `Router` 状态中。此外，断言 `SpyLocation` 上的 `urlChanges` 的测试可能需要调整以考虑不再触发的 `replaceState`。',
  },
  {
    possibleIn: 1300,
    necessaryAsOf: 1300,
    level: ApplicationComplexity.Advanced,
    step: 'v13 removed symbols',
    action:
      '路由器包不再导出 `SpyNgModuleFactoryLoader` 和 `DeprecatedLoadChildren`。如果使用了它们，请确保删除其对应的导入语句。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    step: 'v14 ng update',
    action:
      '运行 `ng update @angular/core@14 @angular/cli@14` 将你的 Angular 版本更新至 14。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    material: true,
    step: 'update @angular/material',
    action: '运行 `ng update @angular/material@14`。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    step: 'TypeScript 4.6',
    action:
      'Angular 现在使用 TypeScript 4.6，请阅读有关任何潜在变更的更多信息：[TypeScript 4.6 发布公告](https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/)',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Basic,
    step: 'v14 node',
    action:
      '确保你使用的是 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 14.15.0 或更高版本</a>。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: 'v14 strict forms',
    action:
      '表单模型现在需要一个泛型类型参数。你可以选择使用表单模型类的不带类型的版本进行渐进式迁移。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: 'v14 aotSummaries',
    action: '从 `TestBed` 中删除 `aotSummaries`，因为 Angular 不再在 Ivy 中需要它们。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    material: true,
    step: 'v14 MatVertical and Horizontal Stepper',
    action:
      '如果你正在使用 `MatVerticalStepper` 或 `MatHorizontalStepper`，请确保切换到 `MatStepper`。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: 'v14 JSONP',
    action:
      '从 JSONP 请求中删除头部。JSONP 不支持头部，如果指定了头部，HTTP 模块现在将抛出错误而不是忽略它们。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Medium,
    step: 'v14 resolvers',
    action:
      '解析器现在将接收到的 observable 的第一个发射值，并在此之后进行导航，以更好地与其他守卫保持一致，而不是取最后发射的值。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: 'v14 deprecate protractor entry',
    action: '已移除废弃的 `angular/cdk/testing/protractor` 入口点。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: 'v14 chipInput',
    action: '确保指定 `MatChipInputEvent` 的 `chipInput`，因为现在它是必需的。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: 'v14 mixinErrorState',
    action:
      '在使用 `mixinErrorState` 的抽象类中，你需要实现 `stateChanges` 类成员，因为 mixin 不再提供它。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: 'v14 CdkStepper orientation',
    action: '使用 `CdkStepper.orientation`，而不是 `CdkStepper._orientation`。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: 'v14 CdkStepper and MatStepper',
    action:
      '如果你在构造函数中扩展或使用 `CdkStepper` 或 `MatStepper`，则不再需要传递 `_document` 参数，因为它现在已被移除。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: 'v14 mat-list-item-avatar',
    action: '将 `mat-list-item-avatar` CSS 类重命名为 `mat-list-item-with-avatar`。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: 'v14 MatSelectionListChange.option',
    action: '使用 `MatSelectionListChange.options`，而不是 `MatSelectionListChange.option`。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: 'v14 getHarnessLoaderForContent',
    action:
      '使用 `getChildLoader(MatListItemSection.CONTENT)`，而不是 `getHarnessLoaderForContent`。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    material: true,
    step: 'v14 MatSelectionList',
    action:
      '如果你正在使用 `MatSelectionList`，请确保在其构造函数中传递 `_focusMonitor`，因为现在它是必需的。此外，这个类不再具有 `tabIndex` 属性和 `tabIndex` 构造函数参数。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: 'v14 initialNavigation',
    action: '将 `initialNavigation: \'enabled\'` 更新为 `initialNavigation: \'enabledBlocking\'`。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: 'v14 Route.pathMatch',
    action:
      '如果你正在定义带有 `pathMatch` 的路由，可能需要将其显式转换为 `Route` 或 `Routes`。`Route.pathMatch` 不再兼容 `string` 类型。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: 'v14 stricter LoadChildrenCallback',
    action:
      '`LoadChildrenCallback` 返回的 Promise 现在具有更严格的类型参数 `Type<any>|NgModuleFactory<any>`，而不是 `any`。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: 'v14 router scheduling',
    action:
      '路由器不再在 `setTimeout` 内安排重定向导航。确保你的测试不依赖于这种行为。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: 'v14 LocationStrategy',
    action:
      '现在实现 `LocationStrategy` 接口需要定义 `getState()`。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: 'v14 http queries',
    action:
      '发送查询时不再需要对 `+` 进行处理，因为 `+` 不再发送空格。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: 'v14 AnimationDriver.getParentElement',
    action: '现在实现 `AnimationDriver` 需要 `getParentElement` 方法。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: 'v14 invalid config',
    action:
      '懒加载模块的无效路由配置现在会引发错误，而不是被忽略。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: 'v14 router resolver',
    action:
      '从 `RouterOutletContract.activateWith` 函数中移除 `resolver`，以及从 `OutletContext` 类中移除 `resolver`，因为不再需要工厂解析器。',
  },
  {
    possibleIn: 1400,
    necessaryAsOf: 1400,
    level: ApplicationComplexity.Advanced,
    step: 'v14 initialUrl',
    action:
      '`Router.initialUrl` 只接受 `UrlTree`，以防止通过分配 `string` 值来误用 API。',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: 'v15 base-decorators',
    action:
      '确保在具有继承构造函数和使用依赖注入的子类中使用基类中的装饰器。这样的基类应该用 `@Injectable` 或 `@Directive` 装饰，否则编译器会返回错误。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-05" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: 'v15 setDisabledState',
    action:
      '在 v15 中，当附加 `ControlValueAccessor` 时，始终调用 `setDisabledState`。要退出此行为，使用 `FormsModule.withConfig` 或 `ReactiveFormsModule.withConfig`。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-06" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Advanced,
    step: 'v15 canParse',
    action:
      '使用 `canParse` 的应用程序应该改为使用 `@angular/localize/tools` 中的 `analyze`。在 v15 中，从 `@angular/localize/tools` 的所有翻译解析器中删除了 `canParse` 方法。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-07" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: 'v15 ActivatedRoutSnapshot',
    action:
      '确保所有 `ActivatedRouteSnapshot` 对象都有 `title` 属性。在 v15 中，`title` 属性是 `ActivatedRouteSnapshot` 的必需属性。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-08" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Advanced,
    step: 'v15 RouterOutlet',
    action:
      '如果你的 `RouterOutlet` 测试出现问题，请确保它们不依赖于与变更检测相关的相应组件的实例化顺序。在 v15 中，`RouterOutlet` 在变更检测之后实例化组件。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-09" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: 'v15 relativeLinkResolution',
    action:
      '在 v15 中，`relativeLinkResolution` 在路由器中不可配置。它用于退出先前的错误修复，现在已成为标准。<a href="https://v15.angular.io/guide/update-to-version-15#v15-bc-10" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: 'v15 DATE_PIPE_DEFAULT_OPTIONS',
    action:
      '将 `DATE_PIPE_DEFAULT_TIMEZONE` 令牌的实例更改为使用 `DATE_PIPE_DEFAULT_OPTIONS` 配置时区。在 v15 中，`DATE_PIPE_DEFAULT_TIMEZONE` 令牌已过时。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-01" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: 'v15 iframe',
    action:
      "现有的 `<iframe>` 实例可能已经应用了安全敏感属性，作为属性或属性绑定。这些安全敏感属性可能出现在模板中或指令的宿主绑定中。这些情况需要更新，以确保符合对 `<iframe>` 绑定的新和更严格的规则。<a href='https://v15.angular.io/errors/NG0910' alt='错误页面的链接'>查看更多信息</a>",
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: 'v15 Injector.get',
    action:
      '更新使用 `InjectFlags` 参数的 `Injector.get()` 的实例，以使用 `InjectOptions` 参数。在 v15 中，`Injector.get()` 的 `InjectFlags` 参数已过时。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-02" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: 'v15 TestBed.inject',
    action:
      '更新使用 `InjectFlags` 参数的 `TestBed.inject()` 的实例，以使用 `InjectOptions` 参数。在 v15 中，`TestBed.inject()` 的 `InjectFlags` 参数已过时。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-01" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: 'v15 ngModule in providedIn',
    action:
      '在 v15 中，对 `@Injectable` 和 `InjectionToken` 使用 `providedIn: ngModule` 已过时。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-04" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: 'v15 providedIn any',
    action:
      '在 v15 中，对 `@Injectable` 或 `InjectionToken` 使用 `providedIn: \'any\'` 已过时。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-05" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Medium,
    step: 'v15 RouterLinkWithHref',
    action:
      '更新 `RouterLinkWithHref` 指令的实例以使用 `RouterLink` 指令。`RouterLinkWithHref` 指令在 v15 中已过时。<a href="https://v15.angular.io/guide/update-to-version-15#v15-dp-06" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    material: true,
    step: 'v15 mat refactor',
    action:
      '在 Angular Material v15 中，许多组件已被重构为基于官方 Material Design Components for Web (MDC)。这个变化影响了许多组件的 DOM 和 CSS 类。<a href="https://rc.material.angular.io/guide/mdc-migration" alt="有关此更改的更多信息">继续阅读</a>',
  },
  {
    possibleIn: 1500,
    necessaryAsOf: 1500,
    level: ApplicationComplexity.Basic,
    step: 'v15 visual review',
    action:
      '在将应用程序更新到 v15 后，通过视觉审查应用程序及其交互，确保一切正常运行。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: 'v16 node support',
    action:
      '确保在升级应用程序之前使用受支持的 node.js 版本。Angular v16 支持 node.js 版本：v16 和 v18。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: 'v16 ts support',
    action:
      '确保在升级应用程序之前使用受支持的 TypeScript 版本。Angular v16 支持 TypeScript 版本 4.9.3 或更高版本。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: 'v16 ng update',
    action:
      '在应用程序的项目目录中，运行 `ng update @angular/core@16 @angular/cli@16`，将应用程序更新到 Angular v16。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    material: true,
    step: 'update @angular/material',
    action: '运行 `ng update @angular/material@16`。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: 'v16 zone.js support',
    action:
      '在升级应用程序之前，请确保使用受支持的 Zone.js 版本。Angular v16 支持 Zone.js 版本 0.13.x 或更高版本。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 RouterEvent',
    action:
      'Event 联合体不再包含 `RouterEvent`，这意味着如果你正在使用 Event 类型，则可能必须将类型定义从 `(e: Event)` 更改为 `(e: Event|RouterEvent)`',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 routerEvent prop type',
    action:
      '除了 `NavigationEnd`，`routerEvent` 属性现在还接受类型 `NavigationSkipped`',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 RendererType2',
    action:
      '仅将扁平数组传递给 `RendererType2.styles`，因为它不再接受嵌套数组',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: 'v16 BrowserPlatformLocation',
    action:
      '你可能需要更新使用 `BrowserPlatformLocation` 的测试，因为 `MockPlatformLocation` 现在默认在测试中提供。[继续阅读](https://github.com/angular/angular/blob/main/CHANGELOG.md#common-9)',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: 'v16 ngcc',
    action:
      '由于在 v16 中删除了 Angular Compatibility Compiler (ngcc)，因此 v16 及更高版本的项目不再支持 View Engine 库。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: 'v16 createUrlTree',
    action:
      '在 `Router.createUrlTree` 中的错误修复后，你可能需要调整模拟 `ActiveRoute` 的测试。[继续阅读](https://github.com/angular/angular/blob/main/CHANGELOG.md#1600-next1-2023-03-01)',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: 'v16 ApplicationConfig imports',
    action: '将 `ApplicationConfig` 的导入更改为来自 `@angular/core`。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 renderModule',
    action:
      '修改代码以使用 `renderModule` 而不是 `renderModuleFactory`，因为后者已被删除。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: 'v16 XhrFactory',
    action:
      '修改代码，使用 `@angular/common` 中的 `XhrFactory` 而不是来自 `@angular/common/http` 的 `XhrFactory`。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: 'v16 withServerTransition',
    action:
      '如果你在同一页上运行多个 Angular 应用程序，并且使用了 `BrowserModule.withServerTransition({ appId: \'serverApp\' })`，请确保设置 `APP_ID`，因为 `withServerTransition` 现已过时。[继续阅读](https://github.com/angular/angular/blob/main/CHANGELOG.md#platform-browser-4)',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 EnvironmentInjector',
    action:
      '将 `EnvironmentInjector.runInContext` 更改为 `runInInjectionContext`，并将环境注入器作为第一个参数传递。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 ViewContainerRef.createComponent',
    action:
      '更新你的代码，使用 `ViewContainerRef.createComponent` 而不使用工厂解析器。`ComponentFactoryResolver` 已从 Router API 中移除。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 APP_ID',
    action: '如果在同一页上引导多个应用程序，请确保设置唯一的 `APP_IDs`。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 server renderApplication',
    action:
      '更新你的代码，修订 `renderApplication` 方法，因为它不再接受根组件作为第一个参数，而是应该引导你的应用程序的回调函数。[继续阅读](https://github.com/angular/angular/blob/main/CHANGELOG.md#platform-server-3)',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 PlatformConfig.baseUrl',
    action:
      '更新你的代码，删除对 `PlatformConfig.baseUrl` 和 `PlatformConfig.useAbsoluteUrl` platform-server 配置选项的任何引用，因为它已被弃用。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: 'v16 moduleid',
    action:
      '更新你的代码，删除对 `@Directive`/`@Component` `moduleId` 属性的任何引用，因为它不起作用，将在 v17 中删除。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: 'v16 transfer state imports',
    action:
      "从 `import {makeStateKey, StateKey, TransferState} from '@angular/platform-browser'` 更新导入到 `import {makeStateKey, StateKey, TransferState} from '@angular/core'`",
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 ComponentRef',
    action:
      '如果依赖于 `ComponentRef.setInput` 来设置组件输入，即使它基于 `Object.is` 相等性检查是相同的，请确保复制其值。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 ANALYZE_FOR_ENTRY_COMPONENTS',
    action:
      '更新你的代码，删除对 `ANALYZE_FOR_ENTRY_COMPONENTS` 注入令牌的任何引用，因为它已被删除。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: 'v16 entry components',
    action:
      '`entryComponents` 不再可用，并且可以从 `@NgModule` 和 `@Component` 公共 API 中删除任何对它的引用。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: 'v16 ngTemplateOutletContext',
    action:
      'ngTemplateOutletContext 具有更严格的类型检查，需要你在相应对象中声明所有属性。[继续阅读](https://github.com/angular/angular/blob/main/CHANGELOG.md#common-1).',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: 'v16 APF',
    action:
      'Angular 包不再包括 FESM2015，并且分布式 ECMScript 已从 2020 更新到 2022。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Advanced,
    step: 'v16 EventManager',
    action:
      '已删除已弃用的 `EventManager` 方法 `addGlobalEventListener`，因为它未被 Ivy 使用。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: 'v16 BrowserTransferStateModule',
    action:
      '`BrowserTransferStateModule` 不再可用，并且可以从你的应用程序中删除任何对它的引用。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Medium,
    step: 'v16 ReflectiveInjector',
    action:
      '更新你的代码，使用 `Injector.create` 而不是 `ReflectiveInjector`，因为 `ReflectiveInjector` 已被移除。',
  },
  {
    possibleIn: 1600,
    necessaryAsOf: 1600,
    level: ApplicationComplexity.Basic,
    step: 'v16 QueryList',
    action:
      '`QueryList.filter` 现在支持类型保护函数。由于类型将被缩小，你可能需要更新依赖于旧行为的应用程序代码。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: 'v17 node support',
    action:
      '在升级应用程序之前，请确保你正在使用受支持的 node.js 版本。Angular v17 支持 node.js 版本：v18.13.0 及更高版本。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: 'v17 ts support',
    action:
      '在升级应用程序之前，请确保你正在使用受支持的 TypeScript 版本。Angular v17 支持 TypeScript 版本 5.2 或更高版本。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: 'v17 zone.js support',
    action:
      '在升级应用程序之前，请确保你正在使用受支持的 Zone.js 版本。Angular v16 支持 Zone.js 版本 0.14.x 或更高版本。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: 'v17 ng update',
    action:
      '在应用程序的项目目录中运行 `ng update @angular/core@17 @angular/cli@17`，将你的应用程序升级到 Angular v17。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    material: true,
    step: 'update @angular/material',
    action: '运行 `ng update @angular/material@17`。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: 'v17 style removal',
    action:
      'Angular 现在会自动删除销毁组件的样式，这可能会影响到你现有的应用程序，特别是在你依赖于泄漏样式的情况下。要更改此设置，请将 `REMOVE_STYLES_ON_COMPONENT_DESTROY` 提供程序的值更改为 `false`。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: 'v17 router removals',
    action:
      '确保你在 `provideRouter` 或 `RouterModule.forRoot` 中配置 `setupTestingRouter`、`canceledNavigationResolution`、`paramsInheritanceStrategy`、`titleStrategy`、`urlUpdateStrategy`、`urlHandlingStrategy` 和 `malformedUriErrorHandler`，因为这些属性现在不再是 `Router` 的公共 API 的一部分。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Advanced,
    step: 'v17 ngDoCheck dynamic components',
    action:
      '对于动态实例化的组件，我们现在在变更检测期间执行 `ngDoCheck`，如果组件被标记为脏，则可能需要更新动态实例化组件的测试或 `ngDoCheck` 中的逻辑。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: 'v17 malformedUriErrorHandler',
    action:
      '在 `UrlSerializer.parse` 中处理 URL 解析错误，而不是 `malformedUriErrorHandler`，因为它现在是公共 API 的一部分。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: 'v17 zone deep imports',
    action:
      '将 Zone.js 的深度导入（如 `zone.js/bundles/zone-testing.js` 和 `zone.js/dist/zone`）更改为 `zone.js` 和 `zone.js/testing`。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Advanced,
    step: 'v17 absolute redirects',
    action:
      '你可能需要调整路由器配置以防止绝对重定向后的无限重定向。在 v17 中，我们不再在绝对重定向后阻止额外的重定向。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: 'v17 AnimationDriver',
    action:
      '将对 `AnimationDriver.NOOP` 的引用更改为使用 `NoopAnimationDriver`，因为 `AnimationDriver.NOOP` 现在已被弃用。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: 'v17 switch strictness',
    action:
      '你可能需要调整 `NgSwitch` 的相等性检查，因为现在默认采用更严格的 `===` 而不是 `==`。Angular 将为需要提供调整的用法记录警告消息。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Advanced,
    step: 'v17 mutate in signals',
    action:
      '在 Angular 信号中使用 `update` 代替 `mutate`。例如，`items.mutate(itemsArray => itemsArray.push(newItem));` 现在是 `items.update(itemsArray => [itemsArray, …newItem]);`',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Medium,
    step: 'v17 withNoDomReuse',
    action:
      '要禁用水合作用，请使用 `ngSkipHydration` 或从提供程序列表中删除 `provideClientHydration` 调用，因为 `withNoDomReuse` 不再是公共 API 的一部分。',
  },
  {
    possibleIn: 1700,
    necessaryAsOf: 1700,
    level: ApplicationComplexity.Basic,
    step: 'v17 paramsInheritanceStrategy',
    action:
      '如果你希望 `loadComponent` 路由的子路由从其父路由继承数据，请将 `paramsInheritanceStrategy` 指定为 `always`，在 v17 中，现在设置为 `emptyOnly`。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    step: 'v18 node support',
    action:
      '在升级应用程序之前，请确保你正在使用受支持的 node.js 版本。Angular v18 支持 node.js 版本：v18.19.0 及更高版本。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    step: 'v18 ng update',
    action:
      '在应用程序的项目目录中运行 `ng update @angular/core@18 @angular/cli@18`，将你的应用程序升级到 Angular v18。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    material: true,
    step: 'update @angular/material',
    action: '运行 `ng update @angular/material@18`。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Basic,
    step: '18.0.0 Upgrade TypeScript',
    action: '将 TypeScript 更新到 5.4 版本或更高版本。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0: async has been removed, use `waitForAsync` instead',
    action: '从 `@angular/core` 中替换 `async` 为 `waitForAsync`。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0: Deprecated matchesElement method removed from AnimationDriver',
    action: '删除对 `matchesElement` 的调用，因为它现在不再是 `AnimationDriver` 的一部分。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: '18.0.0. Use `@angular/core` StateKey and TransferState',
    action:
      '从 `@angular/core` 中导入 `StateKey` 和 `TransferState`，而不是 `@angular/platform-browser`。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: '18.0.0. Opt-out of caching for HTTP requests with auth headers',
    action:
      '在 `withHttpTransferCache` 中使用 `includeRequestsWithAuthHeaders: true` 以选择不缓存需要授权的 HTTP 请求。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0.REMOVE_OBSOLETE_IS_WORKER',
    action:
      '更新应用程序以删除 `isPlatformWorkerUi` 和 `isPlatformWorkerApp`，因为它们是平台 WebWorker 的一部分，而现在不再是 Angular 的一部分。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: '18.0.0.FORCE_ZONE_CHANGE_DETECTION',
    action:
      '测试可能需要运行额外的变更检测轮次，以完全反映 DOM 中的测试状态。作为最后的手段，通过将 `provideZoneChangeDetection({ignoreChangesOutsideZone: true})` 添加到 TestBed 的提供程序中，恢复旧的行为。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: '18.0.0: Remove two-way binding expressions in writable bindings',
    action: '删除在使用 `[(ngModel)]` 的模板中写入属性的表达式。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0: Use zones to track pending requests',
    action:
      '删除对 `Testability` 方法 `increasePendingRequestCount`、`decreasePendingRequestCount` 和 `getPendingRequestCount` 的调用。这些信息由 ZoneJS 跟踪。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: '18.0.0: Move shared providers to the routed component',
    action:
      '将应该对路由组件可用的任何环境提供者从定义 `RouterOutlet` 的组件移动到 `bootstrapApplication` 或 `Route` 配置的提供者中。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0 Use RedirectCommand or new NavigationBehaviorOptions',
    action:
      '当守卫将 `UrlTree` 作为重定向返回时，重定向导航现在将使用 `replaceUrl`，如果初始导航也使用了 `replaceUrl` 选项。如果你希望保留以前的行为，请使用新的 `NavigationBehaviorOptions` 配置重定向，方法是返回具有所需选项的 `RedirectCommand` 而不是 `UrlTree`。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0: Remove deprecated resource cache providers',
    action:
      '删除 `RESOURCE_CACHE_PROVIDER` 的依赖项，因为它不再是 Angular 运行时的一部分。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0: Update Node.js URL parsing in `ServerPlatformLocation`',
    action:
      '在 `@angular/platform-server` 中，现在 `pathname` 总是以 `/` 结尾，而 http: 和 https: 的默认端口分别是 80 和 443。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: '18.0.0. Use absolute URLs',
    action:
      '提供绝对 `url`，而不是使用 `PlatformConfig` 中的 `useAbsoluteUrl` 和 `baseUrl`。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0. Switch from `platformDynamicServer` to `platformServer`.',
    action:
      '将 `platformDynamicServer` 的用法替换为 `platformServer`。另外，添加一个 `import @angular/compiler`。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: '18.0.0. Remove `ServerTransferStateModule` from app imports',
    action:
      '从应用程序中删除所有对 `ServerTransferStateModule` 的导入。它不再需要。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0. Update `Route.redirectTo` to accept functions',
    action:
      '`Route.redirectTo` 现在可以接受函数，而不仅仅是字符串。任何直接读取 `Route` 对象并期望 `redirectTo` 是字符串的代码可能需要更新，以考虑函数。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0: Guards can return `RedirectCommand`',
    action:
      '除了 `UrlTree` 和 `boolean`，`Route` 守卫和解析器现在还可以返回一个 `RedirectCommand` 对象。任何直接读取 `Route` 对象并期望只有 `boolean` 或 `UrlTree` 的代码可能需要更新，以考虑 `RedirectCommand`。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Medium,
    step: '18.0.0: Mark `OnPush` views dirty',
    action:
      '对于使用 `OnPush` 变更检测的任何组件，请确保它们被正确标记为脏，以启用宿主绑定更新。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0-Refresh-Newly-Created-Views',
    action:
      '请注意，新创建的视图或在变更检测期间标记为检查并重新附加的视图现在保证在同一变更检测周期中刷新。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0: `ComponentFixture.whenStable` matches `ApplicationRef.isStable`',
    action:
      '在调整 `ComponentFixture.whenStable` 和 `ApplicationRef.isStable` 语义后，使用 `whenStable` 时你的测试可能需要更长时间等待。',
  },
  {
    possibleIn: 1800,
    necessaryAsOf: 1800,
    level: ApplicationComplexity.Advanced,
    step: '18.0.0. `ComponentFixture.autoDetect` behavior more closely matches Application behavior',
    action:
      '如果你的测试依赖于 `ComponentFixture.autoDetect` 的变更检测执行顺序，可能会遇到测试失败，因为它现在会在 `ApplicationRef.tick` 中执行测试夹具的变更检测。例如，这将导致测试夹具在创建任何对话框之前刷新，而以前可能相反。',
  },
];
