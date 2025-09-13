export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-6 py-8">{children}</main>
      <footer className="bg-white shadow-inner text-center py-4 mt-6 text-gray-600 rounded-t-2xl">
        © {new Date().getFullYear()} Subscriptify. All rights reserved.
      </footer>
    </div>
  );
}
