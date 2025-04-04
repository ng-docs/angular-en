/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Pipe, PipeTransform} from '@angular/core';

import {ApiItemType} from '../interfaces/api-item-type';

@Pipe({
  name: 'adevApiLabel',
})
export class ApiLabel implements PipeTransform {
  transform(value: ApiItemType, labelType: 'short' | 'full'): string {
    return labelType === 'full' ? fullLabelsMap[value] : shortLabelsMap[value];
  }
}

export const shortLabelsMap: Record<ApiItemType, string> = {
  [ApiItemType.BLOCK]: 'B',
  [ApiItemType.CLASS]: 'C',
  [ApiItemType.CONST]: 'K',
  [ApiItemType.DECORATOR]: '@',
  [ApiItemType.DIRECTIVE]: 'D',
  [ApiItemType.ELEMENT]: 'El',
  [ApiItemType.ENUM]: 'E',
  [ApiItemType.FUNCTION]: 'F',
  [ApiItemType.INTERFACE]: 'I',
  [ApiItemType.PIPE]: 'P',
  [ApiItemType.NG_MODULE]: 'M',
  [ApiItemType.TYPE_ALIAS]: 'T',
  [ApiItemType.INITIALIZER_API_FUNCTION]: 'IA',
};

export const fullLabelsMap: Record<ApiItemType, string> = {
  [ApiItemType.BLOCK]: '控制块',
  [ApiItemType.CLASS]: '类',
  [ApiItemType.CONST]: '常量',
  [ApiItemType.DECORATOR]: '装饰器',
  [ApiItemType.DIRECTIVE]: '指令',
  [ApiItemType.ELEMENT]: '元素',
  [ApiItemType.ENUM]: '枚举',
  [ApiItemType.FUNCTION]: '函数',
  [ApiItemType.INTERFACE]: '接口',
  [ApiItemType.PIPE]: '管道',
  [ApiItemType.NG_MODULE]: '模块',
  [ApiItemType.TYPE_ALIAS]: '类型别名',
  [ApiItemType.INITIALIZER_API_FUNCTION]: '初始化 API',
};
