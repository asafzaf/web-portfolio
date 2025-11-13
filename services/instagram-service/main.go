package main

import (
	"fmt"
	"log"
)

func main() {
	fmt.Println("Instagram Follower Analysis Service")

	// Read follower data from JSON files
	followers1, err := readFollowers("followers_0.json")
	if err != nil {
		log.Fatalf("Failed to read followers_0.json: %v", err)
	}

	followers2, err := readFollowers("followers_1.json")
	if err != nil {
		log.Fatalf("Failed to read followers_1.json: %v", err)
	}

	fmt.Printf("Followers 1 count: %d\n", len(followers1))
	fmt.Printf("Followers 2 count: %d\n", len(followers2))

	// Compare followers
	newFollowers, unfollowers := compareFollowers(followers1, followers2)

	fmt.Printf("\nNew followers: %d\n", len(newFollowers))
	for _, follower := range newFollowers {
		fmt.Printf("  - %s (%s)\n", follower.Username, follower.ProfileURL)
	}

	fmt.Printf("\nUnfollowers: %d\n", len(unfollowers))
	for _, follower := range unfollowers {
		fmt.Printf("  - %s (%s)\n", follower.Username, follower.ProfileURL)
	}
}
