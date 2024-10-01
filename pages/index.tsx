import { PostsService } from "@src/services/posts/PostsService";
import {withTemplateConfig} from "@src/services/templates/withTemplateConfig";
export { default } from '@src/screens/HomeScreen/HomeScreen';

export async function getStaticProps() {
  const posts = await PostsService().getAll()

  return {
    props: await withTemplateConfig({posts}),
  } 
}

// import Box from "@src/components/Box";
// import theme from "@src/theme/theme";
// export default function HomeScreen() {
//   return (
//     <Box
//       tag="main"
//       styleSheet={{
//         fontFamily: theme.typography.fontFamily,
//         backgroundColor: {
//           xs: 'red',
//           sm: 'yellow',
//           md: 'blue',
//         }
//       }}
//     >
//       Oi
//     </Box>
//   )
// }
