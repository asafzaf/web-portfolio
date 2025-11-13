package main

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
)

// readFollowers reads and parses a followers JSON file
func readFollowers(filename string) ([]Follower, error) {
	jsonFile, err := os.Open(filename)
	if err != nil {
		return nil, fmt.Errorf("error opening file %s: %w", filename, err)
	}
	defer jsonFile.Close()

	byteValue, err := io.ReadAll(jsonFile)
	if err != nil {
		return nil, fmt.Errorf("error reading file %s: %w", filename, err)
	}

	var entries []FollowerEntry
	if err := json.Unmarshal(byteValue, &entries); err != nil {
		return nil, fmt.Errorf("error parsing JSON from %s: %w", filename, err)
	}

	var followers []Follower
	for _, entry := range entries {
		if len(entry.StringListData) > 0 {
			data := entry.StringListData[0]
			followers = append(followers, Follower{
				Username:   data.Value,
				ProfileURL: data.Href,
				Timestamp:  data.Timestamp,
			})
		}
	}

	return followers, nil
}
