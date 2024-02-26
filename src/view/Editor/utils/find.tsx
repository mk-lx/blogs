export function getParentById(parentId: number, list: IComponent[]): IComponent | null {
  for (const item of list) {
    if (item.id === parentId) {
      return item;
    }

    if (item.children && item.children.length) {
      const target = getParentById(parentId, item.children);

      if (target) {
        return target;
      }
    }
  }

  return null;
}
