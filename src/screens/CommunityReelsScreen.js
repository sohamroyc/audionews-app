import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function CommunityReelsScreen() {
    const [liked, setLiked] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' }}
                style={styles.container}
                resizeMode="cover"
            >
                {/* Gradient Overlays for readability */}
                <LinearGradient colors={['rgba(0,0,0,0.6)', 'transparent']} style={styles.topGradient} />
                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)', '#000000']} style={styles.bottomGradient} />

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity><Ionicons name="search" size={24} color="#FFF" /></TouchableOpacity>
                    <Text style={styles.headerTitle}>Community News</Text>
                    <TouchableOpacity><Ionicons name="notifications" size={24} color="#FFF" /></TouchableOpacity>
                </View>

                {/* Play Button Center Overlay */}
                <View style={styles.centerOverlay}>
                    <View style={styles.playButton}>
                        <Ionicons name="play" size={40} color="#FFF" style={{ marginLeft: 6 }} />
                    </View>
                </View>

                {/* Main Content (Bottom Align) */}
                <View style={styles.bottomContent}>
                    {/* Right Toolbar */}
                    <View style={styles.rightToolbar}>
                        <TouchableOpacity style={styles.toolbarItem} onPress={() => setLiked(!liked)}>
                            <View style={styles.iconCircle}>
                                <Ionicons name={liked ? "heart" : "heart"} size={26} color={liked ? "#EF4444" : "#FFF"} />
                            </View>
                            <Text style={styles.toolbarText}>12.4k</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.toolbarItem}>
                            <View style={styles.iconCircle}>
                                <Ionicons name="chatbubble" size={24} color="#FFF" />
                            </View>
                            <Text style={styles.toolbarText}>842</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.toolbarItem}>
                            <View style={styles.iconCircle}>
                                <Ionicons name="share-social" size={24} color="#FFF" />
                            </View>
                            <Text style={styles.toolbarText}>205</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.toolbarItem, { marginTop: 10 }]}>
                            <View style={styles.diskIcon}>
                                <View style={styles.diskCenter} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Bottom Info Section */}
                    <View style={styles.infoSection}>
                        <View style={styles.authorRow}>
                            <Image source={{ uri: 'https://i.pravatar.cc/100?img=11' }} style={styles.avatar} />
                            <View>
                                <Text style={styles.authorName}>@ai_news_daily</Text>
                                <Text style={styles.authorTag}>AI SYNTHESIZED VOICE</Text>
                            </View>
                            <TouchableOpacity style={styles.followBtn}>
                                <Text style={styles.followText}>Follow</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.title} numberOfLines={2}>
                            Major AI breakthrough: Startups adapt new neural architecture for...
                        </Text>

                        <View style={styles.audioRow}>
                            <Ionicons name="musical-notes" size={16} color="#38BDF8" style={{ marginRight: 6 }} />
                            <Text style={styles.audioText}>Original Audio - AI Neural Voice (...</Text>
                        </View>
                    </View>
                </View>

                {/* Floating Notification Card (Community Guidelines) */}
                <View style={styles.guidelinesCard}>
                    <View style={styles.guidelinesHeader}>
                        <Ionicons name="checkmark-seal" size={16} color="#0EA5E9" style={{ marginRight: 6 }} />
                        <Text style={styles.guidelinesTitle}>COMMUNITY GUIDELINES</Text>
                    </View>
                    <Text style={styles.guidelinesDesc}>Submitted news enters a 4-5 day review queue for verification.</Text>
                </View>

                {/* Floating Bot Button */}
                <TouchableOpacity style={styles.floatingBot}>
                    <Ionicons name="logo-android" size={32} color="#FFF" />
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#000' },
    container: { width, height: '100%', justifyContent: 'space-between' },
    topGradient: { position: 'absolute', top: 0, width: '100%', height: 120 },
    bottomGradient: { position: 'absolute', bottom: 0, width: '100%', height: 400 },

    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 16, zIndex: 10 },
    headerTitle: { color: '#FFF', fontSize: 20, fontWeight: '800' },

    centerOverlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center', zIndex: 1 },
    playButton: { width: 72, height: 72, borderRadius: 36, backgroundColor: 'rgba(255,255,255,0.3)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)' },

    bottomContent: { flex: 1, justifyContent: 'flex-end', paddingBottom: 60, zIndex: 5 },

    rightToolbar: { position: 'absolute', right: 16, bottom: 120, alignItems: 'center' },
    toolbarItem: { alignItems: 'center', marginBottom: 20 },
    iconCircle: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center', marginBottom: 6 },
    toolbarText: { color: '#FFF', fontSize: 13, fontWeight: '700' },
    diskIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#333', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#FFF' },
    diskCenter: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#FFF' },

    infoSection: { paddingHorizontal: 20, width: '85%' },
    authorRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
    avatar: { width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: '#38BDF8', marginRight: 12 },
    authorName: { color: '#FFF', fontSize: 16, fontWeight: '700' },
    authorTag: { color: '#38BDF8', fontSize: 11, fontWeight: '800', marginTop: 2 },
    followBtn: { backgroundColor: '#0EA5E9', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, marginLeft: 16 },
    followText: { color: '#FFF', fontSize: 13, fontWeight: '700' },

    title: { color: '#FFF', fontSize: 18, fontWeight: '700', lineHeight: 26, marginBottom: 12 },

    audioRow: { flexDirection: 'row', alignItems: 'center' },
    audioText: { color: '#FFF', fontSize: 14, fontWeight: '500' },

    guidelinesCard: { position: 'absolute', bottom: 100, alignSelf: 'center', backgroundColor: '#F8FAFC', padding: 16, borderRadius: 16, width: '90%', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5, zIndex: 20 },
    guidelinesHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
    guidelinesTitle: { color: '#0EA5E9', fontSize: 12, fontWeight: '800' },
    guidelinesDesc: { color: '#475569', fontSize: 13, lineHeight: 18 },

    floatingBot: { position: 'absolute', bottom: 20, right: 20, backgroundColor: '#0EA5E9', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', borderWidth: 4, borderColor: '#FFF', elevation: 8, shadowColor: '#0EA5E9', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 8, zIndex: 10 }
});
