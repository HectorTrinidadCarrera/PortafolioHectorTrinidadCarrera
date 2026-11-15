export const $ = <T extends Element>(selector: string, parent: ParentNode = document) =>
  parent.querySelector<T>(selector);

export const $$ = <T extends Element>(selector: string, parent: ParentNode = document) =>
  Array.from(parent.querySelectorAll<T>(selector));
