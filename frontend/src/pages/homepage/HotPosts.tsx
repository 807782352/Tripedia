import { Box, Button } from "@mui/material";
import PostCard from "../../components/PostCard";
import { posts } from "../../data/posts.js";

const HotPosts = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="text"
            component="h2"
            color="primary"
            sx={{
              color: "primary.main",
              fontSize: "1rem",
            }}
          >
            Hottest Posts
          </Button>
          <Box
            sx={{
              height: "1.5rem",
              mx: 1,
              borderRight: "2px solid",
              borderColor: "primary.main",
            }}
          />
          <Button
            variant="text"
            component="h3"
            color="primary"
            sx={{ color: "primary.dark", fontSize: "0.8rem" }}
          >
            Latest Posts
          </Button>
        </Box>
        <Button
          variant="text"
          sx={{ color: "primary.dark", fontSize: "0.7rem" }}
        >
          Learn More
        </Button>
      </Box>

      {posts.map((post: Post) => (
        <PostCard post={post} key={post.title} />
      ))}
    </div>
  );
};

export default HotPosts;
