/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import {Injectable, inject} from '@angular/core';
import {LOCAL_STORAGE, WINDOW, isMobile} from '@angular/docs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorSnackBar, ErrorSnackBarData} from '../core/services/errors-handling/error-snack-bar';

export const MAX_RECOMMENDED_WEBCONTAINERS_INSTANCES = 3;
export const WEBCONTAINERS_COUNTER_KEY = 'numberOfWebcontainers';

export enum AlertReason {
  OUT_OF_MEMORY,
  MOBILE,
}

@Injectable({providedIn: 'root'})
export class AlertManager {
  private readonly localStorage = inject(LOCAL_STORAGE);
  private readonly window = inject(WINDOW);
  private snackBar = inject(MatSnackBar);

  init(): void {
    this.listenToLocalStorageValuesChange();

    this.increaseInstancesCounter();

    this.decreaseInstancesCounterOnPageClose();

    this.checkDevice();
  }

  private listenToLocalStorageValuesChange(): void {
    this.window.addEventListener('storage', () => {
      const countOfRunningInstances = this.getStoredCountOfWebcontainerInstances();

      this.validateRunningInstances(countOfRunningInstances);
    });
  }

  // Increase count of the running instances of the webcontainers when user will boot the webcontainer
  private increaseInstancesCounter(): void {
    const countOfRunningInstances = this.getStoredCountOfWebcontainerInstances() + 1;

    this.localStorage?.setItem(WEBCONTAINERS_COUNTER_KEY, countOfRunningInstances.toString());
    this.validateRunningInstances(countOfRunningInstances);
  }

  // Decrease count of running instances of the webcontainers when user close the app.
  private decreaseInstancesCounterOnPageClose(): void {
    this.window.addEventListener('beforeunload', () => {
      const countOfRunningInstances = this.getStoredCountOfWebcontainerInstances() - 1;

      this.localStorage?.setItem(WEBCONTAINERS_COUNTER_KEY, countOfRunningInstances.toString());
      this.validateRunningInstances(countOfRunningInstances);
    });
  }

  private getStoredCountOfWebcontainerInstances(): number {
    const countStoredInLocalStorage = this.localStorage?.getItem(WEBCONTAINERS_COUNTER_KEY);

    if (!countStoredInLocalStorage || Number.isNaN(countStoredInLocalStorage)) {
      return 0;
    }

    return Number(countStoredInLocalStorage);
  }

  private validateRunningInstances(countOfRunningInstances: number): void {
    if (countOfRunningInstances > MAX_RECOMMENDED_WEBCONTAINERS_INSTANCES) {
      this.openSnackBar(AlertReason.OUT_OF_MEMORY);
    }
  }

  private checkDevice() {
    if (isMobile) {
      this.openSnackBar(AlertReason.MOBILE);
    }
  }

  private openSnackBar(reason: AlertReason) {
    let message = '';
    switch (reason) {
      case AlertReason.OUT_OF_MEMORY:
        message = `你的浏览器当前限制了运行 Angular 教程或在线演练场所需的内存。如果你有多个标签页打开了教程或在线演练场，请关闭其中的一些并刷新此页面。`;
        break;
      case AlertReason.MOBILE:
        message = `你正在移动设备上运行嵌入式编辑器，这可能会导致内存不足错误。`;
        break;
    }

    this.snackBar.openFromComponent(ErrorSnackBar, {
      panelClass: 'docs-invert-mode',
      data: {
        message,
        actionText: '我明白了',
      } satisfies ErrorSnackBarData,
    });
  }
}
