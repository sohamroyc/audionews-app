import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NEWS_DATA = [
    { id: '1', title: "Quantum Computing Breakthrough: IBM's Latest...", time: '4 min', xp: '20 XP', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop' },
    { id: '2', title: "Economy 2024: Market Trends You Need to Watch This Quarter", time: '6 min', xp: '30 XP', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop' },
    { id: '3', title: "Next Gen Space Travel: Mars Colonization Timeline Update", time: '5 min', xp: '25 XP', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop' },
    { id: '4', title: "Engineering the Future: Sustainable Materials in...", time: '7 min', xp: '35 XP', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop' },
];

export default function NewsDashboardScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.langBtn}>
                    <Text style={styles.langText}>A/A</Text>
                </TouchableOpacity>
                <Text style={styles.logoTitle}>VoxNews</Text>
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.iconBtn}>
                        <Ionicons name="search" size={24} color="#64748B" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBtn}>
                        <Ionicons name="notifications" size={24} color="#64748B" />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scroll}>

                {/* Player Card */}
                <View style={styles.playerCard}>
                    <View style={styles.playerHeaderRow}>
                        <View style={styles.nowPlayingBadge}>
                            <Text style={styles.nowPlayingText}>NOW PLAYING</Text>
                        </View>
                        <View style={styles.xpBadge}>
                            <Ionicons name="star" size={12} color="#0EA5E9" style={{ marginRight: 4 }} />
                            <Text style={styles.xpText}>+15 XP</Text>
                        </View>
                    </View>

                    <Text style={styles.playerTitle}>AI Ethics: The Global Race to Regulate the...</Text>

                    {/* Visualizer Mock */}
                    <View style={styles.visualizerContainer}>
                        {[1, 2, 4, 3, 5, 2, 6, 3, 2, 5, 4, 2].map((val, idx) => (
                            <View key={idx} style={[styles.bar, { height: val * 10 }]} />
                        ))}
                    </View>

                    {/* Progress Bar */}
                    <View style={styles.progressContainer}>
                        <View style={styles.progressTrack}>
                            <View style={styles.progressFill} />
                        </View>
                    </View>

                    <View style={styles.timeRow}>
                        <Text style={styles.timeText}>2:45 remaining</Text>
                        <View style={styles.authorContainer}>
                            <Ionicons name="person-circle" size={16} color="#475569" style={{ marginRight: 4 }} />
                            <Text style={styles.authorText}>AI Voice: Sarah (Professional)</Text>
                        </View>
                    </View>

                    {/* Play Controls */}
                    <View style={styles.controlsRow}>
                        <TouchableOpacity>
                            <Ionicons name="play-skip-back" size={28} color="#CBD5E1" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.playButton}>
                            <Ionicons name="pause" size={32} color="#FFF" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="play-skip-forward" size={28} color="#CBD5E1" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Section Header */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Tailored for You</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>

                {/* News List */}
                <View style={styles.listContainer}>
                    {NEWS_DATA.map((item) => (
                        <View key={item.id} style={styles.listItem}>
                            <Image source={{ uri: item.image }} style={styles.listImage} />
                            <View style={styles.listContent}>
                                <Text style={styles.listTitle} numberOfLines={2}>{item.title}</Text>
                                <View style={styles.listMetaRow}>
                                    <View style={styles.metaItem}>
                                        <Ionicons name="time" size={14} color="#64748B" style={{ marginRight: 4 }} />
                                        <Text style={styles.metaText}>{item.time}</Text>
                                    </View>
                                    <View style={styles.metaItem}>
                                        <Ionicons name="trophy" size={14} color="#64748B" style={{ marginRight: 4 }} />
                                        <Text style={styles.metaText}>{item.xp}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

            </ScrollView>

            {/* Floating Bot Button */}
            <TouchableOpacity style={styles.floatingBot} onPress={() => navigation.navigate('Chatbot')}>
                <Ionicons name="logo-android" size={32} color="#FFF" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8FAFC' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 16, backgroundColor: '#F8FAFC' },
    langBtn: { backgroundColor: '#E0F2FE', paddingHorizontal: 10, paddingVertical: 8, borderRadius: 8 },
    langText: { color: '#0EA5E9', fontWeight: '800', fontSize: 13 },
    logoTitle: { fontSize: 22, fontWeight: '900', color: '#1E293B', marginLeft: -30 },
    headerRight: { flexDirection: 'row', alignItems: 'center' },
    iconBtn: { marginLeft: 16, position: 'relative' },
    notificationDot: { position: 'absolute', top: 0, right: 0, width: 8, height: 8, borderRadius: 4, backgroundColor: '#EF4444', borderWidth: 1, borderColor: '#F8FAFC' },

    scroll: { padding: 20, paddingBottom: 100 },

    playerCard: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.05, shadowRadius: 20, elevation: 5, marginBottom: 32 },
    playerHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    nowPlayingBadge: { backgroundColor: '#E0F2FE', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
    nowPlayingText: { color: '#0EA5E9', fontSize: 11, fontWeight: '800', letterSpacing: 1 },
    xpBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F9FF', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
    xpText: { color: '#0EA5E9', fontSize: 12, fontWeight: '800' },
    playerTitle: { fontSize: 22, fontWeight: '800', color: '#1E293B', lineHeight: 30, marginBottom: 24 },

    visualizerContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60, marginBottom: 20 },
    bar: { width: 4, backgroundColor: '#38BDF8', marginHorizontal: 3, borderRadius: 2 },

    progressContainer: { marginBottom: 12 },
    progressTrack: { height: 6, backgroundColor: '#F1F5F9', borderRadius: 3, overflow: 'hidden' },
    progressFill: { height: '100%', width: '45%', backgroundColor: '#0EA5E9', borderRadius: 3 },

    timeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 },
    timeText: { color: '#94A3B8', fontSize: 13, fontWeight: '600' },
    authorContainer: { flexDirection: 'row', alignItems: 'center' },
    authorText: { color: '#64748B', fontSize: 13, fontWeight: '700' },

    controlsRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    playButton: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#0EA5E9', justifyContent: 'center', alignItems: 'center', marginHorizontal: 36, shadowColor: '#0EA5E9', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16, elevation: 8 },

    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    sectionTitle: { fontSize: 20, fontWeight: '800', color: '#1E293B' },
    viewAllText: { color: '#0EA5E9', fontSize: 14, fontWeight: '700' },

    listContainer: { backgroundColor: '#FFFFFF', borderRadius: 24, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.03, shadowRadius: 10, elevation: 3 },
    listItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F8FAFC' },
    listImage: { width: 72, height: 72, borderRadius: 16, backgroundColor: '#E2E8F0', marginRight: 16 },
    listContent: { flex: 1 },
    listTitle: { fontSize: 15, fontWeight: '700', color: '#1E293B', lineHeight: 22, marginBottom: 8 },
    listMetaRow: { flexDirection: 'row', alignItems: 'center' },
    metaItem: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
    metaText: { color: '#64748B', fontSize: 13, fontWeight: '600' },

    floatingBot: { position: 'absolute', bottom: 20, right: 20, backgroundColor: '#0EA5E9', width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', shadowColor: '#0EA5E9', shadowOffset: { height: 8, width: 0 }, shadowOpacity: 0.4, shadowRadius: 16, elevation: 8 }
});
