import { Injectable } from '@angular/core';
import { Chat } from 'ai-sdk-ng';

@Injectable({ providedIn: 'root' })
export class ChatService {
  chat = new Chat({ api: '/api/completion' });
}
