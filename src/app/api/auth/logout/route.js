import { NextResponse } from "next/server";

export async function POST(req) {
  const res = NextResponse.json({ message: "Déconnecté" });
  res.cookies.delete("accessToken", { path: "/" });
  res.cookies.delete("refreshToken", { path: "/" });
  return res;
}
