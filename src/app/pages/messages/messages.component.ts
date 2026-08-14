import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  userId: number;
  name: string;
  age: number;
  location: string;
  photo: string;
  online: boolean;
  lastMessage: string;
  lastTime: string;
  unread: number;
  favorite: boolean;
}

interface Message {
  id: number;
  senderId: number;
  text: string;
  time: string;
  edited?: boolean;
  reaction?: string;
  replyTo?: {
    id: number;
    text: string;
    senderName: string;
  };
}

@Component({
  standalone: true,
  selector: 'app-messages',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent {

  /* ============================================
     CURRENT LOGGED-IN USER
  ============================================ */

  currentUserId = 1;

  /* ============================================
     SELECTED USER
  ============================================ */

  selectedUser: User | null = null;

  /* ============================================
     SEARCH
  ============================================ */

  searchText = '';

  activeFilter: 'all' | 'unread' | 'favorite' = 'all';

  /* ============================================
     MOBILE
  ============================================ */

  mobileChatOpen = false;

  /* ============================================
     MESSAGE INPUT
  ============================================ */

  messageText = '';

  /* ============================================
     EDIT
  ============================================ */

  editingMessageId: number | null = null;

  editText = '';

  /* ============================================
     REPLY
  ============================================ */

  replyingTo: Message | null = null;

  /* ============================================
     REACTION
  ============================================ */

  reactionMessageId: number | null = null;

  reactions = [
    '❤️',
    '😊',
    '😂',
    '😍',
    '👍',
    '👏',
    '😮',
    '😢'
  ];

  /* ============================================
     USERS
  ============================================ */

  users: User[] = [

    {
      userId: 101,
      name: 'Priya Sharma',
      age: 25,
      location: 'Mumbai',
      photo: 'assets/images/priya.jpg',
      online: true,
      lastMessage: 'Hi! How are you?',
      lastTime: '10:30 AM',
      unread: 2,
      favorite: true
    },

    {
      userId: 102,
      name: 'Rahul Patil',
      age: 28,
      location: 'Pune',
      photo: 'assets/images/rahul.jpg',
      online: false,
      lastMessage: 'Thank you for connecting.',
      lastTime: 'Yesterday',
      unread: 0,
      favorite: false
    },

    {
      userId: 103,
      name: 'Neha Singh',
      age: 26,
      location: 'Nashik',
      photo: 'assets/images/neha.jpg',
      online: true,
      lastMessage: 'That sounds good 😊',
      lastTime: '2 days ago',
      unread: 0,
      favorite: false
    },

    {
      userId: 104,
      name: 'Amit Deshmukh',
      age: 29,
      location: 'Pune',
      photo: 'assets/images/amit.jpg',
      online: false,
      lastMessage: 'Okay, will talk later.',
      lastTime: '3 days ago',
      unread: 0,
      favorite: false
    },

    {
      userId: 105,
      name: 'Pooja More',
      age: 24,
      location: 'Nashik',
      photo: 'assets/images/pooja.jpg',
      online: false,
      lastMessage: 'Sent you a photo 📷',
      lastTime: '4 days ago',
      unread: 0,
      favorite: true
    }

  ];

  /* ============================================
     MESSAGES
  ============================================ */

  messages: {
    [key: number]: Message[]
  } = {

    101: [

      {
        id: 1,
        senderId: 101,
        text: 'Hi! Thank you for accepting my interest.',
        time: '10:25 AM'
      },

      {
        id: 2,
        senderId: 1,
        text: 'Hi Priya! You’re welcome 😊',
        time: '10:26 AM'
      },

      {
        id: 3,
        senderId: 1,
        text: 'How are you?',
        time: '10:26 AM'
      },

      {
        id: 4,
        senderId: 101,
        text: "I'm good, thank you! How about you?",
        time: '10:28 AM'
      },

      {
        id: 5,
        senderId: 101,
        text: "That's awesome! I'm a marketing professional. Nice to meet you 😊",
        time: '10:30 AM'
      },

      {
        id: 6,
        senderId: 1,
        text: 'Nice to meet you too! 😊',
        time: '10:30 AM'
      }

    ],

    102: [

      {
        id: 7,
        senderId: 102,
        text: 'Hello! Thank you for connecting.',
        time: 'Yesterday'
      }

    ],

    103: [

      {
        id: 8,
        senderId: 103,
        text: 'Hi! How are you doing?',
        time: '2 days ago'
      }

    ],

    104: [],

    105: [

      {
        id: 9,
        senderId: 105,
        text: 'Hello 😊',
        time: '4 days ago'
      }

    ]

  };

  /* ============================================
     GET FILTERED USERS
  ============================================ */

  get filteredUsers(): User[] {

    let result = [...this.users];

    /* Search */

    if (this.searchText.trim()) {

      const search =
        this.searchText.toLowerCase();

      result = result.filter(user =>
        user.name.toLowerCase().includes(search) ||
        user.lastMessage.toLowerCase().includes(search)
      );

    }

    /* Unread */

    if (this.activeFilter === 'unread') {

      result =
        result.filter(user => user.unread > 0);

    }

    /* Favorites */

    if (this.activeFilter === 'favorite') {

      result =
        result.filter(user => user.favorite);

    }

    return result;
  }

  /* ============================================
     GET CURRENT CHAT
  ============================================ */

  get currentMessages(): Message[] {

    if (!this.selectedUser) {
      return [];
    }

    return this.messages[this.selectedUser.userId] || [];
  }

  /* ============================================
     SELECT USER
  ============================================ */

  selectUser(user: User): void {

    this.selectedUser = user;

    this.mobileChatOpen = true;

    /* Mark unread as read */

    user.unread = 0;

    this.cancelEdit();

    this.cancelReply();

    this.closeReaction();

  }

  /* ============================================
     MOBILE BACK
  ============================================ */

  backToUsers(): void {

    this.mobileChatOpen = false;

    this.selectedUser = null;

    this.cancelEdit();

    this.cancelReply();

    this.closeReaction();

  }

  /* ============================================
     SEND MESSAGE
  ============================================ */

  sendMessage(): void {

    if (!this.selectedUser) {
      return;
    }

    const text =
      this.messageText.trim();

    if (!text) {
      return;
    }

    const newMessage: Message = {

      id: Date.now(),

      senderId: this.currentUserId,

      text: text,

      time: this.getCurrentTime()

    };

    /* Reply */

    if (this.replyingTo) {

      newMessage.replyTo = {

        id: this.replyingTo.id,

        text: this.replyingTo.text,

        senderName:
          this.replyingTo.senderId === this.currentUserId
            ? 'You'
            : this.selectedUser.name

      };

    }

    this.currentMessages.push(newMessage);

    /* Update conversation preview */

    this.selectedUser.lastMessage = text;

    this.selectedUser.lastTime =
      newMessage.time;

    this.messageText = '';

    this.cancelReply();

  }

  /* ============================================
     ENTER KEY
  ============================================ */

  handleEnter(event: KeyboardEvent): void {

    if (event.key === 'Enter' && !event.shiftKey) {

      event.preventDefault();

      this.sendMessage();

    }

  }

  /* ============================================
     START EDIT
  ============================================ */

  editMessage(message: Message): void {

    if (message.senderId !== this.currentUserId) {
      return;
    }

    this.editingMessageId =
      message.id;

    this.editText =
      message.text;

    this.closeReaction();

  }

  /* ============================================
     SAVE EDIT
  ============================================ */

  saveEdit(): void {

    if (this.editingMessageId === null) {
      return;
    }

    const message =
      this.currentMessages.find(
        item =>
          item.id === this.editingMessageId
      );

    if (!message) {
      return;
    }

    const text =
      this.editText.trim();

    if (!text) {
      return;
    }

    message.text = text;

    message.edited = true;

    this.editingMessageId = null;

    this.editText = '';

  }

  /* ============================================
     CANCEL EDIT
  ============================================ */

  cancelEdit(): void {

    this.editingMessageId = null;

    this.editText = '';

  }

  /* ============================================
     DELETE MESSAGE
  ============================================ */

  deleteMessage(message: Message): void {

    if (message.senderId !== this.currentUserId) {
      return;
    }

    const confirmDelete =
      confirm('Delete this message?');

    if (!confirmDelete) {
      return;
    }

    if (!this.selectedUser) {
      return;
    }

    const list =
      this.messages[this.selectedUser.userId];

    this.messages[this.selectedUser.userId] =
      list.filter(
        item => item.id !== message.id
      );

    this.cancelEdit();

    this.cancelReply();

    this.closeReaction();

  }

  /* ============================================
     REPLY
  ============================================ */

  replyMessage(message: Message): void {

    this.replyingTo = message;

    this.closeReaction();

  }

  /* ============================================
     CANCEL REPLY
  ============================================ */

  cancelReply(): void {

    this.replyingTo = null;

  }

  /* ============================================
     OPEN REACTION
  ============================================ */

  toggleReactionPicker(message: Message): void {

    if (this.reactionMessageId === message.id) {

      this.reactionMessageId = null;

    } else {

      this.reactionMessageId =
        message.id;

    }

  }

  /* ============================================
     REACT
  ============================================ */

  reactToMessage(
    message: Message,
    reaction: string
  ): void {

    message.reaction = reaction;

    this.reactionMessageId = null;

  }

  /* ============================================
     REMOVE REACTION
  ============================================ */

  removeReaction(message: Message): void {

    message.reaction = undefined;

    this.reactionMessageId = null;

  }

  /* ============================================
     CLOSE REACTION
  ============================================ */

  closeReaction(): void {

    this.reactionMessageId = null;

  }

  /* ============================================
     CURRENT TIME
  ============================================ */

  getCurrentTime(): string {

    return new Date().toLocaleTimeString(
      [],
      {
        hour: '2-digit',
        minute: '2-digit'
      }
    );

  }

  /* ============================================
     TRACK USERS
  ============================================ */

  trackUser(
    index: number,
    user: User
  ): number {

    return user.userId;

  }

  /* ============================================
     TRACK MESSAGES
  ============================================ */

  trackMessage(
    index: number,
    message: Message
  ): number {

    return message.id;

  }

}