import { gql } from "apollo-boost";

export const TREND_LIST = gql`
    query trendList {
        trendList {
            recent_list {
                add_date
                hashtag
                post_cnt
                check_start_time
            }
        }
    }
`;
