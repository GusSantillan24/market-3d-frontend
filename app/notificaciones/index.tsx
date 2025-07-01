import NotificationsLayout from '@/components/layouts/notificationsLayout';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const quickActions = [
  { label: 'Likes', icon: 'heart-outline', route: '/notifications/likes' },
  { label: 'Comentarios', icon: 'message-outline', route: '/notifications/comentarios' },
  { label: 'Favoritos', icon: 'star-outline', route: '/notifications/favoritos' },
  { label: 'Seguidores', icon: 'account-multiple-outline', route: '/notifications/seguidores' },
];

const chats = [
  { title: 'System', icon: 'cog-outline' },
  { title: 'Notices', icon: 'bell-outline' },
  { title: 'Devices', icon: 'cellphone' },
];


const NotificationsScreen = () => {
  const router = useRouter();

  return (
    <NotificationsLayout onSettingsPress={() => router.push('/notificationes/settings')}>
      {/* Acciones rápidas */}
      <View style={styles.actionsRow}>
        {quickActions.map(action => (
          <TouchableOpacity
            key={action.label}
            style={styles.actionButton}
            onPress={() => router.push(action.route)}
          >
            <MaterialCommunityIcons
              name={action.icon}
              size={28}
              color="#fff"
              style={styles.icon}
            />
            <Text style={styles.actionText}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>


      {/* Chats generales */}
      <View style={styles.chatList}>
        {chats.map(chat => (
          <TouchableOpacity
            key={chat.title}
            style={styles.chatItem}
            onPress={() => console.log(`Ir a ${chat.title}`)}
          >
            <MaterialCommunityIcons
              name={chat.icon}
              size={26}
              color="#fff"
              style={styles.chatIcon}
            />
            <Text style={styles.chatText}>{chat.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </NotificationsLayout>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    marginBottom: 24,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 4,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
    chatList: {
    backgroundColor: '#1E1E1E',
    borderTopWidth: 1,
    borderTopColor: '#2a2a2a',
    paddingVertical: 8,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
  },
  chatIcon: {
    marginRight: 16,
  },
  chatText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});


