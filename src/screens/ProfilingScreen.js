import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ProfilingScreen({ navigation }) {
    const [step, setStep] = useState(1);
    const [selectedOpt, setSelectedOpt] = useState(null);

    const handleNext = () => {
        setSelectedOpt(null);
        if (step < 3) setStep(step + 1);
        else navigation.navigate('LanguageSettings');
    };

    const renderOptions = (options) => {
        return options.map(opt => (
            <TouchableOpacity
                key={opt}
                style={[styles.option, selectedOpt === opt && styles.optionSelected]}
                onPress={() => setSelectedOpt(opt)}
            >
                <Text style={[styles.optionText, selectedOpt === opt && styles.optionTextSelected]}>{opt}</Text>
                {selectedOpt === opt && <Ionicons name="checkmark-circle" size={24} color="#4F46E5" />}
            </TouchableOpacity>
        ));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topNav}>
                <TouchableOpacity onPress={() => step > 1 ? setStep(step - 1) : navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="#374151" />
                </TouchableOpacity>
                <Text style={styles.stepIndicator}>Step {step} of 3</Text>
            </View>

            <View style={styles.progressContainer}>
                <View style={[styles.progressBar, { width: `${(step / 3) * 100}%` }]} />
            </View>

            <View style={styles.content}>
                {step === 1 && (
                    <View style={styles.fadeContainer}>
                        <Text style={styles.question}>What is your age range?</Text>
                        <Text style={styles.subQuestion}>Helps us tailor complexity.</Text>
                        {renderOptions(['Under 18', '18 - 25', '26 - 35', '36 - 50', '50+'])}
                    </View>
                )}
                {step === 2 && (
                    <View style={styles.fadeContainer}>
                        <Text style={styles.question}>What describes you best?</Text>
                        <Text style={styles.subQuestion}>To contextualize news impact.</Text>
                        {renderOptions(['Student', 'Professional', 'Retired', 'Self-Employed', 'Other'])}
                    </View>
                )}
                {step === 3 && (
                    <View style={styles.fadeContainer}>
                        <Text style={styles.question}>Why are you listening?</Text>
                        <Text style={styles.subQuestion}>We will prioritize these topics.</Text>
                        {renderOptions(['UPSC / SSC Preparation', 'RBI Exams', 'Personal Knowledge', 'General Awareness'])}
                    </View>
                )}
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={[styles.primaryButton, !selectedOpt && styles.primaryButtonDisabled]}
                    disabled={!selectedOpt}
                    onPress={handleNext}
                >
                    <Text style={styles.primaryButtonText}>{step === 3 ? 'Finish' : 'Continue'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F9FAFB' },
    topNav: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 10 },
    backButton: { padding: 8, backgroundColor: '#FFFFFF', borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
    stepIndicator: { fontSize: 16, fontWeight: '600', color: '#6B7280' },
    progressContainer: { height: 6, backgroundColor: '#E5E7EB', marginHorizontal: 20, borderRadius: 3, overflow: 'hidden', marginTop: 10 },
    progressBar: { height: '100%', backgroundColor: '#4F46E5', borderRadius: 3 },
    content: { flex: 1, padding: 24, paddingTop: 40 },
    fadeContainer: { flex: 1 },
    question: { fontSize: 32, fontWeight: '900', color: '#111827', marginBottom: 8, letterSpacing: -0.5 },
    subQuestion: { fontSize: 16, color: '#6B7280', marginBottom: 40 },
    option: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 20, borderRadius: 16, marginBottom: 16, borderWidth: 2, borderColor: '#F3F4F6', shadowColor: '#000', shadowOffset: { height: 2, width: 0 }, shadowOpacity: 0.02, shadowRadius: 8, elevation: 1 },
    optionSelected: { borderColor: '#4F46E5', backgroundColor: '#EEF2FF' },
    optionText: { color: '#374151', fontSize: 18, fontWeight: '600' },
    optionTextSelected: { color: '#4F46E5' },
    footer: { padding: 24, backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#F3F4F6' },
    primaryButton: { backgroundColor: '#4F46E5', paddingVertical: 18, borderRadius: 16, alignItems: 'center', shadowColor: '#4F46E5', shadowOffset: { height: 4, width: 0 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 4 },
    primaryButtonDisabled: { backgroundColor: '#D1D5DB', shadowOpacity: 0, elevation: 0 },
    primaryButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
});
