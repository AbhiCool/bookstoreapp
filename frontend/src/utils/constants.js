let serverURL;
if (process.env.NODE_ENV === "production") {
  serverURL = "https://bookstoreapp-jt4p.onrender.com";
} else {
  serverURL = "http://localhost:3000";
}
export { serverURL };
