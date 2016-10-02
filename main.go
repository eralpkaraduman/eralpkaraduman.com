package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

type Person struct {
	Id string `json:"id"`
	FirstName string `json:"firstName"`
	LastName string `json:"lastName"`
	Email string `json:"email"`
	Occupation string `json:"occupation"`
	Titles []Title `json:"titles"`
	Skills []string `json:"skills"`
	Projects []Project `json:"projects"`
}

type Title struct {
	Name string `json:"name"`
	Url string `json:"url"`
}

type Project struct {
	Name string `json:"name"`
	Url string `json:"url"`
	Description string `json:"description"`
	Roles []string `json:"roles"`
}

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		log.Fatal("$PORT must be set")
	}

	router := gin.New()
	router.Use(gin.Logger())
	router.LoadHTMLGlob("templates/*.tmpl.html")
	router.Static("/static", "static")

	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.tmpl.html", nil)
	})

	router.GET("/people/eralp", func(c *gin.Context) {

		eralp := Person{
			Id: "0",
			FirstName: "Eralp",
			LastName: "Karaduman",
			Email: "eralpkaraduman@gmail.com",
			Occupation: "Full Stack Mobile Software Developer",
			Titles: []Title{
				Title{Name: "iOS Developer At DealDash", Url: "http://dealdash.com"},
				Title{Name: "Co-Founder At CupsOn.Me", Url: "http://cupson.me"},
				Title{Name: "Half Of Super Damage Games", Url: "http://superdamage.com"},
			},
			Skills: []string{
				"Product Development",
				"Game Design",
				"Swift (iOS)",
				"Objective-C (iOS)",
				"Go",
				"Java (Android)",
				"Node.js",
				"PhP (Symfony)",
				"C# (Unity3D)",
				"Blender 3D",
				"Accepetable Art Skills",
			},
			Projects: []Project{
				Project{
					Name: "Rockmorse",
					Url: "http://superdamage.itch.io/rockmorse",
					Roles: []string {
						"Unity3D C# Programming",
						"Game Design",
					},
					Description: "Desktop/browser video game made with Unity3D for Ludum Dare game making competition",
				},
			},
		}

		c.JSON(200, eralp)
	})

	router.Run(":" + port)
}
