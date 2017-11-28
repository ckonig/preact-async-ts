package main

import (
	"log"
	"net/http"
)

func main() {
	staticHandler := http.FileServer(http.Dir("./dist"))
	http.Handle("/", staticHandler)
	serveHome := func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./dist/index.html")
	}
	http.HandleFunc("/async", serveHome)
	http.HandleFunc("/notasync", serveHome)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
