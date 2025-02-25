
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

interface BedProps {
  id: number;
  roomNumber: string;
  isOccupied: boolean;
  onStatusChange?: (isOccupied: boolean) => void;
}

const BedStatus = ({ id, roomNumber, isOccupied: initialOccupied, onStatusChange }: BedProps) => {
  const [isOccupied, setIsOccupied] = useState(initialOccupied);

  const handleStatusChange = (newStatus: boolean) => {
    setIsOccupied(newStatus);
    onStatusChange?.(newStatus);
  };

  return (
    <Card className="p-4 card-hover">
      <div className="flex items-center justify-between space-x-4">
        <div>
          <h3 className="font-medium">Room {roomNumber}</h3>
          <div className="mt-1">
            <Badge variant={isOccupied ? "destructive" : "secondary"} className="status-badge">
              {isOccupied ? (
                <XCircle className="mr-1 h-3 w-3" />
              ) : (
                <CheckCircle2 className="mr-1 h-3 w-3" />
              )}
              {isOccupied ? "Occupied" : "Available"}
            </Badge>
          </div>
        </div>
        <Switch
          checked={isOccupied}
          onCheckedChange={handleStatusChange}
          className="data-[state=checked]:bg-destructive"
        />
      </div>
    </Card>
  );
};

export default BedStatus;
