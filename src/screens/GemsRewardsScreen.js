import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function GemsRewardsScreen() {
    const [balance, setBalance] = useState(450);
    const [activated, setActivated] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>

                <Text style={styles.header}>Rewards Center</Text>

                <View style={styles.balanceCard}>
                    <Text style={styles.balanceLabel}>Your Balance</Text>
                    <View style={styles.balanceAmountRow}>
                        <MaterialCommunityIcons name="diamond-stone" size={40} color="#F59E0B" style={{ marginRight: 8 }} />
                        <Text style={styles.balanceAmount}>{balance}</Text>
                    </View>
                    <Text style={styles.balanceFiat}>≈ ₹{(balance / 10).toFixed(2)} INR</Text>

                    <View style={styles.progressContainer}>
                        <View style={styles.progressLabels}>
                            <Text style={styles.progressText}>0</Text>
                            <Text style={styles.progressTextDark}>1000 Gems Limit</Text>
                        </View>
                        <View style={styles.progressBarBg}>
                            <View style={[styles.progressBarFill, { width: `${Math.min((balance / 1000) * 100, 100)}%` }]} />
                        </View>
                    </View>

                    <TouchableOpacity style={[styles.withdrawBtn, balance < 1000 && styles.withdrawBtnDisabled]}>
                        <Text style={[styles.withdrawBtnText, balance < 1000 && styles.withdrawBtnTextDisabled]}>Withdraw Earnings</Text>
                    </TouchableOpacity>
                </View>

                {!activated && (
                    <View style={styles.activationCard}>
                        <View style={styles.activationIconBg}>
                            <Ionicons name="shield-checkmark" size={24} color="#FFF" />
                        </View>
                        <View style={styles.activationInfo}>
                            <Text style={styles.activationTitle}>Activate Wallet</Text>
                            <Text style={styles.activationDesc}>Required ₹1 UPI deposit to verify human status and enable earning.</Text>
                        </View>
                        <TouchableOpacity style={styles.activateBtn} onPress={() => setActivated(true)}>
                            <Text style={styles.activateBtnText}>Deposit ₹1</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <Text style={styles.sectionTitle}>Ways to Earn Rewards</Text>

                <View style={styles.earnList}>
                    <View style={styles.earnItem}>
                        <View style={[styles.earnIconBg, { backgroundColor: '#EEF2FF' }]}>
                            <Ionicons name="headset" size={24} color="#4F46E5" />
                        </View>
                        <View style={styles.earnInfo}>
                            <Text style={styles.earnTitle}>Daily Listening Goal</Text>
                            <Text style={styles.earnDesc}>Listen to news for 2 hours daily.</Text>
                        </View>
                        <Text style={styles.earnReward}>+50 <MaterialCommunityIcons name="diamond-stone" size={14} color="#F59E0B" /></Text>
                    </View>

                    <View style={styles.earnItem}>
                        <View style={[styles.earnIconBg, { backgroundColor: '#ECFDF5' }]}>
                            <Ionicons name="document-text" size={24} color="#10B981" />
                        </View>
                        <View style={styles.earnInfo}>
                            <Text style={styles.earnTitle}>Complete Profile</Text>
                            <Text style={styles.earnDesc}>One-time onboarding bonus.</Text>
                        </View>
                        <Text style={styles.earnReward}>+100 <MaterialCommunityIcons name="diamond-stone" size={14} color="#F59E0B" /></Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    content: { padding: 24, paddingTop: 16 },
    header: { fontSize: 32, fontWeight: '900', color: '#111827', marginBottom: 24, letterSpacing: -0.5 },

    balanceCard: { backgroundColor: '#FFFFFF', padding: 32, borderRadius: 24, alignItems: 'center', marginBottom: 24, shadowColor: '#4F46E5', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 8 },
    balanceLabel: { color: '#6B7280', fontSize: 16, fontWeight: '600', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
    balanceAmountRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
    balanceAmount: { color: '#111827', fontSize: 56, fontWeight: '900', letterSpacing: -2 },
    balanceFiat: { color: '#10B981', fontSize: 18, fontWeight: '700', marginBottom: 32 },

    progressContainer: { width: '100%', marginBottom: 32 },
    progressLabels: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    progressText: { color: '#9CA3AF', fontSize: 13, fontWeight: '600' },
    progressTextDark: { color: '#4B5563', fontSize: 13, fontWeight: '600' },
    progressBarBg: { height: 10, backgroundColor: '#F3F4F6', borderRadius: 5, overflow: 'hidden' },
    progressBarFill: { height: '100%', backgroundColor: '#F59E0B', borderRadius: 5 },

    withdrawBtn: { backgroundColor: '#4F46E5', paddingVertical: 18, width: '100%', borderRadius: 16, alignItems: 'center', shadowColor: '#4F46E5', shadowOffset: { height: 4, width: 0 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
    withdrawBtnDisabled: { backgroundColor: '#F3F4F6', shadowOpacity: 0, elevation: 0 },
    withdrawBtnText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
    withdrawBtnTextDisabled: { color: '#9CA3AF' },

    activationCard: { backgroundColor: '#111827', padding: 20, borderRadius: 20, marginBottom: 32, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 10, elevation: 5 },
    activationIconBg: { width: 48, height: 48, backgroundColor: '#374151', borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
    activationInfo: { flex: 1 },
    activationTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
    activationDesc: { color: '#9CA3AF', fontSize: 12, lineHeight: 18, paddingRight: 8 },
    activateBtn: { backgroundColor: '#4F46E5', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 12, alignItems: 'center' },
    activateBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },

    sectionTitle: { color: '#111827', fontSize: 20, fontWeight: '800', marginBottom: 16 },
    earnList: { paddingBottom: 20 },
    earnItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 16, borderRadius: 20, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 },
    earnIconBg: { width: 48, height: 48, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
    earnInfo: { flex: 1 },
    earnTitle: { color: '#111827', fontSize: 16, fontWeight: '700', marginBottom: 4 },
    earnDesc: { color: '#6B7280', fontSize: 13 },
    earnReward: { color: '#F59E0B', fontWeight: 'bold', fontSize: 16 }
});
