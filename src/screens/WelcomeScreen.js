import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconWrapper}>
                    <Ionicons name="radio" size={80} color="#4F46E5" />
                </View>
                <Text style={styles.logo}>AudioNews AI</Text>
                <Text style={styles.subtitle}>Your Voice-Enabled News Reader</Text>

                <View style={styles.card}>
                    <View style={styles.featureRow}>
                        <View style={styles.iconCircle}>
                            <Ionicons name="headset" size={20} color="#4F46E5" />
                        </View>
                        <Text style={styles.featureText}>Listen to relevant, tailored news on the go</Text>
                    </View>
                    <View style={styles.featureRow}>
                        <View style={styles.iconCircle}>
                            <Ionicons name="earth" size={20} color="#10B981" />
                        </View>
                        <Text style={styles.featureText}>Current events, geopolitics & economics</Text>
                    </View>
                    <View style={styles.featureRow}>
                        <View style={styles.iconCircle}>
                            <MaterialIcons name="diamond" size={20} color="#F59E0B" />
                        </View>
                        <Text style={styles.featureText}>Earn Gems and rewards by staying active</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.primaryButtonText}>Sign Up Now</Text>
                    <Ionicons name="arrow-forward" size={20} color="#FFF" style={{ marginLeft: 8 }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.secondaryButtonText}>Log In to Existing Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    content: { flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' },
    iconWrapper: { backgroundColor: '#EEF2FF', padding: 24, borderRadius: 40, marginBottom: 24 },
    logo: { fontSize: 36, fontWeight: '900', color: '#111827', letterSpacing: -0.5 },
    subtitle: { fontSize: 16, color: '#6B7280', marginTop: 12, marginBottom: 40, textAlign: 'center' },
    card: { backgroundColor: '#FFFFFF', padding: 24, borderRadius: 24, width: '100%', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 15, elevation: 5 },
    featureRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    iconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
    featureText: { fontSize: 15, color: '#374151', flex: 1, fontWeight: '500', lineHeight: 22 },
    bottomContainer: { padding: 24, paddingBottom: 40, backgroundColor: '#FFFFFF', borderTopLeftRadius: 32, borderTopRightRadius: 32, shadowColor: '#000', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.03, shadowRadius: 10, elevation: 10 },
    primaryButton: { backgroundColor: '#4F46E5', paddingVertical: 18, borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', shadowColor: '#4F46E5', shadowOffset: { height: 8, width: 0 }, shadowOpacity: 0.3, shadowRadius: 12, elevation: 6 },
    primaryButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
    secondaryButton: { paddingVertical: 18, borderRadius: 16, alignItems: 'center', marginTop: 16, backgroundColor: '#F3F4F6' },
    secondaryButtonText: { color: '#4F46E5', fontSize: 16, fontWeight: '700' }
});
