module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '41af0de4b8517a6d6d59298ac8446687'),
  },
});
