const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

<<<<<<< HEAD
export { corsOptions, CHATTU_TOKEN };
=======
export { corsOptions, CHATTU_TOKEN };
>>>>>>> 26db2284c271f7a37344cc555d7c03d2d46e9030
