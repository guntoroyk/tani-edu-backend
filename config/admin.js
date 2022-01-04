module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7ccd9c9998e5dc38ac39158c53a01cf2'),
  },
});
