package handlers

import (
	"cg-kube-dashboard/modules/deployments"
	ingress "cg-kube-dashboard/modules/ingresses"
	"cg-kube-dashboard/modules/nodes"
	"cg-kube-dashboard/modules/pods"
	"cg-kube-dashboard/modules/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

// ///////////DEPLOYMENTS HANDLERS////////////////////
func GetDeploymentsHandler(c *gin.Context) {
	c.JSON(http.StatusOK, deployments.GetDeployments())
}

// ///////////INGRESS HANDLERS////////////////////
func GetIngressHandler(c *gin.Context) {
	c.JSON(http.StatusOK, ingress.GetIngresses())
}

// ///////////NODES HANDLERS////////////////////
func GetNodesHandler(c *gin.Context) {
	c.JSON(http.StatusOK, nodes.GetNodes())
}

// ///////////PODS HANDLERS////////////////////
func GetPodsHandler(c *gin.Context) {
	c.JSON(http.StatusOK, pods.GetPods())
}

// ///////////SERVICES HANDLERS////////////////////
func GetServicesHandler(c *gin.Context) {
	c.JSON(http.StatusOK, services.GetServices())
}
