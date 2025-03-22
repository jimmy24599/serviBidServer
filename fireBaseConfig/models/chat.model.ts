export interface Chat {
    id: string;
    participants: string[]; // Clerk user IDs
    lastMessage: string;
    lastMessageAt: Date;
    requestId?: string; // Link to service request if applicable
  }