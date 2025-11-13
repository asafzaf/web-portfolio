package main

type FollowerResponse struct {
	NewFollowers     []Follower `json:"new_followers"`
	Unfollowers      []Follower `json:"unfollowers"`
	TotalFollowers   int        `json:"total_followers"`
	TotalUnfollowers int        `json:"total_unfollowers"`
	DateAnalysis     string     `json:"date_analysis"`
}

// Follower represents an Instagram follower
type Follower struct {
	Username   string `json:"username"`
	ProfileURL string `json:"profile_url"`
	Timestamp  int64  `json:"timestamp"`
}

// FollowerEntry represents the raw structure from Instagram JSON export
type FollowerEntry struct {
	Title          string        `json:"title"`
	MediaListData  []interface{} `json:"media_list_data"`
	StringListData []struct {
		Href      string `json:"href"`
		Value     string `json:"value"`
		Timestamp int64  `json:"timestamp"`
	} `json:"string_list_data"`
}
