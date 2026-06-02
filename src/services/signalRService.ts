import * as signalR from "@microsoft/signalr";

class SignalRService {
  private connection: signalR.HubConnection | null = null;

  async startConnection() {
    this.connection =
      new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:5001/notificationHub")
        .withAutomaticReconnect()
        .build();

    await this.connection.start();

    console.log("Connected");
  }

  onRecordUpdated(callback: any) {
    this.connection?.on(
      "RecordUpdated",
      callback
    );
  }

  stopConnection() {
    this.connection?.stop();
  }
}

export default new SignalRService();