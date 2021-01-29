import { gql } from "apollo-boost";

export const SELECT_HASHTAG = gql`
    query selectHashTag ($hashTag: String) {
        selectHashTag (hashTag: $hashTag) {
            result
            info {
                hashtag
                post_cnt
            }
            top_relation {
                hashtag
                post_cnt
            }
            top_autocomplete {
                hashtag
                post_cnt
            }
            lately_popular {
                url
                like_cnt
                comment_cnt
                mov_cnt
                pic_cnt
                post_time
                id_data {
                    username
                    follower_cnt
                    follow_cnt
                    post_cnt
                    average_like_cnt
                    average_comment_cnt
                    average_post_hour
                    full_name
                    is_business
                    is_verified
                    post_list {
                        url
                        post_time
                        like_cnt
                        comment_cnt
                        contents
                        hashtag_cnt
                        content_length
                        pic_cnt
                        mov_cnt
                    }
                    recent_hashtag_list {
                        hashtag
                        count
                    }
                }
            }
            top_remain {
                remain
                url
                like_cnt
                comment_cnt
                mov_cnt
                pic_cnt
                post_time
                id_data {
                    username
                    follower_cnt
                    follow_cnt
                    post_cnt
                    average_like_cnt
                    average_comment_cnt
                    average_post_hour
                    full_name
                    is_business
                    is_verified
                    post_list {
                        url
                        post_time
                        like_cnt
                        comment_cnt
                        contents
                        hashtag_cnt
                        content_length
                        pic_cnt
                        mov_cnt
                    }
                    recent_hashtag_list {
                        hashtag
                        count
                    }
                }
            }
            top_like {
                url
                like_cnt
                comment_cnt
                mov_cnt
                pic_cnt
                post_time
                id_data {
                    username
                    follower_cnt
                    follow_cnt
                    post_cnt
                    average_like_cnt
                    average_comment_cnt
                    average_post_hour
                    full_name
                    is_business
                    is_verified
                    post_list {
                        url
                        post_time
                        like_cnt
                        comment_cnt
                        contents
                        hashtag_cnt
                        content_length
                        pic_cnt
                        mov_cnt
                    }
                    recent_hashtag_list {
                        hashtag
                        count
                    }
                }
            }
            top_comment {
                url
                like_cnt
                comment_cnt
                mov_cnt
                pic_cnt
                post_time
                id_data {
                    username
                    follower_cnt
                    follow_cnt
                    post_cnt
                    average_like_cnt
                    average_comment_cnt
                    average_post_hour
                    full_name
                    is_business
                    is_verified
                    post_list {
                        url
                        post_time
                        like_cnt
                        comment_cnt
                        contents
                        hashtag_cnt
                        content_length
                        pic_cnt
                        mov_cnt
                    }
                    recent_hashtag_list {
                        hashtag
                        count
                    }
                }
            }
            post_log {
                check_date
                post_cnt
            }
        }
    }
`;
