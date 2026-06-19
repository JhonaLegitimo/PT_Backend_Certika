export function notFoundMiddleware(req, res, next) {
  res.status(404).json({
    error: {
      message: 'Ruta no encontrada.',
    },
  });
}
