const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://wechat-mocha.vercel.app", // ✅ replace this with your actual Vercel URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
