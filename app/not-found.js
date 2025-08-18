"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</p>
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved. Let’s get you back to the home page.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
      >
        <ArrowLeft className="mr-2 w-4 h-4" />
        Go back home
      </Link>
    </div>
  );
}
