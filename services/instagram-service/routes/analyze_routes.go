package routes

import (
	"github.com/go-chi/chi/v5"

	"asafz/instagram-service/handlers"
)

// RegisterAnalyzeRoutes registers endpoints for analyze-followers
func RegisterAnalyzeRoutes(r chi.Router) {
	r.Post("/analyze-followers", handlers.AnalyzeFollowers)
}
