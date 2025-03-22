export interface Message {
    id: string;
    senderId: string; // Clerk user ID
    content: string;
    timestamp: Date;
    chatId: string;
    read: boolean;
  }