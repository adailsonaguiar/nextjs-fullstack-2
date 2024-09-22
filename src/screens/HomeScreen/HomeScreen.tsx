import Box from "@src/components/Box/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import Menu from "./patterns/Menu/Menu";
import {templatePageHOC} from "@src/services/templates/templatePageHOC";
import {useTemplateConfig} from "@src/services/templates/TemplateConfigContext";
import {PostsService} from "@src/services/posts/PostsService";

function HomeScreen() {
  const theme = useTheme();
  const posts = await PostsService().getAll()

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
