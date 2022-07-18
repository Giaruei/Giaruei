# 项目名称
WEB_NAME="lesschat-frontend"
# 端口号
PORT="3000"
# 服务器上的项目代码库路径
PROJECT_PATH="/data/project/${WEB_NAME}/"


echo '部署开始.....'

cd $PROJECT_PATH

git pull

echo '更新代码'

# 停用旧容器
docker stop ${WEB_NAME}-container

echo '销毁旧容器'

# 删除旧容器
docker rm ${WEB_NAME}-container

# 删除旧镜像
docker rmi ${WEB_NAME}-image:latest

# 创建镜像
docker build . -t ${WEB_NAME}-image:latest
echo '创建镜像'

docker run -p ${PORT}:80 -d --name ${WEB_NAME}-container ${WEB_NAME}-image:latest
echo '以新镜像创建的容器运行!'
