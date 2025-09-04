import { scryptSync, randomBytes, timingSafeEqual } from "crypto";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "super_secret_key";
const ACCESS_TOKEN_EXP = "15m";
const REFRESH_TOKEN_EXP = "7d";

// Hash mot de passe
export function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  return `scrypt$${salt.toString("base64")}$${hash.toString("base64")}`;
}

// Vérification mot de passe
export function verifyPassword(password, storedHash) {
  const [algo, saltB64, hashB64] = storedHash.split("$");
  if (algo !== "scrypt") throw new Error("Format de hash invalide");

  const salt = Buffer.from(saltB64, "base64");
  const hash = Buffer.from(hashB64, "base64");

  const derived = scryptSync(password, salt, 64);
  return timingSafeEqual(hash, derived);
}

// Génération tokens
export function generateTokens(user) {
  const payload = { uid: user.id, identifier: user.identifier };

  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXP });
  const refreshToken = jwt.sign(payload, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXP });

  return { accessToken, refreshToken };
}

// Vérification token
export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
