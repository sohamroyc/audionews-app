import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatbotScreen({ navigation }) {
    const [messages, setMessages] = useState([
        { id: '1', text: "Hi! I'm your AudioNews AI support assistant. How can I help you today?", isBot: true },
    ]);
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        if (!inputText.trim()) return;

        const userMessage = { id: Date.now().toString(), text: inputText, isBot: false };
        setMessages([...messages, userMessage]);
        setInputText('');

        // Simulate bot response
        setTimeout(() => {
            const botMessage = { id: (Date.now() + 1).toString(), text: "Thanks for reaching out! A human agent will address your query regarding the latest news curation shortly.", isBot: true };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Ionicons name="close" size={24} color="#111827" />
                </TouchableOpacity>
                <View style={styles.headerInfo}>
                    <View style={styles.avatarBg}>
                        <Ionicons name="headset" size={20} color="#4F46E5" />
                    </View>
                    <Text style={styles.headerTitle}>Help & Support</Text>
                </View>
                <View style={{ width: 40 }} />
            </View>

            <FlatList
                data={messages}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.chatList}
                renderItem={({ item }) => (
                    <View style={[styles.messageBubble, item.isBot ? styles.botBubble : styles.userBubble]}>
                        <Text style={[styles.messageText, item.isBot ? styles.botText : styles.userText]}>{item.text}</Text>
                    </View>
                )}
            />

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    placeholderTextColor="#9CA3AF"
                    value={inputText}
                    onChangeText={setInputText}
                    multiline
                />
                <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
                    <Ionicons name="send" size={20} color="#FFF" style={{ marginLeft: 4 }} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
    backBtn: { padding: 8, backgroundColor: '#F3F4F6', borderRadius: 20 },
    headerInfo: { flexDirection: 'row', alignItems: 'center' },
    avatarBg: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#EEF2FF', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
    headerTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },
    chatList: { padding: 20, paddingBottom: 40 },
    messageBubble: { padding: 16, borderRadius: 20, marginBottom: 12, maxWidth: '80%' },
    botBubble: { backgroundColor: '#FFFFFF', alignSelf: 'flex-start', borderBottomLeftRadius: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
    userBubble: { backgroundColor: '#4F46E5', alignSelf: 'flex-end', borderBottomRightRadius: 4 },
    messageText: { fontSize: 15, lineHeight: 22 },
    botText: { color: '#374151' },
    userText: { color: '#FFF' },
    inputArea: { flexDirection: 'row', alignItems: 'flex-end', padding: 16, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#F3F4F6' },
    input: { flex: 1, backgroundColor: '#F3F4F6', borderRadius: 24, paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16, fontSize: 16, color: '#111827', maxHeight: 120 },
    sendBtn: { width: 52, height: 52, borderRadius: 26, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center', marginLeft: 12, shadowColor: '#4F46E5', shadowOffset: { height: 4, width: 0 }, shadowOpacity: 0.3, shadowRadius: 6, elevation: 4 }
});
