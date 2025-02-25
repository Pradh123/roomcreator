import { NextResponse } from "next/server";
import jwtDecode from "jwt-decode";
import { parse } from "cookie";

userType
import {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "./utils/generateTokens";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const method = req.method;
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = parse(cookieHeader);
  const accessToken = cookies.accessToken;
  const refreshToken = cookies.refreshToken;

  // decode access token 

  const user = jwtDecode(token);

  // Exclude login API route from middleware
  if (pathname === "/api/auth/login-super-admin" && method === "POST") {
    return NextResponse.next();
  }

  // If on login page and already authenticated, redirect to admin dashboard
  if (pathname === "/admin/super-login") {
    if (refreshToken) {
      try {
        const refreshPayload = await verifyRefreshToken(refreshToken);
        if (!refreshPayload) {
          throw new Error("Invalid refresh token");
        }

        const newAccessToken = await generateAccessToken(refreshPayload.id);
        const newRefreshToken = await generateRefreshToken(refreshPayload.id);
        const response = NextResponse.redirect(new URL("/admin", req.url));

        response.cookies.set("accessToken", newAccessToken, {
          httpOnly: true,
          sameSite: "Lax",
          path: "/",
          maxAge: 20 * 60, // 20 minutes
        });

        response.cookies.set("refreshToken", newRefreshToken, {
          httpOnly: true,
          sameSite: "Lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return response;
      } catch (error) {
        console.error("Token verification failed:", error);
        const response = NextResponse.next();
        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");
        return response;
      }
    }
    return NextResponse.next();
  }

  // Allow all GET requests to APIs without authentication
  if (method === "GET" && pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Protect /admin routes
  if (user?.userType==="super-admin"&&pathname.startsWith("/admin")) {
    try {
      if (accessToken && (await verifyAccessToken(accessToken))) {
        return NextResponse.next();
      }

      if (refreshToken) {
        const refreshPayload = await verifyRefreshToken(refreshToken);
        if (!refreshPayload) {
          throw new Error("Invalid refresh token");
        }

        const newAccessToken = await generateAccessToken(refreshPayload.id);
        const newRefreshToken = await generateRefreshToken(refreshPayload.id);
        const response = NextResponse.next();

        response.cookies.set("accessToken", newAccessToken, {
          httpOnly: true,
          sameSite: "Lax",
          path: "/",
          maxAge: 20 * 60, // 20 minutes
        });

        response.cookies.set("refreshToken", newRefreshToken, {
          httpOnly: true,
          sameSite: "Lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return response;
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }

    return NextResponse.redirect(new URL("/admin/super-login", req.url));
  }
  // Protect API routes (PUT, POST, DELETE)
  if (user?.userType==="super-admin"&&["PUT", "POST", "DELETE"].includes(method) && pathname.startsWith("/api")) {
    try {
      if (accessToken && (await verifyAccessToken(accessToken))) {
        return NextResponse.next();
      }

      if (refreshToken) {
        const refreshPayload = await verifyRefreshToken(refreshToken);
        if (!refreshPayload) {
          throw new Error("Invalid refresh token");
        }

        const newAccessToken = await generateAccessToken(refreshPayload.id);
        const newRefreshToken = await generateRefreshToken(refreshPayload.id);
        const response = NextResponse.next();

        response.cookies.set("accessToken", newAccessToken, {
          httpOnly: true,
          sameSite: "Lax",
          path: "/",
          maxAge: 20 * 60,
        });
        response.cookies.set("refreshToken", newRefreshToken, {
          httpOnly: true,
          sameSite: "Lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return response;
      }
    } catch (error) {
      console.error("API Authentication error:", error);
    }

    return NextResponse.json({ message: "Unauthorized: Please log in" }, { status: 401 });
  }

  const normalAdmin=["/admin/profile","/admin/room/create-room","/admin/room","/admin/change-password"]
  if (user?.userType === "admin" && !normalAdmin.includes(pathname)) {
    return NextResponse.redirect(new URL("/admin/profile", req.url)); // Redirect to allowed page
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/admin/:path*"],
};