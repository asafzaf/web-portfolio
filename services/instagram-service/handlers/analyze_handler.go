package handlers

import (
	"asafz/instagram-service/services/analyze_followers"
	"encoding/json"
	"fmt"
	"net/http"
)

// AnalyzeFollowers handles GET /analyze-followers
func AnalyzeFollowers(w http.ResponseWriter, r *http.Request) {
	// Call the service function to get data

	var input analyze_followers.InputFiles
	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, "invalid request body: "+err.Error(), http.StatusBadRequest)
		return
	}

	followersFile1 := analyze_followers.ConvertEntriesToFollowers(input.File1)
	followersFile2 := analyze_followers.ConvertEntriesToFollowers(input.File2)

	data, err := analyze_followers.AnalyzeFollowers(followersFile1, followersFile2)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Example: create FollowerResponse
	response := analyze_followers.FollowerResponse{
		NewFollowers:     data.NewFollowers,
		Unfollowers:      data.Unfollowers,
		TotalFollowers:   len(data.NewFollowers),
		TotalUnfollowers: len(data.Unfollowers),
		DateAnalysis:     "2025-11-13", // or use time.Now().Format(...)
	}

	// Print or log for debugging
	fmt.Printf("Processed %d new followers and %d unfollowers\n",
		response.TotalFollowers, response.TotalUnfollowers)

	// Send JSON response
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}
