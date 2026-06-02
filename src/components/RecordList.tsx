import { useEffect, useState } from "react";
import type { Record } from "../types/Record";
import signalRService from "../services/signalRService";

const RecordList = () => {
  const [records, setRecords] = useState<Record[]>([
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

  const updateRecord = (id: number) => {
    setRecords(prev =>
      prev.map(record =>
        record.id === id
          ? {
              ...record,
              status: "Approved"
            }
          : record
      )
    );
  };

 useEffect(() => {
  const connect = async () => {
    await signalRService.startConnection();

    signalRService.onRecordUpdated(
      (updatedRecord) => {
        console.log(
          "Received from SignalR:",
          updatedRecord
        );

        setRecords(prev =>
          prev.map(record =>
            record.id === updatedRecord.id
              ? updatedRecord
              : record
          )
        );
      }
    );
  };

  connect();

  return () => {
    console.log("Stopping...");
    signalRService.stopConnection();
  };
}, []);

  return (
    <div>
      <h1>Record Status Dashboard</h1>

      {records.map(record => (
        <div key={record.id}>
          {record.name} - {record.status}
          <button onClick={() => updateRecord(record.id)}>
            Update Record
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecordList;