FROM java:8

# Install maven
RUN apt-get update
RUN apt-get install -y maven nodejs
RUN apt-get install -y npm
RUN npm install -g bower grunt grunt-cli
RUN ln -s `which nodejs` /usr/bin/node

RUN useradd -ms /bin/bash appuser

EXPOSE 9000
WORKDIR /app

COPY app /app
RUN chown -R appuser /app

USER appuser

ENTRYPOINT mvn spring-boot:run
