package main

import (
	//"fmt"
	"log"
	"net/http"
	"os"
	"io/ioutil"
	"path"
	"path/filepath"
	"html/template"

	"github.com/gin-gonic/gin"
	"github.com/russross/blackfriday"
)

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

		c.HTML(http.StatusOK, "base", gin.H{
			"content": markDownContentHTML("home.md"),
		})

	})

	router.Run(":" + port)
}

func markDownContentHTML(mdPath string) template.HTML {
	relativeContentPath := path.Join("content", mdPath)
	absoluteContentPath, _ := filepath.Abs(relativeContentPath)
	contentData, _ := ioutil.ReadFile(absoluteContentPath)
	//contentString := string(contentData)
	htmlContent := blackfriday.MarkdownCommon(contentData)
	htmlString := string(htmlContent)
	return template.HTML(htmlString)
}
