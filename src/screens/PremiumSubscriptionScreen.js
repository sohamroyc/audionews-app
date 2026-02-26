import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function PremiumSubscriptionScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Go Premium</Text>
                    <Text style={styles.subheader}>Unlock advanced community features and ad-free offline listening.</Text>
                </View>

                <View style={styles.planCard}>
                    <View style={styles.planHeader}>
                        <View>
                            <Text style={styles.planTitle}>Individual Plan</Text>
                            <Text style={styles.planSubtitle}>For Personal Use</Text>
                        </View>
                        <Text style={styles.planPrice}>₹50<Text style={styles.planDuration}>/mo</Text></Text>
                    </View>

                    <View style={styles.featuresList}>
                        <View style={styles.featureRow}><Ionicons name="checkmark-circle" size={18} color="#10B981" /><Text style={styles.featureText}>Unlimited Offline Downloads</Text></View>
                        <View style={styles.featureRow}><Ionicons name="checkmark-circle" size={18} color="#10B981" /><Text style={styles.featureText}>Direct Reel Access</Text></View>
                        <View style={styles.featureRow}><Ionicons name="checkmark-circle" size={18} color="#10B981" /><Text style={styles.featureText}>Faster Review Queues</Text></View>
                    </View>

                    <TouchableOpacity style={styles.subscribeBtn}>
                        <Text style={styles.subscribeBtnText}>Subscribe Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.planCard, styles.groupPlanCard]}>
                    <View style={styles.popularBadge}>
                        <Text style={styles.popularBadgeText}>MOST POPULAR</Text>
                    </View>
                    <View style={styles.planHeader}>
                        <View>
                            <Text style={styles.planTitleGroup}>Group Plan</Text>
                            <Text style={styles.planSubtitle}>For Study Groups (2+)</Text>
                        </View>
                        <Text style={styles.planPriceGroup}>₹10<Text style={styles.planDurationGroup}>/person</Text></Text>
                    </View>

                    <View style={styles.featuresList}>
                        <View style={styles.featureRow}><Ionicons name="checkmark-circle" size={18} color="#4F46E5" /><Text style={styles.featureText}>Everything in Individual</Text></View>
                        <View style={styles.featureRow}><Ionicons name="checkmark-circle" size={18} color="#4F46E5" /><Text style={styles.featureText}>Shared Playlists for UPSC</Text></View>
                        <View style={styles.featureRow}><Ionicons name="checkmark-circle" size={18} color="#4F46E5" /><Text style={styles.featureText}>Collaborative Notes</Text></View>
                    </View>

                    <TouchableOpacity style={[styles.subscribeBtn, styles.groupSubscribeBtn]}>
                        <Text style={styles.subscribeBtnTextGroup}>Create Group</Text>
                        <Ionicons name="arrow-forward" size={20} color="#FFF" style={{ marginLeft: 8 }} />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    content: { padding: 24, flexGrow: 1, justifyContent: 'center' },
    headerContainer: { alignItems: 'center', marginBottom: 40 },
    header: { fontSize: 36, fontWeight: '900', color: '#111827', marginBottom: 12, letterSpacing: -0.5 },
    subheader: { fontSize: 16, color: '#6B7280', textAlign: 'center', lineHeight: 24, paddingHorizontal: 20 },

    planCard: { backgroundColor: '#FFFFFF', padding: 24, borderRadius: 24, marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 15, elevation: 4 },
    groupPlanCard: { backgroundColor: '#EEF2FF', borderWidth: 2, borderColor: '#4F46E5', shadowColor: '#4F46E5', shadowOpacity: 0.1, elevation: 8 },

    popularBadge: { position: 'absolute', top: -12, left: 24, backgroundColor: '#4F46E5', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, zIndex: 10 },
    popularBadgeText: { color: '#FFF', fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },

    planHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#F3F4F6', paddingBottom: 20 },
    planTitle: { fontSize: 24, fontWeight: '900', color: '#111827' },
    planTitleGroup: { fontSize: 24, fontWeight: '900', color: '#4F46E5' },
    planSubtitle: { fontSize: 14, color: '#6B7280', marginTop: 4 },

    planPrice: { fontSize: 32, fontWeight: '900', color: '#111827' },
    planPriceGroup: { fontSize: 32, fontWeight: '900', color: '#4F46E5' },
    planDuration: { fontSize: 16, color: '#6B7280', fontWeight: '500' },
    planDurationGroup: { fontSize: 14, color: '#6B7280', fontWeight: '500' },

    featuresList: { marginBottom: 24 },
    featureRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
    featureText: { color: '#4B5563', fontSize: 15, marginLeft: 12, fontWeight: '500' },

    subscribeBtn: { backgroundColor: '#F3F4F6', paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
    subscribeBtnText: { color: '#111827', fontSize: 16, fontWeight: 'bold' },

    groupSubscribeBtn: { backgroundColor: '#4F46E5', flexDirection: 'row', justifyContent: 'center', shadowColor: '#4F46E5', shadowOffset: { height: 4, width: 0 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
    subscribeBtnTextGroup: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});
