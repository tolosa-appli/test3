import { verifyToken, generateTokens } from "../../../lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const refreshToken = req.cookies.get("refreshToken")?.value;
  if (!refreshToken) return NextResponse.json({ error: "Pas de refresh token" }, { status: 401 });

  try {
    const payload = verifyToken(refreshToken);
    const { accessToken, refreshToken: newRefresh } = generateTokens(payload);

    const res = NextResponse.json({ message: "Session prolongée" });
    res.cookies.set("accessToken", accessToken, { httpOnly: true, maxAge: 15*60, path: "/" });
    res.cookies.set("refreshToken", newRefresh, { httpOnly: true, maxAge: 7*24*60*60, path: "/" });
    return res;
  } catch {
    return NextResponse.json({ error: "Refresh token invalide" }, { status: 401 });
  }
}
