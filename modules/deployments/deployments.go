package deployments

import (
	"context"

	v1 "k8s.io/api/apps/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/rest"
)

func GetDeployments() *v1.DeploymentList {

	config, err := rest.InClusterConfig()
	if err != nil {
		panic(err.Error())
	}

	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		panic(err.Error())
	}

	deployments, err := clientset.AppsV1().Deployments("default").List(context.TODO(), metav1.ListOptions{})
	if err != nil {
		panic(err.Error())
	}
	return deployments
}

func GetDeployment(deploymentName string) *v1.Deployment {

	config, err := rest.InClusterConfig()
	if err != nil {
		panic(err.Error())
	}

	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		panic(err.Error())
	}
	opts := metav1.GetOptions{}
	deployment, err := clientset.AppsV1().Deployments("default").Get(context.TODO(), deploymentName, opts)
	if err != nil {
		panic(err.Error())
	}
	return deployment
}

func UpdateDeployment(deployment v1.Deployment) string {
	config, err := rest.InClusterConfig()
	if err != nil {
		panic(err.Error())
	}

	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		panic(err.Error())
	}

	opts := metav1.UpdateOptions{}
	_, err = clientset.AppsV1().Deployments("default").Update(context.TODO(), &deployment, opts)
	if err != nil {
		return err.Error()
	}
	return "Deployment successfully updated"
}
