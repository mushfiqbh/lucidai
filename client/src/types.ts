interface TextMessage {
  type: 'text';
  text: string;
}

interface ImageUrlMessage {
  type: 'image_url';
  image_url: {
    url: string;
  };
}

export type Message = TextMessage | ImageUrlMessage;

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: Message[];
  timestamp: Date;
}