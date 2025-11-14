package main

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"

	"asafz/instagram-service/routes"
)

func recoveryMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if err := recover(); err != nil {
				fmt.Printf("Recovered from panic: %v\n", err)
				http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			}
		}()
		next.ServeHTTP(w, r)
	})
}

func main() {
	r := chi.NewRouter()
	r.Use(recoveryMiddleware)
	routes.RegisterAnalyzeRoutes(r)
	fmt.Println("Instagram Follower Analysis Service")
	fmt.Println("Server is running on port 8088")
	err := http.ListenAndServe(":8088", r)
	if err != nil {
		fmt.Printf("Failed to start server: %v\n", err)
	}
}
