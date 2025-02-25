
import Header from "@/components/Header";

const PatientPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-2xl font-bold mb-6">Patient Portal</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Appointments</h2>
            <p className="text-gray-600">View and manage your upcoming appointments</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Medical Records</h2>
            <p className="text-gray-600">Access your medical history and test results</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Prescriptions</h2>
            <p className="text-gray-600">View and refill your prescriptions</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientPortal;
