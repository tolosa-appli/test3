import { db } from "../../../lib/firebase";
import { verifyToken } from "../../../lib/auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  const token = req.cookies.get("accessToken")?.value;
  if (!token) return NextResponse.json({ error: "Non authentifié" }, { status: 401 });

  try {
    const payload = verifyToken(token);
    const userDoc = await db.collection("Users").doc(payload.uid).get();
    return NextResponse.json(userDoc.data());
  } catch {
    return NextResponse.json({ error: "Token invalide ou expiré" }, { status: 401 });
  }
}
