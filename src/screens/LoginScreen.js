import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scroll}>

                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#374151" />
                    </TouchableOpacity>

                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Welcome Back</Text>
                        <Text style={styles.subheader}>Log in to access your personalized feed and rewards.</Text>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email Address</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="mail-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
                                <TextInput style={styles.input} placeholderTextColor="#9CA3AF" placeholder="john@example.com" keyboardType="email-address" autoCapitalize="none" />
                            </View>
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
                                <TextInput style={styles.input} placeholderTextColor="#9CA3AF" placeholder="••••••••" secureTextEntry />
                            </View>
                            <TouchableOpacity style={styles.forgotButton}>
                                <Text style={styles.forgotText}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                            <Text style={styles.buttonText}>Log In</Text>
                            <Ionicons name="log-in-outline" size={20} color="#FFF" style={{ marginLeft: 8 }} />
                        </TouchableOpacity>

                        <View style={styles.dividerContainer}>
                            <View style={styles.divider} />
                            <Text style={styles.dividerText}>OR</Text>
                            <View style={styles.divider} />
                        </View>

                        <TouchableOpacity style={styles.socialButton}>
                            <Ionicons name="logo-google" size={20} color="#DB4437" />
                            <Text style={styles.socialButtonText}>Continue with Google</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.linkText}>Don't have an account? <Text style={styles.linkTextBold}>Sign Up</Text></Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    scroll: { padding: 24, flexGrow: 1, justifyContent: 'center' },
    backButton: { position: 'absolute', top: 20, left: 10, zIndex: 10, padding: 10, backgroundColor: '#FFFFFF', borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
    headerContainer: { marginTop: 60, marginBottom: 32 },
    header: { fontSize: 32, fontWeight: '900', color: '#111827', marginBottom: 12, letterSpacing: -0.5 },
    subheader: { fontSize: 16, color: '#6B7280', lineHeight: 24 },
    card: { backgroundColor: '#FFFFFF', padding: 24, borderRadius: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 15, elevation: 3 },
    inputGroup: { marginBottom: 20 },
    label: { color: '#374151', fontSize: 14, marginBottom: 8, fontWeight: '600' },
    inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 16, borderWidth: 1, borderColor: '#E5E7EB', paddingHorizontal: 16 },
    inputIcon: { marginRight: 12 },
    input: { flex: 1, color: '#111827', paddingVertical: 16, fontSize: 16, fontWeight: '500' },
    forgotButton: { alignSelf: 'flex-end', marginTop: 8 },
    forgotText: { color: '#4F46E5', fontSize: 14, fontWeight: '600' },
    button: { backgroundColor: '#4F46E5', paddingVertical: 18, borderRadius: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 12, shadowColor: '#4F46E5', shadowOffset: { height: 4, width: 0 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
    buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
    dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 24 },
    divider: { flex: 1, height: 1, backgroundColor: '#E5E7EB' },
    dividerText: { marginHorizontal: 16, color: '#9CA3AF', fontWeight: 'bold' },
    socialButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF', paddingVertical: 16, borderRadius: 16, borderWidth: 1, borderColor: '#E5E7EB' },
    socialButtonText: { color: '#374151', fontSize: 16, fontWeight: '700', marginLeft: 12 },
    linkButton: { marginTop: 32, alignItems: 'center' },
    linkText: { color: '#6B7280', fontSize: 15 },
    linkTextBold: { color: '#4F46E5', fontWeight: 'bold' }
});
