export interface Session {
    title: string;
    description: string;
    video: string;
  }
  
  export interface SectionWithSessions {
     _id: string; 
    title: string;
    sessions: Session[];
  }