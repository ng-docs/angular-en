/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {NavigationItem} from '@angular/docs';

// These 2 imports are expected to be red because they are generated a build time
import FIRST_APP_TUTORIAL_NAV_DATA from '../../src/assets/tutorials/first-app/routes.json';
import LEARN_ANGULAR_TUTORIAL_NAV_DATA from '../../src/assets/tutorials/learn-angular/routes.json';

import {DefaultPage} from './core/enums/pages';
import {getApiNavigationItems} from './features/references/helpers/manifest.helper';

interface SubNavigationData {
  docs: NavigationItem[];
  reference: NavigationItem[];
  tutorials: NavigationItem[];
  footer: NavigationItem[];
}

const DOCS_SUB_NAVIGATION_DATA: NavigationItem[] = [
  {
    label: '简介',
    children: [
      {
        label: '什么是 Angular？',
        path: 'overview',
        contentPath: 'introduction/what-is-angular',
      },
      {
        label: '基本要点',
        children: [
          {
            label: '概览',
            path: 'essentials',
            contentPath: 'introduction/essentials/overview',
          },
          {
            label: '用组件搭建应用',
            path: 'essentials/components',
            contentPath: 'introduction/essentials/components',
          },
          {
            label: '管理动态数据',
            path: 'essentials/managing-dynamic-data',
            contentPath: 'introduction/essentials/managing-dynamic-data',
          },
          {
            label: '渲染动态模板',
            path: 'essentials/rendering-dynamic-templates',
            contentPath: 'introduction/essentials/rendering-dynamic-templates',
          },
          {
            label: '条件与循环',
            path: 'essentials/conditionals-and-loops',
            contentPath: 'introduction/essentials/conditionals-and-loops',
          },
          {
            label: '处理用户交互',
            path: 'essentials/handling-user-interaction',
            contentPath: 'introduction/essentials/handling-user-interaction',
          },
          {
            label: '共享逻辑',
            path: 'essentials/sharing-logic',
            contentPath: 'introduction/essentials/sharing-logic',
          },
          {
            label: '后续步骤',
            path: 'essentials/next-steps',
            contentPath: 'introduction/essentials/next-steps',
          },
        ],
      },
      {
        label: '开始编码！🚀',
        path: 'tutorials/learn-angular',
      },
    ],
  },
  {
    label: '深度指南',
    children: [
      {
        label: '组件',
        children: [
          {
            label: '组件的剖析',
            path: 'guide/components',
            contentPath: 'guide/components/anatomy-of-components',
          },
          {
            label: '导入并使用组件',
            path: 'guide/components/importing',
            contentPath: 'guide/components/importing',
          },
          {
            label: '选择器',
            path: 'guide/components/selectors',
            contentPath: 'guide/components/selectors',
          },
          {
            label: '指定样式',
            path: 'guide/components/styling',
            contentPath: 'guide/components/styling',
          },
          {
            label: '通过输入属性接收数据',
            path: 'guide/components/inputs',
            contentPath: 'guide/components/inputs',
          },
          {
            label: '使用输出属性自定义事件',
            path: 'guide/components/outputs',
            contentPath: 'guide/components/outputs',
          },
          {
            label: 'output() 函数',
            path: 'guide/components/output-fn',
            contentPath: 'guide/components/output-function',
          },
          {
            label: '使用 ng-content 进行内容投影',
            path: 'guide/components/content-projection',
            contentPath: 'guide/components/content-projection',
          },
          {
            label: '宿主元素',
            path: 'guide/components/host-elements',
            contentPath: 'guide/components/host-elements',
          },
          {
            label: '生命周期',
            path: 'guide/components/lifecycle',
            contentPath: 'guide/components/lifecycle',
          },
          {
            label: '使用查询引用组件的子元素',
            path: 'guide/components/queries',
            contentPath: 'guide/components/queries',
          },
          {
            label: '使用 DOM API',
            path: 'guide/components/dom-apis',
            contentPath: 'guide/components/dom-apis',
          },
          {
            label: '继承',
            path: 'guide/components/inheritance',
            contentPath: 'guide/components/inheritance',
          },
          {
            label: '以编程方式渲染组件',
            path: 'guide/components/programmatic-rendering',
            contentPath: 'guide/components/programmatic-rendering',
          },
          {
            label: '高级配置',
            path: 'guide/components/advanced-configuration',
            contentPath: 'guide/components/advanced-configuration',
          },
          {
            label: '自定义元素',
            path: 'guide/elements',
            contentPath: 'guide/elements',
          },
        ],
      },
      {
        label: '模板语法',
        children: [
          {
            label: '概览',
            path: 'guide/templates',
            contentPath: 'guide/templates/overview',
          },
          {
            label: '文本插值',
            path: 'guide/templates/interpolation',
            contentPath: 'guide/templates/interpolation',
          },
          {
            label: '模板语句',
            path: 'guide/templates/template-statements',
            contentPath: 'guide/templates/template-statements',
          },
          {
            label: '理解绑定',
            path: 'guide/templates/binding',
            contentPath: 'guide/templates/binding',
          },
          {
            label: '属性绑定（Property）',
            path: 'guide/templates/property-binding',
            contentPath: 'guide/templates/property-binding',
          },
          {
            label: '属性绑定最佳实践',
            path: 'guide/templates/property-binding-best-practices',
            contentPath: 'guide/templates/property-binding-best-practices',
          },
          {
            label: '属性绑定（Attribute）',
            path: 'guide/templates/attribute-binding',
            contentPath: 'guide/templates/attribute-binding',
          },
          {
            label: '类绑定与样式绑定',
            path: 'guide/templates/class-binding',
            contentPath: 'guide/templates/class-binding',
          },
          {
            label: '事件绑定',
            path: 'guide/templates/event-binding',
            contentPath: 'guide/templates/event-binding',
          },
          {
            label: '双向绑定',
            path: 'guide/templates/two-way-binding',
            contentPath: 'guide/templates/two-way-binding',
          },
          {
            label: '控制流',
            path: 'guide/templates/control-flow',
            contentPath: 'guide/templates/control-flow',
          },
          {
            label: '管道',
            children: [
              {
                label: '概览',
                path: 'guide/pipes',
                contentPath: 'guide/pipes/overview',
              },
              {
                label: '在模板中使用管道',
                path: 'guide/pipes/template',
                contentPath: 'guide/pipes/template',
              },
              {
                label: '自定义管道',
                path: 'guide/pipes/transform-data',
                contentPath: 'guide/pipes/transform-data',
              },
              {
                label: '表达式中的管道优先级',
                path: 'guide/pipes/precedence',
                contentPath: 'guide/pipes/precedence',
              },
              {
                label: '涉及管道的变更检测',
                path: 'guide/pipes/change-detection',
                contentPath: 'guide/pipes/change-detection',
              },
              {
                label: '从可观察者中解包数据',
                path: 'guide/pipes/unwrapping-data-observables',
                contentPath: 'guide/pipes/unwrapping-data-observables',
              },
            ],
          },
          {
            label: '模板引用变量',
            path: 'guide/templates/reference-variables',
            contentPath: 'guide/templates/reference-variables',
          },
          {
            label: '以 SVG 充当模板',
            path: 'guide/templates/svg-in-templates',
            contentPath: 'guide/templates/svg-in-templates',
          },
        ],
      },
      {
        label: '指令',
        children: [
          {
            label: '概览',
            path: 'guide/directives',
            contentPath: 'guide/directives/overview',
          },
          {
            label: '属性型指令',
            path: 'guide/directives/attribute-directives',
            contentPath: 'guide/directives/attribute-directives',
          },
          {
            label: '结构型指令',
            path: 'guide/directives/structural-directives',
            contentPath: 'guide/directives/structural-directives',
          },
          {
            label: '指令组合 API',
            path: 'guide/directives/directive-composition-api',
            contentPath: 'guide/directives/directive-composition-api',
          },
        ],
      },
      {
        label: '依赖注入',
        children: [
          {
            label: '概览',
            path: 'guide/di',
            contentPath: 'guide/di/overview',
          },
          {
            label: '理解依赖注入',
            path: 'guide/di/dependency-injection',
            contentPath: 'guide/di/dependency-injection',
          },
          {
            label: '创建可注入服务',
            path: 'guide/di/creating-injectable-service',
            contentPath: 'guide/di/creating-injectable-service',
          },
          {
            label: '定义依赖提供者',
            path: 'guide/di/dependency-injection-providers',
            contentPath: 'guide/di/dependency-injection-providers',
          },
          {
            label: '注入上下文',
            path: 'guide/di/dependency-injection-context',
            contentPath: 'guide/di/dependency-injection-context',
          },
          {
            label: '分层注入器',
            path: 'guide/di/hierarchical-dependency-injection',
            contentPath: 'guide/di/hierarchical-dependency-injection',
          },
          {
            label: '优化注入令牌',
            path: 'guide/di/lightweight-injection-tokens',
            contentPath: 'guide/di/lightweight-injection-tokens',
          },
          {
            label: 'DI 的实际应用',
            path: 'guide/di/di-in-action',
            contentPath: 'guide/di/di-in-action',
          },
        ],
      },
      {
        label: '信号',
        children: [
          {
            label: '概览',
            path: 'guide/signals',
            contentPath: 'guide/signals/overview',
          },
          {
            label: 'RxJS 互操作',
            path: 'guide/signals/rxjs-interop',
            contentPath: 'guide/signals/rxjs-interop',
          },
          {
            label: '以输入属性充当信号',
            path: 'guide/signals/inputs',
            contentPath: 'guide/signals/inputs',
          },
          {
            label: '模型输入',
            path: 'guide/signals/model',
            contentPath: 'guide/signals/model',
          },
          {
            label: '以查询充当信号',
            path: 'guide/signals/queries',
            contentPath: 'guide/signals/queries',
          },
        ],
      },
      {
        label: '路由',
        children: [
          {
            label: '概览',
            path: 'guide/routing',
            contentPath: 'guide/routing/overview',
          },
          {
            label: '常见的路由任务',
            path: 'guide/routing/common-router-tasks',
            contentPath: 'guide/routing/common-router-tasks',
          },
          {
            label: '单页面应用中的路由',
            path: 'guide/routing/router-tutorial',
            contentPath: 'guide/routing/router-tutorial',
          },
          {
            label: '创建自定义路由匹配规则',
            path: 'guide/routing/routing-with-urlmatcher',
            contentPath: 'guide/routing/routing-with-urlmatcher',
          },
          {
            label: '路由器参考手册',
            path: 'guide/routing/router-reference',
            contentPath: 'guide/routing/router-reference',
          },
        ],
      },
      {
        label: '表单',
        children: [
          {
            label: '概览',
            path: 'guide/forms',
            contentPath: 'guide/forms/overview',
          },
          {
            label: '响应式表单',
            path: 'guide/forms/reactive-forms',
            contentPath: 'guide/forms/reactive-forms',
          },
          {
            label: '严格类型化的响应式表单',
            path: 'guide/forms/typed-forms',
            contentPath: 'guide/forms/typed-forms',
          },
          {
            label: '模板驱动表单',
            path: 'guide/forms/template-driven-forms',
            contentPath: 'guide/forms/template-driven-forms',
          },
          {
            label: '验证表单输入',
            path: 'guide/forms/form-validation',
            contentPath: 'guide/forms/form-validation',
          },
          {
            label: '绑定动态表单',
            path: 'guide/forms/dynamic-forms',
            contentPath: 'guide/forms/dynamic-forms',
          },
        ],
      },
      {
        label: 'HTTP 客户端',
        children: [
          {
            label: '概览',
            path: 'guide/http',
            contentPath: 'guide/http/overview',
          },
          {
            label: '设置 HttpClient',
            path: 'guide/http/setup',
            contentPath: 'guide/http/setup',
          },
          {
            label: '发起请求',
            path: 'guide/http/making-requests',
            contentPath: 'guide/http/making-requests',
          },
          {
            label: '拦截请求与响应',
            path: 'guide/http/interceptors',
            contentPath: 'guide/http/interceptors',
          },
          {
            label: '测试',
            path: 'guide/http/testing',
            contentPath: 'guide/http/testing',
          },
        ],
      },
      {
        label: '性能',
        children: [
          {
            label: '可延迟视图',
            path: 'guide/defer',
            contentPath: 'guide/defer',
          },
          {
            label: '图像优化',
            path: 'guide/image-optimization',
            contentPath: 'guide/image-optimization',
          },
          {
            label: '服务端渲染',
            path: 'guide/ssr',
            contentPath: 'guide/ssr',
          },
          {
            label: '构建期预渲染',
            path: 'guide/prerendering',
            contentPath: 'guide/prerendering',
          },
          {
            label: '水合',
            path: 'guide/hydration',
            contentPath: 'guide/hydration',
          },
        ],
      },
      {
        label: '测试',
        children: [
          {
            label: '概览',
            path: 'guide/testing',
            contentPath: 'guide/testing/overview',
          },
          {
            label: '测试覆盖率',
            path: 'guide/testing/code-coverage',
            contentPath: 'guide/testing/code-coverage',
          },
          {
            label: '测试服务',
            path: 'guide/testing/services',
            contentPath: 'guide/testing/services',
          },
          {
            label: '组件测试基础',
            path: 'guide/testing/components-basics',
            contentPath: 'guide/testing/components-basics',
          },
          {
            label: '组件测试场景',
            path: 'guide/testing/components-scenarios',
            contentPath: 'guide/testing/components-scenarios',
          },
          {
            label: '测试属性型指令',
            path: 'guide/testing/attribute-directives',
            contentPath: 'guide/testing/attribute-directives',
          },
          {
            label: '测试管道',
            path: 'guide/testing/pipes',
            contentPath: 'guide/testing/pipes',
          },
          {
            label: '调试测试代码',
            path: 'guide/testing/debugging',
            contentPath: 'guide/testing/debugging',
          },
          {
            label: '测试实用工具 API',
            path: 'guide/testing/utility-apis',
            contentPath: 'guide/testing/utility-apis',
          },
        ],
      },
      {
        label: '国际化',
        children: [
          {
            label: '概览',
            path: 'guide/i18n',
            contentPath: 'guide/i18n/overview',
          },
          {
            label: '添加 localize 包',
            path: 'guide/i18n/add-package',
            contentPath: 'guide/i18n/add-package',
          },
          {
            label: '通过 ID 引用语言环境',
            path: 'guide/i18n/locale-id',
            contentPath: 'guide/i18n/locale-id',
          },
          {
            label: '基于语言环境格式化数据',
            path: 'guide/i18n/format-data-locale',
            contentPath: 'guide/i18n/format-data-locale',
          },
          {
            label: '为翻译准备组件',
            path: 'guide/i18n/prepare',
            contentPath: 'guide/i18n/prepare',
          },
          {
            label: '使用翻译结果文件',
            path: 'guide/i18n/translation-files',
            contentPath: 'guide/i18n/translation-files',
          },
          {
            label: '把翻译结果并入应用',
            path: 'guide/i18n/merge',
            contentPath: 'guide/i18n/merge',
          },
          {
            label: '部署多个语言环境',
            path: 'guide/i18n/deploy',
            contentPath: 'guide/i18n/deploy',
          },
          {
            label: '导入语言环境数据的全局变体',
            path: 'guide/i18n/import-global-variants',
            contentPath: 'guide/i18n/import-global-variants',
          },
          {
            label: '使用自定义 ID 管理已标记的文本',
            path: 'guide/i18n/manage-marked-text',
            contentPath: 'guide/i18n/manage-marked-text',
          },
          {
            label: '范例 Angular 应用',
            path: 'guide/i18n/example',
            contentPath: 'guide/i18n/example',
          },
        ],
      },
      {
        label: '动画',
        children: [
          {
            label: '概览',
            path: 'guide/animations',
            contentPath: 'guide/animations/overview',
          },
          {
            label: '过渡与触发器',
            path: 'guide/animations/transition-and-triggers',
            contentPath: 'guide/animations/transition-and-triggers',
          },
          {
            label: '复杂序列',
            path: 'guide/animations/complex-sequences',
            contentPath: 'guide/animations/complex-sequences',
          },
          {
            label: '可复用动画',
            path: 'guide/animations/reusable-animations',
            contentPath: 'guide/animations/reusable-animations',
          },
          {
            label: '路由过渡动画',
            path: 'guide/animations/route-animations',
            contentPath: 'guide/animations/route-animations',
          },
        ],
      },
      {
        label: '试验特性',
        children: [
          {label: 'Zoneless', path: 'guide/experimental/zoneless', contentPath: 'guide/zoneless'},
        ],
      },
    ],
  },
  {
    label: '开发者工具',
    children: [
      {
        label: 'Angular CLI',
        children: [
          {
            label: '概览',
            path: 'tools/cli',
            contentPath: 'tools/cli/overview',
          },
          {
            label: '本地安装',
            path: 'tools/cli/setup-local',
            contentPath: 'tools/cli/setup-local',
          },
          {
            label: '构建 Angular 应用',
            path: 'tools/cli/build',
            contentPath: 'tools/cli/build',
          },
          {
            label: '为 Angular 应用启动开发服务器',
            path: 'tools/cli/serve',
            contentPath: 'tools/cli/serve',
          },
          {
            label: '部署',
            path: 'tools/cli/deployment',
            contentPath: 'tools/cli/deployment',
          },
          {
            label: '端到端测试',
            path: 'tools/cli/end-to-end',
            contentPath: 'tools/cli/end-to-end',
          },
          {
            label: '迁移到新的构建体系',
            path: 'tools/cli/build-system-migration',
            contentPath: 'tools/cli/build-system-migration',
          },
          {
            label: '构建环境',
            path: 'tools/cli/environments',
            contentPath: 'tools/cli/environments',
          },
          {
            label: 'Angular CLI 构建器',
            path: 'tools/cli/cli-builder',
            contentPath: 'tools/cli/cli-builder',
          },
          {
            label: '使用原理图生成代码',
            path: 'tools/cli/schematics',
            contentPath: 'tools/cli/schematics',
          },
          {
            label: '制作原理图',
            path: 'tools/cli/schematics-authoring',
            contentPath: 'tools/cli/schematics-authoring',
          },
          {
            label: '各种库的原理图',
            path: 'tools/cli/schematics-for-libraries',
            contentPath: 'tools/cli/schematics-for-libraries',
          },
          {
            label: '模板类型检查',
            path: 'tools/cli/template-typecheck',
            contentPath: 'tools/cli/template-typecheck',
          },
          {
            label: '预先编译（AOT）',
            path: 'tools/cli/aot-compiler',
            contentPath: 'tools/cli/aot-compiler',
          },
          {
            label: 'AOT 元数据错误',
            path: 'tools/cli/aot-metadata-errors',
            contentPath: 'tools/cli/aot-metadata-errors',
          },
        ],
      },
      {
        label: '库',
        children: [
          {
            label: '概览',
            path: 'tools/libraries',
            contentPath: 'tools/libraries/overview',
          },
          {
            label: '创建库',
            path: 'tools/libraries/creating-libraries',
            contentPath: 'tools/libraries/creating-libraries',
          },
          {
            label: '使用库',
            path: 'tools/libraries/using-libraries',
            contentPath: 'tools/libraries/using-libraries',
          },
          {
            label: 'Angular 包格式',
            path: 'tools/libraries/angular-package-format',
            contentPath: 'tools/libraries/angular-package-format',
          },
        ],
      },
      {
        label: '开发工具',
        path: 'tools/devtools',
        contentPath: 'tools/devtools',
      },
      {
        label: '语言服务',
        path: 'tools/language-service',
        contentPath: 'tools/language-service',
      },
    ],
  },
  {
    label: '最佳实践',
    children: [
      {
        label: '风格指南',
        path: 'style-guide',
        contentPath: 'best-practices/style-guide',
      },
      {
        label: '安全性',
        path: 'best-practices/security',
        contentPath: 'guide/security', // Have not refactored due to build issues
      },
      {
        label: '无障碍性',
        path: 'best-practices/a11y',
        contentPath: 'best-practices/a11y',
      },
      {
        label: '性能',
        children: [
          {
            label: '概览',
            path: 'best-practices/runtime-performance',
            contentPath: 'best-practices/runtime-performance/overview',
          },
          {
            label: 'Zone 污染',
            path: 'best-practices/zone-pollution',
            contentPath: 'best-practices/runtime-performance/zone-pollution',
          },
          {
            label: '慢速计算',
            path: 'best-practices/slow-computations',
            contentPath: 'best-practices/runtime-performance/slow-computations',
          },
          {
            label: '跳过组件的子树',
            path: 'best-practices/skipping-subtrees',
            contentPath: 'best-practices/runtime-performance/skipping-subtrees',
          },
        ],
      },
      {
        label: '保持更新',
        path: 'update',
        contentPath: 'best-practices/update',
      },
    ],
  },
  {
    label: '扩展生态系统',
    children: [
      {
        label: 'Service Worker 与 PWA',
        children: [
          {
            label: '概览',
            path: 'ecosystem/service-workers',
            contentPath: 'ecosystem/service-workers/overview',
          },
          {
            label: '快速上手',
            path: 'ecosystem/service-workers/getting-started',
            contentPath: 'ecosystem/service-workers/getting-started',
          },
          {
            label: '配置文件',
            path: 'ecosystem/service-workers/config',
            contentPath: 'ecosystem/service-workers/config',
          },
          {
            label: '与 Service Worker 通讯',
            path: 'ecosystem/service-workers/communications',
            contentPath: 'ecosystem/service-workers/communications',
          },
          {
            label: '推送通知',
            path: 'ecosystem/service-workers/push-notifications',
            contentPath: 'ecosystem/service-workers/push-notifications',
          },
          {
            label: 'Service Worker 的 DevOps',
            path: 'ecosystem/service-workers/devops',
            contentPath: 'ecosystem/service-workers/devops',
          },
          {
            label: 'App 外壳模式',
            path: 'ecosystem/service-workers/app-shell',
            contentPath: 'ecosystem/service-workers/app-shell',
          },
        ],
      },
      {
        label: 'Web worker',
        path: 'ecosystem/web-workers',
        contentPath: 'ecosystem/web-workers',
      },
      {
        label: 'Angular Fire',
        path: 'https://github.com/angular/angularfire#readme',
      },
      {
        label: 'Google 地图',
        path: 'https://github.com/angular/components/tree/main/src/google-maps#readme',
      },
      {
        label: 'Google 支付',
        path: 'https://github.com/google-pay/google-pay-button#angular',
      },
      {
        label: 'YouTube 播放器',
        path: 'https://github.com/angular/components/blob/main/src/youtube-player/README.md',
      },
      {
        label: 'Angular CDK',
        path: 'https://material.angular.io/cdk/categories',
      },
      {
        label: 'Angular Material',
        path: 'https://material.angular.io/',
      },
    ],
  },
];

