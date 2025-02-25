
import Header from "@/components/Header";

const AdminPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-2xl font-bold mb-6">Administrator Portal</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Staff Management</h2>
            <p className="text-gray-600">Manage hospital staff and their roles</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Hospital Analytics</h2>
            <p className="text-gray-600">View hospital performance metrics</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Resource Management</h2>
            <p className="text-gray-600">Monitor and manage hospital resources</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPortal;
