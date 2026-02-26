import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const languages = [
    { id: 'en', name: 'English', icon: 'language' },
    { id: 'hi', name: 'Hindi', icon: 'language-outline' },
    { id: 'bn', name: 'Bengali', icon: 'language-outline' },
    { id: 'ta', name: 'Tamil', icon: 'language-outline' },
    { id: 'te', name: 'Telugu', icon: 'language-outline' },
    { id: 'mr', name: 'Marathi', icon: 'language-outline' },
];

export default function LanguageSettingsScreen({ navigation }) {
    const [selectedTextLang, setSelectedTextLang] = useState('English');
    const [selectedAudioLang, setSelectedAudioLang] = useState('English');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Language Settings</Text>
                    <Text style={styles.subheader}>Choose how you want to read and listen to your news.</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>App Interface Language</Text>
                    <View style={styles.optionsGrid}>
                        {languages.map(lang => (
                            <TouchableOpacity
                                key={`text-${lang.name}`}
                                style={[styles.optionCard, selectedTextLang === lang.name && styles.optionCardActive]}
                                onPress={() => setSelectedTextLang(lang.name)}
                            >
                                <Text style={[styles.optionText, selectedTextLang === lang.name && styles.optionTextActive]}>{lang.name}</Text>
                                {selectedTextLang === lang.name && <Ionicons name="checkmark-circle" size={20} color="#4F46E5" style={styles.checkIcon} />}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Audio News Synthesis</Text>
                    <View style={styles.optionsGrid}>
                        {languages.map(lang => (
                            <TouchableOpacity
                                key={`audio-${lang.name}`}
                                style={[styles.optionCard, selectedAudioLang === lang.name && styles.optionCardActive]}
                                onPress={() => setSelectedAudioLang(lang.name)}
                            >
                                <Text style={[styles.optionText, selectedAudioLang === lang.name && styles.optionTextActive]}>{lang.name}</Text>
                                {selectedAudioLang === lang.name && <Ionicons name="checkmark-circle" size={20} color="#4F46E5" style={styles.checkIcon} />}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.buttonText}>Continue to Dashboard</Text>
                    <Ionicons name="rocket" size={20} color="#FFF" style={{ marginLeft: 8 }} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    content: { padding: 20, paddingTop: 60 },
    headerContainer: { marginBottom: 32 },
    header: { fontSize: 32, fontWeight: '900', color: '#111827', marginBottom: 12, letterSpacing: -0.5 },
    subheader: { fontSize: 16, color: '#6B7280', lineHeight: 24 },
    card: { backgroundColor: '#FFFFFF', padding: 20, borderRadius: 24, marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 15, elevation: 3 },
    sectionTitle: { fontSize: 18, color: '#111827', fontWeight: '800', marginBottom: 16 },
    optionsGrid: { flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' },
    optionCard: { width: '48%', backgroundColor: '#F3F4F6', paddingVertical: 18, paddingHorizontal: 12, borderRadius: 16, marginBottom: 16, borderWidth: 2, borderColor: '#F3F4F6', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    optionCardActive: { borderColor: '#4F46E5', backgroundColor: '#EEF2FF' },
    optionText: { color: '#4B5563', fontSize: 16, fontWeight: '600' },
    optionTextActive: { color: '#4F46E5', fontWeight: 'bold' },
    checkIcon: { position: 'absolute', right: 8, top: 16 },
    footer: { padding: 24, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#E5E7EB' },
    button: { backgroundColor: '#4F46E5', paddingVertical: 18, borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', shadowColor: '#4F46E5', shadowOffset: { height: 4, width: 0 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
    buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});
