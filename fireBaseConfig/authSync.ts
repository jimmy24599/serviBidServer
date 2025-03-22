
import { auth, db } from './firebaseConfig';
import { useAuth } from '@clerk/clerk-expo';
import { signInWithCustomToken } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const useAuthSync = () => {
  const { getToken, userId: clerkUserId, isSignedIn } = useAuth();

  const syncUser = async () => {
    if (!isSignedIn || !clerkUserId) return;

    try {
      // 1. Get Clerk JWT with proper type assertion
      const token = await getToken({ template: 'firebase' });
      
      if (!token) {
        throw new Error('No authentication token available');
      }

      // 2. Sign in to Firebase using Clerk's token
      const userCredential = await signInWithCustomToken(auth, token);
      const firebaseUser = userCredential.user;

      // 3. Create/update user document in Firestore
      const userDocRef = doc(db, 'users', firebaseUser.uid);
      await setDoc(userDocRef, {
        clerkUserId,
        firebaseUid: firebaseUser.uid,
        lastLogin: new Date(),
      }, { merge: true });

      console.log('Auth sync successful');
    } catch (error) {
      console.error('Auth sync error:', error);
      // Add error handling UI feedback here later 
    }
  };

  return { syncUser };
};