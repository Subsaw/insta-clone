import { Loader } from "@/components/Loader";
import Post from "@/components/Post";
import { COLORS } from "@/constants/theme";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { FlatList, Text, View } from "react-native";
import { styles } from "../../styles/feed.styles";

export default function Index() {
  const posts = useQuery(api.posts.getPostsToFeed);

  if (posts === undefined) return <Loader />;

  if (posts.length === 0) return <NoPostsFound />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Insta-clone</Text>
      </View>

      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const NoPostsFound = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: COLORS.background,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 19, color: COLORS.primary }}>No posts yet</Text>
  </View>
);
