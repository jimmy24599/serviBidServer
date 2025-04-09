import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { useUser } from '@clerk/clerk-expo';

interface Chat {
  id: string;
  participants: string[];
  lastMessage: string;
  lastMessageAt: string;
}

interface Message {
  id: string;
  content: string;
  senderId: string;
  timestamp: string;
}

export default function ProviderMessages() {
  const { user } = useUser();
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  // Fetch provider's chats
  useEffect(() => {
    if (!user?.id) return;

    const fetchChats = async () => {
        try {
          const response = await fetch(
            `https://backend-zsxc.vercel.app/chats?userId=${user.id}`
          );
          
          // Check if response is OK first
          if (!response.ok) {
            const text = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, response: ${text}`);
          }
          
          const data = await response.json();
          setChats(data);
        } catch (error) {
          console.error('Error fetching chats:', error);
          // Add user-facing error message
          alert('Failed to load chats. Please try again later.');
        }
      };

    fetchChats();
  }, [user?.id]);

  // Load messages when chat is selected
  useEffect(() => {
    if (!selectedChat) return;

    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `https://backend-zsxc.vercel.app/chats/${selectedChat}/messages`
        );
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [selectedChat]);

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedChat || !user?.id) return;

    try {
      const response = await fetch(
        `https://backend-zsxc.vercel.app/chats/${selectedChat}/messages`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            senderId: user.id,
            content: newMessage,
          }),
        }
      );

      if (response.ok) {
        setNewMessage('');
        // Refresh messages after sending
        const updatedResponse = await fetch(
          `https://backend-zsxc.vercel.app/chats/${selectedChat}/messages`
        );
        const updatedData = await updatedResponse.json();
        setMessages(updatedData);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  if (!selectedChat) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Chats</Text>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatItem}
              onPress={() => setSelectedChat(item.id)}
            >
              <Text style={styles.chatTitle}>
                Chat with {item.participants.find(id => id !== user?.id)}
              </Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
              <Text style={styles.timestamp}>
                {new Date(item.lastMessageAt).toLocaleString()}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[
            styles.messageBubble,
            item.senderId === user?.id ? styles.sentMessage : styles.receivedMessage
          ]}>
            <Text style={styles.messageText}>{item.content}</Text>
            <Text style={styles.messageTime}>
              {new Date(item.timestamp).toLocaleTimeString()}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.messagesContainer}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Keep the same styles as previous answer
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        backgroundColor: '#fff',
      },
      chatItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
      },
      chatTitle: {
        fontSize: 16,
        fontWeight: '500',
      },
      lastMessage: {
        color: '#666',
        marginTop: 4,
      },
      timestamp: {
        color: '#999',
        fontSize: 12,
        marginTop: 4,
      },
      messagesContainer: {
        padding: 16,
      },
      messageBubble: {
        maxWidth: '80%',
        padding: 12,
        borderRadius: 12,
        marginBottom: 8,
      },
      sentMessage: {
        backgroundColor: '#007bff',
        alignSelf: 'flex-end',
      },
      receivedMessage: {
        backgroundColor: '#e9ecef',
        alignSelf: 'flex-start',
      },
      messageText: {
        color: '#000',
        fontSize: 16,
      },
      messageTime: {
        color: '#666',
        fontSize: 12,
        marginTop: 4,
      },
      inputContainer: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 25,
        paddingHorizontal: 16,
        marginRight: 8,
        fontSize: 16,
      },
      sendButton: {
        backgroundColor: '#007bff',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        justifyContent: 'center',
      },
      sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
});