import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const INITIAL_REELS = [
    { id: '1', author: '@PriyaNews', title: 'Summary of the new EV policy', time: '2h ago', status: 'Approved', likes: '1.2k' },
    { id: '2', author: '@RahulTalks', title: 'Stock Market Breakdown', time: '5h ago', status: 'Approved', likes: '890' },
    { id: '3', author: '@Me (Pending)', title: 'Local elections insight', time: '1d ago', status: 'In Review Queue', likes: '0' },
];

export default function CommunityReelsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Community Reels</Text>
                <TouchableOpacity style={styles.createBtn}>
                    <Ionicons name="add" size={20} color="#FFF" style={{ marginRight: 4 }} />
                    <Text style={styles.createBtnText}>Post</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoBanner}>
                <Ionicons name="information-circle" size={20} color="#EA580C" style={{ marginRight: 8 }} />
                <Text style={styles.infoText}>Posts enter a 4-5 day review queue to ensure accuracy.</Text>
            </View>

            <FlatList
                data={INITIAL_REELS}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 40 }}
                renderItem={({ item }) => (
                    <View style={styles.reelItem}>
                        <View style={styles.reelPlaceholder}>
                            <View style={styles.playButtonOverlay}>
                                <Ionicons name="play" size={32} color="#FFF" style={{ marginLeft: 4 }} />
                            </View>
                            <Text style={styles.videoLengthTag}>0:45</Text>
                        </View>
                        <View style={styles.reelInfo}>
                            <Text style={styles.reelTitle} numberOfLines={2}>{item.title}</Text>
                            <Text style={styles.reelAuthor}>{item.author}</Text>

                            <View style={styles.reelMeta}>
                                <View style={[styles.statusBadge, item.status.includes('Review') ? styles.pendingBadge : styles.approvedBadge]}>
                                    <Text style={[styles.statusText, item.status.includes('Review') ? styles.pendingText : styles.approvedText]}>
                                        {item.status}
                                    </Text>
                                </View>
                                <View style={styles.likesContainer}>
                                    <Ionicons name="heart" size={16} color="#EF4444" style={{ marginRight: 4 }} />
                                    <Text style={styles.likesText}>{item.likes}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, paddingTop: 16 },
    title: { fontSize: 28, fontWeight: '900', color: '#111827', letterSpacing: -0.5 },
    createBtn: { backgroundColor: '#4F46E5', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 20, shadowColor: '#4F46E5', shadowOffset: { height: 4, width: 0 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
    createBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
    infoBanner: { backgroundColor: '#FFF7ED', marginHorizontal: 24, padding: 14, borderRadius: 16, marginBottom: 24, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#FFEDD5' },
    infoText: { color: '#C2410C', fontSize: 13, lineHeight: 18, flex: 1, fontWeight: '500' },

    reelItem: { backgroundColor: '#FFFFFF', marginHorizontal: 24, marginBottom: 24, borderRadius: 24, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.05, shadowRadius: 15, elevation: 5 },
    reelPlaceholder: { height: 220, backgroundColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center' },
    playButtonOverlay: { backgroundColor: 'rgba(0,0,0,0.3)', width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' },
    videoLengthTag: { position: 'absolute', bottom: 12, right: 12, backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, color: '#FFF', fontSize: 12, fontWeight: 'bold' },

    reelInfo: { padding: 20 },
    reelTitle: { color: '#111827', fontSize: 18, fontWeight: '800', marginBottom: 6 },
    reelAuthor: { color: '#6B7280', fontSize: 14, marginBottom: 16, fontWeight: '500' },
    reelMeta: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#F3F4F6', paddingTop: 16 },

    statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
    statusText: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase' },
    approvedBadge: { backgroundColor: '#DCFCE7' },
    approvedText: { color: '#166534' },
    pendingBadge: { backgroundColor: '#FEF9C3' },
    pendingText: { color: '#854D0E' },

    likesContainer: { flexDirection: 'row', alignItems: 'center' },
    likesText: { color: '#4B5563', fontSize: 14, fontWeight: '600' }
});
