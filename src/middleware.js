// import { NextResponse } from "next/server";
// import jwtDecode from "jwt-decode";
// import { parse } from "cookie";

// // userType
// import {
//   generateAccessToken,
//   generateRefreshToken,
//   verifyAccessToken,
//   verifyRefreshToken,
// } from "./utils/generateTokens";

// export async function middleware(req) {
//   const { pathname } = req.nextUrl;
//   const method = req.method;
//   const cookieHeader = req.headers.get("cookie") || "";
//   const cookies = parse(cookieHeader);
//   const accessToken = cookies.accessToken;
//   const refreshToken = cookies.refreshToken;

//   // decode access token

//   let user;

//   // Exclude login API route from middleware
//   if (pathname === "/api/auth/login-super-admin" && method === "POST") {
//     return NextResponse.next();
//   }

//   // If on login page and already authenticated, redirect to admin dashboard
//   if (pathname === "/admin/super-login") {
//     if (refreshToken) {
//       user = jwtDecode(refreshToken);
//       try {
//         const refreshPayload = await verifyRefreshToken(refreshToken);
//         if (!refreshPayload) {
//           throw new Error("Invalid refresh token");
//         }

//         const newAccessToken = await generateAccessToken(refreshPayload.id);
//         const newRefreshToken = await generateRefreshToken(refreshPayload.id);
//         const response = NextResponse.redirect(new URL("/admin", req.url));

//         response.cookies.set("accessToken", newAccessToken, {
//           httpOnly: true,
//           sameSite: "Lax",
//           path: "/",
//           maxAge: 20 * 60, // 20 minutes
//         });

//         response.cookies.set("refreshToken", newRefreshToken, {
//           httpOnly: true,
//           sameSite: "Lax",
//           path: "/",
//           maxAge: 60 * 60 * 24 * 7, // 7 days
//         });

//         return response;
//       } catch (error) {
//         console.error("Token verification failed:", error);
//         const response = NextResponse.next();
//         response.cookies.delete("accessToken");
//         response.cookies.delete("refreshToken");
//         return response;
//       }
//     }
//     return NextResponse.next();
//   }

//   // Allow all GET requests to APIs without authentication
//   if (method === "GET" && pathname.startsWith("/api")) {
//     return NextResponse.next();
//   }

//   // Protect /admin routes
//   if (user?.userType === "super-admin" && pathname.startsWith("/admin")) {
//     try {
//       if (accessToken && (await verifyAccessToken(accessToken))) {
//         return NextResponse.next();
//       }

//       if (refreshToken) {
//         const refreshPayload = await verifyRefreshToken(refreshToken);
//         if (!refreshPayload) {
//           throw new Error("Invalid refresh token");
//         }

//         const newAccessToken = await generateAccessToken(refreshPayload.id);
//         const newRefreshToken = await generateRefreshToken(refreshPayload.id);
//         const response = NextResponse.next();

//         response.cookies.set("accessToken", newAccessToken, {
//           httpOnly: true,
//           sameSite: "Lax",
//           path: "/",
//           maxAge: 20 * 60, // 20 minutes
//         });

//         response.cookies.set("refreshToken", newRefreshToken, {
//           httpOnly: true,
//           sameSite: "Lax",
//           path: "/",
//           maxAge: 60 * 60 * 24 * 7, // 7 days
//         });

//         return response;
//       }
//     } catch (error) {
//       console.error("Authentication error:", error);
//     }

//     return NextResponse.redirect(new URL("/admin/super-login", req.url));
//   }
//   // Protect API routes (PUT, POST, DELETE)
//   if (
//     user?.admin === "super-admin" &&
//     ["PUT", "POST", "DELETE"].includes(method) &&
//     pathname.startsWith("/api")
//   ) {
//     try {
//       if (accessToken && (await verifyAccessToken(accessToken))) {
//         return NextResponse.next();
//       }

//       if (refreshToken) {
//         const refreshPayload = await verifyRefreshToken(refreshToken);
//         if (!refreshPayload) {
//           throw new Error("Invalid refresh token");
//         }

//         const newAccessToken = await generateAccessToken(refreshPayload.id);
//         const newRefreshToken = await generateRefreshToken(refreshPayload.id);
//         const response = NextResponse.next();

//         response.cookies.set("accessToken", newAccessToken, {
//           httpOnly: true,
//           sameSite: "Lax",
//           path: "/",
//           maxAge: 20 * 60,
//         });
//         response.cookies.set("refreshToken", newRefreshToken, {
//           httpOnly: true,
//           sameSite: "Lax",
//           path: "/",
//           maxAge: 60 * 60 * 24 * 7, // 7 days
//         });

//         return response;
//       }
//     } catch (error) {
//       console.error("API Authentication error:", error);
//     }

//     return NextResponse.json(
//       { message: "Unauthorized: Please log in" },
//       { status: 401 }
//     );
//   }

//   const normalAdmin = [
//     "/admin/profile",
//     "/admin/room/create-room",
//     "/admin/room",
//     "/admin/change-password",
//   ];
//   if (user?.admin === "admin" && !normalAdmin.includes(pathname)) {
//     return NextResponse.redirect(new URL("/admin/profile", req.url)); // Redirect to allowed page
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/api/:path*", "/admin/:path*"],
// };








import { NextResponse } from "next/server";
import { parse } from "cookie";

