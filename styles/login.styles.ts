import { COLORS } from "@/constants/theme";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
  },
  loginTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 24,
    textAlign: "center",
  },
  loginInput: {
    backgroundColor: COLORS.surface,
    color: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  loginFooter: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginFooterText: {
    color: COLORS.grey,
    marginRight: 4,
  },
  loginLink: {
    color: COLORS.secondary,
    fontWeight: "bold",
  },
});
