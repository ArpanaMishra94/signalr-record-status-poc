import * as signalR from "@microsoft/signalr";
import type { Record } from "../types/Record";

class SignalRService {
  private connection: signalR.HubConnection | null = null;

  async startConnection() {
    if (this.connection) return;

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5187/notificationHub")
      .configureLogging(signalR.LogLevel.Debug)
      .withAutomaticReconnect()
      .build();

    try {
      console.log("Connecting...");
      await this.connection.start();
      console.log("SignalR Connected");
    } catch (error) {
      console.error("Connection Error:", error);
    }
  }

  onRecordUpdated(
    callback: (record: Record) => void
  ) {
    this.connection?.on(
      "RecordUpdated",
      callback
    );
  }

  async stopConnection() {
    if (this.connection) {
    await this.connection.stop();
    this.connection = null;
  }
  }
}

export default new SignalRService();