import { Client, Account, Databases, Storage, Avatars } from 'react-native-appwrite';

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')  // From your screenshot: fra.cloud.appwrite.io
  .setProject('69491f0600062e0100d3')                // Your project ID from the URL/console
  .setPlatform('com.lvi.shelfie');                  // Exact bundle ID you added

export const account = new Account(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);
export const avatars = new Avatars(client);
// Add other services as needed

export default client;