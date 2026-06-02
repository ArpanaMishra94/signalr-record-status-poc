import { useState } from "react";
import type { Record } from "../types/Record";

const RecordList = () => {
  const [records] = useState<Record[]>([
    {
      id: 1,
      name: "Grower A",
      status: "Incomplete",
    },
    {
      id: 2,
      name: "Grower B",
      status: "Pending",
    },
    {
      id: 3,
      name: "Grower C",
      status: "Approved",
    },
  ]);

  return (
    <div>
      <h1>Record Status Dashboard</h1>

      {records.map(record => (
        <div key={record.id}>
          {record.name} - {record.status}
        </div>
      ))}
    </div>
  );
};

export default RecordList;