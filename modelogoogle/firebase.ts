
/**
 * ARQUITETURA DE DADOS (FIRESTORE)
 * 
 * Coleção: audios
 * - title: string
 * - intro: string
 * - audioUrl: string
 * - thumbnailUrl: string
 * - tags: array<string>
 * - trackId: string
 * - order: number
 * - isPremium: boolean
 * - duration: number
 * - published: boolean
 * 
 * Coleção: tracks
 * - title: string
 * - description: string
 * - order: number
 * - thumbnailUrl: string
 * 
 * Coleção: users
 * - email: string
 * - isAdmin: boolean
 * - isPremium: boolean
 * - favorites: array<string> (audioId)
 * 
 * Coleção: progress (docId: userId_audioId)
 * - userId: string
 * - audioId: string
 * - position: number
 * - completed: boolean
 * - updatedAt: timestamp
 * 
 * --- REGRAS FIRESTORE ---
 * rules_version = '2';
 * service cloud.firestore {
 *   match /databases/{database}/documents {
 *     match /audios/{audioId} {
 *       allow read: if resource.data.isPremium == false || (request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isPremium == true);
 *       allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.isAdmin == true;
 *     }
 *     match /progress/{progressId} {
 *       allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
 *     }
 *   }
 * }
 */

// Este arquivo simula a inicialização para o protótipo.
export const db = {};
export const auth = {};
export const storage = {};
