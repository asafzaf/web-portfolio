package analyze_followers

func ConvertEntriesToFollowers(entries []FollowerEntry) []Follower {
	followers := []Follower{}
	for _, e := range entries {
		for _, s := range e.StringListData {
			followers = append(followers, Follower{
				Username:   s.Value,
				ProfileURL: s.Href,
				Timestamp:  s.Timestamp,
			})
		}
	}
	return followers
}
