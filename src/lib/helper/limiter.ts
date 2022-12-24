export const limitTextContent = (content: string) => {
  let firstRemove = content.replace(/<\/?[^>]+(>|$)/g, "");
  let secondRemove = firstRemove.slice(0, 250);
  return secondRemove;
};
