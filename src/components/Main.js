import React from "react";
import { posts } from "../data/Data";
import Markdown from "markdown-to-jsx";
import { Divider, Grid, Typography } from "@mui/material";

export default function Main({ title }) {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown key={post.body}>{post.body}</Markdown>
      ))}
    </Grid>
  );
}