package main

import (
	"cg-kube-dashboard/handlers"
	"os"
	"path"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	r.Use(CORSMiddleware())

	r.NoRoute(func(c *gin.Context) {
		dir, file := path.Split(c.Request.RequestURI)
		ext := filepath.Ext(file)
		if file == "" || ext == "" {
			c.File("./ui/dist/ui/index.html")
		} else {
			c.File("./ui/dist/ui/" + path.Join(dir, file))
		}
	})

	r.GET("/cg-kube-dashboard/deployments/json", handlers.GetDeploymentsHandler)
	r.GET("/cg-kube-dashboard/deployments/:deploymentName", handlers.GetDeploymentHandler)
	r.POST("/cg-kube-dashboard/deployments/update", handlers.UpdateDeploymentHandler)
	r.GET("/cg-kube-dashboard/ingresses/json", handlers.GetIngressHandler)
	r.GET("/cg-kube-dashboard/nodes/json", handlers.GetNodesHandler)
	r.GET("/cg-kube-dashboard/pods/json", handlers.GetPodsHandler)
	r.GET("/cg-kube-dashboard/services/json", handlers.GetServicesHandler)

	httpPort := os.Getenv("HTTP_PORT")
	if httpPort == "" {
		httpPort = "4343"
	}

	err := r.Run(":" + httpPort)
	if err != nil {
		panic(err)
	}
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "DELETE, GET, OPTIONS, POST, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
