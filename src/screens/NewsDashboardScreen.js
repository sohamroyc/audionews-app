import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const NEWS_DATA = [
    { id: '1', title: 'Global Economy Shows Signs of Recovery', snippet: 'Recent metrics indicate a steady climb in global GDP, surpassing early expectations.', category: 'Economy', time: '1 hr ago' },
    { id: '2', title: 'New Tech Regulations Passed', snippet: 'Governments worldwide agree on a new framework for regulating artificial intelligence.', category: 'Geopolitics', time: '3 hrs ago' },
    { id: '3', title: 'Market Hits All-Time High', snippet: 'The stock market rallied today as tech giants reported massive quarterly earnings.', category: 'Finance', time: '5 hrs ago' },
];

export default function NewsDashboardScreen({ navigation }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentNews, setCurrentNews] = useState(NEWS_DATA[0]);

    const togglePlay = () => {
        if (isPlaying) {
            Speech.stop();
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            Speech.speak(`Here is your news. ${currentNews.title}. ${currentNews.snippet}`, {
                language: 'en',
                onDone: () => setIsPlaying(false),
            });
        }
    };

    useEffect(() => {
        return () => Speech.stop(); // Cleanup
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>AudioNews</Text>
                </View>
                <View style={styles.topActions}>
                    <TouchableOpacity style={styles.iconBtn}><Ionicons name="search" size={24} color="#374151" /></TouchableOpacity>
                    <TouchableOpacity style={styles.iconBtn}><Ionicons name="notifications-outline" size={24} color="#374151" /></TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.greeting}>Good Morning, User</Text>
                <Text style={styles.subGreeting}>Here is your personalized feed.</Text>

                {/* Player Card */}
                <View style={styles.playerCard}>
                    <View style={styles.playerHeader}>
                        <View style={styles.categoryBadge}>
                            <Text style={styles.nowPlayingCategory}>{currentNews.category}</Text>
                        </View>
                        <Text style={styles.nowPlayingTime}>{currentNews.time}</Text>
                    </View>
                    <Text style={styles.nowPlayingTitle}>{currentNews.title}</Text>
                    <Text style={styles.nowPlayingSnippet} numberOfLines={3}>{currentNews.snippet}</Text>

                    <View style={styles.controls}>
                        <TouchableOpacity style={styles.secondaryCtrl}><Ionicons name="play-skip-back" size={28} color="#4B5563" /></TouchableOpacity>
                        <TouchableOpacity style={styles.playCtrl} onPress={togglePlay}>
                            <Ionicons name={isPlaying ? "pause" : "play"} size={32} color="#FFF" style={{ marginLeft: isPlaying ? 0 : 4 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.secondaryCtrl}><Ionicons name="play-skip-forward" size={28} color="#4B5563" /></TouchableOpacity>
                    </View>
                    {isPlaying && (
                        <View style={styles.waveformContainer}>
                            <Ionicons name="pulse" size={24} color="#4F46E5" />
                            <Ionicons name="pulse" size={24} color="#4F46E5" />
                            <Ionicons name="pulse" size={24} color="#4F46E5" />
                        </View>
                    )}
                </View>

                {/* List of News */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Up Next</Text>
                    <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
                </View>

                {NEWS_DATA.map(news => (
                    <TouchableOpacity key={news.id} style={[styles.newsListItem, currentNews.id === news.id && styles.newsListActive]} onPress={() => { setCurrentNews(news); setIsPlaying(false); Speech.stop(); }}>
                        <View style={styles.newsIconBg}>
                            <Ionicons name="newspaper-outline" size={24} color="#4F46E5" />
                        </View>
                        <View style={styles.newsListInfo}>
                            <Text style={styles.newsListTitle} numberOfLines={1}>{news.title}</Text>
                            <Text style={styles.newsListCategory}>{news.category} • {news.time}</Text>
                        </View>
                        <Ionicons name="play-circle" size={32} color={currentNews.id === news.id ? "#4F46E5" : "#D1D5DB"} />
                    </TouchableOpacity>
                ))}

            </ScrollView>

            {/* Chatbot trigger */}
            <TouchableOpacity style={styles.chatbotBtn} onPress={() => navigation.navigate('Chatbot')}>
                <Ionicons name="chatbubbles" size={28} color="#FFF" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    topBar: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 10, alignItems: 'center' },
    logo: { color: '#4F46E5', fontSize: 24, fontWeight: '900', letterSpacing: -0.5 },
    topActions: { flexDirection: 'row' },
    iconBtn: { marginLeft: 20, backgroundColor: '#FFFFFF', padding: 8, borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
    scroll: { padding: 24, paddingBottom: 100 },
    greeting: { color: '#111827', fontSize: 32, fontWeight: '900', letterSpacing: -0.5 },
    subGreeting: { color: '#6B7280', fontSize: 16, marginBottom: 24, marginTop: 4 },

    playerCard: { backgroundColor: '#FFFFFF', padding: 24, borderRadius: 24, shadowColor: '#4F46E5', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 8, marginBottom: 32 },
    playerHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    categoryBadge: { backgroundColor: '#EEF2FF', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
    nowPlayingCategory: { color: '#4F46E5', fontSize: 12, fontWeight: '700', textTransform: 'uppercase' },
    nowPlayingTime: { color: '#9CA3AF', fontSize: 13, fontWeight: '500' },
    nowPlayingTitle: { color: '#111827', fontSize: 24, fontWeight: '800', marginBottom: 8, lineHeight: 30 },
    nowPlayingSnippet: { color: '#6B7280', fontSize: 15, lineHeight: 22, marginBottom: 32 },
    controls: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    playCtrl: { backgroundColor: '#4F46E5', width: 72, height: 72, borderRadius: 36, justifyContent: 'center', alignItems: 'center', marginHorizontal: 24, shadowColor: '#4F46E5', shadowOffset: { height: 6, width: 0 }, shadowOpacity: 0.4, shadowRadius: 10, elevation: 8 },
    secondaryCtrl: { padding: 12, backgroundColor: '#F3F4F6', borderRadius: 24 },
    waveformContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 24, gap: -4 },

    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    sectionTitle: { color: '#111827', fontSize: 20, fontWeight: '800' },
    seeAll: { color: '#4F46E5', fontSize: 14, fontWeight: '600' },

    newsListItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 16, borderRadius: 20, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 2, borderWidth: 1, borderColor: '#F3F4F6' },
    newsListActive: { borderColor: '#EEF2FF', backgroundColor: '#F8FAFC' },
    newsIconBg: { width: 48, height: 48, backgroundColor: '#EEF2FF', borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
    newsListInfo: { flex: 1, paddingRight: 16 },
    newsListTitle: { color: '#111827', fontSize: 16, fontWeight: '700', marginBottom: 4 },
    newsListCategory: { color: '#6B7280', fontSize: 13, fontWeight: '500' },

    chatbotBtn: { position: 'absolute', bottom: 20, right: 20, backgroundColor: '#4F46E5', width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', shadowColor: '#4F46E5', shadowOffset: { height: 6, width: 0 }, shadowOpacity: 0.4, shadowRadius: 10, elevation: 8 },
});
