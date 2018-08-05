export const notFound = {
  handler: (request, h) => {
    return h.response({ result: 'Oops, 404 Page!' }).code(404);
  }
};
