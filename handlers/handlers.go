package handlers

import (
	"cg-kube-dashboard/modules/deployments"
	ingress "cg-kube-dashboard/modules/ingresses"
	"cg-kube-dashboard/modules/nodes"
	"cg-kube-dashboard/modules/pods"
	"cg-kube-dashboard/modules/services"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"

	v1 "k8s.io/api/apps/v1"

	"github.com/gin-gonic/gin"
)

// ///////////DEPLOYMENTS HANDLERS////////////////////
func GetDeploymentsHandler(c *gin.Context) {
	c.JSON(http.StatusOK, deployments.GetDeployments())
}

func GetDeploymentHandler(c *gin.Context) {
	deploymentName := c.Param("deploymentName")
	c.JSON(http.StatusOK, deployments.GetDeployment(deploymentName))
}

func UpdateDeploymentHandler(c *gin.Context) {
	Deployment, statusCode, err := convertHTTPDeployment(c.Request.Body)
	if err != nil {
		c.JSON(statusCode, err)
		return
	}
	c.JSON(http.StatusOK, deployments.UpdateDeployment(Deployment))
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

func GetPodHandler(c *gin.Context) {
	podName := c.Param("podName")
	c.JSON(http.StatusOK, pods.GetPod(podName))
}

func GetPodLogsHandler(c *gin.Context) {
	podName := c.Param("deploymentName")
	ContainerName := c.Param("deploymentName")
	c.JSON(http.StatusOK, pods.GetPodLogs(podName, ContainerName))
}

// ///////////SERVICES HANDLERS////////////////////
func GetServicesHandler(c *gin.Context) {
	c.JSON(http.StatusOK, services.GetServices())
}

///////////////CONVERSIONS OF HTTP BODY TO SPECIFIC STRUCTURES////////////////////////////

func convertHTTPDeployment(httpBody io.ReadCloser) (v1.Deployment, int, error) {
	body, err := ioutil.ReadAll(httpBody)
	if err != nil {
		return v1.Deployment{}, http.StatusInternalServerError, err
	}
	defer httpBody.Close()
	var Deployment v1.Deployment
	err = json.Unmarshal(body, &Deployment)
	if err != nil {
		return v1.Deployment{}, http.StatusBadRequest, err
	}
	return Deployment, http.StatusOK, nil
}
