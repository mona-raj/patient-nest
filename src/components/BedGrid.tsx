
import BedStatus from "./BedStatus";

const BedGrid = () => {
  // Sample bed data
  const beds = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    roomNumber: `${101 + i}`,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Bed Status Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {beds.map((bed) => (
          <BedStatus key={bed.id} {...bed} />
        ))}
      </div>
    </div>
  );
};

export default BedGrid;
