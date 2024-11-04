// Supabase Tables
export interface User {
  id: string;
  email: string;
  username: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface WatchParty {
  id: string;
  title: string;
  description: string;
  media_type: 'movie' | 'series' | 'game';
  media_title: string;
  media_cover_url?: string;
  host_id: string;
  is_private: boolean;
  scheduled_for: string;
  status: 'scheduled' | 'active' | 'ended';
  created_at: string;
  updated_at: string;
}

export interface Rating {
  id: string;
  user_id: string;
  media_id: string;
  rating: number;
  comment?: string;
  created_at: string;
  updated_at: string;
}

// Firebase Realtime Database
export interface RealtimeWatchParty {
  id: string;
  currentTime: number;
  isPlaying: boolean;
  participants: {
    [userId: string]: {
      isOnline: boolean;
      lastSeen: number;
      hasVideo: boolean;
      hasAudio: boolean;
    };
  };
  chat: {
    [messageId: string]: {
      userId: string;
      content: string;
      timestamp: number;
      type: 'text' | 'emoji' | 'system';
    };
  };
  sync: {
    timestamp: number;
    updatedBy: string;
  };
}