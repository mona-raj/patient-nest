
import { useState } from "react";
import BedStatus from "./BedStatus";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const BedGrid = () => {
  const [filter, setFilter] = useState<"all" | "available" | "occupied">("all");
  const [beds] = useState(
    Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      roomNumber: `${101 + i}`,
      isOccupied: Math.random() > 0.5,
    }))
  );

  const filteredBeds = beds.filter((bed) => {
    if (filter === "all") return true;
    if (filter === "available") return !bed.isOccupied;
    return bed.isOccupied;
  });

  const handleBedStatusChange = (roomNumber: string, isOccupied: boolean) => {
    if (!isOccupied) {
      toast({
        title: "Bed Available",
        description: `Room ${roomNumber} is now available for new patients.`,
        duration: 5000,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Bed Status Overview</h2>
        <Select value={filter} onValueChange={(value: "all" | "available" | "occupied") => setFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter beds" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Beds</SelectItem>
            <SelectItem value="available">Available Beds</SelectItem>
            <SelectItem value="occupied">Occupied Beds</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredBeds.map((bed) => (
          <BedStatus 
            key={bed.id} 
            {...bed} 
            onStatusChange={(isOccupied) => handleBedStatusChange(bed.roomNumber, isOccupied)} 
          />
        ))}
      </div>
    </div>
  );
};

export default BedGrid;
