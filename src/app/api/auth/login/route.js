import { db } from "../../../lib/firebase";
import { verifyPassword, generateTokens } from "../../../lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { identifier, password } = await req.json();

  const snapshot = await db.collection("Users")
    .where("identifier", "==", identifier)
    .limit(1)
    .get();

  if (snapshot.empty) return NextResponse.json({ error: "Identifiant incorrect" }, { status: 401 });

  const userDoc = snapshot.docs[0];
  const user = { id: userDoc.id, ...userDoc.data() };

  if (!verifyPassword(password, user.passwordHash)) {
    return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
  }

  const { accessToken, refreshToken } = generateTokens(user);

  const res = NextResponse.json({ message: "Connecté" });
  res.cookies.set("accessToken", accessToken, { httpOnly: true, maxAge: 15*60, path: "/" });
  res.cookies.set("refreshToken", refreshToken, { httpOnly: true, maxAge: 7*24*60*60, path: "/" });
  return res;
}