// Token functions
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
  const cookies = cookieHeader ? parse(cookieHeader) : {};
  const accessToken = cookies.accessToken;
  const refreshToken = cookies.refreshToken;

  let user = null;

  // Exclude login API route from middleware
  if (pathname === "/api/auth/login-super-admin" && method === "POST") {
    return NextResponse.next();
  }
  if (pathname === "/api/auth/login-admin" && method === "POST") {
    return NextResponse.next();
  }

  // If on login page and already authenticated, redirect to admin dashboard
  if (pathname === "/admin/super-login"&&user?.admin==="superadmin") {
    if (refreshToken) {
      try {
        const refreshPayload = await verifyRefreshToken(refreshToken);
        if (!refreshPayload) throw new Error("Invalid refresh token");

        user = refreshPayload;

        const newAccessToken = await generateAccessToken(refreshPayload.id,"superadmin");
        const newRefreshToken = await generateRefreshToken(refreshPayload.id,"superadmin");
        const response = NextResponse.redirect(new URL("/admin", req.url));

        response.headers.set(
          "Set-Cookie",
          `accessToken=${newAccessToken}; HttpOnly; Path=/; Max-Age=1200, refreshToken=${newRefreshToken}; HttpOnly; Path=/; Max-Age=604800`
        );

        return response;
      } catch (error) {
        console.error("Token verification failed:", error);
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }
  if (pathname === "/admin/sign-up"&&user?.admin==="admin") {
    if (refreshToken) {
      try {
        const refreshPayload = await verifyRefreshToken(refreshToken);
        if (!refreshPayload) throw new Error("Invalid refresh token");

        user = refreshPayload;

        const newAccessToken = await generateAccessToken(refreshPayload.id,"admin");
        const newRefreshToken = await generateRefreshToken(refreshPayload.id,"admin");
        const response = NextResponse.redirect(new URL("/admin/profile", req.url));

        response.headers.set(
          "Set-Cookie",
          `accessToken=${newAccessToken}; HttpOnly; Path=/; Max-Age=1200, refreshToken=${newRefreshToken}; HttpOnly; Path=/; Max-Age=604800`
        );

        return response;
      } catch (error) {
        console.error("Token verification failed:", error);
        return NextResponse.next();
      }
    }
    return NextResponse.next();
  }
  // Allow all GET requests to APIs without authentication
  if (method === "GET" && pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Protect /admin routes
  if (user?.admin === "superadmin"&&pathname.startsWith("/admin")) {
    try {
      if (!refreshToken) {
        return NextResponse.redirect(new URL("/admin/super-login", req.url));
      }

      const refreshPayload = await verifyRefreshToken(refreshToken);
      if (!refreshPayload) {
        return NextResponse.redirect(new URL("/admin/super-login", req.url));
      }

      user = refreshPayload;
// console.log("user is here-----------> ",user)
      const newAccessToken = await generateAccessToken(refreshPayload.id,"superadmin")
      const newRefreshToken = await generateRefreshToken(refreshPayload.id,"superadmin");
      const response = NextResponse.next();

      response.headers.set(
        "Set-Cookie",
        `accessToken=${newAccessToken}; HttpOnly; Path=/; Max-Age=1200, refreshToken=${newRefreshToken}; HttpOnly; Path=/; Max-Age=604800`
      );

      return response;
    } catch (error) {
      console.error("Authentication error:", error);
      return NextResponse.redirect(new URL("/admin/super-login", req.url));
    }
  }

  // Protect API routes (PUT, POST, DELETE)
  if (user?.admin === "superadmin"&&["PUT", "POST", "DELETE"].includes(method) && pathname.startsWith("/api")) {
    try {
      if (!refreshToken) {
        return NextResponse.json({ message: "Unauthorized: Please log in" }, { status: 401 });
      }

      const refreshPayload = await verifyRefreshToken(refreshToken);
      if (!refreshPayload) {
        return NextResponse.json({ message: "Unauthorized: Invalid refresh token" }, { status: 401 });
      }

      user = refreshPayload;

      const newAccessToken = await generateAccessToken(refreshPayload.id);
      const newRefreshToken = await generateRefreshToken(refreshPayload.id);
      const response = NextResponse.next();

      response.headers.set(
        "Set-Cookie",
        `accessToken=${newAccessToken}; HttpOnly; Path=/; Max-Age=1200, refreshToken=${newRefreshToken}; HttpOnly; Path=/; Max-Age=604800`
      );

      return response;
    } catch (error) {
      console.error("API Authentication error:", error);
    }

    return NextResponse.json({ message: "Unauthorized: Please log in" }, { status: 401 });
  }

  const normalAdminRoutes = [
    "/admin/profile",
    "/admin/room/create-room",
    "/admin/room",
    "/admin/change-password",
  ];
  if (user?.admin === "admin"&&normalAdminRoutes.includes(pathname)) {
    try {
      if (!refreshToken) {
        return NextResponse.redirect(new URL("/admin/sign-up", req.url));
      }

      const refreshPayload = await verifyRefreshToken(refreshToken);
      if (!refreshPayload) {
        return NextResponse.redirect(new URL("/admin/sign-up", req.url));
      }

      user = refreshPayload;
// console.log("user is here-----------> ",user)
      const newAccessToken = await generateAccessToken(refreshPayload.id,"admin")
      const newRefreshToken = await generateRefreshToken(refreshPayload.id,"admin");
      const response = NextResponse.next();

      response.headers.set(
        "Set-Cookie",
        `accessToken=${newAccessToken}; HttpOnly; Path=/; Max-Age=1200, refreshToken=${newRefreshToken}; HttpOnly; Path=/; Max-Age=604800`
      );

      return response;
    } catch (error) {
      console.error("Authentication error:", error);
      return NextResponse.redirect(new URL("/admin/sign-up", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/admin/:path*"],
};
