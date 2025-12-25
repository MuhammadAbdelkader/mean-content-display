const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',')
    : ['http://localhost:4200', 'http://localhost:3000'],
  methods: ['GET', 'HEAD'],
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
