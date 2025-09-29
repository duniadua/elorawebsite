import Link from 'next/link';

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg mb-8">The page you are looking for does not exist.</p>
          <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Go back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
