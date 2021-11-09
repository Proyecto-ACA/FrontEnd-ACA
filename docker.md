sudo docker build -t dilverpro/lessa-frontend:v3 .
docker build -t lessa-frontend .
# live
docker run -v /media/drubico/Drubi/Git_CLONES/MR_Devart/LESSA_Frontend:/app/ -it -p 3000:3000 lessa-frontend

docker push dilverpro/lessa-frontend:v3

docker-compose up
