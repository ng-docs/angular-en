/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {isDevMode} from '@angular/core';
import {NavigationItem} from '@angular/docs';

// These 2 imports are expected to be red because they are generated a build time
import FIRST_APP_TUTORIAL_NAV_DATA from '../../src/assets/tutorials/first-app/routes.json';
import LEARN_ANGULAR_TUTORIAL_NAV_DATA from '../../src/assets/tutorials/learn-angular/routes.json';
import DEFERRABLE_VIEWS_TUTORIAL_NAV_DATA from '../../src/assets/tutorials/deferrable-views/routes.json';
import SIGNALS_TUTORIAL_NAV_DATA from '../../src/assets/tutorials/signals/routes.json';
import ERRORS_NAV_DATA from '../../src/assets/content/reference/errors/routes.json';
import EXT_DIAGNOSTICS_NAV_DATA from '../../src/assets/content/reference/extended-diagnostics/routes.json';

import {getApiNavigationItems} from './features/references/helpers/manifest.helper';
import {DEFAULT_PAGES} from './core/constants/pages';

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
        label: '安装',
        path: 'installation',
        contentPath: 'introduction/installation',
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
            label: '使用 Signals 进行响应式编程',
            path: 'essentials/signals',
            contentPath: 'introduction/essentials/signals',
          },
          {
            label: '使用模板编写动态界面',
            path: 'essentials/templates',
            contentPath: 'introduction/essentials/templates',
          },
          {
            label: '使用依赖注入进行模块化设计',
            path: 'essentials/dependency-injection',
            contentPath: 'introduction/essentials/dependency-injection',
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
        label: '信号',
        children: [
          {
            label: '概览',
            path: 'guide/signals',
            contentPath: 'guide/signals/overview',
          },
          {
            label: '使用 linkedSignal 管理状态依赖',
            path: 'guide/signals/linked-signal',
            contentPath: 'guide/signals/linked-signal',
          },
          {
            label: '用 resources 处理异步响应',
            path: 'guide/signals/resource',
            contentPath: 'guide/signals/resource',
          },
        ],
      },
      {
        label: '组件',
        children: [
          {
            label: '组件的剖析',
            path: 'guide/components',
            contentPath: 'guide/components/anatomy-of-components',
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
        label: '模板',
        children: [
          {
            label: '概览',
            path: 'guide/templates',
            contentPath: 'guide/templates/overview',
          },
          {
            label: '绑定动态文本、属性、Attribute',
            path: 'guide/templates/binding',
            contentPath: 'guide/templates/binding',
          },
          {
            label: '添加事件监听器',
            path: 'guide/templates/event-listeners',
            contentPath: 'guide/templates/event-listeners',
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
            path: 'guide/templates/pipes',
            contentPath: 'guide/templates/pipes',
          },
          {
            label: '使用 ng-content 实现子内容插槽（slot）',
            path: 'guide/templates/ng-content',
            contentPath: 'guide/templates/ng-content',
          },
          {
            label: '使用 ng-template 创建模板碎片',
            path: 'guide/templates/ng-template',
            contentPath: 'guide/templates/ng-template',
          },
          {
            label: '使用 ng-container 对元素进行分组',
            path: 'guide/templates/ng-container',
            contentPath: 'guide/templates/ng-container',
          },
          {
            label: '模板中的变量',
            path: 'guide/templates/variables',
            contentPath: 'guide/templates/variables',
          },
          {
            label: '使用 @defer 进行延迟加载',
            path: 'guide/templates/defer',
            contentPath: 'guide/templates/defer',
          },
          {
            label: '表达式语法',
            path: 'guide/templates/expression-syntax',
            contentPath: 'guide/templates/expression-syntax',
          },
          {
            label: '模板中的空白字符',
            path: 'guide/templates/whitespace',
            contentPath: 'guide/templates/whitespace',
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
          {
            label: '用 NgOptimizedImage 优化图片加载',
            path: 'guide/image-optimization',
            contentPath: 'guide/image-optimization',
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
        label: '路由',
        status: 'updated',
        children: [
          {
            label: '概览',
            path: 'guide/routing',
            contentPath: 'guide/routing/overview',
          },
          {
            label: '定义路由',
            path: 'guide/routing/define-routes',
            contentPath: 'guide/routing/define-routes',
          },
          {
            label: '以路由出口展示路由',
            path: 'guide/routing/show-routes-with-outlets',
            contentPath: 'guide/routing/show-routes-with-outlets',
          },
          {
            label: '导航到路由',
            path: 'guide/routing/navigate-to-routes',
            contentPath: 'guide/routing/navigate-to-routes',
          },
          {
            label: '读取路由状态',
            path: 'guide/routing/read-route-state',
            contentPath: 'guide/routing/read-route-state',
          },
          {
            label: '重定向路由',
            path: 'guide/routing/redirecting-routes',
            contentPath: 'guide/routing/redirecting-routes',
          },
          {
            label: '使用守卫控制路由访问',
            path: 'guide/routing/route-guards',
            contentPath: 'guide/routing/route-guards',
          },
          {
            label: '路由数据解析器',
            path: 'guide/routing/data-resolvers',
            contentPath: 'guide/routing/data-resolvers',
          },
          {
            label: '生命周期与事件',
            path: 'guide/routing/lifecycle-and-events',
            contentPath: 'guide/routing/lifecycle-and-events',
          },
          {
            label: '测试路由与导航',
            path: 'guide/routing/testing',
            contentPath: 'guide/routing/testing',
            status: 'new',
          },
          {
            label: '其他路由任务',
            path: 'guide/routing/common-router-tasks',
            contentPath: 'guide/routing/common-router-tasks',
          },
          {
            label: '创建自定义路由匹配器',
            path: 'guide/routing/routing-with-urlmatcher',
            contentPath: 'guide/routing/routing-with-urlmatcher',
          },
          {
            label: '渲染策略',
            path: 'guide/routing/rendering-strategies',
            contentPath: 'guide/routing/rendering-strategies',
            status: 'new',
          },
          {
            label: '自定义路由行为',
            path: 'guide/routing/customizing-route-behavior',
            contentPath: 'guide/routing/customizing-route-behavior',
            status: 'new',
          },
          {
            label: '路由器参考手册',
            path: 'guide/routing/router-reference',
            contentPath: 'guide/routing/router-reference',
          },
          {
            label: '路由转换动画',
            path: 'guide/routing/route-transition-animations',
            contentPath: 'guide/routing/route-transition-animations',
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
            label: 'Reactive data fetching with httpResource',
            path: 'guide/http/http-resource',
            contentPath: 'guide/http/http-resource',
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
        label: '服务端渲染与混合渲染',
        children: [
          {
            label: '概览',
            path: 'guide/performance',
            contentPath: 'guide/performance/overview',
          },
          {
            label: '服务端渲染与混合渲染',
            path: 'guide/ssr',
            contentPath: 'guide/ssr',
          },
          {
            label: '水合',
            path: 'guide/hydration',
            contentPath: 'guide/hydration',
          },
          {
            label: '增量水合',
            path: 'guide/incremental-hydration',
            contentPath: 'guide/incremental-hydration',
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
            label: 'Testing routing and navigation',
            path: 'guide/routing/testing',
            contentPath: 'guide/routing/testing',
            status: 'new',
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
          {
            label: 'Experimental unit testing integration',
            path: 'guide/testing/unit-tests',
            contentPath: 'guide/testing/experimental-unit-test',
          },
          {
            label: '组件测试工具概览',
            path: 'guide/testing/component-harnesses-overview',
            contentPath: 'guide/testing/component-harnesses-overview',
          },
          {
            label: '在测试中使用组件测试工具',
            path: 'guide/testing/using-component-harnesses',
            contentPath: 'guide/testing/using-component-harnesses',
          },
          {
            label: '为你的组件创建组件测试工具',
            path: 'guide/testing/creating-component-harnesses',
            contentPath: 'guide/testing/creating-component-harnesses',
          },
          {
            label: '为其他测试环境添加组件测试工具的支持',
            path: 'guide/testing/component-harnesses-testing-environments',
            contentPath: 'guide/testing/component-harnesses-testing-environments',
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
        status: 'updated',
        children: [
          {
            label: '进场与离场动画',
            path: 'guide/animations',
            contentPath: 'guide/animations/enter-and-leave',
            status: 'new',
          },
          {
            label: '使用 CSS 实现复杂动画',
            path: 'guide/animations/css',
            contentPath: 'guide/animations/css',
          },
          {
            label: '路由过渡动画',
            path: 'guide/routing/route-transition-animations',
            contentPath: 'guide/routing/route-transition-animations',
          },
        ],
      },
      {
        label: '拖放',
        path: 'guide/drag-drop',
        contentPath: 'guide/drag-drop',
      },
    ],
  },
  {
    label: '利用 AI 构建',
    status: 'new',
    children: [
      {
        label: '快速上手',
        path: 'ai',
        contentPath: 'ai/overview',
      },
      {
        label: 'LLM 提示词和 AI IDE 设置',
        path: 'ai/develop-with-ai',
        contentPath: 'ai/develop-with-ai',
      },
      {
        label: '设计模式',
        path: 'ai/design-patterns',
        contentPath: 'ai/design-patterns',
      },
      {
        label: 'Angular CLI MCP 服务器设置',
        path: 'ai/mcp',
        contentPath: 'ai/mcp-server-setup',
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
        children: [
          {
            label: '概览',
            path: 'tools/devtools',
            contentPath: 'tools/devtools/overview',
          },
          {
            label: '组件',
            path: 'tools/devtools/component',
            contentPath: 'tools/devtools/component',
          },
          {
            label: '剖析器',
            path: 'tools/devtools/profiler',
            contentPath: 'tools/devtools/profiler',
          },
          // TODO: create those guides
          // The signal debugging docs should also be added to the signal section
          // {
          //   label: 'Signals',
          //   path: 'tools/devtools/signals',
          //   contentPath: 'tools/devtools/signals',
          // },
          // {
          //   label: 'Router',
          //   path: 'tools/devtools/router',
          //   contentPath: 'tools/devtools/router',
          // }
        ],
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
        status: 'updated',
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
        label: 'Angular 中的未处理错误',
        path: 'best-practices/error-handling',
        contentPath: 'best-practices/error-handling',
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
          {
            label: '使用 Chrome DevTools 进行剖析',
            path: 'best-practices/profiling-with-chrome-devtools',
            contentPath: 'best-practices/runtime-performance/profiling-with-chrome-devtools',
          },
          {label: 'Zoneless', path: 'guide/zoneless', contentPath: 'guide/zoneless'},
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
        label: 'NgModules',
        path: 'guide/ngmodules/overview',
        contentPath: 'guide/ngmodules/overview',
      },
      {
        label: '动画技术（遗留）',
        children: [
          {
            label: '概览',
            path: 'guide/legacy-animations',
            contentPath: 'guide/animations/overview',
          },
          {
            label: '过渡动画与触发器',
            path: 'guide/legacy-animations/transition-and-triggers',
            contentPath: 'guide/animations/transition-and-triggers',
          },
          {
            label: '复杂序列',
            path: 'guide/legacy-animations/complex-sequences',
            contentPath: 'guide/animations/complex-sequences',
          },
          {
            label: '可复用动画',
            path: 'guide/legacy-animations/reusable-animations',
            contentPath: 'guide/animations/reusable-animations',
          },
          {
            label: '迁移到原生 CSS 动画',
            path: 'guide/animations/migration',
            contentPath: 'guide/animations/migration',
          },
        ],
      },
      {
        label: '在 Angular 中使用 RxJS',
        children: [
          {
            label: '与信号互操作',
            path: 'ecosystem/rxjs-interop',
            contentPath: 'ecosystem/rxjs-interop/signals-interop',
          },
          {
            label: '与组件的输出属性互操作',
            path: 'ecosystem/rxjs-interop/output-interop',
            contentPath: 'ecosystem/rxjs-interop/output-interop',
          },
          {
            label: 'Unsubscribing with takeUntilDestroyed',
            path: 'ecosystem/rxjs-interop/take-until-destroyed',
            contentPath: 'ecosystem/rxjs-interop/take-until-destroyed',
          },
        ],
      },
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
            label: 'Custom service worker scripts',
            path: 'ecosystem/service-workers/custom-service-worker-scripts',
            contentPath: 'ecosystem/service-workers/custom-service-worker-scripts',
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
        label: '自定义构建流水线',
        path: 'ecosystem/custom-build-pipeline',
        contentPath: 'ecosystem/custom-build-pipeline',
      },
      {
        label: 'Tailwind',
        path: 'guide/tailwind',
        contentPath: 'guide/tailwind',
        status: 'new',
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
        path: 'https://material.angular.dev/cdk/categories',
      },
      {
        label: 'Angular Material',
        path: 'https://material.angular.dev/',
      },
    ],
  },
  ...(isDevMode()
    ? [
        {
          label: 'Adev 开发者指南',
          children: [
            {
              label: '大杂烩',
              path: 'kitchen-sink',
              contentPath: 'kitchen-sink',
            },
          ],
        },
      ]
    : []),
];

export const TUTORIALS_SUB_NAVIGATION_DATA: NavigationItem[] = [
  FIRST_APP_TUTORIAL_NAV_DATA,
  LEARN_ANGULAR_TUTORIAL_NAV_DATA,
  DEFERRABLE_VIEWS_TUTORIAL_NAV_DATA,
  SIGNALS_TUTORIAL_NAV_DATA,
  {
    path: DEFAULT_PAGES.TUTORIALS,
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
            label: 'clean',
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
            label: 'ai-config',
            path: 'cli/generate/ai-config',
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
            label: 'directive',
            path: 'cli/generate/directive',
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
      ...ERRORS_NAV_DATA,
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
      ...EXT_DIAGNOSTICS_NAV_DATA,
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
        label: '控制流语法',
        path: 'reference/migrations/control-flow',
        contentPath: 'reference/migrations/control-flow',
      },
      {
        label: 'inject() 函数',
        path: 'reference/migrations/inject-function',
        contentPath: 'reference/migrations/inject-function',
      },
      {
        label: '惰性加载路由',
        path: 'reference/migrations/route-lazy-loading',
        contentPath: 'reference/migrations/route-lazy-loading',
      },
      {
        label: '信号型输入属性',
        path: 'reference/migrations/signal-inputs',
        contentPath: 'reference/migrations/signal-inputs',
      },
      {
        label: '输出属性',
        path: 'reference/migrations/outputs',
        contentPath: 'reference/migrations/outputs',
      },
      {
        label: '信号型查询',
        path: 'reference/migrations/signal-queries',
        contentPath: 'reference/migrations/signal-queries',
      },
      {
        label: '清理未用导入',
        path: 'reference/migrations/cleanup-unused-imports',
        contentPath: 'reference/migrations/cleanup-unused-imports',
      },
      {
        label: '自闭合标签',
        path: 'reference/migrations/self-closing-tags',
        contentPath: 'reference/migrations/self-closing-tags',
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
