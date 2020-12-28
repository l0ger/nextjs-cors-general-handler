// you can create global config there and import it every where you need.
const allowList = ['yoursite.com'];

export const generalCorsConfig = {
  methods: ['POST'],
  origin: allowList,
};
