package handlers

import (
	"cg-kube-dashboard/modules/deployments"
	"cg-kube-dashboard/modules/nodes"
	"cg-kube-dashboard/modules/pods"
	"net/http"

	"github.com/gin-gonic/gin"
)

/////////////NODES HANDLERS////////////////////
func GetNodesHandler(c *gin.Context) {
	c.JSON(http.StatusOK, nodes.GetNodes())
}

/////////////PODS HANDLERS////////////////////
func GetPodsHandler(c *gin.Context) {
	c.JSON(http.StatusOK, pods.GetPods())
}

/////////////DEPLOYMENTS HANDLERS////////////////////
func GetDeploymentsHandler(c *gin.Context) {
	c.JSON(http.StatusOK, deployments.GetDeployments())
}
