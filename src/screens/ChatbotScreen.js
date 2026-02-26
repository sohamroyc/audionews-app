import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ChatbotScreen({ navigation }) {
    const [messages, setMessages] = useState([
        { id: '1', role: 'bot', text: 'Hello! I\'m your AI news assistant. How can I help you with your news listening experience or rewards today?' },
        { id: '2', role: 'user', text: 'How do I withdraw my reward gems?' },
        { id: '3', role: 'bot', text: 'To withdraw your gems, go to your Rewards Dashboard and tap on the \'Claim\' button. You need at least 500 gems to make your first withdrawal. 💎', highlighted: 'Rewards Dashboard' }
    ]);
    const [inputText, setInputText] = useState('');

    const suggestions = ['Login Issues', 'Voice Options', 'Change Language'];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="#0EA5E9" />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Support</Text>
                <TouchableOpacity>
                    <Ionicons name="information-circle" size={24} color="#111827" />
                </TouchableOpacity>
            </View>

            {/* Chat Area */}
            <ScrollView contentContainerStyle={styles.chatScroll} showsVerticalScrollIndicator={false}>
                <Text style={styles.dateSeparator}>TODAY</Text>

                {messages.map((msg, idx) => (
                    <View key={msg.id} style={[styles.messageWrapper, msg.role === 'user' ? styles.userMessageWrapper : styles.botMessageWrapper]}>

                        {msg.role === 'bot' && (
                            <View style={styles.botAvatar}>
                                <Ionicons name="logo-android" size={16} color="#0EA5E9" />
                            </View>
                        )}

                        <View style={{ maxWidth: '85%' }}>
                            {msg.role === 'bot' && idx !== 2 && <Text style={styles.botName}>VOX SUPPORT BOT</Text>}
                            {msg.role === 'bot' && idx === 2 && <Text style={styles.botName}>VOX SUPPORT BOT</Text>}
                            {msg.role === 'user' && <Text style={styles.userName}>YOU <View style={styles.userAvatarPlaceholder}></View></Text>}

                            <View style={[styles.messageBubble, msg.role === 'user' ? styles.userBubble : styles.botBubble]}>
                                {msg.highlighted ? (
                                    <Text style={[styles.messageText, msg.role === 'user' ? styles.userText : styles.botText]}>
                                        To withdraw your gems, go to your <Text style={styles.highlightText}>{msg.highlighted}</Text> and tap on the 'Claim' button. You need at least 500 gems to make your first withdrawal. 💎
                                    </Text>
                                ) : (
                                    <Text style={[styles.messageText, msg.role === 'user' ? styles.userText : styles.botText]}>{msg.text}</Text>
                                )}
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Bottom Actions Area */}
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.bottomArea}>
                <View style={styles.suggestionsContainer}>
                    {suggestions.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.suggestionChip}>
                            <Text style={styles.suggestionText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.inputContainer}>
                    <View style={styles.inputWrapper}>
                        <View style={styles.inputBotIcon}>
                            <Ionicons name="logo-android" size={24} color="#0EA5E9" />
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Type your question..."
                            placeholderTextColor="#9CA3AF"
                            value={inputText}
                            onChangeText={setInputText}
                        />
                    </View>
                    <TouchableOpacity style={styles.sendButton}>
                        <Ionicons name="send" size={20} color="#FFF" style={{ marginLeft: 4 }} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },

    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
    backButton: { flexDirection: 'row', alignItems: 'center' },
    backText: { color: '#0EA5E9', fontSize: 16, fontWeight: '600', marginLeft: 2 },
    headerTitle: { fontSize: 18, fontWeight: '800', color: '#111827' },

    chatScroll: { padding: 20, paddingBottom: 40 },
    dateSeparator: { alignSelf: 'center', color: '#64748B', fontSize: 12, fontWeight: '700', marginVertical: 16, letterSpacing: 1 },

    messageWrapper: { flexDirection: 'row', marginBottom: 24, alignItems: 'flex-start' },
    botMessageWrapper: { justifyContent: 'flex-start' },
    userMessageWrapper: { justifyContent: 'flex-end', alignItems: 'flex-start' },

    botAvatar: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F0F9FF', justifyContent: 'center', alignItems: 'center', marginRight: 12, marginTop: 24 },
    botName: { color: '#64748B', fontSize: 11, fontWeight: '800', marginBottom: 8, textTransform: 'uppercase' },
    userName: { color: '#64748B', fontSize: 11, fontWeight: '800', marginBottom: 8, alignSelf: 'flex-end', textTransform: 'uppercase', flexDirection: 'row', alignItems: 'center' },
    userAvatarPlaceholder: { width: 24, height: 24, backgroundColor: '#FED7AA', borderRadius: 12, marginLeft: 8 },

    messageBubble: { padding: 18, borderRadius: 20 },
    botBubble: { backgroundColor: '#F8FAFC', borderTopLeftRadius: 4 },
    userBubble: { backgroundColor: '#0EA5E9', borderTopRightRadius: 4 },

    messageText: { fontSize: 16, lineHeight: 24, fontWeight: '500' },
    botText: { color: '#1E293B' },
    userText: { color: '#FFFFFF' },
    highlightText: { color: '#0EA5E9', fontWeight: '700' },

    bottomArea: { backgroundColor: '#FFFFFF', paddingHorizontal: 16, paddingBottom: 24 },
    suggestionsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 },
    suggestionChip: { borderWidth: 1, borderColor: '#E2E8F0', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 20, marginRight: 10, marginBottom: 10 },
    suggestionText: { color: '#0EA5E9', fontSize: 14, fontWeight: '800' },

    inputContainer: { flexDirection: 'row', alignItems: 'center' },
    inputWrapper: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#F1F5F9', borderRadius: 30, paddingHorizontal: 6, paddingVertical: 6, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
    inputBotIcon: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#F0F9FF', justifyContent: 'center', alignItems: 'center', marginRight: 8 },
    textInput: { flex: 1, fontSize: 15, color: '#1E293B', paddingRight: 10 },

    sendButton: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#0EA5E9', justifyContent: 'center', alignItems: 'center', marginLeft: 12, shadowColor: '#0EA5E9', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5 }
});
