// lib/authClient.js
import axios from "axios";

const api = axios.create({
  baseURL: "/api/auth",
  withCredentials: true, // pour envoyer les cookies automatiquement
});

// --- Register ---
export const register = async (data) => {
  const res = await api.post("/register", data);
  return res.data;
};

// --- Login ---
export const login = async (identifier, password) => {
  const res = await api.post("/login", { identifier, password });
  return res.data;
};

// --- Profile ---
export const getProfile = async () => {
  try {
    const res = await api.get("/profile");
    return res.data;
  } catch (err) {
    if (err.response?.status === 401) {
      // token expiré → refresh
      await refreshToken();
      const res2 = await api.get("/profile");
      return res2.data;
    }
    throw err;
  }
};

// --- Refresh token ---
export const refreshToken = async () => {
  const res = await api.post("/refresh");
  return res.data;
};

// --- Logout ---
export const logout = async () => {
  const res = await api.post("/logout");
  return res.data;
};
