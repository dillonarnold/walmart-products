export const notFound = {
  handler: (request, h) => {
    return reply({ result: 'Oops, 404 Page!' }).code(404);
  }
};
