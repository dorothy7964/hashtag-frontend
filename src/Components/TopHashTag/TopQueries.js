import { gql } from "apollo-boost";

export const TREND_GAP = gql`
    query gap {
        gap {
            result 
            day1_gap {
                hashtag
                post_gap
                post_rate
                post_cnt
            }
            day7_gap {
                hashtag
                post_gap
                post_rate
                post_cnt
            }
            day30_gap {
                hashtag
                post_gap
                post_rate
                post_cnt
            }
            day60_gap {
                hashtag
                post_gap
                post_rate
                post_cnt
            }
        }
    }
`;

export const TREND_RATE = gql`
    query rate {
        rate {
            result 
            day1_rate {
                hashtag
                post_gap
                post_rate
                post_cnt
            }
            day7_rate {
                hashtag
                post_gap
                post_rate
                post_cnt
            }
            day30_rate {
                hashtag
                post_gap
                post_rate
                post_cnt
            }
            day60_rate {
                hashtag
                post_gap
                post_rate
                post_cnt
            }
        }
    }
`;