export const TUTORIALS_SUB_NAVIGATION_DATA: NavigationItem[] = [
  FIRST_APP_TUTORIAL_NAV_DATA,
  LEARN_ANGULAR_TUTORIAL_NAV_DATA,
  {
    path: DefaultPage.TUTORIALS,
    contentPath: 'tutorials/home',
    label: '教程',
  },
];

const REFERENCE_SUB_NAVIGATION_DATA: NavigationItem[] = [
  {
    label: '路线图',
    path: 'roadmap',
    contentPath: 'reference/roadmap',
  },
  {
    label: '参与开发',
    path: 'https://github.com/angular/angular/blob/main/CONTRIBUTING.md',
  },
  {
    label: 'API 参考手册',
    children: [
      {
        label: '概览',
        path: 'api',
      },
      ...getApiNavigationItems(),
    ],
  },
  {
    label: 'CLI 参考手册',
    children: [
      {
        label: '概览',
        path: 'cli',
        contentPath: 'reference/cli',
      },
      {
        label: 'ng add',
        path: 'cli/add',
      },
      {
        label: 'ng analytics',
        children: [
          {
            label: '概览',
            path: 'cli/analytics',
          },
          {
            label: 'disable',
            path: 'cli/analytics/disable',
          },
          {
            label: 'enable',
            path: 'cli/analytics/enable',
          },
          {
            label: 'info',
            path: 'cli/analytics/info',
          },
          {
            label: 'prompt',
            path: 'cli/analytics/prompt',
          },
        ],
      },
      {
        label: 'ng build',
        path: 'cli/build',
      },
      {
        label: 'ng cache',
        children: [
          {
            label: '概览',
            path: 'cli/cache',
          },
          {
            label: 'clear',
            path: 'cli/cache/clean',
          },
          {
            label: 'disable',
            path: 'cli/cache/disable',
          },
          {
            label: 'enable',
            path: 'cli/cache/enable',
          },
          {
            label: 'info',
            path: 'cli/cache/info',
          },
        ],
      },
      {
        label: 'ng completion',
        children: [
          {
            label: '概览',
            path: 'cli/completion',
          },
          {
            label: 'script',
            path: 'cli/completion/script',
          },
        ],
      },
      {
        label: 'ng config',
        path: 'cli/config',
      },
      {
        label: 'ng deploy',
        path: 'cli/deploy',
      },
      {
        label: 'ng e2e',
        path: 'cli/e2e',
      },
      {
        label: 'ng extract-i18n',
        path: 'cli/extract-i18n',
      },
      {
        label: 'ng generate',
        children: [
          {
            label: '概览',
            path: 'cli/generate',
          },
          {
            label: 'app-shell',
            path: 'cli/generate/app-shell',
          },
          {
            label: 'application',
            path: 'cli/generate/application',
          },
          {
            label: 'class',
            path: 'cli/generate/class',
          },
          {
            label: 'component',
            path: 'cli/generate/component',
          },
          {
            label: 'config',
            path: 'cli/generate/config',
          },
          {
            label: 'enum',
            path: 'cli/generate/enum',
          },
          {
            label: 'environments',
            path: 'cli/generate/environments',
          },
          {
            label: 'guard',
            path: 'cli/generate/guard',
          },
          {
            label: 'interceptor',
            path: 'cli/generate/interceptor',
          },
          {
            label: 'interface',
            path: 'cli/generate/interface',
          },
          {
            label: 'library',
            path: 'cli/generate/library',
          },
          {
            label: 'module',
            path: 'cli/generate/module',
          },
          {
            label: 'pipe',
            path: 'cli/generate/pipe',
          },
          {
            label: 'resolver',
            path: 'cli/generate/resolver',
          },
          {
            label: 'service-worker',
            path: 'cli/generate/service-worker',
          },
          {
            label: 'service',
            path: 'cli/generate/service',
          },
          {
            label: 'web-worker',
            path: 'cli/generate/web-worker',
          },
        ],
      },
      {
        label: 'ng lint',
        path: 'cli/lint',
      },
      {
        label: 'ng new',
        path: 'cli/new',
      },
      {
        label: 'ng run',
        path: 'cli/run',
      },
      {
        label: 'ng serve',
        path: 'cli/serve',
      },
      {
        label: 'ng test',
        path: 'cli/test',
      },
      {
        label: 'ng update',
        path: 'cli/update',
      },
      {
        label: 'ng version',
        path: 'cli/version',
      },
    ],
  },
  {
    label: '错误百科',
    children: [
      {
        label: '概览',
        path: 'errors',
        contentPath: 'reference/errors/overview',
      },
      {
        label: 'NG0100: 检查后表达式发生了变化',
        path: 'errors/NG0100',
        contentPath: 'reference/errors/NG0100',
      },
      {
        label: 'NG01101: 错误的异步验证器返回类型',
        path: 'errors/NG01101',
        contentPath: 'reference/errors/NG01101',
      },
      {
        label: 'NG01203: 缺少值访问器',
        path: 'errors/NG01203',
        contentPath: 'reference/errors/NG01203',
      },
      {
        label: 'NG0200: DI 中的循环依赖',
        path: 'errors/NG0200',
        contentPath: 'reference/errors/NG0200',
      },
      {
        label: 'NG0201: 找不到提供者',
        path: 'errors/NG0201',
        contentPath: 'reference/errors/NG0201',
      },
      {
        label: 'NG0203: `inject()` 必须从一个注入上下文中调用',
        path: 'errors/NG0203',
        contentPath: 'reference/errors/NG0203',
      },
      {
        label: 'NG0209: 无效的多重提供者',
        path: 'errors/NG0209',
        contentPath: 'reference/errors/NG0209',
      },
      {
        label: 'NG02200: 缺少可迭代者差分器',
        path: 'errors/NG02200',
        contentPath: 'reference/errors/NG02200',
      },
      {
        label: 'NG02800: HttpClient 配置中的 JSONP 支持',
        path: 'errors/NG02800',
        contentPath: 'reference/errors/NG02800',
      },
      {
        label: 'NG0300: 选择器冲突',
        path: 'errors/NG0300',
        contentPath: 'reference/errors/NG0300',
      },
      {
        label: 'NG0301: 找不到导出',
        path: 'errors/NG0301',
        contentPath: 'reference/errors/NG0301',
      },
      {
        label: 'NG0302: 找不到管道',
        path: 'errors/NG0302',
        contentPath: 'reference/errors/NG0302',
      },
      {
        label: `NG0403: 用于引导 NgModule 没有指定要初始化的组件`,
        path: 'errors/NG0403',
        contentPath: 'reference/errors/NG0403',
      },
      {
        label: 'NG0500: 水合节点不匹配',
        path: 'errors/NG0500',
        contentPath: 'reference/errors/NG0500',
      },
      {
        label: 'NG0501: 水合缺少兄弟节点',
        path: 'errors/NG0501',
        contentPath: 'reference/errors/NG0501',
      },
      {
        label: 'NG0502: 水合缺少节点',
        path: 'errors/NG0502',
        contentPath: 'reference/errors/NG0502',
      },
      {
        label: 'NG0503: 水合不支持 DOM 节点的投影',
        path: 'errors/NG0503',
        contentPath: 'reference/errors/NG0503',
      },
      {
        label: 'NG0504: 「跳过水合」标志被应用到了无效节点',
        path: 'errors/NG0504',
        contentPath: 'reference/errors/NG0504',
      },
      {
        label: 'NG0505: 服务器响应中没有水合信息',
        path: 'errors/NG0505',
        contentPath: 'reference/errors/NG0505',
      },
      {
        label: 'NG0506: NgZone 一直未达到稳定状态',
        path: 'errors/NG0506',
        contentPath: 'reference/errors/NG0506',
      },
      {
        label: 'NG0507: 服务端渲染后HTML内容被修改',
        path: 'errors/NG0507',
        contentPath: 'reference/errors/NG0507',
      },
      {
        label: 'NG0602: 服务端渲染后 HTML 内容被修改',
        path: 'errors/NG0602',
        contentPath: 'reference/errors/NG0602',
      },
      {
        label: 'NG05104: 找不到根元素',
        path: 'errors/NG05104',
        contentPath: 'reference/errors/NG05104',
      },
      {
        label: 'NG0910: iframe 元素上存在不安全的绑定',
        path: 'errors/NG0910',
        contentPath: 'reference/errors/NG0910',
      },
      {
        label: 'NG0912: 组件 ID 生成冲突',
        path: 'errors/NG0912',
        contentPath: 'reference/errors/NG0912',
      },
      {
        label: 'NG0950: 在为必要的输入属性设置了值之前就访问了它。',
        path: 'errors/NG0950',
        contentPath: 'reference/errors/NG0950',
      },
      {
        label: 'NG0951: 子查询结果是必要的，但却没有可用的值。',
        path: 'errors/NG0951',
        contentPath: 'reference/errors/NG0951',
      },
      {
        label: 'NG0955: 跟踪表达式导致在给定集合中出现了重复的键',
        path: 'errors/NG0955',
        contentPath: 'reference/errors/NG0955',
      },
      {
        label: 'NG0956: 跟踪表达式导致了重新创建 DOM 结构',
        path: 'errors/NG0956',
        contentPath: 'reference/errors/NG0956',
      },
      {
        label: 'NG1001: 实参不是字面量',
        path: 'errors/NG1001',
        contentPath: 'reference/errors/NG1001',
      },
      {
        label: 'NG2003: 缺少令牌',
        path: 'errors/NG2003',
        contentPath: 'reference/errors/NG2003',
      },
      {
        label: 'NG2009: 无效的 Shadow DOM 选择器',
        path: 'errors/NG2009',
        contentPath: 'reference/errors/NG2009',
      },
      {
        label: 'NG3003: 检测到了循环导入',
        path: 'errors/NG3003',
        contentPath: 'reference/errors/NG3003',
      },
      {
        label: 'NG05000: 使用不受支持的 Zone.js 实例进行水合。',
        path: 'errors/NG05000',
        contentPath: 'reference/errors/NG05000',
      },
      {
        label: 'NG6100: 将 NgModule.id 设置为 module.id 是一种反模式',
        path: 'errors/NG6100',
        contentPath: 'reference/errors/NG6100',
      },
      {
        label: 'NG8001: 无效的元素',
        path: 'errors/NG8001',
        contentPath: 'reference/errors/NG8001',
      },
      {
        label: 'NG8002: 无效的属性',
        path: 'errors/NG8002',
        contentPath: 'reference/errors/NG8002',
      },
      {
        label: 'NG8003: 引用目标缺失',
        path: 'errors/NG8003',
        contentPath: 'reference/errors/NG8003',
      },
    ],
  },
  {
    label: '扩展诊断',
    children: [
      {
        label: '概览',
        path: 'extended-diagnostics',
        contentPath: 'reference/extended-diagnostics/overview',
      },
      {
        label: 'NG8101: 无效的双向绑定语法',
        path: 'extended-diagnostics/NG8101',
        contentPath: 'reference/extended-diagnostics/NG8101',
      },
      {
        label: 'NG8102: 空合并运算符的操作数不是可空值',
        path: 'extended-diagnostics/NG8102',
        contentPath: 'reference/extended-diagnostics/NG8102',
      },
      {
        label: 'NG8103: 控制流指令缺失',
        path: 'extended-diagnostics/NG8103',
        contentPath: 'reference/extended-diagnostics/NG8103',
      },
      {
        label: 'NG8104: 文本属性未绑定',
        path: 'extended-diagnostics/NG8104',
        contentPath: 'reference/extended-diagnostics/NG8104',
      },
      {
        label: 'NG8105: 在 *ngFor 表达式中缺少 `let` 关键字',
        path: 'extended-diagnostics/NG8105',
        contentPath: 'reference/extended-diagnostics/NG8105',
      },
      {
        label: 'NG8106: 不受支持的后缀',
        path: 'extended-diagnostics/NG8106',
        contentPath: 'reference/extended-diagnostics/NG8106',
      },
      {
        label: 'NG8107: 可选链不是可空值',
        path: 'extended-diagnostics/NG8107',
        contentPath: 'reference/extended-diagnostics/NG8107',
      },
      {
        label: 'NG8108: ngSkipHydration 应该是一个静态属性',
        path: 'extended-diagnostics/NG8108',
        contentPath: 'reference/extended-diagnostics/NG8108',
      },
      {
        label: 'NG8109: 信号必须在模板插值中调用',
        path: 'extended-diagnostics/NG8109',
        contentPath: 'reference/extended-diagnostics/NG8109',
      },
    ],
  },
  {
    label: '版本与发布',
    path: 'reference/releases',
    contentPath: 'reference/releases',
  },
  {
    label: '版本兼容性',
    path: 'reference/versions',
    contentPath: 'reference/versions',
  },
  {
    label: '更新指南',
    path: 'update-guide',
  },
  {
    label: '配置',
    children: [
      {
        label: '文件结构',
        path: 'reference/configs/file-structure',
        contentPath: 'reference/configs/file-structure',
      },
      {
        label: '工作区配置',
        path: 'reference/configs/workspace-config',
        contentPath: 'reference/configs/workspace-config',
      },
      {
        label: 'Angular 编译器选项',
        path: 'reference/configs/angular-compiler-options',
        contentPath: 'reference/configs/angular-compiler-options',
      },
      {
        label: 'npm 依赖',
        path: 'reference/configs/npm-packages',
        contentPath: 'reference/configs/npm-packages',
      },
    ],
  },
  {
    label: '迁移',
    children: [
      {
        label: '概览',
        path: 'reference/migrations',
        contentPath: 'reference/migrations/overview',
      },
      {
        label: '独立版',
        path: 'reference/migrations/standalone',
        contentPath: 'reference/migrations/standalone',
      },
      {
        label: 'ModuleWithProviders',
        path: 'reference/migrations/module-with-providers',
        contentPath: 'reference/migrations/module-with-providers',
      },
      {
        label: '类型化表单',
        path: 'reference/migrations/typed-forms',
        contentPath: 'reference/migrations/typed-forms',
      },
      {
        label: '控制流语法',
        path: 'reference/migrations/control-flow',
        contentPath: 'reference/migrations/control-flow',
      },
    ],
  },
  {
    label: '概念',
    children: [
      {
        label: '概览',
        path: 'reference/concepts',
        contentPath: 'reference/concepts/overview',
      },
      {
        label: 'NgModule',
        children: [
          {
            label: '概览',
            path: 'guide/ngmodules',
            contentPath: 'guide/ngmodules/overview',
          },
          {
            label: 'JS 模块 vs. NgModule',
            path: 'guide/ngmodules/vs-jsmodule',
            contentPath: 'guide/ngmodules/vs-jsmodule',
          },
          {
            label: '使用根模块启动你的应用',
            path: 'guide/ngmodules/bootstrapping',
            contentPath: 'guide/ngmodules/bootstrapping',
          },
          {
            label: '共享 NgModule',
            path: 'guide/ngmodules/sharing',
            contentPath: 'guide/ngmodules/sharing',
          },
          {
            label: '常用 NgModule',
            path: 'guide/ngmodules/frequent',
            contentPath: 'guide/ngmodules/frequent',
          },
          {
            label: '特性模块',
            path: 'guide/ngmodules/feature-modules',
            contentPath: 'guide/ngmodules/feature-modules',
          },
          {
            label: '特性模块的类型',
            path: 'guide/ngmodules/module-types',
            contentPath: 'guide/ngmodules/module-types',
          },
          {
            label: '提供依赖',
            path: 'guide/ngmodules/providers',
            contentPath: 'guide/ngmodules/providers',
          },
          {
            label: '单例服务',
            path: 'guide/ngmodules/singleton-services',
            contentPath: 'guide/ngmodules/singleton-services',
          },
          {
            label: '惰性加载特性模块',
            path: 'guide/ngmodules/lazy-loading',
            contentPath: 'guide/ngmodules/lazy-loading',
          },
          {
            label: 'NgModule API',
            path: 'guide/ngmodules/api',
            contentPath: 'guide/ngmodules/api',
          },
          {
            label: 'NgModule FAQ',
            path: 'guide/ngmodules/faq',
            contentPath: 'guide/ngmodules/faq',
          },
        ],
      },
    ],
  },
];

const FOOTER_NAVIGATION_DATA: NavigationItem[] = [
  {
    label: '宣传资料',
    path: 'press-kit',
    contentPath: 'reference/press-kit',
  },
  {
    label: '授权方式',
    path: 'license',
    contentPath: 'reference/license',
  },
];

// Docs navigation data structure, it's used to display structure in
// navigation-list component And build the routing table for content pages.
export const SUB_NAVIGATION_DATA: SubNavigationData = {
  docs: DOCS_SUB_NAVIGATION_DATA,
  reference: REFERENCE_SUB_NAVIGATION_DATA,
  tutorials: TUTORIALS_SUB_NAVIGATION_DATA,
  footer: FOOTER_NAVIGATION_DATA,
};
