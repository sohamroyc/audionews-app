import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
    const [step, setStep] = useState(1);

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scroll}>

                    <TouchableOpacity onPress={() => step > 1 ? setStep(step - 1) : navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#374151" />
                    </TouchableOpacity>

                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>{step === 1 ? 'Create Account' : step === 2 ? 'Verify OTP' : 'Secure Account'}</Text>
                        <Text style={styles.subheader}>
                            {step === 1 ? 'Join AudioNews AI today and personalize your feed.' :
                                step === 2 ? 'We sent a 6-digit code to your phone.' :
                                    'Create a strong password to protect your wallet.'}
                        </Text>
                    </View>

                    <View style={styles.card}>
                        {step === 1 ? (
                            <View style={styles.form}>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>Full Name</Text>
                                    <View style={styles.inputContainer}>
                                        <Ionicons name="person-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
                                        <TextInput style={styles.input} placeholderTextColor="#9CA3AF" placeholder="John Doe" />
                                    </View>
                                </View>

                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>Email Address</Text>
                                    <View style={styles.inputContainer}>
                                        <Ionicons name="mail-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
                                        <TextInput style={styles.input} placeholderTextColor="#9CA3AF" placeholder="john@example.com" keyboardType="email-address" />
                                    </View>
                                </View>

                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>Phone Number</Text>
                                    <View style={styles.inputContainer}>
                                        <Ionicons name="call-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
                                        <TextInput style={styles.input} placeholderTextColor="#9CA3AF" placeholder="+91 9876543210" keyboardType="phone-pad" />
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.button} onPress={() => setStep(2)}>
                                    <Text style={styles.buttonText}>Send OTP</Text>
                                    <Ionicons name="arrow-forward" size={20} color="#FFF" style={{ marginLeft: 8 }} />
                                </TouchableOpacity>
                            </View>
                        ) : step === 2 ? (
                            <View style={styles.form}>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>Enter OTP</Text>
                                    <View style={styles.inputContainer}>
                                        <Ionicons name="chatbubble-ellipses-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
                                        <TextInput style={styles.input} placeholderTextColor="#9CA3AF" placeholder="000 000" keyboardType="number-pad" maxLength={6} textAlign="center" fontSize={24} letterSpacing={4} />
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.button} onPress={() => setStep(3)}>
                                    <Text style={styles.buttonText}>Verify OTP</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.linkButton}>
                                    <Text style={styles.linkText}>Resend Code</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={styles.form}>
                                <View style={styles.inputGroup}>
                                    <Text style={styles.label}>Set Strong Password</Text>
                                    <View style={styles.inputContainer}>
                                        <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
                                        <TextInput style={styles.input} placeholderTextColor="#9CA3AF" placeholder="••••••••" secureTextEntry />
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profiling')}>
                                    <Text style={styles.buttonText}>Complete Registration</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    scroll: { padding: 24, flexGrow: 1, justifyContent: 'center' },
    backButton: { position: 'absolute', top: 20, left: 10, zIndex: 10, padding: 10, backgroundColor: '#FFFFFF', borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
    headerContainer: { marginTop: 80, marginBottom: 32 },
    header: { fontSize: 32, fontWeight: '900', color: '#111827', marginBottom: 12, letterSpacing: -0.5 },
    subheader: { fontSize: 16, color: '#6B7280', lineHeight: 24 },
    card: { backgroundColor: '#FFFFFF', padding: 24, borderRadius: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 15, elevation: 3 },
    form: { marginTop: 0 },
    inputGroup: { marginBottom: 20 },
    label: { color: '#374151', fontSize: 14, marginBottom: 8, fontWeight: '600' },
    inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 16, borderWidth: 1, borderColor: '#E5E7EB', paddingHorizontal: 16 },
    inputIcon: { marginRight: 12 },
    input: { flex: 1, color: '#111827', paddingVertical: 16, fontSize: 16, fontWeight: '500' },
    button: { backgroundColor: '#4F46E5', paddingVertical: 18, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 12, shadowColor: '#4F46E5', shadowOffset: { height: 4, width: 0 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
    buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
    linkButton: { marginTop: 24, alignItems: 'center' },
    linkText: { color: '#4F46E5', fontSize: 15, fontWeight: '600' }
});
