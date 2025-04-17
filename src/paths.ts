export const paths = {
  home() {
    return "/";
  },
  getTopics(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  createPost(topicSlug: String) {
    return `/topics/${topicSlug}/new`;
  },
  getPost(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};
