export const notFound = {
  handler: (request, reply) => {
    return reply({ result: 'Oops, 404 Page!' }).code(404);
  }
};
