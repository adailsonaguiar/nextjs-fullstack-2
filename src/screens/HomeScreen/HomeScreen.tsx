import Box from "@src/components/Box/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";
import {templatePageHOC} from "@src/services/templates/templatePageHOC";
import type { Post } from "@src/services/posts/PostsService";

interface HomeScreenProps {
  posts: Post[]
}

function HomeScreen({posts}: HomeScreenProps) {
  const theme = useTheme();

  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Feed.Posts posts={posts} />
      </Feed>
      <Footer />
      {/* 
      <Feed>
        <Feed.Header />
        <Text tag="h2" variant="heading1">
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed>
       */}
    </Box>
  )
}

export default templatePageHOC(HomeScreen, {title: 'Home'})
