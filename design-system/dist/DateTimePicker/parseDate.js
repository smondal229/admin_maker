const r = (t) => {
  const e = Date.parse(t);
  if (!Number.isNaN(e))
    return new Date(e);
};
export {
  r as parseDate
};
