const buildPayload = (obj, field, value) => {
  obj.forEach((item) => {
    item[field] = value;
  });
  return obj;
};

export default buildPayload;
