module.exports = ({ env }) => ({
  host: env('HOST', '192.168.50.5'),
  port: env.int('PORT', 1337),
});
