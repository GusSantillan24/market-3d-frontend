import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const mockComments = [
  { id: 1, username: 'juan123', text: '¡Me encanta este post!' },
  { id: 2, username: 'maria.g', text: 'Muy bueno, gracias por compartir.' },
  { id: 3, username: 'coder_rock', text: '¿Dónde puedo descargarlo?' },
  { id: 4, username: '3d_artist', text: 'Impresionante calidad en el modelo.' },
  { id: 5, username: 'ana_perez', text: 'Lo voy a probar en mi impresora.' },
];

const Comentar = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const inputRef = useRef<TextInput>(null);
  const [comment, setComment] = useState('');
  const [inputHeight, setInputHeight] = useState(40);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (comment.trim() === '') return;

    console.log('Comentario enviado para post', id, ':', comment);
    setComment('');
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top + 60 : 60}
        style={styles.wrapper}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Comentarios</Text>
          <View style={{ width: 60 }} />
        </View>

        {/* Lista de comentarios */}
        <ScrollView
          style={styles.commentsList}
          contentContainerStyle={{ paddingBottom: 20 }}
          keyboardShouldPersistTaps="handled"
        >
          {mockComments.map(({ id, username, text }) => (
            <View key={id} style={styles.commentItem}>
              <Text style={styles.commentUsername}>{username}</Text>
              <Text style={styles.commentText}>{text}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Input de comentario */}
        <View style={styles.commentInputContainer}>
          <TextInput
            ref={inputRef}
            style={[styles.input, { height: Math.max(40, inputHeight) }]}
            placeholder="Escribí un comentario..."
            placeholderTextColor="#888"
            value={comment}
            onChangeText={setComment}
            multiline
            onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)}
          />
          <TouchableOpacity
            style={[styles.sendButton, { opacity: comment.trim() ? 1 : 0.5 }]}
            onPress={handleSend}
            disabled={!comment.trim()}
          >
            <Text style={styles.sendText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Comentar;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#121212',
  },
  wrapper: {
    flex: 1,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: '#121212',
  },
  closeButton: {
    width: 60,
  },
  closeButtonText: {
    color: '#66aaff',
    fontWeight: '600',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#eee',
  },
  commentsList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  commentItem: {
    marginBottom: 16,
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 12,
  },
  commentUsername: {
    fontWeight: '700',
    color: '#66aaff',
    marginBottom: 6,
    fontSize: 15,
  },
  commentText: {
    fontSize: 15,
    color: '#ccc',
    lineHeight: 20,
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    paddingTop: 14,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
    backgroundColor: '#121212',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#222',
    maxHeight: 120,
    color: '#eee',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#66aaff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendText: {
    color: '#121212',
    fontWeight: '700',
    fontSize: 16,
  },
});




