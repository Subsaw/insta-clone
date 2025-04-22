import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "@/styles/login.styles";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(tabs)");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>Sign in</Text>
      <TextInput
        style={styles.loginInput}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        placeholderTextColor="#9CA3AF"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <TextInput
        style={styles.loginInput}
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        placeholderTextColor="#9CA3AF"
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={onSignInPress}>
        <Text style={styles.loginButtonText}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.loginFooter}>
        <Text style={styles.loginFooterText}>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text style={styles.loginLink}>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}
