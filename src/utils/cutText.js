export const cutText = (text, limit) =>
  text.length > limit ? text.substr(0, limit) + '...' : text;
