FROM nginx:stable

RUN rm /etc/nginx/conf.d/default.conf

COPY ./index.html /usr/share/nginx/html/front/index.html

COPY  ./nginx.conf /etc/nginx

CMD ["nginx", "-g", "daemon off;"]
