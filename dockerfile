# syntax=docker/dockerfile:1
#Step 1 - Build golang application
FROM golang:1.18-alpine AS gobuilder

#RUN apk --no-cache add ca-certificates
WORKDIR /usr/local/go/src/cg-kube-dashboard

COPY go.mod ./
COPY go.sum ./

RUN go mod download

COPY main.go ./
COPY ./handlers/ /usr/local/go/src/cg-kube-dashboard/handlers
COPY ./modules/ /usr/local/go/src/cg-kube-dashboard/modules

RUN ls -laR ./

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 GOFLAGS=-mod=mod go build -ldflags="-w -s" -o /cgKubeDashApi

RUN ls /


#Step 2 - Build a Combined small image
FROM nginx:alpine

#COPY --from=gobuilder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=gobuilder /cgKubeDashApi /cgKubeDashApi

EXPOSE 4343

CMD [ "/cgKubeDashApi" ]

