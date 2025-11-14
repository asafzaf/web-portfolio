package analyze_followers

// compareFollowers compares two follower lists and returns:
// - newFollowers: followers in list2 but not in list1
// - unfollowers: followers in list1 but not in list2
func compareFollowers(followers1 []Follower, followers2 []Follower) ([]Follower, []Follower) {
	// Create maps for faster lookup
	followers1Map := make(map[string]Follower)
	for _, follower := range followers1 {
		followers1Map[follower.Username] = follower
	}

	followers2Map := make(map[string]Follower)
	for _, follower := range followers2 {
		followers2Map[follower.Username] = follower
	}

	// Find new followers (in followers2 but not in followers1)
	var newFollowers []Follower
	for _, follower := range followers2 {
		if _, exists := followers1Map[follower.Username]; !exists {
			newFollowers = append(newFollowers, follower)
		}
	}

	// Find unfollowers (in followers1 but not in followers2)
	var unfollowers []Follower
	for _, follower := range followers1 {
		if _, exists := followers2Map[follower.Username]; !exists {
			unfollowers = append(unfollowers, follower)
		}
	}

	return newFollowers, unfollowers
}
