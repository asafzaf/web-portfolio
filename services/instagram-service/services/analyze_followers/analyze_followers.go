package analyze_followers

import (
	"fmt"
)

func AnalyzeFollowers(file1Data []Follower, file2Data []Follower) (FollowerResponse, error) {
	// Read follower data from JSON files

	// Compare followers
	newFollowers, unfollowers := compareFollowers(file1Data, file2Data)

	fmt.Printf("\nNew followers: %d\n", len(newFollowers))
	for _, follower := range newFollowers {
		fmt.Printf("  - %s (%s)\n", follower.Username, follower.ProfileURL)
	}

	fmt.Printf("\nUnfollowers: %d\n", len(unfollowers))
	for _, follower := range unfollowers {
		fmt.Printf("  - %s (%s)\n", follower.Username, follower.ProfileURL)
	}

	return FollowerResponse{
		NewFollowers: newFollowers,
		Unfollowers:  unfollowers,
	}, nil
}
