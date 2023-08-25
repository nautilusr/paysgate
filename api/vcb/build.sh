#!/bin/bash

# Xóa container đang chạy
docker stop vcb
docker rm vcb

# Xóa image cũ
docker rmi vcb:v1.0

# Build image mới
docker build -t vcb:v1.0 .

# Run container mới từ image mới
docker run -d --name vcb -p 8080:80 vcb:v1.0
